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
  {
    id: '20260403-gpcr-readout-not-enough',
    title: 'GPCR 信号通路是什么？为什么“一个 readout”往往不够',
    category: '技术讨论',
    date: '2026-04-03',
    summary:
      '在 GPCR 药物研发里，单一 readout 往往只能看到局部放大的结果。把 G 蛋白、β-Arrestin 和受体内化等信息放在同一个框架里，才能更接近真实药理行为。',
    imageUrl: '/pic/GPCR.png',
    author: 'DiscoverX Team',
    tags: ['GPCR', 'Readout', 'Beta-Arrestin', 'Internalization', 'Drug Discovery'],
    content: `
      <p>在 GPCR 药物项目的开发中，研发团队经常会碰到一种情况：同一个受体、同一个配体，换一套实验体系，结论就变了。一个体系里看起来活性很好，换到另一种 readout 上，结果却不支持前面的判断。</p>
      <p>这类现象很多时候并不是实验失误，而是因为单一 readout 只捕捉到了 GPCR 信号网络中的一个切面。GPCR 从来都不是简单的“开/关”系统。对药企研发来说，如果过早依赖单一 readout 做分子优先级判断，后面很容易在机制解释、体内外相关性和候选物筛选上付出代价。</p>
      <p>G 蛋白偶联受体（G protein-coupled receptors, GPCRs）是目前最重要的一类药物靶点之一，涉及代谢、神经、炎症、免疫等多个方向。也正因为它们的药理价值高，研发中更需要把信号机制看得足够细，而不是只看一个放大后的终点指标。</p>

      <h2>一、GPCR 激活后，不只产生一类信号</h2>
      <p>从机制上看，GPCR 激活后的早期事件通常至少包括两条重要路径。</p>

      <h3>1. G 蛋白介导的信号</h3>
      <p>配体与 GPCR 结合后，受体构象改变，进而激活异源三聚体 G 蛋白。随后会触发 cAMP、Ca²⁺ 等第二信使变化。这类信号往往具有明显的级联放大效应，因此 cAMP、Ca²⁺、IP1 等 readout 长期被用作 GPCR 项目的核心功能检测指标。</p>
      <p>它们灵敏、成熟、便于高通量筛选，但问题也很明确：这类 readout 主要回答的是“这条放大通路有没有被激活”，而不是“这个分子在整个受体调控网络里会带来什么结果”。</p>

      <h3>2. β-Arrestin 招募</h3>
      <p>受体被 GRKs 磷酸化后，β-Arrestin 会被招募到受体复合体。这个过程和 G 蛋白信号不同，它更接近一个直接的分子相互作用事件。</p>
      <p>从研发视角看，β-Arrestin readout 有几个特点值得单独拿出来说：</p>
      <ul>
        <li>它通常更接近化学计量关系，而不是强放大型信号。</li>
        <li>它经常和受体脱敏、内化、再循环等后续过程相关。</li>
        <li>对部分项目来说，它本身就是区分配体药理特征的重要维度。</li>
      </ul>
      <p>过去 β-Arrestin 常被当作 G 蛋白信号的“终止器”。现在大家更清楚，它不只是负责关停，还可能参与独立的下游调控。对一些项目来说，忽略这一路径，等于在机制层面少看了半张图。</p>

      <h2>二、β-Arrestin 之后，真正影响开发判断的是受体命运</h2>
      <p>β-Arrestin 招募之后，受体常常会进一步发生内化（receptor internalization），也就是从细胞膜进入胞内内体（endosome）。</p>
      <p>这里要分清一个概念：内化本身不是典型意义上的信号 readout，它首先是一个受体转运过程。但在药物研发里，这个过程非常关键，因为它会影响受体是否持续暴露在膜表面、是否发生脱敏、是否回收，以及最终是否被降解。</p>
      <p>这些变化直接关系到几个研发团队真正关心的问题：</p>
      <ul>
        <li>信号持续时间会不会改变。</li>
        <li>重复给药后是否更容易出现耐受。</li>
        <li>体外活性是否能稳定转化到体内药效。</li>
        <li>同一靶点下，不同分子的药理表型为什么会分化。</li>
      </ul>
      <p>换句话说，内化不只是一个“补充信息”，很多时候它决定了你怎么解释项目里的药效和安全性数据。</p>

      <h2>三、为什么只看一个 readout，容易把项目判断带偏</h2>
      <p>如果项目早期只依赖单一功能 readout，比如 cAMP 或 Ca²⁺，通常会面临三类典型风险。</p>

      <h3>1. 容易漏掉 biased signaling</h3>
      <p>不同配体对同一个受体的激活并不一定沿着同样的路径展开。有些分子偏向 G 蛋白信号，有些分子则更容易诱导 β-Arrestin 招募和受体内化。如果筛选阶段只保留一种 readout，团队看到的很可能只是“表面活性排序”，而不是真实的药理分化。</p>

      <h3>2. 体内外相关性可能被高估</h3>
      <p>单一放大型 readout 往往会放大分子的表观差异，但这种差异不一定能稳定映射到体内。尤其是在反复给药模型里，受体脱敏、内化、再循环等过程，往往比一次性的体外信号峰值更能解释药效持续性和耐受问题。</p>

      <h3>3. 容易错过真正值得推进的分子</h3>
      <p>有些候选分子在传统 readout 上未必最强，但如果把 β-Arrestin、内化甚至受体转运相关指标一起纳入评估，它们可能展现出更均衡、也更可开发的药理特征。对于先导优化和候选物提名来说，这一点尤其重要。</p>

      <h2>四、对研发的直接启发</h2>
      <p>如果项目目标是建立更可靠的分子筛选和优先级判断框架，那么 GPCR 项目里的 readout 设计最好从一开始就避免“只看一个数”。更实际的做法通常是把不同层级的信息组合起来看，例如：</p>
      <ul>
        <li>G 蛋白通路 readout，用于判断基础激动或拮抗活性。</li>
        <li>β-Arrestin 招募，用于补充偏向性和调控机制信息。</li>
        <li>受体内化或转运相关 readout，用于观察受体命运和潜在耐受风险。</li>
      </ul>
      <p>这样做的价值不只是让数据更完整，而是帮助团队更早识别分子之间真正有开发意义的差异。</p>

      <h2>五、结语</h2>
      <p>GPCR 项目的难点，从来不只是测到信号，而是判断这个信号对研发决策意味着什么。单一 readout 可以用于快速筛选，但很难独立支撑机制判断和候选物优先级排序。</p>
      <p>真正有用的，往往是把 G 蛋白、β-Arrestin 和受体内化等信息放在同一个框架里看。只有这样，团队看到的才不是局部放大的结果，而是更接近真实药理行为的全貌。</p>
    `,
  },
  {
    id: '20260509-why-camp-alone-is-not-enough',
    title: '为什么只测 cAMP 不够？GPCR 多 readout 设计的研发逻辑',
    category: '技术讨论',
    date: '2026-05-09',
    summary:
      '在 GPCR 项目里，单一 cAMP readout 适合早期筛选，却不足以支撑长期研发决策。把 β-arrestin、内化和 trafficking 等正交 readout 纳入框架，才能更早识别真实药理差异与开发风险。',
    imageUrl: '/pic/GPCR.png',
    author: 'DiscoverX Team',
    tags: ['GPCR', 'cAMP', 'Beta-Arrestin', 'Internalization', 'Readout Design'],
    content: `
      <p>在 GPCR 项目中，早期数据与后期结果不一致的情况并不少见。前期筛选阶段活性明确、曲线理想，但进入机制验证、体内评价甚至候选分子收敛阶段后，药理特征却未能维持一致。出现这类偏差，原因未必在化合物本身，很多时候首先需要回头检查的是 readout 设计。</p>
      <p>在早期发现阶段，cAMP 或钙流检测通常是默认选项。这类方法流程成熟、灵敏度高，且适用于高通量筛选，因此在 hit 发现和初步构效关系建立中具有明显优势。不过，如果项目长期依赖单一 readout 推进，就可能在关键决策节点上放大体系偏差，低估受体信号的复杂性。</p>
      <p>从研发决策角度看，只测 cAMP 往往不足以支撑对 GPCR 分子的全面判断。它可以提供一类重要信息，但不足以覆盖真实药理行为的全部维度。</p>

      <h2>一、为什么 cAMP readout 容易“放大”活性信号</h2>
      <p>cAMP 和钙流检测本质上都属于放大型 readout，并非严格意义上的化学计量响应。少量受体激活即可驱动明显的下游信号放大，这也是其适合早期筛选的重要原因。</p>
      <p>但同样的机制也带来一个常见问题：体系容易压缩不同分子之间的真实差异。尤其在受体过表达模型中，受体储备效应（receptor reserve）会使部分激动剂在 cAMP readout 上呈现出接近完全激动剂的表型。此时平台读出的可能是放大后的系统响应，而非分子的真实内在效能。</p>
      <p>对于早期项目，这类偏差未必会立即暴露；但一旦进入 lead 优选、机制确认或跨模型比较阶段，就可能对分子排序和后续资源配置产生直接影响。</p>

      <h2>二、为什么 β-arrestin readout 常被纳入正交评价体系</h2>
      <p>β-arrestin 招募检测的重要性，不在于它是更“高级”的 readout，而在于它补充了 cAMP 无法稳定回答的问题。</p>
      <p>相较于典型的第二信使放大体系，β-arrestin 招募更接近化学计量过程，信号放大程度有限，对受体实际参与反应的比例要求更高。因此，这类 readout 通常更适合区分真实高效能分子与在放大体系中表现突出的分子。</p>
      <p>在项目实践中，β-arrestin readout 的价值主要体现在两个方面：第一，帮助研发团队校正 cAMP 平台上的效能判断；第二，为后续偏向性分析和机制分层提供更可靠的依据。它未必替代 cAMP，但往往是判断数据是否足够可信的重要补充。</p>

      <h2>三、单一 readout 难以覆盖 GPCR 的通路偏向性</h2>
      <p>对于 GPCR 项目而言，真正关键的问题通常不是“分子是否有活性”，而是“分子优先驱动哪条通路”。</p>
      <p>当前对 GPCR 药理的理解已经较为明确：GPCR 并非简单的单开关系统，而是具有多构象和多通路输出特征的动态信号平台。同一配体在 G 蛋白通路、β-arrestin 通路以及受体内化相关行为上，可能呈现完全不同的药理图谱。</p>
      <p>公开研究已经多次提示这一点。DiscoverX 对 30 余种受体进行并行分析时发现，超过 50% 的受体在 G 蛋白与 arrestin 相关通路中表现出显著药理差异。这意味着，如果筛选体系仅保留一条 readout，项目在早期就有较高概率遗漏具有通路偏向性的分子。</p>
      <p>以人源 δ 阿片受体（OPRD1，hDOR）为例，已有研究比较了 cAMP、β-arrestin 招募和 GPCR 内吞等细胞水平 readout。部分合成配体如 SNC80 在 cAMP 抑制实验中的表现与内源性配体相近，但在受体内化实验中却显示出更强的效应，接近超激动剂（super agonist）表型。</p>
      <p>对于研发团队而言，这类差异具有直接意义。如果筛选体系中只有 cAMP，这些分子很可能被归入“常规激动剂”，其潜在优势或潜在风险都无法在早期被识别。</p>

      <h2>四、内化与 trafficking readout 的价值在于前置风险识别</h2>
      <p>cAMP 主要反映受体在某一时间点是否被激活，但药物研发更关注激活之后会发生什么。</p>
      <p>受体内化（internalization）及后续转运（trafficking）与脱敏（desensitization）、耐受（tolerance）、急性耐受（tachyphylaxis）等药理现象密切相关。在某些适应症和靶点上，这些过程甚至直接影响体内药效持续性、安全边界和给药策略。</p>
      <p>因此，在药物发现阶段引入内化相关检测，并不是简单增加一个实验步骤，而是在更早阶段建立风险识别能力。以 PathHunter 内化实验为代表的正交 readout，可以帮助团队识别那些短期信号表现良好、但后续可能因为过快内化或异常转运而影响开发前景的候选分子。</p>

      <h2>五、readout 设计还会影响数据的可比性和稳定性</h2>
      <p>除机制解释外，研发团队在实际推进中还需要面对一个更现实的问题：数据是否稳定，是否可比较。</p>
      <p>cAMP readout 往往对受体表达水平较为敏感。即使使用相同构建和相近细胞背景，只要表达量发生波动，EC50 或 Emax 的判断就可能出现明显变化。对于单批次实验，这类差异未必突出；但在跨批次、跨项目或跨团队比较时，体系漂移会显著增加解释难度。</p>
      <p>相比之下，β-arrestin 招募等更接近化学计量关系的 readout 通常对表达量变化不那么敏感，因此在横向比较和机制确认中的一致性往往更好。对于需要持续推进和多轮决策的项目，这一点并不是技术细节，而是数据可信度的一部分。</p>

      <h2>结论</h2>
      <p>对 GPCR 项目而言，cAMP 是重要的早期筛选工具，但并不适合作为唯一 readout 长期支撑项目决策。单一 readout 容易放大体系偏差，也难以充分识别效能差异、通路偏向性以及内化相关风险。</p>
      <p>更合理的策略通常不是放弃 cAMP，而是在早期阶段尽快引入 β-arrestin、internalization 等正交 readout，构建多维度评价框架。只有当不同层面的数据能够互相校验时，研发团队才更有可能对分子的真实药理特征形成可靠判断，并据此推进后续开发。</p>
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
