import React from 'react';
import { ION_CHANNEL_PORTFOLIO_COLUMNS, ION_CHANNEL_PORTFOLIO_ROWS } from '../data/ionChannelPortfolio';
import { Language } from '../types';
import { localizeTargetColumns, localizeTargetRows, targetDetailCommon } from '../utils/targetDetailLocalization';

interface MoaItem {
  title: string;
  description: string;
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
            <tr key={`${row[2] || row[1]}-${rowIdx}`} className={rowIdx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
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
  intro: string[];
  highlights: string[];
  moas: MoaItem[];
  tableTitle: string;
}> = {
  zh: {
    title: '离子通道 Ion Channels Assays',
    intro: [
      '用于靶点发现、命中筛选、先导优化及安全性研究的高质量 PrecisION™ 产品',
      '离子通道仍然是多种疾病的重要治疗靶点，包括心律失常、高血压、局部麻醉相关应用、疼痛、中风、癫痫、抑郁、双相情感障碍、囊性纤维化、心律失常、慢性阻塞性肺病（COPD）、自身免疫疾病以及糖尿病等。对于由单基因突变导致的罕见通道病（channelopathies），离子通道同样是极具吸引力的治疗靶点。离子通道不仅是一类重要的药物靶点，同时也是药物安全性评估的关键组成部分，例如美国 FDA 要求针对人类疾病靶点开发的药物必须进行相关安全性测试。',
      'Eurofins DiscoverX 的离子通道产品组合涵盖功能验证的 ion channel 产品，包括优化的 PrecisION 稳定细胞系与即用型检测细胞，用于细胞水平电生理实验；PathHunter® 药物转运检测（pharmacotrafficking assays），用于药物伴侣分子（pharmacochaperone）发现；以及 hERG 离子通道膜制备产品，用于安全性结合研究。',
      '该离子通道产品解决方案可评估电压门控、配体门控及其他多种靶点，用于筛选离子通道抑制剂并支持药物发现与安全性应用。离子通道细胞系在功能与药理学层面均经过验证，并通过公司内部药物发现与安全性实验室进行电生理表征，采用传统手动膜片钳及多种自动化膜片钳平台进行生物物理与药理学评估，由经验丰富的电生理学专家完成验证。',
    ],
    highlights: [
      '功能与药理学验证——细胞系已在药物发现与安全性项目中得到验证，多数细胞系已稳定使用十年以上',
      '卓越性能——专有细胞系载体技术确保稳定性、表达水平与电流均一性',
      '应用灵活——兼容手动与自动膜片钳研究、药物伴侣分子发现及安全性结合研究',
      '即用型细胞——冻存即用的细胞产品，解冻后即可进行电生理评估，无需额外细胞培养步骤',
    ],
    moas: [
      {
        title: '电生理检测 (Electrophysiological)',
        description: '作为离子通道研究的金标准，通过监测离子通过通道产生的电流，直接评估药物对通道开启、关闭或失活状态的影响。DiscoverX 细胞株针对自动膜片钳 (APC) 平台进行了优化。',
      },
      {
        title: '转运/贩运 (Pharmacotrafficking)',
        description: '监测错配或突变的离子通道蛋白（如 CFTR-ΔF508）从内质网向细胞膜的定向转运。这对于筛选能够拯救功能缺陷蛋白的小分子伴侣（Pharmacological Chaperones）具有重大意义。',
      },
      {
        title: '配体结合 (Binding)',
        description: '利用标记配体直接测定药物与离子通道特定结合位点的亲和力。适用于膜制品 (Membrane Prep) 形式，支持高通量的竞争性结合实验。',
      },
    ],
    tableTitle: '离子通道产品列表',
  },
  ja: {
    title: 'イオンチャネル Ion Channels Assays',
    intro: [
      'ターゲット探索、ヒットスクリーニング、リード最適化、安全性研究に適した高品質な PrecisION™ 製品です。',
      'イオンチャネルは、不整脈、高血圧、局所麻酔、疼痛、脳卒中、てんかん、うつ病、双極性障害、嚢胞性線維症、COPD、自己免疫疾患、糖尿病など多くの疾患で重要な治療ターゲットです。単一遺伝子変異による希少チャネル病でも魅力的なターゲットであり、薬物安全性評価の重要な要素でもあります。たとえば FDA は、ヒト疾患ターゲット向け薬剤について関連する安全性試験を求めています。',
      'Eurofins DiscoverX のイオンチャネル製品ポートフォリオには、機能検証済みの ion channel 製品が含まれます。細胞ベース電気生理実験向けに最適化された PrecisION 安定細胞株とアッセイレディ細胞、薬理シャペロン探索向けの PathHunter® pharmacotrafficking assays、安全性結合研究向けの hERG イオンチャネル膜標品を提供します。',
      'このソリューションは、電位依存性、リガンド依存性、その他さまざまなターゲットを評価でき、イオンチャネル阻害剤のスクリーニング、創薬、安全性用途を支援します。イオンチャネル細胞株は機能および薬理学的に検証され、社内の創薬・安全性ラボで手動パッチクランプと複数の自動パッチクランププラットフォームを用いて、経験豊富な電気生理専門家により評価されています。',
    ],
    highlights: [
      '機能・薬理学的検証済み——細胞株は創薬および安全性プロジェクトで検証され、多くは 10 年以上安定して使用されています',
      '優れた性能——独自の細胞株ベクター技術により、安定性、発現レベル、電流均一性を確保',
      '柔軟な用途——手動・自動パッチクランプ研究、薬理シャペロン探索、安全性結合研究に対応',
      'アッセイレディ細胞——凍結即用型細胞で、解凍後すぐに電気生理評価が可能。追加の細胞培養工程は不要',
    ],
    moas: [
      {
        title: '電気生理アッセイ (Electrophysiological)',
        description: 'イオンチャネル研究のゴールドスタンダードとして、チャネルを通過するイオン電流を測定し、薬物がチャネルの開口、閉鎖、不活性化状態に与える影響を直接評価します。DiscoverX 細胞株は自動パッチクランプ（APC）プラットフォーム向けに最適化されています。',
      },
      {
        title: 'トラフィッキング (Pharmacotrafficking)',
        description: 'CFTR-ΔF508 など、ミスフォールドまたは変異したイオンチャネルタンパク質が小胞体から細胞膜へ輸送される過程を測定します。機能欠損タンパク質を救済する小分子シャペロンの探索に重要です。',
      },
      {
        title: 'リガンド結合 (Binding)',
        description: '標識リガンドを用いて、薬物とイオンチャネルの特定結合部位との親和性を直接測定します。膜標品形式に適しており、高スループットの競合結合試験を支援します。',
      },
    ],
    tableTitle: 'イオンチャネル製品リスト',
  },
  ko: {
    title: '이온 채널 Ion Channels Assays',
    intro: [
      '타깃 발굴, 히트 스크리닝, 리드 최적화 및 안전성 연구를 위한 고품질 PrecisION™ 제품입니다.',
      '이온 채널은 부정맥, 고혈압, 국소마취 관련 응용, 통증, 뇌졸중, 간질, 우울증, 양극성 장애, 낭성 섬유증, COPD, 자가면역 질환, 당뇨병 등 다양한 질환에서 중요한 치료 타깃입니다. 단일 유전자 변이로 발생하는 희귀 채널병에서도 매력적인 치료 타깃이며, 약물 안전성 평가의 핵심 요소이기도 합니다. 예를 들어 FDA는 인간 질환 타깃을 대상으로 개발되는 약물에 관련 안전성 시험을 요구합니다.',
      'Eurofins DiscoverX의 이온 채널 제품 포트폴리오는 기능 검증된 ion channel 제품을 포함합니다. 세포 기반 전기생리 실험을 위한 최적화된 PrecisION 안정 세포주와 즉시 사용 가능한 분석 세포, 약물 샤페론 발굴을 위한 PathHunter® pharmacotrafficking assays, 안전성 결합 연구를 위한 hERG 이온 채널 막 표본을 제공합니다.',
      '이 솔루션은 전압 개폐, 리간드 개폐 및 기타 다양한 타깃을 평가할 수 있으며 이온 채널 억제제 스크리닝, 신약 개발 및 안전성 응용을 지원합니다. 이온 채널 세포주는 기능 및 약리학적으로 검증되었고, 사내 신약 개발 및 안전성 실험실에서 전통적 수동 패치 클램프와 다양한 자동화 패치 클램프 플랫폼을 통해 경험 많은 전기생리 전문가가 평가했습니다.',
    ],
    highlights: [
      '기능 및 약리학 검증——세포주는 신약 개발과 안전성 프로젝트에서 검증되었으며 대부분 10년 이상 안정적으로 사용됨',
      '우수한 성능——독자적인 세포주 벡터 기술로 안정성, 발현 수준, 전류 균일성 확보',
      '유연한 응용——수동 및 자동 패치 클램프 연구, 약물 샤페론 발굴, 안전성 결합 연구에 호환',
      '즉시 사용 가능한 세포——동결 즉시 사용형 세포로 해동 후 바로 전기생리 평가 가능, 추가 세포 배양 단계 불필요',
    ],
    moas: [
      {
        title: '전기생리 분석 (Electrophysiological)',
        description: '이온 채널 연구의 표준 방법으로, 채널을 통과하는 이온 전류를 모니터링하여 약물이 채널의 열림, 닫힘 또는 비활성화 상태에 미치는 영향을 직접 평가합니다. DiscoverX 세포주는 자동 패치 클램프(APC) 플랫폼에 최적화되어 있습니다.',
      },
      {
        title: '수송/트래피킹 (Pharmacotrafficking)',
        description: 'CFTR-ΔF508과 같이 잘못 접히거나 변이된 이온 채널 단백질이 소포체에서 세포막으로 이동하는 과정을 모니터링합니다. 기능 결함 단백질을 구제하는 소분자 샤페론 발굴에 중요합니다.',
      },
      {
        title: '리간드 결합 (Binding)',
        description: '표지 리간드를 이용해 약물과 이온 채널의 특정 결합 부위 간 친화도를 직접 측정합니다. 막 표본(Membrane Prep) 형태에 적합하며 고처리량 경쟁 결합 실험을 지원합니다.',
      },
    ],
    tableTitle: '이온 채널 제품 목록',
  },
};

interface IonChannelDetailProps {
  language?: Language;
}

const IonChannelDetail: React.FC<IonChannelDetailProps> = ({ language = 'zh' }) => {
  const content = localizedContent[language];
  const labels = targetDetailCommon[language];
  const columns = localizeTargetColumns(ION_CHANNEL_PORTFOLIO_COLUMNS, language);
  const rows = localizeTargetRows(ION_CHANNEL_PORTFOLIO_ROWS, language);

  return (
    <div className="bg-white">
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="mb-2 text-4xl font-extrabold text-[#1C2C5E]">{content.title}</h1>
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
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
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
                      <p className="text-lg leading-relaxed text-slate-600">{item.description}</p>
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

export default IonChannelDetail;
