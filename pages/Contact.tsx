import React from 'react';
import { Language } from '../types';

interface ContactProps {
  language?: Language;
}

const companyEmail = 'CustomerService_DRX_China@cpt.eurofinscn.com';
const address = '上海市闵行区浦江镇陈行公路 2168 号 8 号楼';

const contactBlocks = [
  {
    lang: '中文',
    title: '联系我们',
    intro: '欧陆生物制品（上海）有限公司是 Eurofins 集团在中国的全资子公司，全面负责 DiscoverX 系列产品在中国的销售、市场推广和技术支持。',
    prompt: '如需获取报价、索取样品或咨询技术问题，请直接发送邮件，或扫描右侧微信二维码，我们会尽快与您联系。',
    officeTitle: '上海办公室',
    emailTitle: '电子邮箱',
    addressLabel: '地址',
  },
  {
    lang: '日本語',
    title: 'お問い合わせ',
    intro: '欧陆生物制品（上海）有限公司はEurofinsグループの中国法人であり、中国市場におけるDiscoverX製品の販売、マーケティング、技術サポートを担当しています。',
    prompt: '見積、サンプル、製品資料、技術相談については、下記メールアドレスまたはWeChat QRコードからお問い合わせください。',
    officeTitle: '上海オフィス',
    emailTitle: 'メール',
    addressLabel: '住所',
  },
  {
    lang: '한국어',
    title: '문의',
    intro: '欧陆生物制品（上海）有限公司은 Eurofins 그룹의 중국 법인으로, 중국 시장에서 DiscoverX 제품의 판매, 마케팅, 기술 지원을 담당합니다.',
    prompt: '견적, 샘플 요청, 제품 자료 또는 기술 상담이 필요하시면 아래 이메일 또는 WeChat QR 코드를 통해 문의해 주십시오.',
    officeTitle: '상하이 사무소',
    emailTitle: '이메일',
    addressLabel: '주소',
  },
];

const Contact: React.FC<ContactProps> = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-12">
        <p className="mb-3 text-sm font-bold uppercase tracking-widest text-[#4B827E]">Contact</p>
        <h2 className="text-3xl font-extrabold text-slate-900 md:text-4xl">联系我们 / お問い合わせ / 문의</h2>
        <p className="mt-4 max-w-3xl text-slate-600">
          This contact page is shared across all language paths. Chinese, Japanese, and Korean contact information is shown together for easy reference.
        </p>
      </div>

      <div className="grid gap-10 lg:grid-cols-[1fr_360px]">
        <div className="grid gap-6">
          {contactBlocks.map((block) => (
            <section key={block.lang} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-4 flex items-center justify-between gap-4 border-b border-slate-100 pb-4">
                <h3 className="text-2xl font-bold text-slate-900">{block.title}</h3>
                <span className="rounded-full bg-teal-50 px-3 py-1 text-xs font-bold text-[#4B827E]">{block.lang}</span>
              </div>

              <div className="space-y-4 text-slate-600">
                <p className="leading-relaxed">{block.intro}</p>
                <p className="leading-relaxed">{block.prompt}</p>
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <div className="flex items-start">
                  <div className="mr-4 rounded-lg border border-teal-100 bg-teal-50 p-3 text-[#4B827E]">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800">{block.officeTitle}</h4>
                    <p className="text-sm text-slate-600">
                      {block.addressLabel}: {address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 rounded-lg border border-teal-100 bg-teal-50 p-3 text-[#4B827E]">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800">{block.emailTitle}</h4>
                    <a href={`mailto:${companyEmail}`} className="break-all text-sm text-[#4B827E] underline decoration-teal-200 underline-offset-4 transition hover:text-[#3d6b67]">
                      {companyEmail}
                    </a>
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>

        <aside className="lg:sticky lg:top-28 lg:self-start">
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-lg">
            <img
              src="/pic/qrcode_for_gh_97a0bd4fdaad_430.jpg"
              className="h-auto w-full object-contain"
              alt="DiscoverX WeChat QR code"
            />
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Contact;
