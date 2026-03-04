
import React from 'react';
import { Page } from '../types';

interface PpiDetailProps {
  onNavigate?: (page: Page) => void;
}

const PpiDetail: React.FC<PpiDetailProps> = ({ onNavigate }) => {
  const kinasePpi = [
    { target: 'EGFR', ppi: 'SHC1', moa: 'SH2 Recruitment', host: 'U2OS', desc: 'Epidermal growth factor receptor' },
    { target: 'MET', ppi: 'PLCG1 (SH2)', moa: 'SH2 Recruitment', host: 'U2OS', desc: 'Hepatocyte growth factor receptor' },
    { target: 'IGF1R', ppi: 'SHC1', moa: 'SH2 Recruitment', host: 'U2OS', desc: 'Insulin-like growth factor 1 receptor' },
  ];

  const checkpointPpi = [
    { target: 'PD-1', ppi: 'SHP-1 / SHP-2', moa: 'Recruitment', host: 'CHO-K1', desc: 'Programmed cell death protein 1' },
    { target: 'BTLA', ppi: 'SHP-1', moa: 'Recruitment', host: 'U2OS', desc: 'B- and T-lymphocyte attenuator' },
  ];

  const nhrPpi = [
    { target: 'AR (Androgen Receptor)', ppi: 'Co-activator', moa: 'Co-regulator recruitment', host: 'U2OS', desc: 'Nuclear receptor subfamily 3 group C member 4' },
    { target: 'GR (Glucocorticoid)', ppi: 'HSP90 / HSP70', moa: 'Chaperone binding', host: 'U2OS', desc: 'Nuclear receptor subfamily 3 group C member 1' },
    { target: 'ERα', ppi: 'Co-activator', moa: 'Co-regulator recruitment', host: 'U2OS', desc: 'Estrogen receptor alpha' },
  ];

  const ProductTable = ({ data, title }: { data: any[], title: string }) => (
    <div className="w-full mb-12">
      <div className="w-full overflow-x-auto shadow-xl rounded-xl border border-slate-200">
        <div className="bg-[#4B827E] px-6 py-4">
          <h3 className="text-lg font-bold text-white uppercase tracking-wider">{title}</h3>
        </div>
        <table className="min-w-full divide-y divide-slate-200">
          <thead className="bg-slate-50">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider border-r border-slate-200 text-slate-500 whitespace-nowrap">靶点 / 受体</th>
              <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider border-r border-slate-200 text-slate-500 whitespace-nowrap">相互作用蛋白</th>
              <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider border-r border-slate-200 text-slate-500 whitespace-nowrap">作用机制</th>
              <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider text-slate-500 whitespace-nowrap">宿主细胞</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-slate-200">
            {data.map((row, idx) => (
              <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50 hover:bg-teal-50/30 transition-colors'}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-[#1C2C5E] border-r border-slate-100">{row.target}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-[#4B827E] font-bold border-r border-slate-100">{row.ppi}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500 italic border-r border-slate-100">{row.moa}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-600">{row.host}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  return (
    <div className="bg-white">
      {/* 1. Introduction Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <h1 className="text-4xl font-extrabold text-[#1C2C5E] mb-6">蛋白间相互作用 (PPI)</h1>
            <div className="h-1 w-20 bg-[#4B827E] mb-8"></div>
            <p className="text-slate-600 leading-relaxed text-lg mb-6">
              蛋白质-蛋白质相互作用 (PPI) 是细胞信号传导网络的基础。从受体激活后的衔接蛋白招募到核受体的辅调节因子结合，PPI 的精确调控决定了细胞的生理响应。
            </p>
            <p className="text-slate-600 leading-relaxed text-lg">
              Eurofins DiscoverX 的酶片段互补 (EFC) 技术为在活细胞内直接、定量地研究 PPI 提供了最灵敏的工具。无需破坏细胞，即可实时捕捉蛋白质复合物的形成与解离。
            </p>
          </div>
          <div className="md:w-1/2">
            <img 
              src="https://picsum.photos/seed/ppi_science/800/600" 
              alt="PPI Assay Principle" 
              className="rounded-2xl shadow-2xl border border-slate-100"
            />
          </div>
        </div>
      </section>

      {/* 2. MOA Section */}
      <section className="bg-slate-50 py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1C2C5E] mb-10 text-center">核心检测模块 (Core PPI Modules)</h2>
          
          <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="divide-y divide-slate-100">
              {[
                { 
                  title: "SH2 招募 (SH2 Recruitment)", 
                  desc: "监测受体酪氨酸激酶 (RTK) 激活磷酸化后，招募含有 SH2 结构域的衔接蛋白（如 Shc, PLCγ, Grb2）。这是评估激酶功能性激活及抗体药物效力的关键指标。" 
                },
                { 
                  title: "β-arrestin 招募", 
                  desc: "GPCR 激活后的通用非 G 蛋白信号通路。通过监测受体与 β-arrestin 的结合，可有效筛选激动剂、拮抗剂以及偏向性配体 (Biased Ligands)。" 
                },
                { 
                  title: "辅调节因子招募 (Co-regulator Recruitment)", 
                  desc: "专门针对核受体 (NHR) 设计，监测配体诱导的受体与激动剂或拮抗剂特异性辅助蛋白（如 SRC-1, NCoR1）的物理结合，用于筛选高度特异性的核受体调节剂。" 
                },
                { 
                  title: "伴侣蛋白结合 (Chaperone Binding)", 
                  desc: "研究蛋白质在折叠与贩运过程中与热休克蛋白（HSP70/90）的动态结合。对于研究蛋白质稳定性、药物诱导的降解（如 PROTAC）以及错配疾病具有重要意义。" 
                }
              ].map((item, i) => (
                <div key={i} className="p-10 hover:bg-slate-50 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-start gap-8">
                    <div className="shrink-0">
                      <div className="w-12 h-12 rounded-full bg-teal-50 flex items-center justify-center text-[#4B827E] text-xl font-bold">
                        0{i + 1}
                      </div>
                    </div>
                    <div className="flex-grow">
                      <h4 className="text-2xl font-bold text-[#4B827E] mb-4">{item.title}</h4>
                      <p className="text-slate-600 leading-relaxed text-lg">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Categorized Product Tables */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pb-32">
        <h2 className="text-3xl font-bold text-[#1C2C5E] mb-12 text-center md:text-left">PPI 产品组合 / Interaction Portfolio</h2>
        <div className="space-y-4">
          
          {/* GPCR SECTION - Updated per request */}
          <div className="mb-12 overflow-hidden shadow-xl rounded-xl border border-slate-200">
            <div className="bg-[#4B827E] px-6 py-4">
              <h3 className="text-lg font-bold text-white uppercase tracking-wider">G蛋白偶联受体 (GPCR) β-arrestin 系统</h3>
            </div>
            <div className="p-12 text-center bg-white">
              <p className="text-slate-600 text-lg">
                详见 <button 
                  onClick={() => onNavigate && onNavigate(Page.Gpcr)}
                  className="font-bold text-[#4B827E] hover:underline underline-offset-4"
                >
                  GPCR
                </button> 靶点页面
              </p>
            </div>
          </div>

          <ProductTable title="激酶受体 (Kinase Receptors) SH2 招募系列" data={kinasePpi} />
          <ProductTable title="免疫检查点受体 (Checkpoint Receptors) 信号复合体" data={checkpointPpi} />
          <ProductTable title="核激素受体 (NHR) 辅因子与伴侣蛋白" data={nhrPpi} />
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-slate-500 text-sm italic bg-slate-50 py-4 rounded-lg border border-dashed border-slate-300">
            * 我们可以根据您的需求，通过开发服务构建特定蛋白对的 EFC 检测系统。
          </p>
        </div>
      </section>
    </div>
  );
};

export default PpiDetail;
