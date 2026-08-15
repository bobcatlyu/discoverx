import React from 'react';
import { Language } from '../types';

interface StepCard {
  step: string;
  title: string;
  subtitle: string;
}

interface DetailSection {
  step: string;
  title: string;
  paragraphs: string[];
  points?: string[];
  cards?: { title: string; description: string }[];
}

interface BioassayDevContent {
  title: string;
  subtitle: string;
  intro: string[];
  workflowTitle: string;
  workflowSubtitle: string;
  steps: StepCard[];
  sections: DetailSection[];
  longTermTitle: string;
  longTermIntro: string;
  bankTitle: string;
  bankPoints: string[];
  extraTitle: string;
  extraCards: { title: string; description: string }[];
  ctaTitle: string;
  ctaDescription: string;
  ctaButton: string;
}

const localizedContent: Record<Language, BioassayDevContent> = {
  zh: {
    title: '生物活性检测开发与实施',
    subtitle: 'Bioassay Development & Implementation',
    intro: [
      '理想的效价（potency）生物活性检测应能够模拟治疗分子的作用机制（MOA），并在符合 ICH 与 USP 指南的前提下，在符合 GMP 与 GLP 要求的质量控制环境中，产生高度精确、准确且可重复的数据。',
      'Eurofins DiscoverX 提供业内最丰富的即用型经确认（qualified）生物活性检测试剂盒组合，覆盖从 QC 批放行效价测试实施到生物药全生命周期支持的完整需求。',
    ],
    workflowTitle: '生物活性检测开发与实施流程',
    workflowSubtitle: '支持生物药项目的整体解决方案',
    steps: [
      { step: '01', title: '检测开发', subtitle: 'Assay Development' },
      { step: '02', title: '生物活性检测确认', subtitle: 'Bioassay Qualification' },
      { step: '03', title: '方法转移', subtitle: 'Method Transfer' },
      { step: '04', title: '生物活性检测生产', subtitle: 'Bioassay Production' },
      { step: '05', title: '长期支持', subtitle: 'Long-Term Support' },
    ],
    sections: [
      {
        step: '01',
        title: '检测开发 Assay Development',
        paragraphs: [
          '基于双方确认的工作计划，开发团队围绕目标 MOA 与靶点生物学特性设计检测体系。',
          '所选克隆将使用参比标准品或客户临床分子进行功能确认，并验证长期可重复性。此外，检测体系将评估复杂基质耐受能力，使其可用于中和抗体（NAb）检测开发。',
        ],
        points: ['构建基于 MOA 的稳定细胞系', '建立功能响应（cell pool 功能验证）', '验证 >20 代传代稳定性（或根据客户需求延长至 20-30 代以上）', '评估复杂基质（如血清）耐受性', '转换为即用型冻存生物活性检测格式'],
      },
      {
        step: '02',
        title: '生物活性检测确认 Bioassay Qualification',
        paragraphs: ['即用型生物活性检测通过系统化确认研究，以满足监管机构对效价检测的期望。确认研究依据 ICH 与 USP 指南评估关键质量属性，例如准确性、精密度、线性、范围、特异性和稳健性。'],
        cards: [
          { title: '完整试剂盒', description: '包含详细操作流程、优化试剂、预配置检测板' },
          { title: '验证报告', description: '可选提供符合 ICH 报告格式的完整研究数据' },
          { title: '试验性批次', description: '可生成试验性批次用于内部测试' },
        ],
      },
      {
        step: '03',
        title: '方法转移 Method Transfer',
        paragraphs: ['经确认的生物活性检测通过标准化流程转移至合作检测机构，包括 CDMO 或 CRO。方法成功转移后，Eurofins DiscoverX 在验证研究阶段及商业化后阶段持续提供技术支持。'],
        points: ['技术讨论：介绍开发数据', '培训：课堂与实验室培训', '运行检测：使用客户临床分子', '审核批准：数据审核与批准'],
      },
      {
        step: '04',
        title: '生物活性检测生产 Bioassay Production',
        paragraphs: ['在 QC 批放行验证过程中，通常需使用多个批次的生物活性检测细胞作为关键试剂。根据样本检测量与稳定性研究需求，确定所需细胞冻存管数量，从而制定生产批量计划。'],
        cards: [
          { title: '1,000+ 单批最高冻存管数', description: '支持大规模生产需求' },
          { title: '多批次灵活生产计划', description: '预设发货日期或按需生产' },
          { title: 'GMP 质量保证', description: '符合监管要求的生产流程' },
        ],
      },
    ],
    longTermTitle: '长期支持 Long-Term Support',
    longTermIntro: '无论原研生物药还是生物类似药，通常具有长期市场生命周期，这要求稳健的效价检测体系、稳定一致的批次放行以及长期关键试剂供应保障。',
    bankTitle: 'Cell Banks for Bioassays Program',
    bankPoints: ['建立并储存分析用主细胞库（Analytical Master Cell Bank, MCB）', '采用两级细胞库体系', '确保长期检测可重复性', '保证生物活性检测细胞持续供应', '减少每批生产间的 bridging 需求'],
    extraTitle: '额外服务',
    extraCards: [
      { title: '长期供应协议', description: '确保关键试剂的持续稳定供应' },
      { title: '技术转移协议', description: '支持全球多地点实施' },
    ],
    ctaTitle: '联系定制检测开发专家',
    ctaDescription: '如需进一步了解生物活性检测开发与实施服务，或讨论您的具体项目需求，请联系我们的技术专家获取专业支持。',
    ctaButton: '立即咨询',
  },
  ja: {
    title: 'Bioassay 開発と実装',
    subtitle: 'Bioassay Development & Implementation',
    intro: [
      '理想的なポテンシー bioassay は、治療分子の作用機序（MOA）を反映し、ICH と USP ガイドラインに沿って、GMP/GLP に対応した品質管理環境で高精度・高正確性・高再現性のデータを提供する必要があります。',
      'Eurofins DiscoverX は、QC ロットリリース用ポテンシー試験の実装からバイオ医薬品ライフサイクル全体のサポートまで、幅広いニーズに対応する qualified bioassay kit と開発サービスを提供しています。',
    ],
    workflowTitle: 'Bioassay 開発・実装フロー',
    workflowSubtitle: 'バイオ医薬品プロジェクトを支援する包括的ソリューション',
    steps: [
      { step: '01', title: 'アッセイ開発', subtitle: 'Assay Development' },
      { step: '02', title: 'Bioassay 適格性確認', subtitle: 'Bioassay Qualification' },
      { step: '03', title: '方法移管', subtitle: 'Method Transfer' },
      { step: '04', title: 'Bioassay 生産', subtitle: 'Bioassay Production' },
      { step: '05', title: '長期サポート', subtitle: 'Long-Term Support' },
    ],
    sections: [
      {
        step: '01',
        title: 'アッセイ開発 Assay Development',
        paragraphs: ['合意済みの作業計画に基づき、開発チームが目的 MOA とターゲット生物学に沿ってアッセイ系を設計します。', '選択されたクローンは参照標準品または顧客臨床分子で機能確認を行い、長期再現性と複雑マトリックス耐性を評価します。'],
        points: ['MOA ベースの安定細胞株を構築', '機能応答を確立（cell pool 機能確認）', '>20 継代の安定性を確認（必要に応じて 20-30 継代以上）', '血清など複雑マトリックスへの耐性を評価', 'アッセイレディ凍結 bioassay 形式へ変換'],
      },
      {
        step: '02',
        title: 'Bioassay 適格性確認 Bioassay Qualification',
        paragraphs: ['アッセイレディ bioassay は、規制当局がポテンシー試験に求める期待に対応するため、ICH と USP ガイドラインに基づいて精度、真度、直線性、範囲、特異性、堅牢性などの CQA を評価します。'],
        cards: [
          { title: '完全なキット', description: '詳細プロトコル、最適化試薬、事前構成済みアッセイプレートを含みます' },
          { title: '検証レポート', description: '必要に応じて ICH 形式に沿った完全な研究データを提供します' },
          { title: '試験ロット', description: '社内評価用の試験ロットを作製できます' },
        ],
      },
      {
        step: '03',
        title: '方法移管 Method Transfer',
        paragraphs: ['適格性確認済み bioassay は、CDMO や CRO などの協力試験施設へ標準化された手順で移管されます。移管後も検証研究段階および商用化後に継続的な技術サポートを提供します。'],
        points: ['技術ディスカッション：開発データの共有', 'トレーニング：座学およびラボ実習', 'アッセイ実行：顧客臨床分子を使用', 'レビュー承認：データ確認と承認'],
      },
      {
        step: '04',
        title: 'Bioassay 生産 Bioassay Production',
        paragraphs: ['QC ロットリリース検証では、重要試薬として複数ロットの bioassay 細胞が必要になることがあります。サンプル数と安定性研究ニーズに応じて必要な凍結バイアル数を決定し、生産計画を立てます。'],
        cards: [
          { title: '1,000+ バイアル / ロット', description: '大規模生産ニーズに対応' },
          { title: '複数ロット生産計画', description: '予定出荷日またはオンデマンド生産に対応' },
          { title: 'GMP 品質保証', description: '規制要件に沿った生産プロセス' },
        ],
      },
    ],
    longTermTitle: '長期サポート Long-Term Support',
    longTermIntro: '先発バイオ医薬品でもバイオシミラーでも、市場ライフサイクルは長期にわたるため、堅牢なポテンシーアッセイ、安定したロットリリース、重要試薬の長期供給が必要です。',
    bankTitle: 'Cell Banks for Bioassays Program',
    bankPoints: ['分析用マスターセルバンク（Analytical MCB）の構築と保管', '二段階セルバンク体系を採用', '長期的なアッセイ再現性を確保', 'Bioassay 細胞の継続供給を保証', 'ロット間 bridging の必要性を低減'],
    extraTitle: '追加サービス',
    extraCards: [
      { title: '長期供給契約', description: '重要試薬の安定供給を確保' },
      { title: '技術移管契約', description: 'グローバル複数拠点での実装を支援' },
    ],
    ctaTitle: 'カスタムアッセイ開発の専門家に相談',
    ctaDescription: 'Bioassay 開発・実装サービスの詳細や具体的なプロジェクトについて、技術専門家までお問い合わせください。',
    ctaButton: '問い合わせる',
  },
  ko: {
    title: 'Bioassay 개발 및 구현',
    subtitle: 'Bioassay Development & Implementation',
    intro: [
      '이상적인 potency bioassay는 치료 분자의 작용 기전(MOA)을 모사하고 ICH 및 USP 가이드라인에 부합해야 하며, GMP/GLP 품질 관리 환경에서 정밀하고 정확하며 재현성 높은 데이터를 생성해야 합니다.',
      'Eurofins DiscoverX는 QC 배치 방출 potency 테스트 구현부터 바이오의약품 전체 수명주기 지원까지 폭넓은 요구를 충족하는 qualified bioassay kit와 개발 서비스를 제공합니다.',
    ],
    workflowTitle: 'Bioassay 개발 및 구현 프로세스',
    workflowSubtitle: '바이오의약품 프로젝트를 지원하는 통합 솔루션',
    steps: [
      { step: '01', title: '분석 개발', subtitle: 'Assay Development' },
      { step: '02', title: 'Bioassay 적격성 확인', subtitle: 'Bioassay Qualification' },
      { step: '03', title: '방법 이전', subtitle: 'Method Transfer' },
      { step: '04', title: 'Bioassay 생산', subtitle: 'Bioassay Production' },
      { step: '05', title: '장기 지원', subtitle: 'Long-Term Support' },
    ],
    sections: [
      {
        step: '01',
        title: '분석 개발 Assay Development',
        paragraphs: ['양측이 확인한 작업 계획을 기반으로 개발팀은 목표 MOA와 타깃 생물학 특성에 맞춰 분석 시스템을 설계합니다.', '선정된 clone은 참조 표준품 또는 고객 임상 분자로 기능 확인을 수행하고 장기 재현성과 복잡 매트릭스 내성을 평가합니다.'],
        points: ['MOA 기반 안정 세포주 구축', '기능 반응 수립(cell pool 기능 검증)', '>20 passage 안정성 검증(필요 시 20-30 passage 이상)', '혈청 등 복잡 매트릭스 내성 평가', '즉시 사용 가능한 동결 bioassay 형식으로 전환'],
      },
      {
        step: '02',
        title: 'Bioassay 적격성 확인 Bioassay Qualification',
        paragraphs: ['즉시 사용 가능한 bioassay는 규제기관의 potency test 기대사항을 충족하기 위해 ICH 및 USP 가이드라인에 따라 정확성, 정밀도, 선형성, 범위, 특이성, 견고성 등 CQA를 평가합니다.'],
        cards: [
          { title: '완전한 키트', description: '상세 프로토콜, 최적화 시약, 사전 구성된 assay plate 포함' },
          { title: '검증 보고서', description: '필요 시 ICH 보고 형식에 맞춘 전체 연구 데이터 제공' },
          { title: '시험 배치', description: '내부 테스트용 시험 배치 생산 가능' },
        ],
      },
      {
        step: '03',
        title: '방법 이전 Method Transfer',
        paragraphs: ['적격성 확인이 완료된 bioassay는 CDMO 또는 CRO와 같은 협력 시험기관으로 표준화된 절차에 따라 이전됩니다. 이전 후에도 검증 연구 단계와 상업화 이후 단계에서 지속적인 기술 지원을 제공합니다.'],
        points: ['기술 논의: 개발 데이터 소개', '교육: 강의 및 실험실 교육', '분석 실행: 고객 임상 분자 사용', '검토 승인: 데이터 검토 및 승인'],
      },
      {
        step: '04',
        title: 'Bioassay 생산 Bioassay Production',
        paragraphs: ['QC 배치 방출 검증 과정에서는 핵심 시약으로 여러 배치의 bioassay 세포가 필요할 수 있습니다. 샘플 테스트량과 안정성 연구 요구에 따라 필요한 동결 바이알 수를 산정하고 생산 배치 계획을 수립합니다.'],
        cards: [
          { title: '배치당 최대 1,000+ 바이알', description: '대규모 생산 요구 지원' },
          { title: '다중 배치 생산 계획', description: '예정 배송일 또는 주문형 생산 지원' },
          { title: 'GMP 품질 보증', description: '규제 요건에 부합하는 생산 절차' },
        ],
      },
    ],
    longTermTitle: '장기 지원 Long-Term Support',
    longTermIntro: '오리지널 바이오의약품과 바이오시밀러 모두 일반적으로 긴 시장 수명주기를 가지므로 견고한 potency assay, 안정적인 배치 방출 및 핵심 시약의 장기 공급 보장이 필요합니다.',
    bankTitle: 'Cell Banks for Bioassays Program',
    bankPoints: ['분석용 마스터 세포은행(Analytical MCB) 구축 및 보관', '2단계 세포은행 체계 적용', '장기 분석 재현성 보장', 'Bioassay 세포의 지속 공급 보장', '배치 간 bridging 필요성 감소'],
    extraTitle: '추가 서비스',
    extraCards: [
      { title: '장기 공급 계약', description: '핵심 시약의 지속적이고 안정적인 공급 보장' },
      { title: '기술 이전 계약', description: '글로벌 다중 사이트 구현 지원' },
    ],
    ctaTitle: '맞춤형 분석 개발 전문가에게 문의',
    ctaDescription: 'Bioassay 개발 및 구현 서비스에 대해 더 자세히 알고 싶거나 구체적인 프로젝트를 논의하려면 기술 전문가에게 문의해 주세요.',
    ctaButton: '문의하기',
  },
};

interface BioassayDevProps {
  language?: Language;
}

const BioassayDev: React.FC<BioassayDevProps> = ({ language = 'zh' }) => {
  const content = localizedContent[language];

  return (
    <div className="bg-white">
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <h1 className="mb-6 text-4xl font-extrabold text-[#1C2C5E]">{content.title}</h1>
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
          <h2 className="mb-4 text-center text-3xl font-bold text-[#1C2C5E]">{content.workflowTitle}</h2>
          <p className="mx-auto mb-12 max-w-3xl text-center text-slate-600">{content.workflowSubtitle}</p>
          <div className="relative">
            <div className="absolute left-0 right-0 top-1/2 z-0 hidden h-1 -translate-y-1/2 bg-[#4B827E]/20 md:block"></div>
            <div className="relative z-10 grid grid-cols-1 gap-6 md:grid-cols-5">
              {content.steps.map((item) => (
                <div key={item.step} className="group flex flex-col items-center rounded-2xl border border-slate-100 bg-white p-6 text-center shadow-sm transition-all hover:border-[#4B827E]">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-teal-50 text-xl font-black text-[#4B827E] transition-all group-hover:bg-[#4B827E] group-hover:text-white">{item.step}</div>
                  <h4 className="mb-1 text-base font-bold text-[#1C2C5E]">{item.title}</h4>
                  <p className="text-xs text-slate-500">{item.subtitle}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        {content.sections.map((section) => (
          <div key={section.step} className="mb-20">
            <div className="mb-8 flex items-center">
              <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#4B827E] text-xl font-black text-white">{section.step}</div>
              <h3 className="text-2xl font-bold text-[#1C2C5E]">{section.title}</h3>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8">
              <div className="space-y-4 text-slate-600">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="leading-relaxed">{paragraph}</p>
                ))}
              </div>
              {section.points && (
                <ul className="mt-6 grid gap-4 md:grid-cols-2">
                  {section.points.map((point) => (
                    <li key={point} className="flex items-start rounded-lg border border-slate-100 bg-white p-4">
                      <span className="mr-3 text-lg font-bold text-[#4B827E]">✓</span>
                      <span className="text-slate-700">{point}</span>
                    </li>
                  ))}
                </ul>
              )}
              {section.cards && (
                <div className="mt-6 grid gap-4 md:grid-cols-3">
                  {section.cards.map((card) => (
                    <div key={card.title} className="rounded-lg border border-slate-100 bg-white p-4">
                      <p className="mb-1 text-sm font-bold text-[#1C2C5E]">{card.title}</p>
                      <p className="text-xs text-slate-600">{card.description}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}

        <div>
          <div className="mb-8 flex items-center">
            <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#4B827E] text-xl font-black text-white">05</div>
            <h3 className="text-2xl font-bold text-[#1C2C5E]">{content.longTermTitle}</h3>
          </div>
          <div className="rounded-3xl bg-gradient-to-br from-[#4B827E] to-[#3d6b67] p-10 text-white shadow-2xl">
            <h4 className="mb-6 text-2xl font-bold">{content.bankTitle}</h4>
            <p className="mb-8 leading-relaxed text-white/90">{content.longTermIntro}</p>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm">
                <ul className="space-y-3">
                  {content.bankPoints.map((item) => (
                    <li key={item} className="flex items-start text-sm">
                      <span className="mr-3 text-white/60">✓</span>
                      <span className="text-white/90">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm">
                <h5 className="mb-4 text-lg font-bold">{content.extraTitle}</h5>
                <div className="space-y-4">
                  {content.extraCards.map((card) => (
                    <div key={card.title} className="rounded-lg bg-white/5 p-4">
                      <p className="mb-2 font-bold">{card.title}</p>
                      <p className="text-sm text-white/80">{card.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 pb-32 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border-2 border-[#4B827E]/20 bg-gradient-to-r from-slate-50 to-teal-50 p-12 text-center">
          <h2 className="mb-6 text-3xl font-bold text-[#1C2C5E]">{content.ctaTitle}</h2>
          <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-slate-600">{content.ctaDescription}</p>
          <a href="/contacts" className="inline-block rounded-full bg-[#4B827E] px-10 py-4 text-lg font-bold text-white shadow-lg transition-all hover:bg-[#3d6b67]">
            {content.ctaButton}
          </a>
        </div>
      </section>
    </div>
  );
};

export default BioassayDev;
