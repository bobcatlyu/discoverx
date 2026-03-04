
import React from 'react';
import TargetDetailTemplate, { MoaItem, ProductRow } from '../components/TargetDetailTemplate';

const CHECKPOINT_HEADERS = ['细胞株', 'eXpress® kit', 'Bioassay kit'];

const CheckpointDetail: React.FC = () => {
  const intro = [
    "免疫应答的调控依赖于共刺激受体与抑制性检查点受体之间的平衡，而许多癌症可利用这一机制逃避免疫攻击。因此，阻断抑制性受体或激活免疫刺激性检查点受体（例如 PD-1 受体）的治疗药物已被证明能够恢复抗肿瘤免疫应答，并成为重要的治疗策略。",
    "Eurofins DiscoverX 提供广泛且多样化的检测体系，用于免疫治疗药物的表征、筛选以及效价 QC 批放行检测，针对抑制性与共刺激性检查点受体均提供相应解决方案。PathHunter® 功能性、作用机制（MOA）导向的细胞水平检测可用于分析检查点受体的信号传导、二聚化、内吞以及聚集/交联等生物学事件。这类检测流程简便快速，在多数目标检测中可于数小时内获得高度灵敏的检测结果，无需使用原代细胞或复杂实验流程。"
  ];
  const highlights = [
    "生物学相关性强——MOA 导向的功能性检测，用于监测检查点信号并评估小分子或生物药治疗的作用",
    "产品组合全面——提供大量现货检测体系，加速检测开发与实施",
    "检测稳健可靠——高度可重复的检测体系，适用于免疫治疗药物研发中的效价与批放行应用",
    "流程简便、结果快速——均相检测流程易于操作，兼容高通量格式并可在多实验室环境中提高效率"
  ];
  const moas: MoaItem[] = [
    {
      title: "信号转导 (Signaling)",
      description: "利用 EFC 技术监测受体激活后招募蛋白（如 SHP-1/2）的过程。这种方法能直接反映抗体药物对受体功能的调节作用。",
      imageUrl: "/pic/Checkpoint-Receptor-Assays-principles-1.jpg",
      maxWidth: "max-w-xl"
    },
    {
      title: "配体展示 (Ligand-Presenting)",
      description: "经过工程化改造的配体细胞株，稳定表达特定的免疫检查点配体（如 PD-L1, CD80），用于模拟抗原提呈细胞 (APC) 与 T 细胞的相互作用，是共刺激/共抑制实验的标准工具。"
    },
    {
      title: "受体内吞 (Internalization)",
      description: "监测受体从细胞表面向胞内移动的过程。这对于开发靶向受体清除或 ADC 药物至关重要，能有效评估抗体诱导的靶点下调。",
      imageUrl: "/pic/Internalization.jpg",
      maxWidth: "max-w-md"
    },
    {
      title: "受体二聚化 (Dimerization)",
      description: "直接监测受体分子间的相互作用，揭示抗体如何通过诱导或阻断受体复合体的形成来发挥药效。",
      imageUrl: "/pic/Dimerization.jpg",
      maxWidth: "max-w-md"
    },
    {
      title: "FcγR 聚簇 (Clustering)",
      description: "专门针对 Fc 受体设计的检测方案，评估抗体 Fc 段与 FcγR 之间的结合及诱导的受体聚簇效应。",
      imageUrl: "/pic/Agonist IgSF.png",
      imageUrl2: "/pic/Agonist_TNFRSF.png"
    }
  ];
  const data: ProductRow[] = [
    { target: 'BCMA', moa: 'Internalization', statuses: ['✓', '', ''] },
    { target: 'BCMA', moa: 'Reporter', statuses: ['✓', '', ''] },
    { target: 'BTLA', moa: 'Signaling', statuses: ['✓', '', ''] },
    { target: 'CD137', moa: 'Signaling', statuses: ['✓', '', ''] },
    { target: 'CD200', moa: 'Ligand-Presenting', statuses: ['✓', '', ''] },
    { target: 'CD200R', moa: 'Signaling', statuses: ['✓', '', ''] },
    { target: 'CD28', moa: 'Signaling', statuses: ['✓', '', ''] },
    { target: 'CD33', moa: 'Internalization', statuses: ['✓', '', ''] },
    { target: 'CD47', moa: 'Ligand-Presenting', statuses: ['✓', '', ''] },
    { target: 'CD86', moa: 'Ligand-Presenting', statuses: ['✓', '', ''] },
    { target: 'CTLA4', moa: 'Signaling', statuses: ['✓', '', ''] },
    { target: 'HVEM', moa: 'Ligand-Presenting', statuses: ['✓', '', ''] },
    { target: 'ICOS', moa: 'Signaling', statuses: ['✓', '', ''] },
    { target: 'LAG3', moa: 'Cytotoxicity', statuses: ['✓', '', ''] },
    { target: 'LAIR1', moa: 'Signaling', statuses: ['✓', '', ''] },
    { target: 'mCD80', moa: 'Ligand-Presenting', statuses: ['✓', '', ''] },
    { target: 'mCTLA4', moa: 'Signaling', statuses: ['✓', '', ''] },
    { target: 'mPD-1', moa: 'Signaling', statuses: ['✓', '', ''] },
    { target: 'mPD-L1', moa: 'Ligand-Presenting', statuses: ['✓', '', ''] },
    { target: 'NIK', moa: 'Signaling', statuses: ['✓', '', ''] },
    { target: 'OX40', moa: 'Signaling', statuses: ['✓', '', ''] },
    { target: 'PD-1 (SHP-1)', moa: 'Signaling', statuses: ['✓', '', '✓'] },
    { target: 'PD-1 (SHP-2)', moa: 'Signaling', statuses: ['✓', '', ''] },
    { target: 'PD-1', moa: 'Reporter', statuses: ['✓', '', ''] },
    { target: 'PD-1', moa: 'Cytotoxicity', statuses: ['✓', '', ''] },
    { target: 'PD-L1', moa: 'Ligand-Presenting', statuses: ['✓', '', ''] },
    { target: 'PD-L1', moa: 'Cytotoxicity', statuses: ['✓', '', ''] },
    { target: 'PD-L2', moa: 'Ligand-Presenting', statuses: ['✓', '', ''] },
    { target: 'PD-L2', moa: 'Cytotoxicity', statuses: ['✓', '', ''] },
    { target: 'Siglec9', moa: 'Internalization', statuses: ['✓', '', ''] },
    { target: 'SIRPα (SHP-1)', moa: 'Signaling', statuses: ['✓', '', '✓'] },
    { target: 'TIM3', moa: 'Cytotoxicity', statuses: ['✓', '', ''] },
    { target: 'TIM3/TIM3', moa: 'Dimerization', statuses: ['✓', '✓', ''] },
    { target: 'VISTA/VISTA', moa: 'Dimerization', statuses: ['✓', '✓', ''] },
    { target: 'FcγRIa', moa: 'Clustering', statuses: ['✓', '', ''] },
    { target: 'FcγRIIa', moa: 'Clustering', statuses: ['✓', '', ''] },
    { target: 'FcγRIIIa', moa: 'Clustering', statuses: ['✓', '', ''] },
    { target: 'FcγRIIb', moa: 'Clustering', statuses: ['✓', '', ''] },
    { target: 'mFcγRIIb', moa: 'Clustering', statuses: ['✓', '', ''] }
  ];
  return <TargetDetailTemplate title="免疫检查点受体 Checkpoint Receptors Assays" introText={intro} highlights={highlights} introImageUrl="https://picsum.photos/seed/checkpoint_lab/800/600" moaItems={moas} productData={data} productTableTitle="免疫检查点产品列表 (Checkpoint Portfolio)" customTypeHeaders={CHECKPOINT_HEADERS} />;
};

export default CheckpointDetail;
