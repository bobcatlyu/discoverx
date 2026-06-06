
import React from 'react';
import { CYTOKINE_PORTFOLIO_COLUMNS, CYTOKINE_PORTFOLIO_ROWS } from '../data/cytokinePortfolio';
import { Language } from '../types';
import { localizeTargetCell, localizeTargetColumns, localizeTargetRows, targetDetailCommon } from '../utils/targetDetailLocalization';

interface ProductPortfolioTableProps {
  columns: string[];
  rows: string[][];
  catalogLabel: string;
}

const ProductPortfolioTable: React.FC<ProductPortfolioTableProps> = ({ columns, rows, catalogLabel }) => (
  <div className="w-full overflow-hidden shadow-2xl rounded-2xl border border-slate-200 bg-white">
    <table className="w-full table-auto divide-y divide-slate-200">
      <thead className="bg-[#4B827E] text-white">
        <tr>
          {columns.map((column) => (
            <th
              key={column}
              className="px-4 py-4 text-left text-sm font-bold uppercase tracking-wider border-r border-white/20 last:border-r-0"
            >
              {column}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-slate-200">
        {rows.map((row, rowIdx) => (
          <tr key={`${row[3] || row[0]}-${rowIdx}`} className={rowIdx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
            {row.map((cell, cellIdx) => (
              <td
                key={`${columns[cellIdx]}-${cellIdx}`}
                className={`px-4 py-4 align-top text-sm border-r border-slate-100 last:border-r-0 ${
                  columns[cellIdx] === catalogLabel
                    ? 'font-mono text-[#1C2C5E] whitespace-nowrap'
                    : 'text-slate-700'
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
);

interface MoaItem {
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
  cytokineTableTitle: string;
  chemokineTableTitle: string;
  chemokineHeaders: string[];
  sourceNote: string;
}> = {
  zh: {
    title: '细胞因子受体 Cytokine Receptors Assay',
    subtitle: '覆盖细胞因子受体的全面细胞水平功能检测组合',
    intro: [
      '细胞因子是一类在调控免疫系统与炎症过程中发挥关键作用的蛋白质。细胞因子调控失衡与多种疾病相关，包括自身免疫性疾病、癌症以及感染性疾病。细胞因子受体在介导免疫应答的细胞内外信号通信中发挥核心作用。',
      '该受体家族包括 I 型与 II 型细胞因子样白介素受体、GM-CSF 受体、干扰素受体、趋化因子受体、TNFα 受体、TGF-β 受体以及免疫球蛋白超家族受体等多种类型。所有细胞因子受体均与一类或多类 JAK 激酶相关联，通过受体配体结合将信号传递至 STAT 家族转录因子的酪氨酸磷酸化，从而调控下游信号复合体。',
      '细胞因子在“细胞因子风暴”（cytokine storm）中发挥关键作用。细胞因子风暴是一种过度的促炎免疫反应，可导致高炎症状态（hyperinflammation），涉及多种细胞因子，例如白介素（IL）、GM-CSF、趋化因子、TNFα 等。',
      '针对细胞因子或其受体的治疗药物可调控免疫反应，并潜在用于治疗相关疾病。然而，这类药物的开发复杂且耗时，需要深入理解免疫系统及细胞因子在疾病发生机制中的作用。为加速发现进程，已有功能性检测体系可用于相关研究。',
      'Eurofins DiscoverX 提供全面的 PathHunter® 细胞水平功能检测组合，这些检测基于作用机制（MOA）导向设计，用于研究并靶向细胞因子受体，覆盖超过 85% 的人源白介素（IL-1 至 IL-37）及其受体体系。',
      '这些检测体系具有高特异性与高重复性，流程简便，信噪比高，并对检测基质具有良好耐受性。基于上述特点，细胞因子受体检测已广泛应用于功能筛选、功能表征、QC 批放行检测以及中和抗体研究等多个领域。',
    ],
    highlights: [
      '生物学相关性强 —— MOA 导向的功能性检测，用于监测细胞因子受体激活与受体二聚化过程',
      '经验证的 Bioassay —— 采用已获批准的治疗药物（如 Actemra®（托珠单抗）、Kineret®（阿那白滞素）、Leukine®（沙格司亭）、Humira®（阿达木单抗））进行验证，加速细胞因子治疗药物的研发与批放行',
      '易用且可扩展 —— 均相、流程简便且快速的检测体系，兼容高通量格式以提高实验效率',
    ],
    moas: [
      {
        title: '1. 受体二聚化 (Receptor Dimerization)',
        desc: '通过酶片段互补 (EFC) 技术直接监测配体诱导的受体亚基（如同源二聚体 IL-1R 或异源二聚体 IL-2R/IL-12R）的物理组装。这是评估中和抗体阻断效力的最直接手段。',
        image: '/pic/Dimerization.jpg',
        maxWidth: 'max-w-xl',
      },
      {
        title: '2. 信号通路报告基因 (Pathway Reporter)',
        desc: '定量分析受体激活后触发的下游转录因子活动。主要包括 STAT3, STAT5, NF-κB 等信号通路的激活监测。',
        image: '/pic/Signaling-Reporter-Assays-principles-1-1024x342-1.png',
        maxWidth: 'max-w-xl',
      },
      {
        title: '3. 信号通路蛋白降解 (Pathway Degradation)',
        desc: '针对特定的信号抑制蛋白进行动态监测。例如在 IL-1 或 TNFα 通路激活过程中，通过实时追踪 IkB 蛋白的降解动力学，评估药物对信号传导的抑制效果。',
        image: '/pic/Cytokine-Receptor-principles-degradation.png',
        maxWidth: 'max-w-xl',
      },
    ],
    cytokineTableTitle: '细胞因子受体产品列表',
    chemokineTableTitle: '细胞趋化因子（受体属于 GPCR）产品列表',
    chemokineHeaders: ['靶点', '检测机制', '稳转细胞系套装', 'eXpress™ Kit', 'Bioassay Kit', '一次性冻存细胞', '膜制备物'],
    sourceNote: '* 数据源自 Eurofins DiscoverX 官方检测平台，如需特定批次数据或开发服务，请联系我们的技术专家。',
  },
  ja: {
    title: 'サイトカイン受容体 Cytokine Receptors Assay',
    subtitle: 'サイトカイン受容体をカバーする包括的な細胞ベース機能アッセイ',
    intro: [
      'サイトカインは免疫システムと炎症プロセスの制御に重要な役割を果たすタンパク質です。サイトカイン制御の異常は、自己免疫疾患、がん、感染症など多くの疾患と関連しています。サイトカイン受容体は、免疫応答を介在する細胞内外のシグナル通信で中心的な役割を担います。',
      'この受容体ファミリーには、I 型および II 型サイトカイン様インターロイキン受容体、GM-CSF 受容体、インターフェロン受容体、ケモカイン受容体、TNFα 受容体、TGF-β 受容体、免疫グロブリンスーパーファミリー受容体などが含まれます。すべてのサイトカイン受容体は一つ以上の JAK キナーゼと関連し、リガンド結合を介して STAT ファミリー転写因子のチロシンリン酸化へシグナルを伝達します。',
      'サイトカインは「サイトカインストーム」で重要な役割を果たします。サイトカインストームは過剰な炎症性免疫反応であり、IL、GM-CSF、ケモカイン、TNFα など複数のサイトカインが関与する高炎症状態を引き起こします。',
      'サイトカインまたはその受容体を標的とする治療薬は免疫反応を調節し、関連疾患の治療に利用できる可能性があります。一方で、開発には免疫システムと疾患機序におけるサイトカインの役割を深く理解する必要があります。機能アッセイは発見プロセスを加速するために有用です。',
      'Eurofins DiscoverX は、MOA に基づいて設計された包括的な PathHunter® 細胞ベース機能アッセイを提供しています。これらはサイトカイン受容体の研究と標的化に使用でき、ヒト IL-1 から IL-37 までの 85% 以上とその受容体系をカバーします。',
      'これらのアッセイは高い特異性と再現性、簡便なワークフロー、高い S/B 比、マトリックス耐性を備えています。そのため、機能スクリーニング、機能特性評価、QC ロットリリース、中和抗体研究など幅広い用途で使用されています。',
    ],
    highlights: [
      '高い生物学的関連性 —— MOA ベースの機能アッセイにより、サイトカイン受容体活性化と受容体二量体化を測定',
      '検証済み Bioassay —— Actemra®、Kineret®、Leukine®、Humira® など承認済み治療薬で検証され、サイトカイン治療薬の開発とロットリリースを加速',
      '使いやすく拡張性が高い —— 均一系で簡便かつ迅速なアッセイ。高スループット形式に対応し実験効率を向上',
    ],
    moas: [
      {
        title: '1. 受容体二量体化 (Receptor Dimerization)',
        desc: '酵素断片相補（EFC）技術により、リガンド誘導性の受容体サブユニット集合（IL-1R ホモ二量体、IL-2R/IL-12R ヘテロ二量体など）を直接測定します。中和抗体の阻害能評価に最も直接的な方法です。',
        image: '/pic/Dimerization.jpg',
        maxWidth: 'max-w-xl',
      },
      {
        title: '2. シグナル経路レポーター (Pathway Reporter)',
        desc: '受容体活性化後に誘導される下流転写因子活性を定量します。主に STAT3、STAT5、NF-κB などのシグナル経路活性化を測定します。',
        image: '/pic/Signaling-Reporter-Assays-principles-1-1024x342-1.png',
        maxWidth: 'max-w-xl',
      },
      {
        title: '3. シグナル経路タンパク質分解 (Pathway Degradation)',
        desc: '特定のシグナル抑制タンパク質を動的に測定します。たとえば IL-1 または TNFα 経路活性化時に IkB タンパク質分解をリアルタイムで追跡し、薬物のシグナル阻害効果を評価します。',
        image: '/pic/Cytokine-Receptor-principles-degradation.png',
        maxWidth: 'max-w-xl',
      },
    ],
    cytokineTableTitle: 'サイトカイン受容体製品リスト',
    chemokineTableTitle: 'ケモカイン（GPCR 受容体）製品リスト',
    chemokineHeaders: ['ターゲット', 'アッセイ機序', '安定細胞株セット', 'eXpress™ Kit', 'Bioassay Kit', '一回使用凍結細胞', '膜標品'],
    sourceNote: '* データは Eurofins DiscoverX 公式アッセイプラットフォームに基づきます。特定ロットのデータや開発サービスについては技術担当者までお問い合わせください。',
  },
  ko: {
    title: '사이토카인 수용체 Cytokine Receptors Assay',
    subtitle: '사이토카인 수용체를 포괄하는 세포 기반 기능 분석 포트폴리오',
    intro: [
      '사이토카인은 면역 시스템과 염증 과정 조절에 핵심적인 역할을 하는 단백질입니다. 사이토카인 조절 이상은 자가면역 질환, 암, 감염성 질환 등 다양한 질환과 관련됩니다. 사이토카인 수용체는 면역 반응을 매개하는 세포 내외 신호 전달에서 중심 역할을 합니다.',
      '이 수용체 패밀리에는 I형 및 II형 사이토카인 유사 인터루킨 수용체, GM-CSF 수용체, 인터페론 수용체, 케모카인 수용체, TNFα 수용체, TGF-β 수용체, 면역글로불린 슈퍼패밀리 수용체 등이 포함됩니다. 모든 사이토카인 수용체는 하나 이상의 JAK 키나아제와 연계되며, 리간드 결합을 통해 STAT 패밀리 전사인자의 티로신 인산화로 신호를 전달합니다.',
      '사이토카인은 “사이토카인 폭풍”에서 중요한 역할을 합니다. 사이토카인 폭풍은 과도한 전염증성 면역 반응으로 고염증 상태를 유발하며, IL, GM-CSF, 케모카인, TNFα 등 여러 사이토카인이 관여합니다.',
      '사이토카인 또는 그 수용체를 표적으로 하는 치료제는 면역 반응을 조절하고 관련 질환 치료에 활용될 수 있습니다. 그러나 이러한 약물 개발은 복잡하고 시간이 오래 걸리며, 면역 시스템과 질환 기전에서 사이토카인의 역할에 대한 깊은 이해가 필요합니다. 기능 분석 시스템은 이러한 발견 과정을 가속할 수 있습니다.',
      'Eurofins DiscoverX는 MOA 기반으로 설계된 포괄적인 PathHunter® 세포 기반 기능 분석 포트폴리오를 제공합니다. 이 분석은 사이토카인 수용체 연구 및 표적화에 사용되며, 인간 IL-1부터 IL-37까지 및 그 수용체 시스템의 85% 이상을 커버합니다.',
      '이 분석 시스템은 높은 특이성과 재현성, 간편한 워크플로, 높은 신호대잡음비, 우수한 매트릭스 내성을 제공합니다. 따라서 기능 스크리닝, 기능 특성 분석, QC 배치 방출 시험 및 중화항체 연구 등에 폭넓게 사용됩니다.',
    ],
    highlights: [
      '높은 생물학적 관련성 —— MOA 기반 기능 분석으로 사이토카인 수용체 활성화와 수용체 이합체화 모니터링',
      '검증된 Bioassay —— Actemra®, Kineret®, Leukine®, Humira® 등 승인 치료제로 검증되어 사이토카인 치료제 개발과 배치 방출 가속',
      '사용이 쉽고 확장 가능 —— 균질하고 간편하며 빠른 분석 시스템으로 고처리량 형식에 호환되어 실험 효율 향상',
    ],
    moas: [
      {
        title: '1. 수용체 이합체화 (Receptor Dimerization)',
        desc: '효소 단편 상보(EFC) 기술로 리간드 유도 수용체 서브유닛(예: IL-1R 동종 이합체 또는 IL-2R/IL-12R 이종 이합체)의 물리적 조립을 직접 모니터링합니다. 중화항체 차단 효능 평가에 가장 직접적인 방법입니다.',
        image: '/pic/Dimerization.jpg',
        maxWidth: 'max-w-xl',
      },
      {
        title: '2. 신호 경로 리포터 (Pathway Reporter)',
        desc: '수용체 활성화 후 유발되는 하위 전사인자 활성을 정량 분석합니다. 주로 STAT3, STAT5, NF-κB 등 신호 경로의 활성화를 모니터링합니다.',
        image: '/pic/Signaling-Reporter-Assays-principles-1-1024x342-1.png',
        maxWidth: 'max-w-xl',
      },
      {
        title: '3. 신호 경로 단백질 분해 (Pathway Degradation)',
        desc: '특정 신호 억제 단백질을 동적으로 모니터링합니다. 예를 들어 IL-1 또는 TNFα 경로 활성화 중 IkB 단백질 분해 동역학을 실시간 추적하여 약물의 신호 전달 억제 효과를 평가합니다.',
        image: '/pic/Cytokine-Receptor-principles-degradation.png',
        maxWidth: 'max-w-xl',
      },
    ],
    cytokineTableTitle: '사이토카인 수용체 제품 목록',
    chemokineTableTitle: '케모카인(수용체는 GPCR) 제품 목록',
    chemokineHeaders: ['타깃', '분석 기전', '안정 세포주 세트', 'eXpress™ Kit', 'Bioassay Kit', '일회용 동결 세포', '막 표본'],
    sourceNote: '* 데이터는 Eurofins DiscoverX 공식 분석 플랫폼을 기반으로 합니다. 특정 배치 데이터 또는 개발 서비스가 필요한 경우 기술 전문가에게 문의해 주세요.',
  },
};

  const chemokineData = [
    { target: 'CCR1', moa: 'cAMP & 钙离子', set: true, express: false, bioassay: false, frozen: true, membrane: false },
    { target: 'CCR1', moa: '受体内化', set: true, express: true, bioassay: false, frozen: false, membrane: false },
    { target: 'CCR1', moa: 'β-Arrestin', set: true, express: false, bioassay: false, frozen: false, membrane: false },
    { target: 'CCR1', moa: '结合/GTPγS 功能', set: false, express: false, bioassay: false, frozen: false, membrane: true },
    { target: 'CCR10', moa: 'cAMP & 钙离子', set: true, express: false, bioassay: false, frozen: true, membrane: false },
    { target: 'CCR10', moa: '受体内化', set: true, express: true, bioassay: false, frozen: true, membrane: false },
    { target: 'CCR10', moa: 'β-Arrestin', set: true, express: true, bioassay: false, frozen: true, membrane: false },
    { target: 'CCR2', moa: 'β-Arrestin', set: true, express: true, bioassay: true, frozen: false, membrane: false },
    { target: 'CCR2', moa: 'cAMP & 钙离子', set: true, express: false, bioassay: false, frozen: true, membrane: false },
    { target: 'CCR2', moa: '受体内化', set: true, express: true, bioassay: false, frozen: false, membrane: false },
    { target: 'CCR2', moa: '结合/GTPγS 功能', set: false, express: false, bioassay: false, frozen: false, membrane: true },
    { target: 'CCR3', moa: 'cAMP & 钙离子', set: true, express: false, bioassay: false, frozen: true, membrane: false },
    { target: 'CCR3', moa: 'β-Arrestin', set: true, express: true, bioassay: false, frozen: false, membrane: false },
    { target: 'CCR4', moa: 'cAMP & 钙离子', set: true, express: false, bioassay: false, frozen: true, membrane: false },
    { target: 'CCR4', moa: '受体内化', set: true, express: true, bioassay: false, frozen: false, membrane: false },
    { target: 'CCR4', moa: 'β-Arrestin', set: true, express: true, bioassay: false, frozen: false, membrane: false },
    { target: 'CCR5', moa: 'cAMP & 钙离子', set: true, express: true, bioassay: false, frozen: true, membrane: false },
    { target: 'CCR5', moa: '受体内化', set: true, express: true, bioassay: false, frozen: false, membrane: false },
    { target: 'CCR5', moa: 'β-Arrestin', set: true, express: true, bioassay: false, frozen: false, membrane: false },
    { target: 'CCR5', moa: '结合/GTPγS 功能', set: false, express: false, bioassay: false, frozen: false, membrane: true },
    { target: 'CCR6', moa: 'cAMP & 钙离子', set: true, express: true, bioassay: false, frozen: true, membrane: false },
    { target: 'CCR6', moa: '受体内化', set: true, express: true, bioassay: false, frozen: false, membrane: false },
    { target: 'CCR6', moa: 'β-Arrestin', set: true, express: true, bioassay: false, frozen: false, membrane: false },
    { target: 'CCR6', moa: '结合/GTPγS 功能', set: false, express: false, bioassay: false, frozen: false, membrane: true },
    { target: 'CCR7', moa: 'cAMP & 钙离子', set: true, express: true, bioassay: false, frozen: true, membrane: true },
    { target: 'CCR7', moa: '受体内化', set: true, express: false, bioassay: false, frozen: false, membrane: false },
    { target: 'CCR7', moa: 'β-Arrestin', set: true, express: true, bioassay: false, frozen: false, membrane: false },
    { target: 'CCR8', moa: 'cAMP & 钙离子', set: true, express: false, bioassay: false, frozen: true, membrane: false },
    { target: 'CCR8', moa: 'β-Arrestin', set: true, express: true, bioassay: false, frozen: false, membrane: false },
    { target: 'CCR8', moa: '结合/GTPγS 功能', set: false, express: false, bioassay: false, frozen: false, membrane: true },
    { target: 'CCR9', moa: 'cAMP & 钙离子', set: true, express: false, bioassay: false, frozen: true, membrane: false },
    { target: 'CCR9', moa: 'β-Arrestin', set: true, express: true, bioassay: false, frozen: false, membrane: false },
    { target: 'CCR9', moa: '结合/GTPγS 功能', set: false, express: false, bioassay: false, frozen: false, membrane: true },
    { target: 'CCRL1', moa: 'β-Arrestin', set: true, express: false, bioassay: false, frozen: false, membrane: false },
    { target: 'CCRL2', moa: 'β-Arrestin', set: true, express: true, bioassay: false, frozen: false, membrane: false },
    { target: 'CX3CR1', moa: 'cAMP & 钙离子', set: true, express: true, bioassay: false, frozen: true, membrane: false },
    { target: 'CX3CR1', moa: 'β-Arrestin', set: true, express: true, bioassay: false, frozen: false, membrane: false },
    { target: 'CX3CR1', moa: '结合/GTPγS 功能', set: false, express: false, bioassay: false, frozen: false, membrane: true },
    { target: 'CXCR1', moa: 'cAMP & 钙离子', set: true, express: false, bioassay: false, frozen: true, membrane: false },
    { target: 'CXCR1', moa: '结合/GTPγS 功能', set: false, express: false, bioassay: false, frozen: false, membrane: true },
    { target: 'CXCR1 (IL8RA)', moa: 'cAMP & 钙离子', set: true, express: true, bioassay: false, frozen: true, membrane: false },
    { target: 'CXCR1 (IL8RA)', moa: '受体内化', set: true, express: false, bioassay: false, frozen: false, membrane: false },
    { target: 'CXCR1 (IL8RA)', moa: 'β-Arrestin', set: true, express: true, bioassay: false, frozen: false, membrane: false },
    { target: 'CXCR2 (IL8RB)', moa: 'cAMP & 钙离子', set: true, express: true, bioassay: false, frozen: true, membrane: true },
    { target: 'CXCR2 (IL8RB)', moa: '受体内化', set: true, express: true, bioassay: false, frozen: false, membrane: false },
    { target: 'CXCR2 (IL8RB)', moa: 'β-Arrestin', set: true, express: true, bioassay: false, frozen: false, membrane: false },
    { target: 'CXCR2 (IL8RB)', moa: '结合/GTPγS 功能', set: false, express: false, bioassay: false, frozen: false, membrane: true },
    { target: 'CXCR3', moa: 'cAMP & 钙离子', set: true, express: true, bioassay: false, frozen: true, membrane: true },
    { target: 'CXCR3', moa: '受体内化', set: true, express: true, bioassay: false, frozen: false, membrane: false },
    { target: 'CXCR3', moa: 'β-Arrestin', set: true, express: true, bioassay: false, frozen: false, membrane: false },
    { target: 'CXCR3', moa: '结合/GTPγS 功能', set: false, express: false, bioassay: false, frozen: false, membrane: true },
    { target: 'CXCR4', moa: 'cAMP & 钙离子', set: true, express: true, bioassay: false, frozen: true, membrane: true },
    { target: 'CXCR4', moa: '受体内化', set: true, express: false, bioassay: false, frozen: false, membrane: false },
    { target: 'CXCR4', moa: 'β-Arrestin', set: true, express: false, bioassay: false, frozen: false, membrane: false },
    { target: 'CXCR4', moa: '结合/GTPγS 功能', set: false, express: false, bioassay: false, frozen: false, membrane: true },
    { target: 'CXCR5 (BLR1)', moa: 'β-Arrestin', set: true, express: true, bioassay: true, frozen: false, membrane: true },
    { target: 'CXCR5 (BLR1)', moa: 'cAMP & 钙离子', set: true, express: true, bioassay: false, frozen: true, membrane: true },
    { target: 'CXCR6', moa: 'cAMP & 钙离子', set: true, express: false, bioassay: false, frozen: true, membrane: true },
    { target: 'CXCR6', moa: '受体内化', set: true, express: true, bioassay: false, frozen: false, membrane: false },
    { target: 'CXCR6', moa: 'β-Arrestin', set: true, express: true, bioassay: false, frozen: false, membrane: false },
    { target: 'CXCR6', moa: '结合/GTPγS 功能', set: false, express: false, bioassay: false, frozen: false, membrane: true },
    { target: 'CXCR7 (CMKOR1)', moa: '受体内化', set: true, express: true, bioassay: false, frozen: false, membrane: false },
    { target: 'CXCR7 (CMKOR1)', moa: 'β-Arrestin', set: true, express: true, bioassay: false, frozen: false, membrane: false },
    { target: 'CXCR7 (CMKOR1)', moa: '结合/GTPγS 功能', set: false, express: false, bioassay: false, frozen: false, membrane: true },
    { target: 'cyno CXCR1', moa: 'β-Arrestin', set: true, express: true, bioassay: false, frozen: false, membrane: false },
    { target: 'cyno CXCR2', moa: 'β-Arrestin', set: true, express: true, bioassay: false, frozen: false, membrane: false },
    { target: 'mCCR1', moa: 'β-Arrestin', set: true, express: false, bioassay: false, frozen: false, membrane: false },
    { target: 'mCCR2', moa: 'β-Arrestin', set: true, express: true, bioassay: false, frozen: false, membrane: false },
    { target: 'mCCR3', moa: 'β-Arrestin', set: true, express: true, bioassay: false, frozen: false, membrane: false },
    { target: 'mCCR4', moa: 'β-Arrestin', set: true, express: true, bioassay: false, frozen: false, membrane: false },
    { target: 'mCCR5', moa: 'β-Arrestin', set: true, express: true, bioassay: false, frozen: false, membrane: false },
    { target: 'mCCR6', moa: 'β-Arrestin', set: true, express: true, bioassay: false, frozen: false, membrane: false },
    { target: 'mCCR7', moa: 'β-Arrestin', set: true, express: true, bioassay: false, frozen: false, membrane: false },
    { target: 'mCCR8', moa: 'β-Arrestin', set: true, express: false, bioassay: false, frozen: false, membrane: false },
    { target: 'mCCR9', moa: 'β-Arrestin', set: true, express: true, bioassay: false, frozen: false, membrane: false },
    { target: 'mCX3CR1', moa: 'β-Arrestin', set: true, express: true, bioassay: false, frozen: false, membrane: false },
    { target: 'mCXCR2 (IL8RB)', moa: 'β-Arrestin', set: true, express: true, bioassay: false, frozen: false, membrane: false },
    { target: 'mCXCR3', moa: 'β-Arrestin', set: true, express: true, bioassay: false, frozen: false, membrane: false },
    { target: 'mCXCR4', moa: 'β-Arrestin', set: true, express: true, bioassay: false, frozen: false, membrane: false },
    { target: 'mCXCR5 (BLR1)', moa: 'β-Arrestin', set: true, express: true, bioassay: false, frozen: false, membrane: false },
    { target: 'mCXCR6', moa: 'β-Arrestin', set: true, express: true, bioassay: false, frozen: false, membrane: false },
    { target: 'mCXCR7 (CMKOR1)', moa: 'β-Arrestin', set: true, express: true, bioassay: false, frozen: false, membrane: false },
  ];

interface CytokineDetailProps {
  language?: Language;
}

const CytokineDetail: React.FC<CytokineDetailProps> = ({ language = 'zh' }) => {
  const content = localizedContent[language];
  const labels = targetDetailCommon[language];
  const cytokineColumns = localizeTargetColumns(CYTOKINE_PORTFOLIO_COLUMNS, language);
  const cytokineRows = localizeTargetRows(CYTOKINE_PORTFOLIO_ROWS, language);

  return (
    <div className="bg-white">
      {/* 1. Introduction Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-[#1C2C5E] mb-2">{content.title}</h1>
          <h2 className="text-xl font-bold text-[#4B827E] mb-6">{content.subtitle}</h2>
          <div className="h-1 w-24 bg-[#4B827E] mx-auto mb-10"></div>
          <div className="text-left space-y-6">
            {content.intro.map((paragraph, idx) => (
              <p key={idx} className="text-slate-600 leading-relaxed text-lg">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Product Highlights */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-teal-50/30 rounded-[3rem] mb-16">
        <h3 className="text-2xl font-bold text-[#1C2C5E] mb-8 text-center">{labels.productHighlights}</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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

      {/* 3. MOA Section - Updated to 3 Specific Modules */}
      <section className="bg-slate-50 py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1C2C5E] mb-10 text-center">{labels.moaTitle} (MoA)</h2>
          
          <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="divide-y divide-slate-100">
              {content.moas.map((item, i) => (
                <div key={i} className="p-10 hover:bg-slate-50 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-start gap-8">
                    <div className="shrink-0">
                      <div className="w-12 h-12 rounded-full bg-teal-50 flex items-center justify-center text-[#4B827E] text-xl font-bold">
                        0{i + 1}
                      </div>
                    </div>
                    <div className="flex-grow">
                      <h4 className="text-2xl font-bold text-[#4B827E] mb-4">{item.title}</h4>
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

      {/* 4. Detailed Product Table */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pb-32">
        <h2 className="text-3xl font-bold text-[#1C2C5E] mb-12 text-center md:text-left">{labels.productList}</h2>
        
        {/* Table 1: Cytokine Receptors */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-[#4B827E] mb-6 border-l-4 border-[#4B827E] pl-4">{content.cytokineTableTitle}</h3>
          <ProductPortfolioTable columns={cytokineColumns} rows={cytokineRows} catalogLabel={labels.catalogNumber} />
        </div>

        {/* Table 2: Chemokine Receptors */}
        <div>
          <h3 className="text-2xl font-bold text-[#4B827E] mb-6 border-l-4 border-[#4B827E] pl-4">{content.chemokineTableTitle}</h3>
          <div className="overflow-hidden shadow-2xl rounded-2xl border border-slate-200">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-slate-200">
                <thead className="bg-[#4B827E] text-white">
                  <tr>
                    {content.chemokineHeaders.map((header, index) => (
                      <th key={header} className={`px-6 py-4 text-sm font-bold uppercase tracking-wider text-xs ${index < content.chemokineHeaders.length - 1 ? 'border-r border-white/20' : ''} ${index < 2 ? 'text-left' : 'text-center'}`}>
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-slate-200">
                  {chemokineData.map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50 hover:bg-teal-50/40 transition-colors'}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-[#1C2C5E] border-r border-slate-100">{row.target}</td>
                      <td className="px-6 py-4 text-sm text-slate-600 border-r border-slate-100">{localizeTargetCell(row.moa, language)}</td>
                      <td className="px-6 py-4 text-center border-r border-slate-100">{row.set && <span className="text-teal-600 font-bold">✓</span>}</td>
                      <td className="px-6 py-4 text-center border-r border-slate-100">{row.express && <span className="text-teal-600 font-bold">✓</span>}</td>
                      <td className="px-6 py-4 text-center border-r border-slate-100">{row.bioassay && <span className="text-teal-600 font-bold">✓</span>}</td>
                      <td className="px-6 py-4 text-center border-r border-slate-100">{row.frozen && <span className="text-teal-600 font-bold">✓</span>}</td>
                      <td className="px-6 py-4 text-center">{row.membrane && <span className="text-teal-600 font-bold">✓</span>}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate-500 text-sm italic bg-slate-50 py-4 rounded-lg border border-dashed border-slate-300">
            {content.sourceNote}
          </p>
        </div>
      </section>
    </div>
  );
};

export default CytokineDetail;
