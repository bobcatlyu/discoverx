import React from 'react';
import { Language } from '../types';

interface Capability {
  title: string;
  description: string;
  points: string[];
}

interface Step {
  step: string;
  title: string;
  desc: string;
}

interface SampleTestingContent {
  title: string;
  intro: string[];
  capabilityTitle: string;
  capability: Capability;
  whyTitle: string;
  platformTitle: string;
  platformDescription: string;
  expertTitle: string;
  expertDescription: string;
  advantagesTitle: string;
  advantages: string[];
  workflowTitle: string;
  steps: Step[];
  ctaTitle: string;
  ctaDescription: string;
  ctaButton: string;
}

const localizedContent: Record<Language, SampleTestingContent> = {
  zh: {
    title: '样品检测服务 (Sample Testing Services)',
    intro: [
      '如果您不具备细胞实验室条件，或希望在药物开发的关键阶段通过第三方独立验证数据，Eurofins DiscoverX 的样品检测服务是您的理想选择。',
      '我们将利用公司内部验证过的成熟检测平台，为您提供的化合物、抗体或蛋白质样品进行快速、精准的功能性分析。您可以直接获得高质量的数据报告，无需投入昂贵的仪器设备和人员培训。',
    ],
    capabilityTitle: '核心能力与检测范围',
    capability: {
      title: 'GPCR 功能检测',
      description: '基于 cAMP 与 beta-arrestin 招募两类核心读值，测定 GPCR 靶点上分子的激动、拮抗及功能响应特征。',
      points: ['cAMP Gs / Gi 通路功能响应检测', 'PathHunter beta-arrestin 招募检测', 'EC50 / IC50 曲线拟合与激动剂 / 拮抗剂模式验证'],
    },
    whyTitle: '为何选择我们的外包检测？',
    platformTitle: '权威的检测平台',
    platformDescription: '所有服务均在 Eurofins DiscoverX 全球标准实验室执行，采用与全球 Top 50 药企完全一致的 PathHunter® 与 HitHunter® 技术平台。',
    expertTitle: '专家级数据解读',
    expertDescription: '不仅仅是原始数据，我们的资深科学家将为您提供详细的实验报告，包括详细的药理学参数分析与后续研发建议。',
    advantagesTitle: '检测服务优势',
    advantages: ['极速反馈周期（通常 1-2 周）', '严格的质量控制体系', '无需繁琐的 MTAs 或技术准入费', '全球一致性的实验结果对比'],
    workflowTitle: '标准外包检测流程',
    steps: [
      { step: '01', title: '需求沟通', desc: '讨论检测靶点、所需格式及样品浓度范围。' },
      { step: '02', title: '样品邮寄', desc: '根据我们的指导说明准备并邮寄待测样品。' },
      { step: '03', title: '实验室检测', desc: '由专业技术团队在验证过的系统上执行检测。' },
      { step: '04', title: '报告交付', desc: '提交完整的 PDF 电子版数据报告及原始数据。' },
    ],
    ctaTitle: '立即索取检测咨询与报价',
    ctaDescription: '请提供待测靶点名称及样品数量，我们将为您核算最优惠的服务包价。',
    ctaButton: '立即联系销售',
  },
  ja: {
    title: 'サンプル測定サービス (Sample Testing Services)',
    intro: [
      '細胞実験設備をお持ちでない場合、または創薬開発の重要段階で第三者による独立データ検証を行いたい場合、Eurofins DiscoverX のサンプル測定サービスが有用です。',
      '社内で検証済みの成熟したアッセイプラットフォームを用い、お預かりした化合物、抗体、タンパク質サンプルの機能評価を迅速かつ正確に実施します。高品質なデータレポートを直接取得でき、高額な機器投資や人員トレーニングは不要です。',
    ],
    capabilityTitle: '主な対応範囲',
    capability: {
      title: 'GPCR 機能アッセイ',
      description: 'cAMP と beta-arrestin リクルートメントを主要リードアウトとして、GPCR ターゲットに対する分子のアゴニスト、アンタゴニスト、機能応答を評価します。',
      points: ['cAMP Gs / Gi 経路機能応答アッセイ', 'PathHunter beta-arrestin リクルートメントアッセイ', 'EC50 / IC50 曲線フィッティングおよびアゴニスト / アンタゴニストモード確認'],
    },
    whyTitle: '外部委託測定を選ぶ理由',
    platformTitle: '信頼性の高いアッセイプラットフォーム',
    platformDescription: 'すべてのサービスは Eurofins DiscoverX のグローバル標準ラボで実施され、世界の大手製薬企業で使用されている PathHunter® と HitHunter® 技術プラットフォームを用います。',
    expertTitle: '専門家によるデータ解釈',
    expertDescription: '単なる生データではなく、薬理パラメータ解析と今後の研究開発に向けた提案を含む詳細な試験レポートを提供します。',
    advantagesTitle: 'サービスの利点',
    advantages: ['迅速なフィードバックサイクル（通常 1-2 週間）', '厳格な品質管理体系', '煩雑な MTA や技術アクセス費用が不要', 'グローバルで一貫した実験結果との比較が可能'],
    workflowTitle: '標準的な外部委託測定フロー',
    steps: [
      { step: '01', title: '要件確認', desc: '測定ターゲット、必要なアッセイ形式、サンプル濃度範囲を確認します。' },
      { step: '02', title: 'サンプル送付', desc: '当社のガイドラインに従って測定サンプルを準備し送付します。' },
      { step: '03', title: 'ラボ測定', desc: '専門チームが検証済みシステムでアッセイを実施します。' },
      { step: '04', title: 'レポート納品', desc: 'PDF データレポートと原データを納品します。' },
    ],
    ctaTitle: '測定相談と見積を依頼',
    ctaDescription: '測定したいターゲット名とサンプル数をお知らせください。最適なサービスプランをご提案します。',
    ctaButton: '問い合わせる',
  },
  ko: {
    title: '샘플 테스트 서비스 (Sample Testing Services)',
    intro: [
      '세포 실험실 조건이 없거나 약물 개발의 중요한 단계에서 제3자 독립 검증 데이터가 필요한 경우 Eurofins DiscoverX의 샘플 테스트 서비스가 적합합니다.',
      '사내에서 검증된 성숙한 분석 플랫폼을 이용해 제공해 주신 화합물, 항체 또는 단백질 샘플을 빠르고 정확하게 기능 분석합니다. 고가 장비와 인력 교육 없이 고품질 데이터 보고서를 받을 수 있습니다.',
    ],
    capabilityTitle: '핵심 역량 및 테스트 범위',
    capability: {
      title: 'GPCR 기능 분석',
      description: 'cAMP와 beta-arrestin 모집이라는 두 가지 핵심 판독값을 기반으로 GPCR 타깃에서 분자의 작용제, 길항제 및 기능 반응 특성을 측정합니다.',
      points: ['cAMP Gs / Gi 경로 기능 반응 분석', 'PathHunter beta-arrestin 모집 분석', 'EC50 / IC50 곡선 피팅 및 작용제 / 길항제 모드 검증'],
    },
    whyTitle: '외부 테스트 서비스를 선택하는 이유',
    platformTitle: '검증된 분석 플랫폼',
    platformDescription: '모든 서비스는 Eurofins DiscoverX 글로벌 표준 실험실에서 수행되며, 글로벌 상위 제약사에서 사용하는 PathHunter® 및 HitHunter® 기술 플랫폼을 적용합니다.',
    expertTitle: '전문가 수준의 데이터 해석',
    expertDescription: '단순 원자료가 아니라 상세한 약리학 파라미터 분석과 후속 연구개발 제안을 포함한 실험 보고서를 제공합니다.',
    advantagesTitle: '테스트 서비스 장점',
    advantages: ['빠른 피드백 주기(일반적으로 1-2주)', '엄격한 품질 관리 시스템', '복잡한 MTA 또는 기술 접근 비용 불필요', '글로벌 일관성 있는 실험 결과 비교'],
    workflowTitle: '표준 외주 테스트 절차',
    steps: [
      { step: '01', title: '요구사항 논의', desc: '분석 타깃, 필요한 형식 및 샘플 농도 범위를 논의합니다.' },
      { step: '02', title: '샘플 발송', desc: '가이드에 따라 테스트 샘플을 준비하고 발송합니다.' },
      { step: '03', title: '실험실 테스트', desc: '전문 기술팀이 검증된 시스템에서 분석을 수행합니다.' },
      { step: '04', title: '보고서 제공', desc: 'PDF 데이터 보고서와 원자료를 제공합니다.' },
    ],
    ctaTitle: '테스트 상담 및 견적 요청',
    ctaDescription: '테스트할 타깃명과 샘플 수량을 알려주시면 적합한 서비스 패키지를 제안해 드립니다.',
    ctaButton: '문의하기',
  },
};

interface SampleTestingProps {
  language?: Language;
}

const SampleTesting: React.FC<SampleTestingProps> = ({ language = 'zh' }) => {
  const content = localizedContent[language];

  return (
    <div className="bg-white">
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <h1 className="mb-6 text-4xl font-extrabold text-[#1C2C5E]">{content.title}</h1>
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
          <h2 className="mb-12 text-center text-3xl font-bold text-[#1C2C5E]">{content.capabilityTitle}</h2>
          <div className="mx-auto max-w-3xl">
            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
              <h4 className="mb-4 text-xl font-bold text-[#1C2C5E]">{content.capability.title}</h4>
              <p className="mb-4 text-sm leading-relaxed text-slate-600">{content.capability.description}</p>
              <ul className="space-y-2 text-xs text-slate-500">
                {content.capability.points.map((point) => (
                  <li key={point} className="flex items-center">
                    <span className="mr-2 text-[#4B827E]">●</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <h2 className="mb-12 text-center text-3xl font-bold text-[#1C2C5E] md:text-left">{content.whyTitle}</h2>
        <div className="mb-16 grid items-center gap-12 md:grid-cols-2">
          <div className="space-y-6">
            <div className="border-l-4 border-[#4B827E] pl-6">
              <h3 className="mb-2 text-2xl font-bold text-[#1C2C5E]">{content.platformTitle}</h3>
              <p className="leading-relaxed text-slate-600">{content.platformDescription}</p>
            </div>
            <div className="border-l-4 border-[#4B827E] pl-6">
              <h3 className="mb-2 text-2xl font-bold text-[#1C2C5E]">{content.expertTitle}</h3>
              <p className="leading-relaxed text-slate-600">{content.expertDescription}</p>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-3xl bg-[#4B827E] p-10 text-white shadow-2xl">
            <h4 className="mb-6 flex items-center text-xl font-bold">{content.advantagesTitle}</h4>
            <ul className="space-y-4">
              {content.advantages.map((text) => (
                <li key={text} className="flex items-start">
                  <span className="mr-3 font-bold text-white/40">✓</span>
                  <span className="text-white/90">{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-16 text-center text-3xl font-bold text-[#1C2C5E]">{content.workflowTitle}</h2>
          <div className="relative">
            <div className="absolute left-0 right-0 top-1/2 z-0 hidden h-1 -translate-y-1/2 bg-[#4B827E]/20 md:block"></div>
            <div className="relative z-10 grid grid-cols-1 gap-8 md:grid-cols-4">
              {content.steps.map((item) => (
                <div key={item.step} className="group flex flex-col items-center rounded-2xl border border-slate-100 bg-white p-8 text-center shadow-sm transition-all hover:border-[#4B827E]">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-teal-50 text-2xl font-black text-[#4B827E] transition-all group-hover:bg-[#4B827E] group-hover:text-white">{item.step}</div>
                  <h4 className="mb-3 text-lg font-bold text-[#1C2C5E]">{item.title}</h4>
                  <p className="text-sm leading-relaxed text-slate-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 pb-32 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] bg-gradient-to-r from-[#4B827E] to-[#3d6b67] p-12 text-center text-white shadow-2xl">
          <h2 className="mb-6 text-3xl font-bold text-white">{content.ctaTitle}</h2>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-white/80">{content.ctaDescription}</p>
          <a href="/contacts" className="inline-block rounded-full bg-white px-10 py-4 text-lg font-bold text-[#4B827E] shadow-lg transition-all hover:bg-teal-50">
            {content.ctaButton}
          </a>
        </div>
      </section>
    </div>
  );
};

export default SampleTesting;
