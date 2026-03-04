
import React from 'react';

const CytotoxicityDetail: React.FC = () => {
  const productData = [
    { type: 'Primary Cell', target: 'CD16 Effector Cell', moa: 'Cytotoxicity', host: 'U2OS', desc: 'Osteosarcoma' },
    { type: 'Cell Line', target: 'EGFR', moa: 'Cytotoxicity', host: 'U2OS', desc: 'Osteosarcoma' },
    { type: 'Cell Line', target: 'PD-L1', moa: 'Cytotoxicity', host: 'U2OS', desc: 'Osteosarcoma' },
    { type: 'Cell Line', target: 'PD-L2', moa: 'Cytotoxicity', host: 'U2OS', desc: 'Osteosarcoma' },
    { type: 'Cell Line', target: 'LAG3', moa: 'Cytotoxicity', host: 'Jurkat', desc: 'T lymphocyte' },
    { type: 'Cell Line', target: 'PD-1', moa: 'Cytotoxicity', host: 'Jurkat', desc: 'T lymphocyte' },
    { type: 'Cell Line', target: 'TIM3', moa: 'Cytotoxicity', host: 'Jurkat', desc: 'T lymphocyte' },
    { type: 'Cell Pool', target: '--', moa: 'Cytotoxicity', host: '4T1', desc: 'Mouse mammary gland carcinoma' },
    { type: 'Cell Pool', target: 'EGFR', moa: 'Cytotoxicity', host: 'A-498', desc: 'Renal cell carcinoma (kidney)' },
    { type: 'Cell Pool', target: 'EGFR', moa: 'Cytotoxicity', host: 'A549', desc: 'Lung cancer' },
    { type: 'Cell Pool', target: 'HER2; HER3', moa: 'Cytotoxicity', host: 'BT-474', desc: 'Mammary ductal carcinoma' },
    { type: 'Cell Pool', target: 'CCR4', moa: 'Cytotoxicity', host: 'CCRF-CEM', desc: 'T lymphocyte (CCR4+)' },
    { type: 'Cell Pool', target: 'Gpa33', moa: 'Cytotoxicity', host: 'COLO-205', desc: 'Colorectal cancer' },
    { type: 'Cell Pool', target: 'CD19; CD20; CD38', moa: 'Cytotoxicity', host: 'Daudi', desc: "Burkitt's lymphoma" },
    { type: 'Cell Pool', target: 'EFGR; HER2', moa: 'Cytotoxicity', host: 'DU-145', desc: 'Prostate carcinoma' },
    { type: 'Cell Pool', target: '--', moa: 'Cytotoxicity', host: 'EL4', desc: 'Mouse T lymphocyte line' },
    { type: 'Cell Pool', target: 'EGFR; B7-H3', moa: 'Cytotoxicity', host: 'H322', desc: 'NSCLC' },
    { type: 'Cell Pool', target: '--', moa: 'Cytotoxicity', host: 'HCT-116', desc: 'Colorectal carcinoma' },
    { type: 'Cell Pool', target: 'Glypican', moa: 'Cytotoxicity', host: 'HepG2', desc: 'Hepatocellular carcinoma' },
    { type: 'Cell Pool', target: 'CD33; CD38', moa: 'Cytotoxicity', host: 'HL-60', desc: 'Promyeloblast' },
    { type: 'Cell Pool', target: 'NY-ESO-1 (CTAG1A)', moa: 'Cytotoxicity', host: 'HT1080', desc: 'Fibrosarcoma' },
    { type: 'Cell Pool', target: 'GITR; CD30', moa: 'Cytotoxicity', host: 'Hut78', desc: 'Cutaneous T lymphocyte' },
    { type: 'Cell Pool', target: '--', moa: 'Cytotoxicity', host: 'Jurkat', desc: 'T lymphocyte' },
    { type: 'Cell Pool', target: '--', moa: 'Cytotoxicity', host: 'K562', desc: 'Bone Marrow; Chronic Myelogenous Leukemia (CML)' },
    { type: 'Cell Pool', target: 'HER2', moa: 'Cytotoxicity', host: 'MCF7', desc: 'Breast adenocarcinoma' },
    { type: 'Cell Pool', target: 'CD73; PD-L1; B7-H3', moa: 'Cytotoxicity', host: 'MDA-MB-231', desc: 'Breast cancer' },
    { type: 'Cell Pool', target: 'BCMA', moa: 'Cytotoxicity', host: 'MM-1R', desc: 'Multiple myeloma' },
    { type: 'Cell Pool', target: 'CD3; CD38', moa: 'Cytotoxicity', host: 'MOLT-4', desc: 'T-lymphoblast (Acute Lymphoblastic Leukemia)' },
    { type: 'Cell Pool', target: 'EGFR', moa: 'Cytotoxicity', host: 'NCI-H292', desc: 'NSCLC (Squamous)' },
    { type: 'Cell Pool', target: 'EGFR; HER2; B7-H3', moa: 'Cytotoxicity', host: 'NCI-N87', desc: 'Gastric cancer' },
    { type: 'Cell Pool', target: 'EGFR', moa: 'Cytotoxicity', host: 'PANC-1', desc: 'Pancreatic cancer' },
    { type: 'Cell Pool', target: 'CD19; CD20; CD38', moa: 'Cytotoxicity', host: 'Raji', desc: "Burkitt's lymphoma" },
    { type: 'Cell Pool', target: 'CD19; CD20', moa: 'Cytotoxicity', host: 'Ramos', desc: "Burkitt's lymphoma" },
    { type: 'Cell Pool', target: 'GITR; BCMA', moa: 'Cytotoxicity', host: 'RPMI 8226', desc: 'B lymphocyte' },
    { type: 'Cell Pool', target: '--', moa: 'Cytotoxicity', host: 'SKBR3', desc: 'Breast adenocarcinoma' },
    { type: 'Cell Pool', target: 'CD73', moa: 'Cytotoxicity', host: 'SK-MEL-28', desc: 'Melanoma' },
    { type: 'Cell Pool', target: 'CD73', moa: 'Cytotoxicity', host: 'SK-MEL-5', desc: 'Melanoma' },
    { type: 'Cell Pool', target: 'HER2; PD-L1', moa: 'Cytotoxicity', host: 'SKOV3', desc: 'Ovarian adenocarcinoma' },
    { type: 'Cell Pool', target: 'CD25; CD30', moa: 'Cytotoxicity', host: 'SR', desc: 'Lymphoblast' },
    { type: 'Cell Pool', target: '--', moa: 'Cytotoxicity', host: 'T2 (174 xCEM.T2)', desc: 'Lymphoblast' },
    { type: 'Cell Pool', target: 'CD33', moa: 'Cytotoxicity', host: 'THP-1', desc: 'AML' },
    { type: 'Cell Pool', target: 'CD73', moa: 'Cytotoxicity', host: 'U118-MG', desc: 'Glioblastoma' },
    { type: 'Cell Pool', target: 'CD20', moa: 'Cytotoxicity', host: 'WIL2-S', desc: 'B lymphoblast (hereditary spherocytosis)' },
  ];

  const primaryCells = productData.filter(p => p.type === 'Primary Cell');
  const cellLines = productData.filter(p => p.type === 'Cell Line');
  const cellPools = productData.filter(p => p.type === 'Cell Pool');

  const ProductTable = ({ data, title }: { data: any[], title: string }) => (
    <div className="mb-12 flex justify-start">
      <div className="inline-block max-w-full bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden w-fit">
        <div className="bg-[#4B827E] px-6 py-4">
          <h3 className="text-lg font-bold text-white uppercase tracking-wider whitespace-nowrap">{title}</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="divide-y divide-slate-200">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider border-r border-slate-200 whitespace-nowrap">产品类型</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider border-r border-slate-200 whitespace-nowrap">Targets / Antigens</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider border-r border-slate-200 whitespace-nowrap">MoA</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider border-r border-slate-200 whitespace-nowrap">细胞种类</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider whitespace-nowrap">细胞描述</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-slate-100">
              {data.map((row, idx) => (
                <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50 hover:bg-teal-50/30 transition-colors'}>
                  <td className="px-6 py-4 whitespace-nowrap text-xs text-slate-600 font-medium border-r border-slate-100">{row.type}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-[#1C2C5E] border-r border-slate-100">{row.target}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500 border-r border-slate-100">{row.moa}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-[#4B827E] border-r border-slate-100">{row.host}</td>
                  <td className="px-6 py-4 text-sm text-slate-600 whitespace-nowrap">{row.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-white">
      {/* 1. Introduction Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div>
          <h1 className="text-4xl font-extrabold text-[#1C2C5E] mb-4">细胞毒性检测产品 Cytotoxicity</h1>
          <h2 className="text-2xl font-bold text-[#4B827E] mb-6">专门用于直接测定目标细胞死亡</h2>
          <div className="h-1 w-20 bg-[#4B827E] mb-8"></div>
          <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
            <p>
              细胞毒性检测用于测量通过多种作用机制（MOA）导致的目标细胞死亡。这些机制包括：抗体依赖的细胞介导细胞毒性（ADCC）、抗体依赖的细胞吞噬（ADCP）、补体依赖的细胞毒性（CDC）、ADC药物对细胞的杀伤、细胞毒性 T 细胞介导的死亡（CTL）、双特异性抗体介导的 T 细胞重定向、嵌合抗原受体 T 细胞（CAR-T）、过继性 T 细胞治疗，等等。
            </p>
            <p>
              此类检测旨在捕获治疗药物通过一种或多种主要 MOA 导致目标细胞死亡的能力，并用于预测或模拟生理学反应。癌症免疫治疗（免疫肿瘤学）药物旨在通过增强机体免疫系统来攻击并杀死癌细胞，从而治疗癌症。因此，这类药物的检测需要在与免疫效应细胞共培养或存在补体系统的条件下检测目标癌细胞的死亡。
            </p>
            <p>
              Eurofins DiscoverX 的 **KILR®（Killing Immune-Lysis Reaction）** 细胞毒性检测平台提供了一种简便、非放射性且无染料的方法，可专门测定目标细胞死亡，并避免传统细胞毒性检测方法的缺点。该均相、板式检测平台应用广泛，可用于从筛选研究到 QC 批放行测试，尤其适用于免疫肿瘤学药物开发中的 ADCC、ADCP、CDC、CAR-T 以及 T 细胞重定向等应用。
            </p>
            <p>
              KILR 平台的灵活性允许使用稳转细胞系或细胞pool作为细胞系检测套件的一部分，以构建相关肿瘤模型。为进一步提高灵活性和易用性，KILR 提供即用型生物测定格式，可将药物开发周期缩短数月；同时，通过 KILR CD16 效应细胞，可消除 PBMC 来源供体之间的变异性，从而提高实验一致性。
            </p>
          </div>
        </div>
      </section>

      {/* 2. Comparison Section - Limitations */}
      <section className="bg-slate-50 py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1C2C5E] mb-10">常用细胞毒性检测方法的局限性</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
              <div className="text-[#4B827E] font-bold text-xl mb-4">01</div>
              <p className="text-slate-600 leading-relaxed">
                报告基因检测只能预测 MOA 潜力，通常需要桥接检测（例如 ADCC 场景下）来定量评估目标细胞死亡。
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
              <div className="text-[#4B827E] font-bold text-xl mb-4">02</div>
              <p className="text-slate-600 leading-relaxed">
                荧光染料和放射性染料检测存在安全风险，并可能由于染料自发释放导致“泄漏”，从而影响数据的准确性和可重复性。
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
              <div className="text-[#4B827E] font-bold text-xl mb-4">03</div>
              <p className="text-slate-600 leading-relaxed">
                外周血单核细胞（PBMC）等效应细胞来源于不同供体，其内在变异性会降低 lot release 检测中的一致性与可重复性。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Product Highlights */}
      <section className="bg-slate-50 py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1C2C5E] mb-10">产品亮点 / Product Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-teal-50 flex items-center justify-center text-[#4B827E] shrink-0 font-bold">✓</div>
              <div>
                <h4 className="font-bold text-[#1C2C5E] mb-1 text-lg">高特异性与高灵敏度</h4>
                <p className="text-slate-600">仅检测来自裂解目标细胞的细胞毒性信号，最低可检测 75 个死亡细胞，且具有高重复性</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-teal-50 flex items-center justify-center text-[#4B827E] shrink-0 font-bold">✓</div>
              <div>
                <h4 className="font-bold text-[#1C2C5E] mb-1 text-lg">极高的实验灵活性</h4>
                <p className="text-slate-600">可与不同类型效应细胞联合使用，并支持 30 分钟至 72 小时范围内的细胞毒性检测</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-teal-50 flex items-center justify-center text-[#4B827E] shrink-0 font-bold">✓</div>
              <div>
                <h4 className="font-bold text-[#1C2C5E] mb-1 text-lg">生物学相关性强</h4>
                <p className="text-slate-600">真实反映治疗药物或配体的作用机制</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-teal-50 flex items-center justify-center text-[#4B827E] shrink-0 font-bold">✓</div>
              <div>
                <h4 className="font-bold text-[#1C2C5E] mb-1 text-lg">多应用场景</h4>
                <p className="text-slate-600">可分析 ADCC、ADCP、CDC、CAR-T、ADC、CTL 介导的细胞死亡，以及双特异性抗体介导的 T 细胞重定向与过继性 T 细胞治疗等</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. MOA Section - Vertical Cards */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1C2C5E] mb-12 text-center">主要作用机制 (Mechanism of Action)</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {[
              { title: "ADCC (Antibody-Dependent Cellular Cytotoxicity)", desc: "抗体依赖的细胞介导细胞毒性。评估抗体通过其 Fc 段招募 NK 细胞等效应细胞诱导靶细胞死亡的能力。", img: "/pic/ADCC.png" },
              { title: "ADCP (Antibody-Dependent Cellular Phagocytosis)", desc: "抗体依赖的细胞吞噬。监测抗体介导的巨噬细胞对目标细胞的吞噬与杀伤作用。", img: "/pic/ADCP.png" },
              { title: "CDC (Complement-Dependent Cytotoxicity)", desc: "补体依赖的细胞毒性。监测补体系统激活后直接导致的目标细胞裂解。", img: "/pic/CDC.jpg" },
              { title: "T-cell Redirection", desc: "T 细胞重定向。评估双特异性抗体等药物通过招募 T 细胞对肿瘤细胞进行的定向杀伤。" },
              { title: "CAR-T (Chimeric Antigen Receptor T-cell)", desc: "嵌合抗原受体 T 细胞。定量分析工程化 T 细胞对特异性抗原表达细胞的特异性溶解效率。" }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:border-[#4B827E] transition-all">
                <div className="flex gap-8 items-center mb-4">
                  <div className="shrink-0 w-16 h-16 bg-teal-50 text-[#4B827E] rounded-full flex items-center justify-center font-black text-2xl">{i+1}</div>
                  <div>
                    <h4 className="text-xl font-bold text-[#1C2C5E] mb-2">{item.title}</h4>
                    <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
                {item.img && (
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-3/4 rounded-xl shadow-md border border-slate-200 mt-4"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Product Highlights */}
      <section className="bg-slate-50 py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1C2C5E] mb-10">产品亮点 / Product Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-teal-50 flex items-center justify-center text-[#4B827E] shrink-0 font-bold">✓</div>
              <div>
                <h4 className="font-bold text-[#1C2C5E] mb-1 text-lg">高特异性与高灵敏度</h4>
                <p className="text-slate-600">仅检测来自裂解目标细胞的细胞毒性信号，最低可检测 75 个死亡细胞，且具有高重复性</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-teal-50 flex items-center justify-center text-[#4B827E] shrink-0 font-bold">✓</div>
              <div>
                <h4 className="font-bold text-[#1C2C5E] mb-1 text-lg">极高的实验灵活性</h4>
                <p className="text-slate-600">可与不同类型效应细胞联合使用，并支持 30 分钟至 72 小时范围内的细胞毒性检测</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-teal-50 flex items-center justify-center text-[#4B827E] shrink-0 font-bold">✓</div>
              <div>
                <h4 className="font-bold text-[#1C2C5E] mb-1 text-lg">生物学相关性强</h4>
                <p className="text-slate-600">真实反映治疗药物或配体的作用机制</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-teal-50 flex items-center justify-center text-[#4B827E] shrink-0 font-bold">✓</div>
              <div>
                <h4 className="font-bold text-[#1C2C5E] mb-1 text-lg">多应用场景</h4>
                <p className="text-slate-600">可分析 ADCC、ADCP、CDC、CAR-T、ADC、CTL 介导的细胞死亡，以及双特异性抗体介导的 T 细胞重定向与过继性 T 细胞治疗等</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Product List Table Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-bold text-[#1C2C5E] mb-10 text-left">细胞毒性产品列表 / Cytotoxicity Portfolio</h2>
        
        <ProductTable title="Primary Cells" data={primaryCells} />
        <ProductTable title="Cell Lines" data={cellLines} />
        <ProductTable title="Cell Pools" data={cellPools} />

        <div className="mt-8 text-left">
          <p className="text-slate-500 text-sm italic bg-slate-50 py-4 px-6 rounded-lg border border-dashed border-slate-300 inline-block">
            * 列表中未提及的靶点可联系我们进行 KILR® Retroparticles 定制构建。
          </p>
        </div>
      </section>
    </div>
  );
};

export default CytotoxicityDetail;
