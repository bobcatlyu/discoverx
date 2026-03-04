import React from 'react';
import TargetDetailTemplate, { MoaItem, ProductRow } from '../components/TargetDetailTemplate';

const KINASE_HEADERS = ['激酶类别', '稳转细胞系套装', 'eXpress™ Kit', 'Bioassay Kit'];

const KinaseDetail: React.FC = () => {
  const intro = [
    "用于分析 RTK 二聚化、磷酸化、内吞及 SH2 招募的细胞水平检测",
    "受体酪氨酸激酶（RTK）在细胞增殖、运动、分化及代谢等多种生理过程中发挥重要作用。大规模基因组研究发现 RTK 编码基因存在多种改变，例如 EGFR、HER2/ErbB2、MET 等基因的突变或扩增。RTK 信号失调与多种人类疾病相关，其中最突出的是多种癌症。人类肿瘤中 RTK 异常激活主要由四种机制驱动：功能获得性突变、基因扩增、染色体重排以及自分泌激活。",
    "Eurofins DiscoverX 提供 PathHunter® 细胞水平检测，用于 RTK 及与胞质酪氨酸激酶（CTK）相关的受体研究。这些创新检测体系可在细胞环境中解析受体激活机制，并用于发现新型抑制剂与治疗性抗体。PathHunter 检测可通过分析 RTK 与细胞因子受体的二聚化、磷酸化、内吞及 SH2 招募等事件来评估其功能活性。"
  ];

  const highlights = [
    "应用范围广——可识别多种配体，包括抗受体抗体、抗配体抗体、激活型抗体、非 ATP 竞争性结合分子（变构调节剂）、配体结合抑制剂以及二聚化抑制剂",
    "高特异性——采用标记酪氨酸激酶设计，减少内源性酪氨酸激酶导致的背景干扰",
    "生物学相关性强——MOA 导向的功能性检测，用于监测 RTK 与细胞因子受体的激活与二聚化，适用于表征与筛选应用"
  ];

  const moas: MoaItem[] = [
    {
      title: "受体二聚化 (Receptor Dimerization)",
      description: "监测受体酪氨酸激酶 (RTK) 在配体诱导下形成的同源或异源二聚体。这是激酶激活的起始步骤，对于评估单抗或双抗药物的激动活性及阻断效能至关重要。",
      imageUrl: "/pic/Dimerization.jpg",
      maxWidth: "max-w-2xl"
    },
    {
      title: "SH2 蛋白招募 (SH2 Protein Recruitment)",
      description: "监测活化磷酸化的激酶招募含有 SH2 结构域的信号转导蛋白（如 Shc1, PLCγ）。利用专有 EFC 技术直接在活细胞中定量评估激酶的功能性激活，具有极高的生物学相关性。",
      imageUrl: "/pic/RTK-CTK_AssayPrinciples_small.jpg",
      maxWidth: "max-w-3xl"
    },
    {
      title: "受体内吞 (Receptor Internalization)",
      description: "定量追踪激酶受体在配体或抗体诱导下从细胞膜向内体室的移动过程。这对于 ADC 药物开发、抗体介导的靶点下调以及受体脱敏研究具有核心参考价值。",
      imageUrl: "/pic/Internalization.jpg",
      maxWidth: "max-w-2xl"
    }
  ];

  const data: ProductRow[] = [
    { target: 'ACVR1/ACVR2', moa: 'Dimerization', statuses: ['RTK', '✓', '', ''] },
    { target: 'ACVR1B/BMPR2', moa: 'Dimerization', statuses: ['RTK', '✓', '✓', ''] },
    { target: 'ACVR1C/ACVR2', moa: 'Dimerization', statuses: ['RTK', '✓', '✓', ''] },
    { target: 'ACVR1C/ACVR2B', moa: 'Dimerization', statuses: ['RTK', '✓', '✓', ''] },
    { target: 'ACVRL1/ACVR2', moa: 'Dimerization', statuses: ['RTK', '✓', '✓', ''] },
    { target: 'ACVRL1/ACVR2B', moa: 'Dimerization', statuses: ['RTK', '✓', '✓', ''] },
    { target: 'ACVRL1/BMPR2', moa: 'Dimerization', statuses: ['RTK', '✓', '✓', ''] },
    { target: 'AXL', moa: 'Functional', statuses: ['RTK', '✓', '', ''] },
    { target: 'BLK', moa: 'Activity', statuses: ['CTK', '✓', '✓', ''] },
    { target: 'BMPR1A/ACVR2', moa: 'Dimerization', statuses: ['RTK', '✓', '✓', ''] },
    { target: 'BMPR1A/ACVR2B', moa: 'Dimerization', statuses: ['RTK', '✓', '', ''] },
    { target: 'BMPR1A/BMPR2', moa: 'Dimerization', statuses: ['RTK', '✓', '✓', ''] },
    { target: 'BMPR1B/ACVR2A', moa: 'Dimerization', statuses: ['RTK', '✓', '✓', ''] },
    { target: 'BMPR1B/ACVR2B', moa: 'Dimerization', statuses: ['RTK', '✓', '', ''] },
    { target: 'BMPR1B/BMPR2', moa: 'Dimerization', statuses: ['RTK', '✓', '', ''] },
    { target: 'cINSRa', moa: 'Functional', statuses: ['RTK', '✓', '✓', ''] },
    { target: 'cINSRb', moa: 'Functional', statuses: ['RTK', '✓', '✓', ''] },
    { target: 'c-KIT', moa: 'Functional', statuses: ['RTK', '✓', '✓', ''] },
    { target: 'c-MET', moa: 'Functional', statuses: ['RTK', '', '', ''] },
    { target: 'c-MET/c-MET', moa: 'Dimerization', statuses: ['RTK', '✓', '', ''] },
    { target: 'c-MET/EGFR', moa: 'Dimerization', statuses: ['RTK', '✓', '', ''] },
    { target: 'c-Ret-GFRα1', moa: 'Functional', statuses: ['RTK', '✓', '✓', ''] },
    { target: 'c-Ret-GFRα2', moa: 'Functional', statuses: ['RTK', '✓', '✓', ''] },
    { target: 'c-Ret-GFRα3', moa: 'Functional', statuses: ['RTK', '✓', '', ''] },
    { target: 'CSF1R/CSF1R', moa: 'Dimerization', statuses: ['RTK', '✓', '✓', ''] },
    { target: 'CSF2RB/CSF2RA', moa: 'Dimerization', statuses: ['RTK', '✓', '✓', ''] },
    { target: 'CSF3R-JAK1', moa: 'Functional', statuses: ['CTK', '✓', '✓', ''] },
    { target: 'DDR1', moa: 'Functional', statuses: ['RTK', '✓', '✓', ''] },
    { target: 'EGFR/EGFR', moa: 'Dimerization', statuses: ['RTK', '✓', '✓', ''] },
    { target: 'EGFR/ErbB2', moa: 'Dimerization', statuses: ['RTK', '✓', '✓', '✓'] },
    { target: 'EGFR/ErbB3', moa: 'Dimerization', statuses: ['RTK', '✓', '', ''] },
    { target: 'EphA4', moa: 'Functional', statuses: ['RTK', '✓', '', ''] },
    { target: 'EphA5', moa: 'Functional', statuses: ['RTK', '✓', '✓', ''] },
    { target: 'EphA7', moa: 'Functional', statuses: ['RTK', '✓', '✓', ''] },
    { target: 'EphB1', moa: 'Functional', statuses: ['RTK', '✓', '✓', ''] },
    { target: 'EphB2', moa: 'Functional', statuses: ['RTK', '✓', '✓', ''] },
    { target: 'EphB3', moa: 'Functional', statuses: ['RTK', '✓', '✓', ''] },
    { target: 'EphB4', moa: 'Functional', statuses: ['RTK', '✓', '', ''] },
    { target: 'EpoR/EpoR', moa: 'Dimerization', statuses: ['RTK', '✓', '✓', '✓'] },
    { target: 'EpoR-JAK2', moa: 'Functional', statuses: ['CTK', '✓', '✓', ''] },
    { target: 'ErbB1', moa: 'Functional', statuses: ['RTK', '✓', '', ''] },
    { target: 'ErbB2/ErbB3', moa: 'Dimerization', statuses: ['RTK', '✓', '', '✓'] },
    { target: 'ErbB2-ErbB3', moa: 'Functional', statuses: ['RTK', '✓', '✓', ''] },
    { target: 'ErbB4', moa: 'Functional', statuses: ['RTK', '✓', '', ''] },
    { target: 'ErbB4/ErbB4', moa: 'Dimerization', statuses: ['RTK', '✓', '✓', ''] },
    { target: 'FGFR1', moa: 'Functional', statuses: ['RTK', '✓', '✓', ''] },
    { target: 'FGFR1v3B', moa: 'Functional', statuses: ['RTK', '✓', '', ''] },
    { target: 'FGFR1-α-Klotho', moa: 'Functional', statuses: ['RTK', '✓', '', ''] },
    { target: 'FGFR1-β-Klotho', moa: 'Functional', statuses: ['RTK', '✓', '', ''] },
    { target: 'FGFR2', moa: 'Functional', statuses: ['RTK', '✓', '', ''] },
    { target: 'FGFR3(G380R)/FGFR3(G380R)', moa: 'Dimerization', statuses: ['RTK', '✓', '', ''] },
    { target: 'FGFR3/FGFR3', moa: 'Dimerization', statuses: ['RTK', '✓', '', ''] },
    { target: 'FGFR4', moa: 'Functional', statuses: ['RTK', '✓', '✓', ''] },
    { target: 'FGFR4-α-Klotho', moa: 'Functional', statuses: ['RTK', '✓', '', ''] },
    { target: 'FGFR4-β-Klotho', moa: 'Functional', statuses: ['RTK', '✓', '✓', '✓'] },
    { target: 'FGR', moa: 'Activity', statuses: ['CTK', '✓', '✓', ''] },
    { target: 'Flt3', moa: 'Activity', statuses: ['RTK', '✓', '✓', ''] },
    { target: 'Flt4', moa: 'Activity', statuses: ['RTK', '✓', '✓', ''] },
    { target: 'GHR-JAK1', moa: 'Functional', statuses: ['CTK', '✓', '✓', '✓'] },
    { target: 'GHR-JAK2', moa: 'Functional', statuses: ['CTK', '✓', '✓', ''] },
    { target: 'IGF1R', moa: 'Functional', statuses: ['RTK', '✓', '✓', '✓'] },
    { target: 'INSRa', moa: 'Functional', statuses: ['RTK', '✓', '', ''] },
    { target: 'INSRa (mouse)', moa: 'Functional', statuses: ['RTK', '✓', '✓', ''] },
    { target: 'INSRb', moa: 'Functional', statuses: ['RTK', '✓', '', '✓'] },
    { target: 'INSRb (mouse)', moa: 'Functional', statuses: ['RTK', '✓', '✓', ''] },
    { target: 'JAK3', moa: 'Activity', statuses: ['CTK', '✓', '✓', ''] },
    { target: 'KDR', moa: 'Activity', statuses: ['RTK', '✓', '✓', ''] },
    { target: 'KDR/KDR', moa: 'Dimerization', statuses: ['RTK', '✓', '✓', '✓'] },
    { target: 'Lck', moa: 'Activity', statuses: ['CTK', '✓', '✓', ''] },
    { target: 'PDGFRα', moa: 'Functional', statuses: ['RTK', '✓', '✓', '✓'] },
    { target: 'PDGFRβ', moa: 'Functional', statuses: ['RTK', '✓', '✓', '✓'] },
    { target: 'PRLR-JAK1', moa: 'Functional', statuses: ['CTK', '✓', '✓', ''] },
    { target: 'PRLR-JAK2', moa: 'Functional', statuses: ['CTK', '✓', '✓', ''] },
    { target: 'Syk', moa: 'Activity', statuses: ['CTK', '✓', '✓', ''] },
    { target: 'TGFBR1/ACVR2', moa: 'Dimerization', statuses: ['RTK', '✓', '✓', ''] },
    { target: 'TGFBR1/ACVR2B', moa: 'Dimerization', statuses: ['RTK', '✓', '✓', ''] },
    { target: 'TGFBR1/TGFBR2', moa: 'Dimerization', statuses: ['RTK', '✓', '✓', ''] },
    { target: 'TGFBR1/TGFBR2/ENG', moa: 'Dimerization', statuses: ['RTK', '✓', '', ''] },
    { target: 'Tie2', moa: 'Functional', statuses: ['RTK', '✓', '', ''] },
    { target: 'TrkA', moa: 'Functional', statuses: ['RTK', '✓', '✓', ''] },
    { target: 'TrkA-P75', moa: 'Functional', statuses: ['RTK', '✓', '✓', '✓'] },
    { target: 'TrkA-P75 (monkey)', moa: 'Functional', statuses: ['RTK', '✓', '✓', ''] },
    { target: 'TrkA-P75 (rat)', moa: 'Functional', statuses: ['RTK', '✓', '✓', ''] },
    { target: 'TrkB', moa: 'Functional', statuses: ['RTK', '✓', '✓', ''] },
    { target: 'TrkB-P75', moa: 'Functional', statuses: ['RTK', '✓', '✓', '✓'] },
    { target: 'TrkC', moa: 'Functional', statuses: ['RTK', '✓', '✓', '✓'] },
    { target: 'TrkC-P75', moa: 'Functional', statuses: ['RTK', '✓', '✓', ''] },
    { target: 'TYK2', moa: 'Activity', statuses: ['CTK', '✓', '✓', ''] },
    { target: 'TYRO3', moa: 'Functional', statuses: ['RTK', '✓', '', ''] },
    { target: 'Yes', moa: 'Activity', statuses: ['CTK', '✓', '✓', ''] },
  ];

  return (
    <TargetDetailTemplate
      title="激酶受体检测 (Receptor Tyrosine Kinase Assays)"
      subtitle="用于分析 RTK 二聚化、磷酸化、内吞及 SH2 招募的细胞水平检测"
      introText={intro}
      highlights={highlights}
      introImageUrl="https://picsum.photos/seed/kinase_lab/800/600"
      moaItems={moas}
      productData={data}
      productTableTitle="产品列表"
      customTypeHeaders={KINASE_HEADERS}
    />
  );
};

export default KinaseDetail;

