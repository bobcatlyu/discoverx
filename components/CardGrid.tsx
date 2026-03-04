
import React from 'react';

interface CardGridProps {
  title: string;
  subtitle?: string;
  items: Array<{
    id: string;
    title: string;
    description: string;
    imageUrl?: string;
    badge?: string;
    action?: () => void;
  }>;
}

const CardGrid: React.FC<CardGridProps> = ({ title, subtitle, items }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-slate-900">{title}</h2>
        {subtitle && <p className="text-slate-600 mt-2 text-lg">{subtitle}</p>}
        <div className="h-1 w-16 bg-[#4B827E] mt-4"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item) => (
          <div 
            key={item.id} 
            onClick={item.action}
            className={`group flex flex-col bg-white border border-slate-200 rounded-xl overflow-hidden hover:border-[#4B827E] hover:shadow-xl transition-all duration-300 ${item.action ? 'cursor-pointer' : ''}`}
          >
            {item.imageUrl && (
              <div className="h-48 overflow-hidden bg-slate-100">
                <img 
                  src={item.imageUrl} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100" 
                />
              </div>
            )}
            <div className="p-6 flex-grow flex flex-col">
              {item.badge && (
                <span className="text-[10px] uppercase font-bold text-[#4B827E] tracking-widest mb-2">
                  {item.badge}
                </span>
              )}
              <h3 className="text-xl font-bold text-slate-800 mb-3">{item.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                {item.description}
              </p>
              <button className="text-[#4B827E] font-semibold text-sm inline-flex items-center hover:text-[#3d6b67]">
                了解更多
                <svg className="ml-1 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardGrid;
