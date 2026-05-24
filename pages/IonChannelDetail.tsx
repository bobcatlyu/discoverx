
import React from 'react';
import TargetDetailTemplate, { MoaItem } from '../components/TargetDetailTemplate';
import { ION_CHANNEL_PORTFOLIO_COLUMNS, ION_CHANNEL_PORTFOLIO_ROWS } from '../data/ionChannelPortfolio';

const ION_CHANNEL_HEADERS = ['Cell Line', 'Ready-to-Assay cells', 'Membrane Prep'];

const IonChannelDetail: React.FC = () => {
  const intro = [
    "用于靶点发现、命中筛选、先导优化及安全性研究的高质量 PrecisION™ 产品",
    "离子通道仍然是多种疾病的重要治疗靶点，包括心律失常、高血压、局部麻醉相关应用、疼痛、中风、癫痫、抑郁、双相情感障碍、囊性纤维化、心律失常、慢性阻塞性肺病（COPD）、自身免疫疾病以及糖尿病等。对于由单基因突变导致的罕见通道病（channelopathies），离子通道同样是极具吸引力的治疗靶点。离子通道不仅是一类重要的药物靶点，同时也是药物安全性评估的关键组成部分，例如美国 FDA 要求针对人类疾病靶点开发的药物必须进行相关安全性测试。",
    "Eurofins DiscoverX 的离子通道产品组合涵盖功能验证的 ion channel 产品，包括优化的 PrecisION 稳定细胞系与即用型检测细胞，用于细胞水平电生理实验；PathHunter® 药物转运检测（pharmacotrafficking assays），用于药物伴侣分子（pharmacochaperone）发现；以及 hERG 离子通道膜制备产品，用于安全性结合研究。",
    "该离子通道产品解决方案可评估电压门控、配体门控及其他多种靶点，用于筛选离子通道抑制剂并支持药物发现与安全性应用。离子通道细胞系在功能与药理学层面均经过验证，并通过公司内部药物发现与安全性实验室进行电生理表征，采用传统手动膜片钳及多种自动化膜片钳平台进行生物物理与药理学评估，由经验丰富的电生理学专家完成验证。"
  ];

  const highlights = [
    "功能与药理学验证——细胞系已在药物发现与安全性项目中得到验证，多数细胞系已稳定使用十年以上",
    "卓越性能——专有细胞系载体技术确保稳定性、表达水平与电流均一性",
    "应用灵活——兼容手动与自动膜片钳研究、药物伴侣分子发现及安全性结合研究",
    "即用型细胞——冻存即用的细胞产品，解冻后即可进行电生理评估，无需额外细胞培养步骤"
  ];

  const moas: MoaItem[] = [
    { 
      title: "电生理检测 (Electrophysiological)", 
      description: "作为离子通道研究的金标准，通过监测离子通过通道产生的电流，直接评估药物对通道开启、关闭或失活状态的影响。DiscoverX 细胞株针对自动膜片钳 (APC) 平台进行了优化。" 
    },
    { 
      title: "转运/贩运 (Pharmacotrafficking)", 
      description: "监测错配或突变的离子通道蛋白（如 CFTR-ΔF508）从内质网向细胞膜的定向转运。这对于筛选能够拯救功能缺陷蛋白的小分子伴侣（Pharmacological Chaperones）具有重大意义。" 
    },
    { 
      title: "配体结合 (Binding)", 
      description: "利用标记配体直接测定药物与离子通道特定结合位点的亲和力。适用于膜制品 (Membrane Prep) 形式，支持高通量的竞争性结合实验。" 
    }
  ];


  return (
    <TargetDetailTemplate
      title="离子通道 Ion Channels Assays"
      introText={intro}
      introImageUrl="https://picsum.photos/seed/ion_channel_banner/800/600"
      highlights={highlights}
      moaItems={moas}
      productData={[]}
      productTableTitle="离子通道产品列表"
      customTypeHeaders={ION_CHANNEL_HEADERS}
      productTableColumns={ION_CHANNEL_PORTFOLIO_COLUMNS}
      productTableRows={ION_CHANNEL_PORTFOLIO_ROWS}
    />
  );
};

export default IonChannelDetail;
