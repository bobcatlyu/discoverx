import React from 'react';
import { Page } from '../types';

interface DatasheetListProps {
  onNavigate: (page: Page) => void;
}

const DatasheetList: React.FC<DatasheetListProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-10 max-w-3xl">
        <h1 className="mb-4 text-4xl font-extrabold text-[#1C2C5E]">产品说明书 Datasheets</h1>
        <p className="text-lg leading-relaxed text-slate-600">
          Datasheet 不再作为独立 PDF 清单集中展示。请从靶点页面、产品页面查看推荐产品与应用信息；如需具体产品 datasheet，可根据货号联系获取最新版本。
        </p>
        <div className="mt-6 h-1 w-20 bg-[#4B827E]"></div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <button
          type="button"
          onClick={() => onNavigate(Page.Targets)}
          className="rounded-2xl border border-slate-200 bg-white p-7 text-left shadow-sm transition hover:border-[#4B827E] hover:shadow-md"
        >
          <div className="mb-3 text-sm font-black uppercase tracking-widest text-[#4B827E]">Targets</div>
          <h2 className="mb-3 text-xl font-black text-[#1C2C5E]">按靶点查看</h2>
          <p className="text-sm leading-relaxed text-slate-600">从 GLP-1R、PD-1、HER2 等靶点入口查看相关产品、推荐 assay 和适用场景。</p>
        </button>

        <button
          type="button"
          onClick={() => onNavigate(Page.UserManual)}
          className="rounded-2xl border border-slate-200 bg-white p-7 text-left shadow-sm transition hover:border-[#4B827E] hover:shadow-md"
        >
          <div className="mb-3 text-sm font-black uppercase tracking-widest text-[#4B827E]">Manuals</div>
          <h2 className="mb-3 text-xl font-black text-[#1C2C5E]">查看操作手册</h2>
          <p className="text-sm leading-relaxed text-slate-600">User manual 仍集中提供，用于查看实验流程、试剂处理、plate workflow 和 troubleshooting。</p>
        </button>

        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-7">
          <div className="mb-3 text-sm font-black uppercase tracking-widest text-[#4B827E]">Datasheet</div>
          <h2 className="mb-3 text-xl font-black text-[#1C2C5E]">按需获取</h2>
          <p className="text-sm leading-relaxed text-slate-600">不同货号、包装规格和版本可能更新较快，建议按项目需求获取当前版本的 datasheet。</p>
        </div>
      </div>
    </div>
  );
};

export default DatasheetList;
