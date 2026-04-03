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
      description: '查看产品技术参数、性能指标和应用说明，快速定位合适的产品资料。',
      badge: 'Datasheets',
      action: () => onNavigate(Page.DatasheetList),
    },
    {
      id: 'd2',
      title: '用户操作手册 User Manuals',
      description: '查看实验流程、使用方法和常见注意事项，帮助实验顺利开展。',
      action: () => onNavigate(Page.UserManual),
    },
    {
      id: 'd3',
      title: '验证数据报告 Qualification Data',
      description: '查看产品验证与质控相关资料，支持项目评估与内部归档。',
      badge: 'QC',
      action: () => onNavigate(Page.QualificationData),
    },
    {
      id: 'd4',
      title: '技术应用指南 Application Notes',
      description: '查看实验设计思路、数据分析建议和典型应用案例。',
      action: () => onNavigate(Page.ApplicationNote),
    },
    {
      id: 'd5',
      title: '参考文献 References',
      description: '汇总与 DiscoverX 产品相关的参考文献与公开研究信息。',
      badge: 'Literature',
      action: () => onNavigate(Page.Reference),
    },
  ];

  return <CardGrid title="产品资料" subtitle="集中浏览技术文档与应用支持资料" items={documents} />;
};

export default DocumentsPage;
