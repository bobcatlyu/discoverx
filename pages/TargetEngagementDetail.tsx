import React from 'react';
import { Language } from '../types';

interface ProductRow {
  target: string;
  cellLine: string;
  exp10: string;
  exp2: string;
}

interface ReagentRow {
  desc: string;
  cat: string;
  spec: string;
}

interface Highlight {
  title: string;
  description: string;
}

interface TargetEngagementContent {
  title: string;
  subtitle: string;
  intro: string[];
  highlightsTitle: string;
  highlights: Highlight[];
  moaTitle: string;
  moaIntro: string;
  hunterDescription: string;
  pulseDescription: string;
  portfolioTitle: string;
  tableHeaders: string[];
  epigeneticTitle: string;
  kinaseTitle: string;
  otherTitle: string;
  reagentTitle: string;
  reagentHeaders: string[];
  reagentDescriptions: string[];
  note: string;
}

const epigeneticData: ProductRow[] = [
  { target: 'BAZ2A', cellLine: '796-0074C1', exp10: '', exp2: '' },
  { target: 'BRD2(1)', cellLine: '796-0004C1', exp10: '96-0004E1CP0L', exp2: '96-0004E1CP0M' },
  { target: 'BRD2(1,2)', cellLine: '796-0049C1', exp10: '', exp2: '' },
  { target: 'BRD3(1,2)', cellLine: '796-0036C1', exp10: '', exp2: '' },
  { target: 'BRD3(1,2)', cellLine: '796-0038C1', exp10: '96-0038E1CP7L', exp2: '96-0038E1CP7M' },
  { target: 'BRD4(1)', cellLine: '796-0005C1', exp10: '96-0005E1CP0L', exp2: '96-0005E1CP0M' },
  { target: 'BRDT(1)', cellLine: '796-0006C1', exp10: '', exp2: '' },
  { target: 'BRDT(1,2)', cellLine: '796-0046C1', exp10: '96-0046E1CP7L', exp2: '96-0046E1CP7M' },
  { target: 'EP300', cellLine: '796-0073C15', exp10: '', exp2: '' },
  { target: 'G9a', cellLine: '796-0003C15', exp10: '96-0003E15CP7L', exp2: '96-0003E15CP7M' },
  { target: 'GLP', cellLine: '796-0045C15', exp10: '96-0045E15CP7L', exp2: '96-0045E15CP7M' },
  { target: 'PRMT3', cellLine: '796-0072C15', exp10: '', exp2: '' },
  { target: 'SMARCA4', cellLine: '796-0060C1', exp10: '96-0060E1CP7L', exp2: '96-0060E1CP7M' },
  { target: 'TAF1L(2)', cellLine: '796-0058C1', exp10: '', exp2: '' },
];

const kinaseData: ProductRow[] = [
  { target: 'BLK', cellLine: '796-0044C1', exp10: '96-0044E1CP0L', exp2: '96-0044E1CP0M' },
  { target: 'BTK', cellLine: '796-0056C15', exp10: '96-0056E15CP0L', exp2: '96-0056E15CP0M' },
  { target: 'CLK1', cellLine: '796-0059C1', exp10: '96-0059E1CP0L', exp2: '96-0059E1CP0M' },
  { target: 'CLK2', cellLine: '796-0057C15', exp10: '96-0057E15CP0L', exp2: '96-0057E15CP0M' },
  { target: 'CSF1R', cellLine: '796-0047C15', exp10: '96-0047E15CP0L', exp2: '96-0047E15CP0M' },
  { target: 'CSNK1D', cellLine: '796-0048C15', exp10: '96-0048E15CP0L', exp2: '96-0048E15CP0M' },
  { target: 'FGR', cellLine: '796-0043C1', exp10: '', exp2: '' },
  { target: 'HCK', cellLine: '796-0041C15', exp10: '96-0041E15CP0L', exp2: '96-0041E15CP0M' },
  { target: 'HPK1', cellLine: '796-0083C1', exp10: '', exp2: '' },
  { target: 'MEK1', cellLine: '796-0040C15', exp10: '96-0040E15CP0L', exp2: '96-0040E15CP0M' },
  { target: 'PI3K', cellLine: '796-0061C1', exp10: '', exp2: '' },
  { target: 'PIKFYVE', cellLine: '796-0078C1', exp10: '', exp2: '' },
  { target: 'PIM1', cellLine: '796-0052C15', exp10: '96-0052E15CP0L', exp2: '96-0052E15CP0M' },
  { target: 'PKCθ', cellLine: '796-0082C19', exp10: '', exp2: '' },
  { target: 'PYK2', cellLine: '796-0042C15', exp10: '96-0042E15CP0L', exp2: '96-0042E15CP0M' },
  { target: 'RIPK1', cellLine: '796-0076C19', exp10: '', exp2: '' },
  { target: 'RIPK2', cellLine: '796-0050C1', exp10: '96-0050E1CP0L', exp2: '96-0050E1CP0M' },
  { target: 'RIPK3', cellLine: '796-0077C19', exp10: '', exp2: '' },
  { target: 'SIK1', cellLine: '796-0051C15', exp10: '96-0051E15CP0L', exp2: '96-0051E15CP0M' },
  { target: 'ULK1', cellLine: '796-0081C1', exp10: '', exp2: '' },
];

const otherData: ProductRow[] = [
  { target: 'Bcl2-Bax', cellLine: '796-0010C3', exp10: '', exp2: '' },
  { target: 'Bcl2-Bim', cellLine: '796-0008C3', exp10: '', exp2: '' },
  { target: 'Bcl2L1-Bax', cellLine: '796-0009C3', exp10: '96-0009E3CP16L', exp2: '96-0009E3CP16M' },
  { target: 'Bcl2L1-Bim', cellLine: '796-0037C3', exp10: '', exp2: '' },
  { target: 'MCL1-BIM', cellLine: '796-0075C3', exp10: '', exp2: '' },
];

const reagentData: Omit<ReagentRow, 'desc'>[] = [
  { cat: '96-0079', spec: '10-plate (1,000/4,000 dp)' },
  { cat: '96-0079S', spec: '2-plate (200/800 dp)' },
  { cat: '96-0079L', spec: '80-plate (8,000/32,000 dp)' },
  { cat: '96-0079-HTS480', spec: '480,000 dp' },
  { cat: '96-0079-HTS960', spec: '960,000 dp' },
  { cat: '94-4007S', spec: '4-plate (400/1,600 dp)' },
];

const localizedContent: Record<Language, TargetEngagementContent> = {
  zh: {
    title: '靶标结合检测 Target Engagement Assays',
    subtitle: '通用型细胞水平化合物-靶点结合检测',
    intro: [
      '靶点结合检测用于测量化合物与特定蛋白靶点的结合情况。在细胞环境中，这类检测能够监测化合物的细胞穿透能力及其与靶点的相互作用，从而评估化合物效力并确认其作用机制（MOA）。',
      'InCELL 细胞水平化合物-靶点结合检测提供了在原生细胞环境中确认化合物细胞进入及蛋白靶点结合的能力，可用于筛选并排序抑制剂、验证生化检测中获得的命中化合物，以及测定细胞环境下的 EC50 值。这类简便的结合检测无需自定义化学示踪剂或抗体试剂，在功能性检测不可行或难以实施的情况下提供了便捷的解决方案。',
      'InCELL 靶点结合检测与靶向蛋白降解（TPD）项目高度互补，可用于解析并优化化合物与靶点的结合部分。通过 InCELL 检测，研究人员可利用细胞系检测套件、即用型试剂盒以及 DIY 入门套件快速构建靶点结合检测体系。',
    ],
    highlightsTitle: '产品亮点 / Product Highlights',
    highlights: [
      { title: '生物学相关性强', description: '获得细胞水平化合物进入与靶点结合的定量数据，为药物发现决策提供更可靠依据' },
      { title: '操作简便', description: '均相检测流程，无需洗涤步骤，采用化学发光读数即可测定化合物与靶点的结合情况' },
      { title: '兼容高通量筛选', description: '可轻松实现自动化操作，用于多化合物的准确筛选与评估' },
      { title: '快速开发流程', description: '依据详细步骤协议，可在两周以内构建自有靶点结合细胞检测体系' },
    ],
    moaTitle: '作用机制 (Mechanism of Action)',
    moaIntro: 'Eurofins DiscoverX 的两大检测平台——InCELL Pulse™ 与 InCELL Hunter™。两者均基于行业验证的 EFC 技术并共享相似原理，但在底层机制上存在关键差异，适用于不同类型的蛋白靶点。',
    hunterDescription: '基于与蛋白周转或相互作用破坏相关的蛋白稳定化原理。适用于监测化合物对胞内蛋白稳态的影响。',
    pulseDescription: '基于蛋白热稳定性原理。该平台利用小分子结合诱导的蛋白热稳定性改变，通过 EFC 技术捕捉信号变化，从而定量分析靶标结合。',
    portfolioTitle: '靶标结合产品列表 / Target Engagement Portfolio',
    tableHeaders: ['靶点', 'Cell Line Assay Kit', 'eXpress® Kit (10-plate)', 'eXpress® Kit (2-plate)'],
    epigeneticTitle: '表观遗传蛋白 / Epigenetic Proteins',
    kinaseTitle: '激酶靶点 / Kinase Targets',
    otherTitle: '其他蛋白 / Other Proteins',
    reagentTitle: '试剂 / Reagents',
    reagentHeaders: ['描述', '货号', '规格'],
    reagentDescriptions: ['InCELL检测试剂盒', 'InCELL检测试剂盒', 'InCELL检测试剂盒', 'InCELL检测试剂盒', 'InCELL检测试剂盒', 'InCELL Pulse 工具箱'],
    note: '* 我们可以利用 InCELL® 平台为您的特定兴趣蛋白开发靶标结合检测服务。',
  },
  ja: {
    title: 'ターゲットエンゲージメント Target Engagement Assays',
    subtitle: '汎用的な細胞ベース化合物-ターゲット結合アッセイ',
    intro: [
      'ターゲットエンゲージメントアッセイは、化合物が特定のタンパク質ターゲットに結合するかを測定します。細胞環境内で化合物の細胞透過性とターゲットとの相互作用を確認でき、化合物効力の評価と作用機序（MOA）の確認に役立ちます。',
      'InCELL 細胞ベース化合物-ターゲット結合アッセイは、ネイティブな細胞環境で化合物の細胞内侵入とタンパク質ターゲット結合を確認できます。阻害剤のスクリーニングと順位付け、生化学アッセイ由来ヒットの検証、細胞環境下での EC50 測定に使用できます。カスタム化学トレーサーや抗体試薬を必要とせず、機能アッセイが難しい場合の実用的な解決策です。',
      'InCELL ターゲットエンゲージメントアッセイは TPD プログラムと相補的であり、化合物のターゲット結合部分の解析と最適化に利用できます。細胞株アッセイキット、アッセイレディキット、DIY スターターキットにより、ターゲット結合アッセイを迅速に構築できます。',
    ],
    highlightsTitle: '製品ハイライト',
    highlights: [
      { title: '高い生物学的関連性', description: '細胞内への化合物侵入とターゲット結合を定量し、創薬判断の信頼性を高めます' },
      { title: '簡便な操作', description: 'ウォッシュ不要の均一系アッセイで、化学発光リードアウトにより化合物とターゲットの結合を測定できます' },
      { title: '高スループット対応', description: '自動化しやすく、多数の化合物を正確にスクリーニング・評価できます' },
      { title: '迅速な開発ワークフロー', description: '詳細なプロトコルに基づき、約 2 週間以内に独自の細胞ベースターゲット結合アッセイを構築できます' },
    ],
    moaTitle: '作用機序',
    moaIntro: 'Eurofins DiscoverX の 2 つの主要プラットフォームである InCELL Pulse™ と InCELL Hunter™ は、いずれも検証済み EFC 技術を基盤とし類似した原理を共有しますが、基盤となる機構が異なるため、異なるタイプのタンパク質ターゲットに適しています。',
    hunterDescription: 'タンパク質ターンオーバーまたは相互作用破壊に関連するタンパク質安定化原理に基づきます。細胞内タンパク質恒常性に対する化合物の影響を測定する用途に適しています。',
    pulseDescription: 'タンパク質熱安定性の原理に基づきます。小分子結合により誘導される熱安定性変化を EFC 技術で検出し、ターゲット結合を定量します。',
    portfolioTitle: 'ターゲットエンゲージメント製品リスト / Target Engagement Portfolio',
    tableHeaders: ['ターゲット', 'Cell Line Assay Kit', 'eXpress® Kit (10-plate)', 'eXpress® Kit (2-plate)'],
    epigeneticTitle: 'エピジェネティックタンパク質 / Epigenetic Proteins',
    kinaseTitle: 'キナーゼターゲット / Kinase Targets',
    otherTitle: 'その他タンパク質 / Other Proteins',
    reagentTitle: '試薬 / Reagents',
    reagentHeaders: ['説明', 'カタログ番号', 'サイズ'],
    reagentDescriptions: ['InCELL アッセイキット', 'InCELL アッセイキット', 'InCELL アッセイキット', 'InCELL アッセイキット', 'InCELL アッセイキット', 'InCELL Pulse ツールボックス'],
    note: '* InCELL® プラットフォームを用いて、ご希望のタンパク質向けターゲットエンゲージメントアッセイ開発サービスを提供できます。',
  },
  ko: {
    title: '타깃 결합 Target Engagement Assays',
    subtitle: '범용 세포 기반 화합물-타깃 결합 분석',
    intro: [
      '타깃 결합 분석은 화합물이 특정 단백질 타깃에 결합하는지를 측정합니다. 세포 환경에서 화합물의 세포 투과성과 타깃과의 상호작용을 모니터링하여 화합물 효능을 평가하고 작용 기전(MOA)을 확인할 수 있습니다.',
      'InCELL 세포 기반 화합물-타깃 결합 분석은 native 세포 환경에서 화합물의 세포 진입과 단백질 타깃 결합을 확인할 수 있습니다. 억제제 스크리닝 및 순위화, 생화학 분석에서 얻은 hit 검증, 세포 환경에서 EC50 측정에 사용할 수 있습니다. 맞춤형 화학 추적자나 항체 시약이 필요 없어 기능 분석이 어렵거나 불가능한 경우 편리한 솔루션을 제공합니다.',
      'InCELL 타깃 결합 분석은 TPD 프로젝트와 매우 상호보완적이며, 화합물과 타깃의 결합 부분을 해석하고 최적화하는 데 사용할 수 있습니다. 세포주 분석 키트, 즉시 사용 가능한 키트, DIY 스타터 키트를 통해 타깃 결합 분석 시스템을 빠르게 구축할 수 있습니다.',
    ],
    highlightsTitle: '제품 하이라이트',
    highlights: [
      { title: '높은 생물학적 관련성', description: '세포 수준의 화합물 진입과 타깃 결합 정량 데이터를 제공하여 신약 발굴 의사결정 신뢰도 향상' },
      { title: '간편한 조작', description: '무세척 균질 분석 절차와 화학발광 판독으로 화합물과 타깃의 결합을 측정' },
      { title: '고처리량 스크리닝 호환', description: '자동화가 쉬우며 다수 화합물의 정확한 스크리닝과 평가에 적합' },
      { title: '빠른 개발 절차', description: '상세 프로토콜에 따라 2주 이내에 자체 타깃 결합 세포 분석 시스템 구축 가능' },
    ],
    moaTitle: '작용 기전',
    moaIntro: 'Eurofins DiscoverX의 두 주요 분석 플랫폼인 InCELL Pulse™와 InCELL Hunter™는 모두 검증된 EFC 기술을 기반으로 하며 유사한 원리를 공유하지만, 기반 기전에 차이가 있어 서로 다른 유형의 단백질 타깃에 적합합니다.',
    hunterDescription: '단백질 턴오버 또는 상호작용 붕괴와 관련된 단백질 안정화 원리에 기반합니다. 화합물이 세포 내 단백질 항상성에 미치는 영향을 모니터링하는 데 적합합니다.',
    pulseDescription: '단백질 열 안정성 원리에 기반합니다. 소분자 결합으로 유도되는 단백질 열 안정성 변화를 EFC 기술로 포착하여 타깃 결합을 정량 분석합니다.',
    portfolioTitle: '타깃 결합 제품 목록 / Target Engagement Portfolio',
    tableHeaders: ['타깃', 'Cell Line Assay Kit', 'eXpress® Kit (10-plate)', 'eXpress® Kit (2-plate)'],
    epigeneticTitle: '후성유전 단백질 / Epigenetic Proteins',
    kinaseTitle: '키나아제 타깃 / Kinase Targets',
    otherTitle: '기타 단백질 / Other Proteins',
    reagentTitle: '시약 / Reagents',
    reagentHeaders: ['설명', '카탈로그 번호', '규격'],
    reagentDescriptions: ['InCELL 분석 키트', 'InCELL 분석 키트', 'InCELL 분석 키트', 'InCELL 분석 키트', 'InCELL 분석 키트', 'InCELL Pulse 툴박스'],
    note: '* InCELL® 플랫폼을 활용해 관심 단백질에 대한 맞춤형 타깃 결합 분석 개발 서비스를 제공할 수 있습니다.',
  },
};

const ProductTable = ({ data, title, headers }: { data: ProductRow[]; title: string; headers: string[] }) => (
  <div className="mb-12 w-fit overflow-hidden rounded-xl border border-slate-200 shadow-xl">
    <div className="bg-[#4B827E] px-6 py-4">
      <h3 className="whitespace-nowrap text-lg font-bold uppercase tracking-wider text-white">{title}</h3>
    </div>
    <div className="overflow-x-auto">
      <table className="divide-y divide-slate-200">
        <thead className="bg-slate-50 text-slate-500">
          <tr>
            {headers.map((header, index) => (
              <th key={header} className={`whitespace-nowrap px-6 py-4 text-left text-xs font-bold uppercase tracking-wider ${index < headers.length - 1 ? 'border-r border-slate-200' : ''}`}>
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-200 bg-white">
          {data.map((row, idx) => (
            <tr key={`${row.target}-${idx}`} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50 hover:bg-teal-50/30 transition-colors'}>
              <td className="whitespace-nowrap border-r border-slate-100 px-6 py-4 text-sm font-bold text-[#1C2C5E]">{row.target}</td>
              <td className="whitespace-nowrap border-r border-slate-100 px-6 py-4 font-mono text-sm text-slate-600">{row.cellLine}</td>
              <td className="whitespace-nowrap border-r border-slate-100 px-6 py-4 font-mono text-sm text-slate-600">{row.exp10 || '-'}</td>
              <td className="whitespace-nowrap px-6 py-4 font-mono text-sm text-slate-600">{row.exp2 || '-'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

interface TargetEngagementDetailProps {
  language?: Language;
}

const TargetEngagementDetail: React.FC<TargetEngagementDetailProps> = ({ language = 'zh' }) => {
  const content = localizedContent[language];
  const reagents: ReagentRow[] = reagentData.map((row, index) => ({ ...row, desc: content.reagentDescriptions[index] }));

  return (
    <div className="bg-white">
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h1 className="mb-4 text-4xl font-extrabold text-[#1C2C5E]">{content.title}</h1>
          <h2 className="mb-6 text-2xl font-bold text-[#4B827E]">{content.subtitle}</h2>
          <div className="mb-8 h-1 w-20 bg-[#4B827E]"></div>
          <div className="space-y-4 text-lg leading-relaxed text-slate-600">
            {content.intro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-slate-100 bg-slate-50 p-8">
          <h3 className="mb-8 flex items-center text-2xl font-bold text-[#1C2C5E]">
            <div className="mr-4 h-8 w-2 rounded-full bg-[#4B827E]"></div>
            {content.highlightsTitle}
          </h3>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {content.highlights.map((highlight, index) => (
              <div key={highlight.title} className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-teal-50 font-bold text-[#4B827E]">{index + 1}</div>
                <div>
                  <h4 className="mb-1 font-bold text-[#1C2C5E]">{highlight.title}</h4>
                  <p className="text-sm text-slate-600">{highlight.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-10 text-center text-3xl font-bold text-[#1C2C5E]">{content.moaTitle}</h2>
          <div className="mx-auto max-w-6xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="p-10">
              <p className="mb-8 text-lg leading-relaxed text-slate-600">{content.moaIntro}</p>
              <div className="space-y-8">
                <div className="rounded-2xl border border-slate-100 bg-slate-50 p-8">
                  <h4 className="mb-4 text-2xl font-bold text-[#4B827E]">InCELL Hunter™</h4>
                  <p className="mb-6 leading-relaxed text-slate-600">{content.hunterDescription}</p>
                  <img src="/pic/Target-Engagement-Assays-principles-2.png" alt="InCELL Hunter Principles" className="w-3/4 rounded-xl border border-slate-200 shadow-md" />
                </div>
                <div className="rounded-2xl border border-slate-100 bg-slate-50 p-8">
                  <h4 className="mb-4 text-2xl font-bold text-[#4B827E]">InCELL Pulse™</h4>
                  <p className="mb-6 leading-relaxed text-slate-600">{content.pulseDescription}</p>
                  <img src="/pic/Target-Engagement-Assays-principles-1.png" alt="InCELL Pulse Principles" className="w-3/4 rounded-xl border border-slate-200 shadow-md" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 pb-32 sm:px-6 lg:px-8">
        <h2 className="mb-12 text-center text-3xl font-bold text-[#1C2C5E] md:text-left">{content.portfolioTitle}</h2>
        <ProductTable title={content.epigeneticTitle} data={epigeneticData} headers={content.tableHeaders} />
        <ProductTable title={content.kinaseTitle} data={kinaseData} headers={content.tableHeaders} />
        <ProductTable title={content.otherTitle} data={otherData} headers={content.tableHeaders} />

        <div className="mb-12 w-fit overflow-hidden rounded-xl border border-slate-200 shadow-xl">
          <div className="bg-[#4B827E] px-6 py-4">
            <h3 className="whitespace-nowrap text-lg font-bold uppercase tracking-wider text-white">{content.reagentTitle}</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="divide-y divide-slate-200">
              <thead className="bg-slate-50 text-slate-500">
                <tr>
                  {content.reagentHeaders.map((header, index) => (
                    <th key={header} className={`whitespace-nowrap px-6 py-4 text-left text-xs font-bold uppercase tracking-wider ${index < content.reagentHeaders.length - 1 ? 'border-r border-slate-200' : ''}`}>
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 bg-white">
                {reagents.map((row, idx) => (
                  <tr key={row.cat} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                    <td className="whitespace-nowrap border-r border-slate-100 px-6 py-4 text-sm font-bold text-[#1C2C5E]">{row.desc}</td>
                    <td className="whitespace-nowrap border-r border-slate-100 px-6 py-4 font-mono text-sm text-slate-600">{row.cat}</td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-slate-500">{row.spec}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="rounded-lg border border-dashed border-slate-300 bg-slate-50 py-4 text-sm italic text-slate-500">{content.note}</p>
        </div>
      </section>
    </div>
  );
};

export default TargetEngagementDetail;
