import { BlogPost } from './types';

export const DEFAULT_PINNED_BLOG_ID = '20260304-eurofins-discoverx-intro';

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '20260304-eurofins-discoverx-intro',
    slug: 'eurofins-discoverx-assay-platform',
    title: '走进 Eurofins DiscoverX：从靶点到机制验证的一站式能力',
    category: 'Marketing',
    date: '2026-03-04',
    summary:
      '依托 EFC 等核心技术，DiscoverX 提供覆盖多类靶点与多种作用机制的 Assay 产品和开发服务，支持从早期研发到机制验证的关键决策。',
    imageUrl: '/pic/discoverx.png',
    author: 'DiscoverX Team',
    tags: ['Eurofins', 'DiscoverX', 'Assay', 'MOA', 'Drug Discovery'],
    keywords: ['DiscoverX', 'Eurofins DiscoverX', 'PathHunter', 'HitHunter', 'EFC技术', 'cell-based assay', '药物发现', '机制验证'],
    seoTitle: 'Eurofins DiscoverX 中文介绍 | PathHunter 与细胞功能检测平台',
    seoDescription:
      '介绍 Eurofins DiscoverX 的 EFC 技术平台、PathHunter、HitHunter、稳定细胞株、eXpress Kit、Bioassay Kit 及药物发现中的机制验证能力。',
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
    slug: 'gpcr-signaling-readout-not-enough',
    title: 'GPCR 信号通路是什么？为什么“一个 readout”往往不够',
    category: '技术讨论',
    date: '2026-04-03',
    summary:
      '在 GPCR 药物研发里，单一 readout 往往只能看到局部放大的结果。把 G 蛋白、β-Arrestin 和受体内化等信息放在同一个框架里，才能更接近真实药理行为。',
    imageUrl: '/pic/GPCR.png',
    author: 'DiscoverX Team',
    tags: ['GPCR', 'Readout', 'Beta-Arrestin', 'Internalization', 'Drug Discovery'],
    keywords: ['GPCR', 'GPCR assay', 'GPCR信号通路', 'β-Arrestin', 'GPCR internalization', 'cAMP assay', 'cell-based assay', 'DiscoverX'],
    seoTitle: 'GPCR 信号通路与多 readout 检测 | β-Arrestin cAMP Internalization',
    seoDescription:
      '解释 GPCR 药物研发中为什么单一 readout 不足以支撑机制判断，并介绍 cAMP、β-Arrestin 招募和受体内化等多 readout 设计思路。',
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
    slug: 'gpcr-camp-beta-arrestin-internalization-readout',
    title: '为什么只测 cAMP 不够？GPCR 多 readout 设计的研发逻辑',
    category: '技术讨论',
    date: '2026-05-09',
    summary:
      '在 GPCR 项目里，单一 cAMP readout 适合早期筛选，却不足以支撑长期研发决策。把 β-arrestin、内化和 trafficking 等正交 readout 纳入框架，才能更早识别真实药理差异与开发风险。',
    imageUrl: '/pic/GPCR.png',
    author: 'DiscoverX Team',
    tags: ['GPCR', 'cAMP', 'Beta-Arrestin', 'Internalization', 'Readout Design'],
    keywords: ['cAMP assay', 'GPCR assay', 'β-Arrestin assay', 'GPCR internalization', 'GPCR多readout', 'GLP1R assay', 'DiscoverX PathHunter'],
    seoTitle: '为什么只测 cAMP 不够？GPCR 多 readout 设计逻辑',
    seoDescription:
      '面向 GPCR 药物研发，说明 cAMP 单一 readout 的局限，以及 β-Arrestin、受体内化和 trafficking 检测在候选分子筛选中的价值。',
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
  {
    id: '20260511-discoverx-adc-drug-development-applications',
    slug: 'discoverx-adc-drug-development-applications',
    title: 'DiscoverX 产品在 ADC 药物开发中的应用',
    category: '产品介绍',
    date: '2026-05-11',
    summary:
      'DiscoverX 通过 PathHunter 受体内吞实验、KILR 细胞毒性平台以及 ADCC、ADCP、CDC 等 Fc 效应功能实验，为 ADC 药物发现、候选分子排序和临床前表征提供机制相关数据。',
    imageUrl: '/pic/ADCC.png',
    author: 'DiscoverX Team',
    tags: ['ADC', 'DiscoverX', 'PathHunter', 'KILR', 'ADCC', 'ADCP', 'Receptor Internalization', 'Cytotoxicity'],
    keywords: [
      'ADC药物开发',
      '抗体药物偶联物',
      'DiscoverX',
      'PathHunter',
      'KILR',
      '受体内吞实验',
      'ADC细胞毒性',
      'ADCC实验',
      'ADCP实验',
      'Fc效应功能',
    ],
    seoTitle: 'DiscoverX 产品在 ADC 药物开发中的应用 | PathHunter KILR ADCC ADCP',
    seoDescription:
      '介绍 DiscoverX 在 ADC 药物开发中的细胞实验方案，包括 PathHunter 受体内吞、KILR payload 细胞毒性、ADCC、ADCP 和 Fc 效应功能评估。',
    content: `
      <h2>用于 ADC 筛选与表征的细胞实验</h2>
      <p>抗体药物偶联物（Antibody Drug Conjugates, ADCs）是肿瘤治疗中一种重要且持续增长的药物形式，能够将细胞毒性药物，包括 PROTACs、siRNA、类固醇等，高度靶向地递送至肿瘤细胞，同时尽量降低全身毒性。其潜力正在从肿瘤领域扩展到癌症之外，包括炎症和免疫学等新兴应用方向。</p>
      <p>ADCs 通过特定 linker 将单克隆抗体与高效力细胞毒性药物连接起来，从而实现对抗原表达肿瘤细胞的选择性递送。这种靶向方式可增强抗肿瘤疗效，同时降低脱靶毒性。</p>
      <p>目前，已获批的 ADCs，包括 trastuzumab deruxtecan、brentuximab vedotin 和 enfortumab vedotin，已在多种实体瘤和血液系统恶性肿瘤中显示出强劲的临床活性。随着精准肿瘤学的发展，ADCs 在多个癌症适应症中的持续成功凸显出其不断提高的临床相关性，也推动了对其在肿瘤之外用途的探索，包括炎症和免疫疾病中的新兴机会。</p>
      <p>全面的 MOA（mechanism of action，作用机制）评估对于 ADC 的发现与优化至关重要，可覆盖多个功能层面：抗原识别、受体内吞、细胞内转运、payload 释放、细胞毒活性以及 Fc 介导的免疫反应。Eurofins DiscoverX 提供高通量、基于细胞的实验，用于定量这些机制。</p>
      <ul>
        <li><strong>Receptor Internalization PathHunter&reg; Assays：</strong>追踪 ADC 介导的内体摄取，用于评估效力、内吞动力学并对候选分子进行排序。</li>
        <li><strong>Cytotoxicity（KILR&reg; Platform）：</strong>在抗原特异性癌细胞模型中测量 payload 依赖的杀伤作用，反映靶点依赖的细胞毒活性。</li>
        <li><strong>Effector Function Assays：</strong>定量 ADCC、ADCP 和 CDC，用于评估 Fc 介导的免疫效应对抗肿瘤作用的贡献。</li>
      </ul>
      <p>这些实验可在完整 ADC 工作流程中提供与机制相关的数据，支持临床前优化，帮助选择最有前景的候选分子，并加速其进入临床。也可根据 ADC 开发项目的具体需求定制生成特定细胞模型。</p>

      <h2>一、受体内吞</h2>
      <h3>实验原理：测量 ADC 介导的受体内吞</h3>
      <p>抗体药物偶联物（ADCs）通常通过受体介导的内吞进入细胞，经内体系统转运后成熟为溶酶体，大部分药物释放发生在溶酶体中。通过定量评估 ADC 在内体中的转运过程，可测量靶向特定受体的抗体触发受体内吞的能力。识别并优先选择具有高内吞效率的抗体，对于有效 payload 递送以及 ADC 候选分子选择至关重要。</p>
      <figure>
        <img src="/pic/adc-internalization-principle.png" alt="PathHunter ADC 受体内吞实验原理" />
        <figcaption>抗体介导受体内吞实验的实验原理。</figcaption>
      </figure>
      <p>PathHunter internalization assay platform 基于行业验证的 Enzyme-Fragment Complementation（EFC）技术。稳定工程化细胞系共同表达两个 β-galactosidase（β-gal）片段：一个小的 donor 片段连接于受体或内体，另一个较大的 enzyme acceptor（EA）标记到内体或受体上。ADC 结合后，receptor-ADC 复合物通过内吞进入早期内体，使两个片段彼此接近并形成有活性的 β-gal。由此产生的化学发光信号与内吞程度成正比。</p>

      <h3>Assay 列表</h3>
      <p>Eurofins DiscoverX ADC internalization assays 可反映 MOA，并支持对 ADC 诱导受体内吞的效力进行排序和表征。这些实验通过测量内吞受体的内体定位，为 ADC 介导的受体内吞提供高度特异且定量的测量。</p>
      <table>
        <thead>
          <tr><th>靶点</th><th>产品描述</th><th>目录号</th></tr>
        </thead>
        <tbody>
          <tr><td>BCMA</td><td>PathHunter Human BCMA Stable Cell Line Internalization Assay (U2OS)</td><td>793-1145C3</td></tr>
          <tr><td>CD33</td><td>PathHunter Human CD33 (SIGLEC3) Stable Cell Line Internalization Assay (U2OS)</td><td>793-1148C3</td></tr>
          <tr><td>ErbB2 (Her2)</td><td>PathHunter ErbB2 Cell Line Internalization Assay (constitutive) (U2OS)</td><td>向销售咨询</td></tr>
          <tr><td>ErbB2 (Her2)</td><td>PathHunter ErbB2 Cell Line Internalization Assay (inducible) (U2OS)</td><td>向销售咨询</td></tr>
        </tbody>
      </table>

      <h3>应用案例</h3>
      <h4>使用 PathHunter BCMA Internalization Assay 评估 Belantumab Mafodotin</h4>
      <figure>
        <img src="/pic/adc-bcma-internalization.png" alt="PathHunter BCMA Internalization Assay 评估 Belantumab Mafodotin" />
        <figcaption>PathHunter BCMA Internalization Cell Line Assay 可测量由抗体或 ADC 介导的 BCMA 内吞。</figcaption>
      </figure>
      <p>BCMA 内吞实验显示，经 anti-BCMA antibody 处理后会产生剂量依赖性的受体内吞，而 isotype IgG1 对照无反应。belantamab-mafodotin 和 belantamab-biosimilar 均可在表达 BCMA 的 U2OS 细胞中诱导强烈且浓度依赖性的内吞，但在原生 U2OS 细胞中不产生该效应，从而确认了靶点特异性。</p>

      <h4>使用 PathHunter Inducible ErbB2 Internalization Assay 评估 Trastuzumab Emtansine</h4>
      <figure>
        <img src="/pic/adc-erbb2-internalization.png" alt="PathHunter ErbB2 Internalization Assay 评估 Trastuzumab Emtansine" />
        <figcaption>在 constitutive 和 inducible promoter 的 PathHunter 细胞系实验中观察 ADC 诱导的 ErbB2 内吞。</figcaption>
      </figure>
      <p>具有 constitutive（CMV 驱动）ErbB2 表达的 U2OS 细胞，在 L26 存在条件下，用递增浓度的 trastuzumab emtansine（Kadcyla&reg;）或 trastuzumab 处理。二者均在 PathHunter ErbB2 Internalization Cell Line 中诱导强烈、剂量依赖性的内吞反应。具有 inducible（Tet-responsive）ErbB2 表达的 U2OS 细胞中，仅 trastuzumab emtansine 以及 trastuzumab 与 L26 共处理时观察到强烈、剂量依赖性的内吞反应，证明 ErbB2 依赖的受体内吞可通过受控表达进行调节。</p>

      <h4>使用 PathHunter CD33 Internalization Assay 评估 Gemtuzumab Ozagamicin 和 Lintuzumab</h4>
      <figure>
        <img src="/pic/adc-cd33-internalization.png" alt="PathHunter CD33 Internalization Assay 评估 Gemtuzumab Ozagamicin 和 Lintuzumab" />
        <figcaption>交联可增强 PathHunter CD33 Internalization Cell Line Assay 中 ADC 驱动的 CD33 内吞。</figcaption>
      </figure>
      <p>Gemtuzumab ozagamicin 可在 U2OS 细胞中诱导 CD33 内吞；与 anti-IgG4 共处理时，反应明显更强，提示 Fc 介导的受体转运增强。在 anti-IgG1 存在条件下，Lintuzumab 显示增强且剂量依赖性的 CD33 内吞，确认了 Fc 驱动的抗体介导内吞放大作用。</p>

      <h2>二、Payload 介导的细胞毒性</h2>
      <h3>实验原理：使用 KILR Cytotoxicity Assays 测量 ADC payload 介导的杀伤</h3>
      <p>Eurofins DiscoverX KILR cell-based Cytotoxicity Assays 在无效应细胞条件下进行，用于专门测量由内吞 ADC 释放的细胞毒性 payload 所诱导的靶细胞死亡，从而分离出 ADC 介导的细胞内药物递送所产生的直接效应。</p>
      <figure>
        <img src="/pic/adc-kilr-cytotoxicity-principle.png" alt="KILR Cytotoxicity Assay 测量 ADC payload 介导杀伤的实验原理" />
        <figcaption>ADC payload 介导杀伤的实验原理。</figcaption>
      </figure>
      <p>KILR cytotoxicity assay platform 基于 EFC 技术。稳定工程化的 KILR target cell line assays 共同表达一个表面靶抗原，以及一个带有 β-galactosidase 小 donor 片段标签的 housekeeping protein。用 ADC 处理时，ADC 与靶抗原结合、发生内吞并释放其细胞毒性 payload，导致细胞死亡，随后释放带标签的蛋白。加入 β-gal 的 enzyme acceptor 后，可形成有活性的 β-gal 酶并产生剂量依赖性的化学发光信号。</p>

      <h3>应用案例</h3>
      <h4>在 KILR MM.1R 模型中使用 KILR Assay Platform 评估 ADC 细胞毒性</h4>
      <figure>
        <img src="/pic/adc-kilr-mm1r-cytotoxicity.png" alt="KILR MM.1R 模型评估 Belantamab Mafodotin ADC 细胞毒性" />
        <figcaption>KILR platform 可通过靶向癌症模型中的特定抗原来检测 ADC 介导的细胞毒性。</figcaption>
      </figure>
      <p>ADC belantamab mafodotin 与内源性表达 BCMA 的 MM.1R 细胞孵育后，加入 KILR detection reagent 检测细胞杀伤。较大的实验窗口最短可在 48 小时内检测到。</p>

      <h4>比较 KILR Detection 与 CellTiter-Glo 对 ADC 细胞毒性的评估</h4>
      <figure>
        <img src="/pic/adc-kilr-vs-celltiter-glo.png" alt="KILR 和 CellTiter-Glo 评估 ADC 介导细胞毒性的比较" />
        <figcaption>KILR 和 CellTiter-Glo&reg; Assays 在 MM.1R 细胞中评估 ADC 介导细胞毒性的比较。</figcaption>
      </figure>
      <p>在表达 BCMA 的 KILR MM.1R 细胞中，KILR cytotoxicity assay 通过发光信号增加来报告靶点依赖的细胞毒性，而 CellTiter-Glo viability assay 则通过信号降低来报告活力丧失。总体而言，KILR assays 显示出更高的 signal-to-background ratios，可更灵敏地检测 ADC 诱导的、靶点依赖的细胞毒性。</p>

      <h2>三、Fc 介导的 ADCC 与 ADCP</h2>
      <h3>使用 KILR Cytotoxicity Assays 评估 ADC 介导的 ADCC</h3>
      <figure>
        <img src="https://cf-ecom-products.cn.discoverx.com/wp-content/uploads/2026/03/AssayPrinciple_Fc-mediated_TargetCellCytotoxicity_ADCC.png" alt="ADC Fc-effector function ADCC 实验原理" />
        <figcaption>用于评估 ADC Fc-effector function 的 KILR cytotoxicity ADCC 实验原理。</figcaption>
      </figure>
      <p>ADCC assays 用于测量靶细胞的 antibody-dependent cell-mediated cytotoxicity。KILR cytotoxicity ADCC assay 通过靶细胞死亡定量评估 ADC Fc-effector function。在该实验中，靶细胞被工程化改造以稳定表达 KILR reporter protein。ADC 调理靶细胞后，免疫效应细胞结合并裂解靶细胞，释放 reporter protein。随后加入 KILR detection reagents，产生与细胞裂解活性成正比的化学发光信号。</p>

      <h3>使用 KILR Cytotoxicity Assays 评估 ADC 介导的 ADCP</h3>
      <figure>
        <img src="https://cf-ecom-products.cn.discoverx.com/wp-content/uploads/2026/03/AssayPrinciple_Fc-mediated_TargetCellCytotoxicity_ADCP.png" alt="ADC Fc-effector function ADCP 实验原理" />
        <figcaption>用于评估 ADC Fc-effector function 的 KILR cytotoxicity ADCP 实验原理。</figcaption>
      </figure>
      <p>ADCP assays 用于测量靶细胞的 antibody-dependent phagocytosis，通常由原代人巨噬细胞介导。表达相关抗原的靶细胞被工程化改造以稳定表达 KILR reporter protein。巨噬细胞吞噬或杀伤靶细胞后，通过检测剩余 KILR protein 的含量评估 ADCP 活性。高化学发光信号表示杀伤最小，低信号则与杀伤增加相关。</p>

      <h3>Fc 效应功能应用示例</h3>
      <p>KILR MM-1R Target Cells 与 KILR CD16 Effector Cells 可用于评估 belantamab mafodotin 及其未偶联亲本抗体的 ADCC 活性；KILR SKOV3 和 NCI-N87 Target Cells 可用于评估 trastuzumab emtansine 介导的 ADCC；原代人 PBMCs 可用于更具生理相关性的 Gemtuzumab Ozogamicin ADCC 评估；Macrophages 作为效应细胞时，可用于评估 belantamab mafodotin 或 trastuzumab emtansine 介导的 ADCP。</p>
      <p>通过将受体内吞、payload 介导细胞毒性以及 Fc 介导效应功能放在同一套评价框架中，DiscoverX 相关细胞实验可以帮助 ADC 研发团队更系统地理解候选分子的作用机制、靶点依赖性和潜在临床前风险。</p>
    `,
  },
];

export const getBlogPath = (post: Pick<BlogPost, 'slug'>) => `/blog/${post.slug}`;

export const findBlogPost = (identifier: string) => {
  return BLOG_POSTS.find((post) => post.id === identifier || post.slug === identifier);
};

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
  { id: 'tg2', name: 'GLP1R / GLP-1 Receptor', category: 'GPCR', description: 'Glucagon-like peptide receptor Gs coupled; cAMP, beta-arrestin and internalization assay options', target: 'GLP1R', page: 'glp1r' },
  { id: 'tg3', name: 'PD-1 (Programmed Cell Death 1)', category: 'Checkpoint', description: 'Immune checkpoint inhibitory receptor', target: 'PD-1', page: 'checkpoint-receptors' },
  { id: 'm1', name: 'KILR® Cytotoxicity Assay', category: 'Application', description: 'Non-radioactive cellular cytotoxicity monitoring', page: 'cytotoxicity' },
  { id: 'm2', name: 'SPRINTer™ Protein Turnover', category: 'Application', description: 'Targeted protein degradation (TPD) monitoring', page: 'tpd' },
];
