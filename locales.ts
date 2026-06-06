import { Language, Page } from './types';

export interface LocalizedCard {
  id: string;
  title: string;
  description: string;
  imageUrl?: string;
  badge?: string;
  page?: Page;
}

export interface SiteLocale {
  nav: {
    home: string;
    products: string;
    targets: string;
    mechanisms: string;
    custom: string;
    documents: string;
    contacts: string;
    searchPlaceholder: string;
    mobileSearchPlaceholder: string;
    searchLabel: string;
    openMenu: string;
    closeMenu: string;
    expandPrefix: string;
  };
  navSubItems: Partial<Record<Page, string>>;
  common: {
    learnMore: string;
    enter: string;
    backUpper: string;
    backHome: string;
    backTop: string;
    languageLabel: string;
    untranslatedNotice: string;
  };
  meta: Record<string, { title: string; description: string }>;
  home: {
    heroTitle: string;
    globalSiteLabel: string;
    companyIntro: string;
    address: string;
    emailLabel: string;
    contentNavTitle: string;
    cards: LocalizedCard[];
    stats: Array<{ value: string; label: string }>;
  };
  products: {
    title: string;
    subtitle: string;
    cards: LocalizedCard[];
  };
  targets: {
    title: string;
    subtitle: string;
    cards: LocalizedCard[];
  };
  mechanisms: {
    title: string;
    subtitle: string;
    cards: LocalizedCard[];
  };
  custom: {
    title: string;
    subtitle: string;
    cards: LocalizedCard[];
  };
  documents: {
    title: string;
    subtitle: string;
    cards: LocalizedCard[];
  };
  contact: {
    title: string;
    intro: string;
    prompt: string;
    officeTitle: string;
    emailTitle: string;
    address: string;
  };
  footer: {
    aboutTitle: string;
    aboutText: string;
    coreProductsTitle: string;
    supportTitle: string;
    contactTitle: string;
    address: string;
    email: string;
    links: Partial<Record<Page, string>>;
  };
}

const topPageMeta = {
  [Page.Home]: {
    title: 'DiscoverX 中文网站',
    description: 'DiscoverX China 产品与技术信息平台，涵盖产品类型、靶点、作用机制、开发服务与技术资料。',
  },
  [Page.Products]: {
    title: '产品类型',
    description: '查看 DiscoverX 商业化细胞系、eXpress Kit、Bioassay Kit、试剂与工具产品。',
  },
  [Page.Targets]: {
    title: '靶点选择',
    description: '查看 DiscoverX 在 GPCR、细胞因子受体、检查点受体、RTK、NHR 等方向的产品能力。',
  },
  [Page.Applications]: {
    title: '作用机制 Mechanisms',
    description: '查看 DiscoverX 在二聚化、内吞、PPI、信号通路、靶标结合等机制方向的产品方案。',
  },
  [Page.Custom]: {
    title: '开发服务',
    description: '了解 DiscoverX 的 Assay 开发、Bioassay 开发与样品检测服务。',
  },
  [Page.Documents]: {
    title: '产品资料',
    description: '浏览 Datasheet、User Manual、Qualification Data、Application Note 与参考文献。',
  },
  [Page.Contacts]: {
    title: '联系我们',
    description: '联系 DiscoverX China 团队，获取报价、样品、资料和技术支持。',
  },
  [Page.BlogList]: {
    title: '最新动态',
    description: '查看 DiscoverX 产品介绍、技术讨论与应用资料更新。',
  },
  [Page.Search]: {
    title: '站内搜索',
    description: '搜索 DiscoverX 的产品目录、靶点与文档资料。',
  },
};

export const locales: Record<Language, SiteLocale> = {
  zh: {
    nav: {
      home: '首页',
      products: '产品类型',
      targets: '靶点分类',
      mechanisms: '作用机制',
      custom: '开发服务',
      documents: '产品资料',
      contacts: '联系我们',
      searchPlaceholder: '搜索产品目录号、名称或靶点',
      mobileSearchPlaceholder: '搜索产品',
      searchLabel: '搜索',
      openMenu: '打开菜单',
      closeMenu: '关闭菜单',
      expandPrefix: '展开',
    },
    navSubItems: {
      [Page.CellLine]: '商业化稳定细胞株',
      [Page.ExpressKit]: '即用型 eXpress Kit',
      [Page.BioassayKit]: 'Bioassay Kit',
      [Page.Toolbox]: '工具产品',
      [Page.DetectionKit]: '检测试剂盒',
      [Page.Reagent]: '试剂耗材',
      [Page.MembranePrep]: '膜制品',
      [Page.Enzyme]: '重组酶类',
      [Page.Calixar]: 'Calixar 膜蛋白',
      [Page.Gpcr]: 'GPCR',
      [Page.CytokineReceptors]: '细胞因子受体',
      [Page.CheckpointReceptors]: '免疫检查点受体',
      [Page.KinaseReceptors]: 'RTK / CTK',
      [Page.Nhr]: '核受体 NHR',
      [Page.IonChannels]: '离子通道',
      [Page.EpigeneticProteins]: '表观遗传蛋白',
      [Page.DimerizationDetail]: '受体二聚化',
      [Page.InternalizationDetail]: '受体内吞',
      [Page.PpiDetail]: '蛋白相互作用',
      [Page.SignalPathwayDetail]: '信号通路',
      [Page.CytotoxicityDetail]: '细胞毒性',
      [Page.TpdDetail]: '靶向蛋白降解',
      [Page.TargetEngagementDetail]: '靶标结合',
      [Page.CustomAssayDevelopment]: 'Assay 开发服务',
      [Page.BioassayDevelopment]: 'Bioassay 开发',
      [Page.SampleTesting]: '样品检测服务',
      [Page.DatasheetList]: '产品说明书',
      [Page.UserManual]: '用户操作手册',
      [Page.QualificationData]: '验证数据报告',
      [Page.ApplicationNote]: '技术应用指南',
      [Page.Reference]: '参考文献库',
    },
    common: {
      learnMore: '了解更多',
      enter: 'ENTER',
      backUpper: '返回上一级',
      backHome: '返回首页',
      backTop: '返回顶部',
      languageLabel: '语言',
      untranslatedNotice: '该页面的多语言版本正在准备中，当前暂显示中文内容。',
    },
    meta: topPageMeta,
    home: {
      heroTitle: 'DiscoverX中文站',
      globalSiteLabel: '本站为资料站，更多信息请移步品牌全球官网',
      companyIntro: '欧陆生物制品（上海）有限公司是 Eurofins 集团在中国的全资子公司，全面负责 DiscoverX 系列产品在中国的销售、市场推广和技术支持。',
      address: '地址：上海市闵行区浦江镇陈行公路 2168 号 8 号楼',
      emailLabel: '邮箱：',
      contentNavTitle: '内容导航',
      cards: [
        { id: 'latest', title: '最新动态 Latest Update', description: '查看 DiscoverX 产品介绍、技术讨论与应用资料更新。', imageUrl: '/pic/discoverx.png', page: Page.BlogList },
        { id: 'targets', title: '靶点选择 Targets Select', description: '按 GPCR、细胞因子受体、免疫检查点、RTK / CTK 等靶点方向查找产品。', imageUrl: '/pic/GPCR-1150x350.jpg', page: Page.Targets },
        { id: 'products', title: '产品类型 Product Types', description: '浏览稳定细胞系、eXpress Kit、Bioassay Kit、检测工具与试剂耗材。', imageUrl: '/pic/Assay-Kits_Small-Card-Image.jpg', page: Page.Products },
        { id: 'mechanisms', title: '作用机制 Mechanisms', description: '围绕受体二聚化、内吞、PPI、信号通路、细胞毒性等机制选择实验体系。', imageUrl: '/pic/Dimerization.jpg', page: Page.Applications },
        { id: 'custom', title: '开发服务 Development Service', description: '了解 Assay 开发、Bioassay 开发和样品检测服务。', imageUrl: '/pic/EDRX-CustomCapabilities_StreamlinedApproach-CustomizedCellLineGeneration-scaled-1.jpg', page: Page.Custom },
        { id: 'docs', title: '产品资料 Documents', description: '集中访问 datasheet、用户手册、验证数据、应用指南和参考文献。', imageUrl: '/pic/Detection-Kits_Small-Card-Image.jpg', page: Page.Documents },
        { id: 'contacts', title: '联系我们 Contact', description: '查看中文、日语、韩语三种语言的联系人信息，获取报价、资料和技术支持。', imageUrl: '/pic/DiscoverX Logo_Blue Discover Text w BlueOrange X.png', page: Page.Contacts },
      ],
      stats: [
        { value: '1,000+', label: 'Assay Kits' },
        { value: '1500+', label: 'Cell Lines' },
        { value: '20+', label: 'Years Experience' },
        { value: 'TOP 50', label: 'Pharma Partners' },
      ],
    },
    products: {
      title: '产品类型',
      subtitle: '提供全方位的生命科学研究工具与定制化解决方案',
      cards: [
        { id: 'c1', title: '商业化稳转细胞系', description: '提供超过 1,000 个独特靶点的功能性稳转细胞系，覆盖 GPCR、激酶、离子通道及免疫检查点，具有卓越的遗传稳定性。', imageUrl: '/pic/Cell Line.png', badge: 'Validated Cell Lines', page: Page.CellLine },
        { id: 'c2', title: '即用型 eXpress® Kit', description: '即用型检测试剂盒，包含预包装冷冻细胞及配套试剂。解冻即用，24-48 小时内获得高质量实验结果。', imageUrl: '/pic/Assay-Kits_Small-Card-Image.jpg', badge: 'Assay-Ready', page: Page.ExpressKit },
        { id: 'c3', title: 'Bioassay Kit', description: '专为生物药效价评估与中和抗体检测优化。符合 CMC 及监管要求，支持 4PL 数据拟合。', imageUrl: '/pic/Bioassays-Kits_Small-Card-Image-1.jpg', badge: 'Potency Assay', page: Page.BioassayKit },
        { id: 'c4', title: '工具箱产品', description: '包括克隆载体、逆转录颗粒及亲本细胞株，助力快速构建定制化检测系统。', imageUrl: '/pic/Toolbox-Products_Small-Card-Image.jpg', page: Page.Toolbox },
        { id: 'c5', title: '检测试剂盒', description: '高灵敏度的 EFC 底物及化学发光检测试剂盒，及各类功能性分析配套试剂盒。', imageUrl: '/pic/Detection-Kits_Small-Card-Image.jpg', page: Page.DetectionKit },
        { id: 'c6', title: '试剂耗材', description: 'AssayComplete™ 细胞培养、解冻、复苏、消化及铺板试剂，确保实验一致性与稳定性。', imageUrl: '/pic/Cell-Culture-Kits_Small-Card-Image.jpg', page: Page.Reagent },
        { id: 'c7', title: '膜制品', description: '高质量纯化膜制品，富集高密度活性受体蛋白，适用于配体结合实验。', imageUrl: '/pic/Membrane-Prep_Large-Image-310x174-1.jpg', page: Page.MembranePrep },
        { id: 'c8', title: '重组酶类产品', description: '高纯度重组激酶、磷酸酶、DNA解旋酶及表观遗传蛋白，高灵敏度激酶活性检测试剂盒，适用于体外生化筛选与动力学研究。', imageUrl: '/pic/Recombinant-Proteins_Small-Card-Image.jpg', page: Page.Enzyme },
        { id: 'c9', title: 'Calixar 膜蛋白', description: '利用专利表面活性剂技术，提取天然构象的膜蛋白，用于蛋白的功能研究。', imageUrl: '/pic/calixar.jpg', badge: 'Patented Technology', page: Page.Calixar },
      ],
    },
    targets: {
      title: '靶点选择',
      subtitle: '覆盖多种关键生物学靶点，支持药物发现与机制研究',
      cards: [
        { id: 't1', title: 'G蛋白偶联受体 GPCR', description: '真核生物中最大且功能最多样的膜受体家族，调控广泛的生理过程。', imageUrl: '/pic/GPCR-1150x350.jpg', page: Page.Gpcr },
        { id: 't2', title: '细胞因子受体 Cytokine Receptors', description: '识别白介素、干扰素等分子，在免疫应答及造血调节中起关键作用。', imageUrl: '/pic/Cytokines_Small-Card-Image.jpg', page: Page.CytokineReceptors },
        { id: 't3', title: '免疫检查点受体 Checkpoint Receptors', description: '调节 T 细胞活化与免疫耐受，是肿瘤免疫治疗的核心靶点。', imageUrl: '/pic/Checkpoint-Modulators_Small-Card-Image.jpg', page: Page.CheckpointReceptors },
        { id: 't4', title: '激酶受体 RTK', description: '受体酪氨酸激酶，参与细胞增殖、分化及代谢调控，是抗癌药物的重要靶点。', imageUrl: '/pic/RTKs_CTKs_Small-Card-Image.jpg', page: Page.KinaseReceptors },
        { id: 't5', title: '核激素受体 NHR', description: '配体依赖性转录因子，调控基因表达，参与代谢、发育及炎症反应。', imageUrl: '/pic/Nuclear-Hormones_Small-Card-Image-1.jpg', page: Page.Nhr },
        { id: 't6', title: '离子通道 Ion Channels', description: '控制离子跨膜流动，调节神经传导、肌肉收缩及细胞兴奋性。', imageUrl: '/pic/Ion-Channels_Large-Image-310x174-1.jpg', page: Page.IonChannels },
        { id: 't7', title: '表观遗传蛋白 Epigenetic Proteins', description: '包括组蛋白修饰酶及 DNA 甲基化酶，调控基因表达而不改变 DNA 序列。', imageUrl: '/pic/Nuclear-Hormones_Small-Card-Image-1.jpg', page: Page.EpigeneticProteins },
      ],
    },
    mechanisms: {
      title: '作用机制',
      subtitle: '深入解析药物作用的分子机制与细胞响应',
      cards: [
        { id: 'm4', title: '信号通路 Signaling Pathways', description: '监测关键信号分子（如 NF-κB、STAT、MAPK）的活化、转录、降解与向核内转位。', imageUrl: '/pic/Signaling-Pathways_Small-Card-Image.jpg', page: Page.SignalPathwayDetail },
        { id: 'm5', title: '细胞毒性效应 Cytotoxicity', description: '评估免疫细胞介导的靶细胞杀伤，适用于 单抗、ADC、CAR-T 及双抗药物开发。', imageUrl: '/pic/Cytotoxicity_Small-Card-Image.jpg', page: Page.CytotoxicityDetail },
        { id: 'm6', title: '靶向蛋白降解 TPD', description: '监测 PROTAC 或分子胶诱导的靶蛋白泛素化降解动力学。', imageUrl: '/pic/Degradation_Small-Card-Image.jpg', page: Page.TpdDetail },
        { id: 'm7', title: '靶标结合 Target Engagement', description: '利用 InCELL 技术，在活细胞中检测测小分子与靶蛋白的结合。', imageUrl: '/pic/Target-Engagement_Large-Card-Image.jpg', page: Page.TargetEngagementDetail },
        { id: 'm2', title: '受体内吞 Internalization', description: '追踪受体从细胞表面向内体的转运过程，评估受体脱敏与信号终止。', imageUrl: '/pic/Internalization.jpg', page: Page.InternalizationDetail },
        { id: 'm1', title: '受体二聚化 Dimerization', description: '监测受体激活后的同源或异源二聚化，揭示信号转导的起始步骤。', imageUrl: '/pic/Dimerization.jpg', page: Page.DimerizationDetail },
        { id: 'm3', title: '蛋白间相互作用 PPI', description: '检测蛋白质复合物的形成与解离，解析信号通路的分子基础。', imageUrl: '/pic/PPI.jpg', page: Page.PpiDetail },
      ],
    },
    custom: {
      title: '开发服务',
      subtitle: '专业的定制化研发与技术支持，加速您的药物发现进程',
      cards: [
        { id: 's1', title: 'Assay 开发服务', description: '定制化细胞株构建与检测体系优化，从靶点克隆到稳定细胞株筛选，提供全流程技术支持。', badge: 'Custom Development', page: Page.CustomAssayDevelopment },
        { id: 's2', title: 'Bioassay 开发', description: '针对生物药效价检测需求，开发符合 ICH 指南的细胞功能性检测方法。', badge: 'GMP-Ready', page: Page.BioassayDevelopment },
        { id: 's3', title: '样品检测服务', description: '提供化合物、抗体及生物制品的功能性评估，支持高通量筛选与剂量响应分析。', page: Page.SampleTesting },
      ],
    },
    documents: {
      title: '产品资料',
      subtitle: '集中浏览技术文档与应用支持资料',
      cards: [
        { id: 'd1', title: '产品说明书 Datasheets', description: 'Datasheet 按靶点和产品场景提供索引说明，具体货号资料可按需获取最新版本。', badge: 'Datasheets', page: Page.DatasheetList },
        { id: 'd2', title: '用户操作手册 User Manuals', description: '查看实验流程、使用方法和常见注意事项，帮助实验顺利开展。', page: Page.UserManual },
        { id: 'd3', title: '验证数据报告 Qualification Data', description: '查看产品验证与质控相关资料，支持项目评估与内部归档。', badge: 'QC', page: Page.QualificationData },
        { id: 'd4', title: '技术应用指南 Application Notes', description: '查看实验设计思路、数据分析建议和典型应用案例。', page: Page.ApplicationNote },
        { id: 'd5', title: '参考文献 References', description: '汇总与 DiscoverX 产品相关的参考文献与公开研究信息。', badge: 'Literature', page: Page.Reference },
      ],
    },
    contact: {
      title: '联系我们',
      intro: '欧陆生物制品（上海）有限公司是 Eurofins 集团在中国的全资子公司，全面负责 DiscoverX 系列产品在中国的销售、市场推广和技术支持。',
      prompt: '如需获取报价、索取样品或咨询技术问题，请直接向下面邮箱地址发送邮件，或扫描右侧微信二维码，我们会尽快与您联系。',
      officeTitle: '上海办公室',
      emailTitle: '电子邮箱',
      address: '上海市闵行区浦江镇陈行公路 2168 号 8 号楼',
    },
    footer: {
      aboutTitle: '关于我们',
      aboutText: 'Eurofins DiscoverX 聚焦药物研发相关的细胞模型、试剂盒、工具产品与定制化检测服务，支持从早期筛选到机制验证的关键环节。',
      coreProductsTitle: '核心产品',
      supportTitle: '技术支持',
      contactTitle: '联系我们',
      address: '地址：上海市闵行区浦江镇陈行公路 2168 号 8 号楼',
      email: '邮箱：CustomerService_DRX_China@cpt.eurofinscn.com',
      links: {
        [Page.Gpcr]: 'PathHunter GPCR 细胞系',
        [Page.CytotoxicityDetail]: 'KILR 细胞毒性监测',
        [Page.TargetEngagementDetail]: 'InCELL 靶标结合分析',
        [Page.DatasheetList]: '产品说明书',
        [Page.UserManual]: '用户手册',
        [Page.ApplicationNote]: '技术应用资料',
      },
    },
  },
  ja: {
    nav: {
      home: 'ホーム',
      products: '製品タイプ',
      targets: 'ターゲット',
      mechanisms: '作用機序',
      custom: '開発サービス',
      documents: '資料',
      contacts: 'お問い合わせ',
      searchPlaceholder: '製品番号、名称、ターゲットを検索',
      mobileSearchPlaceholder: '製品を検索',
      searchLabel: '検索',
      openMenu: 'メニューを開く',
      closeMenu: 'メニューを閉じる',
      expandPrefix: '展開',
    },
    navSubItems: {
      [Page.CellLine]: '安定発現細胞株',
      [Page.ExpressKit]: '即用型 eXpress Kit',
      [Page.BioassayKit]: 'Bioassay Kit',
      [Page.Toolbox]: 'ツール製品',
      [Page.DetectionKit]: '検出キット',
      [Page.Reagent]: '試薬・消耗品',
      [Page.MembranePrep]: '膜製品',
      [Page.Enzyme]: '組換え酵素',
      [Page.Calixar]: 'Calixar 膜タンパク質',
      [Page.Gpcr]: 'GPCR',
      [Page.CytokineReceptors]: 'サイトカイン受容体',
      [Page.CheckpointReceptors]: '免疫チェックポイント受容体',
      [Page.KinaseReceptors]: 'RTK / CTK',
      [Page.Nhr]: '核内受容体 NHR',
      [Page.IonChannels]: 'イオンチャネル',
      [Page.EpigeneticProteins]: 'エピジェネティックタンパク質',
      [Page.DimerizationDetail]: '受容体二量体化',
      [Page.InternalizationDetail]: '受容体内在化',
      [Page.PpiDetail]: 'タンパク質間相互作用',
      [Page.SignalPathwayDetail]: 'シグナル伝達',
      [Page.CytotoxicityDetail]: '細胞傷害性',
      [Page.TpdDetail]: '標的タンパク質分解',
      [Page.TargetEngagementDetail]: 'ターゲット結合',
      [Page.CustomAssayDevelopment]: 'Assay開発サービス',
      [Page.BioassayDevelopment]: 'Bioassay開発',
      [Page.SampleTesting]: 'サンプル測定',
      [Page.DatasheetList]: '製品説明書',
      [Page.UserManual]: 'ユーザーマニュアル',
      [Page.QualificationData]: '検証データ',
      [Page.ApplicationNote]: '技術アプリケーション',
      [Page.Reference]: '参考文献',
    },
    common: {
      learnMore: '詳しく見る',
      enter: 'ENTER',
      backUpper: '上位ページへ戻る',
      backHome: 'ホームへ戻る',
      backTop: 'ページ上部へ戻る',
      languageLabel: '言語',
      untranslatedNotice: 'このページの日本語版は準備中です。現在は中国語コンテンツを表示しています。',
    },
    meta: {
      [Page.Home]: { title: 'DiscoverX 日本語サイト', description: 'DiscoverXの製品タイプ、ターゲット、作用機序、開発サービス、技術資料を紹介する日本語情報サイト。' },
      [Page.Products]: { title: '製品タイプ', description: '安定発現細胞株、eXpress Kit、Bioassay Kit、試薬、ツール製品を確認できます。' },
      [Page.Targets]: { title: 'ターゲット選択', description: 'GPCR、サイトカイン受容体、免疫チェックポイント、RTK、NHRなどの製品能力を確認できます。' },
      [Page.Applications]: { title: '作用機序', description: '二量体化、内在化、PPI、シグナル伝達、ターゲット結合などのアッセイソリューションを紹介します。' },
      [Page.Custom]: { title: '開発サービス', description: 'Assay開発、Bioassay開発、サンプル測定サービスを紹介します。' },
      [Page.Documents]: { title: '製品資料', description: 'Datasheet、User Manual、Qualification Data、Application Note、参考文献を確認できます。' },
      [Page.Contacts]: { title: 'お問い合わせ', description: '見積、サンプル、資料、技術相談についてDiscoverX Chinaチームへお問い合わせください。' },
      [Page.BlogList]: { title: '最新情報', description: 'DiscoverXの製品紹介、技術トピック、アプリケーション情報の更新を確認できます。' },
      [Page.Search]: { title: 'サイト内検索', description: 'DiscoverXの製品、ターゲット、技術資料を検索できます。' },
    },
    home: {
      heroTitle: 'DiscoverX 日本語サイト',
      globalSiteLabel: '本サイトは情報提供用です。詳しくはグローバル公式サイトをご覧ください',
      companyIntro: '欧陆生物制品（上海）有限公司はEurofinsグループの中国法人であり、中国市場におけるDiscoverX製品の販売、マーケティング、技術サポートを担当しています。',
      address: '住所：上海市闵行区浦江镇陈行公路 2168 号 8 号楼',
      emailLabel: 'メール：',
      contentNavTitle: 'コンテンツナビゲーション',
      cards: [
        { id: 'latest', title: '最新情報', description: 'DiscoverXの製品紹介、技術トピック、アプリケーション資料の更新を確認できます。', imageUrl: '/pic/discoverx.png', page: Page.BlogList },
        { id: 'targets', title: 'ターゲット選択', description: 'GPCR、サイトカイン受容体、免疫チェックポイント、RTK / CTKなどから製品を探せます。', imageUrl: '/pic/GPCR-1150x350.jpg', page: Page.Targets },
        { id: 'products', title: '製品タイプ', description: '安定発現細胞株、eXpress Kit、Bioassay Kit、検出ツール、試薬を確認できます。', imageUrl: '/pic/Assay-Kits_Small-Card-Image.jpg', page: Page.Products },
        { id: 'mechanisms', title: '作用機序', description: '二量体化、内在化、PPI、シグナル伝達、細胞傷害性などの実験系を選択できます。', imageUrl: '/pic/Dimerization.jpg', page: Page.Applications },
        { id: 'custom', title: '開発サービス', description: 'Assay開発、Bioassay開発、サンプル測定サービスを紹介します。', imageUrl: '/pic/EDRX-CustomCapabilities_StreamlinedApproach-CustomizedCellLineGeneration-scaled-1.jpg', page: Page.Custom },
        { id: 'docs', title: '製品資料', description: 'Datasheet、ユーザーマニュアル、検証データ、アプリケーション資料、参考文献を確認できます。', imageUrl: '/pic/Detection-Kits_Small-Card-Image.jpg', page: Page.Documents },
        { id: 'contacts', title: 'お問い合わせ Contact', description: '中国語、日本語、韓国語の問い合わせ情報をまとめて確認できます。', imageUrl: '/pic/DiscoverX Logo_Blue Discover Text w BlueOrange X.png', page: Page.Contacts },
      ],
      stats: [
        { value: '1,000+', label: 'Assay Kits' },
        { value: '1500+', label: 'Cell Lines' },
        { value: '20+', label: 'Years Experience' },
        { value: 'TOP 50', label: 'Pharma Partners' },
      ],
    },
    products: {
      title: '製品タイプ',
      subtitle: '生命科学研究とバイオ医薬品開発を支援する製品・ツール群',
      cards: [
        { id: 'c1', title: '商業化安定発現細胞株', description: '1,000以上のユニークターゲットに対応する機能性安定発現細胞株。GPCR、キナーゼ、イオンチャネル、免疫チェックポイントなどをカバーします。', imageUrl: '/pic/Cell Line.png', badge: 'Validated Cell Lines', page: Page.CellLine },
        { id: 'c2', title: '即用型 eXpress® Kit', description: '凍結済み細胞と必要試薬を含む即用型キット。解凍後すぐに実験でき、短時間で高品質なデータ取得を目指せます。', imageUrl: '/pic/Assay-Kits_Small-Card-Image.jpg', badge: 'Assay-Ready', page: Page.ExpressKit },
        { id: 'c3', title: 'Bioassay Kit', description: 'バイオ医薬品のpotency評価や中和抗体測定向けに最適化されたキット。CMCや規制対応を意識した評価系に利用できます。', imageUrl: '/pic/Bioassays-Kits_Small-Card-Image-1.jpg', badge: 'Potency Assay', page: Page.BioassayKit },
        { id: 'c4', title: 'ツールボックス製品', description: 'クローニングベクター、レトロ粒子、親細胞株など、カスタムアッセイ系の構築を支援する研究ツールです。', imageUrl: '/pic/Toolbox-Products_Small-Card-Image.jpg', page: Page.Toolbox },
        { id: 'c5', title: '検出試薬・検出キット', description: '高感度なEFC基質、化学発光検出試薬、各種機能性アッセイに必要な補助試薬を提供します。', imageUrl: '/pic/Detection-Kits_Small-Card-Image.jpg', page: Page.DetectionKit },
        { id: 'c6', title: '試薬・消耗品', description: 'AssayComplete™シリーズなど、細胞培養、解凍、播種、アッセイ実施の一貫性を支える試薬群です。', imageUrl: '/pic/Cell-Culture-Kits_Small-Card-Image.jpg', page: Page.Reagent },
        { id: 'c7', title: '膜製品', description: '高密度かつ活性を保持した受容体タンパク質を含む膜標品。リガンド結合試験などに利用できます。', imageUrl: '/pic/Membrane-Prep_Large-Image-310x174-1.jpg', page: Page.MembranePrep },
        { id: 'c8', title: '組換え酵素製品', description: 'キナーゼ、ホスファターゼ、DNAヘリカーゼ、エピジェネティック関連タンパク質など、in vitro評価用の酵素製品です。', imageUrl: '/pic/Recombinant-Proteins_Small-Card-Image.jpg', page: Page.Enzyme },
        { id: 'c9', title: 'Calixar 膜タンパク質', description: '独自の界面活性剤技術により天然構造に近い膜タンパク質を抽出し、機能研究に活用できます。', imageUrl: '/pic/calixar.jpg', badge: 'Patented Technology', page: Page.Calixar },
      ],
    },
    targets: {
      title: 'ターゲット選択',
      subtitle: '薬物探索と作用機序研究で重要なターゲットファミリー',
      cards: [
        { id: 't1', title: 'Gタンパク質共役受容体 GPCR', description: '真核生物で最大級の膜受容体ファミリー。幅広い生理機能を調節し、創薬ターゲットとして重要です。', imageUrl: '/pic/GPCR-1150x350.jpg', page: Page.Gpcr },
        { id: 't2', title: 'サイトカイン受容体', description: 'インターロイキン、インターフェロンなどを認識し、免疫応答や造血制御で中心的な役割を担います。', imageUrl: '/pic/Cytokines_Small-Card-Image.jpg', page: Page.CytokineReceptors },
        { id: 't3', title: '免疫チェックポイント受容体', description: 'T細胞活性化や免疫寛容を制御し、がん免疫療法における主要ターゲット群です。', imageUrl: '/pic/Checkpoint-Modulators_Small-Card-Image.jpg', page: Page.CheckpointReceptors },
        { id: 't4', title: 'キナーゼ受容体 RTK / CTK', description: '細胞増殖、分化、代謝調節に関与し、抗がん剤や分子標的薬の重要な評価対象です。', imageUrl: '/pic/RTKs_CTKs_Small-Card-Image.jpg', page: Page.KinaseReceptors },
        { id: 't5', title: '核内ホルモン受容体 NHR', description: 'リガンド依存性転写因子として遺伝子発現を調節し、代謝、発生、炎症などに関与します。', imageUrl: '/pic/Nuclear-Hormones_Small-Card-Image-1.jpg', page: Page.Nhr },
        { id: 't6', title: 'イオンチャネル', description: '細胞膜を介したイオン流入出を制御し、神経伝達、筋収縮、細胞興奮性の研究に使われます。', imageUrl: '/pic/Ion-Channels_Large-Image-310x174-1.jpg', page: Page.IonChannels },
        { id: 't7', title: 'エピジェネティックタンパク質', description: 'ヒストン修飾酵素やDNAメチル化酵素など、DNA配列を変えずに遺伝子発現を制御する因子です。', imageUrl: '/pic/Nuclear-Hormones_Small-Card-Image-1.jpg', page: Page.EpigeneticProteins },
      ],
    },
    mechanisms: {
      title: '作用機序',
      subtitle: '薬物作用の分子メカニズムと細胞応答を解析',
      cards: [
        { id: 'm4', title: 'シグナル伝達経路', description: 'NF-κB、STAT、MAPKなどの活性化、転写、分解、核内移行をモニタリングします。', imageUrl: '/pic/Signaling-Pathways_Small-Card-Image.jpg', page: Page.SignalPathwayDetail },
        { id: 'm5', title: '細胞傷害性 Cytotoxicity', description: '免疫細胞またはADC、CAR-T、二重特異性抗体などによる標的細胞殺傷を評価します。', imageUrl: '/pic/Cytotoxicity_Small-Card-Image.jpg', page: Page.CytotoxicityDetail },
        { id: 'm6', title: '標的タンパク質分解 TPD', description: 'PROTACや分子接着剤によって誘導される標的タンパク質分解のダイナミクスを測定します。', imageUrl: '/pic/Degradation_Small-Card-Image.jpg', page: Page.TpdDetail },
        { id: 'm7', title: 'ターゲットエンゲージメント', description: 'InCELL技術などにより、生細胞内で小分子と標的タンパク質の結合を確認します。', imageUrl: '/pic/Target-Engagement_Large-Card-Image.jpg', page: Page.TargetEngagementDetail },
        { id: 'm2', title: '受容体内在化', description: '受容体が細胞表面からエンドソームへ移行する過程を追跡し、ADCやGPCR研究に利用します。', imageUrl: '/pic/Internalization.jpg', page: Page.InternalizationDetail },
        { id: 'm1', title: '受容体二量体化', description: '受容体活性化後のホモ二量体化またはヘテロ二量体化を測定し、シグナル開始を評価します。', imageUrl: '/pic/Dimerization.jpg', page: Page.DimerizationDetail },
        { id: 'm3', title: 'タンパク質間相互作用 PPI', description: 'タンパク質複合体の形成または解離を測定し、シグナル経路の分子基盤を解析します。', imageUrl: '/pic/PPI.jpg', page: Page.PpiDetail },
      ],
    },
    custom: {
      title: '開発サービス',
      subtitle: 'カスタムアッセイ開発と技術サポートで創薬研究を加速',
      cards: [
        { id: 's1', title: 'Assay開発サービス', description: 'ターゲットクローニング、細胞株構築、安定発現株スクリーニング、条件最適化まで、カスタムアッセイ構築を支援します。', badge: 'Custom Development', page: Page.CustomAssayDevelopment },
        { id: 's2', title: 'Bioassay開発', description: 'バイオ医薬品のpotency testingや中和抗体測定に向けて、ICHガイドラインを意識した細胞機能性測定法を開発します。', badge: 'GMP-Ready', page: Page.BioassayDevelopment },
        { id: 's3', title: 'サンプル測定サービス', description: '化合物、抗体、バイオ医薬品サンプルの機能評価を受託し、高スループットスクリーニングや用量反応解析を支援します。', page: Page.SampleTesting },
      ],
    },
    documents: {
      title: '製品資料',
      subtitle: '技術文書とアプリケーションサポート資料をまとめて確認',
      cards: [
        { id: 'd1', title: '製品説明書 Datasheets', description: 'ターゲットや製品カテゴリー別に製品情報を確認するための入口です。具体的なカタログ番号の最新版資料確認に利用できます。', badge: 'Datasheets', page: Page.DatasheetList },
        { id: 'd2', title: 'ユーザーマニュアル', description: '実験プロトコル、使用方法、注意点を確認し、細胞解凍から測定までの実験実施を支援します。', page: Page.UserManual },
        { id: 'd3', title: 'Qualification Data', description: '製品検証、品質管理、性能確認に関する資料を参照し、プロジェクト評価や社内記録に活用できます。', badge: 'QC', page: Page.QualificationData },
        { id: 'd4', title: 'Application Notes', description: '実験設計、データ解析、典型的な応用例を確認し、顧客提案や検討資料作成に利用できます。', page: Page.ApplicationNote },
        { id: 'd5', title: '参考文献 References', description: 'DiscoverX製品に関連する公開研究、使用例、技術背景をまとめた参考文献ライブラリです。', badge: 'Literature', page: Page.Reference },
      ],
    },
    contact: {
      title: 'お問い合わせ',
      intro: '欧陆生物制品（上海）有限公司はEurofinsグループの中国法人であり、中国市場におけるDiscoverX製品の販売、マーケティング、技術サポートを担当しています。',
      prompt: '見積、サンプル、製品資料、技術相談については、下記のメールアドレスまたはWeChat QRコードからお問い合わせください。',
      officeTitle: '上海オフィス',
      emailTitle: 'メール',
      address: '上海市闵行区浦江镇陈行公路 2168 号 8 号楼',
    },
    footer: {
      aboutTitle: 'DiscoverXについて',
      aboutText: 'Eurofins DiscoverXは、創薬研究に関連する細胞モデル、アッセイキット、ツール製品、カスタム測定サービスを提供し、初期スクリーニングから作用機序解析までを支援します。',
      coreProductsTitle: '主要製品',
      supportTitle: '技術サポート',
      contactTitle: 'お問い合わせ',
      address: '住所：上海市闵行区浦江镇陈行公路 2168 号 8 号楼',
      email: 'メール：CustomerService_DRX_China@cpt.eurofinscn.com',
      links: {
        [Page.Gpcr]: 'PathHunter GPCR細胞株',
        [Page.CytotoxicityDetail]: 'KILR細胞傷害性アッセイ',
        [Page.TargetEngagementDetail]: 'InCELLターゲット結合解析',
        [Page.DatasheetList]: '製品説明書',
        [Page.UserManual]: 'ユーザーマニュアル',
        [Page.ApplicationNote]: '技術アプリケーション資料',
      },
    },
  },
  ko: {
    nav: {
      home: '홈',
      products: '제품 유형',
      targets: '타깃',
      mechanisms: '작용기전',
      custom: '개발 서비스',
      documents: '자료',
      contacts: '문의',
      searchPlaceholder: '제품 번호, 이름 또는 타깃 검색',
      mobileSearchPlaceholder: '제품 검색',
      searchLabel: '검색',
      openMenu: '메뉴 열기',
      closeMenu: '메뉴 닫기',
      expandPrefix: '펼치기',
    },
    navSubItems: {
      [Page.CellLine]: '안정 발현 세포주',
      [Page.ExpressKit]: '즉시 사용 eXpress Kit',
      [Page.BioassayKit]: 'Bioassay Kit',
      [Page.Toolbox]: '툴 제품',
      [Page.DetectionKit]: '검출 키트',
      [Page.Reagent]: '시약 및 소모품',
      [Page.MembranePrep]: '막 제제',
      [Page.Enzyme]: '재조합 효소',
      [Page.Calixar]: 'Calixar 막단백질',
      [Page.Gpcr]: 'GPCR',
      [Page.CytokineReceptors]: '사이토카인 수용체',
      [Page.CheckpointReceptors]: '면역 체크포인트 수용체',
      [Page.KinaseReceptors]: 'RTK / CTK',
      [Page.Nhr]: '핵수용체 NHR',
      [Page.IonChannels]: '이온 채널',
      [Page.EpigeneticProteins]: '후성유전 단백질',
      [Page.DimerizationDetail]: '수용체 이량체화',
      [Page.InternalizationDetail]: '수용체 내재화',
      [Page.PpiDetail]: '단백질 상호작용',
      [Page.SignalPathwayDetail]: '신호전달',
      [Page.CytotoxicityDetail]: '세포독성',
      [Page.TpdDetail]: '표적 단백질 분해',
      [Page.TargetEngagementDetail]: '타깃 결합',
      [Page.CustomAssayDevelopment]: 'Assay 개발 서비스',
      [Page.BioassayDevelopment]: 'Bioassay 개발',
      [Page.SampleTesting]: '샘플 측정 서비스',
      [Page.DatasheetList]: '제품 설명서',
      [Page.UserManual]: '사용자 매뉴얼',
      [Page.QualificationData]: '검증 데이터',
      [Page.ApplicationNote]: '기술 응용 자료',
      [Page.Reference]: '참고문헌',
    },
    common: {
      learnMore: '자세히 보기',
      enter: 'ENTER',
      backUpper: '상위 페이지로',
      backHome: '홈으로',
      backTop: '맨 위로',
      languageLabel: '언어',
      untranslatedNotice: '이 페이지의 한국어 버전은 준비 중이며 현재 중국어 콘텐츠가 표시됩니다.',
    },
    meta: {
      [Page.Home]: { title: 'DiscoverX 한국어 사이트', description: 'DiscoverX 제품 유형, 타깃, 작용기전, 개발 서비스, 기술 자료를 소개하는 한국어 정보 사이트입니다.' },
      [Page.Products]: { title: '제품 유형', description: '안정 발현 세포주, eXpress Kit, Bioassay Kit, 시약 및 툴 제품을 확인할 수 있습니다.' },
      [Page.Targets]: { title: '타깃 선택', description: 'GPCR, 사이토카인 수용체, 면역 체크포인트, RTK, NHR 등 제품 역량을 확인할 수 있습니다.' },
      [Page.Applications]: { title: '작용기전', description: '이량체화, 내재화, PPI, 신호전달, 타깃 결합 등 assay 솔루션을 소개합니다.' },
      [Page.Custom]: { title: '개발 서비스', description: 'Assay 개발, Bioassay 개발, 샘플 측정, 기능 스크리닝 서비스를 소개합니다.' },
      [Page.Documents]: { title: '제품 자료', description: 'Datasheet, User Manual, Qualification Data, Application Note, 참고문헌을 확인할 수 있습니다.' },
      [Page.Contacts]: { title: '문의', description: '견적, 샘플, 자료, 기술 상담은 DiscoverX China 팀으로 문의하십시오.' },
      [Page.BlogList]: { title: '최신 소식', description: 'DiscoverX 제품 소개, 기술 주제, 응용 자료 업데이트를 확인할 수 있습니다.' },
      [Page.Search]: { title: '사이트 검색', description: 'DiscoverX 제품, 타깃, 기술 자료를 검색할 수 있습니다.' },
    },
    home: {
      heroTitle: 'DiscoverX 한국어 사이트',
      globalSiteLabel: '본 사이트는 정보 제공용입니다. 자세한 내용은 글로벌 공식 사이트를 참고하십시오',
      companyIntro: '欧陆生物制品（上海）有限公司은 Eurofins 그룹의 중국 법인으로, 중국 시장에서 DiscoverX 제품의 판매, 마케팅, 기술 지원을 담당합니다.',
      address: '주소: 上海市闵行区浦江镇陈行公路 2168 号 8 号楼',
      emailLabel: '이메일: ',
      contentNavTitle: '콘텐츠 내비게이션',
      cards: [
        { id: 'latest', title: '최신 소식', description: 'DiscoverX 제품 소개, 기술 논의, 응용 자료 업데이트를 확인합니다.', imageUrl: '/pic/discoverx.png', page: Page.BlogList },
        { id: 'targets', title: '타깃 선택', description: 'GPCR, 사이토카인 수용체, 면역 체크포인트, RTK / CTK 등 타깃별 제품을 찾습니다.', imageUrl: '/pic/GPCR-1150x350.jpg', page: Page.Targets },
        { id: 'products', title: '제품 유형', description: '안정 발현 세포주, eXpress Kit, Bioassay Kit, 검출 툴 및 시약을 확인합니다.', imageUrl: '/pic/Assay-Kits_Small-Card-Image.jpg', page: Page.Products },
        { id: 'mechanisms', title: '작용기전', description: '수용체 이량체화, 내재화, PPI, 신호전달, 세포독성 등 기전별 assay를 선택합니다.', imageUrl: '/pic/Dimerization.jpg', page: Page.Applications },
        { id: 'custom', title: '개발 서비스', description: 'Assay 개발, Bioassay 개발, 샘플 측정 서비스를 소개합니다.', imageUrl: '/pic/EDRX-CustomCapabilities_StreamlinedApproach-CustomizedCellLineGeneration-scaled-1.jpg', page: Page.Custom },
        { id: 'docs', title: '제품 자료', description: 'Datasheet, 사용자 매뉴얼, 검증 데이터, 응용 자료, 참고문헌을 확인합니다.', imageUrl: '/pic/Detection-Kits_Small-Card-Image.jpg', page: Page.Documents },
        { id: 'contacts', title: '문의 Contact', description: '중국어, 일본어, 한국어 문의 정보를 한 페이지에서 확인할 수 있습니다.', imageUrl: '/pic/DiscoverX Logo_Blue Discover Text w BlueOrange X.png', page: Page.Contacts },
      ],
      stats: [
        { value: '1,000+', label: 'Assay Kits' },
        { value: '1500+', label: 'Cell Lines' },
        { value: '20+', label: 'Years Experience' },
        { value: 'TOP 50', label: 'Pharma Partners' },
      ],
    },
    products: {
      title: '제품 유형',
      subtitle: '생명과학 연구와 바이오의약품 개발을 지원하는 제품 및 툴',
      cards: [
        { id: 'c1', title: '상업용 안정 발현 세포주', description: '1,000개 이상의 고유 타깃에 대응하는 기능성 안정 발현 세포주로 GPCR, 키나아제, 이온 채널, 면역 체크포인트를 포함합니다.', imageUrl: '/pic/Cell Line.png', badge: 'Validated Cell Lines', page: Page.CellLine },
        { id: 'c2', title: '즉시 사용 eXpress® Kit', description: '사전 포장된 동결 세포와 관련 시약을 포함한 즉시 사용 assay kit입니다. 해동 후 빠르게 실험을 시작할 수 있습니다.', imageUrl: '/pic/Assay-Kits_Small-Card-Image.jpg', badge: 'Assay-Ready', page: Page.ExpressKit },
        { id: 'c3', title: 'Bioassay Kit', description: '바이오의약품 potency 평가와 중화항체 측정에 최적화된 kit로 CMC 및 규제 요구를 고려한 분석에 활용됩니다.', imageUrl: '/pic/Bioassays-Kits_Small-Card-Image-1.jpg', badge: 'Potency Assay', page: Page.BioassayKit },
        { id: 'c4', title: '툴박스 제품', description: '클로닝 벡터, retro particles, parental cell line 등 맞춤형 assay 구축을 지원하는 연구 툴입니다.', imageUrl: '/pic/Toolbox-Products_Small-Card-Image.jpg', page: Page.Toolbox },
        { id: 'c5', title: '검출 키트', description: '고감도 EFC substrate, 화학발광 검출 시약 및 기능성 분석용 보조 키트를 제공합니다.', imageUrl: '/pic/Detection-Kits_Small-Card-Image.jpg', page: Page.DetectionKit },
        { id: 'c6', title: '시약 및 소모품', description: 'AssayComplete™ 세포 배양, 해동, 회복, 계대 및 plating 시약으로 실험 일관성을 지원합니다.', imageUrl: '/pic/Cell-Culture-Kits_Small-Card-Image.jpg', page: Page.Reagent },
        { id: 'c7', title: '막 제제', description: '고밀도 활성 수용체 단백질을 포함하는 고품질 막 제제로 ligand binding assay에 적합합니다.', imageUrl: '/pic/Membrane-Prep_Large-Image-310x174-1.jpg', page: Page.MembranePrep },
        { id: 'c8', title: '재조합 효소 제품', description: '키나아제, 포스파타아제, DNA helicase, 후성유전 단백질 등 in vitro 생화학 스크리닝용 효소 제품입니다.', imageUrl: '/pic/Recombinant-Proteins_Small-Card-Image.jpg', page: Page.Enzyme },
        { id: 'c9', title: 'Calixar 막단백질', description: '특허 계면활성제 기술로 천연 구조에 가까운 막단백질을 추출하여 기능 연구에 활용할 수 있습니다.', imageUrl: '/pic/calixar.jpg', badge: 'Patented Technology', page: Page.Calixar },
      ],
    },
    targets: {
      title: '타깃 선택',
      subtitle: '신약 개발과 기전 연구를 지원하는 주요 생물학적 타깃',
      cards: [
        { id: 't1', title: 'G단백질 결합 수용체 GPCR', description: '진핵생물에서 가장 크고 다양한 막 수용체군으로 광범위한 생리 과정을 조절합니다.', imageUrl: '/pic/GPCR-1150x350.jpg', page: Page.Gpcr },
        { id: 't2', title: '사이토카인 수용체', description: '인터루킨, 인터페론 등을 인식하며 면역 반응과 조혈 조절에서 핵심 역할을 합니다.', imageUrl: '/pic/Cytokines_Small-Card-Image.jpg', page: Page.CytokineReceptors },
        { id: 't3', title: '면역 체크포인트 수용체', description: 'T 세포 활성화와 면역 관용을 조절하며 종양 면역치료의 핵심 타깃입니다.', imageUrl: '/pic/Checkpoint-Modulators_Small-Card-Image.jpg', page: Page.CheckpointReceptors },
        { id: 't4', title: '키나아제 수용체 RTK / CTK', description: '세포 증식, 분화, 대사 조절에 관여하며 항암제 개발의 중요한 타깃입니다.', imageUrl: '/pic/RTKs_CTKs_Small-Card-Image.jpg', page: Page.KinaseReceptors },
        { id: 't5', title: '핵호르몬 수용체 NHR', description: '리간드 의존성 전사인자로 유전자 발현을 조절하며 대사, 발생, 염증 반응에 관여합니다.', imageUrl: '/pic/Nuclear-Hormones_Small-Card-Image-1.jpg', page: Page.Nhr },
        { id: 't6', title: '이온 채널', description: '세포막을 통한 이온 흐름을 제어하여 신경전달, 근수축, 세포 흥분성을 조절합니다.', imageUrl: '/pic/Ion-Channels_Large-Image-310x174-1.jpg', page: Page.IonChannels },
        { id: 't7', title: '후성유전 단백질', description: '히스톤 변형 효소와 DNA 메틸화 효소 등 DNA 서열 변화 없이 유전자 발현을 조절하는 인자입니다.', imageUrl: '/pic/Nuclear-Hormones_Small-Card-Image-1.jpg', page: Page.EpigeneticProteins },
      ],
    },
    mechanisms: {
      title: '작용기전',
      subtitle: '약물 작용의 분자 기전과 세포 반응 분석',
      cards: [
        { id: 'm4', title: '신호전달 경로', description: 'NF-κB, STAT, MAPK 등 주요 신호 분자의 활성화, 전사, 분해, 핵 내 이동을 모니터링합니다.', imageUrl: '/pic/Signaling-Pathways_Small-Card-Image.jpg', page: Page.SignalPathwayDetail },
        { id: 'm5', title: '세포독성 효과', description: '항체, ADC, CAR-T, 이중특이성 항체 등으로 유도되는 표적 세포 사멸을 평가합니다.', imageUrl: '/pic/Cytotoxicity_Small-Card-Image.jpg', page: Page.CytotoxicityDetail },
        { id: 'm6', title: '표적 단백질 분해 TPD', description: 'PROTAC 또는 molecular glue로 유도되는 표적 단백질 분해 동역학을 모니터링합니다.', imageUrl: '/pic/Degradation_Small-Card-Image.jpg', page: Page.TpdDetail },
        { id: 'm7', title: '타깃 결합 Target Engagement', description: 'InCELL 기술 등을 이용해 살아있는 세포 내에서 소분자와 표적 단백질의 결합을 측정합니다.', imageUrl: '/pic/Target-Engagement_Large-Card-Image.jpg', page: Page.TargetEngagementDetail },
        { id: 'm2', title: '수용체 내재화', description: '수용체가 세포 표면에서 엔도솜으로 이동하는 과정을 추적하여 ADC 및 GPCR 연구에 활용합니다.', imageUrl: '/pic/Internalization.jpg', page: Page.InternalizationDetail },
        { id: 'm1', title: '수용체 이량체화', description: '수용체 활성화 후 동종 또는 이종 이량체화를 모니터링하여 신호전달 시작 단계를 분석합니다.', imageUrl: '/pic/Dimerization.jpg', page: Page.DimerizationDetail },
        { id: 'm3', title: '단백질 상호작용 PPI', description: '단백질 복합체의 형성과 해리를 측정하여 신호 경로의 분자 기반을 분석합니다.', imageUrl: '/pic/PPI.jpg', page: Page.PpiDetail },
      ],
    },
    custom: {
      title: '개발 서비스',
      subtitle: '맞춤형 연구개발과 기술 지원으로 신약 개발 속도를 높입니다',
      cards: [
        { id: 's1', title: 'Assay 개발 서비스', description: '타깃 클로닝부터 안정 발현 세포주 스크리닝과 assay 조건 최적화까지 전 과정 기술 지원을 제공합니다.', badge: 'Custom Development', page: Page.CustomAssayDevelopment },
        { id: 's2', title: 'Bioassay 개발', description: '바이오의약품 potency 평가 요구에 맞춰 ICH 가이드라인을 고려한 세포 기능성 assay를 개발합니다.', badge: 'GMP-Ready', page: Page.BioassayDevelopment },
        { id: 's3', title: '샘플 측정 서비스', description: '화합물, 항체, 생물학적 제제의 기능 평가를 제공하며 고속 스크리닝과 농도 반응 분석을 지원합니다.', page: Page.SampleTesting },
      ],
    },
    documents: {
      title: '제품 자료',
      subtitle: '기술 문서와 응용 지원 자료를 한 곳에서 확인',
      cards: [
        { id: 'd1', title: '제품 설명서 Datasheets', description: '타깃과 제품 상황별 인덱스를 제공하며, 구체적인 카탈로그 번호 자료의 최신 버전을 확인할 수 있습니다.', badge: 'Datasheets', page: Page.DatasheetList },
        { id: 'd2', title: '사용자 매뉴얼 User Manuals', description: '실험 절차, 사용 방법, 주의사항을 확인하여 실험을 원활하게 진행할 수 있습니다.', page: Page.UserManual },
        { id: 'd3', title: '검증 데이터 Qualification Data', description: '제품 검증 및 품질관리 관련 자료를 확인하여 프로젝트 평가와 내부 기록을 지원합니다.', badge: 'QC', page: Page.QualificationData },
        { id: 'd4', title: '기술 응용 가이드 Application Notes', description: '실험 설계, 데이터 분석 제안, 대표 응용 사례를 확인할 수 있습니다.', page: Page.ApplicationNote },
        { id: 'd5', title: '참고문헌 References', description: 'DiscoverX 제품 관련 참고문헌과 공개 연구 정보를 정리합니다.', badge: 'Literature', page: Page.Reference },
      ],
    },
    contact: {
      title: '문의',
      intro: '欧陆生物制品（上海）有限公司은 Eurofins 그룹의 중국 법인으로 DiscoverX 제품의 판매, 마케팅, 기술 지원을 담당합니다.',
      prompt: '견적, 샘플 요청 또는 기술 상담이 필요하시면 아래 이메일로 문의하거나 WeChat QR 코드를 스캔해 주십시오.',
      officeTitle: '상하이 사무소',
      emailTitle: '이메일',
      address: '上海市闵行区浦江镇陈行公路 2168 号 8 号楼',
    },
    footer: {
      aboutTitle: '회사 소개',
      aboutText: 'Eurofins DiscoverX는 신약 개발 관련 세포 모델, assay kit, 툴 제품 및 맞춤형 측정 서비스를 제공하여 초기 스크리닝부터 기전 검증까지 지원합니다.',
      coreProductsTitle: '주요 제품',
      supportTitle: '기술 지원',
      contactTitle: '문의',
      address: '주소: 上海市闵行区浦江镇陈行公路 2168 号 8 号楼',
      email: '이메일: CustomerService_DRX_China@cpt.eurofinscn.com',
      links: {
        [Page.Gpcr]: 'PathHunter GPCR 세포주',
        [Page.CytotoxicityDetail]: 'KILR 세포독성 모니터링',
        [Page.TargetEngagementDetail]: 'InCELL 타깃 결합 분석',
        [Page.DatasheetList]: '제품 설명서',
        [Page.UserManual]: '사용자 매뉴얼',
        [Page.ApplicationNote]: '기술 응용 자료',
      },
    },
  },
};

export const getLocale = (language: Language): SiteLocale => locales[language] ?? locales.zh;
