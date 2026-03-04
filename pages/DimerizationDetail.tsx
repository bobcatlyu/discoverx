
import React from 'react';

const DimerizationDetail: React.FC = () => {
  const cytokineData = [
    { target: 'IL-1R1', moa: 'Dimerization', host: 'CHO-K1', type: 'Cell Line', desc: 'Interleukin 1 receptor type I' },
    { target: 'IL-2RG / IL-4R', moa: 'Heterodimerization', host: 'CHO-K1', type: 'Cell Line', desc: 'Interleukin 2 receptor gamma / 4 receptor alpha' },
    { target: 'IL-6R / gp130', moa: 'Dimerization', host: 'CHO-K1', type: 'Cell Line', desc: 'Interleukin 6 receptor / glycoprotein 130' },
    { target: 'IL-12RB1 / IL-12RB2', moa: 'Dimerization', host: 'U2OS', type: 'Cell Line', desc: 'Interleukin 12 receptor beta 1/2' },
    { target: 'IFNGR1 / IFNGR2', moa: 'Heterodimerization', host: 'CHO-K1', type: 'Cell Line', desc: 'Interferon gamma receptor 1/2' },
  ];

  const checkpointData = [
    { target: 'TIM3 / TIM3', moa: 'Homodimerization', host: 'U2OS', type: 'Cell Line', desc: 'Hepatitis A virus cellular receptor 2' },
    { target: 'VISTA / VISTA', moa: 'Homodimerization', host: 'U2OS', type: 'Cell Line', desc: 'V-domain Ig suppressor of T cell activation' },
    { target: 'TIGIT / CD155', moa: 'Dimerization (trans)', host: 'CHO-K1', type: 'Cell Line', desc: 'T cell immunoreceptor with Ig and ITIM domains' },
  ];

  const kinaseData = [
    { target: 'EGFR (HER1)', moa: 'Dimerization', host: 'U2OS', type: 'Cell Line', desc: 'Epidermal growth factor receptor' },
    { target: 'HER2 (ERBB2)', moa: 'Heterodimerization', host: 'U2OS', type: 'Cell Line', desc: 'Human epidermal growth factor receptor 2' },
    { target: 'HER3 (ERBB3)', moa: 'Dimerization', host: 'U2OS', type: 'Cell Line', desc: 'Human epidermal growth factor receptor 3' },
    { target: 'MET (HGFR)', moa: 'Dimerization', host: 'U2OS', type: 'Cell Line', desc: 'Hepatocyte growth factor receptor' },
    { target: 'VEGFR2', moa: 'Dimerization', host: 'CHO-K1', type: 'Cell Line', desc: 'Vascular endothelial growth factor receptor 2' },
  ];

  const ProductTable = ({ data, title }: { data: any[], title: string }) => (
    <div className="mb-12 overflow-hidden shadow-xl rounded-xl border border-slate-200">
      <div className="bg-[#4B827E] px-6 py-4">
        <h3 className="text-lg font-bold text-white uppercase tracking-wider">{title}</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-slate-200">
          <thead className="bg-slate-50">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider border-r border-slate-200 text-slate-500">产品类型</th>
              <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider border-r border-slate-200 text-slate-500">Targets / Pairs</th>
              <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider border-r border-slate-200 text-slate-500">MoA</th>
              <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider border-r border-slate-200 text-slate-500">宿主细胞</th>
              <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider text-slate-500">描述</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-slate-200">
            {data.map((row, idx) => (
              <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50 hover:bg-teal-50/30 transition-colors'}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500 border-r border-slate-100">{row.type}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-[#1C2C5E] border-r border-slate-100">{row.target}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500 italic border-r border-slate-100">{row.moa}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-[#4B827E] border-r border-slate-100">{row.host}</td>
                <td className="px-6 py-4 text-sm text-slate-600">{row.desc}</td>
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
            <h1 className="text-4xl font-extrabold text-[#1C2C5E] mb-6">受体二聚化 (Receptor Dimerization)</h1>
            <div className="h-1 w-20 bg-[#4B827E] mb-8"></div>
            <p className="text-slate-600 leading-relaxed text-lg mb-6">
              受体二聚化是众多细胞表面受体（如 RTKs, 细胞因子受体和 GPCRs）信号传导的始动步骤。通过配体诱导受体分子间的物理接触，触发胞内域的自身磷酸化或信号复合物的招募。
            </p>
            <p className="text-slate-600 leading-relaxed text-lg">
              Eurofins DiscoverX 的酶片段互补 (EFC) 技术能够在活细胞环境中直接、实时地定量监测受体二聚化过程。这一技术不依赖于抗体标记，为筛选激动性或拮抗性药物提供了极具生物学相关性的检测平台。
            </p>
          </div>
          <div className="md:w-1/2">
            <img 
              src="\pic\Dimerization.jpg" 
              alt="Dimerization Assay" 
              className="rounded-2xl shadow-2xl border border-slate-100"
            />
          </div>
        </div>
      </section>

      {/* 2. MOA Section - EFC Dimerization Technology */}
      <section className="bg-slate-50 py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1C2C5E] mb-10 text-center">EFC 二聚化技术优势与应用</h2>
          
          <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden mb-12">
            <div className="p-10">
              <h3 className="text-2xl font-bold text-[#4B827E] mb-6">二聚化检测原理 (Principle of Detection)</h3>
              <p className="text-slate-600 leading-relaxed text-lg mb-8">
                通过在两个目标受体亚基上分别融合 ProLink™ (PK) 和 Enzyme Acceptor (EA) 标签，当配体诱导二聚体形成时，PK 与 EA 在胞内发生物理互补，产生具有活性的 β-半乳糖苷酶。该过程产生的化学发光信号强度直接反映了受体二聚化的程度。
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { title: "抗体药物筛选", desc: "高效筛选和评估针对跨膜受体的激动型或拮抗型单克隆抗体。" },
                  { title: "双抗诱导分析", desc: "专门用于研究双特异性抗体诱导的非典型受体异源二聚化及其药效。" },
                  { title: "偏向性信号研究", desc: "定量评估不同配体对受体激活诱导的偏向性信号传导 (Biased Signaling)。" },
                  { title: "跨膜蛋白互作", desc: "直接监测不同受体亚型间的相互作用，揭示复杂的细胞调控网络。" },
                  { title: "实时动力学监测", desc: "支持在活细胞中进行长时程监测，捕捉受体结合与解离的动态过程。" },
                  { title: "高通量筛选兼容", desc: "均相检测模式（No-wash），完美适配 384/1536 孔板自动化筛选需求。" }
                ].map((item, i) => (
                  <div key={i} className="p-5 border border-slate-100 rounded-lg bg-slate-50 hover:border-[#4B827E] hover:shadow-md transition-all">
                    <h4 className="font-bold text-[#1C2C5E] mb-2">{item.title}</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Product List Table Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pb-32">
        <h2 className="text-3xl font-bold text-[#1C2C5E] mb-10 text-center md:text-left">受体二聚化产品列表 / Dimerization Portfolio</h2>
        <div className="space-y-4">
          <ProductTable title="细胞因子受体系列 (Cytokine Receptors)" data={cytokineData} />
          <ProductTable title="免疫检查点受体系列 (Checkpoint Receptors)" data={checkpointData} />
          <ProductTable title="激酶受体系列 (Kinase Receptors - RTK)" data={kinaseData} />
        </div>
        <div className="mt-12 text-center">
          <p className="text-slate-500 text-sm italic bg-slate-50 py-4 rounded-lg border border-dashed border-slate-300">
            * 列表中未提及的特定受体亚型组合，欢迎联系我们的开发服务团队进行咨询。
          </p>
        </div>
      </section>
    </div>
  );
};

export default DimerizationDetail;
