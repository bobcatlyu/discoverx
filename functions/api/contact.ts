const RESEND_ENDPOINT = 'https://api.resend.com/emails';

interface ContactPayload {
  name?: string;
  email?: string;
  company?: string;
  region?: string;
  topic?: string;
  language?: string;
  message?: string;
  website?: string;
}

interface Env {
  RESEND_API_KEY?: string;
  CONTACT_TO_EMAIL?: string;
  CONTACT_FROM_EMAIL?: string;
}

const json = (body: Record<string, unknown>, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
  });

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

export const onRequestPost = async ({ request, env }: { request: Request; env: Env }) => {
  try {
    const payload = (await request.json()) as ContactPayload;
    const name = payload.name?.trim() ?? '';
    const email = payload.email?.trim() ?? '';
    const company = payload.company?.trim() ?? '';
    const region = payload.region?.trim() ?? '';
    const topic = payload.topic?.trim() ?? '';
    const language = payload.language?.trim() ?? '';
    const message = payload.message?.trim() ?? '';

    if (payload.website) {
      return json({ ok: true });
    }

    if (!name || !email || !message) {
      return json({ ok: false, error: 'MISSING_REQUIRED_FIELDS' }, 400);
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return json({ ok: false, error: 'INVALID_EMAIL' }, 400);
    }

    const apiKey = env.RESEND_API_KEY;
    const toEmail = env.CONTACT_TO_EMAIL;
    const fromEmail = env.CONTACT_FROM_EMAIL;

    if (!apiKey || !toEmail || !fromEmail) {
      return json({ ok: false, error: 'EMAIL_SERVICE_NOT_CONFIGURED' }, 500);
    }

    const subject = `[DiscoverX Contact] ${topic || 'Website inquiry'} - ${name}`;
    const text = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Company: ${company || '-'}`,
      `Region: ${region || '-'}`,
      `Preferred language: ${language || '-'}`,
      `Topic: ${topic || '-'}`,
      '',
      'Message:',
      message,
    ].join('\n');

    const html = `
      <h2>DiscoverX website contact form</h2>
      <table cellpadding="8" cellspacing="0" style="border-collapse:collapse;border:1px solid #d8e0ea;">
        <tr><td><strong>Name</strong></td><td>${escapeHtml(name)}</td></tr>
        <tr><td><strong>Email</strong></td><td>${escapeHtml(email)}</td></tr>
        <tr><td><strong>Company</strong></td><td>${escapeHtml(company || '-')}</td></tr>
        <tr><td><strong>Region</strong></td><td>${escapeHtml(region || '-')}</td></tr>
        <tr><td><strong>Preferred language</strong></td><td>${escapeHtml(language || '-')}</td></tr>
        <tr><td><strong>Topic</strong></td><td>${escapeHtml(topic || '-')}</td></tr>
      </table>
      <h3>Message</h3>
      <p style="white-space:pre-wrap;">${escapeHtml(message)}</p>
    `;

    const response = await fetch(RESEND_ENDPOINT, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: email,
        subject,
        text,
        html,
      }),
    });

    if (!response.ok) {
      return json({ ok: false, error: 'EMAIL_SEND_FAILED' }, 502);
    }

    return json({ ok: true });
  } catch {
    return json({ ok: false, error: 'BAD_REQUEST' }, 400);
  }
};

export const onRequest = () =>
  json(
    {
      ok: false,
      error: 'METHOD_NOT_ALLOWED',
    },
    405,
  );
