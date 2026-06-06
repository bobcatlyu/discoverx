import React from 'react';
import { DEGRADATION_PORTFOLIO_COLUMNS, DEGRADATION_PORTFOLIO_ROWS } from '../data/degradationPortfolio';
import { REPORTER_PORTFOLIO_COLUMNS, REPORTER_PORTFOLIO_ROWS } from '../data/reporterPortfolio';
import { TRANSLOCATION_PORTFOLIO_COLUMNS, TRANSLOCATION_PORTFOLIO_ROWS } from '../data/translocationPortfolio';
import { Language } from '../types';
import { localizeTargetColumns, localizeTargetRows, targetDetailCommon } from '../utils/targetDetailLocalization';

interface Highlight {
  title: string;
  description: string;
}

interface MoaItem {
  title: string;
  description: string;
  image?: string;
  imageClass?: string;
}

interface SignalPathwayContent {
  title: string;
  subtitle: string;
  intro: string[];
  highlights: Highlight[];
  moaTitle: string;
  moas: MoaItem[];
  portfolioTitle: string;
  reporterTitle: string;
  translocationTitle: string;
  degradationTitle: string;
  note: string;
}

const localizedContent: Record<Language, SignalPathwayContent> = {
  zh: {
    title: '信号通路检测',
    subtitle: 'Signaling Pathway Assays',
    intro: [
      '通过细胞水平检测解析信号通路报告基因的表达，以及多种常见靶点特异性信号通路。',
      '细胞信号通路是细胞内部传递生物信息的重要机制，对多种生理过程（包括细胞增殖、分化、代谢调控及凋亡）中的细胞内响应至关重要。当配体（例如细胞因子、生长因子或激素）与细胞表面特定受体结合后，信号通路即可被激活。通过检测细胞内信号通路对特定刺激的响应，可解析目标配体/受体相互作用的作用机制，这对于推进药物发现与开发、理解病理生理机制以及药理机制具有关键意义。',
      '细胞水平报告基因检测已被广泛用于评估针对信号通路中多种蛋白的治疗药物对细胞的影响。研究人员利用这类标准检测方法在转录水平研究基因表达，并将其作为一种正交筛选手段，用于理解治疗药物的作用机制（MOA）。',
      'Eurofins DiscoverX 提供全面的细胞水平信号通路指示检测产品组合，用于检测小分子或生物大分子药物对复杂信号转导通路的激活或抑制状态。',
      'PathHunter® 信号报告基因检测平台提供了一种简便、功能性的细胞检测解决方案，这类检测提供下游（转录/翻译水平）的读数，与受体近端检测的读数互为补充，从而帮助研究人员全面理解药物分子针对 NFAT、NF-κB、PD-1、STAT3、CD27、GM-CSF、IL 类受体、BCMA、TSLP 等信号通路的作用机制。',
      '特定的信号通路检测体系可通过检测关键蛋白的降解、易位入核来测量免疫反应、化合物毒性、胆固醇代谢、抗氧化功能、DNA 损伤等通路相关事件。结合快速且简便的化学发光检测方法，这类检测可用于生成细胞水平的通路选择性谱图，并全面理解不同化合物或生物药在受体近端或远端事件中的作用。',
    ],
    highlights: [
      { title: '均相检测', description: '无洗涤步骤的高通量友好型流程，采用高灵敏度化学发光读数' },
      { title: '多检测类型', description: '支持结合与功能性检测（直接检测与报告基因检测），无需抗体、固定或成像步骤' },
      { title: '快速且结果优异', description: '短时间化合物孵育即可获得检测结果，具有高信噪比且无假阳性' },
      { title: '高特异性', description: '全细胞检测、非 ELISA 方法，提高靶点检测的特异性与可靠性' },
      { title: '高应用灵活性', description: '可用于激动剂或拮抗剂筛选，并可构建检测体系以研究其他信号通路' },
      { title: '更全面的机制理解', description: '同时评估受体上游与下游响应，以获得对药物作用机制的综合认知' },
      { title: '生物学相关性强', description: 'MOA 导向的功能性检测，用于监测多样化信号通路并评估靶向治疗药物的生物学效应' },
    ],
    moaTitle: '作用机制',
    moas: [
      {
        title: '报告基因 (Reporter Gene)',
        description: '通过监测特定转录因子（如 STAT, NF-κB, FoxO）对启动子元件的激活，间接评估下游信号通路的完整性。我们的报告基因系统具有极高的诱导倍数和信噪比，是筛选生物药中和效力的理想工具。',
        image: '/pic/Signaling-Reporter-Assays-principles-1-1024x342-1.png',
        imageClass: 'w-3/4',
      },
      {
        title: '通路蛋白降解 (Protein Degradation)',
        description: '利用 EFC 技术实时、定量地监测细胞内目标蛋白的水平变化。该模块专为 TPD (Targeted Protein Degradation) 药物如 PROTAC® 或分子胶而设计，能够捕捉到纳摩尔级别的降解活性及其动力学过程。',
        image: '/pic/Cytokine-Receptor-principles-degradation.png',
        imageClass: 'w-3/4',
      },
      {
        title: '核转运 (Nuclear Translocation)',
        description: '直接在活细胞中追踪蛋白质在细胞质与细胞核之间的往返运动。这对于研究核受体激活、激酶调节的易位（如 AKT/FoxO 通路）以及药物诱导的贩运改变至关重要。',
      },
    ],
    portfolioTitle: '信号通路产品列表',
    reporterTitle: '报告基因 (Pathway Reporter)',
    translocationTitle: '转运入核 Nuclear Translocation',
    degradationTitle: '通路蛋白降解 Pathway Degradation',
    note: '* 我们可以根据您的通路研究需求，通过开发服务构建特定的报告基因或蛋白降解监测系统。',
  },
  ja: {
    title: 'シグナル伝達経路アッセイ',
    subtitle: 'Signaling Pathway Assays',
    intro: [
      '細胞ベースアッセイにより、シグナル経路レポーター遺伝子発現と多様なターゲット特異的シグナル経路を解析します。',
      '細胞シグナル伝達経路は、細胞内で生物学的情報を伝える重要な機構です。細胞増殖、分化、代謝制御、アポトーシスなど多くの生理プロセスにおける細胞応答に不可欠です。サイトカイン、成長因子、ホルモンなどのリガンドが細胞表面受容体に結合すると、シグナル経路が活性化されます。特定刺激に対する細胞内シグナル応答を測定することで、リガンド/受容体相互作用の作用機序を解析できます。',
      '細胞ベースレポーター遺伝子アッセイは、シグナル経路中のさまざまなタンパク質を標的とする治療薬の細胞への影響評価に広く使用されています。転写レベルで遺伝子発現を研究し、治療薬の作用機序（MOA）理解のための直交スクリーニング手段として利用できます。',
      'Eurofins DiscoverX は、小分子またはバイオ医薬品による複雑なシグナル伝達経路の活性化・阻害を測定する包括的な細胞ベースシグナル経路インジケーターアッセイを提供しています。',
      'PathHunter® シグナルレポーター遺伝子アッセイプラットフォームは、簡便で機能的な細胞アッセイソリューションです。下流（転写/翻訳レベル）のリードアウトを提供し、受容体近位アッセイを補完することで、NFAT、NF-κB、PD-1、STAT3、CD27、GM-CSF、IL 受容体、BCMA、TSLP などの経路に対する薬物作用機序の理解を支援します。',
      '特定のシグナル経路アッセイでは、主要タンパク質の分解や核移行を測定することで、免疫応答、化合物毒性、コレステロール代謝、抗酸化機能、DNA 損傷などの経路関連イベントを解析できます。迅速で簡便な化学発光検出と組み合わせることで、細胞レベルの経路選択性プロファイルを生成できます。',
    ],
    highlights: [
      { title: '均一系アッセイ', description: 'ウォッシュ不要で高スループットに適したワークフロー。高感度化学発光リードアウトを使用' },
      { title: '複数のアッセイ形式', description: '結合アッセイと機能アッセイ（直接検出およびレポーターアッセイ）に対応し、抗体、固定、イメージングは不要' },
      { title: '迅速で優れた結果', description: '短時間の化合物インキュベーションで結果が得られ、高い S/B 比と低い偽陽性率を提供' },
      { title: '高い特異性', description: '全細胞アッセイかつ非 ELISA 方式により、ターゲット検出の特異性と信頼性を向上' },
      { title: '高い応用柔軟性', description: 'アゴニストまたはアンタゴニストスクリーニングに使用でき、他のシグナル経路研究用アッセイ構築にも対応' },
      { title: 'より包括的な機序理解', description: '受容体上流と下流の応答を同時に評価し、薬物作用機序を総合的に理解' },
      { title: '高い生物学的関連性', description: 'MOA ベースの機能アッセイにより、多様なシグナル経路を測定し、標的治療薬の生物学的効果を評価' },
    ],
    moaTitle: '作用機序',
    moas: [
      {
        title: 'レポーター遺伝子 (Reporter Gene)',
        description: 'STAT、NF-κB、FoxO など特定転写因子によるプロモーターエレメント活性化を測定し、下流シグナル経路の完全性を間接的に評価します。高い誘導倍率と S/B 比を備え、バイオ医薬品中和活性のスクリーニングに適しています。',
        image: '/pic/Signaling-Reporter-Assays-principles-1-1024x342-1.png',
        imageClass: 'w-3/4',
      },
      {
        title: '経路タンパク質分解 (Protein Degradation)',
        description: 'EFC 技術により、細胞内標的タンパク質レベルの変化をリアルタイムかつ定量的に測定します。PROTAC® や分子接着剤などの TPD 薬物向けに設計され、ナノモルレベルの分解活性と動態を捉えます。',
        image: '/pic/Cytokine-Receptor-principles-degradation.png',
        imageClass: 'w-3/4',
      },
      {
        title: '核移行 (Nuclear Translocation)',
        description: '生細胞内でタンパク質が細胞質と核の間を移動する過程を直接追跡します。核受容体活性化、AKT/FoxO 経路などのキナーゼ制御性移行、薬物誘導性トラフィッキング変化の研究に重要です。',
      },
    ],
    portfolioTitle: 'シグナル経路製品リスト',
    reporterTitle: 'レポーター遺伝子 (Pathway Reporter)',
    translocationTitle: '核移行 Nuclear Translocation',
    degradationTitle: '経路タンパク質分解 Pathway Degradation',
    note: '* 経路研究のニーズに応じて、開発サービスにより特定レポーター遺伝子またはタンパク質分解モニタリングシステムを構築できます。',
  },
  ko: {
    title: '신호전달 경로 분석',
    subtitle: 'Signaling Pathway Assays',
    intro: [
      '세포 기반 분석으로 신호 경로 리포터 유전자 발현과 다양한 타깃 특이적 신호 경로를 해석합니다.',
      '세포 신호전달 경로는 세포 내부에서 생물학적 정보를 전달하는 중요한 기전이며, 세포 증식, 분화, 대사 조절, 세포사멸 등 여러 생리 과정의 세포 내 반응에 필수적입니다. 사이토카인, 성장인자, 호르몬과 같은 리간드가 세포 표면 수용체에 결합하면 신호 경로가 활성화됩니다. 특정 자극에 대한 세포 내 신호 반응을 측정하면 리간드/수용체 상호작용의 작용 기전을 해석할 수 있습니다.',
      '세포 기반 리포터 유전자 분석은 신호 경로 내 다양한 단백질을 표적으로 하는 치료제가 세포에 미치는 영향을 평가하는 데 널리 사용됩니다. 연구자는 이 표준 분석법으로 전사 수준의 유전자 발현을 연구하고, 치료제의 작용 기전(MOA)을 이해하기 위한 orthogonal screening 수단으로 사용할 수 있습니다.',
      'Eurofins DiscoverX는 소분자 또는 바이오의약품이 복잡한 신호전달 경로를 활성화하거나 억제하는 상태를 측정하기 위한 포괄적인 세포 기반 신호 경로 indicator 분석 포트폴리오를 제공합니다.',
      'PathHunter® 신호 리포터 유전자 분석 플랫폼은 간편하고 기능적인 세포 분석 솔루션입니다. 하위(전사/번역 수준) 판독값을 제공하며 수용체 근위 분석을 보완하여 NFAT, NF-κB, PD-1, STAT3, CD27, GM-CSF, IL 수용체, BCMA, TSLP 등 경로에 대한 약물 작용 기전 이해를 돕습니다.',
      '특정 신호 경로 분석은 주요 단백질의 분해와 핵 이동을 측정해 면역 반응, 화합물 독성, 콜레스테롤 대사, 항산화 기능, DNA 손상 등 경로 관련 이벤트를 평가할 수 있습니다. 빠르고 간편한 화학발광 검출과 결합해 세포 수준의 경로 선택성 프로파일을 생성할 수 있습니다.',
    ],
    highlights: [
      { title: '균질 분석', description: '무세척 고처리량 친화적 절차와 고감도 화학발광 판독 사용' },
      { title: '다양한 분석 유형', description: '결합 및 기능 분석(직접 검출과 리포터 분석)을 지원하며 항체, 고정 또는 이미징 단계가 필요 없음' },
      { title: '빠르고 우수한 결과', description: '짧은 화합물 처리 시간으로 결과를 얻고 높은 신호대잡음비와 낮은 위양성률 제공' },
      { title: '높은 특이성', description: '전세포 분석 및 비 ELISA 방식으로 타깃 검출의 특이성과 신뢰성 향상' },
      { title: '높은 응용 유연성', description: '작용제 또는 길항제 스크리닝에 사용할 수 있으며 다른 신호 경로 연구용 분석 시스템 구축 가능' },
      { title: '더 포괄적인 기전 이해', description: '수용체 상위 및 하위 반응을 동시에 평가해 약물 작용 기전을 종합적으로 이해' },
      { title: '높은 생물학적 관련성', description: 'MOA 기반 기능 분석으로 다양한 신호 경로를 모니터링하고 표적 치료제의 생물학적 효과를 평가' },
    ],
    moaTitle: '작용 기전',
    moas: [
      {
        title: '리포터 유전자 (Reporter Gene)',
        description: 'STAT, NF-κB, FoxO와 같은 특정 전사인자가 promoter element를 활성화하는지 모니터링하여 하위 신호 경로의 완전성을 간접적으로 평가합니다. 높은 유도 배수와 신호대잡음비를 제공해 바이오의약품 중화 효능 스크리닝에 적합합니다.',
        image: '/pic/Signaling-Reporter-Assays-principles-1-1024x342-1.png',
        imageClass: 'w-3/4',
      },
      {
        title: '경로 단백질 분해 (Protein Degradation)',
        description: 'EFC 기술을 이용해 세포 내 표적 단백질 수준 변화를 실시간 정량 모니터링합니다. PROTAC® 또는 molecular glue와 같은 TPD 약물을 위해 설계되어 나노몰 수준의 분해 활성과 동역학을 포착할 수 있습니다.',
        image: '/pic/Cytokine-Receptor-principles-degradation.png',
        imageClass: 'w-3/4',
      },
      {
        title: '핵 이동 (Nuclear Translocation)',
        description: '살아있는 세포에서 단백질이 세포질과 핵 사이를 이동하는 과정을 직접 추적합니다. 핵 수용체 활성화, AKT/FoxO 경로와 같은 키나아제 조절 이동, 약물 유도 trafficking 변화 연구에 중요합니다.',
      },
    ],
    portfolioTitle: '신호 경로 제품 목록',
    reporterTitle: '리포터 유전자 (Pathway Reporter)',
    translocationTitle: '핵 이동 Nuclear Translocation',
    degradationTitle: '경로 단백질 분해 Pathway Degradation',
    note: '* 경로 연구 요구에 따라 개발 서비스를 통해 특정 리포터 유전자 또는 단백질 분해 모니터링 시스템을 구축할 수 있습니다.',
  },
};

interface ProductPortfolioTableProps {
  title: string;
  columns: string[];
  rows: string[][];
  catalogLabel: string;
}

const ProductPortfolioTable: React.FC<ProductPortfolioTableProps> = ({ title, columns, rows, catalogLabel }) => (
  <div>
    <div className="mb-6">
      <h3 className="text-2xl font-bold text-[#4B827E]">{title}</h3>
    </div>
    <div className="w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl">
      <table className="w-full table-auto divide-y divide-slate-200">
        <thead className="bg-[#4B827E] text-white">
          <tr>
            {columns.map((header) => (
              <th key={header} className="px-5 py-4 text-left text-sm font-bold uppercase tracking-wider">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-200 bg-white">
          {rows.map((row, rowIdx) => (
            <tr key={`${row[3] || row[0]}-${rowIdx}`} className={rowIdx % 2 === 0 ? 'bg-white' : 'bg-slate-50 hover:bg-teal-50/30 transition-colors'}>
              {row.map((cell, cellIdx) => (
                <td key={`${columns[cellIdx]}-${cellIdx}`} className={`border-r border-slate-100 px-5 py-4 align-top text-sm text-slate-700 last:border-r-0 ${columns[cellIdx] === catalogLabel ? 'font-mono text-[#1C2C5E]' : ''}`}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

interface SignalPathwayDetailProps {
  language?: Language;
}

const SignalPathwayDetail: React.FC<SignalPathwayDetailProps> = ({ language = 'zh' }) => {
  const content = localizedContent[language];
  const labels = targetDetailCommon[language];
  const reporterColumns = localizeTargetColumns(REPORTER_PORTFOLIO_COLUMNS, language);
  const reporterRows = localizeTargetRows(REPORTER_PORTFOLIO_ROWS, language);
  const translocationColumns = localizeTargetColumns(TRANSLOCATION_PORTFOLIO_COLUMNS, language);
  const translocationRows = localizeTargetRows(TRANSLOCATION_PORTFOLIO_ROWS, language);
  const degradationColumns = localizeTargetColumns(DEGRADATION_PORTFOLIO_COLUMNS, language);
  const degradationRows = localizeTargetRows(DEGRADATION_PORTFOLIO_ROWS, language);

  return (
    <div className="bg-white">
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div>
          <h1 className="mb-2 text-4xl font-extrabold text-[#1C2C5E]">{content.title}</h1>
          <h2 className="mb-6 text-xl font-bold text-[#4B827E]">{content.subtitle}</h2>
          <div className="mb-8 h-1 w-20 bg-[#4B827E]"></div>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
            <div className="space-y-6 text-lg leading-relaxed text-slate-600 lg:col-span-2">
              {content.intro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="flex items-start justify-center">
              <img src="/pic/Signaling-Pathway-Product-Solutions-principles-nf-1-695x1024-1.png" alt="Signaling Pathway Principles" className="h-full w-full rounded-2xl border border-slate-200 object-cover shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-10 text-center text-3xl font-bold text-[#1C2C5E]">{labels.productHighlights}</h2>
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {content.highlights.map((highlight) => (
              <div key={highlight.title} className="rounded-xl border border-slate-100 bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-lg">
                <div className="flex flex-col items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#4B827E]/10 text-[#4B827E]">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-bold text-[#1C2C5E]">{highlight.title}</h3>
                    <p className="text-sm leading-relaxed text-slate-600">{highlight.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-10 text-center text-3xl font-bold text-[#1C2C5E]">{content.moaTitle}</h2>
          <div className="mx-auto max-w-6xl space-y-8">
            {content.moas.map((item, index) => (
              <div key={item.title} className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-10 shadow-sm transition-colors hover:bg-slate-50">
                <div className="flex flex-col gap-8 md:flex-row md:items-start">
                  <div className="shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-50 text-xl font-bold text-[#4B827E]">{String(index + 1).padStart(2, '0')}</div>
                  </div>
                  <div className="flex-grow">
                    <h4 className="mb-4 text-2xl font-bold text-[#4B827E]">{item.title}</h4>
                    <p className="mb-6 text-lg leading-relaxed text-slate-600">{item.description}</p>
                    {item.image && <img src={item.image} alt={item.title} className={`${item.imageClass || 'w-full'} rounded-xl border border-slate-200 shadow-md`} />}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 pb-32 sm:px-6 lg:px-8">
        <h2 className="mb-12 text-3xl font-bold text-[#1C2C5E]">{content.portfolioTitle}</h2>
        <div className="space-y-12">
          <ProductPortfolioTable title={content.reporterTitle} columns={reporterColumns} rows={reporterRows} catalogLabel={labels.catalogNumber} />
          <ProductPortfolioTable title={content.translocationTitle} columns={translocationColumns} rows={translocationRows} catalogLabel={labels.catalogNumber} />
          <ProductPortfolioTable title={content.degradationTitle} columns={degradationColumns} rows={degradationRows} catalogLabel={labels.catalogNumber} />
        </div>
        <div className="mt-12 text-center">
          <p className="rounded-lg border border-dashed border-slate-300 bg-slate-50 py-4 text-sm italic text-slate-500">{content.note}</p>
        </div>
      </section>
    </div>
  );
};

export default SignalPathwayDetail;
