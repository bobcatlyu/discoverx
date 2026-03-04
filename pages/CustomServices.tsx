import React from 'react';
import CardGrid from '../components/CardGrid';
import { Page } from '../types';

interface CustomServicesPageProps {
  onNavigate: (page: Page) => void;
}

const CustomServicesPage: React.FC<CustomServicesPageProps> = ({ onNavigate }) => {
  const services = [
    {
      id: 's1',
      title: 'Assay 开发服务',
      description: '定制化细胞株构建与检测体系优化，从靶点克隆到稳定细胞株筛选，提供全流程技术支持。',
      badge: 'Custom Development',
      action: () => onNavigate(Page.CustomAssayDevelopment)
    },
    {
      id: 's2',
      title: 'Bioassay 开发',
      description: '针对生物药效价检测需求，开发符合 ICH Q6B 指南的细胞功能性检测方法。',
      badge: 'GMP-Ready',
      action: () => onNavigate(Page.BioassayDevelopment)
    },
    {
      id: 's3',
      title: '样品检测服务',
      description: '提供化合物、抗体及生物制品的功能性评估，支持高通量筛选与剂量响应分析。',
      action: () => onNavigate(Page.SampleTesting)
    },
    {
      id: 's4',
      title: '化合物筛选',
      description: '基于多种检测平台，提供靶向筛选、表型筛选及先导化合物优化服务。',
      action: () => onNavigate(Page.FunctionalScreening)
    },
  ];

  return <CardGrid title="开发服务" subtitle="专业的定制化研发与技术支持，加速您的药物发现进程" items={services} />;
};

export default CustomServicesPage;
