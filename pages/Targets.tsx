import React from 'react';
import CardGrid from '../components/CardGrid';
import { Language, Page } from '../types';
import { getLocale } from '../locales';

interface TargetsPageProps {
  language: Language;
  onNavigate: (page: Page) => void;
}

const TargetsPage: React.FC<TargetsPageProps> = ({ language, onNavigate }) => {
  const locale = getLocale(language);
  const content = locale.targets;
  const targets = content.cards.map((item) => ({
    ...item,
    action: item.page ? () => onNavigate(item.page!) : undefined,
  }));

  return <CardGrid title={content.title} subtitle={content.subtitle} actionLabel={locale.common.learnMore} items={targets} />;
};

export default TargetsPage;
