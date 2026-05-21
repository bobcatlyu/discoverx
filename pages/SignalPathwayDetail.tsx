
import React from 'react';
import { DEGRADATION_PORTFOLIO_COLUMNS, DEGRADATION_PORTFOLIO_ROWS } from '../data/degradationPortfolio';
import { REPORTER_PORTFOLIO_COLUMNS, REPORTER_PORTFOLIO_ROWS } from '../data/reporterPortfolio';
import { TRANSLOCATION_PORTFOLIO_COLUMNS, TRANSLOCATION_PORTFOLIO_ROWS } from '../data/translocationPortfolio';

interface ProductPortfolioTableProps {
  title: string;
  columns: string[];
  rows: string[][];
}

const ProductPortfolioTable: React.FC<ProductPortfolioTableProps> = ({ title, columns, rows }) => (
  <div>
    <div className="mb-6">
      <h3 className="text-2xl font-bold text-[#4B827E]">{title}</h3>
    </div>
    <div className="w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl">
      <table className="w-full table-auto divide-y divide-slate-200">
        <thead className="bg-[#4B827E] text-white">
          <tr>
            {columns.map((header, idx) => (
              <th key={idx} className="px-5 py-4 text-left text-sm font-bold uppercase tracking-wider">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-200 bg-white">
          {rows.map((row, rowIdx) => (
            <tr key={rowIdx} className={rowIdx % 2 === 0 ? 'bg-white' : 'bg-slate-50 hover:bg-teal-50/30 transition-colors'}>
              {row.map((cell, cellIdx) => (
                <td key={cellIdx} className={`border-r border-slate-100 px-5 py-4 align-top text-sm text-slate-700 last:border-r-0 ${columns[cellIdx] === '货号' ? 'font-mono text-[#1C2C5E]' : ''}`}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

const SignalPathwayDetail: React.FC = () => {
  return (
    <div className="bg-white">
      {/* 1. Introduction Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div>
          <h1 className="text-4xl font-extrabold text-[#1C2C5E] mb-2">信号通路检测</h1>
          <h2 className="text-xl font-bold text-[#4B827E] mb-6">Signaling Pathway Assays</h2>
          <div className="h-1 w-20 bg-[#4B827E] mb-8"></div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Left: Text Content */}
            <div className="lg:col-span-2 space-y-6 text-slate-600 leading-relaxed text-lg">
              <p>
                通过细胞水平检测解析信号通路报告基因的表达，以及多种常见靶点特异性信号通路。
              </p>

              <p>
                细胞信号通路是细胞内部传递生物信息的重要机制，对多种生理过程（包括细胞增殖、分化、代谢调控及凋亡）中的细胞内响应至关重要。当配体（例如细胞因子、生长因子或激素）与细胞表面特定受体结合后，信号通路即可被激活。通过检测细胞内信号通路对特定刺激的响应，可解析目标配体/受体相互作用的作用机制，这对于推进药物发现与开发、理解病理生理机制以及药理机制具有关键意义。
              </p>

              <p>
                而细胞水平报告基因检测也已被广泛用于评估针对信号通路中多种蛋白的治疗药物对细胞的影响。研究人员利用这类标准检测方法在转录水平研究基因表达，并将其作为一种正交筛选手段，用于理解治疗药物的作用机制（MOA）。
              </p>

              <p>
                Eurofins DiscoverX 提供全面的细胞水平信号通路指示检测产品组合，用于检测小分子或生物大分子药物对复杂信号转导通路的激活或抑制状态。
              </p>

              <p>
                <strong>PathHunter® 信号报告基因检测平台</strong>提供了一种简便、功能性的细胞检测解决方案，这类检测提供下游（转录/翻译水平）的读数，与受体近端检测的读数互为补充，从而帮助研究人员全面理解药物分子针对 NFAT、NF-κB、PD-1、STAT3、CD27、GM-CSF、IL 类受体、BCMA、TSLP 等信号通路的作用机制。
              </p>

              <p>
                特定的信号通路检测体系，通过检测信号通路中关键蛋白的降解、易位入核，可用于测量免疫反应、化合物毒性、胆固醇代谢、抗氧化功能、DNA 损伤等多种通路相关的特定事件。结合快速且简便的化学发光检测方法，这类信号通路检测可用于生成细胞水平的通路选择性谱图，并全面理解不同化合物或生物药在受体近端或远端事件中的作用，而无需依赖复杂的表型筛选体系。
              </p>
            </div>

            {/* Right: Image */}
            <div className="flex items-start justify-center">
              <img
                src="/pic/Signaling-Pathway-Product-Solutions-principles-nf-1-695x1024-1.png"
                alt="Signaling Pathway Principles"
                className="w-full h-full object-cover rounded-2xl shadow-lg border border-slate-200"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Highlights Section */}
      <section className="bg-slate-50 py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1C2C5E] mb-10 text-center">产品亮点</h2>
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl border border-slate-100 hover:shadow-lg transition-all hover:-translate-y-1">
                  <div className="flex flex-col items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#4B827E]/10 flex items-center justify-center text-[#4B827E] flex-shrink-0">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#1C2C5E] mb-2">均相检测</h3>
                      <p className="text-slate-600 leading-relaxed text-sm">
                        无洗涤步骤的高通量友好型流程，采用高灵敏度化学发光读数
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl border border-slate-100 hover:shadow-lg transition-all hover:-translate-y-1">
                  <div className="flex flex-col items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#4B827E]/10 flex items-center justify-center text-[#4B827E] flex-shrink-0">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#1C2C5E] mb-2">多检测类型</h3>
                      <p className="text-slate-600 leading-relaxed text-sm">
                        支持结合与功能性检测（直接检测与报告基因检测），无需抗体、固定或成像步骤
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl border border-slate-100 hover:shadow-lg transition-all hover:-translate-y-1">
                  <div className="flex flex-col items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#4B827E]/10 flex items-center justify-center text-[#4B827E] flex-shrink-0">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#1C2C5E] mb-2">快速且结果优异</h3>
                      <p className="text-slate-600 leading-relaxed text-sm">
                        短时间化合物孵育即可获得检测结果，具有高信噪比且无假阳性
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl border border-slate-100 hover:shadow-lg transition-all hover:-translate-y-1">
                  <div className="flex flex-col items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#4B827E]/10 flex items-center justify-center text-[#4B827E] flex-shrink-0">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#1C2C5E] mb-2">高特异性</h3>
                      <p className="text-slate-600 leading-relaxed text-sm">
                        全细胞检测、非 ELISA 方法，提高靶点检测的特异性与可靠性
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl border border-slate-100 hover:shadow-lg transition-all hover:-translate-y-1">
                  <div className="flex flex-col items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#4B827E]/10 flex items-center justify-center text-[#4B827E] flex-shrink-0">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#1C2C5E] mb-2">高应用灵活性</h3>
                      <p className="text-slate-600 leading-relaxed text-sm">
                        可用于激动剂或拮抗剂筛选，并可构建检测体系以研究其他信号通路
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl border border-slate-100 hover:shadow-lg transition-all hover:-translate-y-1">
                  <div className="flex flex-col items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#4B827E]/10 flex items-center justify-center text-[#4B827E] flex-shrink-0">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#1C2C5E] mb-2">更全面的机制理解</h3>
                      <p className="text-slate-600 leading-relaxed text-sm">
                        同时评估受体上游与下游响应，以获得对药物作用机制的综合认知
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl border border-slate-100 hover:shadow-lg transition-all hover:-translate-y-1">
                  <div className="flex flex-col items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#4B827E]/10 flex items-center justify-center text-[#4B827E] flex-shrink-0">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#1C2C5E] mb-2">生物学相关性强</h3>
                      <p className="text-slate-600 leading-relaxed text-sm">
                        MOA 导向的功能性检测，用于监测多样化信号通路并评估靶向治疗药物的生物学效应
                      </p>
                    </div>
                  </div>
                </div>
              </div>
        </div>
      </section>

      {/* 3. MOA Section - 3 Core Modules Stacked Vertically */}
      <section className="bg-slate-50 py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1C2C5E] mb-10 text-center">作用机制</h2>

          <div className="max-w-6xl mx-auto space-y-8">
            {/* Module 1: Reporter Gene */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden p-10 hover:bg-slate-50 transition-colors">
              <div className="flex flex-col md:flex-row md:items-start gap-8">
                <div className="shrink-0">
                  <div className="w-12 h-12 rounded-full bg-teal-50 flex items-center justify-center text-[#4B827E] text-xl font-bold">
                    01
                  </div>
                </div>
                <div className="flex-grow">
                  <h4 className="text-2xl font-bold text-[#4B827E] mb-4">报告基因 (Reporter Gene)</h4>
                  <p className="text-slate-600 leading-relaxed text-lg mb-6">
                    通过监测特定转录因子（如 STAT, NF-κB, FoxO）对启动子元件的激活，间接评估下游信号通路的完整性。我们的报告基因系统具有极高的诱导倍数和信噪比，是筛选生物药中和效力的理想工具。
                  </p>
                  <img
                    src="/pic/Signaling-Reporter-Assays-principles-1-1024x342-1.png"
                    alt="Reporter Gene Principles"
                    className="w-3/4 rounded-xl shadow-md border border-slate-200"
                  />
                </div>
              </div>
            </div>

            {/* Module 2: Protein Degradation */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden p-10 hover:bg-slate-50 transition-colors">
              <div className="flex flex-col md:flex-row md:items-start gap-8">
                <div className="shrink-0">
                  <div className="w-12 h-12 rounded-full bg-teal-50 flex items-center justify-center text-[#4B827E] text-xl font-bold">
                    02
                  </div>
                </div>
                <div className="flex-grow">
                  <h4 className="text-2xl font-bold text-[#4B827E] mb-4">通路蛋白降解 (Protein Degradation)</h4>
                  <p className="text-slate-600 leading-relaxed text-lg mb-6">
                    利用 EFC 技术实时、定量地监测细胞内目标蛋白的水平变化。该模块专为 TPD (Targeted Protein Degradation) 药物如 PROTAC® 或分子胶而设计，能够捕捉到纳摩尔级别的降解活性及其动力学过程。
                  </p>
                  <img
                    src="/pic/Cytokine-Receptor-principles-degradation.png"
                    alt="Protein Degradation Principles"
                    className="w-3/4 rounded-xl shadow-md border border-slate-200"
                  />
                </div>
              </div>
            </div>

            {/* Module 3: Nuclear Translocation */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden p-10 hover:bg-slate-50 transition-colors">
              <div className="flex flex-col md:flex-row md:items-start gap-8">
                <div className="shrink-0">
                  <div className="w-12 h-12 rounded-full bg-teal-50 flex items-center justify-center text-[#4B827E] text-xl font-bold">
                    03
                  </div>
                </div>
                <div className="flex-grow">
                  <h4 className="text-2xl font-bold text-[#4B827E] mb-4">核转运 (Nuclear Translocation)</h4>
                  <p className="text-slate-600 leading-relaxed text-lg">
                    直接在活细胞中追踪蛋白质在细胞质与细胞核之间的往返运动。这对于研究核受体激活、激酶调节的易位（如 AKT/FoxO 通路）以及药物诱导的贩运改变至关重要。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Product Table */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pb-32">
        <h2 className="text-3xl font-bold text-[#1C2C5E] mb-12">信号通路产品列表</h2>
        <div className="space-y-12">
          <ProductPortfolioTable
            title="报告基因 (Pathway Reporter)"
            columns={REPORTER_PORTFOLIO_COLUMNS}
            rows={REPORTER_PORTFOLIO_ROWS}
          />
          <ProductPortfolioTable
            title="转运入核 Nuclear Translocation"
            columns={TRANSLOCATION_PORTFOLIO_COLUMNS}
            rows={TRANSLOCATION_PORTFOLIO_ROWS}
          />
          <ProductPortfolioTable
            title="通路蛋白降解 Pathway Degradation"
            columns={DEGRADATION_PORTFOLIO_COLUMNS}
            rows={DEGRADATION_PORTFOLIO_ROWS}
          />
        </div>
        <div className="mt-12 text-center">
          <p className="text-slate-500 text-sm italic bg-slate-50 py-4 rounded-lg border border-dashed border-slate-300">
            * 我们可以根据您的通路研究需求，通过开发服务构建特定的报告基因或蛋白降解监测系统。
          </p>
        </div>
      </section>
    </div>
  );
};

export default SignalPathwayDetail;
