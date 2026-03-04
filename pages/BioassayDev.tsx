
import React from 'react';

const BioassayDev: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <h1 className="text-4xl font-extrabold text-[#1C2C5E] mb-6">生物活性检测开发与实施</h1>
            <h2 className="text-2xl font-bold text-[#4B827E] mb-6">Bioassay Development & Implementation</h2>
            <div className="h-1 w-20 bg-[#4B827E] mb-8"></div>
            <p className="text-slate-600 leading-relaxed text-lg mb-6">
              理想的效价（potency）生物活性检测应能够模拟治疗分子的作用机制（MOA），并在符合 ICH 与 USP 指南的前提下，在符合 GMP 与 GLP 要求的质量控制环境中，产生高度精确、准确且可重复的数据。
            </p>
            <p className="text-slate-600 leading-relaxed">
              Eurofins DiscoverX 提供业内最丰富的即用型经确认（qualified）生物活性检测试剂盒组合，覆盖从 QC 批放行效价测试实施到生物药全生命周期支持的完整需求。
            </p>
          </div>
          
        </div>
      </section>

      {/* Workflow Overview */}
      <section className="bg-slate-50 py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1C2C5E] mb-4 text-center">生物活性检测开发与实施流程</h2>
          <p className="text-center text-slate-600 mb-12 max-w-3xl mx-auto">支持生物药项目的整体解决方案</p>

          <div className="relative">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-[#4B827E]/20 -translate-y-1/2 z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative z-10">
              {[
                { step: "01", title: "检测开发", subtitle: "Assay Development" },
                { step: "02", title: "生物活性检测确认", subtitle: "Bioassay Qualification" },
                { step: "03", title: "方法转移", subtitle: "Method Transfer" },
                { step: "04", title: "生物活性检测生产", subtitle: "Bioassay Production" },
                { step: "05", title: "长期支持", subtitle: "Long-Term Support" }
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center group hover:border-[#4B827E] transition-all">
                  <div className="w-14 h-14 rounded-full bg-teal-50 text-[#4B827E] flex items-center justify-center text-xl font-black mb-4 group-hover:bg-[#4B827E] group-hover:text-white transition-all">
                    {item.step}
                  </div>
                  <h4 className="text-base font-bold text-[#1C2C5E] mb-1">{item.title}</h4>
                  <p className="text-xs text-slate-500">{item.subtitle}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Sections */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Section 1: Assay Development */}
        <div className="mb-20">
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 rounded-full bg-[#4B827E] text-white flex items-center justify-center text-xl font-black mr-4">01</div>
            <div>
              <h3 className="text-2xl font-bold text-[#1C2C5E]">检测开发 Assay Development</h3>
            </div>
          </div>

          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
            <p className="text-slate-600 leading-relaxed mb-6">
              基于双方确认的工作计划，开发团队围绕目标 MOA 与靶点生物学特性设计检测体系：
            </p>
            <ul className="grid md:grid-cols-2 gap-4">
              {[
                "构建基于 MOA 的稳定细胞系",
                "建立功能响应（cell pool 功能验证）",
                "验证 >20 代传代稳定性（或根据客户需求延长至 20–30 代以上）",
                "评估复杂基质（如血清）耐受性",
                "转换为即用型冻存生物活性检测格式"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start bg-white p-4 rounded-lg border border-slate-100">
                  <span className="text-[#4B827E] mr-3 font-bold text-lg">✓</span>
                  <span className="text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-slate-600 leading-relaxed mt-6">
              所选克隆将使用参比标准品或客户临床分子进行功能确认，并验证长期可重复性。此外，检测体系将评估复杂基质耐受能力，使其可用于中和抗体（NAb）检测开发。
            </p>
          </div>
        </div>

        {/* Section 2: Bioassay Qualification */}
        <div className="mb-20">
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 rounded-full bg-[#4B827E] text-white flex items-center justify-center text-xl font-black mr-4">02</div>
            <div>
              <h3 className="text-2xl font-bold text-[#1C2C5E]">生物活性检测确认 Bioassay Qualification</h3>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
              <h4 className="text-lg font-bold text-[#1C2C5E] mb-4">关键质量属性评估</h4>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                即用型生物活性检测通过系统化确认研究，以满足监管机构对效价检测的期望。确认研究依据 ICH 与 USP 指南评估关键质量属性（CQA）：
              </p>
              <ul className="space-y-2">
                {["准确性 (accuracy)", "精密度 (precision)", "线性 (linearity)", "范围 (range)", "特异性 (specificity)", "稳健性 (robustness)"].map((item, idx) => (
                  <li key={idx} className="flex items-center text-sm text-slate-700">
                    <span className="w-2 h-2 bg-[#4B827E] rounded-full mr-3"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
              <h4 className="text-lg font-bold text-[#1C2C5E] mb-4">交付内容</h4>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                项目启动阶段将定义关键规格参数，如相对效价范围、参与分析人员数量等。同时评估检测体系的稳定性指示能力。
              </p>
              <div className="space-y-3">
                <div className="bg-white p-4 rounded-lg border border-slate-100">
                  <p className="text-sm font-bold text-[#1C2C5E] mb-1">完整试剂盒</p>
                  <p className="text-xs text-slate-600">包含详细操作流程、优化试剂、预配置检测板</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-slate-100">
                  <p className="text-sm font-bold text-[#1C2C5E] mb-1">验证报告</p>
                  <p className="text-xs text-slate-600">可选提供符合 ICH 报告格式的完整研究数据</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-slate-100">
                  <p className="text-sm font-bold text-[#1C2C5E] mb-1">试验性批次</p>
                  <p className="text-xs text-slate-600">可生成试验性批次用于内部测试</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: Method Transfer */}
        <div className="mb-20">
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 rounded-full bg-[#4B827E] text-white flex items-center justify-center text-xl font-black mr-4">03</div>
            <div>
              <h3 className="text-2xl font-bold text-[#1C2C5E]">方法转移 Method Transfer</h3>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-50 to-teal-50 p-8 rounded-2xl border border-slate-200">
            <p className="text-slate-600 leading-relaxed mb-6">
              经确认的生物活性检测通过标准化流程转移至合作检测机构，包括 CDMO 或 CRO。
            </p>

            <div className="grid md:grid-cols-4 gap-4 mb-6">
              {[
                { num: "1", title: "技术讨论", desc: "介绍开发数据" },
                { num: "2", title: "培训", desc: "课堂与实验室培训" },
                { num: "3", title: "运行检测", desc: "使用客户临床分子" },
                { num: "4", title: "审核批准", desc: "数据审核与批准" }
              ].map((step, idx) => (
                <div key={idx} className="bg-white p-6 rounded-xl border border-slate-100 text-center">
                  <div className="w-10 h-10 rounded-full bg-[#4B827E] text-white flex items-center justify-center text-lg font-bold mx-auto mb-3">{step.num}</div>
                  <h5 className="text-sm font-bold text-[#1C2C5E] mb-1">{step.title}</h5>
                  <p className="text-xs text-slate-500">{step.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-white p-6 rounded-xl border border-teal-100">
              <h4 className="text-base font-bold text-[#1C2C5E] mb-3">持续支持</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                方法成功转移后，Eurofins DiscoverX 在验证研究阶段及商业化后阶段持续提供技术支持。当产品进入更多市场、需在新检测点实施批放行时，团队将确保顺畅转移。此外，通过生物活性检测认证计划（Bioassay Certification Program）对 CRO/CDMO 进行持续认证，为全球实施提供保障。
              </p>
            </div>
          </div>
        </div>

        {/* Section 4: Bioassay Production */}
        <div className="mb-20">
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 rounded-full bg-[#4B827E] text-white flex items-center justify-center text-xl font-black mr-4">04</div>
            <div>
              <h3 className="text-2xl font-bold text-[#1C2C5E]">生物活性检测生产 Bioassay Production</h3>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
              <div className="text-4xl font-black text-[#4B827E] mb-3">1,000+</div>
              <p className="text-sm font-bold text-[#1C2C5E] mb-2">单批最高冻存管数</p>
              <p className="text-xs text-slate-600">支持大规模生产需求</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
              <div className="text-4xl font-black text-[#4B827E] mb-3">多批次</div>
              <p className="text-sm font-bold text-[#1C2C5E] mb-2">灵活生产计划</p>
              <p className="text-xs text-slate-600">预设发货日期或按需生产</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
              <div className="text-4xl font-black text-[#4B827E] mb-3">GMP</div>
              <p className="text-sm font-bold text-[#1C2C5E] mb-2">质量保证</p>
              <p className="text-xs text-slate-600">符合监管要求的生产流程</p>
            </div>
          </div>

          <p className="text-slate-600 leading-relaxed mt-6 text-center">
            在 QC 批放行验证过程中，通常需使用多个批次的生物活性检测细胞（作为关键试剂）。根据样本检测量与稳定性研究需求，确定所需细胞冻存管数量，从而制定生产批量计划。
          </p>
        </div>

        {/* Section 5: Long-Term Support */}
        <div>
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 rounded-full bg-[#4B827E] text-white flex items-center justify-center text-xl font-black mr-4">05</div>
            <div>
              <h3 className="text-2xl font-bold text-[#1C2C5E]">长期支持 Long-Term Support</h3>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#4B827E] to-[#3d6b67] p-10 rounded-3xl text-white shadow-2xl">
            <h4 className="text-2xl font-bold mb-6">生物活性检测细胞库项目</h4>
            <p className="text-white/90 leading-relaxed mb-8">
              无论原研生物药还是生物类似药，通常具有长期市场生命周期，这要求稳健的效价检测体系、稳定一致的批次放行以及长期关键试剂供应保障。
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                <h5 className="text-lg font-bold mb-4">Cell Banks for Bioassays Program</h5>
                <ul className="space-y-3">
                  {[
                    "建立并储存分析用主细胞库（Analytical Master Cell Bank, MCB）",
                    "采用两级细胞库体系",
                    "确保长期检测可重复性",
                    "保证生物活性检测细胞持续供应",
                    "减少每批生产间的 bridging 需求"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start text-sm">
                      <span className="text-white/60 mr-3">✓</span>
                      <span className="text-white/90">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                <h5 className="text-lg font-bold mb-4">额外服务</h5>
                <div className="space-y-4">
                  <div className="bg-white/5 p-4 rounded-lg">
                    <p className="font-bold mb-2">长期供应协议</p>
                    <p className="text-sm text-white/80">确保关键试剂的持续稳定供应</p>
                  </div>
                  <div className="bg-white/5 p-4 rounded-lg">
                    <p className="font-bold mb-2">技术转移协议</p>
                    <p className="text-sm text-white/80">支持全球多地点实施</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pb-32">
        <div className="bg-gradient-to-r from-slate-50 to-teal-50 rounded-[2rem] p-12 text-center border-2 border-[#4B827E]/20">
          <h2 className="text-3xl font-bold mb-6 text-[#1C2C5E]">联系定制检测开发专家</h2>
          <p className="text-slate-600 mb-10 max-w-2xl mx-auto text-lg leading-relaxed">
            如需进一步了解生物活性检测开发与实施服务，或讨论您的具体项目需求，请联系我们的技术专家获取专业支持。
          </p>
          <button className="bg-[#4B827E] text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-[#3d6b67] transition-all shadow-lg">
            立即咨询
          </button>
        </div>
      </section>
    </div>
  );
};

export default BioassayDev;
