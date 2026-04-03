import { BlogPost } from './types';

export const DEFAULT_PINNED_BLOG_ID = '20260304-eurofins-discoverx-intro';

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '20260304-eurofins-discoverx-intro',
    title: '走进 Eurofins DiscoverX：从靶点到机制验证的一站式能力',
    category: 'Marketing',
    date: '2026-03-04',
    summary:
      '依托 EFC 等核心技术，DiscoverX 提供覆盖多类靶点与多种作用机制的 Assay 产品和开发服务，支持从早期研发到机制验证的关键决策。',
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
        <li>商业化稳定细胞株</li>
        <li>即用型 eXpress&reg; Kit</li>
        <li>Bioassay Kit</li>
        <li>工具产品、细胞培养与检测试剂</li>
        <li>重组酶类、磷酸酶与相关生物试剂</li>
        <li>膜制品与高纯度天然膜蛋白</li>
        <li>定制化细胞株与 Bioassay 开发验证服务</li>
      </ul>

      <h3>覆盖靶点类别</h3>
      <ul>
        <li>GPCR</li>
        <li>Cytokine Receptors</li>
        <li>Checkpoint Receptors</li>
        <li>RTK / CTK</li>
        <li>NHR</li>
        <li>Ion Channels</li>
        <li>Epigenetic Proteins</li>
      </ul>

      <h3>支持的作用机制（MOA）</h3>
      <ul>
        <li>受体二聚化（Dimerization）</li>
        <li>受体内吞（Internalization）</li>
        <li>蛋白相互作用（PPI）</li>
        <li>信号通路（Reporter / Degradation / Translocation）</li>
        <li>细胞毒性（Cytotoxicity）</li>
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

      <p>无论是大分子还是小分子，无论是早期研发、CMC 开发还是上市后放行，DiscoverX 都可为研发决策与风险控制提供可靠依据。</p>
    `,
  },
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
  { id: 'cl1', name: 'PathHunter® CHO-K1 GLP1R β-Arrestin Cell Line', catNo: '93-0300C2', category: 'Cell-based Assay', description: 'GPCR cell line for β-Arrestin recruitment', target: 'GLP1R', page: 'cell-line' },
  { id: 'cl2', name: 'PathHunter® CHO-K1 ADORA2A cAMP Cell Line', catNo: '95-0012C2', category: 'Cell-based Assay', description: 'GPCR cell line for cAMP accumulation', target: 'ADORA2A', page: 'cell-line' },
  { id: 'cl3', name: 'PD-1 Signaling Cell Line', catNo: '93-1104C19', category: 'Cell-based Assay', description: 'Checkpoint signaling / SHP-1 recruitment', target: 'PD-1', page: 'cell-line' },
  { id: 'cl4', name: 'EGFR SH2 Recruitment Cell Line', catNo: '93-0504C3', category: 'Cell-based Assay', description: 'Kinase SH2 recruitment assay', target: 'EGFR', page: 'cell-line' },
  { id: 'rg1', name: 'AssayComplete Cell Culture Kit-101', catNo: '92-3101G', category: 'Reagents', description: 'Optimized cell culture kit for DiscoverX assays', page: 'reagent' },
  { id: 'rg2', name: 'AssayComplete Cell Plating 2 Reagent', catNo: '93-0563R2A', category: 'Reagents', description: 'Standard plating medium for functional assays', page: 'reagent' },
  { id: 'rg3', name: 'AssayComplete Puromycin', catNo: '92-0028', category: 'Antibiotics', description: 'Selection antibiotic for stable cell line maintenance', page: 'reagent' },
  { id: 'rg4', name: 'Recombinant Human CCL2', catNo: '92-1001', category: 'Control Ligand', description: 'High purity recombinant chemokine CCL2', target: 'CCL2', page: 'reagent' },
  { id: 'rg5', name: 'Exendin-4', catNo: '92-1115', category: 'Control Ligand', description: 'Potent GLP1R agonist', target: 'GLP1R', page: 'reagent' },
  { id: 'tb1', name: 'ProLink Cloning Vector Bundle', catNo: '93-0491', category: 'Toolbox', description: 'Bundle of 4 EFC tagging vectors', page: 'toolbox' },
  { id: 'tb2', name: 'KILR Retroparticles (G418)', catNo: '97-0002', category: 'Toolbox', description: 'Retroparticles for generating KILR cytotoxicity targets', page: 'toolbox' },
  { id: 'tg1', name: 'HTR1A / 5HT1A', category: 'GPCR', description: 'Serotonin receptor Gi coupled', target: '5HT1A', page: 'gpcr' },
  { id: 'tg2', name: 'GLP1R / GLP-1 Receptor', category: 'GPCR', description: 'Glucagon-like peptide receptor Gs coupled', target: 'GLP1R', page: 'gpcr' },
  { id: 'tg3', name: 'PD-1 (Programmed Cell Death 1)', category: 'Checkpoint', description: 'Immune checkpoint inhibitory receptor', target: 'PD-1', page: 'checkpoint-receptors' },
  { id: 'm1', name: 'KILR® Cytotoxicity Assay', category: 'Application', description: 'Non-radioactive cellular cytotoxicity monitoring', page: 'cytotoxicity-detail' },
  { id: 'm2', name: 'SPRINTer™ Protein Turnover', category: 'Application', description: 'Targeted protein degradation (TPD) monitoring', page: 'tpd-detail' },
];
