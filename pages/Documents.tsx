import React from 'react';
import CardGrid from '../components/CardGrid';
import { Language, Page } from '../types';
import { getLocale } from '../locales';

interface DocumentsPageProps {
  language: Language;
  onNavigate: (page: Page) => void;
}

const DocumentsPage: React.FC<DocumentsPageProps> = ({ language, onNavigate }) => {
  const locale = getLocale(language);
  const content = locale.documents;
  const documents = content.cards.map((item) => ({
    ...item,
    action: item.page ? () => onNavigate(item.page!) : undefined,
  }));

  return <CardGrid title={content.title} subtitle={content.subtitle} actionLabel={locale.common.learnMore} items={documents} />;
};

export default DocumentsPage;
