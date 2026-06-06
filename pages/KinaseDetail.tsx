import React from 'react';
import { KINASE_RECEPTOR_PORTFOLIO_COLUMNS, KINASE_RECEPTOR_PORTFOLIO_ROWS } from '../data/kinaseReceptorPortfolio';
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
            <tr key={`${row[4] || row[0]}-${rowIdx}`} className={rowIdx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
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
}> = {
  zh: {
    title: '激酶受体 Receptor Tyrosine Kinase Assays',
    subtitle: '用于分析 RTK 二聚化、磷酸化、内吞及 SH2 招募的细胞水平检测',
    intro: [
      '用于分析 RTK 二聚化、磷酸化、内吞及 SH2 招募的细胞水平检测',
      '受体酪氨酸激酶（RTK）在细胞增殖、运动、分化及代谢等多种生理过程中发挥重要作用。大规模基因组研究发现 RTK 编码基因存在多种改变，例如 EGFR、HER2/ErbB2、MET 等基因的突变或扩增。RTK 信号失调与多种人类疾病相关，其中最突出的是多种癌症。人类肿瘤中 RTK 异常激活主要由四种机制驱动：功能获得性突变、基因扩增、染色体重排以及自分泌激活。',
      'Eurofins DiscoverX 提供 PathHunter® 细胞水平检测，用于 RTK 及与胞质酪氨酸激酶（CTK）相关的受体研究。这些创新检测体系可在细胞环境中解析受体激活机制，并用于发现新型抑制剂与治疗性抗体。PathHunter 检测可通过分析 RTK 与细胞因子受体的二聚化、磷酸化、内吞及 SH2 招募等事件来评估其功能活性。',
    ],
    highlights: [
      '应用范围广——可识别多种配体，包括抗受体抗体、抗配体抗体、激活型抗体、非 ATP 竞争性结合分子（变构调节剂）、配体结合抑制剂以及二聚化抑制剂',
      '高特异性——采用标记酪氨酸激酶设计，减少内源性酪氨酸激酶导致的背景干扰',
      '生物学相关性强——MOA 导向的功能性检测，用于监测 RTK 与细胞因子受体的激活与二聚化，适用于表征与筛选应用',
    ],
    moas: [
      {
        title: '受体二聚化 (Receptor Dimerization)',
        description: '监测受体酪氨酸激酶 (RTK) 在配体诱导下形成的同源或异源二聚体。这是激酶激活的起始步骤，对于评估单抗或双抗药物的激动活性及阻断效能至关重要。',
        imageUrl: '/pic/Dimerization.jpg',
        maxWidth: 'max-w-2xl',
      },
      {
        title: 'SH2 蛋白招募 (SH2 Protein Recruitment)',
        description: '监测活化磷酸化的激酶招募含有 SH2 结构域的信号转导蛋白（如 Shc1, PLCγ）。利用专有 EFC 技术直接在活细胞中定量评估激酶的功能性激活，具有极高的生物学相关性。',
        imageUrl: '/pic/RTK-CTK_AssayPrinciples_small.jpg',
        maxWidth: 'max-w-3xl',
      },
      {
        title: '受体内吞 (Receptor Internalization)',
        description: '定量追踪激酶受体在配体或抗体诱导下从细胞膜向内体室的移动过程。这对于 ADC 药物开发、抗体介导的靶点下调以及受体脱敏研究具有核心参考价值。',
        imageUrl: '/pic/Internalization.jpg',
        maxWidth: 'max-w-2xl',
      },
    ],
  },
  ja: {
    title: 'キナーゼ受容体 Receptor Tyrosine Kinase Assays',
    subtitle: 'RTK の二量体化、リン酸化、内在化、SH2 リクルートメントを解析する細胞ベースアッセイ',
    intro: [
      'RTK の二量体化、リン酸化、内在化、SH2 リクルートメントを解析する細胞ベースアッセイです。',
      '受容体型チロシンキナーゼ（RTK）は、細胞増殖、運動、分化、代謝など多くの生理プロセスで重要な役割を果たします。大規模ゲノム研究では、EGFR、HER2/ErbB2、MET などの RTK 遺伝子に変異や増幅が見つかっています。RTK シグナルの異常は多くの疾患、とくにがんと深く関連しており、機能獲得変異、遺伝子増幅、染色体再編成、自己分泌活性化が主な異常活性化機構です。',
      'Eurofins DiscoverX は、RTK および細胞質チロシンキナーゼ（CTK）関連受容体の研究向けに PathHunter® 細胞ベースアッセイを提供しています。これらの革新的なアッセイは、細胞環境内で受容体活性化機構を解析し、新規阻害剤や治療用抗体の発見を支援します。RTK とサイトカイン受容体の二量体化、リン酸化、内在化、SH2 リクルートメントを測定することで機能活性を評価できます。',
    ],
    highlights: [
      '幅広い用途——抗受容体抗体、抗リガンド抗体、アゴニスト抗体、非 ATP 競合性結合分子（アロステリック調節因子）、リガンド結合阻害剤、二量体化阻害剤など多様なリガンドを評価可能',
      '高い特異性——標識チロシンキナーゼ設計により、内因性チロシンキナーゼ由来のバックグラウンドを低減',
      '高い生物学的関連性——MOA ベースの機能アッセイにより、RTK とサイトカイン受容体の活性化・二量体化を測定し、特性評価とスクリーニングに対応',
    ],
    moas: [
      {
        title: '受容体二量体化 (Receptor Dimerization)',
        description: 'リガンド誘導により RTK がホモまたはヘテロ二量体を形成する過程を測定します。キナーゼ活性化の開始段階であり、抗体医薬や二重特異性抗体のアゴニスト活性、阻害能の評価に重要です。',
        imageUrl: '/pic/Dimerization.jpg',
        maxWidth: 'max-w-2xl',
      },
      {
        title: 'SH2 タンパク質リクルートメント (SH2 Protein Recruitment)',
        description: '活性化・リン酸化されたキナーゼが Shc1 や PLCγ などの SH2 ドメイン含有シグナルタンパク質をリクルートする過程を測定します。独自の EFC 技術により、生細胞内でキナーゼの機能的活性化を高い生物学的関連性で定量できます。',
        imageUrl: '/pic/RTK-CTK_AssayPrinciples_small.jpg',
        maxWidth: 'max-w-3xl',
      },
      {
        title: '受容体内在化 (Receptor Internalization)',
        description: 'リガンドまたは抗体誘導によりキナーゼ受容体が細胞膜からエンドソームへ移動する過程を定量します。ADC 開発、抗体介在性ターゲットダウンレギュレーション、受容体脱感作研究に重要です。',
        imageUrl: '/pic/Internalization.jpg',
        maxWidth: 'max-w-2xl',
      },
    ],
  },
  ko: {
    title: '키나아제 수용체 Receptor Tyrosine Kinase Assays',
    subtitle: 'RTK 이합체화, 인산화, 내재화 및 SH2 모집을 분석하는 세포 기반 분석',
    intro: [
      'RTK 이합체화, 인산화, 내재화 및 SH2 모집을 분석하는 세포 기반 분석입니다.',
      '수용체 티로신 키나아제(RTK)는 세포 증식, 이동, 분화 및 대사 등 여러 생리 과정에서 중요한 역할을 합니다. 대규모 유전체 연구에서는 EGFR, HER2/ErbB2, MET 등 RTK 유전자에서 다양한 변이와 증폭이 확인되었습니다. RTK 신호 이상은 여러 인간 질환, 특히 암과 관련되어 있으며, 종양에서 RTK 비정상 활성화는 기능 획득 돌연변이, 유전자 증폭, 염색체 재배열, 자가분비 활성화에 의해 주로 유도됩니다.',
      'Eurofins DiscoverX는 RTK 및 세포질 티로신 키나아제(CTK) 관련 수용체 연구를 위한 PathHunter® 세포 기반 분석을 제공합니다. 이 혁신적인 분석 시스템은 세포 환경에서 수용체 활성화 기전을 해석하고 새로운 억제제와 치료용 항체 발굴을 지원합니다. RTK와 사이토카인 수용체의 이합체화, 인산화, 내재화, SH2 모집 이벤트를 분석해 기능 활성을 평가할 수 있습니다.',
    ],
    highlights: [
      '넓은 적용 범위——항수용체 항체, 항리간드 항체, 활성화 항체, 비 ATP 경쟁 결합 분자(알로스테릭 조절제), 리간드 결합 억제제, 이합체화 억제제 등 다양한 리간드 평가 가능',
      '높은 특이성——표지 티로신 키나아제 설계로 내인성 티로신 키나아제에 의한 배경 신호 감소',
      '높은 생물학적 관련성——MOA 기반 기능 분석으로 RTK와 사이토카인 수용체의 활성화 및 이합체화를 모니터링하여 특성 분석과 스크리닝에 적합',
    ],
    moas: [
      {
        title: '수용체 이합체화 (Receptor Dimerization)',
        description: '리간드 유도에 의해 RTK가 동종 또는 이종 이합체를 형성하는 과정을 모니터링합니다. 키나아제 활성화의 시작 단계이며 단클론항체 또는 이중항체의 작용제 활성과 차단 효능 평가에 중요합니다.',
        imageUrl: '/pic/Dimerization.jpg',
        maxWidth: 'max-w-2xl',
      },
      {
        title: 'SH2 단백질 모집 (SH2 Protein Recruitment)',
        description: '활성화 및 인산화된 키나아제가 Shc1, PLCγ와 같은 SH2 도메인 함유 신호전달 단백질을 모집하는 과정을 측정합니다. 독자적인 EFC 기술로 살아있는 세포에서 키나아제의 기능적 활성화를 정량 평가할 수 있습니다.',
        imageUrl: '/pic/RTK-CTK_AssayPrinciples_small.jpg',
        maxWidth: 'max-w-3xl',
      },
      {
        title: '수용체 내재화 (Receptor Internalization)',
        description: '리간드 또는 항체 유도에 의해 키나아제 수용체가 세포막에서 엔도솜으로 이동하는 과정을 정량 추적합니다. ADC 개발, 항체 매개 타깃 다운레귤레이션, 수용체 탈감작 연구에 핵심적인 참고 지표입니다.',
        imageUrl: '/pic/Internalization.jpg',
        maxWidth: 'max-w-2xl',
      },
    ],
  },
};

interface KinaseDetailProps {
  language?: Language;
}

const KinaseDetail: React.FC<KinaseDetailProps> = ({ language = 'zh' }) => {
  const content = localizedContent[language];
  const labels = targetDetailCommon[language];
  const columns = localizeTargetColumns(KINASE_RECEPTOR_PORTFOLIO_COLUMNS, language);
  const rows = localizeTargetRows(KINASE_RECEPTOR_PORTFOLIO_ROWS, language);

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
        <h2 className="mb-10 text-center text-3xl font-bold text-[#1C2C5E] md:text-left">{labels.productList}</h2>
        <PortfolioTable columns={columns} rows={rows} catalogLabel={labels.catalogNumber} />
        <div className="mt-8 text-center">
          <p className="text-sm italic text-slate-500">{labels.missingTargetNote}</p>
        </div>
      </section>
    </div>
  );
};

export default KinaseDetail;
