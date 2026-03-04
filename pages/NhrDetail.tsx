
import React from 'react';
import TargetDetailTemplate, { MoaItem, ProductRow } from '../components/TargetDetailTemplate';

const NHR_HEADERS = ['Cell Line (Catalog No.)'];

const NhrDetail: React.FC = () => {
  const intro = [
    "核蛋白在调控细胞行为及信号通路表达中发挥关键作用，许多核蛋白从细胞核内外转运的过程受到高度调控，而这种转运机制直接影响蛋白功能。通过药物控制该转运行为，或确保潜在药物不会对转运产生不良影响，是评估核转位的重要应用场景。",
    "核激素受体（NHR，包括类固醇受体）是核蛋白的重要子类，在配体激活后调控基因表达，并在内分泌信号通路中发挥核心作用。NHR 通常依赖共激活蛋白或共抑制蛋白（例如类固醇受体辅因子 SRC 蛋白）来实现其功能。增强或破坏这些蛋白之间的相互作用，可作为调控 NHR 相关基因表达的治疗策略。",
    "NHR 是极具吸引力的药物开发靶点，涵盖了乳腺癌、前列腺癌、糖尿病、炎症及心血管疾病等广泛领域。",
    "Eurofins DiscoverX 提供 PathHunter® 核转位与蛋白相互作用细胞水平功能检测，用于研究蛋白转位事件及核蛋白激活状态。"
  ];

  const highlights = [
    "均相、高通量兼容检测——操作简便、灵敏度高的细胞水平检测平台，无需抗体、荧光标签或特殊设备",
    "灵活解决方案——可构建自有定量功能性细胞检测体系，用于研究任意目标蛋白的核转位行为",
    "多样化治疗开发——可定量评估针对核蛋白的小分子、肽类或抗体类治疗药物的作用效果"
  ];
  const moas: MoaItem[] = [
    {
      title: "核易位 (Nuclear Translocation)",
      description: "核受体通常在细胞质 (Cytoplasm) 中与伴侣蛋白结合。当化合物 (Compound) 结合后，诱导融合了 ED 标签的 NHR 构象变化并向细胞核 (Nucleus) 易位。在核内，NHR-ED 与定位于核内的 EA 标签 (NUC-EA Format) 发生酶片段互补 (EFC)，形成完整的 β-Gal 酶，随后水解底物 (β-Gal Substrate) 产生化学发光信号 (Light Signal)。这一过程可高度灵敏地定量化合物对 NHR 激活诱导的核转运效能。",
      imageUrl: "/pic/NHR-Translocation_AssayPrinciple_small-1.jpg",
      maxWidth: "max-w-2xl"
    },
    {
      title: "蛋白间相互作用 (Protein Interaction)",
      description: "利用酶片段互补 (EFC) 技术，直接监测受体激活后与核心共调节因子（Co-activators 或 Co-repressors）之间的物理相互作用。这种方法具有极高的灵敏度和特异性，是研究核受体药理活性及偏向性调节的首选方法。",
      imageUrl: "/pic/NHR-Interaction_AssayPrinciple_small.jpg",
      maxWidth: "max-w-2xl"
    }
  ];
  const data: ProductRow[] = [
    { target: 'AR', moa: 'Nuclear Translocation', statuses: ['793-0177C1'] },
    { target: 'AR', moa: 'Protein Interaction', statuses: ['793-0454C2'] },
    { target: 'ARH', moa: 'Protein Interaction', statuses: ['793-1113C3'] },
    { target: 'ERα', moa: 'Protein Interaction', statuses: ['793-0453C2'] },
    { target: 'FXR', moa: 'Protein Interaction', statuses: ['793-0443C2'] },
    { target: 'GR', moa: 'Nuclear Translocation', statuses: ['793-0002C2'] },
    { target: 'GR', moa: 'Protein Interaction', statuses: ['793-0456C2'] },
    { target: 'LXRα', moa: 'Nuclear Translocation', statuses: ['793-0215C2'] },
    { target: 'LXRα', moa: 'Protein Interaction', statuses: ['793-0389C2'] },
    { target: 'LXRβ', moa: 'Protein Interaction', statuses: ['793-0442C2'] },
    { target: 'LXRβ-NCoR1', moa: 'Protein Interaction', statuses: ['793-0856C1'] },
    { target: 'MR', moa: 'Nuclear Translocation', statuses: ['793-0451C2'] },
    { target: 'MR', moa: 'Protein Interaction', statuses: ['793-0758C2'] },
    { target: 'PPARα', moa: 'Protein Interaction', statuses: ['793-0457C2'] },
    { target: 'PPARγ', moa: 'Protein Interaction', statuses: ['793-0390C2'] },
    { target: 'PPARδ', moa: 'Protein Interaction', statuses: ['793-0492C2'] },
    { target: 'PRβ', moa: 'Nuclear Translocation', statuses: ['793-0484C3'] },
    { target: 'PRα', moa: 'Protein Interaction', statuses: ['793-0852C3'] },
    { target: 'PRβ', moa: 'Protein Interaction', statuses: ['793-0851C3'] },
    { target: 'RARα', moa: 'Protein Interaction', statuses: ['793-0325C2'] },
    { target: 'RARβ', moa: 'Protein Interaction', statuses: ['793-0326C2'] },
    { target: 'RXRα', moa: 'Protein Interaction', statuses: ['793-0439C3'] },
    { target: 'RXRγ', moa: 'Protein Interaction', statuses: ['793-0327C2'] },
    { target: 'THRα', moa: 'Protein Interaction', statuses: ['793-0324C2'] },
    { target: 'THRβ', moa: 'Protein Interaction', statuses: ['793-0391C2'] }
  ];
  return (
    <TargetDetailTemplate
      title="核激素受体 NHR Assays"
      subtitle="用于评估核蛋白激活与核转位的细胞水平检测"
      introText={intro}
      introImageUrl="https://picsum.photos/seed/nhr_structure/800/600"
      highlights={highlights}
      moaItems={moas}
      productData={data}
      productTableTitle="核受体 (NHR) 产品列表"
      customTypeHeaders={NHR_HEADERS}
    />
  );
};

export default NhrDetail;
