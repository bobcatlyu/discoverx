
import React, { useMemo } from 'react';
import { GLOBAL_CATALOG } from '../constants';
import { Page } from '../types';
import { DOC_FILES } from '../utils/fileIndex';

interface SearchResultsProps {
  query: string;
  onNavigate: (page: Page) => void;
}

interface CatalogResult {
  type: 'catalog';
  data: typeof GLOBAL_CATALOG[0];
}

interface DocResult {
  type: 'document';
  data: typeof DOC_FILES[0];
}

type SearchResult = CatalogResult | DocResult;

const SearchResults: React.FC<SearchResultsProps> = ({ query, onNavigate }) => {
  const results = useMemo(() => {
    if (!query) return [];
    const lowerQuery = query.toLowerCase();

    // Search catalog items
    const catalogResults: CatalogResult[] = GLOBAL_CATALOG
      .filter(item =>
        item.name.toLowerCase().includes(lowerQuery) ||
        item.catNo?.toLowerCase().includes(lowerQuery) ||
        item.category.toLowerCase().includes(lowerQuery) ||
        item.description.toLowerCase().includes(lowerQuery) ||
        item.target?.toLowerCase().includes(lowerQuery)
      )
      .map(item => ({ type: 'catalog' as const, data: item }));

    // Search document files
    const docResults: DocResult[] = DOC_FILES
      .filter(doc =>
        doc.filename.toLowerCase().includes(lowerQuery)
      )
      .map(doc => ({ type: 'document' as const, data: doc }));

    return [...catalogResults, ...docResults];
  }, [query]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 min-h-[60vh]">
      <div className="mb-12">
        <h1 className="text-3xl font-extrabold text-[#1C2C5E] mb-2">搜索结果 / Search Results</h1>
        <p className="text-slate-600">
          为您找到与 <span className="font-bold text-[#4B827E]">"{query}"</span> 相关的结果 {results.length} 条
        </p>
        <div className="h-1 w-20 bg-[#4B827E] mt-6"></div>
      </div>

      {results.length > 0 ? (
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">类型</th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">目录号 / 文件名</th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">名称 / 描述</th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">分类</th>
                  <th className="px-6 py-4 text-center text-xs font-bold text-slate-500 uppercase tracking-wider">操作</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-slate-100">
                {results.map((result) => {
                  if (result.type === 'catalog') {
                    const item = result.data;
                    return (
                      <tr key={`cat-${item.id}`} className="hover:bg-slate-50 transition-colors group">
                        <td className="px-6 py-5 whitespace-nowrap">
                          <span className="px-2 py-1 bg-blue-50 text-blue-600 text-[10px] font-bold rounded uppercase">产品</span>
                        </td>
                        <td className="px-6 py-5 whitespace-nowrap">
                          <div className="text-sm font-mono font-bold text-[#1C2C5E]">{item.catNo || 'N/A'}</div>
                          <div className="text-[10px] text-slate-400 font-bold uppercase">{item.target || '--'}</div>
                        </td>
                        <td className="px-6 py-5">
                          <div className="text-sm font-bold text-slate-800 mb-1">{item.name}</div>
                          <div className="text-xs text-slate-500 line-clamp-1">{item.description}</div>
                        </td>
                        <td className="px-6 py-5 whitespace-nowrap">
                          <span className="px-3 py-1 bg-teal-50 text-[#4B827E] text-[10px] font-bold rounded-full uppercase tracking-widest border border-teal-100">
                            {item.category}
                          </span>
                        </td>
                        <td className="px-6 py-5 whitespace-nowrap text-center">
                          <button
                            onClick={() => onNavigate(item.page as Page)}
                            className="text-[#4B827E] hover:text-[#3d6b67] text-sm font-bold flex items-center justify-center gap-1 group-hover:translate-x-1 transition-transform mx-auto"
                          >
                            详情 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                          </button>
                        </td>
                      </tr>
                    );
                  } else {
                    const doc = result.data;
                    return (
                      <tr key={`doc-${doc.id}`} className="hover:bg-slate-50 transition-colors group">
                        <td className="px-6 py-5 whitespace-nowrap">
                          <span className="px-2 py-1 bg-amber-50 text-amber-600 text-[10px] font-bold rounded uppercase">文档</span>
                        </td>
                        <td className="px-6 py-5" colSpan={2}>
                          <div className="text-sm font-mono text-slate-700 break-all">{doc.filename}</div>
                        </td>
                        <td className="px-6 py-5 whitespace-nowrap">
                          <span className="px-3 py-1 bg-purple-50 text-purple-600 text-[10px] font-bold rounded-full uppercase tracking-widest border border-purple-100">
                            {doc.category === 'datasheet' ? '产品说明书' : '用户手册'}
                          </span>
                        </td>
                        <td className="px-6 py-5 whitespace-nowrap text-center">
                          <a
                            href={doc.path}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#4B827E] hover:text-[#3d6b67] text-sm font-bold flex items-center justify-center gap-1 group-hover:translate-x-1 transition-transform mx-auto"
                          >
                            下载 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                          </a>
                        </td>
                      </tr>
                    );
                  }
                })}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className="py-24 text-center bg-white rounded-2xl border-2 border-dashed border-slate-200">
          <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6 text-slate-400">
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          </div>
          <h3 className="text-xl font-bold text-slate-800 mb-2">未找到匹配的结果</h3>
          <p className="text-slate-500 max-w-md mx-auto mb-8 text-sm">
            抱歉，没有找到与您的搜索条件匹配的产品或靶点。请尝试使用其他关键词，或直接联系我们的技术专家。
          </p>
          <button 
            onClick={() => onNavigate(Page.Contacts)}
            className="bg-[#4B827E] text-white px-8 py-3 rounded-xl font-bold hover:bg-[#3d6b67] transition-all shadow-lg"
          >
            联系技术支持
          </button>
        </div>
      )}

      {/* Recommended Category Stats */}
      <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="bg-slate-100 p-6 rounded-xl border border-slate-200">
          <div className="text-[#4B827E] font-black text-2xl mb-1">1,000+</div>
          <div className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">GPCR Targets</div>
        </div>
        <div className="bg-slate-100 p-6 rounded-xl border border-slate-200">
          <div className="text-[#4B827E] font-black text-2xl mb-1">400+</div>
          <div className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Kinase Assays</div>
        </div>
        <div className="bg-slate-100 p-6 rounded-xl border border-slate-200">
          <div className="text-[#4B827E] font-black text-2xl mb-1">50+</div>
          <div className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Immune Checkpoints</div>
        </div>
        <div className="bg-slate-100 p-6 rounded-xl border border-slate-200">
          <div className="text-[#4B827E] font-black text-2xl mb-1">200+</div>
          <div className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Cell Lines</div>
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
