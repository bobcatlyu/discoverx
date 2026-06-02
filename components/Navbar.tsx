import React, { useState } from 'react';
import { Language, Page } from '../types';
import { getPagePath, LANGUAGE_CONFIG, SUPPORTED_LANGUAGES } from '../utils/routes';
import { getLocale } from '../locales';

interface NavSubItem {
  label: string;
  page: Page;
}

interface NavItem {
  id: Page;
  label: string;
  subItems?: NavSubItem[];
}

interface NavbarProps {
  currentPage: Page;
  currentLanguage: Language;
  onNavigate: (page: Page, query?: string) => void;
  onLanguageChange: (language: Language) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, currentLanguage, onNavigate, onLanguageChange }) => {
  const [activeDropdown, setActiveDropdown] = useState<Page | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedMobileItems, setExpandedMobileItems] = useState<Record<string, boolean>>({});
  const [searchVal, setSearchVal] = useState('');
  const locale = getLocale(currentLanguage);

  const navItems: NavItem[] = [
    { id: Page.Home, label: locale.nav.home },
    {
      id: Page.Products,
      label: locale.nav.products,
      subItems: [
        { label: locale.navSubItems[Page.CellLine]!, page: Page.CellLine },
        { label: locale.navSubItems[Page.ExpressKit]!, page: Page.ExpressKit },
        { label: locale.navSubItems[Page.BioassayKit]!, page: Page.BioassayKit },
        { label: locale.navSubItems[Page.Toolbox]!, page: Page.Toolbox },
        { label: locale.navSubItems[Page.DetectionKit]!, page: Page.DetectionKit },
        { label: locale.navSubItems[Page.Reagent]!, page: Page.Reagent },
        { label: locale.navSubItems[Page.MembranePrep]!, page: Page.MembranePrep },
        { label: locale.navSubItems[Page.Enzyme]!, page: Page.Enzyme },
        { label: locale.navSubItems[Page.Calixar]!, page: Page.Calixar },
      ],
    },
    {
      id: Page.Targets,
      label: locale.nav.targets,
      subItems: [
        { label: locale.navSubItems[Page.Gpcr]!, page: Page.Gpcr },
        { label: locale.navSubItems[Page.CytokineReceptors]!, page: Page.CytokineReceptors },
        { label: locale.navSubItems[Page.CheckpointReceptors]!, page: Page.CheckpointReceptors },
        { label: locale.navSubItems[Page.KinaseReceptors]!, page: Page.KinaseReceptors },
        { label: locale.navSubItems[Page.Nhr]!, page: Page.Nhr },
        { label: locale.navSubItems[Page.IonChannels]!, page: Page.IonChannels },
        { label: locale.navSubItems[Page.EpigeneticProteins]!, page: Page.EpigeneticProteins },
      ],
    },
    {
      id: Page.Applications,
      label: locale.nav.mechanisms,
      subItems: [
        { label: locale.navSubItems[Page.DimerizationDetail]!, page: Page.DimerizationDetail },
        { label: locale.navSubItems[Page.InternalizationDetail]!, page: Page.InternalizationDetail },
        { label: locale.navSubItems[Page.PpiDetail]!, page: Page.PpiDetail },
        { label: locale.navSubItems[Page.SignalPathwayDetail]!, page: Page.SignalPathwayDetail },
        { label: locale.navSubItems[Page.CytotoxicityDetail]!, page: Page.CytotoxicityDetail },
        { label: locale.navSubItems[Page.TpdDetail]!, page: Page.TpdDetail },
        { label: locale.navSubItems[Page.TargetEngagementDetail]!, page: Page.TargetEngagementDetail },
      ],
    },
    {
      id: Page.Custom,
      label: locale.nav.custom,
      subItems: [
        { label: locale.navSubItems[Page.CustomAssayDevelopment]!, page: Page.CustomAssayDevelopment },
        { label: locale.navSubItems[Page.BioassayDevelopment]!, page: Page.BioassayDevelopment },
        { label: locale.navSubItems[Page.SampleTesting]!, page: Page.SampleTesting },
        { label: locale.navSubItems[Page.FunctionalScreening]!, page: Page.FunctionalScreening },
      ],
    },
    {
      id: Page.Documents,
      label: locale.nav.documents,
      subItems: [
        { label: locale.navSubItems[Page.DatasheetList]!, page: Page.DatasheetList },
        { label: locale.navSubItems[Page.UserManual]!, page: Page.UserManual },
        { label: locale.navSubItems[Page.QualificationData]!, page: Page.QualificationData },
        { label: locale.navSubItems[Page.ApplicationNote]!, page: Page.ApplicationNote },
        { label: locale.navSubItems[Page.Reference]!, page: Page.Reference },
      ],
    },
    { id: Page.Contacts, label: locale.nav.contacts },
  ];

  const handlePageLink = (event: React.MouseEvent<HTMLAnchorElement>, page: Page) => {
    event.preventDefault();
    onNavigate(page);
    setActiveDropdown(null);
    setIsMobileMenuOpen(false);
  };

  const toggleMobileItem = (id: string) => {
    setExpandedMobileItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const executeSearch = (e?: React.FormEvent) => {
    if (e) {
      e.preventDefault();
    }

    const trimmed = searchVal.trim();
    if (trimmed) {
      onNavigate(Page.Search, trimmed);
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className="bg-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 md:py-4">
        <div className="flex items-center justify-between gap-4">
          <a
            href={getPagePath(Page.Home, undefined, currentLanguage)}
            onClick={(event) => handlePageLink(event, Page.Home)}
            className="flex items-center shrink-0"
            aria-label={locale.common.backHome}
          >
            <img
              src="/pic/DiscoverX Logo_Blue Discover Text w BlueOrange X.png"
              alt="DiscoverX Logo"
              className="h-8 md:h-10 w-auto object-contain"
            />
          </a>

          <form onSubmit={executeSearch} className="hidden md:flex flex-grow max-w-xl items-center border-b border-slate-300 pb-1">
            <input
              type="text"
              placeholder={locale.nav.searchPlaceholder}
              className="flex-grow px-2 py-1 text-sm focus:outline-none"
              value={searchVal}
              onChange={(e) => setSearchVal(e.target.value)}
            />
            <button type="submit" className="p-2 text-slate-400 hover:text-[#4B827E] transition-colors" aria-label={locale.nav.searchLabel}>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </form>

          <div className="hidden md:flex items-center rounded-full border border-slate-200 bg-slate-50 p-1" aria-label={locale.common.languageLabel}>
            {SUPPORTED_LANGUAGES.map((language) => (
              <button
                key={language}
                type="button"
                onClick={() => onLanguageChange(language)}
                className={`rounded-full px-3 py-1.5 text-xs font-bold transition ${
                  currentLanguage === language ? 'bg-[#4B827E] text-white shadow-sm' : 'text-slate-600 hover:bg-white hover:text-[#4B827E]'
                }`}
                aria-pressed={currentLanguage === language}
              >
                {LANGUAGE_CONFIG[language].label}
              </button>
            ))}
          </div>

          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-[#1C2C5E] hover:bg-slate-100 rounded-lg transition-colors"
              aria-label={isMobileMenuOpen ? locale.nav.closeMenu : locale.nav.openMenu}
            >
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
        </div>

        <form onSubmit={executeSearch} className="mt-3 flex md:hidden items-center border-b border-slate-300 pb-1">
          <input
            type="text"
            placeholder={locale.nav.mobileSearchPlaceholder}
            className="flex-grow px-2 py-1 text-sm focus:outline-none"
            value={searchVal}
            onChange={(e) => setSearchVal(e.target.value)}
          />
          <button type="submit" className="p-2 text-slate-400" aria-label={locale.nav.searchLabel}>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </form>
        <div className="mt-3 flex md:hidden items-center rounded-full border border-slate-200 bg-slate-50 p-1" aria-label={locale.common.languageLabel}>
          {SUPPORTED_LANGUAGES.map((language) => (
            <button
              key={language}
              type="button"
              onClick={() => onLanguageChange(language)}
              className={`flex-1 rounded-full px-3 py-1.5 text-xs font-bold transition ${
                currentLanguage === language ? 'bg-[#4B827E] text-white shadow-sm' : 'text-slate-600 hover:bg-white hover:text-[#4B827E]'
              }`}
              aria-pressed={currentLanguage === language}
            >
              {LANGUAGE_CONFIG[language].label}
            </button>
          ))}
        </div>
      </div>

      <div className="hidden md:block bg-[#4B827E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center">
            {navItems.map((item) => (
              <div
                key={item.id}
                className="relative group"
                onMouseEnter={() => item.subItems && setActiveDropdown(item.id)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                href={getPagePath(item.id, undefined, currentLanguage)}
                  onClick={(event) => handlePageLink(event, item.id)}
                  className={`flex items-center px-4 lg:px-6 py-4 text-sm lg:text-base font-bold uppercase tracking-wide transition-all border-b-4 whitespace-nowrap ${
                    currentPage === item.id || activeDropdown === item.id
                      ? 'border-white text-white'
                      : 'border-transparent text-white/85 hover:text-white'
                  }`}
                >
                  {item.label}
                  {item.subItems && (
                    <svg className={`ml-2 w-3 h-3 transition-transform ${activeDropdown === item.id ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </a>
                {item.subItems && (
                  <div
                    className={`absolute left-0 w-64 bg-white shadow-2xl rounded-b-lg border-t-4 border-[#1C2C5E] py-2 transition-all origin-top z-50 ${
                      activeDropdown === item.id ? 'opacity-100 scale-y-100 visible' : 'opacity-0 scale-y-95 invisible'
                    }`}
                  >
                    {item.subItems.map((sub, idx) => (
                      <a
                        key={idx}
                        href={getPagePath(sub.page, undefined, currentLanguage)}
                        onClick={(event) => handlePageLink(event, sub.page)}
                        className="block w-full text-left px-6 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-[#4B827E] border-l-4 border-transparent hover:border-[#4B827E] transition-all"
                      >
                        {sub.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        className={`md:hidden bg-white border-t border-slate-100 overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'max-h-[80vh] overflow-y-auto' : 'max-h-0'
        }`}
      >
        <div className="px-4 py-2 space-y-1">
          {navItems.map((item) => (
            <div key={item.id} className="border-b border-slate-50 last:border-none">
              <div className="flex items-center justify-between">
                <a
                  href={getPagePath(item.id, undefined, currentLanguage)}
                  onClick={(event) => handlePageLink(event, item.id)}
                  className={`flex-grow text-left py-4 px-2 text-sm font-bold uppercase tracking-wide ${
                    currentPage === item.id ? 'text-[#4B827E]' : 'text-slate-700'
                  }`}
                >
                  {item.label}
                </a>
                {item.subItems && (
                  <button onClick={() => toggleMobileItem(item.id)} className="p-4 text-slate-400" aria-label={`${locale.nav.expandPrefix} ${item.label}`}>
                    <svg className={`w-4 h-4 transition-transform ${expandedMobileItems[item.id] ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                )}
              </div>

              {item.subItems && expandedMobileItems[item.id] && (
                <div className="bg-slate-50 rounded-lg mb-2 py-1">
                  {item.subItems.map((sub, idx) => (
                    <a
                      key={idx}
                      href={getPagePath(sub.page, undefined, currentLanguage)}
                      onClick={(event) => handlePageLink(event, sub.page)}
                      className="block w-full text-left px-6 py-3 text-xs font-semibold text-slate-600 hover:text-[#4B827E] transition-colors"
                    >
                      {sub.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
