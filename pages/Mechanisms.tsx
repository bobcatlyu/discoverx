import React from 'react';
import CardGrid from '../components/CardGrid';
import { Language, Page } from '../types';
import { getLocale } from '../locales';

interface MechanismsPageProps {
  language: Language;
  onNavigate: (page: Page) => void;
}

const MechanismsPage: React.FC<MechanismsPageProps> = ({ language, onNavigate }) => {
  const locale = getLocale(language);
  const content = locale.mechanisms;
  const mechanisms = content.cards.map((item) => ({
    ...item,
    action: item.page ? () => onNavigate(item.page!) : undefined,
  }));

  return <CardGrid title={content.title} subtitle={content.subtitle} actionLabel={locale.common.learnMore} items={mechanisms} />;
};

export default MechanismsPage;
