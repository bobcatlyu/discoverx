import React from 'react';
import CardGrid from '../components/CardGrid';
import { Language, Page } from '../types';
import { getLocale } from '../locales';

interface CustomServicesPageProps {
  language: Language;
  onNavigate: (page: Page) => void;
}

const CustomServicesPage: React.FC<CustomServicesPageProps> = ({ language, onNavigate }) => {
  const locale = getLocale(language);
  const content = locale.custom;
  const services = content.cards.map((item) => ({
    ...item,
    action: item.page ? () => onNavigate(item.page!) : undefined,
  }));

  return <CardGrid title={content.title} subtitle={content.subtitle} actionLabel={locale.common.learnMore} items={services} />;
};

export default CustomServicesPage;
