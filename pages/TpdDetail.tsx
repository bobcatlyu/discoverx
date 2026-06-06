import React from 'react';
import { SPRINTER_PORTFOLIO_COLUMNS, SPRINTER_PORTFOLIO_ROWS } from '../data/sprinterPortfolio';
import { Language } from '../types';
import { localizeTargetColumns, localizeTargetRows, targetDetailCommon } from '../utils/targetDetailLocalization';

interface Highlight {
  title: string;
  description: string;
}

interface TpdContent {
  title: string;
  subtitle: string;
  intro: string[];
  highlightsTitle: string;
  highlights: Highlight[];
  moaTitle: string;
  biosensorTitle: string;
  moaParagraphs: string[];
  bridgeTitle: string;
  bridgeDescription: string;
  emphasizedMoa: string;
  portfolioTitle: string;
  note: string;
}

const localizedContent: Record<Language, TpdContent> = {
  zh: {
    title: 'SPRINTer™ 靶向蛋白降解检测',
    subtitle: '快速细胞水平检测蛋白周转',
    intro: [
      '受调控的蛋白降解是细胞维持内源蛋白稳态的重要机制。通过靶向这些内源性降解通路调控蛋白周转是一种新兴治疗模式，称为靶向蛋白降解（TPD）。TPD 的一种策略利用小分子（如 PROTAC®——蛋白降解靶向嵌合体）或分子胶，重新定向泛素-蛋白酶体降解途径，从而高度选择性地诱导特定蛋白的降解。',
      '这种新方法扩展了可药物化靶点的范围，使药物能够调控蛋白周转或降低与疾病相关的过量蛋白水平，例如癌症相关的癌蛋白或阿尔茨海默病相关的 TAU 蛋白。',
      'Eurofins DiscoverX 开发的 SPRINTer 蛋白周转生物传感检测用于快速筛选小分子治疗药物，并定量测定疾病相关细胞模型中的内源蛋白水平变化。该平台可高灵敏度检测靶向降解分子（如 PROTAC）诱导的蛋白周转，其检测动力学比表型终点检测（如细胞增殖）更为迅速。研究人员可同时结合 SPRINTer 平台与 InCELL Pulse™ 靶点结合检测，以发现并优化能够调控目标蛋白水平的新分子实体。',
    ],
    highlightsTitle: '产品亮点 / Product Highlights',
    highlights: [
      { title: '均相检测', description: '操作简便、可扩展的无洗涤流程，兼容高通量筛选格式以提高实验效率' },
      { title: '高稳健性与高灵敏度', description: '能够在微摩尔/纳摩尔级灵敏度下准确检测目标蛋白周转' },
      { title: '结果快速', description: '最快 5 小时即可获得结果，助力候选化合物选择并加速开发进程' },
      { title: '信号优化', description: 'EFC 检测方法采用无赖氨酸标签设计，最大程度减少检测干扰' },
    ],
    moaTitle: '作用机制 (Mechanism of Action)',
    biosensorTitle: 'SPRINTer™ 蛋白周转生物传感器',
    moaParagraphs: [
      '通过使用均相检测格式，在生理相关的细胞模型中识别能够调节内源蛋白水平的新分子实体（如 PROTACs）。SPRINTer (Sensing Protein Internal Turnover) 蛋白周转生物传感器检测能够对靶点发生的 PROTAC 介导的降解进行高灵敏度的定量分析。',
      '这些稳定的生物传感器细胞株利用 CRISPR/Cas9 基因编辑技术构建，将 Eurofins DiscoverX 的酶片段互补 (EFC) 技术中的小片段酶供体 (ED) 插入到目标基因的内源性位点。由其天然启动子表达的目标基因会产生带有 ED 标签的内源蛋白。',
      '目标蛋白与 PROTAC 的近距离接触导致其发生泛素化并随后被降解，从而引起 EFC 信号的丢失。由于降解后的 ED 标签内源蛋白无法再与外源性 EFC 大片段酶受体 (EA) 结合并形成完整的 β-gal 酶，因此无法水解底物产生化学发光信号。',
    ],
    bridgeTitle: '双功能分子桥梁',
    bridgeDescription: '通过 PROTAC，内源性的 ED 标签目标蛋白被拉近至蛋白降解机器附近。这种双功能小分子在目标蛋白与特定的内源性 E3 连接酶（涉及泛素介导的目标蛋白破坏酶）之间架起桥梁。',
    emphasizedMoa: '基于 EFC 的蛋白降解技术允许通过定量分析 PROTAC 诱导的蛋白周转动力学，来评估药物引起的 ED 标签目标蛋白水平的变化，该技术同样适用于高通量筛选 (HTS) 模式。',
    portfolioTitle: 'TPD 监测产品列表 / TPD Portfolio',
    note: '* 利用我们的定制服务，我们可以在您感兴趣的任何细胞背景下，通过 CRISPR/Cas9 为特定靶标构建 SPRINTer™ 监测系统。',
  },
  ja: {
    title: 'SPRINTer™ 標的タンパク質分解アッセイ',
    subtitle: '細胞ベースでタンパク質ターンオーバーを迅速に測定',
    intro: [
      '制御されたタンパク質分解は、細胞が内因性タンパク質恒常性を維持するための重要な機構です。これらの内因性分解経路を標的としてタンパク質ターンオーバーを制御する治療モダリティが、標的タンパク質分解（TPD）です。TPD の一つの戦略では、PROTAC® や分子接着剤などの小分子を用いてユビキチン-プロテアソーム分解経路を再指向させ、特定タンパク質の分解を高い選択性で誘導します。',
      'この新しいアプローチは創薬可能なターゲット範囲を広げ、がん関連オンコプロテインやアルツハイマー病関連 TAU タンパク質など、疾患関連タンパク質の量やターンオーバーを薬物で制御できるようにします。',
      'Eurofins DiscoverX が開発した SPRINTer タンパク質ターンオーバーバイオセンサーアッセイは、小分子治療薬の迅速なスクリーニングと疾患関連細胞モデルにおける内因性タンパク質レベル変化の定量に使用できます。PROTAC などの標的分解分子が誘導するタンパク質ターンオーバーを高感度に測定し、細胞増殖などの表現型エンドポイントより迅速な動態情報を提供します。',
    ],
    highlightsTitle: '製品ハイライト',
    highlights: [
      { title: '均一系アッセイ', description: '操作が簡単で拡張性の高いウォッシュ不要ワークフロー。高スループットスクリーニング形式に対応' },
      { title: '高い堅牢性と感度', description: 'マイクロモルからナノモルレベルの感度で標的タンパク質ターンオーバーを正確に測定' },
      { title: '迅速な結果', description: '最短 5 時間で結果が得られ、候補化合物選択と開発を加速' },
      { title: '最適化されたシグナル', description: 'EFC アッセイはリジンを含まないタグ設計により、測定干渉を最小化' },
    ],
    moaTitle: '作用機序',
    biosensorTitle: 'SPRINTer™ タンパク質ターンオーバーバイオセンサー',
    moaParagraphs: [
      '均一系アッセイ形式により、生理学的に関連する細胞モデルで内因性タンパク質レベルを調節できる新規分子実体（PROTAC など）を同定します。SPRINTer (Sensing Protein Internal Turnover) は、PROTAC 介在性の標的タンパク質分解を高感度に定量できます。',
      'これらの安定バイオセンサー細胞株は CRISPR/Cas9 遺伝子編集で構築され、Eurofins DiscoverX の EFC 技術における小型酵素ドナー（ED）を標的遺伝子の内因性座位に挿入します。天然プロモーターから発現する標的遺伝子は ED タグ付き内因性タンパク質を産生します。',
      '標的タンパク質が PROTAC により近接化されるとユビキチン化と分解が起こり、EFC シグナルが失われます。分解された ED タグ付き内因性タンパク質は外因性 EA と完全な β-gal 酵素を形成できないため、基質分解による化学発光シグナルが生じません。',
    ],
    bridgeTitle: '二機能性分子ブリッジ',
    bridgeDescription: 'PROTAC により、内因性 ED タグ付き標的タンパク質がタンパク質分解機構の近傍へ誘導されます。この二機能性小分子は、標的タンパク質と特定の内因性 E3 リガーゼの間に橋をかけます。',
    emphasizedMoa: 'EFC ベースのタンパク質分解技術により、PROTAC 誘導性タンパク質ターンオーバー動態を定量し、薬物による ED タグ付き標的タンパク質レベル変化を評価できます。高スループットスクリーニングにも適用可能です。',
    portfolioTitle: 'TPD モニタリング製品リスト / TPD Portfolio',
    note: '* カスタムサービスにより、ご希望の細胞背景で CRISPR/Cas9 を用いた特定ターゲット向け SPRINTer™ モニタリングシステムを構築できます。',
  },
  ko: {
    title: 'SPRINTer™ 표적 단백질 분해 분석',
    subtitle: '세포 기반으로 단백질 턴오버를 빠르게 측정',
    intro: [
      '조절된 단백질 분해는 세포가 내인성 단백질 항상성을 유지하는 중요한 기전입니다. 이러한 내인성 분해 경로를 표적으로 단백질 턴오버를 조절하는 새로운 치료 방식이 표적 단백질 분해(TPD)입니다. TPD의 한 전략은 PROTAC® 또는 molecular glue와 같은 소분자를 이용해 유비퀴틴-프로테아좀 분해 경로를 재지향시켜 특정 단백질 분해를 선택적으로 유도합니다.',
      '이 새로운 접근법은 druggable target의 범위를 넓히며, 암 관련 온코프로틴이나 알츠하이머병 관련 TAU 단백질처럼 질환 관련 과잉 단백질 수준을 조절하거나 낮출 수 있게 합니다.',
      'Eurofins DiscoverX가 개발한 SPRINTer 단백질 턴오버 바이오센서 분석은 소분자 치료제의 빠른 스크리닝과 질환 관련 세포 모델에서 내인성 단백질 수준 변화를 정량하는 데 사용됩니다. PROTAC과 같은 표적 분해 분자가 유도하는 단백질 턴오버를 고감도로 측정하며, 세포 증식 같은 표현형 endpoint보다 더 빠른 동역학 정보를 제공합니다.',
    ],
    highlightsTitle: '제품 하이라이트',
    highlights: [
      { title: '균질 분석', description: '조작이 간편하고 확장 가능한 무세척 워크플로로 고처리량 스크리닝 형식에 호환' },
      { title: '높은 견고성과 민감도', description: '마이크로몰/나노몰 수준의 민감도에서 표적 단백질 턴오버를 정확히 측정' },
      { title: '빠른 결과', description: '최단 5시간 내 결과 확보가 가능하여 후보 화합물 선택과 개발 속도 향상' },
      { title: '신호 최적화', description: 'EFC 분석은 lysine-free 태그 설계를 사용해 분석 간섭을 최소화' },
    ],
    moaTitle: '작용 기전',
    biosensorTitle: 'SPRINTer™ 단백질 턴오버 바이오센서',
    moaParagraphs: [
      '균질 분석 형식을 사용해 생리적으로 관련된 세포 모델에서 내인성 단백질 수준을 조절할 수 있는 새로운 분자(PROTAC 등)를 식별합니다. SPRINTer (Sensing Protein Internal Turnover)는 PROTAC 매개 표적 단백질 분해를 고감도로 정량 분석할 수 있습니다.',
      '이 안정적인 바이오센서 세포주는 CRISPR/Cas9 유전자 편집 기술로 제작되며, Eurofins DiscoverX의 EFC 기술에서 사용하는 작은 효소 donor(ED)를 표적 유전자의 내인성 위치에 삽입합니다. 천연 promoter에서 발현되는 표적 유전자는 ED 태그가 부착된 내인성 단백질을 생성합니다.',
      '표적 단백질이 PROTAC과 가까워지면 유비퀴틴화 후 분해되어 EFC 신호가 소실됩니다. 분해된 ED 태그 내인성 단백질은 외인성 EA와 완전한 β-gal 효소를 형성할 수 없으므로 기질을 분해해 화학발광 신호를 만들 수 없습니다.',
    ],
    bridgeTitle: '이중 기능 분자 브리지',
    bridgeDescription: 'PROTAC을 통해 내인성 ED 태그 표적 단백질이 단백질 분해 기계 가까이 유도됩니다. 이 이중 기능 소분자는 표적 단백질과 특정 내인성 E3 ligase 사이에 다리를 놓습니다.',
    emphasizedMoa: 'EFC 기반 단백질 분해 기술은 PROTAC 유도 단백질 턴오버 동역학을 정량 분석하여 약물로 인한 ED 태그 표적 단백질 수준 변화를 평가할 수 있으며, 고처리량 스크리닝(HTS)에도 적용할 수 있습니다.',
    portfolioTitle: 'TPD 모니터링 제품 목록 / TPD Portfolio',
    note: '* 맞춤형 서비스를 통해 관심 있는 세포 배경에서 CRISPR/Cas9 기반 특정 타깃 SPRINTer™ 모니터링 시스템을 구축할 수 있습니다.',
  },
};

interface TpdDetailProps {
  language?: Language;
}

const TpdDetail: React.FC<TpdDetailProps> = ({ language = 'zh' }) => {
  const content = localizedContent[language];
  const labels = targetDetailCommon[language];
  const columns = localizeTargetColumns(SPRINTER_PORTFOLIO_COLUMNS, language);
  const rows = localizeTargetRows(SPRINTER_PORTFOLIO_ROWS, language);

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
          <div className="mx-auto max-w-6xl overflow-hidden rounded-2xl border border-slate-200 bg-white p-10 shadow-sm">
            <h3 className="mb-6 text-2xl font-bold text-[#4B827E]">{content.biosensorTitle}</h3>
            <div className="space-y-8 text-lg leading-relaxed text-slate-600">
              <p>{content.moaParagraphs[0]}</p>
              <p>{content.moaParagraphs[1]}</p>
              <div className="my-10 rounded-xl bg-[#4B827E] p-8 text-white shadow-lg">
                <div className="flex flex-col items-start gap-8 md:flex-row">
                  <div className="shrink-0 rounded-lg border border-white/20 bg-white/20 p-4">
                    <svg className="h-12 w-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="mb-4 text-xl font-bold">{content.bridgeTitle}</h4>
                    <p className="text-white/90">{content.bridgeDescription}</p>
                  </div>
                </div>
              </div>
              <p>{content.moaParagraphs[2]}</p>
              <p className="font-semibold text-[#4B827E]">{content.emphasizedMoa}</p>
              <img
                src="/pic/SPRINTer-Targeted-Protein_Degradation_Assay-Principle-2048x522-1.jpg"
                alt="SPRINTer Targeted Protein Degradation Assay Principle"
                className="mt-8 w-full rounded-xl border border-slate-200 shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 pb-32 sm:px-6 lg:px-8">
        <h2 className="mb-12 text-center text-3xl font-bold text-[#1C2C5E] md:text-left">{content.portfolioTitle}</h2>
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
                <tr key={`${row[2] || row[0]}-${rowIdx}`} className={rowIdx % 2 === 0 ? 'bg-white' : 'bg-slate-50 hover:bg-teal-50/30 transition-colors'}>
                  {row.map((cell, cellIdx) => (
                    <td key={`${columns[cellIdx]}-${cellIdx}`} className={`border-r border-slate-100 px-5 py-4 align-top text-sm text-slate-700 last:border-r-0 ${columns[cellIdx] === labels.catalogNumber ? 'font-mono text-[#1C2C5E]' : ''}`}>
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-12 text-center">
          <p className="rounded-lg border border-dashed border-slate-300 bg-slate-50 py-4 text-sm italic text-slate-500">{content.note}</p>
        </div>
      </section>
    </div>
  );
};

export default TpdDetail;
