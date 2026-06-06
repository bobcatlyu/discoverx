
import React from 'react';
import { Language, Page } from '../types';
import { targetDetailCommon } from '../utils/targetDetailLocalization';

interface GpcrDetailProps {
  language?: Language;
  onNavigate?: (page: Page) => void;
}

interface FeaturedTarget {
  name: string;
  tag: string;
  description: string;
  details: string[];
  page: Page;
}

interface MoaItem {
  id: string;
  title: string;
  desc: string;
  image: string;
  maxWidth: string;
}

const localizedContent: Record<Language, {
  title: string;
  subtitle: string;
  intro: string[];
  highlights: string[];
  moas: MoaItem[];
  productTitle: string;
  productDescription: string;
  catalogButton: string;
  featuredTitle: string;
  featuredButton: string;
  techTitle: string;
  techNotes: string[];
  featuredTargets: FeaturedTarget[];
}> = {
  zh: {
    title: 'G蛋白偶联受体 GPCR Assays',
    subtitle: '始终为您的目标受体找到合适的 GPCR 检测方案',
    intro: [
      'G 蛋白偶联受体（GPCR）是具有七次跨膜结构的受体家族，是目前已验证治疗靶点中规模最大的家族之一，已知人类 GPCR 超过 800 种。以 GPCR 为靶点的治疗药物约占当前上市药物的 40% 以上，这些药物可直接或间接作用于 GPCR。GPCR 的配体种类广泛，包括生长因子、离子、脂质、核苷酸、激素以及神经递质等。',
      'GPCR 在生理与病理过程中的作用极其广泛，从食欲调控、胚胎发育结构形成，到心血管疾病及罕见病等多种疾病过程均与其相关。为帮助研究人员全面解析特定 GPCR 及其受小分子或生物药调控的活性，Eurofins DiscoverX 提供多种生物学相关的细胞水平功能检测与结合检测、细胞系检测试剂盒、稳定细胞系、检测试剂盒及膜制备产品，支持探索多种可能的信号通路机制。',
      'Eurofins DiscoverX 产品组合中的靶点特异性产品具有高灵敏度、可扩展性和稳健性，可用于检测受体介导的第二信使信号（cAMP 与钙离子）、β-arrestin 招募、受体内吞以及配体结合等关键事件。这些检测同样支持对尚无已知内源性配体或获批药物的孤儿 GPCR 进行功能表征，构成其全面的 GPCR 解决方案体系。',
    ],
    highlights: [
      '覆盖广泛——覆盖超过 90% 的人类 GPCR 组（GPCRome）靶点，确保为您的目标受体提供检测方案',
      '高度适用——适用于小分子与生物药的开发流程，从靶点确认到临床前药物发现阶段',
      '多样检测选择——提供多种作用机制（MOA）类型检测（如 β-arrestin、cAMP、钙信号、内吞、配体结合、受体转运等），提供高度灵活的 GPCR 检测方案',
      '规模领先——超过 1,600 项经验证的功能与结合检测，已发表于 800 余篇同行评审文献，构成全面且可靠的 GPCR 检测体系',
    ],
    moas: [
      {
        id: '1',
        title: 'cAMP 检测',
        desc: '直接定量检测 Gs 或 Gi 偶联受体引起的细胞内 second messenger cAMP 水平的变化。使用 HitHunter® 专有技术，提供极高灵敏度的均相化学发光检测，是小分子和生物药筛选的标准方法。',
        image: '/pic/cAMP.png',
        maxWidth: 'max-w-xl',
      },
      {
        id: '2',
        title: '钙流检测',
        desc: '针对 Gq 偶联通路，利用高灵敏度荧光染料（如 Calcium No Wash 技术）实时监测受体激活激发的胞内钙库释放或胞外钙流入，完美适配 HTS 自动化流程。',
        image: '/pic/Calcium.png',
        maxWidth: 'max-w-md',
      },
      {
        id: '3',
        title: 'β-arrestin 招募',
        desc: '利用专有的 EFC 技术检测几乎所有 GPCR 激活后招募 β-arrestin 的物理过程。该方法不依赖 G 蛋白通路，是研究偏向性配体 (Biased Ligands) 和孤儿受体的核心工具。',
        image: '/pic/GPCR-β-arrestin.png',
        maxWidth: 'max-w-xl',
      },
      {
        id: '4',
        title: '受体内吞 (Activated/Total)',
        desc: '定量追踪活化后的受体从细胞表面转移到胞内内体的过程。对于评估受体下调、ADC 药物内化效率及长效药效研究具有至关重要的参考价值。',
        image: '/pic/GPCR-Internalization-total_Assay-Principle_web-size.png',
        maxWidth: 'max-w-xl',
      },
      {
        id: '5',
        title: 'Pharmacotrafficking',
        desc: '监测蛋白质在胞内（如内质网）与细胞膜间的定向运输过程。常用于研究由于折叠错误导致的贩运缺陷，并筛选能够挽救功能的药理学伴侣 (Pharmacological Chaperones)。',
        image: '/pic/GPCR-Pharmacotrafficking_Assay-Principle.jpg',
        maxWidth: 'max-w-xl',
      },
      {
        id: '6',
        title: '配体受体结合',
        desc: '利用高质量膜制品 (Membrane Preps) 进行放射性配体饱和结合或竞争性结合实验，直接测定药物与受体活性口袋的物理结合常数 (Kd/Ki) 及动力学特性。',
        image: '/pic/binding.png',
        maxWidth: 'max-w-xl',
      },
    ],
    productTitle: 'GPCR 产品组合',
    productDescription: '覆盖超过 290+ 靶点，包含稳转细胞株、eXpress® Kit、Bioassay Kit、膜制品及转运/内吞检测方案。',
    catalogButton: '下载GPCR产品目录',
    featuredTitle: '热门靶点',
    featuredButton: '查看靶点页面',
    techTitle: '技术说明：',
    techNotes: [
      '以上靶点均提供多种检测形式，包括稳转细胞株、eXpress® Kit 等。',
      '支持针对 Gs, Gi, Gq 通路的功能性检测以及 β-arrestin 招募检测。',
      '提供配体结合检测（Membrane Preps）及受体内吞/转运检测。',
    ],
    featuredTargets: [
      {
    name: 'GLP-1R / GLP1R',
    tag: 'Metabolic disease',
    description: '代谢疾病与 GLP-1RA 药物开发中的核心 GPCR 靶点，覆盖 cAMP、beta-arrestin、internalization、calcium flux 和 binding 等读数。',
    details: ['Semaglutide / Tirzepatide / Liraglutide / Exenatide', 'Potency、可比性、稳定性和机制研究', 'Bioassay Kit、稳定细胞系、eXpress assay 和 user manual'],
    page: Page.Glp1r,
  },
    ],
  },
  ja: {
    title: 'Gタンパク質共役受容体 GPCR Assays',
    subtitle: '目的の受容体に適した GPCR アッセイソリューションを選択',
    intro: [
      'Gタンパク質共役受容体（GPCR）は 7 回膜貫通構造を持つ受容体ファミリーで、検証済み治療ターゲットの中でも最大規模のファミリーの一つです。ヒト GPCR は 800 種以上が知られており、上市薬の 40% 以上が GPCR に直接または間接的に作用します。GPCR のリガンドは、成長因子、イオン、脂質、ヌクレオチド、ホルモン、神経伝達物質など多岐にわたります。',
      'GPCR は食欲制御、胚発生、心血管疾患、希少疾患など幅広い生理・病理プロセスに関与します。Eurofins DiscoverX は、特定 GPCR と小分子またはバイオ医薬品による活性調節を包括的に解析できるよう、細胞ベース機能アッセイ、結合アッセイ、細胞株アッセイキット、安定細胞株、試薬キット、膜標品を提供しています。',
      'Eurofins DiscoverX のターゲット特異的製品は、高感度、スケーラビリティ、堅牢性を備え、受容体介在性のセカンドメッセンジャーシグナル（cAMP とカルシウム）、β-arrestin リクルートメント、受容体内在化、リガンド結合などを測定できます。内在性リガンドや承認薬がまだ知られていないオーファン GPCR の機能解析にも利用でき、包括的な GPCR ソリューションを構成します。',
    ],
    highlights: [
      '幅広いカバレッジ——ヒト GPCRome の 90% 以上をカバーし、目的受容体に対するアッセイ選択を支援',
      '高い適用性——ターゲット確認から前臨床創薬まで、小分子・バイオ医薬品の開発ワークフローに対応',
      '多様なアッセイ選択肢——β-arrestin、cAMP、カルシウムシグナル、内在化、リガンド結合、受容体トラフィッキングなど複数の MOA アッセイを提供',
      '業界最大級の実績——1,600 以上の検証済み機能・結合アッセイと 800 報以上の査読論文に支えられた信頼性の高い GPCR アッセイ体系',
    ],
    moas: [
      {
        id: '1',
        title: 'cAMP アッセイ',
        desc: 'Gs または Gi 共役受容体により誘導される細胞内セカンドメッセンジャー cAMP レベルの変化を直接定量します。HitHunter® 独自技術を用いた高感度の均一系化学発光アッセイで、小分子およびバイオ医薬品スクリーニングの標準的手法です。',
        image: '/pic/cAMP.png',
        maxWidth: 'max-w-xl',
      },
      {
        id: '2',
        title: 'カルシウムフラックスアッセイ',
        desc: 'Gq 共役経路向けに、高感度蛍光色素（Calcium No Wash 技術など）を用いて、受容体活性化に伴う細胞内カルシウムストア放出または細胞外カルシウム流入をリアルタイムで測定します。HTS 自動化ワークフローに適しています。',
        image: '/pic/Calcium.png',
        maxWidth: 'max-w-md',
      },
      {
        id: '3',
        title: 'β-arrestin リクルートメント',
        desc: '独自の EFC 技術により、ほぼすべての GPCR 活性化後に起こる β-arrestin リクルートメントを測定します。G タンパク質経路に依存しないため、バイアスリガンドやオーファン受容体研究の重要なツールです。',
        image: '/pic/GPCR-β-arrestin.png',
        maxWidth: 'max-w-xl',
      },
      {
        id: '4',
        title: '受容体内在化 (Activated/Total)',
        desc: '活性化受容体が細胞表面から細胞内エンドソームへ移動する過程を定量します。受容体ダウンレギュレーション、ADC 内在化効率、持続的薬効評価に重要です。',
        image: '/pic/GPCR-Internalization-total_Assay-Principle_web-size.png',
        maxWidth: 'max-w-xl',
      },
      {
        id: '5',
        title: 'Pharmacotrafficking',
        desc: 'タンパク質が小胞体などの細胞内区画から細胞膜へ輸送される過程を測定します。フォールディング異常によるトラフィッキング欠損の研究や、機能を救済する薬理シャペロンのスクリーニングに利用されます。',
        image: '/pic/GPCR-Pharmacotrafficking_Assay-Principle.jpg',
        maxWidth: 'max-w-xl',
      },
      {
        id: '6',
        title: 'リガンド・受容体結合',
        desc: '高品質な膜標品を用いた放射性リガンド飽和結合または競合結合試験により、薬物と受容体結合部位の物理的結合定数（Kd/Ki）や動態特性を直接測定します。',
        image: '/pic/binding.png',
        maxWidth: 'max-w-xl',
      },
    ],
    productTitle: 'GPCR 製品ポートフォリオ',
    productDescription: '290 以上のターゲットをカバーし、安定細胞株、eXpress® Kit、Bioassay Kit、膜標品、トラフィッキング／内在化アッセイを含みます。',
    catalogButton: 'GPCR 製品カタログをダウンロード',
    featuredTitle: '注目ターゲット',
    featuredButton: 'ターゲットページを見る',
    techTitle: '技術メモ：',
    techNotes: [
      '上記ターゲットでは、安定細胞株、eXpress® Kit など複数のアッセイ形式を提供しています。',
      'Gs、Gi、Gq 経路の機能アッセイおよび β-arrestin リクルートメントアッセイに対応しています。',
      'リガンド結合アッセイ（Membrane Preps）および受容体内在化／トラフィッキングアッセイを提供しています。',
    ],
    featuredTargets: [
      {
        name: 'GLP-1R / GLP1R',
        tag: 'Metabolic disease',
        description: '代謝疾患および GLP-1RA 開発における中核 GPCR ターゲット。cAMP、beta-arrestin、internalization、calcium flux、binding などのリードアウトをカバーします。',
        details: ['Semaglutide / Tirzepatide / Liraglutide / Exenatide', 'ポテンシー、同等性、安定性、作用機序研究', 'Bioassay Kit、安定細胞株、eXpress assay、user manual'],
        page: Page.Glp1r,
      },
    ],
  },
  ko: {
    title: 'G 단백질 결합 수용체 GPCR Assays',
    subtitle: '목표 수용체에 적합한 GPCR 분석 솔루션 선택',
    intro: [
      'G 단백질 결합 수용체(GPCR)는 7회 막관통 구조를 가진 수용체 패밀리로, 검증된 치료 타깃 중 가장 큰 패밀리 중 하나입니다. 알려진 인간 GPCR은 800종 이상이며, 현재 승인된 의약품의 40% 이상이 GPCR에 직접 또는 간접적으로 작용합니다. GPCR 리간드는 성장인자, 이온, 지질, 뉴클레오타이드, 호르몬, 신경전달물질 등 매우 다양합니다.',
      'GPCR은 식욕 조절, 배아 발달, 심혈관 질환, 희귀 질환 등 광범위한 생리 및 병리 과정에 관여합니다. Eurofins DiscoverX는 특정 GPCR과 소분자 또는 바이오의약품에 의한 활성 조절을 종합적으로 분석할 수 있도록 세포 기반 기능 분석, 결합 분석, 세포주 분석 키트, 안정 세포주, 분석 키트 및 막 표본을 제공합니다.',
      'Eurofins DiscoverX의 타깃 특이 제품은 높은 민감도, 확장성 및 견고성을 갖추고 있으며, 수용체 매개 2차 전달자 신호(cAMP 및 칼슘), β-arrestin 모집, 수용체 내재화, 리간드 결합 등의 핵심 이벤트를 측정할 수 있습니다. 내인성 리간드나 승인 약물이 알려지지 않은 orphan GPCR의 기능 특성 분석에도 활용할 수 있습니다.',
    ],
    highlights: [
      '넓은 커버리지——인간 GPCRome의 90% 이상을 커버하여 목표 수용체에 대한 분석 솔루션 제공',
      '높은 적용성——타깃 확인부터 전임상 신약 발굴까지 소분자 및 바이오의약품 개발 워크플로에 적합',
      '다양한 분석 선택지——β-arrestin, cAMP, 칼슘 신호, 내재화, 리간드 결합, 수용체 트래피킹 등 다양한 MOA 분석 제공',
      '대규모 검증 실적——1,600개 이상의 검증된 기능 및 결합 분석, 800편 이상의 동료심사 논문에 기반한 포괄적이고 신뢰성 높은 GPCR 분석 체계',
    ],
    moas: [
      {
        id: '1',
        title: 'cAMP 분석',
        desc: 'Gs 또는 Gi 결합 수용체에 의해 유도되는 세포 내 2차 전달자 cAMP 수준 변화를 직접 정량합니다. HitHunter® 독자 기술을 사용한 고감도 균질 화학발광 분석으로, 소분자 및 바이오의약품 스크리닝의 표준 방법입니다.',
        image: '/pic/cAMP.png',
        maxWidth: 'max-w-xl',
      },
      {
        id: '2',
        title: '칼슘 플럭스 분석',
        desc: 'Gq 결합 경로에 대해 고감도 형광 염료(Calcium No Wash 기술 등)를 사용하여 수용체 활성화에 따른 세포 내 칼슘 저장소 방출 또는 세포 외 칼슘 유입을 실시간으로 모니터링합니다. HTS 자동화 워크플로에 적합합니다.',
        image: '/pic/Calcium.png',
        maxWidth: 'max-w-md',
      },
      {
        id: '3',
        title: 'β-arrestin 모집',
        desc: '독자적인 EFC 기술을 사용해 거의 모든 GPCR 활성화 후 발생하는 β-arrestin 모집 과정을 측정합니다. G 단백질 경로에 의존하지 않아 biased ligand 및 orphan receptor 연구의 핵심 도구입니다.',
        image: '/pic/GPCR-β-arrestin.png',
        maxWidth: 'max-w-xl',
      },
      {
        id: '4',
        title: '수용체 내재화 (Activated/Total)',
        desc: '활성화된 수용체가 세포 표면에서 세포 내 엔도솜으로 이동하는 과정을 정량 추적합니다. 수용체 다운레귤레이션, ADC 내재화 효율, 장기 약효 연구 평가에 중요합니다.',
        image: '/pic/GPCR-Internalization-total_Assay-Principle_web-size.png',
        maxWidth: 'max-w-xl',
      },
      {
        id: '5',
        title: 'Pharmacotrafficking',
        desc: '단백질이 소포체와 같은 세포 내 구획에서 세포막으로 이동하는 과정을 모니터링합니다. 접힘 오류로 인한 트래피킹 결함 연구와 기능을 구제할 수 있는 약리학적 샤페론 스크리닝에 사용됩니다.',
        image: '/pic/GPCR-Pharmacotrafficking_Assay-Principle.jpg',
        maxWidth: 'max-w-xl',
      },
      {
        id: '6',
        title: '리간드-수용체 결합',
        desc: '고품질 막 표본(Membrane Preps)을 이용한 방사성 리간드 포화 결합 또는 경쟁 결합 실험으로 약물과 수용체 활성 결합 부위의 물리적 결합 상수(Kd/Ki) 및 동역학 특성을 직접 측정합니다.',
        image: '/pic/binding.png',
        maxWidth: 'max-w-xl',
      },
    ],
    productTitle: 'GPCR 제품 포트폴리오',
    productDescription: '290개 이상의 타깃을 커버하며 안정 세포주, eXpress® Kit, Bioassay Kit, 막 표본 및 트래피킹/내재화 분석을 포함합니다.',
    catalogButton: 'GPCR 제품 카탈로그 다운로드',
    featuredTitle: '주요 타깃',
    featuredButton: '타깃 페이지 보기',
    techTitle: '기술 참고：',
    techNotes: [
      '위 타깃은 안정 세포주, eXpress® Kit 등 다양한 분석 형식으로 제공됩니다.',
      'Gs, Gi, Gq 경로 기능 분석 및 β-arrestin 모집 분석을 지원합니다.',
      '리간드 결합 분석(Membrane Preps)과 수용체 내재화/트래피킹 분석을 제공합니다.',
    ],
    featuredTargets: [
      {
        name: 'GLP-1R / GLP1R',
        tag: 'Metabolic disease',
        description: '대사 질환 및 GLP-1RA 개발의 핵심 GPCR 타깃으로 cAMP, beta-arrestin, internalization, calcium flux, binding 등 다양한 판독값을 커버합니다.',
        details: ['Semaglutide / Tirzepatide / Liraglutide / Exenatide', 'Potency, 비교동등성, 안정성 및 작용 기전 연구', 'Bioassay Kit, 안정 세포주, eXpress assay 및 user manual'],
        page: Page.Glp1r,
      },
    ],
  },
};

const GpcrDetail: React.FC<GpcrDetailProps> = ({ language = 'zh', onNavigate }) => {
  const content = localizedContent[language];
  const labels = targetDetailCommon[language];

  return (
    <div className="bg-white">
      {/* 1. Introduction Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col gap-12 items-center">
          <div className="w-full">
            <h1 className="text-4xl font-extrabold text-[#1C2C5E] mb-2">{content.title}</h1>
            <h2 className="text-xl font-bold text-[#4B827E] mb-6">{content.subtitle}</h2>
            <div className="h-1 w-20 bg-[#4B827E] mb-8"></div>
            <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
              {content.intro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. Product Highlights */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-teal-50/30 rounded-[3rem] mb-16">
        <h3 className="text-2xl font-bold text-[#1C2C5E] mb-8 text-center">{labels.productHighlights}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {content.highlights.map((highlight, idx) => (
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
          <h2 className="text-3xl font-bold text-[#1C2C5E] mb-12 text-center">{labels.moaTitle} MoA</h2>
          
          <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="divide-y divide-slate-100">
              {content.moas.map((item) => (
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
          <h2 className="text-3xl font-bold text-[#1C2C5E] mb-4 text-center">{content.productTitle}</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            {content.productDescription}
          </p>
          <div className="mt-8">
            <a
              href="/doc/catalog/Eurofins_DiscoverX_GPCRs_Solution_Guide_CN.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl bg-[#1C2C5E] px-8 py-4 text-base font-bold text-white shadow-xl transition-all hover:-translate-y-1 hover:bg-[#2a3d7a]"
            >
              {content.catalogButton}
            </a>
          </div>
        </div>

        <div className="mb-12">
          <div className="mb-6 text-center">
            <h3 className="text-2xl font-bold text-[#1C2C5E]">{content.featuredTitle}</h3>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {content.featuredTargets.map((target) => (
              <article key={target.name} className="rounded-2xl border border-slate-200 bg-slate-50 p-8">
                <div className="mb-3 text-xs font-black uppercase tracking-widest text-[#4B827E]">{target.tag}</div>
                <h4 className="text-2xl font-black text-[#1C2C5E]">{target.name}</h4>
                <p className="mt-4 text-sm leading-relaxed text-slate-600">{target.description}</p>
                <ul className="mt-5 space-y-2">
                  {target.details.map((detail) => (
                    <li key={detail} className="flex gap-2 text-sm text-slate-600">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#4B827E]"></span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  onClick={() => onNavigate?.(target.page)}
                  className="mt-7 rounded-xl bg-[#4B827E] px-6 py-3 text-sm font-bold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:bg-[#3d6b67]"
                >
                  {content.featuredButton}
                </button>
              </article>
            ))}
          </div>
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
            <p className="mb-2"><strong>{content.techTitle}</strong></p>
            <ul className="list-disc list-inside space-y-1">
              {content.techNotes.map((note) => (
                <li key={note}>{note}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GpcrDetail;
