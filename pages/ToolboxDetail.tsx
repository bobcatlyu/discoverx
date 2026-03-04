
import React from 'react';

const ToolboxDetail: React.FC = () => {
  const intro = [
    "DIY 工具箱产品可帮助您在内部构建针对特定靶点与应用需求的细胞系及细胞功能检测体系。通过使用经过优化的工具产品创建理想的细胞系或检测体系，可显著节省 assay 开发所需的时间与精力。",
    "借助 Eurofins DiscoverX® 专有的酶片段互补（Enzyme Fragment Complementation, EFC）技术，您可构建稳定细胞系及细胞功能检测体系，用于研究蛋白-蛋白相互作用、化合物-靶点结合、细胞毒性、受体二聚化与信号传导、蛋白转位等多种生物学过程。",
    "深入理解 assay 原理，以便构建适用于多种应用场景的优化检测体系。通过对实验结果的分析，与科学专家沟通以优化实验设计。设计您的实验流程，并利用工程化母本细胞系、逆转录病毒颗粒（retroparticles）及质粒载体导入目标基因，建立适用于多种应用的细胞检测体系。"
  ];

  const highlights = [
    "简化流程 —— 提供详细的分步操作说明、流程图与信息图示，轻松构建检测体系",
    "灵活方案 —— 可使用任意表达载体构建突变体、修饰型蛋白或研究特异性同源物/亚型",
    "适用于任意细胞背景 —— 通过 PathHunter® 或 KILR® 逆转录病毒颗粒，在任意可分裂细胞类型中建立稳定的 β-arrestin 招募或细胞毒性检测体系",
    "完整试剂盒 —— 即用型 InCELL Pulse™ 入门套装包含构建靶点结合检测所需的全部试剂"
  ];

  const vectorsData = [
    { app: 'Bundle', cat: '93-0491', desc: 'ProLink Cloning Vector Bundle', specs: '4 Vectors' },
    { app: 'Bundle', cat: '93-1109', desc: 'ProLabel Cloning Vector Bundle', specs: '2 Vectors' },
    { app: 'N Vector', package: '93-0009', desc: 'pCMV-ProLabel N Vector', specs: '1 Vector' },
    { app: 'C Vector', package: '93-0012', desc: 'pCMV-ProLabel C Vector', specs: '1 Vector' },
    { app: 'PK1', package: '93-0167', desc: 'pCMV-ProLink 1 Vector', specs: '1 Vector' },
    { app: 'PK2', package: '93-0171', desc: 'pCMV- ProLink 2 Vector', specs: '1 Vector' },
    { app: 'ARMS1', package: '93-0489', desc: 'pCMV-ARMS1-ProLink 2 Vector', specs: '1 Vector' },
    { app: 'ARMS2', package: '93-0490', desc: 'pCMV-ARMS2-ProLink 2 Vector', specs: '1 Vector' },
  ];

  const retroData = [
    { app: 'Cytotoxicity', cat: '97-0002', desc: 'KILR Retroparticles for Suspension Cells (G418)', specs: '4 vials' },
    { app: 'Cytotoxicity', cat: '97-0003', desc: 'KILR Retroparticles for Adherent Cells (G418)', specs: '4 vials' },
    { app: 'Cytotoxicity', cat: '97-0004', desc: 'KILR Retroparticles for Adherent & Suspension Cells (G418)', specs: '4 vials' },
    { app: 'Cytotoxicity', cat: '97-0005', desc: 'KILR Retroparticles for Adherent Cells (Hygromycin B)', specs: '4 vials' },
    { app: 'Cytotoxicity', cat: '97-0006', desc: 'KILR Retroparticles for Suspension Cells (Hygromycin B)', specs: '4 vials' },
    { app: 'Cytotoxicity', cat: '97-0008', desc: 'KILR Retroparticles for Adherent & Suspension Cells (Hygromycin B)', specs: '4 vials' },
    { app: 'GPCR β-Arrestin Recruitment', cat: '93-1087', desc: 'PathHunter β-Arrestin2 Retroparticles', specs: '4 vials x 0.5 mL' },
  ];

  const parentalData = [
    { app: 'GPCR β-Arrestin Recruitment', cat: '93-0164', desc: 'PathHunter CHO-K1 β-Arrestin2-EA Parental Cell Line', specs: '2 vials' },
    { app: 'GPCR β-Arrestin Recruitment', cat: '93-0165', desc: 'PathHunter HEK 293 β-Arrestin2-EA Parental Cell Line', specs: '2 vials' },
    { app: 'GPCR β-Arrestin Recruitment', cat: '93-0166', desc: 'PathHunter U2OS β-Arrestin2-EA Parental Cell Line', specs: '2 vials' },
    { app: 'GPCR β-Arrestin Recruitment', cat: '93-0318', desc: 'PathHunter U2OS β-Arrestin1-EA Parental Cell Line', specs: '2 vials' },
    { app: 'GPCR β-Arrestin Recruitment', cat: '93-0521', desc: 'PathHunter CHO-K1 β-Arrestin1-EA Parental Cell Line', specs: '2 vials' },
    { app: 'GPCR β-Arrestin Recruitment', cat: '93-0798', desc: 'PathHunter HEK 293 β-Arrestin1-EA Parental Cell Line', specs: '2 vials' },
    { app: 'Pathway Translocation', cat: '93-0004', desc: 'PathHunter CHO-K1 NUC-EA Parental Cell Line', specs: '2 vials' },
    { app: 'Pathway Translocation', cat: '93-0178', desc: 'PathHunter U2OS NUC-EA Parental Cell Line', specs: '2 vials' },
    { app: 'Pathway Translocation', cat: '93-0797', desc: 'PathHunter HEK 293 NUC-EA Parental Cell Line', specs: '2 vials' },
    { app: 'GPCR Pharmacotraffiking', cat: '93-1101C3', desc: 'PathHunter U2OS MEM-EA Parental Cell Line', specs: '2 vials' },
    { app: 'Internalization', cat: '93-1102C3', desc: 'PathHunter U2OS ENDO-EA Parental Cell Line', specs: '2 vials' },
    { app: 'Kinase SH2 Recruitment', cat: '93-1123C3', desc: 'PathHunter U2OS SHC1-EA Parental Cell Line', specs: '2 vials' },
    { app: 'Kinase SH2 Recruitment', cat: '93-1124C3', desc: 'PathHunter U2OS mPLCG1(SH2)-EA Parental Cell Line', specs: '2 vials' },
  ];

  const ProductTable = ({ data, title }: { data: any[], title: string }) => (
    <div className="flex justify-start mb-12">
      <div className="inline-block max-w-full overflow-x-auto shadow-xl rounded-xl border border-slate-200">
        <div className="bg-[#4B827E] px-6 py-4">
          <h3 className="text-xl font-bold text-white uppercase tracking-wider">{title}</h3>
        </div>
        <table className="divide-y divide-slate-200">
          <thead className="bg-slate-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-bold text-slate-500 uppercase tracking-wider whitespace-nowrap">应用 (Application)</th>
              <th className="px-6 py-3 text-left text-xs font-bold text-slate-500 uppercase tracking-wider whitespace-nowrap">货号 (Cat No.)</th>
              <th className="px-6 py-3 text-left text-xs font-bold text-slate-500 uppercase tracking-wider whitespace-nowrap">规格 (Specs)</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-slate-100">
            {data.map((row, idx) => (
              <tr key={idx} className="hover:bg-slate-50 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600 border-r border-slate-50">{row.app}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-mono font-bold text-[#1C2C5E] border-r border-slate-50">{row.cat || row.package}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">{row.specs}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  return (
    <div className="bg-white">
      {/* 1. Introduction & Highlights Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left: Introduction */}
          <div>
            <h1 className="text-4xl font-extrabold text-[#1C2C5E] mb-2">工具箱产品</h1>
            <h2 className="text-xl font-bold text-[#4B827E] mb-6">构建您专属细胞系与细胞功能检测体系的完整工具平台</h2>
            <div className="h-1 w-20 bg-[#4B827E] mb-8"></div>
            {intro.map((paragraph, idx) => (
              <p key={idx} className="text-slate-600 leading-relaxed text-lg mb-6">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Right: Highlights */}
          <div className="flex flex-col gap-5">
            {highlights.map((highlight, idx) => {
              const [title, ...descParts] = highlight.split(' —— ');
              const description = descParts.join(' —— ');
              return (
                <div key={idx} className="bg-slate-50 p-6 rounded-xl border border-slate-100 hover:shadow-lg transition-all hover:-translate-y-1">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#4B827E]/10 flex items-center justify-center text-[#4B827E] flex-shrink-0">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#1C2C5E] mb-2">{title}</h3>
                      <p className="text-slate-600 leading-relaxed text-sm">
                        {description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Product Lists */}
      <section className="bg-slate-50 py-20 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1C2C5E] mb-12 text-left">产品目录 / Product Catalog</h2>
          <ProductTable title="质粒 Vectors" data={vectorsData} />
          <ProductTable title="逆转录病毒颗粒 Retroparticles" data={retroData} />
          <ProductTable title="亲本细胞株 Parental Cell Lines" data={parentalData} />
        </div>
      </section>

      {/* 4. Technical Note */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-xl p-8 border border-slate-200 shadow-sm">
          <h4 className="text-[#4B827E] font-bold text-lg mb-4">技术说明</h4>
          <ul className="list-disc list-inside text-slate-600 space-y-2 text-sm leading-relaxed">
            <li><strong>Vectors:</strong> 包含 ProLink™ (PK) 和 Enzyme Acceptor (EA) 标签载体，适用于构建 EFC 检测系统。</li>
            <li><strong>Retroparticles:</strong> 预包装的病毒颗粒，可直接用于瞬时或稳定转染，快速引入检测组件。</li>
            <li><strong>Parental Cell Lines:</strong> 已稳定表达 EA 融合蛋白的细胞系，只需转入 PK 标记的靶点受体即可进行功能检测。</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default ToolboxDetail;
