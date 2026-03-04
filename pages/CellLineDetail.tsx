
import React from 'react';
import { Page } from '../types';

interface CellLineDetailProps {
  onNavigate?: (page: Page) => void;
}

const CellLineDetail: React.FC<CellLineDetailProps> = ({ onNavigate }) => {
  const navigateTo = (page: Page) => {
    if (onNavigate) onNavigate(page);
  };

  const targetCategories = [
    { name: 'G 蛋白偶联受体 (GPCRs)', page: Page.Gpcr },
    { name: '激酶受体RTK', page: Page.KinaseReceptors },
    { name: '免疫检查点受体', page: Page.CheckpointReceptors },
    { name: '细胞因子和白介素受体', page: Page.CytokineReceptors },
    { name: '核激素受体', page: Page.Nhr },
    { name: '表观遗传蛋白', page: Page.EpigeneticProteins },
    { name: '离子通道', page: Page.IonChannels }
  ];

  return (
    <div className="bg-white">
      {/* 1. Hero Section - Clean Background */}
      <section className="bg-white text-slate-900 py-20 relative overflow-hidden border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-black mb-6 tracking-tight text-[#1C2C5E]">商业化稳转细胞系</h1>
          <div className="h-1.5 w-24 bg-[#4B827E] mx-auto mb-8"></div>
          <p className="text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed font-medium">
            Eurofins DiscoverX® 提供业内最为丰富的功能性细胞系资源库，包含 1,500 多种经过充分验证的细胞系。
          </p>
        </div>
      </section>

      {/* 2. Introduction & Application Areas */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto space-y-6 text-slate-600 leading-relaxed text-justify">
          <h3 className="text-2xl font-bold text-[#1C2C5E] flex items-center">
            <span className="w-1.5 h-8 bg-[#4B827E] mr-4"></span>
            产品概述
          </h3>
          <p className="text-lg">
            <strong>工程化细胞系（Engineered cell lines）</strong> 是体外细胞水平检测中用于模拟生物系统生理状态的关键工具。这类细胞系基于药物与靶点相互作用的作用机制（MOA）进行构建，通常以标准细胞系为背景开发而成。
          </p>
          <p>
            DiscoverX 的细胞系覆盖所有主要药物靶点类别，包括 GPCR、细胞因子、激酶、免疫检查点、离子通道等。已被广泛用于药物筛选和效价评估。
          </p>
        </div>
      </section>

      {/* 3. Product Formats */}
      <section className="bg-slate-50 py-20 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-[#1C2C5E] mb-12 text-center underline decoration-[#4B827E] decoration-4 underline-offset-8 uppercase tracking-widest">产品形式</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Format 1 - Left Column */}
            <div className="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm flex flex-col gap-8 group hover:border-[#4B827E] transition-all h-full">
              <div className="w-20 h-20 bg-[#4B827E] text-white rounded-3xl flex items-center justify-center font-black text-3xl shrink-0 shadow-lg group-hover:scale-105 transition-transform">01</div>
              <div className="flex-grow">
                <h4 className="text-2xl font-bold text-[#1C2C5E] mb-4">稳转细胞系套装 (Cell Line Assay Kit)</h4>
                <p className="text-sm text-slate-500 mb-4 leading-relaxed">DiscoverX 大部分稳转细胞系均以套装形式供应。一个套装包含：</p>
                <div className="bg-slate-50/50 rounded-2xl p-6 border border-slate-100">
                  <ul className="text-sm text-slate-700 space-y-3 font-semibold">
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-[#4B827E] rounded-full"></span>
                      可传代稳转细胞系 两管
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-[#4B827E] rounded-full"></span>
                      AssayComplete™ 培养试剂、消化、冻存、复苏、铺板等全套配套试剂
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-[#4B827E] rounded-full"></span>
                      高灵敏度检测试剂盒
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-[#4B827E] rounded-full"></span>
                      配套抗生素与标准化实验方案
                    </li>
                  </ul>
                </div>
                <div className="flex flex-wrap gap-3 mt-8">
                  <span className="text-[11px] font-bold text-[#4B827E] bg-teal-50 px-4 py-2 rounded-xl border border-teal-100">10代稳定性验证</span>
                  <span className="text-[11px] font-bold text-[#4B827E] bg-teal-50 px-4 py-2 rounded-xl border border-teal-100">HTS兼容</span>
                </div>
              </div>
            </div>

            {/* Right Column - Format 2 & 3 */}
            <div className="flex flex-col gap-8">
              {/* Format 2 */}
              <div className="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm flex flex-col sm:flex-row gap-8 items-center group hover:border-[#4B827E] transition-all flex-1">
                <div className="w-16 h-16 bg-[#4B827E] text-white rounded-2xl flex items-center justify-center font-black text-2xl shrink-0 shadow-lg group-hover:scale-105 transition-transform">02</div>
                <div>
                  <h4 className="text-xl font-bold text-[#1C2C5E] mb-2">可传代稳转细胞系</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">独立的、非套装形式供应。主要涵盖离子通道细胞系、钙离子检测细胞系、DIY 用亲本细胞以及特定原代细胞系。</p>
                </div>
              </div>
              {/* Format 3 */}
              <div className="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm flex flex-col sm:flex-row gap-8 items-center group hover:border-[#4B827E] transition-all flex-1">
                <div className="w-16 h-16 bg-[#4B827E] text-white rounded-2xl flex items-center justify-center font-black text-2xl shrink-0 shadow-lg group-hover:scale-105 transition-transform">03</div>
                <div>
                  <h4 className="text-xl font-bold text-[#1C2C5E] mb-2">即用型冻存细胞</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">不可传代。仅针对钙离子检测细胞系提供。旨在消除传代带来的生物学变异，解冻后直接铺板，适合 HTS 极速应用。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Core Technology & Applications - VERTICAL FULL STACK with Theme Green Headers */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="mb-20 text-center">
          <h2 className="text-4xl font-black text-[#1C2C5E] mb-4">细胞系靶点和应用</h2>
          <div className="h-1.5 w-40 bg-[#4B827E] mx-auto mt-6"></div>
        </div>

        <div className="space-y-20">
          {/* Card 1: GPCR */}
          <div className="rounded-[3rem] border border-slate-200 overflow-hidden shadow-2xl">
            <div className="bg-[#4B827E] p-10 text-white flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-3xl font-black mb-2">1. GPCR 检测细胞系</h3>
                <p className="opacity-90 font-medium">涵盖已知 GPCRome 的全方位功能检测方案</p>
              </div>
              <button onClick={() => navigateTo(Page.Gpcr)} className="bg-white text-[#4B827E] px-8 py-3 rounded-full font-bold transition-all hover:bg-teal-50 shadow-xl">进入 GPCR 目录</button>
            </div>
            <div className="p-10 bg-white grid md:grid-cols-2 gap-10">
              {[
                { n: 'β-arrestin 招募分析', d: '通用的非 G 蛋白依赖性分析，量化几乎所有已知 GPCR 的激活，支持偏向性配体研究。' },
                { n: '均相 cAMP 分析 (HitHunter®)', d: '定量监测 Gs 或 Gi 偶联受体引起的 cAMP 水平变化，具有极高灵敏度和大检测窗口。' },
                { n: '钙动员分析 (Calcium No Wash)', d: '测量 Gq 偶联受体激活诱导的胞内钙库释放或胞外流入，适合极速自动化筛选。' },
                { n: 'GPCR 内化分析 (Internalization)', d: '次级正交筛选，定量追踪受体从质膜向内体室的移动，捕捉受体脱敏过程。' },
                { n: 'GPCR 药物转运 (Pharmacotrafficking)', d: '定量识别药理伴侣分子，用于稳定或挽救与疾病相关的错折叠突变受体。' }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 group">
                  <div className="shrink-0 w-12 h-12 bg-teal-50 text-[#4B827E] rounded-2xl flex items-center justify-center font-black group-hover:bg-[#4B827E] group-hover:text-white transition-all shadow-sm">{i+1}</div>
                  <div>
                    <h5 className="font-bold text-[#1C2C5E] text-lg mb-2">{item.n}</h5>
                    <p className="text-sm text-slate-500 leading-relaxed">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Card 2: Kinase */}
          <div className="rounded-[3rem] border border-slate-200 overflow-hidden shadow-2xl">
            <div className="bg-[#4B827E] p-10 text-white flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-3xl font-black mb-2">2. 激酶受体RTK 检测细胞系</h3>
                <p className="opacity-90 font-medium">评估激酶活化、招募与内源性降解</p>
              </div>
              <button onClick={() => navigateTo(Page.KinaseReceptors)} className="bg-white text-[#4B827E] px-8 py-3 rounded-full font-bold transition-all hover:bg-teal-50 shadow-xl">进入激酶受体RTK目录</button>
            </div>
            <div className="p-10 bg-white grid md:grid-cols-2 gap-10">
              {[
                { n: '受体酪氨酸激酶 (RTK) 功能活性', d: '通过监测配体诱导的 SH2 结构域蛋白招募来量化受体活化。' },
                { n: '胞内酪氨酸激酶 (CTK) 功能活性', d: '直接监测胞内激酶的蛋白-蛋白相互作用及激活状态。' },
                { n: '受体酪氨酸激酶 (RTK) 内化', d: '内吞监测，用于评估 ADC 候选物或诱导受体下调的治疗手段。' },
                { n: '信号通路分析', d: '定量追踪激活后的下游磷酸化级联反应。' },
                { n: 'InCELL 靶标结合分析 (Target Engagement)', d: '在生理环境中直接测量化合物与胞内激酶的结合 EC50 及占位率。' },
                { n: 'SPRINTer™ 靶向蛋白降解 (TPD)', d: 'CRISPR 标记内源蛋白，实时追踪 PROTAC 等药物诱导的降解动力学。' }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 group">
                  <div className="shrink-0 w-12 h-12 bg-teal-50 text-[#4B827E] rounded-2xl flex items-center justify-center font-black group-hover:bg-[#4B827E] group-hover:text-white transition-all shadow-sm">{i+1}</div>
                  <div>
                    <h5 className="font-bold text-[#1C2C5E] text-lg mb-2">{item.n}</h5>
                    <p className="text-sm text-slate-500 leading-relaxed">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Card 3: Checkpoint */}
          <div className="rounded-[3rem] border border-slate-200 overflow-hidden shadow-2xl">
            <div className="bg-[#4B827E] p-10 text-white flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-3xl font-black mb-2">3. 免疫检查点检测细胞系</h3>
                <p className="opacity-90 font-medium">肿瘤免疫创新药评估</p>
              </div>
              <button onClick={() => navigateTo(Page.CheckpointReceptors)} className="bg-white text-[#4B827E] px-8 py-3 rounded-full font-bold transition-all hover:bg-teal-50 shadow-xl">进入免疫检查点目录</button>
            </div>
            <div className="p-10 bg-white grid md:grid-cols-2 gap-10">
              {[
                { n: '受体信号分析', d: '量化检查点分子介导的抑制或共刺激信号强度。' },
                { n: '受体二聚化分析', d: '直接监测单抗或双抗诱导的受体组装。' },
                { n: '受体内化分析', d: 'ADC 药物筛选及抗体诱导受体降解效率评价。' },
                { n: 'KILR® 受体细胞毒性', d: '高效测定 ADCC/ADCP 及免疫杀伤效率。' }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 group">
                  <div className="shrink-0 w-12 h-12 bg-teal-50 text-[#4B827E] rounded-2xl flex items-center justify-center font-black group-hover:bg-[#4B827E] group-hover:text-white transition-all shadow-sm">{i+1}</div>
                  <div>
                    <h5 className="font-bold text-[#1C2C5E] text-lg mb-2">{item.n}</h5>
                    <p className="text-sm text-slate-500 leading-relaxed">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Card 4: Cytokine */}
          <div className="rounded-[3rem] border border-slate-200 overflow-hidden shadow-2xl">
            <div className="bg-[#4B827E] p-10 text-white flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-3xl font-black mb-2">4. 细胞因子受体检测细胞系</h3>
                <p className="opacity-90 font-medium">炎症与免疫调控分析</p>
              </div>
              <button onClick={() => navigateTo(Page.CytokineReceptors)} className="bg-white text-[#4B827E] px-8 py-3 rounded-full font-bold transition-all hover:bg-teal-50 shadow-xl">进入细胞因子目录</button>
            </div>
            <div className="p-10 bg-white grid md:grid-cols-2 gap-10">
              {[
                { n: '受体二聚化分析', d: '同源或异源受体（如 IL-2R, IL-6R）二聚化状态监测。' },
                { n: '信号通路 IkB 降解', d: '实时监测 NF-kB 通路起始阶段的蛋白稳定性变化。' },
                { n: '信号通路报告基因法', d: 'STAT1/3/5 等下游转录因子的多重监测。' }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 group">
                  <div className="shrink-0 w-12 h-12 bg-teal-50 text-[#4B827E] rounded-2xl flex items-center justify-center font-black group-hover:bg-[#4B827E] group-hover:text-white transition-all shadow-sm">{i+1}</div>
                  <div>
                    <h5 className="font-bold text-[#1C2C5E] text-lg mb-2">{item.n}</h5>
                    <p className="text-sm text-slate-500 leading-relaxed">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Card 5: Comprehensive Applications */}
          <div className="rounded-[3rem] border border-slate-200 overflow-hidden shadow-2xl">
            <div className="bg-[#4B827E] p-10 text-white">
              <h3 className="text-3xl font-black mb-2">5. 其他靶点和应用</h3>
              <p className="opacity-80 font-medium">跨学科、跨靶点的工业化通用检测技术</p>
            </div>
            <div className="p-10 bg-slate-50 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { n: 'KILR® 细胞毒性', d: '非放射性均相分析，测量靶细胞膜完整性受损导致的特定 EA 标签释放。' },
                { n: '信号报告基因 (STAT/NFκB)', d: '通过高诱导倍数读值快速评估药物对信号通路的激活或中和效力。' },
                { n: 'InCELL 靶点结合', d: '基于蛋白热稳定性的胞内物理结合测量。' },
                { n: '内源性蛋白降解', d: 'CRISPR 编辑内源靶点，实现 PROTAC 的药效学动力学分析。' },
                { n: '细胞内膜贩运 (Trafficking)', d: '直接监测蛋白在不同膜区室间的定向移动。' },
                { n: '核激素受体核易位', d: '量化受体激活后进入细胞核触发转录的过程。' }
              ].map((item, i) => (
                <div key={i} className="p-6 bg-white rounded-2xl border border-slate-100 hover:border-[#4B827E] transition-all hover:shadow-lg">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-2 h-2 bg-[#4B827E] rounded-full"></span>
                    <h6 className="font-black text-[#1C2C5E] text-sm uppercase">{item.n}</h6>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed">{item.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Contact CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 pb-40 text-center">
        <div className="bg-[#4B827E] rounded-[4rem] p-20 shadow-2xl text-white relative overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
           <h2 className="text-4xl font-black mb-6 relative z-10">加速您的生物药研发进程</h2>
           <p className="text-lg text-teal-50 mb-12 max-w-2xl mx-auto relative z-10 leading-relaxed">
             Eurofins DiscoverX 的 1,000+ 种细胞系资源库已服务于全球几乎所有头部药企。联系我们获取最新版完整目录或定制方案建议。
           </p>
           <div className="flex flex-col sm:flex-row gap-6 justify-center relative z-10">
              <button 
                onClick={() => navigateTo(Page.Contacts)}
                className="bg-white text-[#4B827E] px-12 py-5 rounded-2xl font-black hover:bg-teal-50 transition-all shadow-xl text-lg"
              >
                立即咨询技术专家
              </button>
              <button 
                onClick={() => navigateTo(Page.Documents)}
                className="bg-[#1C2C5E] text-white px-12 py-5 rounded-2xl font-black hover:bg-[#2a3d7a] transition-all shadow-xl text-lg"
              >
                下载 2026 版目录
              </button>
           </div>
        </div>
      </section>
    </div>
  );
};

export default CellLineDetail;
