import React from 'react';
import CardGrid from '../components/CardGrid';
import { Page } from '../types';

interface ProductTypesPageProps {
  onNavigate: (page: Page) => void;
}

const ProductTypesPage: React.FC<ProductTypesPageProps> = ({ onNavigate }) => {
  const categories = [
    {
      id: 'c1',
      title: '商业化稳转细胞株',
      description: '提供超过 1,000 个独特靶点的功能性稳转细胞株，覆盖 GPCR、激酶、离子通道及免疫检查点，具有卓越的遗传稳定性。',
      imageUrl: '/pic/Cell Line.png',
      badge: 'Validated Cell Lines',
      action: () => onNavigate(Page.CellLine)
    },
    {
      id: 'c2',
      title: '即用型 eXpress® Kit',
      description: '全包式即用型检测盒，包含预包装冷冻细胞及配套试剂。解冻即用，24-48 小时内获得高质量实验结果。',
      imageUrl: '/pic/Assay-Kits_Small-Card-Image.jpg',
      badge: 'Assay-Ready',
      action: () => onNavigate(Page.ExpressKit)
    },
    {
      id: 'c3',
      title: 'Bioassay Kit',
      description: '专为生物药效价评估与中和抗体检测优化。符合 CMC 及监管要求，支持 4PL 数据拟合。',
      imageUrl: '/pic/Bioassays-Kits_Small-Card-Image-1.jpg',
      badge: 'Potency Assay',
      action: () => onNavigate(Page.BioassayKit)
    },
    {
      id: 'c4',
      title: '工具箱产品',
      description: '包括克隆载体、反转录颗粒及亲本细胞株，助力快速构建定制化检测系统。',
      imageUrl: '/pic/Toolbox-Products_Small-Card-Image.jpg',
      action: () => onNavigate(Page.Toolbox)
    },
    {
      id: 'c5',
      title: '检测试剂盒',
      description: '高灵敏度的 cAMP 监测、EFC 检测底物及各类功能性分析配套试剂盒。',
      imageUrl: '/pic/Detection-Kits_Small-Card-Image.jpg',
      action: () => onNavigate(Page.DetectionKit)
    },
    {
      id: 'c6',
      title: '试剂耗材',
      description: 'AssayComplete™ 细胞培养、解冻及铺板试剂，确保实验一致性与稳定性。',
      imageUrl: '/pic/Cell-Culture-Kits_Small-Card-Image.jpg',
      action: () => onNavigate(Page.Reagent)
    },
    {
      id: 'c7',
      title: '膜制品',
      description: '高质量纯化膜制品，富集高密度活性受体蛋白，适用于配体结合实验。',
      imageUrl: '/pic/Membrane-Prep_Large-Image-310x174-1.jpg',
      action: () => onNavigate(Page.MembranePrep)
    },
    {
      id: 'c8',
      title: '重组酶类产品',
      description: '高纯度重组激酶、磷酸酶及表观遗传酶，适用于体外生化筛选与动力学研究。',
      imageUrl: '/pic/Recombinant-Proteins_Small-Card-Image.jpg',
      action: () => onNavigate(Page.Enzyme)
    },
    {
      id: 'c9',
      title: 'Calixar 膜蛋白',
      description: '利用专利表面活性剂技术，在不添加去垢剂的情况下提取天然构象的膜蛋白（GPCR/离子通道）。',
      imageUrl: '/pic/calixar.jpg',
      badge: 'Patented Technology',
      action: () => onNavigate(Page.Calixar)
    },
  ];

  return <CardGrid title="产品类型" subtitle="提供全方位的生命科学研究工具与定制化解决方案" items={categories} />;
};

export default ProductTypesPage;
