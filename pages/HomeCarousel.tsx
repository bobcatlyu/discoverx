import React, { useMemo, useState } from 'react';
import { BLOG_POSTS, DEFAULT_PINNED_BLOG_ID, getBlogPath } from '../constants';
import { Language, Page } from '../types';
import { getPagePath } from '../utils/routes';
import { getLocale } from '../locales';

interface HomeProps {
  language: Language;
  onNavigate?: (page: Page, blogId?: string) => void;
}

const Home: React.FC<HomeProps> = ({ language, onNavigate }) => {
  const locale = getLocale(language);
  const home = locale.home;
  const latestPosts = useMemo(() => {
    return [...BLOG_POSTS]
      .sort((a, b) => {
        if (a.id === DEFAULT_PINNED_BLOG_ID) return -1;
        if (b.id === DEFAULT_PINNED_BLOG_ID) return 1;
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      })
      .slice(0, 5);
  }, []);
  const [activePostIndex, setActivePostIndex] = useState(0);
  const activePost = latestPosts[activePostIndex];
  const contentCards = home.cards.filter((card) => card.id !== 'latest');

  const handleCardClick = (event: React.MouseEvent<HTMLAnchorElement>, page: Page) => {
    if (!onNavigate) {
      return;
    }

    event.preventDefault();
    onNavigate(page);
  };

  const moveLatest = (direction: -1 | 1) => {
    setActivePostIndex((current) => (current + direction + latestPosts.length) % latestPosts.length);
  };

  const handleLatestClick = (event: React.MouseEvent<HTMLAnchorElement>, postId: string) => {
    if (!onNavigate) {
      return;
    }

    event.preventDefault();
    onNavigate(Page.BlogDetail, postId);
  };

  return (
    <div className="space-y-12 pb-20">
      <section className="relative min-h-[360px] overflow-hidden text-white">
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#4B827E] to-[#1a3d3a] opacity-90"></div>
        <img
          src="/pic/DiscoverX Logo_Blue Discover Text w BlueOrange X.png"
          className="absolute inset-0 h-full w-full object-cover"
          alt="DiscoverX Logo"
        />
        <div className="relative z-20 mx-auto flex min-h-[360px] max-w-7xl flex-col justify-center px-4 py-10 sm:px-6 lg:px-8">
          <h1 className="mb-8 text-center text-4xl font-extrabold leading-tight drop-shadow-xl md:text-6xl">
            {home.heroTitle}
          </h1>

          {language === 'zh' && (
            <div className="mx-auto grid w-full max-w-5xl items-center gap-8 md:grid-cols-[1fr_auto]">
              <div className="space-y-3 text-center md:text-left">
                <p className="text-base font-semibold text-teal-50 md:text-lg">
                  {home.globalSiteLabel}{' '}
                  <a
                    href="https://www.discoverx.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-white/50 underline-offset-4 transition hover:text-teal-100"
                  >
                    https://www.discoverx.com
                  </a>
                </p>
                <p className="text-sm leading-relaxed text-white/90 md:text-base">
                  {home.companyIntro}
                </p>
                <p className="text-sm text-white/85 md:text-base">{home.address}</p>
                <p className="text-sm text-white/85 md:text-base">
                  {home.emailLabel}
                  <a
                    href="mailto:CustomerService_DRX_China@cpt.eurofinscn.com"
                    className="break-all underline decoration-white/50 underline-offset-4 transition hover:text-teal-100"
                  >
                    CustomerService_DRX_China@cpt.eurofinscn.com
                  </a>
                </p>
              </div>

              <div className="mx-auto w-32 rounded-lg bg-white p-2 shadow-xl md:w-36">
                <img src="/pic/qrcode_for_gh_97a0bd4fdaad_258.jpg" alt="DiscoverX 微信二维码" className="h-auto w-full" />
              </div>
            </div>
          )}
        </div>
      </section>

      {activePost && (
        <section className="bg-white">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="border-y border-slate-200 py-8 md:py-10">
              <div className="mb-6 text-center">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#4B827E]">Latest Update</p>
                  <h2 className="mt-2 text-2xl font-extrabold text-slate-900 md:text-3xl">最新动态</h2>
                </div>
              </div>

              <div className="grid grid-cols-[44px_1fr_44px] items-center gap-3 sm:gap-5">
                <button
                  type="button"
                  onClick={() => moveLatest(-1)}
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition hover:border-[#4B827E] hover:text-[#4B827E]"
                  aria-label="上一条最新动态"
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                <a
                  href={getBlogPath(activePost)}
                  onClick={(event) => handleLatestClick(event, activePost.id)}
                  className="group block min-h-[240px] rounded-lg border border-slate-200 bg-slate-50 p-6 text-center shadow-sm transition hover:border-teal-200 hover:bg-white hover:shadow-md md:p-10"
                >
                  <div className="mb-5 flex flex-wrap items-center justify-center gap-3">
                    <span className="rounded-full bg-teal-50 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[#4B827E]">
                      {activePost.category}
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">{activePost.date}</span>
                  </div>

                  <h3 className="mx-auto max-w-3xl text-2xl font-extrabold leading-tight text-slate-900 transition-colors group-hover:text-[#4B827E] md:text-3xl">
                    {activePost.title}
                  </h3>
                  <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-slate-600 md:text-lg">{activePost.summary}</p>
                  <span className="mt-8 flex items-center justify-center text-xs font-bold uppercase tracking-wider text-[#4B827E] transition-transform group-hover:translate-x-1">
                    READ MORE
                    <svg className="ml-1 h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </a>

                <button
                  type="button"
                  onClick={() => moveLatest(1)}
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition hover:border-[#4B827E] hover:text-[#4B827E]"
                  aria-label="下一条最新动态"
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              <div className="mt-5 flex justify-center gap-2">
                {latestPosts.map((post, index) => (
                  <button
                    key={post.id}
                    type="button"
                    onClick={() => setActivePostIndex(index)}
                    className={`h-2.5 rounded-full transition-all ${index === activePostIndex ? 'w-8 bg-[#4B827E]' : 'w-2.5 bg-slate-300 hover:bg-slate-400'}`}
                    aria-label={`查看第 ${index + 1} 条最新动态`}
                    aria-current={index === activePostIndex}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 border-b border-slate-200 pb-4">
          <h2 className="text-2xl font-bold uppercase tracking-tight text-slate-800">{home.contentNavTitle}</h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {contentCards.map((card) => (
            <a
              key={card.title}
              href={getPagePath(card.page ?? Page.Home, undefined, language)}
              onClick={(event) => handleCardClick(event, card.page ?? Page.Home)}
              className="group overflow-hidden rounded-lg border border-slate-200 bg-white text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="h-44 overflow-hidden">
                <img src={card.imageUrl} alt={card.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <h3 className="mb-3 text-xl font-bold text-slate-800 transition-colors group-hover:text-[#4B827E]">{card.title}</h3>
                <p className="min-h-[4.5rem] text-sm leading-relaxed text-slate-600">{card.description}</p>
                <span className="mt-5 flex items-center text-xs font-bold uppercase tracking-wider text-[#4B827E] transition-transform group-hover:translate-x-1">
                  {locale.common.enter}
                  <svg className="ml-1 h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50 py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-12 px-4 text-center sm:px-6 md:grid-cols-4 lg:px-8">
          {home.stats.map((stat) => (
            <div key={stat.label}>
              <div className="mb-2 text-5xl font-black text-[#4B827E]">{stat.value}</div>
              <div className="text-xs font-bold uppercase tracking-widest text-slate-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
