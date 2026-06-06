import React from 'react';
import { NHR_PORTFOLIO_COLUMNS, NHR_PORTFOLIO_ROWS } from '../data/nhrPortfolio';
import { Language } from '../types';
import { localizeTargetColumns, localizeTargetRows, targetDetailCommon } from '../utils/targetDetailLocalization';

interface MoaItem {
  title: string;
  description: string;
  imageUrl?: string;
  maxWidth?: string;
}

interface PortfolioTableProps {
  columns: string[];
  rows: string[][];
  catalogLabel: string;
}

const normalizeHighlight = (highlight: string) => {
  const [heading, ...rest] = highlight.split('——');
  return { heading, description: rest.join('——') };
};

const PortfolioTable: React.FC<PortfolioTableProps> = ({ columns, rows, catalogLabel }) => (
  <div className="w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl">
    <div className="overflow-x-auto">
      <table className="w-full table-auto divide-y divide-slate-200">
        <thead className="bg-[#4B827E] text-white">
          <tr>
            {columns.map((column) => (
              <th key={column} className="px-5 py-4 text-left text-sm font-bold uppercase tracking-wider">
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-200 bg-white">
          {rows.map((row, rowIdx) => (
            <tr key={`${row[3] || row[0]}-${rowIdx}`} className={rowIdx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
              {row.map((cell, cellIdx) => (
                <td
                  key={`${columns[cellIdx]}-${cellIdx}`}
                  className={`border-r border-slate-100 px-5 py-4 align-top text-sm last:border-r-0 ${
                    columns[cellIdx] === catalogLabel ? 'font-mono whitespace-nowrap text-[#1C2C5E]' : 'text-slate-700'
                  }`}
                >
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

const localizedContent: Record<Language, {
  title: string;
  subtitle: string;
  intro: string[];
  highlights: string[];
  moas: MoaItem[];
  tableTitle: string;
}> = {
  zh: {
    title: '核激素受体 NHR Assays',
    subtitle: '用于评估核蛋白激活与核转位的细胞水平检测',
    intro: [
      '核蛋白在调控细胞行为及信号通路表达中发挥关键作用，许多核蛋白从细胞核内外转运的过程受到高度调控，而这种转运机制直接影响蛋白功能。通过药物控制该转运行为，或确保潜在药物不会对转运产生不良影响，是评估核转位的重要应用场景。',
      '核激素受体（NHR，包括类固醇受体）是核蛋白的重要子类，在配体激活后调控基因表达，并在内分泌信号通路中发挥核心作用。NHR 通常依赖共激活蛋白或共抑制蛋白（例如类固醇受体辅因子 SRC 蛋白）来实现其功能。增强或破坏这些蛋白之间的相互作用，可作为调控 NHR 相关基因表达的治疗策略。',
      'NHR 是极具吸引力的药物开发靶点，涵盖了乳腺癌、前列腺癌、糖尿病、炎症及心血管疾病等广泛领域。',
      'Eurofins DiscoverX 提供 PathHunter® 核转位与蛋白相互作用细胞水平功能检测，用于研究蛋白转位事件及核蛋白激活状态。',
    ],
    highlights: [
      '均相、高通量兼容检测——操作简便、灵敏度高的细胞水平检测平台，无需抗体、荧光标签或特殊设备',
      '灵活解决方案——可构建自有定量功能性细胞检测体系，用于研究任意目标蛋白的核转位行为',
      '多样化治疗开发——可定量评估针对核蛋白的小分子、肽类或抗体类治疗药物的作用效果',
    ],
    moas: [
      {
        title: '核易位 (Nuclear Translocation)',
        description: '核受体通常在细胞质 (Cytoplasm) 中与伴侣蛋白结合。当化合物 (Compound) 结合后，诱导融合了 ED 标签的 NHR 构象变化并向细胞核 (Nucleus) 易位。在核内，NHR-ED 与定位于核内的 EA 标签 (NUC-EA Format) 发生酶片段互补 (EFC)，形成完整的 β-Gal 酶，随后水解底物 (β-Gal Substrate) 产生化学发光信号 (Light Signal)。这一过程可高度灵敏地定量化合物对 NHR 激活诱导的核转运效能。',
        imageUrl: '/pic/NHR-Translocation_AssayPrinciple_small-1.jpg',
        maxWidth: 'max-w-2xl',
      },
      {
        title: '蛋白间相互作用 (Protein Interaction)',
        description: '利用酶片段互补 (EFC) 技术，直接监测受体激活后与核心共调节因子（Co-activators 或 Co-repressors）之间的物理相互作用。这种方法具有极高的灵敏度和特异性，是研究核受体药理活性及偏向性调节的首选方法。',
        imageUrl: '/pic/NHR-Interaction_AssayPrinciple_small.jpg',
        maxWidth: 'max-w-2xl',
      },
    ],
    tableTitle: '核受体 (NHR) 产品列表',
  },
  ja: {
    title: '核内ホルモン受容体 NHR Assays',
    subtitle: '核タンパク質の活性化と核移行を評価する細胞ベースアッセイ',
    intro: [
      '核タンパク質は細胞挙動やシグナル経路の発現制御に重要な役割を果たします。多くの核タンパク質では、核内外への輸送が厳密に制御されており、この輸送機構がタンパク質機能に直接影響します。薬物によって輸送を制御する、または候補薬が輸送に悪影響を与えないことを確認することは、核移行評価の重要な用途です。',
      '核内ホルモン受容体（NHR、ステロイド受容体を含む）は核タンパク質の重要なサブクラスで、リガンド活性化後に遺伝子発現を制御し、内分泌シグナル経路で中心的な役割を担います。NHR は通常、SRC タンパク質などのコアクチベーターまたはコリプレッサーに依存して機能します。これらのタンパク質間相互作用を増強または阻害することは、NHR 関連遺伝子発現を調節する治療戦略となります。',
      'NHR は乳がん、前立腺がん、糖尿病、炎症、心血管疾患など幅広い領域で魅力的な創薬ターゲットです。',
      'Eurofins DiscoverX は、タンパク質移行イベントと核タンパク質活性化状態を研究するための PathHunter® 核移行およびタンパク質相互作用細胞ベース機能アッセイを提供しています。',
    ],
    highlights: [
      '均一系・高スループット対応——操作が簡単で高感度な細胞ベースアッセイプラットフォーム。抗体、蛍光タグ、特殊装置は不要',
      '柔軟なソリューション——任意のターゲットタンパク質の核移行を研究するため、独自の定量的機能細胞アッセイを構築可能',
      '多様な治療薬開発に対応——核タンパク質を標的とする小分子、ペプチド、抗体治療薬の作用を定量評価可能',
    ],
    moas: [
      {
        title: '核移行 (Nuclear Translocation)',
        description: '核受容体は通常、細胞質でシャペロンタンパク質と結合しています。化合物が結合すると、ED タグ融合 NHR の構造変化と核内移行が誘導されます。核内では NHR-ED が核局在 EA タグ（NUC-EA Format）と酵素断片相補（EFC）を起こし、完全な β-Gal 酵素を形成します。その後、基質分解により化学発光シグナルが生じ、NHR 活性化に伴う核輸送効率を高感度に定量できます。',
        imageUrl: '/pic/NHR-Translocation_AssayPrinciple_small-1.jpg',
        maxWidth: 'max-w-2xl',
      },
      {
        title: 'タンパク質間相互作用 (Protein Interaction)',
        description: 'EFC 技術により、受容体活性化後にコアクチベーターまたはコリプレッサーとの物理的相互作用を直接測定します。高い感度と特異性を備え、核受容体の薬理活性やバイアス調節の研究に適しています。',
        imageUrl: '/pic/NHR-Interaction_AssayPrinciple_small.jpg',
        maxWidth: 'max-w-2xl',
      },
    ],
    tableTitle: '核受容体 (NHR) 製品リスト',
  },
  ko: {
    title: '핵 호르몬 수용체 NHR Assays',
    subtitle: '핵 단백질 활성화와 핵 이동을 평가하는 세포 기반 분석',
    intro: [
      '핵 단백질은 세포 행동과 신호 경로 발현 조절에 핵심적인 역할을 합니다. 많은 핵 단백질의 핵 안팎 이동은 정밀하게 조절되며, 이러한 수송 기전은 단백질 기능에 직접적인 영향을 줍니다. 약물로 이 이동을 조절하거나 후보 약물이 이동 과정에 부정적 영향을 주지 않는지 확인하는 것은 핵 이동 평가의 중요한 활용 분야입니다.',
      '핵 호르몬 수용체(NHR, 스테로이드 수용체 포함)는 핵 단백질의 중요한 하위 그룹으로, 리간드 활성화 후 유전자 발현을 조절하고 내분비 신호 경로에서 핵심 역할을 합니다. NHR은 일반적으로 SRC 단백질과 같은 공활성화 단백질 또는 공억제 단백질에 의존해 기능합니다. 이러한 단백질 간 상호작용을 강화하거나 방해하는 것은 NHR 관련 유전자 발현을 조절하는 치료 전략이 될 수 있습니다.',
      'NHR은 유방암, 전립선암, 당뇨병, 염증 및 심혈관 질환 등 폭넓은 영역에서 매력적인 신약 개발 타깃입니다.',
      'Eurofins DiscoverX는 단백질 이동 이벤트와 핵 단백질 활성화 상태를 연구하기 위한 PathHunter® 핵 이동 및 단백질 상호작용 세포 기반 기능 분석을 제공합니다.',
    ],
    highlights: [
      '균질·고처리량 호환 분석——조작이 간편하고 민감도가 높은 세포 기반 분석 플랫폼으로 항체, 형광 태그 또는 특수 장비가 필요하지 않음',
      '유연한 솔루션——임의의 타깃 단백질 핵 이동을 연구하기 위한 자체 정량 기능 세포 분석 구축 가능',
      '다양한 치료제 개발 지원——핵 단백질을 표적으로 하는 소분자, 펩타이드 또는 항체 치료제의 효과를 정량 평가 가능',
    ],
    moas: [
      {
        title: '핵 이동 (Nuclear Translocation)',
        description: '핵 수용체는 일반적으로 세포질에서 샤페론 단백질과 결합해 있습니다. 화합물이 결합하면 ED 태그가 융합된 NHR의 구조 변화와 핵 이동이 유도됩니다. 핵 내에서 NHR-ED는 핵 내 위치 EA 태그(NUC-EA Format)와 효소 단편 상보(EFC)를 일으켜 완전한 β-Gal 효소를 형성하고, 기질 분해 후 화학발광 신호가 생성됩니다. 이를 통해 NHR 활성화에 따른 핵 수송 효능을 고감도로 정량할 수 있습니다.',
        imageUrl: '/pic/NHR-Translocation_AssayPrinciple_small-1.jpg',
        maxWidth: 'max-w-2xl',
      },
      {
        title: '단백질 간 상호작용 (Protein Interaction)',
        description: 'EFC 기술을 이용해 수용체 활성화 후 핵심 공조절 인자(Co-activators 또는 Co-repressors)와의 물리적 상호작용을 직접 측정합니다. 높은 민감도와 특이성을 제공하며 핵 수용체 약리 활성 및 편향 조절 연구에 적합합니다.',
        imageUrl: '/pic/NHR-Interaction_AssayPrinciple_small.jpg',
        maxWidth: 'max-w-2xl',
      },
    ],
    tableTitle: '핵 수용체 (NHR) 제품 목록',
  },
};

interface NhrDetailProps {
  language?: Language;
}

const NhrDetail: React.FC<NhrDetailProps> = ({ language = 'zh' }) => {
  const content = localizedContent[language];
  const labels = targetDetailCommon[language];
  const columns = localizeTargetColumns(NHR_PORTFOLIO_COLUMNS, language);
  const rows = localizeTargetRows(NHR_PORTFOLIO_ROWS, language);

  return (
    <div className="bg-white">
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="mb-2 text-4xl font-extrabold text-[#1C2C5E]">{content.title}</h1>
        <h2 className="mb-6 text-xl font-bold text-[#4B827E]">{content.subtitle}</h2>
        <div className="mb-8 h-1 w-20 bg-[#4B827E]"></div>
        <div className="space-y-6 text-lg leading-relaxed text-slate-600">
          {content.intro.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="border-t border-slate-100 bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-10 text-center text-3xl font-bold text-[#1C2C5E]">{labels.productHighlights}</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {content.highlights.map((highlight) => {
              const { heading, description } = normalizeHighlight(highlight);
              return (
                <div key={highlight} className="rounded-2xl border border-slate-100 bg-slate-50 p-8 transition-all hover:-translate-y-1 hover:shadow-lg">
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-[#4B827E]/10 text-[#4B827E]">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="mb-4 text-xl font-bold text-[#1C2C5E]">{heading}</h3>
                  <p className="leading-relaxed text-slate-600">{description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-10 text-center text-3xl font-bold text-[#1C2C5E]">{labels.moaTitle}</h2>
          <div className="mx-auto max-w-6xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="divide-y divide-slate-100">
              {content.moas.map((item, idx) => (
                <div key={item.title} className="p-10 transition-colors hover:bg-slate-50">
                  <div className="flex flex-col gap-8 md:flex-row md:items-start">
                    <div className="shrink-0">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-50 text-xl font-bold text-[#4B827E]">{idx + 1}</div>
                    </div>
                    <div className="flex-grow">
                      <h3 className="mb-4 text-2xl font-bold text-[#4B827E]">{item.title}</h3>
                      <p className="mb-6 text-lg leading-relaxed text-slate-600">{item.description}</p>
                      {item.imageUrl && (
                        <img src={item.imageUrl} alt={item.title} className={`mt-6 w-full ${item.maxWidth || 'max-w-xl'} rounded-xl border border-slate-200 shadow-lg`} />
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <h2 className="mb-10 text-center text-3xl font-bold text-[#1C2C5E] md:text-left">{content.tableTitle}</h2>
        <PortfolioTable columns={columns} rows={rows} catalogLabel={labels.catalogNumber} />
        <div className="mt-8 text-center">
          <p className="text-sm italic text-slate-500">{labels.missingTargetNote}</p>
        </div>
      </section>
    </div>
  );
};

export default NhrDetail;
