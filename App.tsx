import React, { useEffect, useState } from 'react';
import { Page } from './types';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProductTypesPage from './pages/ProductTypes';
import TargetsPage from './pages/Targets';
import MechanismsPage from './pages/Mechanisms';
import CustomServicesPage from './pages/CustomServices';
import DocumentsPage from './pages/Documents';
import Contact from './pages/Contact';
import GpcrDetail from './pages/GpcrDetail';
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

const PAGE_PARENTS: Record<Page, Page | null> = {
  [Page.Home]: null,
  [Page.Products]: Page.Home,
  [Page.Targets]: Page.Home,
  [Page.Applications]: Page.Home,
  [Page.Custom]: Page.Home,
  [Page.Documents]: Page.Home,
  [Page.Contacts]: Page.Home,
  [Page.Search]: Page.Home,
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
    title: '靶点分类',
    description: '查看 DiscoverX 在 GPCR、细胞因子受体、检查点受体、RTK、NHR 等方向的产品能力。',
  },
  [Page.Applications]: {
    title: '作用机制',
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
};

interface RouteState {
  page: Page;
  query: string;
  blogId: string;
}

const DEFAULT_ROUTE: RouteState = {
  page: Page.Home,
  query: '',
  blogId: '',
};

const isPageValue = (value: string): value is Page => {
  return Object.values(Page).includes(value as Page);
};

const parseHashRoute = (): RouteState => {
  if (typeof window === 'undefined') {
    return DEFAULT_ROUTE;
  }

  const rawHash = window.location.hash.replace(/^#/, '');
  if (!rawHash || rawHash === '/') {
    return DEFAULT_ROUTE;
  }

  const [rawPath, rawQueryString = ''] = rawHash.split('?');
  const path = rawPath.replace(/^\/+/, '');
  const params = new URLSearchParams(rawQueryString);

  if (path === Page.Search) {
    return {
      page: Page.Search,
      query: params.get('q') ?? '',
      blogId: '',
    };
  }

  if (path === Page.BlogDetail) {
    return {
      page: Page.BlogDetail,
      query: '',
      blogId: params.get('id') ?? '',
    };
  }

  if (isPageValue(path)) {
    return {
      page: path,
      query: '',
      blogId: '',
    };
  }

  return DEFAULT_ROUTE;
};

const buildHashRoute = (page: Page, queryOrBlogId?: string): string => {
  if (page === Page.Home) {
    return '#/';
  }

  if (page === Page.Search) {
    const params = new URLSearchParams();
    if (queryOrBlogId) {
      params.set('q', queryOrBlogId);
    }
    const suffix = params.toString();
    return suffix ? `#/${Page.Search}?${suffix}` : `#/${Page.Search}`;
  }

  if (page === Page.BlogDetail) {
    const params = new URLSearchParams();
    if (queryOrBlogId) {
      params.set('id', queryOrBlogId);
    }
    const suffix = params.toString();
    return suffix ? `#/${Page.BlogDetail}?${suffix}` : `#/${Page.BlogDetail}`;
  }

  return `#/${page}`;
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

const App: React.FC = () => {
  const [route, setRoute] = useState<RouteState>(() => parseHashRoute());

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(parseHashRoute());
    };

    window.addEventListener('hashchange', handleHashChange);
    if (!window.location.hash) {
      window.history.replaceState(null, '', '#/');
    }

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [route.page, route.query, route.blogId]);

  useEffect(() => {
    document.documentElement.lang = 'zh-CN';
    const meta = PAGE_META[route.page] ?? PAGE_META[Page.Home];
    const title = meta?.title ?? 'DiscoverX 中文网站';
    const description = meta?.description ?? PAGE_META[Page.Home]!.description;
    document.title = `${title} | DiscoverX China`;
    setMetaDescription(description);
  }, [route.page]);

  const navigateTo = (page: Page, queryOrBlogId?: string) => {
    const nextRoute: RouteState = {
      page,
      query: page === Page.Search ? queryOrBlogId ?? '' : '',
      blogId: page === Page.BlogDetail ? queryOrBlogId ?? '' : '',
    };

    setRoute(nextRoute);

    const nextHash = buildHashRoute(page, queryOrBlogId);
    if (window.location.hash !== nextHash) {
      window.location.hash = nextHash;
    }
  };

  const goBackToUpperLevel = () => {
    const parentPage = PAGE_PARENTS[route.page];
    navigateTo(parentPage ?? Page.Home);
  };

  const renderContent = () => {
    switch (route.page) {
      case Page.Home:
        return <Home onNavigate={navigateTo} />;
      case Page.BlogDetail:
        return <BlogDetail blogId={route.blogId} onNavigate={navigateTo} />;
      case Page.Products:
        return <ProductTypesPage onNavigate={navigateTo} />;
      case Page.Targets:
        return <TargetsPage onNavigate={navigateTo} />;
      case Page.Applications:
        return <MechanismsPage onNavigate={navigateTo} />;
      case Page.Custom:
        return <CustomServicesPage onNavigate={navigateTo} />;
      case Page.Documents:
        return <DocumentsPage onNavigate={navigateTo} />;
      case Page.Contacts:
        return <Contact />;
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
        return <GpcrDetail />;
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
        return <Home onNavigate={navigateTo} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar currentPage={route.page} onNavigate={navigateTo} />
      <main className="flex-grow">
        {route.page !== Page.Home && route.page !== Page.Search && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 -mb-4 relative z-10">
            <button
              onClick={goBackToUpperLevel}
              className="group inline-flex items-center text-slate-500 transition-all hover:text-[#4B827E]"
              aria-label="返回上一级"
            >
              <div className="mr-2.5 rounded-full border border-slate-200 bg-white p-1.5 shadow-sm transition-all transform group-hover:border-[#4B827E]/40 group-hover:bg-teal-50 group-active:scale-95">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                </svg>
              </div>
              <span className="text-xs font-bold uppercase tracking-widest">返回上一级</span>
            </button>
          </div>
        )}
        {renderContent()}
      </main>
      <Footer />
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 z-40 rounded-full bg-[#4B827E] p-3 text-white shadow-lg transition transform hover:scale-110 hover:bg-[#3d6b67] active:scale-95"
        aria-label="返回顶部"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </div>
  );
};

export default App;
