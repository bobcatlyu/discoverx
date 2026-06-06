import React from 'react';
import { CHECKPOINT_PORTFOLIO_COLUMNS, CHECKPOINT_PORTFOLIO_ROWS } from '../data/checkpointPortfolio';
import { Language } from '../types';
import { localizeTargetColumns, localizeTargetRows, targetDetailCommon } from '../utils/targetDetailLocalization';

interface MoaItem {
  title: string;
  description: string;
  imageUrl?: string;
  imageUrl2?: string;
  maxWidth?: string;
}

interface PortfolioTableProps {
  columns: string[];
  rows: string[][];
  catalogLabel: string;
}

const normalizeHighlight = (highlight: string) => {
  const [heading, ...rest] = highlight.split('——');
  return {
    heading,
    description: rest.join('——'),
  };
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
  intro: string[];
  highlights: string[];
  moas: MoaItem[];
  tableTitle: string;
}> = {
  zh: {
    title: '免疫检查点受体 Checkpoint Receptors Assays',
    intro: [
      '免疫应答的调控依赖于共刺激受体与抑制性检查点受体之间的平衡，而许多癌症可利用这一机制逃避免疫攻击。因此，阻断抑制性受体或激活免疫刺激性检查点受体（例如 PD-1 受体）的治疗药物已被证明能够恢复抗肿瘤免疫应答，并成为重要的治疗策略。',
      'Eurofins DiscoverX 提供广泛且多样化的检测体系，用于免疫治疗药物的表征、筛选以及效价 QC 批放行检测，针对抑制性与共刺激性检查点受体均提供相应解决方案。PathHunter® 功能性、作用机制（MOA）导向的细胞水平检测可用于分析检查点受体的信号传导、二聚化、内吞以及聚集/交联等生物学事件。这类检测流程简便快速，在多数目标检测中可于数小时内获得高度灵敏的检测结果，无需使用原代细胞或复杂实验流程。',
    ],
    highlights: [
      '生物学相关性强——MOA 导向的功能性检测，用于监测检查点信号并评估小分子或生物药治疗的作用',
      '产品组合全面——提供大量现货检测体系，加速检测开发与实施',
      '检测稳健可靠——高度可重复的检测体系，适用于免疫治疗药物研发中的效价与批放行应用',
      '流程简便、结果快速——均相检测流程易于操作，兼容高通量格式并可在多实验室环境中提高效率',
    ],
    moas: [
    {
      title: '信号转导 (Signaling)',
      description: '利用 EFC 技术监测受体激活后招募蛋白（如 SHP-1/2）的过程。这种方法能直接反映抗体药物对受体功能的调节作用。',
      imageUrl: '/pic/Checkpoint-Receptor-Assays-principles-1.jpg',
      maxWidth: 'max-w-xl',
    },
    {
      title: '配体展示 (Ligand-Presenting)',
      description: '经过工程化改造的配体细胞株，稳定表达特定的免疫检查点配体（如 PD-L1, CD80），用于模拟抗原提呈细胞 (APC) 与 T 细胞的相互作用，是共刺激/共抑制实验的标准工具。',
    },
    {
      title: '受体内吞 (Internalization)',
      description: '监测受体从细胞表面向胞内移动的过程。这对于开发靶向受体清除或 ADC 药物至关重要，能有效评估抗体诱导的靶点下调。',
      imageUrl: '/pic/Internalization.jpg',
      maxWidth: 'max-w-md',
    },
    {
      title: '受体二聚化 (Dimerization)',
      description: '直接监测受体分子间的相互作用，揭示抗体如何通过诱导或阻断受体复合体的形成来发挥药效。',
      imageUrl: '/pic/Dimerization.jpg',
      maxWidth: 'max-w-md',
    },
    {
      title: 'FcγR 聚簇 (Clustering)',
      description: '专门针对 Fc 受体设计的检测方案，评估抗体 Fc 段与 FcγR 之间的结合及诱导的受体聚簇效应。',
      imageUrl: '/pic/Agonist IgSF.png',
      imageUrl2: '/pic/Agonist_TNFRSF.png',
    },
    ],
    tableTitle: '免疫检查点产品列表 (Checkpoint Portfolio)',
  },
  ja: {
    title: '免疫チェックポイント受容体 Checkpoint Receptors Assays',
    intro: [
      '免疫応答の制御は、共刺激受容体と抑制性チェックポイント受容体のバランスに依存しています。多くのがんはこの仕組みを利用して免疫攻撃を回避します。そのため、抑制性受容体を阻害する、または PD-1 などの免疫刺激性チェックポイント受容体を活性化する治療薬は、抗腫瘍免疫応答を回復させる重要な戦略となっています。',
      'Eurofins DiscoverX は、免疫療法薬の特性評価、スクリーニング、ポテンシー QC・ロットリリース試験に利用できる幅広いアッセイを提供しています。PathHunter® の作用機序（MOA）に基づく細胞ベース機能アッセイは、チェックポイント受容体のシグナル伝達、二量体化、内在化、クラスタリング／架橋などの生物学的イベントを解析できます。多くのターゲットで数時間以内に高感度な結果が得られ、初代細胞や複雑な手順を必要としません。',
    ],
    highlights: [
      '高い生物学的関連性——MOA ベースの機能アッセイにより、チェックポイントシグナルを測定し、小分子・バイオ医薬品の作用を評価',
      '包括的な製品ポートフォリオ——多数の既製アッセイを提供し、アッセイ開発と導入を短縮',
      '堅牢で信頼性の高いアッセイ——再現性の高い試験系により、免疫療法薬開発のポテンシー評価とロットリリースを支援',
      '簡便なワークフローと迅速な結果——均一系アッセイで操作しやすく、高スループット形式や複数施設での運用に対応',
    ],
    moas: [
      {
        title: 'シグナル伝達 (Signaling)',
        description: 'EFC 技術を用いて、受容体活性化後に SHP-1/2 などのタンパク質がリクルートされる過程を測定します。抗体医薬が受容体機能をどのように調節するかを直接反映できます。',
        imageUrl: '/pic/Checkpoint-Receptor-Assays-principles-1.jpg',
        maxWidth: 'max-w-xl',
      },
      {
        title: 'リガンド提示 (Ligand-Presenting)',
        description: 'PD-L1 や CD80 など特定の免疫チェックポイントリガンドを安定発現するように設計されたリガンド提示細胞株です。APC と T 細胞の相互作用を模倣し、共刺激・共抑制評価の標準ツールとして使用できます。',
      },
      {
        title: '受容体内在化 (Internalization)',
        description: '受容体が細胞表面から細胞内へ移動する過程を測定します。受容体除去や ADC 開発では、抗体誘導性のターゲットダウンレギュレーション評価に重要です。',
        imageUrl: '/pic/Internalization.jpg',
        maxWidth: 'max-w-md',
      },
      {
        title: '受容体二量体化 (Dimerization)',
        description: '受容体分子間の相互作用を直接測定し、抗体が受容体複合体の形成を誘導または阻害することで薬効を発揮する仕組みを解析します。',
        imageUrl: '/pic/Dimerization.jpg',
        maxWidth: 'max-w-md',
      },
      {
        title: 'FcγR クラスタリング (Clustering)',
        description: 'Fc 受容体向けに設計されたアッセイで、抗体 Fc 領域と FcγR の結合および誘導される受容体クラスタリングを評価します。',
        imageUrl: '/pic/Agonist IgSF.png',
        imageUrl2: '/pic/Agonist_TNFRSF.png',
      },
    ],
    tableTitle: '免疫チェックポイント製品リスト (Checkpoint Portfolio)',
  },
  ko: {
    title: '면역 체크포인트 수용체 Checkpoint Receptors Assays',
    intro: [
      '면역 반응 조절은 공동자극 수용체와 억제성 체크포인트 수용체 사이의 균형에 의존합니다. 많은 암은 이 기전을 이용해 면역 공격을 회피합니다. 따라서 억제성 수용체를 차단하거나 PD-1과 같은 면역 자극성 체크포인트 수용체를 활성화하는 치료제는 항종양 면역 반응을 회복시키는 중요한 전략입니다.',
      'Eurofins DiscoverX는 면역치료제의 특성 분석, 스크리닝, potency QC 및 배치 방출 시험에 사용할 수 있는 폭넓은 분석 시스템을 제공합니다. PathHunter®의 작용 기전(MOA) 기반 세포 기능 분석은 체크포인트 수용체의 신호 전달, 이합체화, 내재화, 클러스터링/교차결합 등의 생물학적 이벤트를 분석할 수 있습니다. 대부분의 타깃 분석은 복잡한 실험 절차나 1차 세포 없이도 수 시간 내에 고감도 결과를 제공합니다.',
    ],
    highlights: [
      '높은 생물학적 관련성——MOA 기반 기능 분석으로 체크포인트 신호를 모니터링하고 소분자 또는 바이오의약품의 작용을 평가',
      '포괄적인 제품 포트폴리오——다양한 기성 분석 시스템으로 분석 개발과 도입 기간 단축',
      '견고하고 신뢰성 높은 분석——재현성이 높은 시스템으로 면역치료제 개발의 potency 및 배치 방출 용도 지원',
      '간편한 절차와 빠른 결과——균질 분석 방식으로 조작이 쉽고 고처리량 형식 및 다기관 환경에 적합',
    ],
    moas: [
      {
        title: '신호 전달 (Signaling)',
        description: 'EFC 기술을 사용해 수용체 활성화 후 SHP-1/2와 같은 단백질이 모집되는 과정을 측정합니다. 항체 의약품이 수용체 기능을 어떻게 조절하는지 직접 반영합니다.',
        imageUrl: '/pic/Checkpoint-Receptor-Assays-principles-1.jpg',
        maxWidth: 'max-w-xl',
      },
      {
        title: '리간드 제시 (Ligand-Presenting)',
        description: 'PD-L1, CD80 등 특정 면역 체크포인트 리간드를 안정적으로 발현하도록 엔지니어링된 세포주입니다. APC와 T 세포의 상호작용을 모사하며 공동자극/공동억제 평가의 표준 도구로 사용할 수 있습니다.',
      },
      {
        title: '수용체 내재화 (Internalization)',
        description: '수용체가 세포 표면에서 세포 내부로 이동하는 과정을 모니터링합니다. 수용체 제거 또는 ADC 개발에서 항체 유도 타깃 다운레귤레이션 평가에 중요합니다.',
        imageUrl: '/pic/Internalization.jpg',
        maxWidth: 'max-w-md',
      },
      {
        title: '수용체 이합체화 (Dimerization)',
        description: '수용체 분자 간 상호작용을 직접 측정하여 항체가 수용체 복합체 형성을 유도하거나 차단함으로써 작용하는 방식을 분석합니다.',
        imageUrl: '/pic/Dimerization.jpg',
        maxWidth: 'max-w-md',
      },
      {
        title: 'FcγR 클러스터링 (Clustering)',
        description: 'Fc 수용체를 위해 설계된 분석으로, 항체 Fc 영역과 FcγR 간 결합 및 유도되는 수용체 클러스터링을 평가합니다.',
        imageUrl: '/pic/Agonist IgSF.png',
        imageUrl2: '/pic/Agonist_TNFRSF.png',
      },
    ],
    tableTitle: '면역 체크포인트 제품 목록 (Checkpoint Portfolio)',
  },
};

interface CheckpointDetailProps {
  language?: Language;
}

const CheckpointDetail: React.FC<CheckpointDetailProps> = ({ language = 'zh' }) => {
  const content = localizedContent[language];
  const labels = targetDetailCommon[language];
  const columns = localizeTargetColumns(CHECKPOINT_PORTFOLIO_COLUMNS, language);
  const rows = localizeTargetRows(CHECKPOINT_PORTFOLIO_ROWS, language);

  return (
    <div className="bg-white">
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="w-full">
          <h1 className="mb-2 text-4xl font-extrabold text-[#1C2C5E]">{content.title}</h1>
          <div className="mb-8 h-1 w-20 bg-[#4B827E]"></div>
          <div className="space-y-6 text-lg leading-relaxed text-slate-600">
            {content.intro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
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
                      <p className="mb-6 text-lg leading-relaxed text-slate-600">{item.description}</p>
                      {(item.imageUrl || item.imageUrl2) && (
                        <div className="mt-6">
                          {item.imageUrl2 ? (
                            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                              <img src={item.imageUrl} alt={`${item.title} - 1`} className="w-full rounded-xl border border-slate-200 shadow-lg" />
                              <img src={item.imageUrl2} alt={`${item.title} - 2`} className="w-full rounded-xl border border-slate-200 shadow-lg" />
                            </div>
                          ) : (
                            <img src={item.imageUrl} alt={item.title} className={`w-full ${item.maxWidth || 'max-w-xl'} rounded-xl border border-slate-200 shadow-lg`} />
                          )}
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

export default CheckpointDetail;
