import React from 'react';
import CardGrid from '../components/CardGrid';
import { Page } from '../types';

interface MechanismsPageProps {
  onNavigate: (page: Page) => void;
}

const MechanismsPage: React.FC<MechanismsPageProps> = ({ onNavigate }) => {
  const mechanisms = [
    {
      id: 'm1',
      title: '受体二聚化 Dimerization',
      description: '监测受体激活后的同源或异源二聚化，揭示信号转导的起始步骤。',
      imageUrl: '/pic/Dimerization.jpg',
      action: () => onNavigate(Page.DimerizationDetail)
    },
    {
      id: 'm2',
      title: '受体内吞 Internalization',
      description: '追踪受体从细胞表面向内体的转运过程，评估受体脱敏与信号终止。',
      imageUrl: '/pic/Internalization.jpg',
      action: () => onNavigate(Page.InternalizationDetail)
    },
    {
      id: 'm3',
      title: '蛋白间相互作用 PPI',
      description: '检测蛋白质复合物的形成与解离，解析信号通路的分子基础。',
      imageUrl: 'https://picsum.photos/seed/ppi/400/300',
      action: () => onNavigate(Page.PpiDetail)
    },
    {
      id: 'm4',
      title: '信号通路 Signaling Pathways',
      description: '监测关键信号分子（如 NF-κB、STAT、MAPK）的活化与核转位。',
      imageUrl: '/pic/Signaling-Pathways_Small-Card-Image.jpg',
      action: () => onNavigate(Page.SignalPathwayDetail)
    },
    {
      id: 'm5',
      title: '细胞毒性效应 Cytotoxicity',
      description: '评估免疫细胞介导的靶细胞杀伤，适用于 ADC、CAR-T 及双抗药物开发。',
      imageUrl: '/pic/Cytotoxicity_Small-Card-Image.jpg',
      action: () => onNavigate(Page.CytotoxicityDetail)
    },
    {
      id: 'm6',
      title: '靶向蛋白降解 TPD',
      description: '监测 PROTAC 或分子胶诱导的靶蛋白泛素化降解动力学。',
      imageUrl: '/pic/Degradation_Small-Card-Image.jpg',
      action: () => onNavigate(Page.TpdDetail)
    },
    {
      id: 'm7',
      title: '靶标结合 Target Engagement',
      description: '利用 InCELL Pulse™ 技术，在活细胞中实时监测小分子与靶蛋白的结合。',
      imageUrl: '/pic/Target-Engagement_Large-Card-Image.jpg',
      action: () => onNavigate(Page.TargetEngagementDetail)
    },
  ];

  return <CardGrid title="作用机制" subtitle="深入解析药物作用的分子机制与细胞响应" items={mechanisms} />;
};

export default MechanismsPage;
