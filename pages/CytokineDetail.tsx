
import React from 'react';

const CytokineDetail: React.FC = () => {
  const intro = [
    "细胞因子是一类在调控免疫系统与炎症过程中发挥关键作用的蛋白质。细胞因子调控失衡与多种疾病相关，包括自身免疫性疾病、癌症以及感染性疾病。细胞因子受体在介导免疫应答的细胞内外信号通信中发挥核心作用。",
    "该受体家族包括 I 型与 II 型细胞因子样白介素受体、GM-CSF 受体、干扰素受体、趋化因子受体、TNFα 受体、TGF-β 受体以及免疫球蛋白超家族受体等多种类型。所有细胞因子受体均与一类或多类 JAK 激酶相关联，通过受体配体结合将信号传递至 STAT 家族转录因子的酪氨酸磷酸化，从而调控下游信号复合体。",
    "细胞因子在“细胞因子风暴”（cytokine storm）中发挥关键作用。细胞因子风暴是一种过度的促炎免疫反应，可导致高炎症状态（hyperinflammation），涉及多种细胞因子，例如白介素（IL）、GM-CSF、趋化因子、TNFα 等。",
    "针对细胞因子或其受体的治疗药物可调控免疫反应，并潜在用于治疗相关疾病。然而，这类药物的开发复杂且耗时，需要深入理解免疫系统及细胞因子在疾病发生机制中的作用。为加速发现进程，已有功能性检测体系可用于相关研究。",
    "Eurofins DiscoverX 提供全面的 PathHunter® 细胞水平功能检测组合，这些检测基于作用机制（MOA）导向设计，用于研究并靶向细胞因子受体，覆盖超过 85% 的人源白介素（IL-1 至 IL-37）及其受体体系。",
    "这些检测体系具有高特异性与高重复性，流程简便，信噪比高，并对检测基质具有良好耐受性。基于上述特点，细胞因子受体检测已广泛应用于功能筛选、功能表征、QC 批放行检测以及中和抗体研究等多个领域。"
  ];

  const highlights = [
    "生物学相关性强 —— MOA 导向的功能性检测，用于监测细胞因子受体激活与受体二聚化过程",
    "经验证的 Bioassay —— 采用已获批准的治疗药物（如 Actemra®（托珠单抗）、Kineret®（阿那白滞素）、Leukine®（沙格司亭）、Humira®（阿达木单抗））进行验证，加速细胞因子治疗药物的研发与批放行",
    "易用且可扩展 —— 均相、流程简便且快速的检测体系，兼容高通量格式以提高实验效率"
  ];

  const cytokineData = [
    { target: 'ACVR1/ACVR2', moa: '二聚化', set: true, express: false, bioassay: false },
    { target: 'ACVR1B/BMPR2', moa: '二聚化', set: true, express: true, bioassay: false },
    { target: 'ACVR1C/ACVR2', moa: '二聚化', set: true, express: true, bioassay: false },
    { target: 'ACVR1C/ACVR2B', moa: '二聚化', set: true, express: true, bioassay: false },
    { target: 'ACVRL1/ACVR2', moa: '二聚化', set: true, express: true, bioassay: false },
    { target: 'ACVRL1/ACVR2B', moa: '二聚化', set: true, express: true, bioassay: false },
    { target: 'ACVRL1/BMPR2', moa: '二聚化', set: true, express: true, bioassay: false },
    { target: 'BMPR1A/ACVR2', moa: '二聚化', set: false, express: true, bioassay: false },
    { target: 'BMPR1A/ACVR2A', moa: '二聚化', set: true, express: false, bioassay: false },
    { target: 'BMPR1A/ACVR2B', moa: '二聚化', set: true, express: false, bioassay: false },
    { target: 'BMPR1A/BMPR2', moa: '二聚化', set: true, express: true, bioassay: false },
    { target: 'BMPR1B/ACVR2A', moa: '二聚化', set: true, express: true, bioassay: false },
    { target: 'BMPR1B/ACVR2B', moa: '二聚化', set: true, express: false, bioassay: false },
    { target: 'BMPR1B/BMPR2', moa: '二聚化', set: true, express: false, bioassay: false },
    { target: 'c-MET/c-MET', moa: '二聚化', set: true, express: false, bioassay: false },
    { target: 'CSF1R/CSF1R', moa: '二聚化', set: true, express: true, bioassay: false },
    { target: 'CSF2RB/CSF2R', moa: '二聚化', set: true, express: false, bioassay: true },
    { target: 'CSF2RB/CSF2RA', moa: '二聚化', set: true, express: true, bioassay: false },
    { target: 'EGFR/EGFR', moa: '二聚化', set: true, express: true, bioassay: false },
    { target: 'EGFR/ErbB2', moa: '二聚化', set: true, express: true, bioassay: false },
    { target: 'EGFR/ErbB3', moa: '二聚化', set: true, express: false, bioassay: false },
    { target: 'EpoR/EpoR', moa: '二聚化', set: true, express: true, bioassay: true },
    { target: 'ErbB2/ErbB3', moa: '二聚化', set: true, express: false, bioassay: false },
    { target: 'ErbB2/ErbB4', moa: '二聚化', set: true, express: true, bioassay: false },
    { target: 'ErbB4/ErbB4', moa: '二聚化', set: true, express: true, bioassay: false },
    { target: 'FGFR3(G380R)/FGFR3(G380R)', moa: '二聚化', set: true, express: false, bioassay: false },
    { target: 'FGFR3/FGFR3', moa: '二聚化', set: true, express: false, bioassay: false },
    { target: 'IFNAR1/IFNAR2', moa: '二聚化', set: true, express: false, bioassay: false },
    { target: 'IFNGR1/IFNGR2', moa: '二聚化', set: true, express: true, bioassay: false },
    { target: 'IFNRL1/IL10RB', moa: '二聚化', set: true, express: true, bioassay: false },
    { target: 'IFNy', moa: '信号通路报告基因', set: true, express: false, bioassay: false },
    { target: 'IL10RA/IL10RB', moa: '二聚化', set: true, express: true, bioassay: true },
    { target: 'IL11R/IL6ST', moa: '二聚化', set: true, express: false, bioassay: false },
    { target: 'IL12RB1/IL12RB2', moa: '二聚化', set: true, express: true, bioassay: false },
    { target: 'IL15 (IL2Rβ/IL2Rγ)', moa: '二聚化', set: true, express: true, bioassay: true },
    { target: 'IL17RA/IL17RB', moa: '二聚化', set: true, express: false, bioassay: false },
    { target: 'IL17RA/IL17RC', moa: '二聚化', set: true, express: true, bioassay: true },
    { target: 'IL17RA/IL17RC (U2OS)', moa: '二聚化', set: true, express: true, bioassay: false },
    { target: 'IL17RD/TNFR2', moa: '二聚化', set: true, express: true, bioassay: false },
    { target: 'IL18', moa: '信号通路报告基因', set: true, express: false, bioassay: false },
    { target: 'IL18R1/IL18RAP', moa: '二聚化', set: true, express: true, bioassay: false },
    { target: 'IL1R/IL1R', moa: '二聚化', set: true, express: false, bioassay: true },
    { target: 'IL1R1/IL1RAP', moa: '二聚化', set: true, express: true, bioassay: false },
    { target: 'IL1R1/ILRAP', moa: '二聚化', set: true, express: false, bioassay: false },
    { target: 'IL1RL1/IL1RAP', moa: '二聚化', set: true, express: true, bioassay: true },
    { target: 'IL2', moa: '信号通路报告基因', set: true, express: false, bioassay: false },
    { target: 'IL2/IL2', moa: '二聚化', set: true, express: false, bioassay: true },
    { target: 'IL20R1/IL20R2', moa: '二聚化', set: true, express: false, bioassay: false },
    { target: 'IL20RA/IL10RB', moa: '二聚化', set: true, express: true, bioassay: false },
    { target: 'IL20RA/IL20RB', moa: '二聚化', set: true, express: true, bioassay: false },
    { target: 'IL21R/IL2RG', moa: '二聚化', set: true, express: true, bioassay: false },
    { target: 'IL22RA/IL10RB1', moa: '二聚化', set: true, express: false, bioassay: false },
    { target: 'IL22RA1/IL10RB', moa: '二聚化', set: true, express: true, bioassay: false },
    { target: 'IL23R/IL12RB1', moa: '二聚化', set: true, express: true, bioassay: false },
    { target: 'IL27RA/IL6ST', moa: '二聚化', set: true, express: false, bioassay: false },
    { target: 'IL2RB/IL2RG', moa: '二聚化', set: true, express: true, bioassay: false },
    { target: 'IL2RB/IL2RG/IL2RA', moa: '二聚化', set: true, express: true, bioassay: true },
    { target: 'IL31RA/OSMRb', moa: '二聚化', set: true, express: false, bioassay: true },
    { target: 'IL3RA/CD131', moa: '二聚化', set: true, express: false, bioassay: false },
    { target: 'IL4R/IL13RA1', moa: '二聚化', set: true, express: true, bioassay: false },
    { target: 'IL4R/IL2RG', moa: '二聚化', set: true, express: true, bioassay: false },
    { target: 'IL5RA/CSF2RB', moa: '二聚化', set: true, express: true, bioassay: false },
    { target: 'IL6R/IL6ST', moa: '二聚化', set: true, express: false, bioassay: true },
    { target: 'IL6RA/IL6ST', moa: '二聚化', set: true, express: true, bioassay: true },
    { target: 'IL7', moa: '信号通路报告基因', set: true, express: false, bioassay: false },
    { target: 'IL7R/CRLF2', moa: '二聚化', set: true, express: true, bioassay: false },
    { target: 'IL7R/IL2RG', moa: '二聚化', set: true, express: true, bioassay: true },
    { target: 'IL9R/IL2RG', moa: '二聚化', set: true, express: false, bioassay: false },
    { target: 'LEPR/LEPR', moa: '二聚化', set: true, express: false, bioassay: false },
    { target: 'OSMR/IL6ST', moa: '二聚化', set: true, express: true, bioassay: false },
    { target: 'OSMRb/IL31R', moa: '二聚化', set: true, express: false, bioassay: false },
    { target: 'OSMRb/IL31RA', moa: '二聚化', set: true, express: true, bioassay: false },
    { target: 'TGFBR1/ACVR2', moa: '二聚化', set: true, express: true, bioassay: false },
    { target: 'TGFBR1/ACVR2B', moa: '二聚化', set: true, express: true, bioassay: false },
    { target: 'TGFBR1/TGFBR2', moa: '二聚化', set: true, express: true, bioassay: false },
    { target: 'TGFBR1/TGFBR2/ENG', moa: '二聚化', set: true, express: false, bioassay: false },
    { target: 'TGFBR1A/ACVR2A', moa: '二聚化', set: true, express: false, bioassay: false },
    { target: 'TPOR/TPOR', moa: '二聚化', set: true, express: false, bioassay: false },
    { target: 'TSLP', moa: '信号通路报告基因', set: true, express: false, bioassay: false },
  ];

  const chemokineData = [
    { target: 'CCR1', moa: 'cAMP & 钙离子', set: true, express: false, bioassay: false, frozen: true, membrane: false },
    { target: 'CCR1', moa: '受体内化', set: true, express: true, bioassay: false, frozen: false, membrane: false },
    { target: 'CCR1', moa: 'β-Arrestin', set: true, express: false, bioassay: false, frozen: false, membrane: false },
    { target: 'CCR1', moa: '结合/GTPγS 功能', set: false, express: false, bioassay: false, frozen: false, membrane: true },
    { target: 'CCR10', moa: 'cAMP & 钙离子', set: true, express: false, bioassay: false, frozen: true, membrane: false },
    { target: 'CCR10', moa: '受体内化', set: true, express: true, bioassay: false, frozen: true, membrane: false },
    { target: 'CCR10', moa: 'β-Arrestin', set: true, express: true, bioassay: false, frozen: true, membrane: false },
    { target: 'CCR2', moa: 'β-Arrestin', set: true, express: true, bioassay: true, frozen: false, membrane: false },
    { target: 'CCR2', moa: 'cAMP & 钙离子', set: true, express: false, bioassay: false, frozen: true, membrane: false },
    { target: 'CCR2', moa: '受体内化', set: true, express: true, bioassay: false, frozen: false, membrane: false },
    { target: 'CCR2', moa: '结合/GTPγS 功能', set: false, express: false, bioassay: false, frozen: false, membrane: true },
    { target: 'CCR3', moa: 'cAMP & 钙离子', set: true, express: false, bioassay: false, frozen: true, membrane: false },
    { target: 'CCR3', moa: 'β-Arrestin', set: true, express: true, bioassay: false, frozen: false, membrane: false },
    { target: 'CCR4', moa: 'cAMP & 钙离子', set: true, express: false, bioassay: false, frozen: true, membrane: false },
    { target: 'CCR4', moa: '受体内化', set: true, express: true, bioassay: false, frozen: false, membrane: false },
    { target: 'CCR4', moa: 'β-Arrestin', set: true, express: true, bioassay: false, frozen: false, membrane: false },
    { target: 'CCR5', moa: 'cAMP & 钙离子', set: true, express: true, bioassay: false, frozen: true, membrane: false },
    { target: 'CCR5', moa: '受体内化', set: true, express: true, bioassay: false, frozen: false, membrane: false },
    { target: 'CCR5', moa: 'β-Arrestin', set: true, express: true, bioassay: false, frozen: false, membrane: false },
    { target: 'CCR5', moa: '结合/GTPγS 功能', set: false, express: false, bioassay: false, frozen: false, membrane: true },
    { target: 'CCR6', moa: 'cAMP & 钙离子', set: true, express: true, bioassay: false, frozen: true, membrane: false },
    { target: 'CCR6', moa: '受体内化', set: true, express: true, bioassay: false, frozen: false, membrane: false },
    { target: 'CCR6', moa: 'β-Arrestin', set: true, express: true, bioassay: false, frozen: false, membrane: false },
    { target: 'CCR6', moa: '结合/GTPγS 功能', set: false, express: false, bioassay: false, frozen: false, membrane: true },
    { target: 'CCR7', moa: 'cAMP & 钙离子', set: true, express: true, bioassay: false, frozen: true, membrane: true },
    { target: 'CCR7', moa: '受体内化', set: true, express: false, bioassay: false, frozen: false, membrane: false },
    { target: 'CCR7', moa: 'β-Arrestin', set: true, express: true, bioassay: false, frozen: false, membrane: false },
    { target: 'CCR8', moa: 'cAMP & 钙离子', set: true, express: false, bioassay: false, frozen: true, membrane: false },
    { target: 'CCR8', moa: 'β-Arrestin', set: true, express: true, bioassay: false, frozen: false, membrane: false },
    { target: 'CCR8', moa: '结合/GTPγS 功能', set: false, express: false, bioassay: false, frozen: false, membrane: true },
    { target: 'CCR9', moa: 'cAMP & 钙离子', set: true, express: false, bioassay: false, frozen: true, membrane: false },
    { target: 'CCR9', moa: 'β-Arrestin', set: true, express: true, bioassay: false, frozen: false, membrane: false },
    { target: 'CCR9', moa: '结合/GTPγS 功能', set: false, express: false, bioassay: false, frozen: false, membrane: true },
    { target: 'CCRL1', moa: 'β-Arrestin', set: true, express: false, bioassay: false, frozen: false, membrane: false },
    { target: 'CCRL2', moa: 'β-Arrestin', set: true, express: true, bioassay: false, frozen: false, membrane: false },
    { target: 'CX3CR1', moa: 'cAMP & 钙离子', set: true, express: true, bioassay: false, frozen: true, membrane: false },
    { target: 'CX3CR1', moa: 'β-Arrestin', set: true, express: true, bioassay: false, frozen: false, membrane: false },
    { target: 'CX3CR1', moa: '结合/GTPγS 功能', set: false, express: false, bioassay: false, frozen: false, membrane: true },
    { target: 'CXCR1', moa: 'cAMP & 钙离子', set: true, express: false, bioassay: false, frozen: true, membrane: false },
    { target: 'CXCR1', moa: '结合/GTPγS 功能', set: false, express: false, bioassay: false, frozen: false, membrane: true },
    { target: 'CXCR1 (IL8RA)', moa: 'cAMP & 钙离子', set: true, express: true, bioassay: false, frozen: true, membrane: false },
    { target: 'CXCR1 (IL8RA)', moa: '受体内化', set: true, express: false, bioassay: false, frozen: false, membrane: false },
    { target: 'CXCR1 (IL8RA)', moa: 'β-Arrestin', set: true, express: true, bioassay: false, frozen: false, membrane: false },
    { target: 'CXCR2 (IL8RB)', moa: 'cAMP & 钙离子', set: true, express: true, bioassay: false, frozen: true, membrane: true },
    { target: 'CXCR2 (IL8RB)', moa: '受体内化', set: true, express: true, bioassay: false, frozen: false, membrane: false },
    { target: 'CXCR2 (IL8RB)', moa: 'β-Arrestin', set: true, express: true, bioassay: false, frozen: false, membrane: false },
    { target: 'CXCR2 (IL8RB)', moa: '结合/GTPγS 功能', set: false, express: false, bioassay: false, frozen: false, membrane: true },
    { target: 'CXCR3', moa: 'cAMP & 钙离子', set: true, express: true, bioassay: false, frozen: true, membrane: true },
    { target: 'CXCR3', moa: '受体内化', set: true, express: true, bioassay: false, frozen: false, membrane: false },
    { target: 'CXCR3', moa: 'β-Arrestin', set: true, express: true, bioassay: false, frozen: false, membrane: false },
    { target: 'CXCR3', moa: '结合/GTPγS 功能', set: false, express: false, bioassay: false, frozen: false, membrane: true },
    { target: 'CXCR4', moa: 'cAMP & 钙离子', set: true, express: true, bioassay: false, frozen: true, membrane: true },
    { target: 'CXCR4', moa: '受体内化', set: true, express: false, bioassay: false, frozen: false, membrane: false },
    { target: 'CXCR4', moa: 'β-Arrestin', set: true, express: false, bioassay: false, frozen: false, membrane: false },
    { target: 'CXCR4', moa: '结合/GTPγS 功能', set: false, express: false, bioassay: false, frozen: false, membrane: true },
    { target: 'CXCR5 (BLR1)', moa: 'β-Arrestin', set: true, express: true, bioassay: true, frozen: false, membrane: true },
    { target: 'CXCR5 (BLR1)', moa: 'cAMP & 钙离子', set: true, express: true, bioassay: false, frozen: true, membrane: true },
    { target: 'CXCR6', moa: 'cAMP & 钙离子', set: true, express: false, bioassay: false, frozen: true, membrane: true },
    { target: 'CXCR6', moa: '受体内化', set: true, express: true, bioassay: false, frozen: false, membrane: false },
    { target: 'CXCR6', moa: 'β-Arrestin', set: true, express: true, bioassay: false, frozen: false, membrane: false },
    { target: 'CXCR6', moa: '结合/GTPγS 功能', set: false, express: false, bioassay: false, frozen: false, membrane: true },
    { target: 'CXCR7 (CMKOR1)', moa: '受体内化', set: true, express: true, bioassay: false, frozen: false, membrane: false },
    { target: 'CXCR7 (CMKOR1)', moa: 'β-Arrestin', set: true, express: true, bioassay: false, frozen: false, membrane: false },
    { target: 'CXCR7 (CMKOR1)', moa: '结合/GTPγS 功能', set: false, express: false, bioassay: false, frozen: false, membrane: true },
    { target: 'cyno CXCR1', moa: 'β-Arrestin', set: true, express: true, bioassay: false, frozen: false, membrane: false },
    { target: 'cyno CXCR2', moa: 'β-Arrestin', set: true, express: true, bioassay: false, frozen: false, membrane: false },
    { target: 'mCCR1', moa: 'β-Arrestin', set: true, express: false, bioassay: false, frozen: false, membrane: false },
    { target: 'mCCR2', moa: 'β-Arrestin', set: true, express: true, bioassay: false, frozen: false, membrane: false },
    { target: 'mCCR3', moa: 'β-Arrestin', set: true, express: true, bioassay: false, frozen: false, membrane: false },
    { target: 'mCCR4', moa: 'β-Arrestin', set: true, express: true, bioassay: false, frozen: false, membrane: false },
    { target: 'mCCR5', moa: 'β-Arrestin', set: true, express: true, bioassay: false, frozen: false, membrane: false },
    { target: 'mCCR6', moa: 'β-Arrestin', set: true, express: true, bioassay: false, frozen: false, membrane: false },
    { target: 'mCCR7', moa: 'β-Arrestin', set: true, express: true, bioassay: false, frozen: false, membrane: false },
    { target: 'mCCR8', moa: 'β-Arrestin', set: true, express: false, bioassay: false, frozen: false, membrane: false },
    { target: 'mCCR9', moa: 'β-Arrestin', set: true, express: true, bioassay: false, frozen: false, membrane: false },
    { target: 'mCX3CR1', moa: 'β-Arrestin', set: true, express: true, bioassay: false, frozen: false, membrane: false },
    { target: 'mCXCR2 (IL8RB)', moa: 'β-Arrestin', set: true, express: true, bioassay: false, frozen: false, membrane: false },
    { target: 'mCXCR3', moa: 'β-Arrestin', set: true, express: true, bioassay: false, frozen: false, membrane: false },
    { target: 'mCXCR4', moa: 'β-Arrestin', set: true, express: true, bioassay: false, frozen: false, membrane: false },
    { target: 'mCXCR5 (BLR1)', moa: 'β-Arrestin', set: true, express: true, bioassay: false, frozen: false, membrane: false },
    { target: 'mCXCR6', moa: 'β-Arrestin', set: true, express: true, bioassay: false, frozen: false, membrane: false },
    { target: 'mCXCR7 (CMKOR1)', moa: 'β-Arrestin', set: true, express: true, bioassay: false, frozen: false, membrane: false },
  ];

  return (
    <div className="bg-white">
      {/* 1. Introduction Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-[#1C2C5E] mb-2">细胞因子受体 Cytokine Receptors Assay</h1>
          <h2 className="text-xl font-bold text-[#4B827E] mb-6">覆盖细胞因子受体的全面细胞水平功能检测组合</h2>
          <div className="h-1 w-24 bg-[#4B827E] mx-auto mb-10"></div>
          <div className="text-left space-y-6">
            {intro.map((paragraph, idx) => (
              <p key={idx} className="text-slate-600 leading-relaxed text-lg">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Product Highlights */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-teal-50/30 rounded-[3rem] mb-16">
        <h3 className="text-2xl font-bold text-[#1C2C5E] mb-8 text-center">产品亮点</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {highlights.map((highlight, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-teal-100 flex gap-4 items-start">
              <div className="shrink-0 w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center text-white font-bold mt-1">
                ✓
              </div>
              <p className="text-slate-700 font-medium leading-relaxed text-sm">{highlight}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. MOA Section - Updated to 3 Specific Modules */}
      <section className="bg-slate-50 py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1C2C5E] mb-10 text-center">作用机制 (MoA)</h2>
          
          <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="divide-y divide-slate-100">
              {[
                {
                  title: "1. 受体二聚化 (Receptor Dimerization)",
                  desc: "通过酶片段互补 (EFC) 技术直接监测配体诱导的受体亚基（如同源二聚体 IL-1R 或异源二聚体 IL-2R/IL-12R）的物理组装。这是评估中和抗体阻断效力的最直接手段。",
                  image: "/pic/Dimerization.jpg",
                  maxWidth: "max-w-xl"
                },
                {
                  title: "2. 信号通路报告基因 (Pathway Reporter)",
                  desc: "定量分析受体激活后触发的下游转录因子活动。主要包括 STAT3, STAT5, NF-κB 等信号通路的激活监测。",
                  image: "/pic/Signaling-Reporter-Assays-principles-1-1024x342-1.png",
                  maxWidth: "max-w-xl"
                },
                {
                  title: "3. 信号通路蛋白降解 (Pathway Degradation)",
                  desc: "针对特定的信号抑制蛋白进行动态监测。例如在 IL-1 或 TNFα 通路激活过程中，通过实时追踪 IkB 蛋白的降解动力学，评估药物对信号传导的抑制效果。",
                  image: "/pic/Cytokine-Receptor-principles-degradation.png",
                  maxWidth: "max-w-xl"
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

      {/* 4. Detailed Product Table */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pb-32">
        <h2 className="text-3xl font-bold text-[#1C2C5E] mb-12 text-center md:text-left">产品列表</h2>
        
        {/* Table 1: Cytokine Receptors */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-[#4B827E] mb-6 border-l-4 border-[#4B827E] pl-4">细胞因子受体产品列表</h3>
          <div className="overflow-hidden shadow-2xl rounded-2xl border border-slate-200">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-slate-200">
                <thead className="bg-[#4B827E] text-white">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider border-r border-white/20">靶点</th>
                    <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider border-r border-white/20">检测机制</th>
                    <th className="px-6 py-4 text-center text-sm font-bold uppercase tracking-wider border-r border-white/20">稳转细胞系套装</th>
                    <th className="px-6 py-4 text-center text-sm font-bold uppercase tracking-wider border-r border-white/20">eXpress™ Kit</th>
                    <th className="px-6 py-4 text-center text-sm font-bold uppercase tracking-wider">Bioassay Kit</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-slate-200">
                  {cytokineData.map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50 hover:bg-teal-50/40 transition-colors'}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-[#1C2C5E] border-r border-slate-100">{row.target}</td>
                      <td className="px-6 py-4 text-sm text-slate-600 border-r border-slate-100">{row.moa}</td>
                      <td className="px-6 py-4 text-center border-r border-slate-100">{row.set && <span className="text-teal-600 font-bold">✓</span>}</td>
                      <td className="px-6 py-4 text-center border-r border-slate-100">{row.express && <span className="text-teal-600 font-bold">✓</span>}</td>
                      <td className="px-6 py-4 text-center">{row.bioassay && <span className="text-teal-600 font-bold">✓</span>}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Table 2: Chemokine Receptors */}
        <div>
          <h3 className="text-2xl font-bold text-[#4B827E] mb-6 border-l-4 border-[#4B827E] pl-4">细胞趋化因子（受体属于 GPCR）产品列表</h3>
          <div className="overflow-hidden shadow-2xl rounded-2xl border border-slate-200">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-slate-200">
                <thead className="bg-[#4B827E] text-white">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider border-r border-white/20">靶点</th>
                    <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider border-r border-white/20">检测机制</th>
                    <th className="px-6 py-4 text-center text-sm font-bold uppercase tracking-wider border-r border-white/20 text-xs">稳转细胞系套装</th>
                    <th className="px-6 py-4 text-center text-sm font-bold uppercase tracking-wider border-r border-white/20 text-xs">eXpress™ Kit</th>
                    <th className="px-6 py-4 text-center text-sm font-bold uppercase tracking-wider border-r border-white/20 text-xs">Bioassay Kit</th>
                    <th className="px-6 py-4 text-center text-sm font-bold uppercase tracking-wider border-r border-white/20 text-xs">一次性冻存细胞</th>
                    <th className="px-6 py-4 text-center text-sm font-bold uppercase tracking-wider text-xs">膜制备物</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-slate-200">
                  {chemokineData.map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50 hover:bg-teal-50/40 transition-colors'}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-[#1C2C5E] border-r border-slate-100">{row.target}</td>
                      <td className="px-6 py-4 text-sm text-slate-600 border-r border-slate-100">{row.moa}</td>
                      <td className="px-6 py-4 text-center border-r border-slate-100">{row.set && <span className="text-teal-600 font-bold">✓</span>}</td>
                      <td className="px-6 py-4 text-center border-r border-slate-100">{row.express && <span className="text-teal-600 font-bold">✓</span>}</td>
                      <td className="px-6 py-4 text-center border-r border-slate-100">{row.bioassay && <span className="text-teal-600 font-bold">✓</span>}</td>
                      <td className="px-6 py-4 text-center border-r border-slate-100">{row.frozen && <span className="text-teal-600 font-bold">✓</span>}</td>
                      <td className="px-6 py-4 text-center">{row.membrane && <span className="text-teal-600 font-bold">✓</span>}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate-500 text-sm italic bg-slate-50 py-4 rounded-lg border border-dashed border-slate-300">
            * 数据源自 Eurofins DiscoverX 官方检测平台，如需特定批次数据或开发服务，请联系我们的技术专家。
          </p>
        </div>
      </section>
    </div>
  );
};

export default CytokineDetail;
