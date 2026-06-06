import React from 'react';

interface MoaItem {
  title: string;
  description: string;
  imageUrl?: string;
  maxWidth?: string;
}

interface ProductRow {
  target: string;
  moa: string;
  statuses: string[];
}

const EPIGENETIC_HEADERS = ['Cell Line', 'eXpress® kit', 'Protein'];

const normalizeHighlight = (highlight: string) => {
  const [heading, ...rest] = highlight.split('——');
  return { heading, description: rest.join('——') };
};

const normalizeStatus = (status: string) => {
  if (status === '鉁?' || status === '✔︎' || status === '✓') {
    return '✔';
  }
  return status;
};

const EpigeneticDetail: React.FC = () => {
  const intro = [
    '表观遗传学研究的是由非遗传机制引起的基因表达可遗传或获得性变化，而这些变化并不涉及基因结构或序列的改变。基本表观遗传机制包括组蛋白修饰、DNA 甲基化以及染色质重塑，这些机制在多种生理过程的基因调控中发挥关键作用。当这些机制发生改变（例如核小体 DNA 或组蛋白成分的修饰，或非编码 RNA 的表达变化）时，可能与多种癌症、免疫相关疾病以及神经退行性疾病相关。',
    'Eurofins DiscoverX 提供表观遗传相关的重组蛋白及 InCELL Hunter™ 细胞水平检测产品，用于研究表观遗传机制的调控，并识别 DNA 甲基转移酶及溴结构域（bromodomain）的小分子抑制剂与调节剂。InCELL Hunter 细胞水平化合物-靶标结合检测可用于确认小分子化合物的细胞进入及表观遗传靶点结合情况，筛选并排序抑制剂，验证生化检测中获得的命中化合物，并在原生细胞环境中测定细胞 EC50 值。',
  ];

  const highlights = [
    '生物学相关性强——获得细胞水平化合物进入及表观遗传靶点结合的定量数据，为药物发现决策提供更可靠依据',
    '操作简便且可扩展——均相、高通量友好型流程，采用化学发光读数即可轻松测定化合物与表观遗传靶点的结合',
    '靶点特异性与选择性——可筛选并区分 BRD4 的多种目标选择性立体异构体，并确定靶点特异性',
    '高质量蛋白——采用优化表达体系生产的表观遗传相关重组蛋白，具有高纯度与高质量',
  ];

  const moas: MoaItem[] = [
    {
      title: '靶向蛋白降解 (Targeted Protein Degradation)',
      description: '利用 PROTAC® 或分子胶等新型降解技术，通过 EFC 技术实时监测细胞内特定表观遗传靶标（如 BRD4, STAT3）的降解过程及动力学，是验证 TPD 药物效能的金标准。',
      imageUrl: '/pic/SPRINTer-Targeted-Protein_Degradation_Assay-Principle-2048x522-1.jpg',
      maxWidth: 'max-w-3xl',
    },
    {
      title: '靶标结合 (Target Engagement)',
      description: '在活细胞环境中，通过酶片段互补技术直接测定小分子与靶标蛋白（如溴域蛋白 Bromodomains）的物理结合。这种方法能更准确地预测药物在体内的实际活性。',
      imageUrl: '/pic/Target-Engagement-Assays-principles-2.png',
      maxWidth: 'max-w-3xl',
    },
    {
      title: '筛选与活性分析 (Screening & Activity Analysis)',
      description: '针对表观遗传酶（如 HDACs, HMTs, HDMs），提供高纯度的活性重组蛋白。这些蛋白经过严格质量评估，适用于体外高通量筛选、酶动力学研究及抑制剂谱图分析。',
    },
  ];

  const data: ProductRow[] = [
    { target: 'BRD4', moa: 'Targeted Protein Degradation', statuses: ['✓', '✓', ''] },
    { target: 'STAT3', moa: 'Targeted Protein Degradation', statuses: ['✓', '✓', ''] },
    { target: 'BAZ2A', moa: 'Target Engagement', statuses: ['✓', '', ''] },
    { target: 'BRD2(1)', moa: 'Target Engagement', statuses: ['✓', '✓', ''] },
    { target: 'BRD2(1,2)', moa: 'Target Engagement', statuses: ['✓', '', ''] },
    { target: 'BRD3(1)', moa: 'Target Engagement', statuses: ['✓', '', ''] },
    { target: 'BRD3(1,2)', moa: 'Target Engagement', statuses: ['✓', '✓', ''] },
    { target: 'BRD4(1)', moa: 'Target Engagement', statuses: ['✓', '✓', ''] },
    { target: 'BRDT(1)', moa: 'Target Engagement', statuses: ['✓', '', ''] },
    { target: 'BRDT(1,2)', moa: 'Target Engagement', statuses: ['✓', '✓', ''] },
    { target: 'EP300', moa: 'Target Engagement', statuses: ['✓', '', ''] },
    { target: 'G9a', moa: 'Target Engagement', statuses: ['✓', '', '✓'] },
    { target: 'GLP', moa: 'Target Engagement', statuses: ['✓', '', '✓'] },
    { target: 'PRMT3', moa: 'Target Engagement', statuses: ['✓', '', ''] },
    { target: 'SMARCA4', moa: 'Target Engagement', statuses: ['✓', '✓', ''] },
    { target: 'TAF1L(2)', moa: 'Target Engagement', statuses: ['✓', '', ''] },
    { target: 'DNMT1', moa: 'Screening & Activity Analysis', statuses: ['', '', '✓'] },
    { target: 'DOT1L', moa: 'Screening & Activity Analysis', statuses: ['', '', '✓'] },
    { target: 'EHMT1', moa: 'Screening & Activity Analysis', statuses: ['', '', '✓'] },
    { target: 'G9a', moa: 'Screening & Activity Analysis', statuses: ['', '', '✓'] },
    { target: 'HAT1', moa: 'Screening & Activity Analysis', statuses: ['', '', '✓'] },
    { target: 'hPHF8', moa: 'Screening & Activity Analysis', statuses: ['', '', '✓'] },
    { target: 'JMJD2A', moa: 'Screening & Activity Analysis', statuses: ['', '', '✓'] },
    { target: 'JMJD2B', moa: 'Screening & Activity Analysis', statuses: ['', '', '✓'] },
    { target: 'JMJD2C', moa: 'Screening & Activity Analysis', statuses: ['', '', '✓'] },
    { target: 'JMJD2D', moa: 'Screening & Activity Analysis', statuses: ['', '', '✓'] },
    { target: 'JMJD2E', moa: 'Screening & Activity Analysis', statuses: ['', '', '✓'] },
    { target: 'JMJD3', moa: 'Screening & Activity Analysis', statuses: ['', '', '✓'] },
    { target: 'KAT2A (GCN5L2)', moa: 'Screening & Activity Analysis', statuses: ['', '', '✓'] },
    { target: 'NSD1', moa: 'Screening & Activity Analysis', statuses: ['', '', '✓'] },
    { target: 'PRMT1', moa: 'Screening & Activity Analysis', statuses: ['', '', '✓'] },
    { target: 'PRMT3', moa: 'Screening & Activity Analysis', statuses: ['', '', '✓'] },
    { target: 'SETD2', moa: 'Screening & Activity Analysis', statuses: ['', '', '✓'] },
    { target: 'SETD7', moa: 'Screening & Activity Analysis', statuses: ['', '', '✓'] },
    { target: 'SETD8', moa: 'Screening & Activity Analysis', statuses: ['', '', '✓'] },
    { target: 'Sirtuin 1', moa: 'Screening & Activity Analysis', statuses: ['', '', '✓'] },
    { target: 'Sirtuin 2', moa: 'Screening & Activity Analysis', statuses: ['', '', ''] },
    { target: 'SUV39H2', moa: 'Screening & Activity Analysis', statuses: ['', '', '✓'] },
    { target: 'SUV4-20H2', moa: 'Screening & Activity Analysis', statuses: ['', '', '✓'] },
    { target: 'WHSC1 (NSD2)', moa: 'Screening & Activity Analysis', statuses: ['', '', '✓'] },
  ];

  return (
    <div className="bg-white">
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="mb-2 text-4xl font-extrabold text-[#1C2C5E]">表观遗传蛋白 Epigenetic Proteins Assays</h1>
        <div className="mb-8 h-1 w-20 bg-[#4B827E]"></div>
        <div className="space-y-6 text-lg leading-relaxed text-slate-600">
          {intro.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="border-t border-slate-100 bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-10 text-center text-3xl font-bold text-[#1C2C5E]">产品亮点</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {highlights.map((highlight) => {
              const { heading, description } = normalizeHighlight(highlight);
              return (
                <div key={highlight} className="rounded-2xl border border-slate-100 bg-slate-50 p-8 transition-all hover:-translate-y-1 hover:shadow-lg">
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-[#4B827E]/10 text-[#4B827E]">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="mb-4 text-xl font-bold text-[#1C2C5E]">{heading}</h3>
                  <p className="leading-relaxed text-slate-600">{description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-10 text-center text-3xl font-bold text-[#1C2C5E]">作用机制</h2>
          <div className="mx-auto max-w-6xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="divide-y divide-slate-100">
              {moas.map((item, idx) => (
                <div key={item.title} className="p-10 transition-colors hover:bg-slate-50">
                  <div className="flex flex-col gap-8 md:flex-row md:items-start">
                    <div className="shrink-0">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-50 text-xl font-bold text-[#4B827E]">{idx + 1}</div>
                    </div>
                    <div className="flex-grow">
                      <h3 className="mb-4 text-2xl font-bold text-[#4B827E]">{item.title}</h3>
                      <p className="mb-6 text-lg leading-relaxed text-slate-600">{item.description}</p>
                      {item.imageUrl && (
                        <img src={item.imageUrl} alt={item.title} className={`mt-6 w-full ${item.maxWidth || 'max-w-xl'} rounded-xl border border-slate-200 shadow-lg`} />
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <h2 className="mb-10 text-center text-3xl font-bold text-[#1C2C5E] md:text-left">表观遗传类产品列表</h2>
        <div className="flex justify-start">
          <div className="w-full overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xl">
            <div className="overflow-x-auto">
              <table className="divide-y divide-slate-200">
                <thead className="bg-[#4B827E] text-white">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider whitespace-nowrap">靶点</th>
                    <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider whitespace-nowrap">作用机制</th>
                    {EPIGENETIC_HEADERS.map((header) => (
                      <th key={header} className="px-6 py-4 text-center text-sm font-bold uppercase tracking-wider whitespace-nowrap">
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 bg-white">
                  {data.map((row, idx) => (
                    <tr key={`${row.target}-${row.moa}-${idx}`} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50 hover:bg-teal-50/30 transition-colors'}>
                      <td className="whitespace-nowrap border-r border-slate-100 px-6 py-4 text-sm font-bold text-slate-900">{row.target}</td>
                      <td className="whitespace-nowrap border-r border-slate-100 px-6 py-4 text-sm text-slate-600">{row.moa}</td>
                      {row.statuses.map((status, statusIdx) => {
                        const normalizedStatus = normalizeStatus(status);
                        return (
                          <td key={`${row.target}-${statusIdx}`} className="whitespace-nowrap px-6 py-4 text-center text-sm text-slate-700">
                            {normalizedStatus === '✔' ? <span className="text-lg font-bold text-[#4B827E]">✔</span> : normalizedStatus}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p className="text-sm italic text-slate-500">* 如未找到您的特定靶点，欢迎联系我们的开发服务团队进一步沟通。</p>
        </div>
      </section>
    </div>
  );
};

export default EpigeneticDetail;
