import React from 'react';
import CardGrid from '../components/CardGrid';
import { Language, Page } from '../types';
import { getLocale } from '../locales';

interface ProductTypesPageProps {
  language: Language;
  onNavigate: (page: Page) => void;
}

const ProductTypesPage: React.FC<ProductTypesPageProps> = ({ language, onNavigate }) => {
  const locale = getLocale(language);
  const content = locale.products;
  const categories = content.cards.map((item) => ({
    ...item,
    action: item.page ? () => onNavigate(item.page!) : undefined,
  }));

  return <CardGrid title={content.title} subtitle={content.subtitle} actionLabel={locale.common.learnMore} items={categories} />;
};

export default ProductTypesPage;
