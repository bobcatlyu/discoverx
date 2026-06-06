import React from 'react';
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

  const handleCardClick = (event: React.MouseEvent<HTMLAnchorElement>, page: Page) => {
    if (!onNavigate) {
      return;
    }

    event.preventDefault();
    onNavigate(page);
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

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 border-b border-slate-200 pb-4">
          <h2 className="text-2xl font-bold uppercase tracking-tight text-slate-800">{home.contentNavTitle}</h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {home.cards.map((card) => (
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
