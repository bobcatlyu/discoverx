
import React from 'react';

const InternalizationDetail: React.FC = () => {
  const checkpoints = ['BCMA', 'CD33 (SIGLEC3)', 'Siglec9'];
  const kinases = ['INSRb'];
  const gpcrs = [
    ['ADCYAP1R1 (PAC1)', 'C3AR1 (C3a)', 'CHRM1', 'DRD1', 'HCRTR1 (OX1)', 'OPRD1 (Opioid δ)', 'P2RY1'],
    ['ADRA2C', 'C5AR1 (C5a)', 'CHRM2', 'F2RL1 (PAR2)', 'HCRTR2 (OX2)', 'OPRK1 (Opioid κ)', 'P2RY12'],
    ['ADRB2', 'C5L2 (C5a2)', 'CHRM3', 'F2RL3 (PAR4)', 'HTR2C (5-HT2C)', 'OPRL1 (Opioid)', 'P2RY2'],
    ['APJ (AGTRL1)', 'CCKAR (CCK1)', 'CHRM4', 'FPR1', 'LTB4R', 'OPRM1 (Opioid μ)', 'P2RY4'],
    ['AVPR1A', 'CCKBR (CCK2)', 'CHRM5', 'FPR2 (FPRL1)', 'MC3R', 'OXER1', 'PRLHR'],
    ['AVPR1B', 'CCR1 (MIP-1a/RANTES-R)', 'CMKLR1', 'GALR1', 'MCHR1', 'OXTR', 'PROKR1'],
    ['AVPR2', 'CCR10 (CCL27R)', 'CRHR1', 'GCGR (GCG)', 'MLNR (Motilin)', 'SCTR', 'PROKR2'],
    ['BDKRB2', 'CCR2 (MIP-1R)', 'CRHR2', 'GLP1R (GLP1)', 'MTNR1A', 'SSTR2', 'PTAFR'],
    ['EDG1 (S1P1)', 'CCR4', 'CXCR1 (IL8RA)', 'GLP2R (GLP2)', 'MTNR1B', 'TACR1', 'PTGER4'],
    ['EDG2 (LPA1)', 'CCR5 (MIP-1/RANTES-R)', 'CXCR2 (IL8RB)', 'GPR1', 'NMBR', 'TACR2', 'PTGFR'],
    ['EDG3 (S1P3)', 'CCR6 (MIP-3α)', 'CXCR3 (IP-10R)', 'GPR120 (L)', 'NMU1R', 'TACR3', 'PTGIR'],
    ['EDG5 (S1P2)', 'CCR7 (CCL19)', 'CXCR4 (SDF-1R)', 'GPR183 (EBI2)', 'NPY2R (PYY)', 'TBXA2R', 'PTHR1'],
    ['EDG7 (LPA3)', 'RXFP3 (SALPR)', 'CXCR6 (CCL16R)', 'GPR35', 'NTSR1', 'TRHR', 'PTHR2'],
    ['EDNRB', 'UTR2', 'CXCR7 (ACKR3)', 'GRPR (BB2)', 'VIPR1', 'VIPR2', '']
  ];

  return (
    <div className="bg-white">
      {/* 1. Introduction Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <h1 className="text-4xl font-extrabold text-[#1C2C5E] mb-6">受体内吞 (Internalization)</h1>
            <div className="h-1 w-20 bg-[#4B827E] mb-8"></div>
            <p className="text-slate-600 leading-relaxed text-lg mb-6">
              受体内吞是细胞调节其表面受体密度的关键过程，涉及信号的终止（脱敏）、受体循环以及靶向给药。
            </p>
            <p className="text-slate-600 leading-relaxed text-lg mb-6">
              在 **ADC (抗体偶联药物)** 开发中，受体内吞效率是决定药物能否成功释放至胞内靶点的关键。对于 **GPCR** 研究，内吞是评估配体诱导的信号衰减及长效药理活性的重要指标。
            </p>
            <p className="text-slate-600 leading-relaxed text-lg">
              Eurofins DiscoverX 的 PathHunter® 内吞检测平台提供了一种高灵敏度的、基于活细胞的均相分析方案，能够直接追踪特定受体从质膜向内体室的移动。
            </p>
          </div>
          <div className="md:w-1/2">
            <img 
              src="\pic\Internalization.jpg" 
              alt="Receptor Internalization Research" 
              className="rounded-2xl shadow-2xl border border-slate-100"
            />
          </div>
        </div>
      </section>

      {/* 2. MOA Section */}
      <section className="bg-slate-50 py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1C2C5E] mb-10 text-center">作用机制 (Mechanism of Action)</h2>
          
          <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="p-10">
              <h3 className="text-2xl font-bold text-[#4B827E] mb-6">PathHunter® 内吞检测原理</h3>
              <p className="text-slate-600 leading-relaxed text-lg mb-10">
                该检测利用酶片段互补 (EFC) 技术。将受体分子胞内端融合 ED片段，而酶受体 (EA) 标签则定位于内体 (Endosome) 。当受体被激活并发生内吞，形成的囊泡与内体融合，ED 与 EA 发生互补并产生化学发光信号。
              </p>
              
              <div className="grid md:grid-cols-2 gap-10">
                <div className="bg-slate-50 p-8 rounded-xl border border-slate-100">
                  <h4 className="font-bold text-[#1C2C5E] mb-4 text-xl">检测优势</h4>
                  <ul className="space-y-3 text-slate-600">
                    <li className="flex items-start">
                      <span className="text-[#4B827E] mr-2">●</span>
                      <span><strong>活细胞监测：</strong> 直接在生理相关的细胞环境中观察内吞。</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#4B827E] mr-2">●</span>
                      <span><span><strong>均相无洗涤：</strong> "加样-读数" 流程，极大减少实验误差。</span></span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#4B827E] mr-2">●</span>
                      <span><strong>高信噪比：</strong> EFC 技术提供极宽的动态范围和低背景。</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-slate-50 p-8 rounded-xl border border-slate-100">
                  <h4 className="font-bold text-[#1C2C5E] mb-4 text-xl">应用领域</h4>
                  <ul className="space-y-3 text-slate-600">
                    <li className="flex items-start">
                      <span className="text-[#4B827E] mr-2">●</span>
                      <span><strong>ADC 筛选：</strong> 评估抗体诱导的靶点内吞速率。</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#4B827E] mr-2">●</span>
                      <span><strong>GPCR 脱敏：</strong> 追踪配体结合后的受体贩运。</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#4B827E] mr-2">●</span>
                      <span><strong>靶向清除分析：</strong> 定量评估抗体介导的表面受体下调。</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Product List Table Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pb-32">
        <h2 className="text-3xl font-bold text-[#1C2C5E] mb-12 text-center md:text-left">内吞检测产品列表 / Internalization Portfolio</h2>
        
        {/* Checkpoint Receptors Table */}
        <div className="mb-12">
          <div className="bg-[#4B827E] px-6 py-3 rounded-t-lg">
            <h3 className="text-lg font-bold text-white uppercase tracking-wider">Checkpoint Receptors</h3>
          </div>
          <div className="bg-white border-x border-b border-slate-200 shadow-sm p-6">
            <div className="flex flex-wrap gap-x-8 gap-y-2">
              {checkpoints.map((t, i) => (
                <span key={i} className="text-[#4B827E] font-bold text-sm min-w-[150px]">{t}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Kinase Receptors Table */}
        <div className="mb-12">
          <div className="bg-[#4B827E] px-6 py-3 rounded-t-lg">
            <h3 className="text-lg font-bold text-white uppercase tracking-wider">Kinase Receptors</h3>
          </div>
          <div className="bg-white border-x border-b border-slate-200 shadow-sm p-6">
            <div className="flex flex-wrap gap-x-8 gap-y-2">
              {kinases.map((t, i) => (
                <span key={i} className="text-[#4B827E] font-bold text-sm min-w-[150px]">{t}</span>
              ))}
            </div>
          </div>
        </div>

        {/* GPCR Grid Table */}
        <div className="mb-12 overflow-hidden shadow-xl rounded-xl border border-slate-200">
          <div className="bg-[#4B827E] px-6 py-4">
            <h3 className="text-lg font-bold text-white uppercase tracking-wider">GPCR Internalization</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse">
              <tbody className="bg-white divide-y divide-slate-100">
                {gpcrs.map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                    {row.map((cell, cIdx) => (
                      <td key={cIdx} className="px-4 py-3 text-xs font-medium text-slate-700 border-r border-slate-100 last:border-r-0 whitespace-nowrap">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate-500 text-sm italic bg-slate-50 py-4 rounded-lg border border-dashed border-slate-300">
            * 我们可以根据您的特定靶点，通过开发服务构建内吞检测细胞系。
          </p>
        </div>
      </section>
    </div>
  );
};

export default InternalizationDetail;
