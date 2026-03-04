
import React from 'react';

const GpcrDetail: React.FC = () => {
  return (
    <div className="bg-white">
      {/* 1. Introduction Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col gap-12 items-center">
          <div className="w-full">
            <h1 className="text-4xl font-extrabold text-[#1C2C5E] mb-2">G蛋白偶联受体 GPCR Assays</h1>
            <h2 className="text-xl font-bold text-[#4B827E] mb-6">始终为您的目标受体找到合适的 GPCR 检测方案</h2>
            <div className="h-1 w-20 bg-[#4B827E] mb-8"></div>
            <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
              <p>
                G 蛋白偶联受体（GPCR）是具有七次跨膜结构的受体家族，是目前已验证治疗靶点中规模最大的家族之一，已知人类 GPCR 超过 800 种。以 GPCR 为靶点的治疗药物约占当前上市药物的 40% 以上，这些药物可直接或间接作用于 GPCR。GPCR 的配体种类广泛，包括生长因子、离子、脂质、核苷酸、激素以及神经递质等。
              </p>
              <p>
                GPCR 在生理与病理过程中的作用极其广泛，从食欲调控、胚胎发育结构形成，到心血管疾病及罕见病等多种疾病过程均与其相关。为帮助研究人员全面解析特定 GPCR 及其受小分子或生物药调控的活性，Eurofins DiscoverX 提供多种生物学相关的细胞水平功能检测与结合检测、细胞系检测试剂盒、稳定细胞系、检测试剂盒及膜制备产品，支持探索多种可能的信号通路机制。
              </p>
              <p>
                Eurofins DiscoverX 产品组合中的靶点特异性产品具有高灵敏度、可扩展性和稳健性，可用于检测受体介导的第二信使信号（cAMP 与钙离子）、β-arrestin 招募、受体内吞以及配体结合等关键事件。这些检测同样支持对尚无已知内源性配体或获批药物的孤儿 GPCR 进行功能表征，构成其全面的 GPCR 解决方案体系。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Product Highlights */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-teal-50/30 rounded-[3rem] mb-16">
        <h3 className="text-2xl font-bold text-[#1C2C5E] mb-8 text-center">产品亮点</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            "覆盖广泛——覆盖超过 90% 的人类 GPCR 组（GPCRome）靶点，确保为您的目标受体提供检测方案",
            "高度适用——适用于小分子与生物药的开发流程，从靶点确认到临床前药物发现阶段",
            "多样检测选择——提供多种作用机制（MOA）类型检测（如 β-arrestin、cAMP、钙信号、内吞、配体结合、受体转运等），提供高度灵活的 GPCR 检测方案",
            "规模领先——超过 1,600 项经验证的功能与结合检测，已发表于 800 余篇同行评审文献，构成全面且可靠的 GPCR 检测体系"
          ].map((highlight, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-teal-100 flex gap-4 items-start">
              <div className="shrink-0 w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center text-white font-bold mt-1">
                ✓
              </div>
              <p className="text-slate-700 font-medium leading-relaxed text-sm">{highlight}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. MOA Section */}
      <section className="bg-slate-50 py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1C2C5E] mb-12 text-center">作用机制 MoA</h2>
          
          <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="divide-y divide-slate-100">
              {[
                {
                  id: "1",
                  title: "cAMP 检测",
                  desc: "直接定量检测 Gs 或 Gi 偶联受体引起的细胞内 second messenger cAMP 水平的变化。使用 HitHunter® 专有技术，提供极高灵敏度的均相化学发光检测，是小分子和生物药筛选的标准方法。",
                  image: "/pic/cAMP.png",
                  maxWidth: "max-w-xl"
                },
                {
                  id: "2",
                  title: "钙流检测",
                  desc: "针对 Gq 偶联通路，利用高灵敏度荧光染料（如 Calcium No Wash 技术）实时监测受体激活激发的胞内钙库释放或胞外钙流入，完美适配 HTS 自动化流程。",
                  image: "/pic/Calcium.png",
                  maxWidth: "max-w-md"
                },
                {
                  id: "3",
                  title: "β-arrestin 招募",
                  desc: "利用专有的 EFC 技术检测几乎所有 GPCR 激活后招募 β-arrestin 的物理过程。该方法不依赖 G 蛋白通路，是研究偏向性配体 (Biased Ligands) 和孤儿受体的核心工具。",
                  image: "/pic/GPCR-β-arrestin.png",
                  maxWidth: "max-w-xl"
                },
                {
                  id: "4",
                  title: "受体内吞 (Activated/Total)",
                  desc: "定量追踪活化后的受体从细胞表面转移到胞内内体的过程。对于评估受体下调、ADC 药物内化效率及长效药效研究具有至关重要的参考价值。",
                  image: "/pic/GPCR-Internalization-total_Assay-Principle_web-size.png",
                  maxWidth: "max-w-xl"
                },
                {
                  id: "5",
                  title: "Pharmacotrafficking",
                  desc: "监测蛋白质在胞内（如内质网）与细胞膜间的定向运输过程。常用于研究由于折叠错误导致的贩运缺陷，并筛选能够挽救功能的药理学伴侣 (Pharmacological Chaperones)。",
                  image: "/pic/GPCR-Pharmacotrafficking_Assay-Principle.jpg",
                  maxWidth: "max-w-xl"
                },
                {
                  id: "6",
                  title: "配体受体结合",
                  desc: "利用高质量膜制品 (Membrane Preps) 进行放射性配体饱和结合或竞争性结合实验，直接测定药物与受体活性口袋的物理结合常数 (Kd/Ki) 及动力学特性。",
                  image: "/pic/binding.png",
                  maxWidth: "max-w-xl"
                }
              ].map((item) => (
                <div key={item.id} className="p-10 hover:bg-slate-50 transition-colors group">
                  <div className="flex flex-col md:flex-row md:items-start gap-8">
                    <div className="shrink-0">
                      <div className="w-12 h-12 rounded-full bg-teal-50 flex items-center justify-center text-[#4B827E] text-xl font-black group-hover:bg-[#4B827E] group-hover:text-white transition-colors">
                        {item.id}
                      </div>
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-2xl font-bold text-[#1C2C5E] mb-4">{item.title}</h3>
                      <p className="text-slate-600 leading-relaxed text-lg mb-6">
                        {item.desc}
                      </p>
                      {item.image && (
                        <div className="mt-6">
                          <img
                            src={item.image}
                            alt={item.title}
                            className={`w-full ${item.maxWidth || 'max-w-md'} rounded-xl shadow-lg border border-slate-200`}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Product List Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#1C2C5E] mb-4 text-center">GPCR 产品组合</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            覆盖超过 290+ 靶点，包含稳转细胞株、eXpress® Kit、Bioassay Kit、膜制品及转运/内吞检测方案。
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-100">
            {/* Column 1 */}
            <div className="p-8">
              <ul className="space-y-2">
                {[
                  "ACKR1", "ADCYAP1R1 (PAC1)", "ADGRA1 (GPR123)", "ADGRB1 (BAI1)", "ADGRB2 (BAI2)", "ADGRB3 (BAI3)", "ADGRG3 (GPR97)", "ADORA1 (A1)", "ADORA2A (A2A)", "ADORA2B (A2B)", "ADORA3 (A3)", "ADRA1A", "ADRA1B", "ADRA1D", "ADRA2A", "ADRA2B", "ADRA2C", "ADRB1", "ADRB2", "ADRB3", "AGTR1 (AT1)", "AGTR2 (AT2)", "AM2", "Amylin (CALCR-RAMP3)", "APJ (AGTRL1)", "AVPR1A", "AVPR1B", "AVPR2", "BDKRB1", "BDKRB2", "BRS3 (BB3)", "C3AR1 (C3a)", "C5AR1 (C5a)", "C5L2 (C5a2)", "Calcium", "CALCR (No RAMP)", "CALCRL-RAMP1 (CGRP)", "CALCR-RAMP1 (AMY1)", "CALCR-RAMP2 (AMY2)", "cAMP", "CASR (CaS)", "CCKAR (CCK1)", "CCKBR (CCK2)", "CCR1 (MIP-1a/RANTES-R)", "CCR10 (CCL27R)", "CCR2 (MIP-1R)", "CCR3", "CCR4", "CCR5 (MIP-1/RANTES-R)", "CCR6 (MIP-3a)", "CCR7 (CCL19)", "CCR8", "CCR9", "CCRL1 (ACKR4)", "CCRL2", "CDC25A (MPIP1)", "CHRM1", "CHRM2", "CHRM3", "CHRM4", "CHRM5", "CMKLR1", "CNR1 (CB1)", "CNR2 (CB2)", "CRHR1", "CRHR2", "CRTH2 (PTGDR2, DP2)", "CX3CR1 (Fractalkine)", "CXCR1 (IL8RA)", "CXCR2 (IL8RB)", "CXCR3 (IP-10R)", "CXCR4 (SDF-1R)", "CXCR5 (BLR1)", "CXCR5 (BLR-1)", "CXCR6", "CXCR6 (CCL16R)", "CXCR7 (ACKR3)", "CXCR7 (CMKOR1)", "CysLT1", "CYSLTR2", "DRD1", "DRD2", "DRD3", "DRD4", "DRD5", "EDG1 (S1P1)", "EDG2 (LPA1)", "EDG3 (S1P3)", "EDG4 (LPA2)", "EDG5 (S1P2)", "EDG6 (S1P4)", "EDG7 (LPA3)", "EDG8 (S1P5)", "EDNRA", "EDNRB", "VIPR1", "VIPR2", "XCR1"
                ].map((target, i) => (
                  <li key={i} className="text-sm text-slate-600 hover:text-[#4B827E] transition-colors py-1 border-b border-slate-50 last:border-0">{target}</li>
                ))}
              </ul>
            </div>

            {/* Column 2 */}
            <div className="p-8">
              <ul className="space-y-2">
                {[
                  "F2R (PAR1)", "F2RL1 (PAR2)", "F2RL3 (PAR4)", "FFAR1 (GPR40)", "FFAR2 (GPR43)", "FFAR3 (GPR41)", "FPR1", "FPR2 (FPRL1)", "FPR3", "FSHR", "GABBR1-GABBR2", "GALR1", "GALR2", "GCGR (GCG)", "GHRHR (GHRFR)", "GHSR (Ghrelin)", "GIPR (GIP)", "GLP1R (GLP1)", "GLP2R (GLP2)", "GNRHR", "GPBAR1 (GPCR19)", "GPR1", "GPR101", "GPR103 (QRFPR)", "GPR107", "GPR109A", "GPR109B", "GPR119", "GPR12", "GPR120", "GPR120 (L)", "GPR120 (S)", "GPR132", "GPR135", "GPR137 (TM7SF1)", "GPR139", "GPR141", "GPR142", "GPR143", "GPR146", "GPR148", "GPR149", "GPR15", "GPR150", "GPR151", "GPR152", "GPR157", "GPR161", "GPR162", "GPR17", "GPR171", "GPR173", "GPR176", "GPR18", "GPR182", "GPR183 (EBI2)", "GPR20", "GPR22", "GPR23", "GPR25", "GPR26", "GPR27", "GPR3", "GPR30", "GPR31", "GPR32", "GPR34", "GPR35", "GPR37 (EDNRBL)", "GPR37L1", "GPR39", "GPR4", "GPR45", "GPR50", "GPR52", "GPR55", "GPR6", "GPR61", "GPR65", "GPR68 (OGR1)", "GPR75", "GPR78", "GPR79", "GPR81", "GPR83", "GPR84", "GPR85", "GPR88", "GPR91 (SUCNR1)", "GPR92 (LPA5)", "GRM1 (mGlu1)", "GRM2 (mGlu2)", "GRM3 (mGlu3)", "GRM4 (mGlu4)", "GRM5 (mGlu5)", "GRM6 (mGlu6)", "GRPR (BB2)", "UTR2"
                ].map((target, i) => (
                  <li key={i} className="text-sm text-slate-600 hover:text-[#4B827E] transition-colors py-1 border-b border-slate-50 last:border-0">{target}</li>
                ))}
              </ul>
            </div>

            {/* Column 3 */}
            <div className="p-8">
              <ul className="space-y-2">
                {[
                  "HCRTR1 (OX1)", "HCRTR2 (OX2)", "HRH1 (H1)", "HRH2 (H2)", "HRH3 (H3)", "HRH4 (H4)", "HTR1A (5-HT1A)", "HTR1B (5-HT1B)", "HTR1E (5-HT1E)", "HTR1F (5-HT1F)", "HTR2A (5-HT2A)", "HTR2B (5-HT2B)", "HTR2C (5-HT2C)", "HTR4 (5-HT4)", "HTR5A (5-HT5A)", "HTR6 (5-HT6)", "HTR7 (5-HT7)", "KISS1R", "LGR4", "LGR5", "LGR6", "LHCGR", "LTB4R", "MC1R", "MC2R (ACTH)", "MC3R", "MC4R", "MC5R", "MCHR1", "MCHR2", "MLNR (Motilin)", "MRGPRD", "MRGPRE", "MRGPRF", "MRGPRX1", "MRGPRX2", "MRGPRX4", "MTNR1A", "MTNR1B", "NMBR", "NMU1R", "NMU2R", "NPBWR1 (GPR7)", "NPBWR2 (GPR8)", "NPFFR1", "NPSR1b (NPSR1)", "NPY1R", "NPY2R (PYY)", "NPY4R (PPYR1)", "NTSR1", "OPN5 (Opsin)", "OPRD1 (Opioid δ)", "OPRK1 (Opioid κ)", "OPRL1 (Opioid)", "OPRM1 (Opioid μ)", "OXER1", "OXGR1 (GPR80, GPR99)", "OXTR", "P2RY1", "P2RY11", "P2RY12", "P2RY2", "P2RY4", "P2RY6", "P2RY8", "PRLHR", "PROKR1", "PROKR2", "PTAFR", "PTGDR", "PTGER1", "PTGER2", "PTGER3 (PGE2-R)", "PTGER4", "PTGFR", "PTGIR", "PTHR1", "PTHR2", "RHO(P23H)", "RXFP1 (LGR7)", "RXFP2 (LGR8)", "RXFP3 (SALPR)", "RXFP4", "SCTR", "SMO", "SSTR1", "SSTR2", "SSTR3", "SSTR4", "SSTR5", "TAAR1", "TAAR5", "TACR1", "TACR2", "TACR3", "TBXA2R", "TRHR", "TSHR(L)"
                ].map((target, i) => (
                  <li key={i} className="text-sm text-slate-600 hover:text-[#4B827E] transition-colors py-1 border-b border-slate-50 last:border-0">{target}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col md:flex-row justify-between items-center bg-slate-50 p-8 rounded-2xl border border-slate-200 gap-6">
          <div className="text-sm text-slate-600 leading-relaxed max-w-2xl">
            <p className="mb-2"><strong>技术说明：</strong></p>
            <ul className="list-disc list-inside space-y-1">
              <li>以上靶点均提供多种检测形式，包括稳转细胞株、eXpress® Kit 等。</li>
              <li>支持针对 Gs, Gi, Gq 通路的功能性检测以及 β-arrestin 招募检测。</li>
              <li>提供配体结合检测（Membrane Preps）及受体内吞/转运检测。</li>
            </ul>
          </div>
          <button className="whitespace-nowrap bg-[#1C2C5E] text-white px-8 py-4 rounded-xl font-bold text-base hover:bg-[#2a3d7a] transition-all shadow-xl hover:-translate-y-1">
            索取 2026 版完整 PDF 目录
          </button>
        </div>
      </section>
    </div>
  );
};

export default GpcrDetail;
