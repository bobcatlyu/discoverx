
import React from 'react';
import TargetDetailTemplate, { MoaItem, ProductRow } from '../components/TargetDetailTemplate';

const EPIGENETIC_HEADERS = ['Cell Line', 'eXpress® kit', 'Protein'];

const EpigeneticDetail: React.FC = () => {
  const intro = [
    "表观遗传学研究的是由非遗传机制引起的基因表达可遗传或获得性变化，而这些变化并不涉及基因结构或序列的改变。基本表观遗传机制包括组蛋白修饰、DNA 甲基化以及染色质重塑，这些机制在多种生理过程的基因调控中发挥关键作用。当这些机制发生改变（例如核小体 DNA 或组蛋白成分的修饰，或非编码 RNA 的表达变化）时，可能与多种癌症、免疫相关疾病以及神经退行性疾病相关。",
    "Eurofins DiscoverX 提供表观遗传相关的重组蛋白及 InCELL Hunter™ 细胞水平检测产品，用于研究表观遗传机制的调控，并识别 DNA 甲基转移酶及溴结构域（bromodomain）的小分子抑制剂与调节剂。InCELL Hunter 细胞水平化合物-靶标结合检测可用于确认小分子化合物的细胞进入及表观遗传靶点结合情况，筛选并排序抑制剂，验证生化检测中获得的命中化合物，并在原生细胞环境中测定细胞 EC50 值。"
  ];

  const highlights = [
    "生物学相关性强——获得细胞水平化合物进入及表观遗传靶点结合的定量数据，为药物发现决策提供更可靠依据",
    "操作简便且可扩展——均相、高通量友好型流程，采用化学发光读数即可轻松测定化合物与表观遗传靶点的结合",
    "靶点特异性与选择性——可筛选并区分 BRD4 的多种目标选择性立体异构体，并确定靶点特异性",
    "高质量蛋白——采用优化表达体系生产的表观遗传相关重组蛋白，具有高纯度与高质量"
  ];

  const moas: MoaItem[] = [
    {
      title: "靶向蛋白降解 (Targeted Protein Degradation)",
      description: "利用 PROTAC® 或分子胶等新型降解技术，通过 EFC 技术实时监测细胞内特定表观遗传靶标（如 BRD4, STAT3）的降解过程及动力学，是验证 TPD 药物效能的金标准。",
      imageUrl: "/pic/SPRINTer-Targeted-Protein_Degradation_Assay-Principle-2048x522-1.jpg",
      maxWidth: "max-w-3xl"
    },
    {
      title: "靶标结合 (Target Engagement)",
      description: "在活细胞环境中，通过酶片段互补技术直接测定小分子与靶标蛋白（如溴域蛋白 Bromodomains）的物理结合。这种方法能更准确地预测药物在体内的实际活性。",
      imageUrl: "/pic/Target-Engagement-Assays-principles-2.png",
      maxWidth: "max-w-3xl"
    },
    {
      title: "筛选与活性分析 (Screening & Activity Analysis)",
      description: "针对表观遗传酶（如 HDACs, HMTs, HDMs），提供高纯度的活性重组蛋白。这些蛋白经过严格质量评估，适用于体外高通量筛选、酶动力学研究及抑制剂谱图分析。"
    }
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
    { target: 'WHSC1 (NSD2)', moa: 'Screening & Activity Analysis', statuses: ['', '', '✓'] }
  ];

  return (
    <TargetDetailTemplate
      title="表观遗传蛋白产品 Epigenetic Solutions"
      introText={intro}
      introImageUrl="https://picsum.photos/seed/epigenetic_research/800/600"
      highlights={highlights}
      moaItems={moas}
      productData={data}
      productTableTitle="表观遗传类产品列表 (Epigenetics Portfolio)"
      customTypeHeaders={EPIGENETIC_HEADERS}
    />
  );
};

export default EpigeneticDetail;
