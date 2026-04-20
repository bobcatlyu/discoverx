import React, { useMemo, useState } from 'react';
import { Page } from '../types';
import { DOC_FILES } from '../utils/fileIndex';

interface DatasheetListProps {
  onNavigate: (page: Page) => void;
}

const DatasheetList: React.FC<DatasheetListProps> = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const datasheets = useMemo(() => DOC_FILES.filter((doc) => doc.category === 'datasheet'), []);
  const filtered = useMemo(() => {
    return datasheets.filter((item) => item.filename.toLowerCase().includes(searchTerm.toLowerCase()));
  }, [datasheets, searchTerm]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-12">
        <h1 className="mb-4 text-4xl font-extrabold text-[#1C2C5E]">产品说明书 Datasheets</h1>
        <p className="text-lg text-slate-600">按文件名搜索并打开产品说明书。</p>
        <div className="mt-6 h-1 w-20 bg-[#4B827E]"></div>
      </div>

      <div className="relative mb-8">
        <input
          type="text"
          placeholder="搜索 Datasheet 文件名"
          className="w-full rounded-xl border border-slate-200 bg-white py-4 pl-12 pr-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#4B827E]"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <svg className="absolute left-4 top-1/2 h-6 w-6 -translate-y-1/2 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>

      <div className="mb-4 text-sm text-slate-500">共找到 {filtered.length} 份产品说明书</div>

      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl">
        <table className="min-w-full divide-y divide-slate-200">
          <thead className="bg-slate-50">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-slate-500">文件名</th>
              <th className="px-6 py-4 text-center text-xs font-bold uppercase tracking-wider text-slate-500">操作</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 bg-white">
            {filtered.map((item) => (
              <tr key={item.id} className="transition-colors hover:bg-slate-50">
                <td className="px-6 py-5 text-sm text-[#1C2C5E]">{item.filename}</td>
                <td className="whitespace-nowrap px-6 py-5 text-center">
                  <a
                    href={item.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block p-2 text-[#4B827E] transition-colors hover:text-[#3d6b67]"
                    title="打开 PDF"
                  >
                    <svg className="mx-auto h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
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
