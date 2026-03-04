
import { BlogPost, Product, Resource } from './types';

export const DEFAULT_PINNED_BLOG_ID = '20260304-eurofins-discoverx-intro';

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '20260304-eurofins-discoverx-intro',
    title: '走进 Eurofins DiscoverX：从靶点到机制验证的一站式能力',
    category: 'Marketing',
    date: '2026-03-04',
    summary: '依托 EFC 专利技术，DiscoverX 提供覆盖多靶点与多 MOA 的 Assay 产品和开发服务，支持从早期研发到上市后放行的全流程决策。',
    imageUrl: '/pic/discoverx.png',
    author: 'DiscoverX Team',
    tags: ['Eurofins', 'DiscoverX', 'Assay', 'MOA', 'Drug Discovery'],
    content: `
      <h2>DiscoverX 是做什么的？</h2>
      <p>DiscoverX 隶属于 Eurofins Discovery，专注于药物研发所需的 Assay 产品与开发服务，并通过 ISO 9001:2015 质量体系认证。</p>
      <p>公司总部位于美国加州 Fremont，在法国 Poitiers 设有生产基地。</p>

      <h3>技术平台与代表产品</h3>
      <p>依托酶片段互补技术（Enzyme Fragment Complementation, EFC），DiscoverX 构建了覆盖不同靶点和不同作用机制（MOA）的产品体系，包括：</p>
      <ul>
        <li>PathHunter&reg;</li>
        <li>HitHunter&reg;</li>
        <li>InCELL</li>
        <li>SPRINTer&trade;</li>
        <li>KILR&reg;</li>
        <li>PrecisION&trade;</li>
        <li>ChemiSCREEN&trade; / ChemiBRIGHT&trade;</li>
      </ul>

      <h3>核心产品与服务</h3>
      <ul>
        <li>商业化稳转细胞株</li>
        <li>即用型 eXpress&reg; Kit</li>
        <li>优化和验证的 Bioassay Kit</li>
        <li>工具箱产品、细胞培养与检测试剂</li>
        <li>重组激酶 / 磷酸酶 / 解旋酶</li>
        <li>膜制品与高纯度天然构象膜蛋白</li>
        <li>细胞株定制开发与 Bioassay 开发验证</li>
      </ul>

      <h3>覆盖靶点群</h3>
      <ul>
        <li>GPCR</li>
        <li>Cytokine Receptors</li>
        <li>Checkpoint Receptors</li>
        <li>RTK / CTK</li>
        <li>NHR</li>
        <li>Ion Channels</li>
        <li>Epigenetic Proteins</li>
      </ul>

      <h3>可支持的作用机制（MOA）</h3>
      <ul>
        <li>受体二聚化（Dimerization）</li>
        <li>受体内吞（Internalization）</li>
        <li>蛋白间相互作用（PPI）</li>
        <li>信号通路（Reporter / Degradation / Translocation）</li>
        <li>细胞毒性效应（Cytotoxicity）</li>
        <li>靶向蛋白降解（Targeted Protein Degradation）</li>
        <li>靶标结合（Target Engagement）</li>
      </ul>

      <h3>能力积累</h3>
      <ul>
        <li>25+ 年行业经验</li>
        <li>300 亿+ 验证数据点</li>
        <li>2000+ 篇同行评审文献引用</li>
        <li>1500+ 稳定细胞株</li>
      </ul>

      <p>无论是大分子还是小分子，无论是早期研发、CMC 开发还是上市后产品放行，DiscoverX 都可为研发决策与风险控制提供可靠依据。</p>
    `
  },
  {
    id: '1',
    title: 'New Launch: High-Affinity GPCR Screening Kit',
    category: 'Product Launch',
    date: '2024-05-15',
    summary: 'Our latest G-protein coupled receptor (GPCR) screening kit offers 10x sensitivity for low-abundance targets.',
    imageUrl: 'https://picsum.photos/seed/bio1/800/600',
    author: 'DiscoverX Product Team',
    tags: ['GPCR', 'Screening', 'Product Launch'],
    content: `
      <h2>产品概述</h2>
      <p>我们很高兴地宣布推出全新的高亲和力 GPCR 筛选试剂盒。该产品专为低丰度靶点设计，灵敏度比传统方法提高了 10 倍。</p>

      <h3>主要特点</h3>
      <ul>
        <li>超高灵敏度：检测限低至 pM 级别</li>
        <li>快速检测：2 小时内完成全流程</li>
        <li>高通量兼容：支持 96/384/1536 孔板格式</li>
        <li>无需洗板：均相检测体系</li>
      </ul>

      <h3>应用领域</h3>
      <p>该试剂盒适用于药物发现、靶点验证、化合物筛选等多个研究领域，特别适合用于：</p>
      <ul>
        <li>孤儿受体的配体筛选</li>
        <li>低表达量 GPCR 的功能研究</li>
        <li>偏向性配体的鉴定</li>
      </ul>

      <h3>技术支持</h3>
      <p>如需了解更多产品信息或技术支持，请联系我们的技术团队。</p>
    `
  },
  {
    id: '2',
    title: 'Upcoming Webinar: Innovations in Ion Channel Mapping',
    category: 'Marketing',
    date: '2024-05-10',
    summary: 'Join Dr. Sarah Chen as she discusses the future of automated patch-clamping technology.',
    imageUrl: 'https://picsum.photos/seed/bio2/800/600',
    author: 'Dr. Sarah Chen',
    tags: ['Webinar', 'Ion Channel', 'Technology'],
    content: `
      <h2>研讨会简介</h2>
      <p>诚邀您参加我们即将举办的在线研讨会，由 Dr. Sarah Chen 主讲，探讨离子通道图谱绘制的最新创新技术。</p>

      <h3>研讨会议程</h3>
      <ul>
        <li><strong>14:00-14:30</strong> 自动化膜片钳技术的发展历程</li>
        <li><strong>14:30-15:00</strong> 高通量离子通道筛选的最佳实践</li>
        <li><strong>15:00-15:30</strong> 案例分享：从靶点到临床候选化合物</li>
        <li><strong>15:30-16:00</strong> Q&A 互动环节</li>
      </ul>

      <h3>主讲人介绍</h3>
      <p>Dr. Sarah Chen 是离子通道研究领域的知名专家，拥有超过 15 年的药物发现经验。她曾参与多个成功的离子通道药物开发项目。</p>

      <h3>报名方式</h3>
      <p>请发送邮件至 webinar@discoverx.com 进行报名，我们将在会议前一天发送参会链接。</p>
    `
  },
  {
    id: '3',
    title: 'Understanding the Kinetic Profiling of Kinase Inhibitors',
    category: 'Technical Article',
    date: '2024-05-02',
    summary: 'A deep dive into why residence time matters more than IC50 in drug discovery cycles.',
    imageUrl: 'https://picsum.photos/seed/bio3/800/600',
    author: 'DiscoverX Scientific Team',
    tags: ['Kinase', 'Drug Discovery', 'Technical'],
    content: `
      <h2>引言</h2>
      <p>在激酶抑制剂的药物发现过程中，传统的 IC50 值虽然重要，但并不能完全反映化合物的体内药效。本文将深入探讨为什么停留时间（residence time）在药物发现中具有更重要的意义。</p>

      <h3>什么是停留时间？</h3>
      <p>停留时间是指药物分子与靶蛋白结合后，在解离之前停留的平均时间。它由解离速率常数（k<sub>off</sub>）决定：</p>
      <p><strong>Residence Time = 1 / k<sub>off</sub></strong></p>

      <h3>为什么停留时间很重要？</h3>
      <ul>
        <li><strong>延长药效持续时间</strong>：较长的停留时间意味着即使血药浓度下降，药物仍能持续抑制靶点</li>
        <li><strong>提高选择性</strong>：慢解离动力学可以增强对目标激酶的选择性</li>
        <li><strong>减少给药频率</strong>：长停留时间的药物可能允许更低的给药频率</li>
      </ul>

      <h3>如何测量停留时间？</h3>
      <p>DiscoverX 提供多种技术平台用于测量激酶抑制剂的动力学参数：</p>
      <ul>
        <li>InCELL Hunter™ 靶点结合分析</li>
        <li>KINOMEscan™ 动力学分析</li>
        <li>表面等离子共振（SPR）技术</li>
      </ul>

      <h3>案例研究</h3>
      <p>多个成功的激酶抑制剂药物（如 Ibrutinib、Osimertinib）都具有较长的停留时间，这与它们的临床疗效密切相关。</p>

      <h3>结论</h3>
      <p>在激酶抑制剂的开发过程中，应该同时考虑热力学参数（IC50、K<sub>d</sub>）和动力学参数（k<sub>on</sub>、k<sub>off</sub>、停留时间），以全面评估化合物的药效潜力。</p>
    `
  }
];

export interface CatalogItem {
  id: string;
  name: string;
  catNo?: string;
  category: string;
  description: string;
  target?: string;
  page: string; 
}

export const GLOBAL_CATALOG: CatalogItem[] = [
  // Commercial Cell Lines (Updated page routes)
  { id: 'cl1', name: 'PathHunter® CHO-K1 GLP1R β-Arrestin Cell Line', catNo: '93-0300C2', category: 'Cell-based Assay', description: 'GPCR cell line for β-Arrestin Recruitment', target: 'GLP1R', page: 'cell-line' },
  { id: 'cl2', name: 'PathHunter® CHO-K1 ADORA2A cAMP Cell Line', catNo: '95-0012C2', category: 'Cell-based Assay', description: 'GPCR cell line for cAMP Accumulation', target: 'ADORA2A', page: 'cell-line' },
  { id: 'cl3', name: 'PD-1 Signaling Cell Line', catNo: '93-1104C19', category: 'Cell-based Assay', description: 'Checkpoint signaling / SHP-1 recruitment', target: 'PD-1', page: 'cell-line' },
  { id: 'cl4', name: 'EGFR SH2 Recruitment Cell Line', catNo: '93-0504C3', category: 'Cell-based Assay', description: 'Kinase SH2 recruitment assay', target: 'EGFR', page: 'cell-line' },
  
  // Reagents & Consumables
  { id: 'rg1', name: 'AssayComplete Cell Culture Kit-101', catNo: '92-3101G', category: 'Reagents', description: 'Optimized cell culture kit for DiscoverX assays', page: 'reagent' },
  { id: 'rg2', name: 'AssayComplete Cell Plating 2 Reagent', catNo: '93-0563R2A', category: 'Reagents', description: 'Standard plating medium for functional assays', page: 'reagent' },
  { id: 'rg3', name: 'AssayComplete Puromycin', catNo: '92-0028', category: 'Antibiotics', description: 'Selection antibiotic for stable cell line maintenance', page: 'reagent' },
  { id: 'rg4', name: 'Recombinant Human CCL2', catNo: '92-1001', category: 'Control Ligand', description: 'High purity recombinant chemokine CCL2', target: 'CCL2', page: 'reagent' },
  { id: 'rg5', name: 'Exendin-4', catNo: '92-1115', category: 'Control Ligand', description: 'Potent GLP1R agonist', target: 'GLP1R', page: 'reagent' },
  
  // Toolbox
  { id: 'tb1', name: 'ProLink Cloning Vector Bundle', catNo: '93-0491', category: 'Toolbox', description: 'Bundle of 4 EFC tagging vectors', page: 'toolbox' },
  { id: 'tb2', name: 'KILR Retroparticles (G418)', catNo: '97-0002', category: 'Toolbox', description: 'Retroparticles for generating KILR cytotoxicity targets', page: 'toolbox' },

  // Targets
  { id: 'tg1', name: 'HTR1A / 5HT1A', category: 'GPCR', description: 'Serotonin receptor Gi coupled', target: '5HT1A', page: 'gpcr' },
  { id: 'tg2', name: 'GLP1R / GLP-1 Receptor', category: 'GPCR', description: 'Glucagon-like peptide receptor Gs coupled', target: 'GLP1R', page: 'gpcr' },
  { id: 'tg3', name: 'PD-1 (Programmed Cell Death 1)', category: 'Checkpoint', description: 'Immune checkpoint inhibitory receptor', target: 'PD-1', page: 'checkpoint-receptors' },
  
  // Mechanisms
  { id: 'm1', name: 'KILR® Cytotoxicity Assay', category: 'Application', description: 'Non-radioactive cellular cytotoxicity monitoring', page: 'cytotoxicity-detail' },
  { id: 'm2', name: 'SPRINTer™ Protein Turnover', category: 'Application', description: 'Targeted protein degradation (TPD) monitoring', page: 'tpd-detail' },
];
