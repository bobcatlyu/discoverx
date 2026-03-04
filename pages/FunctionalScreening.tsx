
import React from 'react';

const FunctionalScreening: React.FC = () => {
  return (
    <div className="bg-white">
      {/* 1. Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <h1 className="text-4xl font-extrabold text-[#1C2C5E] mb-6">化合物功能筛选 (Functional Screening & Profiling)</h1>
            <div className="h-1 w-20 bg-[#4B827E] mb-8"></div>
            <p className="text-slate-600 leading-relaxed text-lg mb-6">
              功能性筛选服务专为处于先导化合物发现 (Lead Discovery) 及优化 (Lead Optimization) 阶段的制药企业设计。
            </p>
            <p className="text-slate-600 leading-relaxed text-lg">
              依托于 Eurofins DiscoverX 全球最大的功能性细胞株库，我们可以针对数以百计的 GPCR、激酶及离子通道靶点，为您的小分子文库或生物制剂提供高通量的功能活性筛选与谱图分析 (Profiling)。
            </p>
          </div>
          <div className="md:w-1/2">
            <img 
              src="https://picsum.photos/seed/screening_hero/800/600" 
              alt="High Throughput Screening" 
              className="rounded-2xl shadow-2xl border border-slate-100"
            />
          </div>
        </div>
      </section>

      {/* 2. Key Capabilities Section */}
      <section className="bg-slate-50 py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1C2C5E] mb-12 text-center">核心筛选面板与方案</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
              <h4 className="text-xl font-bold text-[#1C2C5E] mb-4">GPCR 广谱安全性面板</h4>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                针对 40+ 核心靶点进行脱靶活性扫描，是药物临床前安全评估的标准步骤。
              </p>
              <ul className="text-xs text-slate-500 space-y-2">
                <li className="flex items-center"><span className="text-[#4B827E] mr-2">●</span> 涵盖主要生物胺、肽类受体</li>
                <li className="flex items-center"><span className="text-[#4B827E] mr-2">●</span> 识别潜在的毒理学风险</li>
                <li className="flex items-center"><span className="text-[#4B827E] mr-2">●</span> 工业级验证的一致性数据</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
              <h4 className="text-xl font-bold text-[#1C2C5E] mb-4">全激酶组筛选 (KinomeScan®)</h4>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                利用全球领先的激酶技术平台，在 480 多种激酶靶点上测定化合物的选择性。
              </p>
              <ul className="text-xs text-slate-500 space-y-2">
                <li className="flex items-center"><span className="text-[#4B827E] mr-2">●</span> 覆盖人类全激酶组 90% 以上</li>
                <li className="flex items-center"><span className="text-[#4B827E] mr-2">●</span> 快速确定选择性指数</li>
                <li className="flex items-center"><span className="text-[#4B827E] mr-2">●</span> 支持 SAR 结构活性关系研究</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
              <h4 className="text-xl font-bold text-[#1C2C5E] mb-4">靶点结合全景扫描</h4>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                利用 InCELL® 技术在活细胞中测定化合物与特定家族蛋白的物理结合强度。
              </p>
              <ul className="text-xs text-slate-500 space-y-2">
                <li className="flex items-center"><span className="text-[#4B827E] mr-2">●</span> 测量胞内真实占位率 (Occupancy)</li>
                <li className="flex items-center"><span className="text-[#4B827E] mr-2">●</span> 评估不同组织细胞背景差异</li>
                <li className="flex items-center"><span className="text-[#4B827E] mr-2">●</span> 助力 PROTAC 等复杂分子筛选</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Technology Platforms Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-bold text-[#1C2C5E] mb-12 text-center md:text-left">强大的筛选技术支撑</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <div className="border-l-4 border-[#4B827E] pl-6">
              <h3 className="text-2xl font-bold text-[#1C2C5E] mb-2">高通量自动化系统</h3>
              <p className="text-slate-600 leading-relaxed">
                我们配备了成熟的 384/1536 孔板自动化液体处理与读板系统，单日处理能力可达数万个化合物。
              </p>
            </div>
            <div className="border-l-4 border-[#4B827E] pl-6">
              <h3 className="text-2xl font-bold text-[#1C2C5E] mb-2">全靶点功能性库</h3>
              <p className="text-slate-600 leading-relaxed">
                不同于仅有结合数据的库，我们提供的是**基于细胞响应**的功能性筛选，能直接区分激动、拮抗或变构调节活性。
              </p>
            </div>
          </div>
          {/* Changed bg-[#1C2C5E] to bg-[#4B827E] */}
          <div className="bg-[#4B827E] p-10 rounded-3xl text-white shadow-2xl relative overflow-hidden">
             <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
             <h4 className="text-xl font-bold mb-6 flex items-center">
               <svg className="w-6 h-6 mr-3 text-white/40" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>
               筛选平台优势
             </h4>
             <ul className="space-y-4">
               {[
                 "最完整的非孤儿 GPCR 功能库",
                 "纳摩尔级别的超高灵敏度",
                 "成熟的各种检测模式 (Agonist/Antagonist/PAM)",
                 "提供热点图 (Heatmap) 与聚类分析报告"
               ].map((text, i) => (
                 <li key={i} className="flex items-start">
                   <span className="text-white/40 mr-3 font-bold">✓</span>
                   <span className="text-white/90">{text}</span>
                 </li>
               ))}
             </ul>
          </div>
        </div>
      </section>

      {/* 4. Workflow Section */}
      <section className="bg-slate-50 py-20 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1C2C5E] mb-16 text-center">专业筛选实施流程</h2>
          
          <div className="relative">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-[#4B827E]/20 -translate-y-1/2 z-0"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
              {[
                { step: "01", title: "面板选择", desc: "根据研究目标，从标准或定制面板中选择筛选靶点列表。" },
                { step: "02", title: "化合物准备", desc: "化合物溶解、稀释及上板，准备进行高通量检测。" },
                { step: "03", title: "自动筛选", desc: "在选定的细胞库上进行单浓度初筛或多浓度 IC50 测定。" },
                { step: "04", title: "多维报告", desc: "提供全面的选择性、效力分析图表及 Hit 验证结论。" }
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center group hover:border-[#4B827E] transition-all">
                  <div className="w-16 h-16 rounded-full bg-teal-50 text-[#4B827E] flex items-center justify-center text-2xl font-black mb-6 group-hover:bg-[#4B827E] group-hover:text-white transition-all">
                    {item.step}
                  </div>
                  <h4 className="text-lg font-bold text-[#1C2C5E] mb-3">{item.title}</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Contact CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pb-32">
        {/* Changed gradient from-[#1C2C5E] to-[#4B827E] to Teal focused */}
        <div className="bg-gradient-to-r from-[#4B827E] to-[#3d6b67] rounded-[2rem] p-12 text-center text-white shadow-2xl">
          <h2 className="text-3xl font-bold mb-6 text-white">加速您的先导化合物优化</h2>
          <p className="text-white/80 mb-10 max-w-2xl mx-auto text-lg">
            获取最新的筛选面板靶点清单及 HTS 服务报价方案。
          </p>
          <button className="bg-white text-[#4B827E] px-10 py-4 rounded-full font-bold text-lg hover:bg-teal-50 transition-all shadow-lg">
            立即索取筛选清单
          </button>
        </div>
      </section>
    </div>
  );
};

export default FunctionalScreening;
