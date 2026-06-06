import React from 'react';
import { CYTOTOXICITY_PORTFOLIO_COLUMNS, CYTOTOXICITY_PORTFOLIO_ROWS } from '../data/cytotoxicityPortfolio';
import { Language } from '../types';
import { localizeTargetColumns, localizeTargetRows, targetDetailCommon } from '../utils/targetDetailLocalization';

interface Highlight {
  title: string;
  description: string;
}

interface MoaItem {
  title: string;
  desc: string;
  img?: string;
}

interface CytotoxicityContent {
  title: string;
  subtitle: string;
  intro: string[];
  limitationsTitle: string;
  limitations: string[];
  highlightsTitle: string;
  highlights: Highlight[];
  moaTitle: string;
  moas: MoaItem[];
  portfolioTitle: string;
  note: string;
}

const localizedContent: Record<Language, CytotoxicityContent> = {
  zh: {
    title: '细胞毒性检测产品 Cytotoxicity',
    subtitle: '专门用于直接测定目标细胞死亡',
    intro: [
      '细胞毒性检测用于测量通过多种作用机制（MOA）导致的目标细胞死亡。这些机制包括：抗体依赖的细胞介导细胞毒性（ADCC）、抗体依赖的细胞吞噬（ADCP）、补体依赖的细胞毒性（CDC）、ADC 药物对细胞的杀伤、细胞毒性 T 细胞介导的死亡（CTL）、双特异性抗体介导的 T 细胞重定向、嵌合抗原受体 T 细胞（CAR-T）、过继性 T 细胞治疗等。',
      '此类检测旨在捕获治疗药物通过一种或多种主要 MOA 导致目标细胞死亡的能力，并用于预测或模拟生理学反应。癌症免疫治疗药物旨在通过增强机体免疫系统来攻击并杀死癌细胞，因此需要在与免疫效应细胞共培养或存在补体系统的条件下检测目标癌细胞死亡。',
      'Eurofins DiscoverX 的 KILR®（Killing Immune-Lysis Reaction）细胞毒性检测平台提供了一种简便、非放射性且无染料的方法，可专门测定目标细胞死亡，并避免传统细胞毒性检测方法的缺点。该均相、板式检测平台可用于从筛选研究到 QC 批放行测试，尤其适用于免疫肿瘤学药物开发中的 ADCC、ADCP、CDC、CAR-T 以及 T 细胞重定向等应用。',
      'KILR 平台的灵活性允许使用稳转细胞系或细胞 pool 作为细胞系检测套件的一部分，以构建相关肿瘤模型。为进一步提高灵活性和易用性，KILR 提供即用型生物测定格式，可将药物开发周期缩短数月；同时，通过 KILR CD16 效应细胞，可消除 PBMC 来源供体之间的变异性，从而提高实验一致性。',
    ],
    limitationsTitle: '常用细胞毒性检测方法的局限性',
    limitations: [
      '报告基因检测只能预测 MOA 潜力，通常需要桥接检测（例如 ADCC 场景下）来定量评估目标细胞死亡。',
      '荧光染料和放射性染料检测存在安全风险，并可能由于染料自发释放导致“泄漏”，从而影响数据的准确性和可重复性。',
      '外周血单核细胞（PBMC）等效应细胞来源于不同供体，其内在变异性会降低 lot release 检测中的一致性与可重复性。',
    ],
    highlightsTitle: '产品亮点 / Product Highlights',
    highlights: [
      { title: '高特异性与高灵敏度', description: '仅检测来自裂解目标细胞的细胞毒性信号，最低可检测 75 个死亡细胞，且具有高重复性' },
      { title: '极高的实验灵活性', description: '可与不同类型效应细胞联合使用，并支持 30 分钟至 72 小时范围内的细胞毒性检测' },
      { title: '生物学相关性强', description: '真实反映治疗药物或配体的作用机制' },
      { title: '多应用场景', description: '可分析 ADCC、ADCP、CDC、CAR-T、ADC、CTL 介导的细胞死亡，以及双特异性抗体介导的 T 细胞重定向与过继性 T 细胞治疗等' },
    ],
    moaTitle: '主要作用机制 (Mechanism of Action)',
    moas: [
      { title: 'ADCC (Antibody-Dependent Cellular Cytotoxicity)', desc: '抗体依赖的细胞介导细胞毒性。评估抗体通过其 Fc 段招募 NK 细胞等效应细胞诱导靶细胞死亡的能力。', img: '/pic/ADCC.png' },
      { title: 'ADCP (Antibody-Dependent Cellular Phagocytosis)', desc: '抗体依赖的细胞吞噬。监测抗体介导的巨噬细胞对目标细胞的吞噬与杀伤作用。', img: '/pic/ADCP.png' },
      { title: 'CDC (Complement-Dependent Cytotoxicity)', desc: '补体依赖的细胞毒性。监测补体系统激活后直接导致的目标细胞裂解。', img: '/pic/CDC.jpg' },
      { title: 'T-cell Redirection', desc: 'T 细胞重定向。评估双特异性抗体等药物通过招募 T 细胞对肿瘤细胞进行的定向杀伤。' },
      { title: 'CAR-T (Chimeric Antigen Receptor T-cell)', desc: '嵌合抗原受体 T 细胞。定量分析工程化 T 细胞对特异性抗原表达细胞的特异性溶解效率。' },
    ],
    portfolioTitle: '细胞毒性产品列表 / Cytotoxicity Portfolio',
    note: '* 列表中未提及的靶点可联系我们进行 KILR® Retroparticles 定制构建。',
  },
  ja: {
    title: '細胞傷害性アッセイ Cytotoxicity',
    subtitle: '標的細胞死を直接測定する専用アッセイ',
    intro: [
      '細胞傷害性アッセイは、複数の作用機序（MOA）によって誘導される標的細胞死を測定します。ADCC、ADCP、CDC、ADC による細胞殺傷、CTL 介在性細胞死、二重特異性抗体による T 細胞リダイレクション、CAR-T、養子 T 細胞療法などが含まれます。',
      'これらのアッセイは、治療薬が一つまたは複数の主要 MOA を介して標的細胞死を誘導する能力を捉え、生理学的応答を予測または模倣するために使用されます。がん免疫療法薬は免疫系を強化してがん細胞を攻撃・殺傷するため、免疫エフェクター細胞との共培養または補体系存在下で標的がん細胞死を測定する必要があります。',
      'Eurofins DiscoverX の KILR®（Killing Immune-Lysis Reaction）細胞傷害性アッセイプラットフォームは、標的細胞死を特異的に測定する簡便で非放射性、色素不要の方法です。従来法の課題を回避し、スクリーニングから QC ロットリリースまで幅広く使用できます。免疫腫瘍学薬開発における ADCC、ADCP、CDC、CAR-T、T 細胞リダイレクション用途に適しています。',
      'KILR プラットフォームは安定細胞株または細胞 pool を用いて関連腫瘍モデルを構築でき、柔軟性に優れています。アッセイレディ形式により開発期間を数か月短縮でき、KILR CD16 エフェクター細胞により PBMC ドナー間ばらつきを低減して実験一貫性を高めます。',
    ],
    limitationsTitle: '一般的な細胞傷害性アッセイの制限',
    limitations: [
      'レポーターアッセイは MOA ポテンシャルを予測するのみで、ADCC などでは標的細胞死を定量するためにブリッジングアッセイが必要になることがあります。',
      '蛍光色素や放射性色素を用いるアッセイには安全上のリスクがあり、色素の自発放出による漏出がデータ精度と再現性に影響します。',
      'PBMC などのエフェクター細胞はドナー由来のばらつきがあり、ロットリリース試験の一貫性と再現性を低下させる可能性があります。',
    ],
    highlightsTitle: '製品ハイライト',
    highlights: [
      { title: '高い特異性と感度', description: '溶解した標的細胞由来の細胞傷害性シグナルのみを測定し、最少 75 個の死細胞を検出可能。高い再現性を提供します' },
      { title: '高い実験柔軟性', description: 'さまざまなエフェクター細胞と組み合わせ可能で、30 分から 72 時間までの細胞傷害性測定に対応します' },
      { title: '高い生物学的関連性', description: '治療薬またはリガンドの作用機序を実際の細胞死として反映します' },
      { title: '多様な用途', description: 'ADCC、ADCP、CDC、CAR-T、ADC、CTL 介在性細胞死、二重特異性抗体による T 細胞リダイレクション、養子 T 細胞療法を解析できます' },
    ],
    moaTitle: '主な作用機序',
    moas: [
      { title: 'ADCC (Antibody-Dependent Cellular Cytotoxicity)', desc: '抗体依存性細胞傷害。抗体 Fc 領域を介して NK 細胞などのエフェクター細胞をリクルートし、標的細胞死を誘導する能力を評価します。', img: '/pic/ADCC.png' },
      { title: 'ADCP (Antibody-Dependent Cellular Phagocytosis)', desc: '抗体依存性細胞貪食。抗体を介したマクロファージによる標的細胞貪食と殺傷を測定します。', img: '/pic/ADCP.png' },
      { title: 'CDC (Complement-Dependent Cytotoxicity)', desc: '補体依存性細胞傷害。補体系活性化後に起こる標的細胞溶解を測定します。', img: '/pic/CDC.jpg' },
      { title: 'T-cell Redirection', desc: 'T 細胞リダイレクション。二重特異性抗体などにより T 細胞をリクルートし、腫瘍細胞を標的化して殺傷する作用を評価します。' },
      { title: 'CAR-T (Chimeric Antigen Receptor T-cell)', desc: 'キメラ抗原受容体 T 細胞。工学的に改変された T 細胞が特定抗原発現細胞を溶解する効率を定量します。' },
    ],
    portfolioTitle: '細胞傷害性製品リスト / Cytotoxicity Portfolio',
    note: '* リストにないターゲットについては、KILR® Retroparticles のカスタム構築をご相談ください。',
  },
  ko: {
    title: '세포독성 분석 Cytotoxicity',
    subtitle: '표적 세포 사멸을 직접 측정하기 위한 전용 분석',
    intro: [
      '세포독성 분석은 다양한 작용 기전(MOA)에 의해 유도되는 표적 세포 사멸을 측정합니다. 여기에는 ADCC, ADCP, CDC, ADC 약물에 의한 세포 살상, CTL 매개 사멸, 이중특이성 항체 매개 T 세포 리디렉션, CAR-T, 입양 T 세포 치료 등이 포함됩니다.',
      '이러한 분석은 치료제가 하나 이상의 주요 MOA를 통해 표적 세포 사멸을 유도하는 능력을 포착하고 생리학적 반응을 예측하거나 모사하는 데 사용됩니다. 암 면역치료제는 면역계를 강화해 암세포를 공격하고 살상하므로, 면역 효과 세포와의 공동 배양 또는 보체계 존재 조건에서 표적 암세포 사멸을 측정해야 합니다.',
      'Eurofins DiscoverX의 KILR®(Killing Immune-Lysis Reaction) 세포독성 분석 플랫폼은 표적 세포 사멸을 특이적으로 측정하는 간편한 비방사성·무염료 방식입니다. 기존 세포독성 분석법의 단점을 피할 수 있으며, 스크리닝 연구부터 QC 배치 방출 시험까지 폭넓게 사용할 수 있습니다. 특히 면역종양학 약물 개발에서 ADCC, ADCP, CDC, CAR-T, T 세포 리디렉션 등에 적합합니다.',
      'KILR 플랫폼은 안정 세포주 또는 세포 pool을 이용해 관련 종양 모델을 구축할 수 있어 유연성이 높습니다. 즉시 사용 가능한 bioassay 형식은 개발 기간을 수개월 단축할 수 있으며, KILR CD16 효과 세포를 통해 PBMC donor 간 변이를 줄여 실험 일관성을 향상시킵니다.',
    ],
    limitationsTitle: '일반적인 세포독성 분석법의 한계',
    limitations: [
      '리포터 유전자 분석은 MOA 가능성만 예측하며, ADCC 상황 등에서는 표적 세포 사멸을 정량 평가하기 위해 bridging assay가 필요할 수 있습니다.',
      '형광 염료 및 방사성 염료 분석은 안전 위험이 있고, 염료의 자발적 방출로 인한 누출이 데이터 정확성과 재현성에 영향을 줄 수 있습니다.',
      'PBMC와 같은 효과 세포는 donor별 내재 변이가 있어 lot release 시험의 일관성과 재현성을 낮출 수 있습니다.',
    ],
    highlightsTitle: '제품 하이라이트',
    highlights: [
      { title: '높은 특이성과 민감도', description: '용해된 표적 세포에서 나오는 세포독성 신호만 측정하며, 최소 75개의 사멸 세포를 검출할 수 있고 높은 재현성을 제공합니다' },
      { title: '매우 높은 실험 유연성', description: '다양한 효과 세포와 함께 사용할 수 있으며 30분부터 72시간 범위의 세포독성 분석을 지원합니다' },
      { title: '높은 생물학적 관련성', description: '치료제 또는 리간드의 작용 기전을 실제 표적 세포 사멸로 반영합니다' },
      { title: '다양한 적용 분야', description: 'ADCC, ADCP, CDC, CAR-T, ADC, CTL 매개 세포 사멸, 이중특이성 항체 매개 T 세포 리디렉션 및 입양 T 세포 치료를 분석할 수 있습니다' },
    ],
    moaTitle: '주요 작용 기전',
    moas: [
      { title: 'ADCC (Antibody-Dependent Cellular Cytotoxicity)', desc: '항체 의존성 세포 매개 세포독성입니다. 항체가 Fc 영역을 통해 NK 세포 등 효과 세포를 모집해 표적 세포 사멸을 유도하는 능력을 평가합니다.', img: '/pic/ADCC.png' },
      { title: 'ADCP (Antibody-Dependent Cellular Phagocytosis)', desc: '항체 의존성 세포 포식입니다. 항체 매개 대식세포의 표적 세포 포식 및 살상 작용을 모니터링합니다.', img: '/pic/ADCP.png' },
      { title: 'CDC (Complement-Dependent Cytotoxicity)', desc: '보체 의존성 세포독성입니다. 보체계 활성화 후 직접 발생하는 표적 세포 용해를 모니터링합니다.', img: '/pic/CDC.jpg' },
      { title: 'T-cell Redirection', desc: 'T 세포 리디렉션입니다. 이중특이성 항체 등이 T 세포를 모집해 종양 세포를 표적화하여 살상하는 능력을 평가합니다.' },
      { title: 'CAR-T (Chimeric Antigen Receptor T-cell)', desc: '키메라 항원 수용체 T 세포입니다. 엔지니어링된 T 세포가 특정 항원 발현 세포를 특이적으로 용해하는 효율을 정량 분석합니다.' },
    ],
    portfolioTitle: '세포독성 제품 목록 / Cytotoxicity Portfolio',
    note: '* 목록에 없는 타깃은 KILR® Retroparticles 맞춤 제작을 문의해 주세요.',
  },
};

interface PortfolioTableProps {
  columns: string[];
  rows: string[][];
  catalogLabel: string;
}

const PortfolioTable: React.FC<PortfolioTableProps> = ({ columns, rows, catalogLabel }) => (
  <div className="w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl">
    <table className="w-full table-auto divide-y divide-slate-200">
      <thead className="bg-[#4B827E] text-white">
        <tr>
          {columns.map((column) => (
            <th key={column} className="border-r border-white/20 px-5 py-4 text-left text-sm font-bold uppercase tracking-wider last:border-r-0">
              {column}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="divide-y divide-slate-100 bg-white">
        {rows.map((row, rowIdx) => (
          <tr key={`${row[3] || row[1]}-${rowIdx}`} className={rowIdx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
            {row.map((cell, cellIdx) => (
              <td key={`${columns[cellIdx]}-${cellIdx}`} className={`border-r border-slate-100 px-5 py-4 align-top text-sm last:border-r-0 ${columns[cellIdx] === catalogLabel ? 'font-mono whitespace-nowrap text-[#1C2C5E]' : 'text-slate-700'}`}>
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

interface CytotoxicityDetailProps {
  language?: Language;
}

const CytotoxicityDetail: React.FC<CytotoxicityDetailProps> = ({ language = 'zh' }) => {
  const content = localizedContent[language];
  const labels = targetDetailCommon[language];
  const columns = localizeTargetColumns(CYTOTOXICITY_PORTFOLIO_COLUMNS, language);
  const rows = localizeTargetRows(CYTOTOXICITY_PORTFOLIO_ROWS, language);

  return (
    <div className="bg-white">
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div>
          <h1 className="mb-4 text-4xl font-extrabold text-[#1C2C5E]">{content.title}</h1>
          <h2 className="mb-6 text-2xl font-bold text-[#4B827E]">{content.subtitle}</h2>
          <div className="mb-8 h-1 w-20 bg-[#4B827E]"></div>
          <div className="space-y-6 text-lg leading-relaxed text-slate-600">
            {content.intro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-10 text-3xl font-bold text-[#1C2C5E]">{content.limitationsTitle}</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {content.limitations.map((limitation, index) => (
              <div key={limitation} className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
                <div className="mb-4 text-xl font-bold text-[#4B827E]">{String(index + 1).padStart(2, '0')}</div>
                <p className="leading-relaxed text-slate-600">{limitation}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-10 text-3xl font-bold text-[#1C2C5E]">{content.highlightsTitle}</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {content.highlights.map((highlight) => (
              <div key={highlight.title} className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-teal-50 font-bold text-[#4B827E]">✓</div>
                <div>
                  <h4 className="mb-1 text-lg font-bold text-[#1C2C5E]">{highlight.title}</h4>
                  <p className="text-slate-600">{highlight.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center text-3xl font-bold text-[#1C2C5E]">{content.moaTitle}</h2>
          <div className="mx-auto max-w-4xl space-y-6">
            {content.moas.map((item, index) => (
              <div key={item.title} className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:border-[#4B827E]">
                <div className="mb-4 flex items-center gap-8">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-teal-50 text-2xl font-black text-[#4B827E]">{index + 1}</div>
                  <div>
                    <h4 className="mb-2 text-xl font-bold text-[#1C2C5E]">{item.title}</h4>
                    <p className="leading-relaxed text-slate-600">{item.desc}</p>
                  </div>
                </div>
                {item.img && <img src={item.img} alt={item.title} className="mt-4 w-3/4 rounded-xl border border-slate-200 shadow-md" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <h2 className="mb-10 text-left text-3xl font-bold text-[#1C2C5E]">{content.portfolioTitle}</h2>
        <PortfolioTable columns={columns} rows={rows} catalogLabel={labels.catalogNumber} />
        <div className="mt-8 text-left">
          <p className="inline-block rounded-lg border border-dashed border-slate-300 bg-slate-50 px-6 py-4 text-sm italic text-slate-500">{content.note}</p>
        </div>
      </section>
    </div>
  );
};

export default CytotoxicityDetail;
