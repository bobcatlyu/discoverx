
import React, { useState, useEffect } from 'react';
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
  
  // Product Sub-pages
  [Page.CellLine]: Page.Products,
  [Page.ExpressKit]: Page.Products,
  [Page.BioassayKit]: Page.Products,
  [Page.Toolbox]: Page.Products,
  [Page.DetectionKit]: Page.Products,
  [Page.Reagent]: Page.Products,
  [Page.MembranePrep]: Page.Products,
  [Page.Enzyme]: Page.Products,
  [Page.Calixar]: Page.Products,

  // Target Sub-pages
  [Page.Gpcr]: Page.Targets,
  [Page.CytokineReceptors]: Page.Targets,
  [Page.CheckpointReceptors]: Page.Targets,
  [Page.KinaseReceptors]: Page.Targets,
  [Page.Nhr]: Page.Targets,
  [Page.IonChannels]: Page.Targets,
  [Page.EpigeneticProteins]: Page.Targets,

  // Mechanism Sub-pages
  [Page.CytotoxicityDetail]: Page.Applications,
  [Page.DimerizationDetail]: Page.Applications,
  [Page.PpiDetail]: Page.Applications,
  [Page.SignalPathwayDetail]: Page.Applications,
  [Page.TargetEngagementDetail]: Page.Applications,
  [Page.InternalizationDetail]: Page.Applications,
  [Page.TpdDetail]: Page.Applications,

  // Custom Sub-pages
  [Page.CustomAssayDevelopment]: Page.Custom,
  [Page.BioassayDevelopment]: Page.Custom,
  [Page.SampleTesting]: Page.Custom,
  [Page.FunctionalScreening]: Page.Custom,

  // Resource Sub-pages
  [Page.DatasheetList]: Page.Documents,
  [Page.DatasheetDetail]: Page.DatasheetList,
  [Page.UserManual]: Page.Documents,
  [Page.QualificationData]: Page.Documents,
  [Page.ApplicationNote]: Page.Documents,
  [Page.Reference]: Page.Documents,
  [Page.OthersDoc]: Page.Documents,

  // Blog
  [Page.BlogDetail]: Page.Home,
};

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.Home);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentBlogId, setCurrentBlogId] = useState<string>('');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage, searchQuery]);

  const navigateTo = (page: Page, queryOrBlogId?: string) => {
    if (page === Page.Search && queryOrBlogId) {
      setSearchQuery(queryOrBlogId);
    } else if (page === Page.BlogDetail && queryOrBlogId) {
      setCurrentBlogId(queryOrBlogId);
    }
    setCurrentPage(page);
  };

  const goBackToUpperLevel = () => {
    const parentPage = PAGE_PARENTS[currentPage];
    if (parentPage) {
      setCurrentPage(parentPage);
    } else {
      setCurrentPage(Page.Home);
    }
  };

  const renderContent = () => {
    switch (currentPage) {
      case Page.Home:
        return <Home onNavigate={navigateTo} />;
      case Page.BlogDetail:
        return <BlogDetail blogId={currentBlogId} onNavigate={navigateTo} />;
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
        return <SearchResults query={searchQuery} onNavigate={navigateTo} />;
      
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
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar currentPage={currentPage} onNavigate={navigateTo} />
      <main className="flex-grow">
        {(currentPage !== Page.Home && currentPage !== Page.Search) && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 -mb-4 relative z-10">
            <button 
              onClick={goBackToUpperLevel}
              className="group inline-flex items-center text-slate-500 hover:text-[#4B827E] transition-all"
            >
              <div className="mr-2.5 p-1.5 rounded-full bg-white shadow-sm border border-slate-200 group-hover:border-[#4B827E]/40 group-hover:bg-teal-50 transition-all transform group-active:scale-95">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                </svg>
              </div>
              <span className="text-xs font-bold uppercase tracking-widest">返回上一级 / Back to Parent</span>
            </button>
          </div>
        )}
        {renderContent()}
      </main>
      <Footer />
      <button 
        onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
        className="fixed bottom-8 right-8 bg-[#4B827E] text-white p-3 rounded-full shadow-lg hover:bg-[#3d6b67] transition z-40 transform hover:scale-110 active:scale-95"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </div>
  );
};

export default App;
