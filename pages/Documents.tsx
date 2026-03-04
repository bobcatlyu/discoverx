import React from 'react';
import CardGrid from '../components/CardGrid';
import { Page } from '../types';

interface DocumentsPageProps {
  onNavigate: (page: Page) => void;
}

const DocumentsPage: React.FC<DocumentsPageProps> = ({ onNavigate }) => {
  const documents = [
    {
      id: 'd1',
      title: '产品说明书 Datasheets',
      description: '详细的产品技术参数、性能指标及应用案例，帮助您快速了解产品特性。',
      badge: '200+ Products',
      action: () => onNavigate(Page.DatasheetList)
    },
    {
      id: 'd2',
      title: '用户操作手册 User Manuals',
      description: '详尽的实验操作流程、注意事项及故障排查指南，确保实验顺利进行。',
      action: () => onNavigate(Page.UserManual)
    },
    {
      id: 'd3',
      title: '验证数据报告 Qualification Data',
      description: '产品质量控制数据、批次验证报告及稳定性测试结果。',
      badge: 'QC Certified',
      action: () => onNavigate(Page.QualificationData)
    },
    {
      id: 'd4',
      title: '技术应用指南 Application Notes',
      description: '实验设计建议、数据分析方法及常见问题解答，提升实验成功率。',
      action: () => onNavigate(Page.ApplicationNote)
    },
    {
      id: 'd5',
      title: '参考文献库 References',
      description: '使用 DiscoveRx 产品发表的高质量学术论文，涵盖多个研究领域。',
      badge: '1000+ Citations',
      action: () => onNavigate(Page.Reference)
    },
  ];

  return <CardGrid title="产品资料" subtitle="全面的技术文档与应用支持，助力您的科研工作" items={documents} />;
};

export default DocumentsPage;
