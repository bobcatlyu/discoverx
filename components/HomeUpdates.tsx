import React from 'react';
import { BLOG_POSTS, DEFAULT_PINNED_BLOG_ID } from '../constants';
import { Page, Language } from '../types';
import { getPagePath } from '../utils/routes';

interface HomeUpdatesProps {
  language: Language;
  onNavigate?: (page: Page, value?: string) => void;
}

export default function HomeUpdates({ language, onNavigate }: HomeUpdatesProps) {
  const posts = [...BLOG_POSTS].sort((a, b) => b.date.localeCompare(a.date));
  const latest = posts[0];
  if (!latest) return null;
  const pinned = posts.find((post) => post.id === DEFAULT_PINNED_BLOG_ID && post.id !== latest.id);
  const recent = posts.filter((post) => post.id !== latest.id && post.id !== pinned?.id);
  const sidePosts = pinned ? [pinned, ...recent.slice(0, 2)] : recent.slice(0, 3);
  const labels = {
    zh: { title: '最新动态', all: '查看全部', latest: '最新发布', pinned: '置顶', read: '阅读文章' },
    ja: { title: '最新情報', all: 'すべて見る', latest: '新着', pinned: '注目記事', read: '記事を読む' },
    ko: { title: '최신 소식', all: '전체 보기', latest: '새 글', pinned: '고정', read: '글 읽기' },
  }[language];
  const navigate = (event: React.MouseEvent<HTMLAnchorElement>, page: Page, id?: string) => {
    if (!onNavigate || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    onNavigate(page, id);
  };

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-labelledby="home-updates-title">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-4">
        <h2 id="home-updates-title" className="text-2xl font-bold text-slate-900">
          {labels.title} <span className="ml-2 text-base font-normal text-slate-500">Updates</span>
        </h2>
        <a href={getPagePath(Page.BlogList, undefined, language)} onClick={(event) => navigate(event, Page.BlogList)} className="text-sm font-semibold text-[#4B827E] hover:underline">
          {labels.all} <span aria-hidden="true">&rarr;</span>
        </a>
      </div>
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:gap-10">
        <a href={getPagePath(Page.BlogDetail, latest.id, language)} onClick={(event) => navigate(event, Page.BlogDetail, latest.id)} className="group flex min-w-0 flex-col rounded-lg border border-slate-200 bg-white p-6 text-left transition hover:border-[#4B827E] hover:shadow-md sm:p-8">
          <div className="mb-6 flex flex-wrap items-center gap-3 text-xs">
            <span className="font-bold text-[#4B827E]">{labels.latest}</span>
            <span className="text-slate-500">{latest.category}</span>
            <time dateTime={latest.date} className="text-slate-500">{latest.date}</time>
          </div>
          <h3 className="break-words text-2xl font-bold leading-snug text-slate-900 transition group-hover:text-[#4B827E] sm:text-3xl">{latest.title}</h3>
          <p className="mb-8 mt-5 text-base leading-7 text-slate-600">{latest.summary}</p>
          {latest.imageUrl && (
            <div className="mb-6 flex w-full items-center justify-center overflow-hidden rounded-lg bg-slate-50 p-3 sm:p-4">
              <img
                src={latest.imageUrl}
                alt={`${latest.title}配图`}
                loading="lazy"
                decoding="async"
                className="block h-auto max-h-64 w-full object-contain sm:max-h-72"
              />
            </div>
          )}
          <span className="mt-auto text-sm font-bold text-[#4B827E]">{labels.read} <span aria-hidden="true">&rarr;</span></span>
        </a>
        <div className="min-w-0 divide-y divide-slate-200 border-y border-slate-200">
          {sidePosts.map((post) => (
            <a key={post.id} href={getPagePath(Page.BlogDetail, post.id, language)} onClick={(event) => navigate(event, Page.BlogDetail, post.id)} className="group block py-5 text-left">
              <div className="mb-2 flex flex-wrap items-center gap-3 text-xs">
                {post.id === pinned?.id && <span className="font-bold text-amber-700">{labels.pinned}</span>}
                <span className="text-slate-500">{post.category}</span>
                <time dateTime={post.date} className="text-slate-500">{post.date}</time>
              </div>
              <h3 className="break-words text-lg font-bold leading-snug text-slate-900 transition group-hover:text-[#4B827E]">{post.title}</h3>
              <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-600">{post.summary}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
