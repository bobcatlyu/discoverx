import React, { useEffect, useState } from 'react';
import { Language, Page } from './types';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import BlogList from './pages/BlogList';
import ProductTypesPage from './pages/ProductTypes';
import TargetsPage from './pages/Targets';
import MechanismsPage from './pages/Mechanisms';
import CustomServicesPage from './pages/CustomServices';
import DocumentsPage from './pages/Documents';
import Contact from './pages/Contact';
import GpcrDetail from './pages/GpcrDetail';
import Glp1rDetail from './pages/Glp1rDetail';
import CytokineDetail from './pages/CytokineDetail';
import DatasheetList from './pages/DatasheetList';
import DatasheetDetail from './pages/DatasheetDetail';
import UserManual from './pages/UserManual';
import QualificationData from './pages/QualificationData';
import ApplicationNote from './pages/ApplicationNote';
import Reference from './pages/Reference';
import OthersDoc from './pages/OthersDoc';
import ToolboxDetail from './pages/ToolboxDetail';
import ReagentsDetail from './pages/ReagentsDetail';
import DetectionKitsDetail from './pages/DetectionKitsDetail';
import CytotoxicityDetail from './pages/CytotoxicityDetail';
import DimerizationDetail from './pages/DimerizationDetail';
import PpiDetail from './pages/PpiDetail';
import SignalPathwayDetail from './pages/SignalPathwayDetail';
import TargetEngagementDetail from './pages/TargetEngagementDetail';
import InternalizationDetail from './pages/InternalizationDetail';
import EnzymeDetail from './pages/EnzymeDetail';
import CalixarDetail from './pages/CalixarDetail';
import TpdDetail from './pages/TpdDetail';
import MembraneDetail from './pages/MembraneDetail';
import CustomCellLineDev from './pages/CustomCellLineDev';
import BioassayDev from './pages/BioassayDev';
import CellLineDetail from './pages/CellLineDetail';
import ExpressKitDetail from './pages/ExpressKitDetail';
import BioassayKitDetail from './pages/BioassayKitDetail';
import SampleTesting from './pages/SampleTesting';
import FunctionalScreening from './pages/FunctionalScreening';
import SearchResults from './pages/SearchResults';
import CheckpointDetail from './pages/CheckpointDetail';
import KinaseDetail from './pages/KinaseDetail';
import NhrDetail from './pages/NhrDetail';
import IonChannelDetail from './pages/IonChannelDetail';
import EpigeneticDetail from './pages/EpigeneticDetail';
import BlogDetail from './pages/BlogDetail';
import { findBlogPost } from './constants';
import { getPagePath, LANGUAGE_CONFIG, SUPPORTED_LANGUAGES, splitLanguageFromPath } from './utils/routes';
import { getLocale } from './locales';

const PAGE_PARENTS: Record<Page, Page | null> = {
  [Page.Home]: null,
  [Page.Products]: Page.Home,
  [Page.Targets]: Page.Home,
  [Page.Applications]: Page.Home,
  [Page.Custom]: Page.Home,
  [Page.Documents]: Page.Home,
  [Page.Contacts]: Page.Home,
  [Page.Search]: Page.Home,
  [Page.BlogList]: Page.Home,
  [Page.CellLine]: Page.Products,
  [Page.ExpressKit]: Page.Products,
  [Page.BioassayKit]: Page.Products,
  [Page.Toolbox]: Page.Products,
  [Page.DetectionKit]: Page.Products,
  [Page.Reagent]: Page.Products,
  [Page.MembranePrep]: Page.Products,
  [Page.Enzyme]: Page.Products,
  [Page.Calixar]: Page.Products,
  [Page.Gpcr]: Page.Targets,
  [Page.Glp1r]: Page.Gpcr,
  [Page.CytokineReceptors]: Page.Targets,
  [Page.CheckpointReceptors]: Page.Targets,
  [Page.KinaseReceptors]: Page.Targets,
  [Page.Nhr]: Page.Targets,
  [Page.IonChannels]: Page.Targets,
  [Page.EpigeneticProteins]: Page.Targets,
  [Page.CytotoxicityDetail]: Page.Applications,
  [Page.DimerizationDetail]: Page.Applications,
  [Page.PpiDetail]: Page.Applications,
  [Page.SignalPathwayDetail]: Page.Applications,
  [Page.TargetEngagementDetail]: Page.Applications,
  [Page.InternalizationDetail]: Page.Applications,
  [Page.TpdDetail]: Page.Applications,
  [Page.CustomAssayDevelopment]: Page.Custom,
  [Page.BioassayDevelopment]: Page.Custom,
  [Page.SampleTesting]: Page.Custom,
  [Page.FunctionalScreening]: Page.Custom,
  [Page.DatasheetList]: Page.Documents,
  [Page.DatasheetDetail]: Page.DatasheetList,
  [Page.UserManual]: Page.Documents,
  [Page.QualificationData]: Page.Documents,
  [Page.ApplicationNote]: Page.Documents,
  [Page.Reference]: Page.Documents,
  [Page.OthersDoc]: Page.Documents,
  [Page.BlogDetail]: Page.Home,
};

const PAGE_META: Partial<Record<Page, { title: string; description: string }>> = {
  [Page.Home]: {
    title: 'DiscoverX 中文网站',
    description: 'DiscoverX China 产品与技术信息平台，涵盖产品类型、靶点、作用机制、开发服务与技术资料。',
  },
  [Page.Products]: {
    title: '产品类型',
    description: '查看 DiscoverX 商业化细胞系、eXpress Kit、Bioassay Kit、试剂与工具产品。',
  },
  [Page.Targets]: {
    title: '靶点选择',
    description: '查看 DiscoverX 在 GPCR、细胞因子受体、检查点受体、RTK、NHR 等方向的产品能力。',
  },
  [Page.Glp1r]: {
    title: 'GLP-1R 靶点方案',
    description: '查看 GLP-1R 相关靶点背景、疾病与药物场景、推荐 assay、产品列表和 user manual。',
  },
  [Page.Applications]: {
    title: '作用机制 Mechanisms',
    description: '查看 DiscoverX 在二聚化、内吞、PPI、信号通路、靶标结合等机制方向的产品方案。',
  },
  [Page.Custom]: {
    title: '开发服务',
    description: '了解 DiscoverX 的 Assay 开发、Bioassay 开发、样品检测与功能筛选服务。',
  },
  [Page.Documents]: {
    title: '产品资料',
    description: '浏览 Datasheet、User Manual、Qualification Data、Application Note 与参考文献。',
  },
  [Page.DatasheetList]: {
    title: 'Datasheets',
    description: '按文件名搜索并打开 DiscoverX 产品说明书。',
  },
  [Page.UserManual]: {
    title: 'User Manuals',
    description: '按文件名搜索并打开 DiscoverX 用户手册。',
  },
  [Page.Search]: {
    title: '站内搜索',
    description: '搜索 DiscoverX 的产品目录、靶点与文档资料。',
  },
  [Page.Contacts]: {
    title: '联系我们',
    description: '联系 DiscoverX China 团队，获取报价、样品、资料和技术支持。',
  },
  [Page.BlogDetail]: {
    title: '最新动态',
    description: '查看 DiscoverX 最新文章与市场动态。',
  },
  [Page.BlogList]: {
    title: '最新动态',
    description: '查看 DiscoverX 产品介绍、技术讨论与应用资料更新。',
  },
};

const TRANSLATED_PAGES = new Set<Page>([
  Page.Home,
  Page.Products,
  Page.Targets,
  Page.Applications,
  Page.Custom,
  Page.Documents,
  Page.Contacts,
]);

interface RouteState {
  language: Language;
  page: Page;
  query: string;
  blogId: string;
}

const DEFAULT_ROUTE: RouteState = {
  language: 'zh',
  page: Page.Home,
  query: '',
  blogId: '',
};

const isPageValue = (value: string): value is Page => {
  return Object.values(Page).includes(value as Page);
};

const LEGACY_PAGE_PATHS: Record<string, Page> = {
  applications: Page.Applications,
  'datasheet-detail': Page.DatasheetDetail,
  'cytotoxicity-detail': Page.CytotoxicityDetail,
  'dimerization-detail': Page.DimerizationDetail,
  'ppi-detail': Page.PpiDetail,
  'signal-pathway-detail': Page.SignalPathwayDetail,
  'target-engagement-detail': Page.TargetEngagementDetail,
  'internalization-detail': Page.InternalizationDetail,
  'tpd-detail': Page.TpdDetail,
};

const routeFromPath = (path: string, rawQueryString = ''): RouteState => {
  const languagePath = splitLanguageFromPath(path);
  const language = languagePath.language;
  const normalizedPath = languagePath.path;
  const params = new URLSearchParams(rawQueryString);

  if (!normalizedPath) {
    return { ...DEFAULT_ROUTE, language };
  }

  if (normalizedPath === Page.Search) {
    return {
      language,
      page: Page.Search,
      query: params.get('q') ?? '',
      blogId: '',
    };
  }

  if (normalizedPath === 'blog-detail') {
    return {
      language,
      page: Page.BlogDetail,
      query: '',
      blogId: params.get('id') ?? '',
    };
  }

  if (normalizedPath === Page.BlogDetail) {
    return {
      language,
      page: Page.BlogDetail,
      query: '',
      blogId: params.get('id') ?? '',
    };
  }

  const legacyPage = LEGACY_PAGE_PATHS[normalizedPath];
  if (legacyPage) {
    return {
      language,
      page: legacyPage,
      query: '',
      blogId: '',
    };
  }

  if (normalizedPath.startsWith('blog/')) {
    const slug = decodeURIComponent(normalizedPath.replace(/^blog\//, ''));
    const post = findBlogPost(slug);
    return {
      language,
      page: Page.BlogDetail,
      query: '',
      blogId: post?.id ?? slug,
    };
  }

  if (isPageValue(normalizedPath)) {
    return {
      language,
      page: normalizedPath,
      query: '',
      blogId: '',
    };
  }

  return { ...DEFAULT_ROUTE, language };
};

const parseRoute = (): RouteState => {
  if (typeof window === 'undefined') {
    return DEFAULT_ROUTE;
  }

  return routeFromPath(window.location.pathname, window.location.search.replace(/^\?/, ''));
};

const parseLegacyHashRoute = (): RouteState | null => {
  if (typeof window === 'undefined' || !window.location.hash.startsWith('#/')) {
    return null;
  }

  const rawHash = window.location.hash.replace(/^#/, '');
  if (!rawHash || rawHash === '/') {
    return DEFAULT_ROUTE;
  }

  const [rawPath, rawQueryString = ''] = rawHash.split('?');
  return routeFromPath(rawPath, rawQueryString);
};

const buildPathRoute = (page: Page, queryOrBlogId?: string, language: Language = 'zh'): string => {
  return getPagePath(page, queryOrBlogId, language);
};

const buildCanonicalRoutePath = (route: RouteState): string => {
  return buildPathRoute(
    route.page,
    route.page === Page.Search ? route.query : route.page === Page.BlogDetail ? route.blogId : undefined,
    route.language
  );
};

const replaceWithCanonicalRoutePath = (route: RouteState) => {
  const canonicalPath = buildCanonicalRoutePath(route);
  const currentPath = `${window.location.pathname}${window.location.search}`;
  if (currentPath !== canonicalPath) {
    window.history.replaceState(null, '', canonicalPath);
  }
};

const setMetaDescription = (content: string) => {
  let meta = document.querySelector('meta[name="description"]');
  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute('name', 'description');
    document.head.appendChild(meta);
  }
  meta.setAttribute('content', content);
};

const setCanonicalUrl = (href: string) => {
  let link = document.querySelector('link[rel="canonical"]');
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }
  link.setAttribute('href', href);
};

const setAlternateLanguageUrls = (route: RouteState) => {
  document.querySelectorAll('link[rel="alternate"][hreflang]').forEach((element) => element.remove());

  const routeValue = route.page === Page.Search ? route.query : route.page === Page.BlogDetail ? route.blogId : undefined;

  SUPPORTED_LANGUAGES.forEach((language) => {
    const link = document.createElement('link');
    link.setAttribute('rel', 'alternate');
    link.setAttribute('hreflang', LANGUAGE_CONFIG[language].htmlLang);
    link.setAttribute('href', `${window.location.origin}${buildPathRoute(route.page, routeValue, language)}`);
    document.head.appendChild(link);
  });

  const defaultLink = document.createElement('link');
  defaultLink.setAttribute('rel', 'alternate');
  defaultLink.setAttribute('hreflang', 'x-default');
  defaultLink.setAttribute('href', `${window.location.origin}${buildPathRoute(route.page, routeValue, 'zh')}`);
  document.head.appendChild(defaultLink);
};

const clearBlogMetadata = () => {
  document
    .querySelectorAll('script[data-schema="blog-post"], meta[property^="og:"], meta[name^="twitter:"], meta[name="keywords"]')
    .forEach((element) => element.remove());
};

const App: React.FC = () => {
  const [route, setRoute] = useState<RouteState>(() => parseLegacyHashRoute() ?? parseRoute());
  const locale = getLocale(route.language);

  useEffect(() => {
    const legacyRoute = parseLegacyHashRoute();
    if (legacyRoute) {
      replaceWithCanonicalRoutePath(legacyRoute);
      setRoute(legacyRoute);
    } else {
      const currentRoute = parseRoute();
      replaceWithCanonicalRoutePath(currentRoute);
      setRoute(currentRoute);
    }

    const handlePopState = () => {
      const nextRoute = parseRoute();
      replaceWithCanonicalRoutePath(nextRoute);
      setRoute(nextRoute);
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [route.language, route.page, route.query, route.blogId]);

  useEffect(() => {
    const locale = getLocale(route.language);
    document.documentElement.lang = LANGUAGE_CONFIG[route.language].htmlLang;
    const meta = locale.meta[route.page] ?? PAGE_META[route.page] ?? locale.meta[Page.Home] ?? PAGE_META[Page.Home];
    const title = meta?.title ?? locale.meta[Page.Home]?.title ?? 'DiscoverX';
    const description = meta?.description ?? locale.meta[Page.Home]?.description ?? PAGE_META[Page.Home]!.description;
    document.title = `${title} | DiscoverX`;
    setMetaDescription(description);
    if (route.page !== Page.BlogDetail) {
      clearBlogMetadata();
      setCanonicalUrl(`${window.location.origin}${buildPathRoute(route.page, route.page === Page.Search ? route.query : undefined, route.language)}`);
    }
    setAlternateLanguageUrls(route);
  }, [route.language, route.page, route.query, route.blogId]);

  const navigateTo = (page: Page, queryOrBlogId?: string) => {
    const nextRoute: RouteState = {
      language: route.language,
      page,
      query: page === Page.Search ? queryOrBlogId ?? '' : '',
      blogId: page === Page.BlogDetail ? queryOrBlogId ?? '' : '',
    };

    setRoute(nextRoute);

    const nextPath = buildPathRoute(page, queryOrBlogId, route.language);
    const currentPath = `${window.location.pathname}${window.location.search}`;
    if (currentPath !== nextPath) {
      window.history.pushState(null, '', nextPath);
    }
  };

  const changeLanguage = (language: Language) => {
    if (language === route.language) {
      return;
    }

    const nextRoute: RouteState = { ...route, language };
    setRoute(nextRoute);

    const nextPath = buildCanonicalRoutePath(nextRoute);
    const currentPath = `${window.location.pathname}${window.location.search}`;
    if (currentPath !== nextPath) {
      window.history.pushState(null, '', nextPath);
    }
  };

  const goBackToUpperLevel = () => {
    const parentPage = PAGE_PARENTS[route.page];
    navigateTo(parentPage ?? Page.Home);
  };

  const renderContent = () => {
    switch (route.page) {
      case Page.Home:
        return <Home language={route.language} onNavigate={navigateTo} />;
      case Page.BlogList:
        return <BlogList onNavigate={navigateTo} />;
      case Page.BlogDetail:
        return <BlogDetail blogId={route.blogId} onNavigate={navigateTo} />;
      case Page.Products:
        return <ProductTypesPage language={route.language} onNavigate={navigateTo} />;
      case Page.Targets:
        return <TargetsPage language={route.language} onNavigate={navigateTo} />;
      case Page.Applications:
        return <MechanismsPage language={route.language} onNavigate={navigateTo} />;
      case Page.Custom:
        return <CustomServicesPage language={route.language} onNavigate={navigateTo} />;
      case Page.Documents:
        return <DocumentsPage language={route.language} onNavigate={navigateTo} />;
      case Page.Contacts:
        return <Contact language={route.language} />;
      case Page.Search:
        return <SearchResults query={route.query} onNavigate={navigateTo} />;
      case Page.CellLine:
        return <CellLineDetail onNavigate={navigateTo} />;
      case Page.ExpressKit:
        return <ExpressKitDetail onNavigate={navigateTo} />;
      case Page.BioassayKit:
        return <BioassayKitDetail />;
      case Page.Toolbox:
        return <ToolboxDetail />;
      case Page.Reagent:
        return <ReagentsDetail />;
      case Page.DetectionKit:
        return <DetectionKitsDetail />;
      case Page.MembranePrep:
        return <MembraneDetail />;
      case Page.Enzyme:
        return <EnzymeDetail />;
      case Page.Calixar:
        return <CalixarDetail />;
      case Page.Gpcr:
        return <GpcrDetail onNavigate={navigateTo} />;
      case Page.Glp1r:
        return <Glp1rDetail />;
      case Page.CytokineReceptors:
        return <CytokineDetail />;
      case Page.CheckpointReceptors:
        return <CheckpointDetail />;
      case Page.KinaseReceptors:
        return <KinaseDetail />;
      case Page.Nhr:
        return <NhrDetail />;
      case Page.IonChannels:
        return <IonChannelDetail />;
      case Page.EpigeneticProteins:
        return <EpigeneticDetail />;
      case Page.DatasheetList:
        return <DatasheetList onNavigate={navigateTo} />;
      case Page.DatasheetDetail:
        return <DatasheetDetail />;
      case Page.UserManual:
        return <UserManual />;
      case Page.QualificationData:
        return <QualificationData />;
      case Page.ApplicationNote:
        return <ApplicationNote />;
      case Page.Reference:
        return <Reference />;
      case Page.OthersDoc:
        return <OthersDoc />;
      case Page.CytotoxicityDetail:
        return <CytotoxicityDetail />;
      case Page.DimerizationDetail:
        return <DimerizationDetail />;
      case Page.PpiDetail:
        return <PpiDetail onNavigate={navigateTo} />;
      case Page.SignalPathwayDetail:
        return <SignalPathwayDetail />;
      case Page.TargetEngagementDetail:
        return <TargetEngagementDetail />;
      case Page.InternalizationDetail:
        return <InternalizationDetail />;
      case Page.TpdDetail:
        return <TpdDetail />;
      case Page.CustomAssayDevelopment:
        return <CustomCellLineDev />;
      case Page.BioassayDevelopment:
        return <BioassayDev />;
      case Page.SampleTesting:
        return <SampleTesting />;
      case Page.FunctionalScreening:
        return <FunctionalScreening />;
      default:
        return <Home language={route.language} onNavigate={navigateTo} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar currentPage={route.page} currentLanguage={route.language} onNavigate={navigateTo} onLanguageChange={changeLanguage} />
      <main className="flex-grow">
        {route.language !== 'zh' && !TRANSLATED_PAGES.has(route.page) && (
          <div className="bg-amber-50 border-b border-amber-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-sm font-medium text-amber-900">
              {locale.common.untranslatedNotice}
            </div>
          </div>
        )}
        {route.page !== Page.Home && route.page !== Page.Search && (
          <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 pt-6 -mb-4 relative z-10">
            <button
              onClick={goBackToUpperLevel}
              className="group inline-flex items-center text-slate-500 transition-all hover:text-[#4B827E]"
              aria-label={locale.common.backUpper}
            >
              <div className="mr-2.5 rounded-full border border-slate-200 bg-white p-1.5 shadow-sm transition-all transform group-hover:border-[#4B827E]/40 group-hover:bg-teal-50 group-active:scale-95">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                </svg>
              </div>
              <span className="text-xs font-bold uppercase tracking-widest">{locale.common.backUpper}</span>
            </button>
            <button
              onClick={() => navigateTo(Page.Home)}
              className="group inline-flex items-center text-slate-500 transition-all hover:text-[#4B827E]"
              aria-label={locale.common.backHome}
            >
              <span className="text-xs font-bold uppercase tracking-widest">{locale.common.backHome}</span>
              <div className="ml-2.5 rounded-full border border-slate-200 bg-white p-1.5 shadow-sm transition-all transform group-hover:border-[#4B827E]/40 group-hover:bg-teal-50 group-active:scale-95">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.3}
                    d="M3 12l9-9 9 9M5 10.5V21h14V10.5M9 21v-6h6v6"
                  />
                </svg>
              </div>
            </button>
          </div>
        )}
        {renderContent()}
      </main>
      <Footer language={route.language} onNavigate={navigateTo} />
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'auto' })}
        className="fixed bottom-6 left-1/2 z-40 -translate-x-1/2 rounded-full bg-[#4B827E] p-3 text-white shadow-lg transition hover:bg-[#3d6b67] active:scale-95"
        aria-label={locale.common.backTop}
        title={locale.common.backTop}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.3} d="M5 15l7-7 7 7" />
        </svg>
      </button>
    </div>
  );
};

export default App;
