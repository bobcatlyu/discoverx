
import React from 'react';
import { Page } from '../types';

interface ExpressKitDetailProps {
  onNavigate?: (page: Page) => void;
}

const ExpressKitDetail: React.FC<ExpressKitDetailProps> = ({ onNavigate }) => {
  const portfolioItems = [
    { label: 'G蛋白偶联受体(GPCR)', page: Page.Gpcr },
    { label: '细胞因子受体', page: Page.CytokineReceptors },
    { label: '免疫检查点受体', page: Page.CheckpointReceptors },
    { label: '激酶受体(RTK/CTK)', page: Page.KinaseReceptors },
    { label: '核激素受体(NHR)', page: Page.Nhr },
    { label: '表观遗传蛋白', page: Page.EpigeneticProteins },
    { label: 'InCELL™ 靶标结合', page: Page.TargetEngagementDetail },
    { label: 'Sprinter™ 靶向蛋白降解', page: Page.TpdDetail },
  ];

  return (
    <div className="bg-white">
      {/* 1. Introduction Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div>
          <h1 className="text-4xl font-extrabold text-[#1C2C5E] mb-6">即用型 eXpress® kit</h1>
          <div className="h-1 w-20 bg-[#4B827E] mb-8"></div>
          <div className="space-y-4 text-slate-600 leading-relaxed text-lg text-justify">
            <p>
              Eurofins DiscoverX 开发的 eXpress® kit 是<strong>即用型 (RTU)</strong> 基于细胞的快速检测试剂盒，用于药物发现靶点验证、筛选和命中识别以及先导优化应用的功能机制 (MOA) 或结合分析。
            </p>
            <p>
              每个 eXpress® kit 包括 RTU 冷冻保存细胞、优化的分析试剂、培养板和详细的分析方案，确保每次都能获得稳健可靠的结果。通过消除漫长、耗时且昂贵的细胞培养步骤，eXpress® kit 使您能够在几小时内筛选小分子或大分子治疗药物，并生成准确、精确和可重现的功能数据。
            </p>
            <p>
              DiscoverX 提供超过 <strong>1,000 种</strong>靶点特异性 eXpress® kit。其化学发光读数可在任何标准台式发光计上读取。只需<strong>解冻、铺板和运行分析！</strong>最大限度地减少分析开发时间，无需细胞培养。
            </p>
            <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mt-6">
              <p className="text-sm text-amber-800 italic">
                * eXpress® kit 仅用于体外研究用途，不适合批次放行应用。请参考 Bioassay kit 用于生物制剂批次放行的效价测试。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Product Applications */}
      <section className="bg-slate-50 py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1C2C5E] mb-12 text-center">产品应用</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: '靶点表征', desc: '在早期药物发现项目中识别靶点并验证区分靶点特异性变异，如物种、同源物、同型等。' },
              { title: '功能和结合分析', desc: '对您的小分子化合物或生物制剂进行快速、高通量的基于细胞的分析结合和机制 (MOA) 评估。' },
              { title: '高通量筛选和 Hit finding', desc: '识别 Hit 化合物；运行初筛、次筛和正交筛选；并对命中进行排序。' },
              { title: '先导化合物优化', desc: '确定最佳先导化合物；优化先导化合物的效价、疗效和特异性；并进行 SAR 和配体偏向研究。' }
            ].map((app, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-all">
                <div className="w-10 h-10 bg-teal-50 text-[#4B827E] rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <h4 className="text-lg font-bold text-[#1C2C5E] mb-3">{app.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{app.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Product Highlights */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-bold text-[#1C2C5E] mb-12 text-center md:text-left font-black tracking-tight border-l-8 border-[#4B827E] pl-6">产品亮点</h2>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            {[
              { id: '1', title: '即用型', desc: '包含冷冻保存细胞、优化试剂、培养板和详细方案，无需细胞培养。' },
              { id: '2', title: '兼容性广', desc: '化学发光检测，可在任何标准发光计上读取。' },
              { id: '3', title: '快速高效', desc: '均质化方法，简单快速的操作流程，几小时内获得结果。' },
              { id: '4', title: '可靠性高', desc: '稳健、定量、可重现的结果。' },
              { id: '5', title: '灵活性强', desc: '可检测激动剂、拮抗剂和变构调节剂。' },
              { id: '6', title: '高通量', desc: '适合自动化筛选平台，可用 96 孔板和 384 孔板。' },
              { id: '7', title: '广泛适用', desc: '超过 1,000 种靶点可选。' }
            ].map((highlight) => (
              <div key={highlight.id} className="flex gap-6 group">
                <div className="shrink-0 w-12 h-12 bg-white border-2 border-[#4B827E] text-[#4B827E] font-black rounded-full flex items-center justify-center group-hover:bg-[#4B827E] group-hover:text-white transition-all">
                  {highlight.id}
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#1C2C5E] mb-1">{highlight.title}</h4>
                  <p className="text-slate-500 text-sm">{highlight.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-[#4B827E] rounded-3xl p-10 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <svg className="w-40 h-40" fill="currentColor" viewBox="0 0 24 24"><path d="M19.48 13.03l-.02-.03c-.4-.54-1.05-.88-1.78-.88l-1.34.01c-.13 0-.25.04-.36.1l-2.18 1.13c-.11.06-.23.1-.36.1h-2.13c-.13 0-.25-.04-.36-.1l-2.18-1.13c-.11-.06-.23-.1-.36-.1H6.88c-.73 0-1.38.34-1.78.88l-.02.03c-.43.58-.61 1.25-.56 1.91.13 1.54 1.34 2.8 2.88 2.8h8.4c1.54 0 2.75-1.26 2.88-2.8.05-.66-.13-1.33-.56-1.91zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>
            </div>
            <h3 className="text-2xl font-bold mb-6">eXpress® 工作流程</h3>
            <div className="space-y-8 relative z-10">
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center font-bold">1</div>
                <p>解冻细胞 (Thaw Cells)</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center font-bold">2</div>
                <p>铺板并温育 (Plate & Incubate)</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center font-bold">3</div>
                <p>加入化合物与底物 (Add Compound/Substrate)</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center font-bold">4</div>
                <p>发光计读数 (Read on Luminometer)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Product List - Simplified Grid with Links */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pb-32">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-[#1C2C5E] mb-2">产品列表</h2>
          <p className="text-slate-500">eXpress® kit 适用于以下核心靶点与应用类别：</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {portfolioItems.map((item, idx) => (
            <button
              key={idx}
              onClick={() => onNavigate && onNavigate(item.page)}
              className="flex items-center justify-between p-6 bg-white border border-slate-200 rounded-xl shadow-sm hover:border-[#4B827E] hover:bg-teal-50/50 hover:shadow-md transition-all group text-left"
            >
              <span className="text-sm font-bold text-[#1C2C5E] group-hover:text-[#4B827E]">{item.label}</span>
              <svg className="w-5 h-5 text-slate-300 group-hover:text-[#4B827E] group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          ))}
        </div>

        <div className="mt-16 p-8 bg-slate-50 rounded-2xl border border-slate-200 text-center">
          <p className="text-slate-500 text-sm mb-6 leading-relaxed max-w-2xl mx-auto">
            Eurofins DiscoverX 提供针对上述所有类别的 1,000+ 种 eXpress® Kit。如果您需要特定的靶点目录或批次报价，请直接联系我们的销售与技术团队。
          </p>
          <button 
            onClick={() => onNavigate && onNavigate(Page.Contacts)}
            className="bg-[#1C2C5E] text-white px-8 py-3 rounded-full font-bold hover:bg-[#2a3d7a] transition-all shadow-lg"
          >
            联系技术专家
          </button>
        </div>
      </section>
    </div>
  );
};

export default ExpressKitDetail;
