
import React, { useState } from 'react';

const QualificationData: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Placeholder - will be populated with actual files when available
  const documents: any[] = [];

  const filtered = documents.filter(doc => doc.title?.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-12">
        <h1 className="text-4xl font-extrabold text-[#1C2C5E] mb-4">验证数据报告 (Qualification Data)</h1>
        <p className="text-slate-600 text-lg">查阅 DiscoverX 平台的各项系统验证与质量控制数据。</p>
        <div className="h-1 w-20 bg-[#4B827E] mt-6"></div>
      </div>

      <div className="mb-8 relative">
        <input
          type="text"
          placeholder="搜索报告名称..."
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
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <p className="text-slate-400 text-lg mb-2">验证数据文件即将上传</p>
          <p className="text-slate-500 text-sm">Qualification data files will be available soon</p>
        </div>
      </div>
    </div>
  );
};

export default QualificationData;
