import React from 'react';

interface ProductItem {
  catalog: string;
  name: string;
  format: string;
  readout: string;
  application: string;
  link: string;
  linkLabel?: string;
  species: string;
  cellBackground: string;
  sourceRow?: number;
  note?: string;
}

interface ManualItem {
  document: string;
  title: string;
  scope: string;
  link: string;
}

// Source: DiscoverX Obesity Targets Assays Catalog.xlsx, Master Catalog!A59:G77.
// Species and cell backgrounds incorporate user-confirmed browser annotations.
const products: ProductItem[] = [
  {
    "catalog": "795-0146C2",
    "name": "cAMP Hunter GIPR Gs Cell Line Assay (CHO-K1)",
    "format": "Stable Cell Line Assay",
    "readout": "cAMP Accumulation",
    "application": "GIPR 激动剂功能活性与剂量反应研究",
    "link": "/doc/user_manual/70-233_user_manual_cAMP_Hunter_Gs_and_Gi_Cell_Lines.pdf",
    "linkLabel": "平台手册",
    "species": "Human",
    "cellBackground": "CHO-K1",
    "sourceRow": 59,
    "note": ""
  },
  {
    "catalog": "95-0146E2",
    "name": "cAMP Hunter eXpress GIPR GPCR Assay (CHO-K1)",
    "format": "eXpress Assay Kit",
    "readout": "cAMP Accumulation",
    "application": "GIPR 激动剂功能活性与剂量反应研究",
    "link": "/doc/user_manual/70-234_user_manual_cAMP-Hunter-eXpress-GPCR-Assay.pdf",
    "linkLabel": "平台手册",
    "species": "Human",
    "cellBackground": "CHO-K1",
    "sourceRow": 60,
    "note": ""
  },
  {
    "catalog": "95-0146Y2-00204, 95-0146Y2-00205, 95-0146Y2-00206",
    "name": "cAMP Hunter GIP RA Bioassay Kit",
    "format": "Thaw-and-Use Bioassay Kit",
    "readout": "cAMP Accumulation",
    "application": "GIP 受体激动剂的功能活性、相对效价与方法开发",
    "link": "/doc/user_manual/70-449_cAMP_Hunter_GIP_RA_Bioassay_Kit.pdf",
    "linkLabel": "产品手册",
    "species": "Human",
    "cellBackground": "CHO-K1",
    "sourceRow": 61,
    "note": ""
  },
  {
    "catalog": "795-1186C1",
    "name": "cAMP Hunter GIPR Gs Cell Line Assay (HEK 293)",
    "format": "Stable Cell Line Assay",
    "readout": "cAMP Accumulation",
    "application": "GIPR 激动剂功能活性与剂量反应研究",
    "link": "/doc/user_manual/70-233_user_manual_cAMP_Hunter_Gs_and_Gi_Cell_Lines.pdf",
    "linkLabel": "平台手册",
    "species": "Human",
    "cellBackground": "HEK293",
    "sourceRow": 62,
    "note": ""
  },
  {
    "catalog": "95-1186E1",
    "name": "cAMP Hunter eXpress GIPR GPCR Assay (CHO-K1)",
    "format": "eXpress Assay Kit",
    "readout": "cAMP Accumulation",
    "application": "GIPR 激动剂功能活性与剂量反应研究",
    "link": "/doc/user_manual/70-234_user_manual_cAMP-Hunter-eXpress-GPCR-Assay.pdf",
    "linkLabel": "平台手册",
    "species": "Human",
    "cellBackground": "CHO-K1",
    "sourceRow": 63,
    "note": ""
  },
  {
    "catalog": "95-0146Y2-00207, 95-0146Y2-00208, 95-0146Y2-00209",
    "name": "cAMP Hunter Tirzepatide (GIP RA) Bioassay Kit",
    "format": "Thaw-and-Use Bioassay Kit",
    "readout": "cAMP Accumulation",
    "application": "Tirzepatide 的 GIPR 活性、相对效价、可比性与稳定性研究",
    "link": "/doc/user_manual/70-450_cAMP_Hunter_Tirzepatide_GIP_RA_Bioassay_Kit.pdf",
    "linkLabel": "产品手册",
    "species": "Human",
    "cellBackground": "CHO-K1",
    "sourceRow": 64,
    "note": ""
  },
  {
    "catalog": "795-0154C2",
    "name": "cAMP Hunter Mouse GIPR Gs Cell Line Assay (CHO-K1)",
    "format": "Stable Cell Line Assay",
    "readout": "cAMP Accumulation",
    "application": "GIPR 激动剂功能活性与剂量反应研究",
    "link": "/doc/user_manual/70-233_user_manual_cAMP_Hunter_Gs_and_Gi_Cell_Lines.pdf",
    "linkLabel": "平台手册",
    "species": "Mouse",
    "cellBackground": "CHO-K1",
    "sourceRow": 65,
    "note": ""
  },
  {
    "catalog": "95-0154E2",
    "name": "cAMP Hunter eXpress Mouse GIPR GPCR Assay (CHO-K1)",
    "format": "eXpress Assay Kit",
    "readout": "cAMP Accumulation",
    "application": "GIPR 激动剂功能活性与剂量反应研究",
    "link": "/doc/user_manual/70-234_user_manual_cAMP-Hunter-eXpress-GPCR-Assay.pdf",
    "linkLabel": "平台手册",
    "species": "Mouse",
    "cellBackground": "CHO-K1",
    "sourceRow": 66,
    "note": ""
  },
  {
    "catalog": "795-1028C2",
    "name": "cAMP Hunter Rat GIPR Gs Cell Line Assay (CHO-K1)",
    "format": "Stable Cell Line Assay",
    "readout": "cAMP Accumulation",
    "application": "GIPR 激动剂功能活性与剂量反应研究",
    "link": "/doc/user_manual/70-233_user_manual_cAMP_Hunter_Gs_and_Gi_Cell_Lines.pdf",
    "linkLabel": "平台手册",
    "species": "Rat",
    "cellBackground": "CHO-K1",
    "sourceRow": 67,
    "note": ""
  },
  {
    "catalog": "95-1028E2",
    "name": "cAMP Hunter eXpress Rat GIPR GPCR Assay (CHO-K1)",
    "format": "eXpress Assay Kit",
    "readout": "cAMP Accumulation",
    "application": "GIPR 激动剂功能活性与剂量反应研究",
    "link": "/doc/user_manual/70-234_user_manual_cAMP-Hunter-eXpress-GPCR-Assay.pdf",
    "linkLabel": "平台手册",
    "species": "Rat",
    "cellBackground": "CHO-K1",
    "sourceRow": 68,
    "note": ""
  },
  {
    "catalog": "795-1029C2",
    "name": "cAMP Hunter Cyno GIPR Gs Cell Line Assay (CHO-K1)",
    "format": "Stable Cell Line Assay",
    "readout": "cAMP Accumulation",
    "application": "GIPR 激动剂功能活性与剂量反应研究",
    "link": "/doc/user_manual/70-233_user_manual_cAMP_Hunter_Gs_and_Gi_Cell_Lines.pdf",
    "linkLabel": "平台手册",
    "species": "Cyno",
    "cellBackground": "CHO-K1",
    "sourceRow": 69,
    "note": ""
  },
  {
    "catalog": "95-1029E2",
    "name": "cAMP Hunter eXpress Cyno GIPR GPCR Assay (CHO-K1)",
    "format": "eXpress Assay Kit",
    "readout": "cAMP Accumulation",
    "application": "GIPR 激动剂功能活性与剂量反应研究",
    "link": "/doc/user_manual/70-234_user_manual_cAMP-Hunter-eXpress-GPCR-Assay.pdf",
    "linkLabel": "平台手册",
    "species": "Cyno",
    "cellBackground": "CHO-K1",
    "sourceRow": 70,
    "note": ""
  },
  {
    "catalog": "795-1036C2",
    "name": "cAMP Hunter Canine GIPR Gs Cell Line Assay (CHO-K1)",
    "format": "Stable Cell Line Assay",
    "readout": "cAMP Accumulation",
    "application": "GIPR 激动剂功能活性与剂量反应研究",
    "link": "/doc/user_manual/70-233_user_manual_cAMP_Hunter_Gs_and_Gi_Cell_Lines.pdf",
    "linkLabel": "平台手册",
    "species": "Canine",
    "cellBackground": "CHO-K1",
    "sourceRow": 71,
    "note": ""
  },
  {
    "catalog": "793-1095C2",
    "name": "PathHunter GIPR β-Arrestin Cell Line Assay (CHO-K1)",
    "format": "Stable Cell Line Assay",
    "readout": "β-Arrestin Recruitment",
    "application": "β-arrestin 招募与配体药理表征",
    "link": "/doc/user_manual/70-247_user_manual_PathHunter_Beta-Arrestin_Assay.pdf",
    "linkLabel": "平台手册",
    "species": "Human",
    "cellBackground": "CHO-K1",
    "sourceRow": 72,
    "note": ""
  },
  {
    "catalog": "93-1095E2",
    "name": "PathHunter eXpress GIPR CHO-K1 β-Arrestin GPCR Assay",
    "format": "eXpress Assay Kit",
    "readout": "β-Arrestin Recruitment",
    "application": "β-arrestin 招募与配体药理表征",
    "link": "/doc/user_manual/70-247_user_manual_PathHunter_Beta-Arrestin_Assay.pdf",
    "linkLabel": "平台手册",
    "species": "Human",
    "cellBackground": "CHO-K1",
    "sourceRow": 73,
    "note": ""
  },
  {
    "catalog": "793-0846C3",
    "name": "PathHunter Mouse GIPR β-Arrestin Cell Line Assay (CHO-K1)",
    "format": "Stable Cell Line Assay",
    "readout": "β-Arrestin Recruitment",
    "application": "β-arrestin 招募与配体药理表征",
    "link": "/doc/user_manual/70-247_user_manual_PathHunter_Beta-Arrestin_Assay.pdf",
    "linkLabel": "平台手册",
    "species": "Mouse",
    "cellBackground": "CHO-K1",
    "sourceRow": 74,
    "note": ""
  },
  {
    "catalog": "93-0846E3",
    "name": "PathHunter eXpress Mouse GIPR β-Arrestin GPCR Assay (U2OS)",
    "format": "eXpress Assay Kit",
    "readout": "β-Arrestin Recruitment",
    "application": "β-arrestin 招募与配体药理表征",
    "link": "/doc/user_manual/70-247_user_manual_PathHunter_Beta-Arrestin_Assay.pdf",
    "linkLabel": "平台手册",
    "species": "Mouse",
    "cellBackground": "U2OS",
    "sourceRow": 75,
    "note": ""
  },
  {
    "catalog": "HTS134C",
    "name": "ChemiSCREEN GIP Glucagon Receptor Stable Cell Line",
    "format": "Stable Cell Line",
    "readout": "Calcium Flux",
    "application": "GIPR 钙流功能检测",
    "link": "",
    "linkLabel": "平台手册",
    "species": "Human",
    "cellBackground": "Chem-1",
    "sourceRow": 76,
    "note": ""
  },
  {
    "catalog": "HTS134RTA",
    "name": "Ready-to-Assay GIP Glucagon Receptor Frozen Cells",
    "format": "Frozen Cells",
    "readout": "Calcium Flux",
    "application": "GIPR 钙流功能检测",
    "link": "",
    "linkLabel": "平台手册",
    "species": "Human",
    "cellBackground": "Chem-1",
    "sourceRow": 77,
    "note": ""
  },
  {
    "catalog": "HTS134M",
    "name": "ChemiScreen GIP Glucagon Receptor Membrane Preparation",
    "format": "Membrane preparation",
    "readout": "Ligand binding",
    "application": "配体结合与竞争结合实验，补充细胞功能检测",
    "link": "/membrane-prep",
    "species": "Human",
    "cellBackground": "—",
    "linkLabel": "参考资料",
    "note": ""
  },
  {
    "catalog": "92-1078",
    "name": "GIP",
    "format": "Control ligand",
    "readout": "GIPR agonist control",
    "application": "GIP RA 和 Tirzepatide GIP RA Bioassay 的阳性对照；使用条件见相应手册",
    "link": "/doc/user_manual/70-449_cAMP_Hunter_GIP_RA_Bioassay_Kit.pdf",
    "species": "Human",
    "cellBackground": "—",
    "linkLabel": "参考资料",
    "note": ""
  }
];

const manuals: ManualItem[] = [
  {
    "document": "70-449",
    "title": "cAMP Hunter GIP RA Bioassay Kit User Manual",
    "scope": "GIP 受体激动剂 cAMP 检测流程，包含试剂组成、细胞准备、GIP 对照与样品处理。",
    "link": "/doc/user_manual/70-449_cAMP_Hunter_GIP_RA_Bioassay_Kit.pdf"
  },
  {
    "document": "70-450",
    "title": "cAMP Hunter Tirzepatide (GIP RA) Bioassay Kit User Manual",
    "scope": "Tirzepatide 在 GIPR 上的功能活性检测，包含参比品、样品稀释及检测操作流程。",
    "link": "/doc/user_manual/70-450_cAMP_Hunter_Tirzepatide_GIP_RA_Bioassay_Kit.pdf"
  },
  {
    "document": "70-233",
    "title": "cAMP Hunter Gs and Gi Cell Lines User Manual",
    "scope": "cAMP Hunter 稳定细胞系通用手册，供细胞培养、检测条件优化和方法开发参考。",
    "link": "/doc/user_manual/70-233_user_manual_cAMP_Hunter_Gs_and_Gi_Cell_Lines.pdf"
  },
  {
    "document": "70-234",
    "title": "cAMP Hunter eXpress GPCR Assay User Manual",
    "scope": "cAMP Hunter eXpress 通用操作流程；具体 GIPR 配套产品与条件以产品资料为准。",
    "link": "/doc/user_manual/70-234_user_manual_cAMP-Hunter-eXpress-GPCR-Assay.pdf"
  },
  {
    "document": "70-247",
    "title": "PathHunter β-Arrestin Assay User Manual",
    "scope": "PathHunter β-arrestin 通用检测流程，包括激动剂、拮抗剂及抗配体抗体检测模式。",
    "link": "/doc/user_manual/70-247_user_manual_PathHunter_Beta-Arrestin_Assay.pdf"
  },
  {
    "document": "Qualification Data",
    "title": "cAMP Assay Qualification with Tirzepatide (GLP-1R and GIPR)",
    "scope": "Tirzepatide 的 GLP-1R 与 GIPR cAMP 检测资格确认资料，供双靶点方法评价参考。",
    "link": "/doc/qualification_data/cAMP Assay Qualification with Tirzepatide (GLP-1R and GIPR).pdf"
  }
];

const assayRecommendations = [
  {
    "title": "效价和相对效价检测",
    "primary": "cAMP Hunter GIP RA Bioassay Kits",
    "reason": "以 GIPR 激活后的 cAMP 累积为主要功能读数，根据样品和参比品的剂量反应曲线评价活性。"
  },
  {
    "title": "Tirzepatide 双靶点表征",
    "primary": "GIPR cAMP + GLP-1R cAMP",
    "reason": "分别在 GIPR 和 GLP-1R 体系中评价 Tirzepatide 活性。两个受体的结果应独立分析，并结合各自参比品与实验条件解读。"
  },
  {
    "title": "偏向性信号和机制研究",
    "primary": "cAMP + β-arrestin recruitment",
    "reason": "结合 G 蛋白通路与 β-arrestin 招募读数，研究不同配体的信号差异。偏向性分析需统一参比配体，并考虑受体表达量与检测时间。"
  },
  {
    "title": "早期筛选和快速验证",
    "primary": "eXpress assay kits / Stable cell lines",
    "reason": "即用型检测适合快速建立实验与候选物复测；稳定细胞系适合持续筛选和检测条件优化。"
  },
  {
    "title": "结合实验和亲和力研究",
    "primary": "ChemiScreen membrane preparation",
    "reason": "使用 GIPR 膜制品进行结合与竞争结合研究，并与细胞功能读数配合表征配体。"
  }
];

const GiprDetail: React.FC = () => {
  return (
    <div className="bg-white">
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-start">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-teal-100 bg-white px-4 py-2 text-xs font-bold uppercase tracking-widest text-[#4B827E]">
                GPCR Target Solution
              </div>
              <h1 className="mt-6 text-4xl font-extrabold text-[#1C2C5E]">GIPR / GIP Receptor</h1>
              <p className="mt-4 text-xl font-bold text-[#4B827E]">葡萄糖依赖性促胰岛素多肽受体功能检测与 Bioassay 方案</p>
              <div className="h-1 w-20 bg-[#4B827E] mt-8 mb-8"></div>
              <div className="space-y-5 text-lg leading-relaxed text-slate-600">
                <p>
                  GIPR 是葡萄糖依赖性促胰岛素多肽（GIP）的受体，属于 Class B / Glucagon GPCR family，主要偶联 Gs。受体激活可促进细胞内 cAMP 累积，也可通过 β-arrestin 招募检测补充表征其信号响应。
                </p>
                <p>
                  GIPR 是代谢疾病及多靶点肠促胰素药物研究的重要靶点。围绕 GIP 受体激动剂及 Tirzepatide 等分子的研发，可结合 cAMP、β-arrestin 与配体结合检测，支持功能活性、可比性、稳定性及药理机制研究。
                </p>
              </div>
              <a href="https://www.discoverx.com/therapeutic_areas/gip-obesity" target="_blank" rel="noopener noreferrer" className="inline-flex mt-6 text-sm font-bold text-[#4B827E] hover:underline">查看 DiscoverX GIP 官方方案 →</a>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-8">
              <h2 className="text-lg font-black text-[#1C2C5E] mb-6">Target Snapshot</h2>
              <dl className="space-y-4">
                {[
                  ['Target', 'GIPR / Glucose-dependent insulinotropic polypeptide receptor'],
                  ['Family', 'Class B / Glucagon GPCR family'],
                  ['Primary coupling', 'Gs'],
                  ['Key readouts', 'cAMP, β-arrestin recruitment, calcium flux, ligand binding'],
                  ['Ligands / reference molecules', 'GIP；Tirzepatide（双重 GIPR / GLP-1R 激动剂）'],
                  ['Typical use', 'Potency, comparability, stability, pharmacology profiling'],
                ].map(([label, value]) => (
                  <div key={label} className="border-b border-slate-100 pb-3 last:border-0">
                    <dt className="text-[11px] font-bold uppercase tracking-widest text-slate-400">{label}</dt>
                    <dd className="mt-1 text-sm font-semibold text-slate-700">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          {[
            {
              title: '疾病和药物背景',
              body: 'GIP 参与营养摄入后的胰岛素分泌调节。GIPR 与 GLP-1R 是多靶点肠促胰素药物研发的重要组合，Tirzepatide 研究需分别确认两个受体上的功能活性。',
            },
            {
              title: '多读数检测价值',
              body: 'cAMP 反映 GIPR 的 Gs 通路活性；β-arrestin 招募提供互补的信号读数；膜制品结合实验可进一步补充配体与受体相互作用的信息。',
            },
            {
              title: '产品选择思路',
              body: '效价研究可选 GIP RA 或 Tirzepatide GIP RA Bioassay Kit；药理研究可组合 cAMP 与 β-arrestin。含对照的这两类试剂盒提供 GIP，Tirzepatide 参比品需按手册另行准备。',
            },
          ].map((item) => (
            <article key={item.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-8">
              <h2 className="text-xl font-black text-[#1C2C5E] mb-4">{item.title}</h2>
              <p className="text-slate-600 leading-relaxed">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 border-y border-slate-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-[#1C2C5E]">推荐 Assay 组合</h2>
            <p className="mt-3 text-slate-500 max-w-3xl">
              根据 GIPR 项目的样品类型、研究阶段及目标读数选择检测组合；双靶点分子需要分别建立 GIPR 与 GLP-1R 检测体系。
            </p>
          </div>
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {assayRecommendations.map((item, index) => (
              <article key={item.title} className="bg-white border border-slate-200 rounded-2xl p-7 shadow-sm">
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-10 h-10 rounded-full bg-[#4B827E] text-white flex items-center justify-center font-black">{index + 1}</div>
                  <div>
                    <h3 className="font-black text-[#1C2C5E]">{item.title}</h3>
                    <p className="text-sm font-bold text-[#4B827E]">{item.primary}</p>
                  </div>
                </div>
                <p className="text-slate-600 leading-relaxed">{item.reason}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <h2 className="text-3xl font-bold text-[#1C2C5E]">相关产品列表</h2>
            <p className="mt-3 text-slate-500">收录目录中的 19 条 GIPR 产品，涵盖 cAMP、β-arrestin 和钙流检测；另附膜制品与阳性对照。</p>
          </div>
          <p className="text-xs text-slate-400 max-w-md">
            产品信息依据 DiscoverX Obesity Targets Assays Catalog 及已确认的补充资料整理。具体包装规格和货期以正式报价为准。
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
          <table className="min-w-full divide-y divide-slate-200 bg-white">
            <thead className="bg-[#1C2C5E] text-white">
              <tr>
                <th className="px-5 py-4 text-left text-xs font-bold uppercase tracking-wider">Catalog</th>
                <th className="px-5 py-4 text-left text-xs font-bold uppercase tracking-wider">Product</th>
                <th className="px-5 py-4 text-left text-xs font-bold uppercase tracking-wider">Species / 物种</th>
                <th className="px-5 py-4 text-left text-xs font-bold uppercase tracking-wider">Cell Background</th>
                <th className="px-5 py-4 text-left text-xs font-bold uppercase tracking-wider">Format</th>
                <th className="px-5 py-4 text-left text-xs font-bold uppercase tracking-wider">Readout</th>
                <th className="px-5 py-4 text-left text-xs font-bold uppercase tracking-wider">Application</th>
                <th className="px-5 py-4 text-center text-xs font-bold uppercase tracking-wider">资料</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {products.map((item) => (
                <tr key={`${item.catalog}-${item.name}`} className="hover:bg-teal-50/30">
                  <td className="px-5 py-4 min-w-52 text-sm font-mono font-bold text-[#1C2C5E]">{item.catalog.split(/,\s*/).map((catalog) => <div key={catalog}>{catalog}</div>)}</td>
                  <td className="px-5 py-4 min-w-72 text-sm font-bold text-slate-800">{item.name}{item.note && <p className="mt-2 text-xs font-normal text-amber-700">{item.note}</p>}</td>
                  <td className="px-5 py-4 whitespace-nowrap text-sm text-slate-600">{item.species}</td>
                  <td className="px-5 py-4 whitespace-nowrap text-sm text-slate-600">{item.cellBackground === 'N/A' ? '目录未提供' : item.cellBackground}</td>
                  <td className="px-5 py-4 min-w-44 text-sm text-slate-600">{item.format}</td>
                  <td className="px-5 py-4 min-w-52 text-sm text-slate-600">{item.readout}</td>
                  <td className="px-5 py-4 min-w-80 text-sm text-slate-600">{item.application}</td>
                  <td className="px-5 py-4 text-center">
                    {item.link ? <a href={item.link} target="_blank" rel="noopener noreferrer" className="whitespace-nowrap text-xs font-bold text-[#4B827E] hover:underline">{item.linkLabel}</a> : <span className="whitespace-nowrap text-xs text-slate-400">联系获取</span>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="bg-slate-50 border-y border-slate-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-[#1C2C5E]">User Manuals & Qualification Data</h2>
            <p className="mt-3 text-slate-500">GIPR 专用 Bioassay 手册、平台通用操作指南及 Tirzepatide 双靶点资格确认资料。</p>
          </div>
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {manuals.map((manual) => (
              <article key={manual.document} className="bg-white rounded-2xl border border-slate-200 p-7 shadow-sm">
                <div className="text-xs font-black uppercase tracking-widest text-[#4B827E]">{manual.document}</div>
                <h3 className="mt-3 text-lg font-black text-[#1C2C5E] leading-snug">{manual.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-slate-600">{manual.scope}</p>
                <div className="mt-6">
                  <a href={manual.link} target="_blank" rel="noopener noreferrer" className="inline-flex rounded-full bg-[#4B827E] px-4 py-2 text-xs font-bold text-white hover:bg-[#3d6b67]">
                    打开 PDF
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default GiprDetail;
