import React from 'react';
import { Page } from '../types';

interface HomeProps {
  onNavigate?: (page: Page, blogId?: string) => void;
}

const HOME_CARDS = [
  {
    title: '最新动态',
    description: '查看 DiscoverX 产品介绍、技术讨论与应用资料更新。',
    imageUrl: '/pic/discoverx.png',
    page: Page.BlogList,
  },
  {
    title: '靶点选择',
    description: '按 GPCR、细胞因子受体、免疫检查点、RTK / CTK 等靶点方向查找产品。',
    imageUrl: '/pic/GPCR-1150x350.jpg',
    page: Page.Targets,
  },
  {
    title: '产品类型',
    description: '浏览稳定细胞系、eXpress Kit、Bioassay Kit、检测工具与试剂耗材。',
    imageUrl: '/pic/Assay-Kits_Small-Card-Image.jpg',
    page: Page.Products,
  },
  {
    title: '作用机制',
    description: '围绕受体二聚化、内吞、PPI、信号通路、细胞毒性等机制选择实验体系。',
    imageUrl: '/pic/Dimerization.jpg',
    page: Page.Applications,
  },
  {
    title: '开发服务',
    description: '了解 Assay 开发、Bioassay 开发、样品检测和功能筛选服务。',
    imageUrl: '/pic/EDRX-CustomCapabilities_StreamlinedApproach-CustomizedCellLineGeneration-scaled-1.jpg',
    page: Page.Custom,
  },
  {
    title: '产品资料',
    description: '集中访问 datasheet、用户手册、验证数据、应用指南和参考文献。',
    imageUrl: '/pic/Detection-Kits_Small-Card-Image.jpg',
    page: Page.Documents,
  },
];

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
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
            DiscoverX中文资料站
          </h1>

          <div className="mx-auto grid w-full max-w-5xl items-center gap-8 md:grid-cols-[1fr_auto]">
            <div className="space-y-3 text-center md:text-left">
              <p className="text-base font-semibold text-teal-50 md:text-lg">
                更多信息请移步品牌全球官网{' '}
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
                欧陆生物制品（上海）有限公司是 Eurofins 集团在中国的全资子公司，全面负责 DiscoverX 系列产品在中国的销售、市场推广和技术支持。
              </p>
              <p className="text-sm text-white/85 md:text-base">地址：上海市闵行区浦江镇陈行公路 2168 号 8 号楼</p>
              <p className="text-sm text-white/85 md:text-base">
                邮箱：
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
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 border-b border-slate-200 pb-4">
          <h2 className="text-2xl font-bold uppercase tracking-tight text-slate-800">内容导航</h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {HOME_CARDS.map((card) => (
            <button
              key={card.title}
              type="button"
              onClick={() => onNavigate?.(card.page)}
              className="group overflow-hidden rounded-lg border border-slate-200 bg-white text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="h-44 overflow-hidden">
                <img src={card.imageUrl} alt={card.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <h3 className="mb-3 text-xl font-bold text-slate-800 transition-colors group-hover:text-[#4B827E]">{card.title}</h3>
                <p className="min-h-[4.5rem] text-sm leading-relaxed text-slate-600">{card.description}</p>
                <span className="mt-5 flex items-center text-xs font-bold uppercase tracking-wider text-[#4B827E] transition-transform group-hover:translate-x-1">
                  ENTER
                  <svg className="ml-1 h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </button>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50 py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-12 px-4 text-center sm:px-6 md:grid-cols-4 lg:px-8">
          <div>
            <div className="mb-2 text-5xl font-black text-[#4B827E]">1,000+</div>
            <div className="text-xs font-bold uppercase tracking-widest text-slate-500">Assay Kits</div>
          </div>
          <div>
            <div className="mb-2 text-5xl font-black text-[#4B827E]">1500+</div>
            <div className="text-xs font-bold uppercase tracking-widest text-slate-500">Cell Lines</div>
          </div>
          <div>
            <div className="mb-2 text-5xl font-black text-[#4B827E]">20+</div>
            <div className="text-xs font-bold uppercase tracking-widest text-slate-500">Years Experience</div>
          </div>
          <div>
            <div className="mb-2 text-4xl font-black text-[#4B827E]">TOP 50</div>
            <div className="text-xs font-bold uppercase tracking-widest text-slate-500">Pharma Partners</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
