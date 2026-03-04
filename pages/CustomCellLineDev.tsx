
import React from 'react';

const CustomCellLineDev: React.FC = () => {
  return (
    <div className="bg-white">
      {/* 1. Hero Section - Custom Development Capabilities */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <h1 className="text-4xl font-extrabold text-[#1C2C5E] mb-6">开发服务能力</h1>
            <h2 className="text-xl font-bold text-[#4B827E] mb-6">Custom Development Capabilities</h2>
            <div className="h-1 w-20 bg-[#4B827E] mb-8"></div>
            <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
              <p>
                细胞水平检测贯穿于药物发现与开发的各个阶段，并延伸至商业化放行与稳定性测试环节。然而，在企业内部实施定制细胞检测体系的开发具有相当挑战性，从确保生理相关性到方法学确认（qualification）、验证（validation）、实施后的转移与支持等均需系统能力。尤其是符合不同研发阶段需求的检测体系，往往在技术难度、成本与资源投入方面要求较高，可能延缓项目推进至临床阶段。
              </p>
              <p>
                Eurofins DiscoverX 提供业内最全面的现货细胞水平检测产品组合，可直接用于客户项目。同时，依托在细胞系工程、检测设计、方法学确认以及细胞与蛋白生产方面的深厚经验，可根据项目特定需求提供多种定制化解决方案。例如：
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>构建不同细胞背景、不同靶点或不同细胞模型的工程细胞系</li>
                <li>开发具有特定作用机制（MOA）的创新检测体系</li>
                <li>基于客户临床候选分子开发经确认的即用型生物活性检测（bioassay）</li>
              </ul>
              <p>
                依托超过 20 年的开发服务经验，以及为全球多家公司药物发现项目开发数千项定制检测体系的实践积累（涵盖筛选、先导优化与生物分析方法开发阶段），为项目提供系统支持。
              </p>
            </div>
          </div>
          <div className="md:w-1/2">
            
          </div>
        </div>
      </section>

      {/* 2. Product Highlights Section */}
      <section className="bg-slate-50 py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1C2C5E] mb-10 text-center">产品亮点</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "开发经验深厚", desc: "数十年细胞检测体系开发、细胞系工程及重组酶开发经验" },
              { title: "细胞系工程能力", desc: "支持外源表达策略或基因编辑技术" },
              { title: "协作式开发模式", desc: "通过专属项目经理提供咨询式产品开发与定期进度更新" },
              { title: "完整解决方案", desc: "在同一团队内完成定制检测开发及配套筛选与分析服务" }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-lg bg-[#4B827E]/10 flex items-center justify-center text-[#4B827E] mb-6">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-[#1C2C5E] mb-3">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Core Capabilities Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-bold text-[#1C2C5E] mb-12 text-center">核心开发服务能力</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
            <h4 className="text-xl font-bold text-[#4B827E] mb-6 flex items-center">
              <span className="w-2 h-8 bg-[#4B827E] mr-4 rounded-full"></span>
              工程化细胞株
            </h4>
            <ul className="space-y-4 text-slate-600 text-sm">
              <li className="flex items-start">
                <span className="text-[#4B827E] mr-2 font-bold">•</span>
                外源表达策略（组成型或诱导型）
              </li>
              <li className="flex items-start">
                <span className="text-[#4B827E] mr-2 font-bold">•</span>
                基因编辑（如基于 CRISPR/Cas9 的基因敲除 KO / 敲入 KI）
              </li>
              <li className="flex items-start">
                <span className="text-[#4B827E] mr-2 font-bold">•</span>
                逆转录病毒或慢病毒转导
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
            <h4 className="text-xl font-bold text-[#4B827E] mb-6 flex items-center">
              <span className="w-2 h-8 bg-[#4B827E] mr-4 rounded-full"></span>
              生物活性检测 (Bioassay)
            </h4>
            <ul className="space-y-4 text-slate-600 text-sm">
              <li className="flex items-start">
                <span className="text-[#4B827E] mr-2 font-bold">•</span>
                Bioassay 开发及基于 ICH 指南的方法学确认
              </li>
              <li className="flex items-start">
                <span className="text-[#4B827E] mr-2 font-bold">•</span>
                Bioassay 向 QC 检测现场转移
              </li>
              <li className="flex items-start">
                <span className="text-[#4B827E] mr-2 font-bold">•</span>
                大批量或多批次即用型冻存细胞生产
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
            <h4 className="text-xl font-bold text-[#4B827E] mb-6 flex items-center">
              <span className="w-2 h-8 bg-[#4B827E] mr-4 rounded-full"></span>
              筛选与研究支持
            </h4>
            <ul className="space-y-4 text-slate-600 text-sm">
              <li className="flex items-start">
                <span className="text-[#4B827E] mr-2 font-bold">•</span>
                筛选（高通量与超高通量）、功能表征、分型分析
              </li>
              <li className="flex items-start">
                <span className="text-[#4B827E] mr-2 font-bold">•</span>
                IND 支持研究及可比性研究
              </li>
              <li className="flex items-start">
                <span className="text-[#4B827E] mr-2 font-bold">•</span>
                膜制备物开发与生产
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
            <h4 className="text-xl font-bold text-[#4B827E] mb-6 flex items-center">
              <span className="w-2 h-8 bg-[#4B827E] mr-4 rounded-full"></span>
              细胞库生产
            </h4>
            <ul className="space-y-4 text-slate-600 text-sm">
              <li className="flex items-start">
                <span className="text-[#4B827E] mr-2 font-bold">•</span>
                分析用主细胞库 (MCB) 两级生产体系
              </li>
              <li className="flex items-start">
                <span className="text-[#4B827E] mr-2 font-bold">•</span>
                关键试剂与生物检定细胞供应
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm lg:col-span-2">
            <h4 className="text-xl font-bold text-[#4B827E] mb-6 flex items-center">
              <span className="w-2 h-8 bg-[#4B827E] mr-4 rounded-full"></span>
              蛋白开发与生产
            </h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-600 text-sm">
              <li className="flex items-start">
                <span className="text-[#4B827E] mr-2 font-bold">•</span>
                重组酶生产（活性型、失活型、无活性型）
              </li>
              <li className="flex items-start">
                <span className="text-[#4B827E] mr-2 font-bold">•</span>
                多亚基蛋白复合体构建
              </li>
              <li className="flex items-start">
                <span className="text-[#4B827E] mr-2 font-bold">•</span>
                定制化纯化工艺开发
              </li>
              <li className="flex items-start">
                <span className="text-[#4B827E] mr-2 font-bold">•</span>
                高质量蛋白表征与质量控制
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 4. Workflow Section */}
      <section className="bg-slate-50 py-20 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1C2C5E] mb-16 text-center">定制检测开发项目流程</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Phase 1 */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 flex flex-col gap-6">
              <div>
                <div className="text-[#4B827E] text-sm font-bold uppercase tracking-widest mb-2">Phase 01</div>
                <h3 className="text-2xl font-bold text-[#1C2C5E]">项目定义</h3>
              </div>
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-[#1C2C5E] mb-3">关键活动</h4>
                  <ul className="space-y-2 text-slate-600 text-sm">
                    <li>• 深度咨询：明确项目目标与范围</li>
                    <li>• 可行性研究：评估技术路径与可实施性</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-[#1C2C5E] mb-3">交付成果</h4>
                  <ul className="space-y-2 text-slate-600 text-sm">
                    <li>• 详细工作计划（包含时间表、项目交付内容与报价）</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Phase 2 */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 flex flex-col gap-6">
              <div>
                <div className="text-[#4B827E] text-sm font-bold uppercase tracking-widest mb-2">Phase 02</div>
                <h3 className="text-2xl font-bold text-[#1C2C5E]">项目执行</h3>
              </div>
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-[#1C2C5E] mb-3">关键活动</h4>
                  <ul className="space-y-2 text-slate-600 text-sm">
                    <li>• 细胞系工程：稳定细胞系构建、功能验证与稳定性测试</li>
                    <li>• 检测体系开发：方法优化与详细操作流程制定</li>
                    <li>• 筛选与分型：使用目录产品或定制检测体系测试客户分子</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-[#1C2C5E] mb-3">交付成果</h4>
                  <ul className="space-y-2 text-slate-600 text-sm">
                    <li>• 每两周提供进度更新及阶段性里程碑报告</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Phase 3 */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 flex flex-col gap-6">
              <div>
                <div className="text-[#4B827E] text-sm font-bold uppercase tracking-widest mb-2">Phase 03</div>
                <h3 className="text-2xl font-bold text-[#1C2C5E]">材料交付</h3>
              </div>
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-[#1C2C5E] mb-3">交付内容</h4>
                  <ul className="space-y-2 text-slate-600 text-sm">
                    <li>• 验证稳定细胞系</li>
                    <li>• 经确认的即用型生物活性检测</li>
                    <li>• 膜制备产品</li>
                    <li>• 生物活性检测 ICH 方法学确认报告</li>
                    <li>• 可比性研究报告</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-[#1C2C5E] mb-3">可选服务</h4>
                  <ul className="space-y-2 text-slate-600 text-sm">
                    <li>• 大批量生产</li>
                    <li>• 主细胞库建立</li>
                    <li>• 方法转移至检测现场</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Contact CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pb-32">
        <div className="bg-gradient-to-r from-[#4B827E] to-[#3d6b67] rounded-[2rem] p-12 text-center text-white shadow-2xl">
          <h2 className="text-3xl font-bold mb-6 text-white">准备好开启您的定制项目了吗？</h2>
          <p className="text-white/80 mb-10 max-w-2xl mx-auto text-lg">
            填写您的项目需求，我们的技术专家将在 24 小时内为您提供初步的技术建议与报价方案。
          </p>
          <button className="bg-white text-[#4B827E] px-10 py-4 rounded-full font-bold text-lg hover:bg-teal-50 transition-all shadow-lg">
            立即咨询专家
          </button>
        </div>
      </section>
    </div>
  );
};

export default CustomCellLineDev;
