
import React, { useState } from 'react';

const Reference: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Placeholder - will be populated with actual files when available
  const references: any[] = [];

  const filtered = references.filter(ref => ref.title?.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-12">
        <h1 className="text-4xl font-extrabold text-[#1C2C5E] mb-4">参考文献库 (References)</h1>
        <p className="text-slate-600 text-lg">汇集使用 Eurofins DiscoverX 产品发表的高水平学术成果。</p>
        <div className="h-1 w-20 bg-[#4B827E] mt-6"></div>
      </div>

      <div className="mb-8 relative">
        <input
          type="text"
          placeholder="搜索参考文献..."
          className="w-full pl-12 pr-4 py-4 bg-white border border-slate-200 rounded-xl shadow-sm focus:ring-2 focus:ring-[#4B827E] focus:outline-none"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <svg className="absolute left-4 top-1/2 -translate-y-1/2 h-6 w-6 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>

      <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
        <div className="p-20 text-center">
          <svg className="w-16 h-16 mx-auto mb-4 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
          <p className="text-slate-400 text-lg mb-2">参考文献即将上传</p>
          <p className="text-slate-500 text-sm">Reference files will be available soon</p>
        </div>
      </div>
    </div>
  );
};

export default Reference;
