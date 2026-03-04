import React from 'react';
import CardGrid from '../components/CardGrid';
import { Page } from '../types';

interface TargetsPageProps {
  onNavigate: (page: Page) => void;
}

const TargetsPage: React.FC<TargetsPageProps> = ({ onNavigate }) => {
  const targets = [
    {
      id: 't1',
      title: 'G蛋白偶联受体 GPCR',
      description: '真核生物中最大且功能最多样的膜受体家族，调控广泛的生理过程。',
      imageUrl: '/pic/GPCR-1150x350.jpg',
      action: () => onNavigate(Page.Gpcr)
    },
    {
      id: 't2',
      title: '细胞因子受体 Cytokine Receptors',
      description: '识别白介素、干扰素等分子，在免疫应答及造血调节中起关键作用。',
      imageUrl: '/pic/Cytokines_Small-Card-Image.jpg',
      action: () => onNavigate(Page.CytokineReceptors)
    },
    {
      id: 't3',
      title: '免疫检查点受体 Checkpoint Receptors',
      description: '调节 T 细胞活化与免疫耐受，是肿瘤免疫治疗的核心靶点。',
      imageUrl: '/pic/Checkpoint-Modulators_Small-Card-Image.jpg',
      action: () => onNavigate(Page.CheckpointReceptors)
    },
    {
      id: 't4',
      title: '激酶受体 RTK',
      description: '受体酪氨酸激酶，参与细胞增殖、分化及代谢调控，是抗癌药物的重要靶点。',
      imageUrl: '/pic/RTKs_CTKs_Small-Card-Image.jpg',
      action: () => onNavigate(Page.KinaseReceptors)
    },
    {
      id: 't5',
      title: '核激素受体 NHR',
      description: '配体依赖性转录因子，调控基因表达，参与代谢、发育及炎症反应。',
      imageUrl: '/pic/Nuclear-Hormones_Small-Card-Image-1.jpg',
      action: () => onNavigate(Page.Nhr)
    },
    {
      id: 't6',
      title: '离子通道 Ion Channels',
      description: '控制离子跨膜流动，调节神经传导、肌肉收缩及细胞兴奋性。',
      imageUrl: '/pic/Ion-Channels_Large-Image-310x174-1.jpg',
      action: () => onNavigate(Page.IonChannels)
    },
    {
      id: 't7',
      title: '表观遗传蛋白 Epigenetic Proteins',
      description: '包括组蛋白修饰酶及 DNA 甲基化酶，调控基因表达而不改变 DNA 序列。',
      imageUrl: '/pic/Nuclear-Hormones_Small-Card-Image-1.jpg',
      action: () => onNavigate(Page.EpigeneticProteins)
    },
  ];

  return <CardGrid title="靶点分类" subtitle="覆盖多种关键生物学靶点，支持药物发现与机制研究" items={targets} />;
};

export default TargetsPage;
