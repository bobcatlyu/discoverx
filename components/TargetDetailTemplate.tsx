
import React from 'react';

export interface MoaItem {
  title: string;
  description: string;
  imageUrl?: string; // Optional image for specific mechanisms
  imageUrl2?: string; // Optional second image for side-by-side display
  maxWidth?: string; // Optional max-width class (e.g., "max-w-xl")
}

export interface ProductRow {
  target: string;
  moa: string;
  statuses: string[]; // Dynamically sized status array (e.g., ['✓', '-', '✓'])
}

interface TargetDetailTemplateProps {
  title: string;
  subtitle?: string;
  introText: string[];
  introImageUrl?: string;
  highlights?: string[];
  moaItems: MoaItem[];
  productData: ProductRow[];
  productTableTitle: string;
  // Dynamic headers for the product type columns
  customTypeHeaders: string[]; 
}

const TargetDetailTemplate: React.FC<TargetDetailTemplateProps> = ({
  title,
  subtitle,
  introText,
  introImageUrl,
  highlights,
  moaItems,
  productData,
  productTableTitle,
  customTypeHeaders
}) => {
  return (
    <div className="bg-white">
      {/* 1. Introduction Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col gap-12 items-center">
          <div className="w-full">
            <h1 className="text-4xl font-extrabold text-[#1C2C5E] mb-2">{title}</h1>
            {subtitle && <h2 className="text-xl font-bold text-[#4B827E] mb-6">{subtitle}</h2>}
            <div className="h-1 w-20 bg-[#4B827E] mb-8"></div>
            {introText.map((paragraph, idx) => (
              <p key={idx} className="text-slate-600 leading-relaxed text-lg mb-6">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Highlights Section */}
      {highlights && highlights.length > 0 && (
        <section className="bg-white py-16 border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#1C2C5E] mb-10 text-center">产品亮点 (Product Highlights)</h2>
            <div className={`grid grid-cols-1 md:grid-cols-2 ${highlights.length === 3 ? 'lg:grid-cols-3' : 'lg:grid-cols-4'} gap-8`}>
              {highlights.map((highlight, idx) => {
                const [title, ...descParts] = highlight.split('——');
                const description = descParts.join('——');
                return (
                  <div key={idx} className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-lg transition-all hover:-translate-y-1">
                    <div className="w-10 h-10 rounded-lg bg-[#4B827E]/10 flex items-center justify-center text-[#4B827E] mb-6">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-[#1C2C5E] mb-4">{title}</h3>
                    <p className="text-slate-600 leading-relaxed">
                      {description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* 3. MOA Section */}
      <section className="bg-slate-50 py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1C2C5E] mb-10 text-center">作用机制 (Mechanism of Action)</h2>
          
          <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="divide-y divide-slate-100">
              {moaItems.map((item, idx) => (
                <div key={idx} className="p-10 hover:bg-slate-50 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-start gap-8">
                    <div className="shrink-0">
                      <div className="w-12 h-12 rounded-full bg-teal-50 flex items-center justify-center text-[#4B827E] text-xl font-bold">
                        {idx + 1}
                      </div>
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-2xl font-bold text-[#4B827E] mb-4">{item.title}</h3>
                      <div className="grid md:grid-cols-12 gap-8 items-start">
                        <div className="md:col-span-12">
                          <p className="text-slate-600 leading-relaxed text-lg mb-6">
                            {item.description}
                          </p>
                          {(item.imageUrl || item.imageUrl2) && (
                            <div className="mt-6">
                              {item.imageUrl2 ? (
                                // Two images side by side
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                  <img
                                    src={item.imageUrl}
                                    alt={`${item.title} - 1`}
                                    className="w-full rounded-xl shadow-lg border border-slate-200"
                                  />
                                  <img
                                    src={item.imageUrl2}
                                    alt={`${item.title} - 2`}
                                    className="w-full rounded-xl shadow-lg border border-slate-200"
                                  />
                                </div>
                              ) : (
                                // Single image
                                <img
                                  src={item.imageUrl}
                                  alt={item.title}
                                  className={`w-full ${item.maxWidth || 'max-w-xl'} rounded-xl shadow-lg border border-slate-200`}
                                />
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Product List Table Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-bold text-[#1C2C5E] mb-10 text-center md:text-left">{productTableTitle}</h2>
        <div className="flex justify-start">
          <div className="inline-block max-w-full bg-white shadow-xl rounded-xl border border-slate-200 overflow-hidden w-fit">
            <table className="divide-y divide-slate-200">
              <thead className="bg-[#4B827E] text-white">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider whitespace-nowrap">靶点</th>
                  <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider whitespace-nowrap">作用机制</th>
                  {customTypeHeaders.map((header, idx) => (
                    <th key={idx} className="px-6 py-4 text-center text-sm font-bold uppercase tracking-wider whitespace-nowrap">{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-slate-200">
                {productData.map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50 hover:bg-teal-50/30 transition-colors'}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-slate-900 border-r border-slate-100">{row.target}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600 border-r border-slate-100">{row.moa}</td>
                    {row.statuses.map((status, statusIdx) => (
                      <td key={statusIdx} className="px-6 py-4 whitespace-nowrap text-center text-sm text-slate-700">
                        {status === '✓' ? <span className="text-[#4B827E] font-bold text-lg">✓</span> : status}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p className="text-slate-500 text-sm italic">
            * 如未找到您的特定靶点，请联系我们的开发服务团队进行咨询。
          </p>
        </div>
      </section>
    </div>
  );
};

export default TargetDetailTemplate;
