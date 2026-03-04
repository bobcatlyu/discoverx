
import React, { useState } from 'react';
import { Page } from '../types';

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
  onNavigate: (page: Page, query?: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [activeDropdown, setActiveDropdown] = useState<Page | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedMobileItems, setExpandedMobileItems] = useState<Record<string, boolean>>({});
  const [searchVal, setSearchVal] = useState('');

  const navItems: NavItem[] = [
    { id: Page.Home, label: '首页' },
    { 
      id: Page.Products, 
      label: '产品类型',
      subItems: [
        { label: '商业化稳转细胞株', page: Page.CellLine },
        { label: '即用型 eXpress® Kit', page: Page.ExpressKit },
        { label: '生物活性测定Bioassay Kit', page: Page.BioassayKit },
        { label: '工具箱产品', page: Page.Toolbox },
        { label: '检测试剂盒', page: Page.DetectionKit },
        { label: '试剂耗材', page: Page.Reagent },
        { label: '膜制品', page: Page.MembranePrep },
        { label: '重组酶类', page: Page.Enzyme },
        { label: 'Calixar 膜蛋白', page: Page.Calixar },
      ]
    },
    { 
      id: Page.Targets, 
      label: '靶点分类',
      subItems: [
        { label: 'G蛋白偶联受体GPCR', page: Page.Gpcr },
        { label: '细胞因子受体', page: Page.CytokineReceptors },
        { label: '免疫检查点受体', page: Page.CheckpointReceptors },
        { label: '激酶受体RTK', page: Page.KinaseReceptors },
        { label: '核激素受体 NHR', page: Page.Nhr },
        { label: '离子通道', page: Page.IonChannels },
        { label: '表观遗传蛋白', page: Page.EpigeneticProteins },
      ]
    },
    { 
      id: Page.Applications, 
      label: '作用机制',
      subItems: [
        { label: '受体二聚化', page: Page.DimerizationDetail },
        { label: '受体内吞', page: Page.InternalizationDetail },
        { label: '蛋白间相互作用', page: Page.PpiDetail },
        { label: '信号通路', page: Page.SignalPathwayDetail },
        { label: '细胞毒性效应', page: Page.CytotoxicityDetail },
        { label: '靶向蛋白降解', page: Page.TpdDetail },
        { label: '靶标结合', page: Page.TargetEngagementDetail },
      ]
    },
    { 
      id: Page.Custom, 
      label: '开发服务',
      subItems: [
        { label: 'Assay开发服务', page: Page.CustomAssayDevelopment },
        { label: 'Bioassay开发', page: Page.BioassayDevelopment },
        { label: '样品检测服务', page: Page.SampleTesting },
        { label: '化合物筛选', page: Page.FunctionalScreening },
      ]
    },
    { 
      id: Page.Documents, 
      label: '产品资料',
      subItems: [
        { label: '产品说明书', page: Page.DatasheetList },
        { label: '用户操作手册', page: Page.UserManual },
        { label: '验证数据报告', page: Page.QualificationData },
        { label: '技术应用指南', page: Page.ApplicationNote },
        { label: '参考文献库', page: Page.Reference },
      ]
    },
    { id: Page.Contacts, label: '联系我们' },
  ];

  const handleSubItemClick = (page: Page) => {
    onNavigate(page);
    setActiveDropdown(null);
    setIsMobileMenuOpen(false);
  };

  const toggleMobileItem = (id: string) => {
    setExpandedMobileItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const executeSearch = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (searchVal.trim()) {
      onNavigate(Page.Search, searchVal.trim());
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className="bg-white sticky top-0 z-50 shadow-md">
      {/* Top Bar: Logo & Search */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 md:py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center cursor-pointer shrink-0" onClick={() => onNavigate(Page.Home)}>
            <img
              src="/pic/DiscoverX Logo_Blue Discover Text w BlueOrange X.png"
              alt="DiscoverX Logo"
              className="h-8 md:h-10 w-auto object-contain"
            />
          </div>

          {/* Search - Hidden on small mobile, shown on md+ */}
          <form onSubmit={executeSearch} className="hidden md:flex flex-grow max-w-xl items-center border-b border-slate-300 pb-1">
            <input 
              type="text" 
              placeholder="搜索产品目录号、名称、靶点..." 
              className="flex-grow px-2 py-1 text-sm focus:outline-none"
              value={searchVal}
              onChange={(e) => setSearchVal(e.target.value)}
            />
            <button type="submit" className="p-2 text-slate-400 hover:text-[#4B827E] transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </button>
          </form>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-[#1C2C5E] hover:bg-slate-100 rounded-lg transition-colors"
            >
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Search Bar - Shown only on small screens when menu is open or just below top bar */}
        <form onSubmit={executeSearch} className="mt-3 flex md:hidden items-center border-b border-slate-300 pb-1">
          <input 
            type="text" 
            placeholder="搜索产品..." 
            className="flex-grow px-2 py-1 text-sm focus:outline-none"
            value={searchVal}
            onChange={(e) => setSearchVal(e.target.value)}
          />
          <button type="submit" className="p-2 text-slate-400">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          </button>
        </form>
      </div>

      {/* Desktop Navigation Bar */}
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
                <button 
                  onClick={() => onNavigate(item.id)} 
                  className={`flex items-center px-4 lg:px-6 py-4 text-sm lg:text-base font-bold uppercase tracking-wide transition-all border-b-4 whitespace-nowrap ${currentPage === item.id || activeDropdown === item.id ? 'border-white text-white' : 'border-transparent text-white/85 hover:text-white'}`}
                >
                  {item.label}
                  {item.subItems && <svg className={`ml-2 w-3 h-3 transition-transform ${activeDropdown === item.id ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" /></svg>}
                </button>
                {item.subItems && (
                  <div className={`absolute left-0 w-64 bg-white shadow-2xl rounded-b-lg border-t-4 border-[#1C2C5E] py-2 transition-all origin-top z-50 ${activeDropdown === item.id ? 'opacity-100 scale-y-100 visible' : 'opacity-0 scale-y-95 invisible'}`}>
                    {item.subItems.map((sub, idx) => (
                      <button key={idx} onClick={() => handleSubItemClick(sub.page)} className="w-full text-left px-6 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-[#4B827E] border-l-4 border-transparent hover:border-[#4B827E] transition-all">
                        {sub.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu (Slide-down) */}
      <div className={`md:hidden bg-white border-t border-slate-100 overflow-hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-[80vh] overflow-y-auto' : 'max-h-0'}`}>
        <div className="px-4 py-2 space-y-1">
          {navItems.map((item) => (
            <div key={item.id} className="border-b border-slate-50 last:border-none">
              <div className="flex items-center justify-between">
                <button 
                  onClick={() => {
                    onNavigate(item.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`flex-grow text-left py-4 px-2 text-sm font-bold uppercase tracking-wide ${currentPage === item.id ? 'text-[#4B827E]' : 'text-slate-700'}`}
                >
                  {item.label}
                </button>
                {item.subItems && (
                  <button 
                    onClick={() => toggleMobileItem(item.id)}
                    className="p-4 text-slate-400"
                  >
                    <svg className={`w-4 h-4 transition-transform ${expandedMobileItems[item.id] ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  </button>
                )}
              </div>
              
              {item.subItems && expandedMobileItems[item.id] && (
                <div className="bg-slate-50 rounded-lg mb-2 py-1">
                  {item.subItems.map((sub, idx) => (
                    <button 
                      key={idx} 
                      onClick={() => handleSubItemClick(sub.page)}
                      className="w-full text-left px-6 py-3 text-xs font-semibold text-slate-600 hover:text-[#4B827E] transition-colors"
                    >
                      {sub.label}
                    </button>
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
