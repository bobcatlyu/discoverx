import React from 'react';
import { Language, Page } from '../types';

interface LocalizedProductDetailProps {
  language: Exclude<Language, 'zh'>;
  page: Page;
  onNavigate?: (page: Page) => void;
}

interface ProductSection {
  title: string;
  body: string;
  items: string[];
}

interface ProductContent {
  title: string;
  subtitle: string;
  intro: string[];
  highlightsTitle: string;
  highlights: string[];
  portfolioTitle: string;
  sections: ProductSection[];
  note: string;
  ctaTitle: string;
  ctaDescription: string;
  ctaButton: string;
}

const content: Record<Exclude<Language, 'zh'>, Partial<Record<Page, ProductContent>>> = {
  ja: {
    [Page.CellLine]: {
      title: '商用安定細胞株',
      subtitle: '1,500 種以上の検証済みエンジニアード細胞株ポートフォリオ',
      intro: [
        'Eurofins DiscoverX は、GPCR、サイトカイン受容体、キナーゼ、免疫チェックポイント、イオンチャネルなど主要な創薬ターゲットを対象とした、機能評価用の安定細胞株を提供しています。',
        'これらの細胞株は薬物とターゲットの相互作用機序（MOA）に基づいて設計され、スクリーニング、機能特性評価、バイオ医薬品の効力評価に使用できます。',
      ],
      highlightsTitle: '製品ハイライト',
      highlights: ['MOA に関連した細胞ベースリードアウト', '安定性と機能を確認済みのクローン細胞株', '96 / 384 ウェル形式と自動化ワークフローに対応', '低い導入ハードルで既存の創薬プロセスに組み込み可能'],
      portfolioTitle: '製品形式と主な用途',
      sections: [
        { title: 'Cell Line Assay Kit', body: '継代可能な安定細胞株、培地、凍結・解凍・播種関連試薬、検出試薬、標準プロトコルを含むセット形式です。', items: ['安定細胞株 2 バイアル', 'AssayComplete 関連試薬', '高感度検出キット', '標準化プロトコル'] },
        { title: '継代可能な安定細胞株', body: 'キット形式ではなく単独で供給される細胞株です。イオンチャネル、カルシウムアッセイ細胞株、DIY 用親細胞株などに適しています。', items: ['長期プロジェクト向け', '社内プロトコルへの組み込みが容易', '複数バッチ評価に対応'] },
        { title: 'アッセイレディ凍結細胞', body: '解凍後すぐに播種して測定できる形式で、細胞培養による変動を抑え、HTS を迅速に開始できます。', items: ['細胞培養工程を削減', '短期間で機能データを取得', '自動化スクリーニングに適合'] },
      ],
      note: 'GPCR、キナーゼ、免疫チェックポイント、サイトカイン受容体、NHR、エピジェネティックタンパク質、イオンチャネルなどのターゲットカテゴリに対応します。',
      ctaTitle: 'ターゲットに合う細胞株を探しますか？',
      ctaDescription: 'ターゲット名、薬剤形式、必要なリードアウトをお知らせいただければ、適切な製品形式を確認できます。',
      ctaButton: '技術担当に相談',
    },
    [Page.ExpressKit]: {
      title: 'アッセイレディ eXpress Kit',
      subtitle: '細胞培養なしで開始できる迅速な RTU 細胞ベースアッセイ',
      intro: [
        'eXpress Kit は、凍結保存済みの RTU 細胞、最適化試薬、プレート、詳細プロトコルを含む即用型の細胞ベースアッセイキットです。',
        'ターゲット検証、ヒット探索、リード最適化、機能または結合アッセイに使用でき、細胞培養工程を大幅に削減します。',
      ],
      highlightsTitle: '製品ハイライト',
      highlights: ['解凍、播種、測定という短いワークフロー', '標準的なルミノメーターで読み取り可能', '小分子、抗体、ペプチド、バイオ医薬品候補に対応', '1,000 種以上のターゲット特異的キットを提供'],
      portfolioTitle: '対象ターゲットとアプリケーション',
      sections: [
        { title: '創薬初期評価', body: 'ターゲット特性評価、一次・二次スクリーニング、直交評価に適しています。', items: ['ターゲット検証', 'Hit finding', 'リード最適化'] },
        { title: '機能・結合アッセイ', body: 'MOA に基づく細胞応答またはターゲット結合を迅速に評価できます。', items: ['GPCR', 'キナーゼ / RTK / CTK', 'サイトカイン受容体', '免疫チェックポイント'] },
        { title: 'ワークフロー', body: '細胞を解凍し、プレートに播種して化合物またはサンプルを添加し、検出試薬を加えて発光測定します。', items: ['Thaw cells', 'Plate and incubate', 'Add compound / substrate', 'Read on luminometer'] },
      ],
      note: 'eXpress Kit は研究用途向けです。QC ロットリリースや効力試験には Bioassay Kit を検討してください。',
      ctaTitle: 'eXpress Kit のターゲットリストを確認しますか？',
      ctaDescription: 'ターゲット名または作用機序をお知らせください。該当するキット候補を確認します。',
      ctaButton: '製品候補を問い合わせる',
    },
    [Page.BioassayKit]: {
      title: 'Bioassay Kit',
      subtitle: 'バイオ医薬品の効力、機能特性評価、安定性・同等性研究向けキット',
      intro: [
        'Bioassay は、薬物の作用機序を反映する生物学的システムを用いて生物活性または効力を測定する分析法です。',
        'Eurofins DiscoverX の Bioassay Kit は、ICH ガイドライン、上市済み先行品または標準品を用いて最適化・確認されており、アッセイ開発期間を短縮できます。',
      ],
      highlightsTitle: '製品ハイライト',
      highlights: ['MOA に関連した機能的リードアウト', '効力試験、中和抗体評価、安定性研究、同等性研究に対応', '均一系で自動化しやすいプロトコル', '発見段階から QC ロットリリースまで利用可能'],
      portfolioTitle: '製品ポートフォリオ',
      sections: [
        { title: 'Qualified Bioassay Kit', body: '先行品または標準品で最適化・確認済みのキットです。', items: ['GLP-1R / GIPR アゴニスト', 'VEGF / TNF / IL 系バイオ医薬品', 'PD-1 / PD-L1 関連アッセイ'] },
        { title: 'Target-based Bioassay Kit', body: 'ターゲットまたは MOA を基準に設計された即用型キットです。', items: ['サイトカイン受容体', '免疫チェックポイント', 'GPCR', 'RTK / SH2 recruitment'] },
        { title: 'Early Access Bioassay Kit', body: '開発初期段階のターゲットに対応するキットで、プロジェクト進行を早める目的で利用できます。', items: ['新規ターゲット評価', '効力試験', '中和抗体評価'] },
      ],
      note: '公式製品名、薬剤名、ターゲット名は識別性を保つため英語表記を残しています。',
      ctaTitle: '候補分子に合う Bioassay を選びますか？',
      ctaDescription: '薬剤名、ターゲット、MOA、用途を共有いただければ、候補キットと必要な確認項目を整理します。',
      ctaButton: 'Bioassay を相談',
    },
    [Page.Toolbox]: {
      title: 'ツールボックス製品',
      subtitle: 'カスタム細胞株と細胞機能アッセイを社内で構築するためのツール群',
      intro: [
        'DIY ツールボックス製品は、特定ターゲットや用途に合わせた細胞株、細胞機能アッセイを社内で構築するための製品です。',
        'Eurofins DiscoverX の EFC 技術を活用し、タンパク質相互作用、化合物ターゲット結合、細胞毒性、受容体二量体化、シグナル伝達、タンパク質移行などを評価できます。',
      ],
      highlightsTitle: '製品ハイライト',
      highlights: ['段階的な手順と設計ガイドにより導入しやすい', '任意の発現ベクターや細胞背景で柔軟に設計可能', 'PathHunter または KILR retroparticles による安定導入に対応', '親細胞株と検出試薬を組み合わせて独自アッセイを構築可能'],
      portfolioTitle: '製品カテゴリ',
      sections: [
        { title: 'クローニングベクター', body: 'ProLink、ProLabel、EA などのタグ構築に使用するベクター群です。', items: ['ProLink Cloning Vector Bundle', 'ProLabel Cloning Vector Bundle', 'pCMV ベクター'] },
        { title: 'Retroparticles', body: '安定導入を迅速化するパッケージ済みウイルス粒子です。', items: ['KILR Retroparticles', 'PathHunter β-Arrestin Retroparticles'] },
        { title: '親細胞株', body: 'EA 融合タンパク質を安定発現する親細胞株です。ED タグ付きターゲットを導入して機能評価に使用します。', items: ['CHO-K1', 'HEK 293', 'U2OS'] },
      ],
      note: 'カスタム設計が必要な場合は、ターゲット、細胞背景、目的のリードアウトを明確にして検討します。',
      ctaTitle: '自社アッセイ構築の設計を相談しますか？',
      ctaDescription: '既存の細胞背景や発現コンストラクト情報があれば、必要なツール製品を確認できます。',
      ctaButton: 'ツール構成を相談',
    },
    [Page.DetectionKit]: {
      title: '検出キット',
      subtitle: 'PathHunter、HitHunter、InCELL、KILR アッセイ向けの高感度検出試薬',
      intro: [
        'Eurofins DiscoverX の検出キットは、エンジニアード細胞株ポートフォリオと合わせて開発され、さまざまな MOA とターゲットカテゴリに対応する定量的リードアウトを提供します。',
        '検出キットは単独購入または細胞株アッセイキットの一部として利用でき、安定細胞株や培養関連試薬と組み合わせて使用します。',
      ],
      highlightsTitle: '製品ハイライト',
      highlights: ['高感度、低バックグラウンド、再現性の高いシグナル', 'ウォッシュ不要の均一系プロトコル', '化学発光または蛍光リードアウトに対応', '96、384、1536、3456 ウェル形式へ拡張可能'],
      portfolioTitle: '検出キットポートフォリオ',
      sections: [
        { title: 'HitHunter cAMP Assay', body: '細胞内 cAMP レベルの変化を測定する EFC ベースの均一系競合免疫アッセイです。', items: ['Biologics format', 'Small molecule format', 'HTS bulk format'] },
        { title: 'PathHunter Detection Kit', body: 'EA / PK タグを含む PathHunter 細胞株に対応する汎用検出基質です。', items: ['Standard detection', 'Flash detection', 'Bioassay detection'] },
        { title: 'InCELL / KILR Detection Kit', body: '細胞内ターゲット結合や細胞毒性評価に対応する検出試薬です。', items: ['InCELL target engagement', 'KILR cytotoxicity', 'High-throughput formats'] },
      ],
      note: 'カタログ番号、容量、データポイント数は公式表記をそのまま使用してください。',
      ctaTitle: '既存細胞株に合う検出キットを確認しますか？',
      ctaDescription: '使用中の細胞株、プレート形式、希望データポイント数を共有してください。',
      ctaButton: '検出キットを問い合わせる',
    },
    [Page.Reagent]: {
      title: '試薬・消耗品',
      subtitle: '細胞培養、播種、凍結保存、対照リガンド、プレート類を含む AssayComplete 関連製品',
      intro: [
        'AssayComplete 細胞培養試薬と関連試薬は、細胞培養準備、細胞株維持、細胞機能アッセイを支援するために設計されています。',
        '各試薬は Eurofins DiscoverX のエンジニアード細胞株と組み合わせて最適化・機能確認され、再現性の高いデータ取得を支援します。',
      ],
      highlightsTitle: '製品ハイライト',
      highlights: ['細胞形態、細胞活性、アッセイ性能を考慮した最適化処方', '細胞株キット、eXpress Kit、Bioassay Kit と組み合わせて利用可能', 'ロットごとの品質確認により一貫した実験結果を支援', '培地、解離、凍結、解凍、播種、対照リガンドまで幅広く対応'],
      portfolioTitle: '試薬カテゴリ',
      sections: [
        { title: '細胞培養・処理試薬', body: '培地、細胞解離、凍結保存、解凍、播種に関する試薬です。', items: ['Cell Culture Kits', 'Cell Detachment', 'Freezing / Thawing Reagents', 'Cell Plating Reagents'] },
        { title: 'Starter Packs', body: '特定のチェックポイント、リガンド提示、クラスタリング細胞株向けのスターターパックです。', items: ['Checkpoint clustering', 'Checkpoint ligand', 'Cell line starter packs'] },
        { title: '対照リガンド・消耗品', body: 'GPCR やサイトカイン関連評価に使用する対照リガンド、プレート、抗生物質、抗体、バッファーです。', items: ['Control ligands', 'Assay plates', 'Antibiotics', 'Buffers and antibodies'] },
      ],
      note: '大容量包装や特定ロットの確認が必要な場合は、用途と必要数量を合わせて確認します。',
      ctaTitle: '試薬構成を整理しますか？',
      ctaDescription: '対象の細胞株またはアッセイキットが分かれば、必要な関連試薬をまとめて確認できます。',
      ctaButton: '試薬を問い合わせる',
    },
    [Page.MembranePrep]: {
      title: '膜標品',
      subtitle: '結合・機能評価向けの GPCR とイオンチャネル膜標品',
      intro: [
        '膜標品は、膜タンパク質が疾患や薬物応答にどのように関与するかを調べるために使用されます。',
        'Eurofins DiscoverX の GPCR およびイオンチャネル膜標品は、ターゲットタンパク質の発現レベルが評価に適するよう最適化された安定細胞株から調製されています。',
      ],
      highlightsTitle: '製品ハイライト',
      highlights: ['高い S/N 比と特異的なリガンド結合能', '安定クローン細胞株由来でバッチ間一貫性を確保', '細胞培養なしで結合実験を開始可能', '飽和結合、競合結合、GTPγS 機能評価に利用可能'],
      portfolioTitle: '膜標品ポートフォリオ',
      sections: [
        { title: 'イオンチャネル膜標品', body: 'hERG などのイオンチャネルターゲットに対応する膜標品です。', items: ['PrecisION hERG', 'nAChR α3/β4'] },
        { title: 'GPCR 膜標品', body: 'ChemiScreen シリーズを中心に、アデノシン、アドレナリン、ケモカイン、GLP-1 など多様な GPCR に対応します。', items: ['Radioligand binding', 'Competitive binding', 'GTPγS functional assays'] },
        { title: '主な用途', body: 'Kd、Ki、受容体親和性、順位付け、候補分子の機能性評価に使用できます。', items: ['Small molecule screening', 'Antibody ranking', 'Binding affinity measurement'] },
      ],
      note: '特定サブタイプや大容量包装が必要な場合は、ターゲット名と試験形式をお知らせください。',
      ctaTitle: '膜標品のターゲットを確認しますか？',
      ctaDescription: 'ターゲット、リガンド、試験形式を共有いただければ、該当製品を確認します。',
      ctaButton: '膜標品を問い合わせる',
    },
    [Page.Enzyme]: {
      title: '組換え酵素',
      subtitle: '阻害剤スクリーニング向けの精製組換えタンパク質ポートフォリオ',
      intro: [
        'Eurofins DiscoverX は、キナーゼ、ホスファターゼ、ヘリカーゼ、ユビキチン関連酵素、エピジェネティックタンパク質など、幅広い活性組換えタンパク質を提供しています。',
        '旧 Millipore / Upstate のキナーゼ製品群を統合し、ヒト kinome の主要部分をカバーする活性、変異型、失活型の組換えキナーゼを提供します。',
      ],
      highlightsTitle: '製品ハイライト',
      highlights: ['520 種以上の高品質な酵素・関連タンパク質', '昆虫、哺乳類、細菌など最適な発現系で生産', '高純度、高比活性、バッチ間一貫性を重視', '単回実験から HTS まで複数包装に対応'],
      portfolioTitle: '製品カテゴリ',
      sections: [
        { title: '組換えキナーゼ', body: '400 種以上の活性組換えキナーゼを提供し、阻害剤スクリーニングや酵素活性測定に使用できます。', items: ['Active kinases', 'Mutant kinases', 'Inactive kinases'] },
        { title: 'ホスファターゼ・DNA ヘリカーゼ', body: 'リン酸化制御、DNA / RNA 代謝、修復、転写に関わる酵素を提供します。', items: ['Recombinant phosphatases', 'DNA helicases', 'Ubiquitin pathway proteins'] },
        { title: 'キナーゼ活性検出キット', body: 'ADP accumulation assay や preloaded kinase assay kit により、阻害剤評価の導入を簡便にします。', items: ['ADP Accumulation Assays', 'HitHunter Kinase Assay Kit', 'Bulk and HTS formats'] },
      ],
      note: '特定キナーゼ、変異体、エピジェネティックタンパク質が見つからない場合は、リスト確認またはカスタム供給を検討します。',
      ctaTitle: '必要な酵素リストを確認しますか？',
      ctaDescription: 'ターゲット名、変異、活性状態、必要量を共有してください。',
      ctaButton: '酵素製品を問い合わせる',
    },
    [Page.Calixar]: {
      title: 'Eurofins CALIXAR カスタムタンパク質サービス',
      subtitle: '天然構造と機能を保つ高品質な膜タンパク質・可溶性タンパク質の生産',
      intro: [
        'Eurofins CALIXAR は Eurofins DiscoverX の一部であり、天然に近い構造と機能を持つ組換えタンパク質の生産・安定化に特化した技術を提供します。',
        '独自の可溶化・安定化技術により、膜タンパク質や複雑な可溶性タンパク質を創薬、抗体探索、ワクチン、構造生物学、機能評価に利用できる品質で提供します。',
      ],
      highlightsTitle: 'サービスハイライト',
      highlights: ['GPCR、イオンチャネル、トランスポーターなどの膜タンパク質に対応', 'キナーゼ、ホスファターゼ、ヘリカーゼなどの可溶性タンパク質にも対応', '独自の界面活性剤、ポリマー、安定化試薬を活用', 'Cryo-EM、SPR、MST、ELISA、HTS などの用途を想定した品質評価'],
      portfolioTitle: 'カスタム生産ワークフロー',
      sections: [
        { title: '構築設計・発現', body: '遺伝子最適化、タグ設計、発現宿主選択を行い、膜タンパク質または可溶性タンパク質の発現を進めます。', items: ['Mammalian cells', 'Insect cells', 'Yeast', 'Bacteria'] },
        { title: '可溶化・安定化・精製', body: '独自試薬と精製プロセスにより、全長で活性を持つタンパク質の回収を目指します。', items: ['Detergents', 'Nanodiscs', 'Proteoliposomes', 'Affinity / SEC / IEX purification'] },
        { title: '特性評価・スケールアップ', body: '結合、酵素活性、安定性、純度を確認し、必要に応じてスケールアップ生産を行います。', items: ['Thermal shift', 'Ligand binding', 'ELISA', 'Large-scale production'] },
      ],
      note: '研究用途、抗体探索、ワクチン、構造解析、機能評価の要件に応じてプロジェクト設計を行います。',
      ctaTitle: 'カスタムタンパク質プロジェクトを相談しますか？',
      ctaDescription: 'タンパク質名、発現宿主、用途、必要量、品質要件を共有してください。',
      ctaButton: 'CALIXAR サービスを相談',
    },
  },
  ko: {
    [Page.CellLine]: {
      title: '상용 안정 세포주',
      subtitle: '1,500종 이상의 검증된 엔지니어링 세포주 포트폴리오',
      intro: [
        'Eurofins DiscoverX는 GPCR, 사이토카인 수용체, 키나아제, 면역 체크포인트, 이온 채널 등 주요 신약개발 타깃을 위한 기능 평가용 안정 세포주를 제공합니다.',
        '이 세포주는 약물과 타깃의 상호작용 기전(MOA)에 맞춰 설계되며, 스크리닝, 기능 특성 분석, 바이오의약품 효능 평가에 사용할 수 있습니다.',
      ],
      highlightsTitle: '제품 하이라이트',
      highlights: ['MOA와 관련된 세포 기반 리드아웃', '안정성과 기능이 확인된 클론 세포주', '96 / 384 well 형식 및 자동화 워크플로 지원', '기존 신약개발 프로세스에 쉽게 통합 가능'],
      portfolioTitle: '제품 형식 및 주요 용도',
      sections: [
        { title: 'Cell Line Assay Kit', body: '계대 가능한 안정 세포주, 배지, 동결·해동·파종 관련 시약, 검출 시약, 표준 프로토콜을 포함한 키트 형식입니다.', items: ['안정 세포주 2 바이알', 'AssayComplete 관련 시약', '고감도 검출 키트', '표준화 프로토콜'] },
        { title: '계대 가능한 안정 세포주', body: '키트가 아닌 단독 공급 형식입니다. 이온 채널, 칼슘 분석 세포주, DIY용 부모 세포주 등에 적합합니다.', items: ['장기 프로젝트에 적합', '사내 프로토콜에 쉽게 적용', '다중 배치 평가 지원'] },
        { title: 'Assay-ready 동결 세포', body: '해동 후 바로 파종하여 측정할 수 있어 세포 배양에 따른 변동을 줄이고 HTS를 빠르게 시작할 수 있습니다.', items: ['세포 배양 단계 감소', '단기간 내 기능 데이터 확보', '자동화 스크리닝에 적합'] },
      ],
      note: 'GPCR, 키나아제, 면역 체크포인트, 사이토카인 수용체, NHR, 후성유전 단백질, 이온 채널 등 다양한 타깃 범주를 지원합니다.',
      ctaTitle: '타깃에 맞는 세포주를 찾으시나요?',
      ctaDescription: '타깃명, 약물 형식, 필요한 리드아웃을 알려주시면 적합한 제품 형식을 확인할 수 있습니다.',
      ctaButton: '기술 담당자에게 문의',
    },
    [Page.ExpressKit]: {
      title: 'Assay-ready eXpress Kit',
      subtitle: '세포 배양 없이 바로 시작할 수 있는 RTU 세포 기반 분석 키트',
      intro: [
        'eXpress Kit는 동결 보존된 RTU 세포, 최적화 시약, 플레이트, 상세 프로토콜을 포함한 즉시 사용 가능한 세포 기반 분석 키트입니다.',
        '타깃 검증, hit 탐색, lead 최적화, 기능 또는 결합 분석에 사용할 수 있으며 세포 배양 단계를 크게 줄입니다.',
      ],
      highlightsTitle: '제품 하이라이트',
      highlights: ['해동, 파종, 측정으로 이어지는 간단한 워크플로', '표준 luminometer로 판독 가능', '소분자, 항체, 펩타이드, 바이오의약품 후보물질 평가 지원', '1,000종 이상의 타깃 특이적 키트 제공'],
      portfolioTitle: '지원 타깃 및 응용',
      sections: [
        { title: '초기 신약개발 평가', body: '타깃 특성 분석, 1차·2차 스크리닝, orthogonal 평가에 적합합니다.', items: ['타깃 검증', 'Hit finding', 'Lead optimization'] },
        { title: '기능 및 결합 분석', body: 'MOA 기반 세포 반응 또는 타깃 결합을 빠르게 평가할 수 있습니다.', items: ['GPCR', 'Kinase / RTK / CTK', 'Cytokine receptors', 'Immune checkpoints'] },
        { title: '워크플로', body: '세포를 해동하고 플레이트에 파종한 뒤 화합물 또는 샘플을 처리하고 검출 시약을 추가해 발광을 측정합니다.', items: ['Thaw cells', 'Plate and incubate', 'Add compound / substrate', 'Read on luminometer'] },
      ],
      note: 'eXpress Kit는 연구용입니다. QC 배치 방출이나 potency testing에는 Bioassay Kit를 검토하세요.',
      ctaTitle: 'eXpress Kit 타깃 목록을 확인할까요?',
      ctaDescription: '타깃명 또는 작용 기전을 알려주시면 해당 키트 후보를 확인합니다.',
      ctaButton: '제품 후보 문의',
    },
    [Page.BioassayKit]: {
      title: 'Bioassay Kit',
      subtitle: '바이오의약품 potency, 기능 특성 분석, 안정성 및 비교동등성 연구용 키트',
      intro: [
        'Bioassay는 약물의 작용 기전을 반영하는 생물학적 시스템을 이용해 생물학적 활성 또는 효능을 측정하는 분석법입니다.',
        'Eurofins DiscoverX Bioassay Kit는 ICH 가이드라인, 출시된 오리지널 의약품 또는 표준품으로 최적화 및 확인되어 분석 개발 기간을 줄일 수 있습니다.',
      ],
      highlightsTitle: '제품 하이라이트',
      highlights: ['MOA와 관련된 기능성 리드아웃', 'Potency, 중화항체, 안정성, 비교동등성 연구 지원', '균일계이며 자동화에 적합한 프로토콜', '발견 단계부터 QC 배치 방출 시험까지 활용 가능'],
      portfolioTitle: '제품 포트폴리오',
      sections: [
        { title: 'Qualified Bioassay Kit', body: '오리지널 의약품 또는 표준품으로 최적화 및 확인된 키트입니다.', items: ['GLP-1R / GIPR agonist', 'VEGF / TNF / IL 계열 바이오의약품', 'PD-1 / PD-L1 관련 분석'] },
        { title: 'Target-based Bioassay Kit', body: '타깃 또는 MOA 기준으로 설계된 즉시 사용 가능한 키트입니다.', items: ['Cytokine receptors', 'Immune checkpoints', 'GPCR', 'RTK / SH2 recruitment'] },
        { title: 'Early Access Bioassay Kit', body: '개발 초기 타깃에 대응하는 키트로 프로젝트 진행을 빠르게 돕습니다.', items: ['신규 타깃 평가', 'Potency testing', '중화항체 평가'] },
      ],
      note: '공식 제품명, 약물명, 타깃명은 식별성을 위해 영어 표기를 유지합니다.',
      ctaTitle: '후보물질에 맞는 Bioassay를 선택할까요?',
      ctaDescription: '약물명, 타깃, MOA, 사용 목적을 공유해 주시면 후보 키트와 확인 항목을 정리합니다.',
      ctaButton: 'Bioassay 문의',
    },
    [Page.Toolbox]: {
      title: '툴박스 제품',
      subtitle: '맞춤형 세포주와 세포 기능 분석을 사내에서 구축하기 위한 도구',
      intro: [
        'DIY 툴박스 제품은 특정 타깃과 응용 목적에 맞춘 세포주 및 세포 기능 분석 시스템을 사내에서 구축하도록 돕습니다.',
        'Eurofins DiscoverX의 EFC 기술을 활용해 단백질 상호작용, 화합물-타깃 결합, 세포독성, 수용체 이합체화, 신호전달, 단백질 이동 등을 평가할 수 있습니다.',
      ],
      highlightsTitle: '제품 하이라이트',
      highlights: ['단계별 절차와 설계 가이드로 쉽게 도입', '임의의 발현 벡터와 세포 배경에 맞춰 유연하게 설계', 'PathHunter 또는 KILR retroparticles를 통한 안정 도입 지원', '부모 세포주와 검출 시약을 조합해 자체 분석 구축 가능'],
      portfolioTitle: '제품 카테고리',
      sections: [
        { title: 'Cloning vectors', body: 'ProLink, ProLabel, EA 등 태그 구축에 사용하는 벡터 제품군입니다.', items: ['ProLink Cloning Vector Bundle', 'ProLabel Cloning Vector Bundle', 'pCMV vectors'] },
        { title: 'Retroparticles', body: '안정 도입을 빠르게 하는 포장된 바이러스 입자입니다.', items: ['KILR Retroparticles', 'PathHunter β-Arrestin Retroparticles'] },
        { title: 'Parental cell lines', body: 'EA 융합 단백질을 안정적으로 발현하는 부모 세포주입니다. ED 태그 타깃을 도입해 기능 분석에 사용합니다.', items: ['CHO-K1', 'HEK 293', 'U2OS'] },
      ],
      note: '맞춤 설계가 필요한 경우 타깃, 세포 배경, 원하는 리드아웃을 명확히 정리해 검토합니다.',
      ctaTitle: '사내 분석 구축 설계를 상담할까요?',
      ctaDescription: '기존 세포 배경이나 발현 construct 정보가 있으면 필요한 툴 제품을 확인할 수 있습니다.',
      ctaButton: '툴 구성 문의',
    },
    [Page.DetectionKit]: {
      title: '검출 키트',
      subtitle: 'PathHunter, HitHunter, InCELL, KILR 분석용 고감도 검출 시약',
      intro: [
        'Eurofins DiscoverX 검출 키트는 엔지니어링 세포주 포트폴리오와 함께 개발되어 다양한 MOA와 타깃 범주에 맞는 정량 리드아웃을 제공합니다.',
        '검출 키트는 단독 구매 또는 세포주 분석 키트의 일부로 사용할 수 있으며, 안정 세포주 및 배양 관련 시약과 조합됩니다.',
      ],
      highlightsTitle: '제품 하이라이트',
      highlights: ['고감도, 낮은 배경, 재현성 높은 신호', '세척이 필요 없는 균일계 프로토콜', '발광 또는 형광 리드아웃 지원', '96, 384, 1536, 3456 well 형식으로 확장 가능'],
      portfolioTitle: '검출 키트 포트폴리오',
      sections: [
        { title: 'HitHunter cAMP Assay', body: '세포 내 cAMP 수준 변화를 측정하는 EFC 기반 균일 경쟁 면역분석입니다.', items: ['Biologics format', 'Small molecule format', 'HTS bulk format'] },
        { title: 'PathHunter Detection Kit', body: 'EA / PK 태그를 포함하는 PathHunter 세포주에 대응하는 범용 검출 기질입니다.', items: ['Standard detection', 'Flash detection', 'Bioassay detection'] },
        { title: 'InCELL / KILR Detection Kit', body: '세포 내 타깃 결합과 세포독성 평가에 대응하는 검출 시약입니다.', items: ['InCELL target engagement', 'KILR cytotoxicity', 'High-throughput formats'] },
      ],
      note: '카탈로그 번호, 용량, 데이터 포인트 수는 공식 표기를 그대로 사용하세요.',
      ctaTitle: '기존 세포주에 맞는 검출 키트를 확인할까요?',
      ctaDescription: '사용 중인 세포주, 플레이트 형식, 원하는 데이터 포인트 수를 공유해 주세요.',
      ctaButton: '검출 키트 문의',
    },
    [Page.Reagent]: {
      title: '시약 및 소모품',
      subtitle: '세포 배양, 파종, 동결 보존, 대조 리간드, 플레이트를 포함한 AssayComplete 관련 제품',
      intro: [
        'AssayComplete 세포 배양 시약과 관련 시약은 세포 배양 준비, 세포주 유지, 세포 기능 분석을 지원하도록 설계되었습니다.',
        '각 시약은 Eurofins DiscoverX 엔지니어링 세포주와 함께 최적화 및 기능 확인되어 재현성 높은 데이터 확보를 돕습니다.',
      ],
      highlightsTitle: '제품 하이라이트',
      highlights: ['세포 형태, 세포 활성, 분석 성능을 고려한 최적화 조성', '세포주 키트, eXpress Kit, Bioassay Kit와 함께 사용 가능', '로트별 품질 확인으로 일관된 실험 결과 지원', '배지, 해리, 동결, 해동, 파종, 대조 리간드까지 폭넓게 제공'],
      portfolioTitle: '시약 카테고리',
      sections: [
        { title: '세포 배양 및 처리 시약', body: '배지, 세포 해리, 동결 보존, 해동, 파종 관련 시약입니다.', items: ['Cell Culture Kits', 'Cell Detachment', 'Freezing / Thawing Reagents', 'Cell Plating Reagents'] },
        { title: 'Starter Packs', body: '특정 체크포인트, 리간드 제시, clustering 세포주용 starter pack입니다.', items: ['Checkpoint clustering', 'Checkpoint ligand', 'Cell line starter packs'] },
        { title: '대조 리간드 및 소모품', body: 'GPCR 및 사이토카인 평가에 사용하는 대조 리간드, 플레이트, 항생제, 항체, buffer입니다.', items: ['Control ligands', 'Assay plates', 'Antibiotics', 'Buffers and antibodies'] },
      ],
      note: '대용량 포장이나 특정 로트 확인이 필요한 경우 용도와 필요 수량을 함께 확인합니다.',
      ctaTitle: '시약 구성을 정리할까요?',
      ctaDescription: '대상 세포주 또는 분석 키트를 알면 필요한 관련 시약을 함께 확인할 수 있습니다.',
      ctaButton: '시약 문의',
    },
    [Page.MembranePrep]: {
      title: '막 표본',
      subtitle: '결합 및 기능 평가용 GPCR / 이온 채널 막 표본',
      intro: [
        '막 표본은 막 단백질이 질병과 약물 반응에 어떻게 관여하는지 연구하는 데 사용됩니다.',
        'Eurofins DiscoverX의 GPCR 및 이온 채널 막 표본은 타깃 단백질 발현 수준이 분석에 적합하도록 최적화된 안정 세포주에서 제조됩니다.',
      ],
      highlightsTitle: '제품 하이라이트',
      highlights: ['높은 S/N 비와 특이적 리간드 결합 능력', '안정 클론 세포주 유래로 배치 간 일관성 확보', '세포 배양 없이 결합 실험 시작 가능', '포화 결합, 경쟁 결합, GTPγS 기능 평가에 사용 가능'],
      portfolioTitle: '막 표본 포트폴리오',
      sections: [
        { title: '이온 채널 막 표본', body: 'hERG 등 이온 채널 타깃에 대응하는 막 표본입니다.', items: ['PrecisION hERG', 'nAChR α3/β4'] },
        { title: 'GPCR 막 표본', body: 'ChemiScreen 시리즈를 중심으로 adenosine, adrenergic, chemokine, GLP-1 등 다양한 GPCR을 지원합니다.', items: ['Radioligand binding', 'Competitive binding', 'GTPγS functional assays'] },
        { title: '주요 용도', body: 'Kd, Ki, 수용체 친화도, rank ordering, 후보물질 기능 평가에 사용할 수 있습니다.', items: ['Small molecule screening', 'Antibody ranking', 'Binding affinity measurement'] },
      ],
      note: '특정 subtype이나 대용량 포장이 필요한 경우 타깃명과 시험 형식을 알려주세요.',
      ctaTitle: '막 표본 타깃을 확인할까요?',
      ctaDescription: '타깃, 리간드, 시험 형식을 공유해 주시면 해당 제품을 확인합니다.',
      ctaButton: '막 표본 문의',
    },
    [Page.Enzyme]: {
      title: '재조합 효소',
      subtitle: '저해제 스크리닝용 정제 재조합 단백질 포트폴리오',
      intro: [
        'Eurofins DiscoverX는 키나아제, 포스파타아제, 헬리케이스, 유비퀴틴 관련 효소, 후성유전 단백질 등 폭넓은 활성 재조합 단백질을 제공합니다.',
        '기존 Millipore / Upstate 키나아제 제품군을 통합해 인간 kinome의 주요 부분을 포괄하는 활성, 변이형, 비활성형 재조합 키나아제를 제공합니다.',
      ],
      highlightsTitle: '제품 하이라이트',
      highlights: ['520종 이상의 고품질 효소 및 관련 단백질', '곤충, 포유류, 세균 등 최적 발현 시스템에서 생산', '고순도, 높은 specific activity, 배치 간 일관성 중시', '단일 실험부터 HTS까지 다양한 포장 지원'],
      portfolioTitle: '제품 카테고리',
      sections: [
        { title: '재조합 키나아제', body: '400종 이상의 활성 재조합 키나아제를 제공하며 저해제 스크리닝과 효소 활성 측정에 사용할 수 있습니다.', items: ['Active kinases', 'Mutant kinases', 'Inactive kinases'] },
        { title: '포스파타아제 및 DNA 헬리케이스', body: '인산화 조절, DNA / RNA 대사, 복구, 전사에 관여하는 효소를 제공합니다.', items: ['Recombinant phosphatases', 'DNA helicases', 'Ubiquitin pathway proteins'] },
        { title: '키나아제 활성 검출 키트', body: 'ADP accumulation assay 및 preloaded kinase assay kit로 저해제 평가 도입을 간소화합니다.', items: ['ADP Accumulation Assays', 'HitHunter Kinase Assay Kit', 'Bulk and HTS formats'] },
      ],
      note: '특정 키나아제, 변이체, 후성유전 단백질이 목록에 없다면 리스트 확인 또는 맞춤 공급을 검토합니다.',
      ctaTitle: '필요한 효소 목록을 확인할까요?',
      ctaDescription: '타깃명, 변이, 활성 상태, 필요량을 공유해 주세요.',
      ctaButton: '효소 제품 문의',
    },
    [Page.Calixar]: {
      title: 'Eurofins CALIXAR 맞춤형 단백질 서비스',
      subtitle: '천연 구조와 기능을 보존한 고품질 막 단백질 및 가용성 단백질 생산',
      intro: [
        'Eurofins CALIXAR는 Eurofins DiscoverX의 일부로, 천연에 가까운 구조와 기능을 가진 재조합 단백질의 생산 및 안정화 기술을 제공합니다.',
        '독자적인 가용화 및 안정화 기술을 통해 막 단백질과 복잡한 가용성 단백질을 신약개발, 항체 발굴, 백신, 구조생물학, 기능 평가에 적합한 품질로 제공합니다.',
      ],
      highlightsTitle: '서비스 하이라이트',
      highlights: ['GPCR, 이온 채널, transporter 등 막 단백질 지원', '키나아제, 포스파타아제, 헬리케이스 등 가용성 단백질 지원', '독자적인 detergent, polymer, 안정화 시약 활용', 'Cryo-EM, SPR, MST, ELISA, HTS 등 용도에 맞춘 품질 평가'],
      portfolioTitle: '맞춤형 생산 워크플로',
      sections: [
        { title: 'Construct design 및 발현', body: '유전자 최적화, 태그 설계, 발현 숙주 선택을 통해 막 단백질 또는 가용성 단백질 발현을 진행합니다.', items: ['Mammalian cells', 'Insect cells', 'Yeast', 'Bacteria'] },
        { title: '가용화, 안정화 및 정제', body: '독자 시약과 정제 공정으로 full-length 활성 단백질 회수를 목표로 합니다.', items: ['Detergents', 'Nanodiscs', 'Proteoliposomes', 'Affinity / SEC / IEX purification'] },
        { title: '특성 분석 및 scale-up', body: '결합, 효소 활성, 안정성, 순도를 확인하고 필요 시 scale-up 생산을 진행합니다.', items: ['Thermal shift', 'Ligand binding', 'ELISA', 'Large-scale production'] },
      ],
      note: '연구용, 항체 발굴, 백신, 구조 분석, 기능 평가 요건에 맞춰 프로젝트를 설계합니다.',
      ctaTitle: '맞춤형 단백질 프로젝트를 상담할까요?',
      ctaDescription: '단백질명, 발현 숙주, 용도, 필요량, 품질 요건을 공유해 주세요.',
      ctaButton: 'CALIXAR 서비스 문의',
    },
  },
};

const localizedPageSet = new Set<Page>([
  Page.CellLine,
  Page.ExpressKit,
  Page.BioassayKit,
  Page.Toolbox,
  Page.DetectionKit,
  Page.Reagent,
  Page.MembranePrep,
  Page.Enzyme,
  Page.Calixar,
]);

const LocalizedProductDetail: React.FC<LocalizedProductDetailProps> = ({ language, page, onNavigate }) => {
  const pageContent = (localizedPageSet.has(page) ? content[language][page] : undefined) ?? content[language][Page.CellLine]!;

  return (
    <div className="bg-white">
      <section className="bg-white border-b border-slate-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-black tracking-tight text-[#1C2C5E] mb-5">{pageContent.title}</h1>
            <p className="text-xl font-bold text-[#4B827E] mb-8">{pageContent.subtitle}</p>
            <div className="space-y-5 text-lg leading-relaxed text-slate-600">
              {pageContent.intro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-black text-[#1C2C5E] mb-10 border-l-8 border-[#4B827E] pl-6">{pageContent.highlightsTitle}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pageContent.highlights.map((highlight, index) => (
            <div key={highlight} className="bg-slate-50 rounded-2xl border border-slate-100 p-6">
              <div className="w-10 h-10 rounded-xl bg-[#4B827E] text-white flex items-center justify-center font-black mb-5">{index + 1}</div>
              <p className="text-sm leading-relaxed text-slate-600 font-semibold">{highlight}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 border-y border-slate-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-[#1C2C5E] mb-10">{pageContent.portfolioTitle}</h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {pageContent.sections.map((section) => (
              <article key={section.title} className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8">
                <h3 className="text-xl font-black text-[#1C2C5E] mb-4">{section.title}</h3>
                <p className="text-sm leading-relaxed text-slate-600 mb-6">{section.body}</p>
                <ul className="space-y-3">
                  {section.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-slate-600">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#4B827E] shrink-0"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <p className="mt-10 text-sm leading-relaxed text-slate-500 bg-white border border-dashed border-slate-300 rounded-xl px-6 py-4 inline-block">
            {pageContent.note}
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-[#1C2C5E] rounded-3xl p-8 md:p-10 text-white flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-black mb-3">{pageContent.ctaTitle}</h2>
            <p className="text-white/70 leading-relaxed max-w-3xl">{pageContent.ctaDescription}</p>
          </div>
          <button
            onClick={() => onNavigate?.(Page.Contacts)}
            className="shrink-0 bg-white text-[#1C2C5E] px-7 py-3 rounded-full font-black hover:bg-teal-50 transition-colors"
          >
            {pageContent.ctaButton}
          </button>
        </div>
      </section>
    </div>
  );
};

export default LocalizedProductDetail;
