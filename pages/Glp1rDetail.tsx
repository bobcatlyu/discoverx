import React from 'react';

interface ProductItem {
  catalog: string;
  name: string;
  format: string;
  readout: string;
  application: string;
}

interface ManualItem {
  document: string;
  title: string;
  scope: string;
  link: string;
}

const products: ProductItem[] = [
  {
    catalog: '95-0062Y2',
    name: 'cAMP Hunter CHO-K1 GLP1R Bioassay Cells / Bioassay Kit',
    format: 'Ready-to-use Bioassay cells / kit context',
    readout: 'cAMP accumulation',
    application: 'GLP-1RA potency, relative potency, comparability and stability studies',
  },
  {
    catalog: '95-0062Y2-00175 / 00176',
    name: 'cAMP Hunter Semaglutide Bioassay Kit',
    format: 'Qualified Bioassay Kit',
    readout: 'GLP1R-mediated cAMP accumulation',
    application: 'Semaglutide / Ozempic-related potency and comparability workflows',
  },
  {
    catalog: '95-0062Y2-00198 / 00199 / 00200',
    name: 'cAMP Hunter Tirzepatide (GLP-1 RA) Bioassay Kit',
    format: 'Qualified Bioassay Kit',
    readout: 'GLP1R-mediated cAMP accumulation',
    application: 'Tirzepatide GLP-1 receptor agonist activity and relative potency workflows',
  },
  {
    catalog: '95-0062Y2-00099',
    name: 'cAMP Hunter Liraglutide Bioassay Kit',
    format: 'Bioassay Kit',
    readout: 'GLP1R-mediated cAMP accumulation',
    application: 'Liraglutide / Victoza-related functional potency workflows',
  },
  {
    catalog: '95-0062E2',
    name: 'cAMP Hunter eXpress GLP1R CHO-K1 GPCR Assay',
    format: 'eXpress assay cells',
    readout: 'cAMP modulation / accumulation',
    application: 'Rapid GLP1R agonist pharmacology setup using Exendin-4 control',
  },
  {
    catalog: '95-1185C1',
    name: 'cAMP Hunter GLP1R Gs Cell Line',
    format: 'Stable cell line, HEK 293',
    readout: 'cAMP signaling',
    application: 'Stable-cell-line workflow for method development and in-house assay optimization',
  },
  {
    catalog: '93-0300C2',
    name: 'PathHunter CHO-K1 GLP1R beta-Arrestin Cell Line',
    format: 'Stable cell line, CHO-K1',
    readout: 'beta-arrestin-2 recruitment',
    application: 'Orthogonal GLP1R pharmacology, beta-arrestin engagement and biased signaling profiling',
  },
  {
    catalog: '793-0300C2',
    name: 'PathHunter Human GLP-1 / GLP1R beta-Arrestin Stable Cell Line Assay',
    format: 'Bundled assay configuration',
    readout: 'beta-arrestin recruitment',
    application: 'Stable-cell-line assay bundle with recommended materials for GLP1R beta-arrestin workflow',
  },
  {
    catalog: '93-0300E2',
    name: 'PathHunter eXpress GLP1R CHO-K1 beta-Arrestin GPCR Assay',
    format: 'eXpress assay cells',
    readout: 'beta-arrestin-2 recruitment',
    application: 'Fast beta-arrestin assay setup without long-term cell propagation',
  },
  {
    catalog: '93-0914C2',
    name: 'PathHunter CHO-K1 GLP1R beta-Arrestin-1 Cell Line',
    format: 'Stable cell line, CHO-K1',
    readout: 'beta-arrestin-1 recruitment',
    application: 'Arrestin isoform comparison and GLP1R pathway profiling',
  },
  {
    catalog: '93-0914E2',
    name: 'PathHunter eXpress GLP1R CHO-K1 beta-Arrestin-1 GPCR Assay',
    format: 'eXpress assay cells',
    readout: 'beta-arrestin-1 recruitment',
    application: 'Ready-to-use beta-arrestin-1 assay format for GLP1R profiling',
  },
  {
    catalog: '93-0300Y2',
    name: 'PathHunter CHO-K1 GLP1R Bioassay',
    format: 'Bioassay cells / kit context',
    readout: 'beta-arrestin recruitment',
    application: 'GLP1R agonist bioassay workflow using PathHunter EFC chemiluminescent detection',
  },
  {
    catalog: '93-0724C3',
    name: 'PathHunter GLP1R Activated GPCR Internalization U2OS Cell Line',
    format: 'Stable cell line, U2OS',
    readout: 'Activated receptor internalization',
    application: 'Receptor trafficking and internalization-biased response evaluation',
  },
  {
    catalog: '93-0724E3',
    name: 'PathHunter eXpress GLP1R Activated GPCR Internalization Assay',
    format: 'eXpress assay cells, U2OS',
    readout: 'Activated receptor internalization',
    application: 'Rapid internalization assay setup for ligand-induced receptor trafficking',
  },
  {
    catalog: '93-1075C3',
    name: 'PathHunter GLP1R Total GPCR Internalization U2OS Cell Line',
    format: 'Stable cell line, U2OS',
    readout: 'Total receptor internalization',
    application: 'Internalization and desensitization studies where total receptor movement is the desired readout',
  },
  {
    catalog: '93-1075E3',
    name: 'PathHunter eXpress GLP1R Total GPCR Internalization Assay',
    format: 'eXpress assay cells, U2OS',
    readout: 'Total receptor internalization',
    application: 'Ready-to-use total internalization workflow for GLP1R agonist profiling',
  },
  {
    catalog: 'HTS163L',
    name: 'ChemiBrite GLP-1 Glucagon Family Receptor Stable Cell Line',
    format: 'Stable cell line',
    readout: 'Calcium flux, luminescent photoprotein readout',
    application: 'Calcium-flux GPCR functional assay option for GLP-1 receptor biology',
  },
  {
    catalog: 'HTS163LRTA',
    name: 'ChemiBrite GLP-1 Glucagon Family Receptor Frozen Cells',
    format: 'Ready-to-assay frozen cells',
    readout: 'Calcium flux',
    application: 'Rapid calcium assay workflow without intensive cell culture',
  },
  {
    catalog: 'HTS163M',
    name: 'ChemiScreen GLP-1 Glucagon-Like Peptide Membrane Preparation',
    format: 'Membrane preparation',
    readout: 'Ligand binding support',
    application: 'Binding assay support for receptor occupancy, affinity and competition studies',
  },
  {
    catalog: '92-1115',
    name: 'Exendin-4',
    format: 'Control ligand',
    readout: 'GLP1R agonist control',
    application: 'Positive control for cAMP, beta-arrestin and internalization assays where specified',
  },
];

const manuals: ManualItem[] = [
  {
    document: '70-448',
    title: 'cAMP Hunter GLP-1 RA Bioassay Kit User Manual',
    scope: 'General GLP-1RA cAMP bioassay workflow, including kit components, reagent handling and assay setup.',
    link: '/doc/user_manual/70-448_cAMP_Hunter_GLP_1_RA_Bioassay_Kit.pdf',
  },
  {
    document: '70-447',
    title: 'cAMP Hunter Tirzepatide GLP-1 RA Bioassay Kit User Manual',
    scope: 'Tirzepatide GLP-1 receptor agonist bioassay workflow and plate procedure.',
    link: '/doc/user_manual/70-447_cAMP_Hunter_Tirzepatide_GLP_1_RA_Bioassay_Kit.pdf',
  },
  {
    document: '70-441',
    title: 'cAMP Hunter Semaglutide Bioassay Kit User Manual',
    scope: 'Semaglutide GLP1R cAMP bioassay workflow, storage, protocol schematic and quick-start procedure.',
    link: '/doc/user_manual/70-441_cAMP_Hunter_Semaglutide_Bioassay_Kit.pdf',
  },
  {
    document: '70-390',
    title: 'cAMP Hunter Exenatide Bioassay Kit User Manual',
    scope: 'Exenatide cAMP bioassay workflow with reference standard and sample preparation guidance.',
    link: '/doc/user_manual/70-390_cAMP_Hunter_Exenatide_Bioassay_Kit.pdf',
  },
  {
    document: '70-329',
    title: 'PathHunter GLP-1(7-37) Bioassay Kit User Manual',
    scope: 'PathHunter GLP1R beta-arrestin bioassay workflow, materials, quick-start procedure and troubleshooting.',
    link: '/doc/user_manual/70-329_PathHunter_GLP1-7-37_Bioassay_Kit.pdf',
  },
  {
    document: '70-247',
    title: 'PathHunter Beta-Arrestin Assay User Manual',
    scope: 'Shared PathHunter beta-arrestin assay workflow for agonist, antagonist and anti-ligand antibody modes.',
    link: '/doc/user_manual/70-247_user_manual_PathHunter_Beta-Arrestin_Assay.pdf',
  },
];

const assayRecommendations = [
  {
    title: '效价和相对效价检测',
    primary: 'cAMP Hunter GLP-1RA Bioassay Kits',
    reason: 'GLP-1R 是 Gs 偶联受体，cAMP accumulation 是 GLP-1RA 药物活性和效价评价的主要功能读数。',
  },
  {
    title: '偏向性信号和机制表征',
    primary: 'cAMP + beta-arrestin + internalization',
    reason: '对 Semaglutide、Tirzepatide 等 incretin agonist，单一读数不足以解释 receptor activation、arrestin engagement 和 receptor trafficking 的差异。',
  },
  {
    title: '受体内吞和脱敏研究',
    primary: 'Activated / Total GPCR Internalization Assays',
    reason: 'Activated internalization 更偏向检测 arrestin-associated internalization；Total internalization 更适合观察整体受体转运。',
  },
  {
    title: '早期筛选和快速验证',
    primary: 'eXpress assay cells / Ready-to-assay frozen cells',
    reason: '即用型细胞可减少细胞培养准备时间，适合早期筛选、条件摸索和快速复测。',
  },
  {
    title: '结合实验和受体占位',
    primary: 'ChemiScreen membrane preparation',
    reason: '膜制品适合做 ligand binding、competition binding 和亲和力相关实验，作为功能读数的补充。',
  },
];

const Glp1rDetail: React.FC = () => {
  return (
    <div className="bg-white">
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-start">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-teal-100 bg-white px-4 py-2 text-xs font-bold uppercase tracking-widest text-[#4B827E]">
                GPCR Target Solution
              </div>
              <h1 className="mt-6 text-4xl font-extrabold text-[#1C2C5E]">GLP-1R / GLP1R</h1>
              <p className="mt-4 text-xl font-bold text-[#4B827E]">胰高血糖素样肽-1受体功能检测与 Bioassay 方案</p>
              <div className="h-1 w-20 bg-[#4B827E] mt-8 mb-8"></div>
              <div className="space-y-5 text-lg leading-relaxed text-slate-600">
                <p>
                  GLP-1R 是 glucagon receptor family 中的 Gs-coupled GPCR。受体激活后可驱动细胞内 cAMP accumulation，并伴随 beta-arrestin recruitment、receptor internalization 等后续事件。
                </p>
                <p>
                  GLP-1 receptor agonist 和双重 incretin agonist 研发通常需要覆盖效价检测、可比性研究、稳定性研究、药理机制表征和偏向性信号分析。DiscoverX 相关产品可提供 cAMP、beta-arrestin、内吞、钙流和结合实验等多种互补读数。
                </p>
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-8">
              <h2 className="text-lg font-black text-[#1C2C5E] mb-6">Target Snapshot</h2>
              <dl className="space-y-4">
                {[
                  ['Target', 'GLP1R / Glucagon-like peptide receptor 1'],
                  ['Family', 'Glucagon GPCR family'],
                  ['Primary coupling', 'Gs'],
                  ['Key readouts', 'cAMP, beta-arrestin, internalization, calcium flux, binding'],
                  ['Common controls', 'Exendin-4, Semaglutide, Tirzepatide, Liraglutide, Exenatide'],
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
              body: 'GLP-1R 是 2 型糖尿病、肥胖及相关代谢疾病药物开发中的核心靶点。Semaglutide、Liraglutide、Exenatide、Tirzepatide 等分子都需要以功能读数确认 GLP-1R 相关活性。',
            },
            {
              title: '多读数检测价值',
              body: 'cAMP 适合作为 GLP-1RA potency 主读数；beta-arrestin 和 internalization 可补充观察 receptor trafficking、desensitization 和 biased signaling。',
            },
            {
              title: '产品选择思路',
              body: '效价和可比性研究优先考虑 ready-to-use Bioassay Kit；机制研究可组合 cAMP、beta-arrestin 和内吞读数；结合实验可用 membrane preparation 作为补充。',
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
              GLP-1R 项目常需要多个 readout 互相印证。根据项目阶段选择检测组合，可更清楚地区分 potency、pharmacology 和 biased signaling。
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
            <p className="mt-3 text-slate-500">覆盖 GLP-1R 的功能检测、Bioassay Kit、内吞、钙流、膜制品和对照试剂。</p>
          </div>
          <p className="text-xs text-slate-400 max-w-md">
            具体包装规格、当前货期和适用文件以正式报价与最新产品资料为准。
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
          <table className="min-w-full divide-y divide-slate-200 bg-white">
            <thead className="bg-[#1C2C5E] text-white">
              <tr>
                <th className="px-5 py-4 text-left text-xs font-bold uppercase tracking-wider">Catalog</th>
                <th className="px-5 py-4 text-left text-xs font-bold uppercase tracking-wider">Product</th>
                <th className="px-5 py-4 text-left text-xs font-bold uppercase tracking-wider">Format</th>
                <th className="px-5 py-4 text-left text-xs font-bold uppercase tracking-wider">Readout</th>
                <th className="px-5 py-4 text-left text-xs font-bold uppercase tracking-wider">Application</th>
                <th className="px-5 py-4 text-center text-xs font-bold uppercase tracking-wider">资料</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {products.map((item) => (
                <tr key={`${item.catalog}-${item.name}`} className="hover:bg-teal-50/30">
                  <td className="px-5 py-4 whitespace-nowrap text-sm font-mono font-bold text-[#1C2C5E]">{item.catalog}</td>
                  <td className="px-5 py-4 min-w-72 text-sm font-bold text-slate-800">{item.name}</td>
                  <td className="px-5 py-4 min-w-44 text-sm text-slate-600">{item.format}</td>
                  <td className="px-5 py-4 min-w-52 text-sm text-slate-600">{item.readout}</td>
                  <td className="px-5 py-4 min-w-80 text-sm text-slate-600">{item.application}</td>
                  <td className="px-5 py-4 text-center">
                    <span className="text-xs text-slate-400">联系获取</span>
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
            <h2 className="text-3xl font-bold text-[#1C2C5E]">User Manuals</h2>
            <p className="mt-3 text-slate-500">常用操作手册可用于查看实验流程、试剂处理、plate workflow、快速操作步骤和 troubleshooting。</p>
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

export default Glp1rDetail;
