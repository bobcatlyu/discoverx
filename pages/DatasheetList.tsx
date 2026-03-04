
import React, { useState, useMemo } from 'react';
import { Page } from '../types';
import { DOC_FILES } from '../utils/fileIndex';

interface DatasheetListProps {
  onNavigate: (page: Page) => void;
}

const DatasheetList: React.FC<DatasheetListProps> = ({ onNavigate }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const datasheets = useMemo(() => {
    return DOC_FILES.filter(doc => doc.category === 'datasheet');
  }, []);

  const filtered = useMemo(() => {
    return datasheets.filter(d =>
      d.filename.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, datasheets]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-12">
        <h1 className="text-4xl font-extrabold text-[#1C2C5E] mb-4">产品说明书 (Datasheets)</h1>
        <p className="text-slate-600 text-lg">查阅及下载详细的产品规格书、批次验证数据及操作指南。</p>
        <div className="h-1 w-20 bg-[#4B827E] mt-6"></div>
      </div>

      {/* Search Bar */}
      <div className="mb-8 relative">
        <input
          type="text"
          placeholder="搜索产品说明书文件名..."
          className="w-full pl-12 pr-4 py-4 bg-white border border-slate-200 rounded-xl shadow-sm focus:ring-2 focus:ring-[#4B827E] focus:outline-none"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <svg className="absolute left-4 top-1/2 -translate-y-1/2 h-6 w-6 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>

      <div className="mb-4 text-sm text-slate-500">
        共找到 {filtered.length} 份产品说明书
      </div>

      <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
        <table className="min-w-full divide-y divide-slate-200">
          <thead className="bg-slate-50">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">文件名 (Filename)</th>
              <th className="px-6 py-4 text-center text-xs font-bold text-slate-500 uppercase tracking-wider">操作 (Action)</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-slate-100">
            {filtered.map((item) => (
              <tr key={item.id} className="hover:bg-slate-50 transition-colors">
                <td className="px-6 py-5 text-sm text-[#1C2C5E]">{item.filename}</td>
                <td className="px-6 py-5 whitespace-nowrap text-center">
                  <a
                    href={item.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block p-2 text-[#4B827E] hover:text-[#3d6b67] transition-colors"
                    title="查看 PDF"
                  >
                    <svg className="w-5 h-5 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {filtered.length === 0 && (
          <div className="p-20 text-center">
            <p className="text-slate-400">未找到相关产品资料。</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DatasheetList;
