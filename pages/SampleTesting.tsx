
import React from 'react';

const SampleTesting: React.FC = () => {
  return (
    <div className="bg-white">
      {/* 1. Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <h1 className="text-4xl font-extrabold text-[#1C2C5E] mb-6">样品检测服务 (Sample Testing Services)</h1>
            <div className="h-1 w-20 bg-[#4B827E] mb-8"></div>
            <p className="text-slate-600 leading-relaxed text-lg mb-6">
              如果您不具备细胞实验室条件，或希望在药物开发的关键阶段通过第三方独立验证数据，Eurofins DiscoverX 的样品检测服务是您的理想选择。
            </p>
            <p className="text-slate-600 leading-relaxed text-lg">
              我们将利用公司内部验证过的成熟检测平台，为您提供的化合物、抗体或蛋白质样品进行快速、精准的功能性分析。您可以直接获得高质量的数据报告，无需投入昂贵的仪器设备和人员培训。
            </p>
          </div>
          <div className="md:w-1/2">
            <img 
              src="https://picsum.photos/seed/testing_hero/800/600" 
              alt="Sample Testing Service" 
              className="rounded-2xl shadow-2xl border border-slate-100"
            />
          </div>
        </div>
      </section>

      {/* 2. Key Capabilities Section */}
      <section className="bg-slate-50 py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1C2C5E] mb-12 text-center">核心能力与检测范围</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
              <h4 className="text-xl font-bold text-[#1C2C5E] mb-4">GPCR 功能检测</h4>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                基于 cAMP、钙流及 β-Arrestin 招募等多种读值，测定分子的功能活性。
              </p>
              <ul className="text-xs text-slate-500 space-y-2">
                <li className="flex items-center"><span className="text-[#4B827E] mr-2">●</span> EC50 / IC50 曲线拟合</li>
                <li className="flex items-center"><span className="text-[#4B827E] mr-2">●</span> 偏向性配体分析 (Biased Signaling)</li>
                <li className="flex items-center"><span className="text-[#4B827E] mr-2">●</span> 拮抗剂/激动剂模式验证</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
              <h4 className="text-xl font-bold text-[#1C2C5E] mb-4">ADC 内吞速率评价</h4>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                利用 PathHunter® 专利技术，定量追踪 ADC 候选药物诱导的受体内吞过程。
              </p>
              <ul className="text-xs text-slate-500 space-y-2">
                <li className="flex items-center"><span className="text-[#4B827E] mr-2">●</span> 受体内化动力学追踪</li>
                <li className="flex items-center"><span className="text-[#4B827E] mr-2">●</span> 抗体诱导的靶点下调评估</li>
                <li className="flex items-center"><span className="text-[#4B827E] mr-2">●</span> 多种肿瘤细胞背景可选</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
              <h4 className="text-xl font-bold text-[#1C2C5E] mb-4">细胞毒性与安全评价</h4>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                利用 KILR® 等平台评估药物的杀伤效力或脱靶毒性风险。
              </p>
              <ul className="text-xs text-slate-500 space-y-2">
                <li className="flex items-center"><span className="text-[#4B827E] mr-2">●</span> ADCC / CDC 效应评价</li>
                <li className="flex items-center"><span className="text-[#4B827E] mr-2">●</span> 脱靶安全性面板扫描</li>
                <li className="flex items-center"><span className="text-[#4B827E] mr-2">●</span> 内源性信号通路监测</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Technology Platforms Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-bold text-[#1C2C5E] mb-12 text-center md:text-left">为何选择我们的外包检测？</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <div className="border-l-4 border-[#4B827E] pl-6">
              <h3 className="text-2xl font-bold text-[#1C2C5E] mb-2">权威的检测平台</h3>
              <p className="text-slate-600 leading-relaxed">
                所有服务均在 Eurofins DiscoverX 全球标准实验室执行，采用与全球 Top 50 药企完全一致的 PathHunter® 与 HitHunter® 技术平台。
              </p>
            </div>
            <div className="border-l-4 border-[#4B827E] pl-6">
              <h3 className="text-2xl font-bold text-[#1C2C5E] mb-2">专家级数据解读</h3>
              <p className="text-slate-600 leading-relaxed">
                不仅仅是原始数据，我们的资深科学家将为您提供详细的实验报告，包括详细的药理学参数分析与后续研发建议。
              </p>
            </div>
          </div>
          {/* Changed bg-[#1C2C5E] to bg-[#4B827E] */}
          <div className="bg-[#4B827E] p-10 rounded-3xl text-white shadow-2xl relative overflow-hidden">
             <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
             <h4 className="text-xl font-bold mb-6 flex items-center">
               <svg className="w-6 h-6 mr-3 text-white/40" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>
               检测服务优势
             </h4>
             <ul className="space-y-4">
               {[
                 "极速反馈周期（通常 1-2 周）",
                 "严格的质量控制体系",
                 "无需繁琐的 MTAs 或技术准入费",
                 "全球一致性的实验结果对比"
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
          <h2 className="text-3xl font-bold text-[#1C2C5E] mb-16 text-center">标准外包检测流程</h2>
          
          <div className="relative">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-[#4B827E]/20 -translate-y-1/2 z-0"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
              {[
                { step: "01", title: "需求沟通", desc: "讨论检测靶点、所需格式及样品浓度范围。" },
                { step: "02", title: "样品邮寄", desc: "根据我们的指导说明准备并邮寄待测样品。" },
                { step: "03", title: "实验室检测", desc: "由专业技术团队在验证过的系统上执行检测。" },
                { step: "04", title: "报告交付", desc: "提交完整的 PDF 电子版数据报告及原始数据。" }
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
          <h2 className="text-3xl font-bold mb-6 text-white">立即索取检测咨询与报价</h2>
          <p className="text-white/80 mb-10 max-w-2xl mx-auto text-lg">
            请提供待测靶点名称及样品数量，我们将为您核算最优惠的服务包价。
          </p>
          <button className="bg-white text-[#4B827E] px-10 py-4 rounded-full font-bold text-lg hover:bg-teal-50 transition-all shadow-lg">
            立即联系销售
          </button>
        </div>
      </section>
    </div>
  );
};

export default SampleTesting;
