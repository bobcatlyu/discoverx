import React from 'react';
import { Language } from '../types';

interface Highlight {
  title: string;
  desc: string;
}

interface Capability {
  title: string;
  items: string[];
  wide?: boolean;
}

interface Phase {
  label: string;
  title: string;
  activityTitle: string;
  activities: string[];
  deliverableTitle: string;
  deliverables: string[];
  optionalTitle?: string;
  optional?: string[];
}

interface CustomCellLineContent {
  title: string;
  subtitle: string;
  intro: string[];
  bullets: string[];
  highlightsTitle: string;
  highlights: Highlight[];
  capabilitiesTitle: string;
  capabilities: Capability[];
  workflowTitle: string;
  phases: Phase[];
  ctaTitle: string;
  ctaDescription: string;
  ctaButton: string;
}

const localizedContent: Record<Language, CustomCellLineContent> = {
  zh: {
    title: '开发服务能力',
    subtitle: 'Custom Development Capabilities',
    intro: [
      '细胞水平检测贯穿于药物发现与开发的各个阶段，并延伸至商业化放行与稳定性测试环节。然而，在企业内部实施定制细胞检测体系的开发具有相当挑战性，从确保生理相关性到方法学确认、验证、实施后的转移与支持等均需系统能力。',
      'Eurofins DiscoverX 提供业内最全面的现货细胞水平检测产品组合，可直接用于客户项目。同时，依托在细胞系工程、检测设计、方法学确认以及细胞与蛋白生产方面的深厚经验，可根据项目特定需求提供多种定制化解决方案。',
      '依托超过 20 年的开发服务经验，以及为全球多家公司药物发现项目开发数千项定制检测体系的实践积累（涵盖筛选、先导优化与生物分析方法开发阶段），为项目提供系统支持。',
    ],
    bullets: ['构建不同细胞背景、不同靶点或不同细胞模型的工程细胞系', '开发具有特定作用机制（MOA）的创新检测体系', '基于客户临床候选分子开发经确认的即用型生物活性检测（bioassay）'],
    highlightsTitle: '产品亮点',
    highlights: [
      { title: '开发经验深厚', desc: '数十年细胞检测体系开发、细胞系工程及重组酶开发经验' },
      { title: '细胞系工程能力', desc: '支持外源表达策略或基因编辑技术' },
      { title: '协作式开发模式', desc: '通过专属项目经理提供咨询式产品开发与定期进度更新' },
      { title: '完整解决方案', desc: '在同一团队内完成定制检测开发及配套筛选与分析服务' },
    ],
    capabilitiesTitle: '核心开发服务能力',
    capabilities: [
      { title: '工程化细胞株', items: ['外源表达策略（组成型或诱导型）', '基因编辑（如基于 CRISPR/Cas9 的 KO / KI）', '逆转录病毒或慢病毒转导'] },
      { title: '生物活性检测 (Bioassay)', items: ['Bioassay 开发及基于 ICH 指南的方法学确认', 'Bioassay 向 QC 检测现场转移', '大批量或多批次即用型冻存细胞生产'] },
      { title: '筛选与研究支持', items: ['筛选（高通量与超高通量）、功能表征、分型分析', 'IND 支持研究及可比性研究', '膜制备物开发与生产'] },
      { title: '细胞库生产', items: ['分析用主细胞库 (MCB) 两级生产体系', '关键试剂与生物检定细胞供应'] },
      { title: '蛋白开发与生产', wide: true, items: ['重组酶生产（活性型、失活型、无活性型）', '多亚基蛋白复合体构建', '定制化纯化工艺开发', '高质量蛋白表征与质量控制'] },
    ],
    workflowTitle: '定制检测开发项目流程',
    phases: [
      { label: 'Phase 01', title: '项目定义', activityTitle: '关键活动', activities: ['深度咨询：明确项目目标与范围', '可行性研究：评估技术路径与可实施性'], deliverableTitle: '交付成果', deliverables: ['详细工作计划（包含时间表、项目交付内容与报价）'] },
      { label: 'Phase 02', title: '项目执行', activityTitle: '关键活动', activities: ['细胞系工程：稳定细胞系构建、功能验证与稳定性测试', '检测体系开发：方法优化与详细操作流程制定', '筛选与分型：使用目录产品或定制检测体系测试客户分子'], deliverableTitle: '交付成果', deliverables: ['每两周提供进度更新及阶段性里程碑报告'] },
      { label: 'Phase 03', title: '材料交付', activityTitle: '交付内容', activities: ['验证稳定细胞系', '经确认的即用型生物活性检测', '膜制备产品', '生物活性检测 ICH 方法学确认报告', '可比性研究报告'], deliverableTitle: '可选服务', deliverables: ['大批量生产', '主细胞库建立', '方法转移至检测现场'] },
    ],
    ctaTitle: '准备好开启您的定制项目了吗？',
    ctaDescription: '填写您的项目需求，我们的技术专家将在 24 小时内为您提供初步的技术建议与报价方案。',
    ctaButton: '立即咨询专家',
  },
  ja: {
    title: 'カスタム開発サービス',
    subtitle: 'Custom Development Capabilities',
    intro: [
      '細胞ベースアッセイは創薬・開発の各段階で使用され、商用ロットリリースや安定性試験にも広がります。一方、社内でカスタム細胞アッセイを開発するには、生理学的関連性、方法適格性確認、バリデーション、移管、実装後サポートまで体系的な能力が必要です。',
      'Eurofins DiscoverX は業界有数の既製細胞ベースアッセイ製品ポートフォリオに加え、細胞株エンジニアリング、アッセイ設計、方法適格性確認、細胞・タンパク質生産の経験を活かし、プロジェクト固有のニーズに応じたカスタムソリューションを提供します。',
      '20 年以上の開発サービス経験と、スクリーニング、リード最適化、生物分析法開発を含む多数のカスタムアッセイ開発実績に基づき、プロジェクトを体系的に支援します。',
    ],
    bullets: ['異なる細胞背景、ターゲット、細胞モデルに対応するエンジニアード細胞株の構築', '特定の作用機序（MOA）に基づく新規アッセイ系の開発', '顧客の臨床候補分子に基づく qualified assay-ready bioassay の開発'],
    highlightsTitle: '製品ハイライト',
    highlights: [
      { title: '豊富な開発経験', desc: '細胞アッセイ開発、細胞株エンジニアリング、組換え酵素開発における長年の経験' },
      { title: '細胞株エンジニアリング能力', desc: '外因性発現戦略または遺伝子編集技術に対応' },
      { title: '協働型開発モデル', desc: '専任プロジェクトマネージャーによるコンサルティング型開発と定期進捗更新' },
      { title: '包括的ソリューション', desc: 'カスタムアッセイ開発、スクリーニング、分析サービスを同一チームで提供' },
    ],
    capabilitiesTitle: '主な開発サービス能力',
    capabilities: [
      { title: 'エンジニアード細胞株', items: ['外因性発現戦略（恒常発現または誘導発現）', 'CRISPR/Cas9 ベースの KO / KI などの遺伝子編集', 'レトロウイルスまたはレンチウイルス導入'] },
      { title: 'Bioassay', items: ['Bioassay 開発および ICH ガイドラインに基づく方法適格性確認', 'QC 試験施設への bioassay 移管', '大規模または複数ロットの assay-ready 凍結細胞生産'] },
      { title: 'スクリーニング・研究支援', items: ['HTS/uHTS、機能特性評価、プロファイリング', 'IND 支援研究および同等性研究', '膜標品の開発と生産'] },
      { title: 'セルバンク生産', items: ['分析用 MCB の二段階生産システム', '重要試薬および bioassay 細胞の供給'] },
      { title: 'タンパク質開発・生産', wide: true, items: ['組換え酵素生産（活性型、不活性型、触媒不活性型）', '多サブユニットタンパク質複合体の構築', 'カスタム精製プロセス開発', '高品質なタンパク質特性評価と品質管理'] },
    ],
    workflowTitle: 'カスタムアッセイ開発プロジェクトフロー',
    phases: [
      { label: 'Phase 01', title: 'プロジェクト定義', activityTitle: '主な活動', activities: ['詳細相談：プロジェクト目標と範囲を明確化', '実現可能性評価：技術ルートと実装可能性を評価'], deliverableTitle: '成果物', deliverables: ['詳細作業計画（スケジュール、成果物、見積を含む）'] },
      { label: 'Phase 02', title: 'プロジェクト実行', activityTitle: '主な活動', activities: ['細胞株エンジニアリング：安定細胞株構築、機能確認、安定性試験', 'アッセイ開発：方法最適化と詳細プロトコル作成', 'スクリーニング・プロファイリング：既製またはカスタムアッセイで顧客分子を評価'], deliverableTitle: '成果物', deliverables: ['隔週の進捗更新とマイルストーンレポート'] },
      { label: 'Phase 03', title: '材料納品', activityTitle: '納品内容', activities: ['検証済み安定細胞株', 'qualified assay-ready bioassay', '膜標品', 'ICH 方法適格性確認レポート', '同等性研究レポート'], deliverableTitle: 'オプションサービス', deliverables: ['大規模生産', 'マスターセルバンク構築', '試験施設への方法移管'] },
    ],
    ctaTitle: 'カスタムプロジェクトを始めますか？',
    ctaDescription: 'プロジェクト要件をお知らせください。技術専門家が初期の技術提案と見積プランをご案内します。',
    ctaButton: '専門家に相談',
  },
  ko: {
    title: '맞춤형 개발 서비스 역량',
    subtitle: 'Custom Development Capabilities',
    intro: [
      '세포 기반 분석은 신약 발굴과 개발의 모든 단계에서 사용되며 상업화 배치 방출 및 안정성 시험까지 확장됩니다. 그러나 기업 내부에서 맞춤형 세포 분석 시스템을 개발하려면 생리학적 관련성 확보, 방법 적격성 확인, 검증, 이전 및 구현 후 지원까지 체계적인 역량이 필요합니다.',
      'Eurofins DiscoverX는 업계에서 폭넓은 기성 세포 기반 분석 제품 포트폴리오를 제공하며, 세포주 엔지니어링, 분석 설계, 방법 적격성 확인, 세포 및 단백질 생산 경험을 기반으로 프로젝트별 맞춤 솔루션을 제공합니다.',
      '20년 이상의 개발 서비스 경험과 전 세계 여러 신약 발굴 프로젝트에서 수천 개의 맞춤형 분석 시스템을 개발한 실적을 바탕으로 프로젝트를 체계적으로 지원합니다.',
    ],
    bullets: ['다양한 세포 배경, 타깃 또는 세포 모델에 맞춘 엔지니어링 세포주 구축', '특정 작용 기전(MOA)을 가진 신규 분석 시스템 개발', '고객 임상 후보 분자를 기반으로 qualified assay-ready bioassay 개발'],
    highlightsTitle: '제품 하이라이트',
    highlights: [
      { title: '풍부한 개발 경험', desc: '수십 년의 세포 분석 시스템 개발, 세포주 엔지니어링 및 재조합 효소 개발 경험' },
      { title: '세포주 엔지니어링 역량', desc: '외인성 발현 전략 또는 유전자 편집 기술 지원' },
      { title: '협업형 개발 모델', desc: '전담 프로젝트 매니저를 통한 컨설팅형 제품 개발과 정기 진행 업데이트' },
      { title: '완전한 솔루션', desc: '맞춤형 분석 개발과 관련 스크리닝 및 분석 서비스를 한 팀에서 수행' },
    ],
    capabilitiesTitle: '핵심 개발 서비스 역량',
    capabilities: [
      { title: '엔지니어링 세포주', items: ['외인성 발현 전략(구성적 또는 유도형)', 'CRISPR/Cas9 기반 KO / KI 등 유전자 편집', '레트로바이러스 또는 렌티바이러스 형질도입'] },
      { title: 'Bioassay', items: ['Bioassay 개발 및 ICH 가이드라인 기반 방법 적격성 확인', 'Bioassay를 QC 시험 사이트로 이전', '대량 또는 다중 배치 assay-ready 동결 세포 생산'] },
      { title: '스크리닝 및 연구 지원', items: ['HTS/uHTS, 기능 특성 분석, 프로파일링', 'IND 지원 연구 및 비교동등성 연구', '막 표본 개발 및 생산'] },
      { title: '세포은행 생산', items: ['분석용 마스터 세포은행(MCB) 2단계 생산 시스템', '핵심 시약 및 bioassay 세포 공급'] },
      { title: '단백질 개발 및 생산', wide: true, items: ['재조합 효소 생산(활성형, 불활성형, 비활성형)', '다중 소단위 단백질 복합체 구축', '맞춤형 정제 공정 개발', '고품질 단백질 특성 분석 및 품질 관리'] },
    ],
    workflowTitle: '맞춤형 분석 개발 프로젝트 프로세스',
    phases: [
      { label: 'Phase 01', title: '프로젝트 정의', activityTitle: '주요 활동', activities: ['심층 상담: 프로젝트 목표와 범위 명확화', '타당성 연구: 기술 경로와 구현 가능성 평가'], deliverableTitle: '결과물', deliverables: ['상세 작업 계획(일정, 프로젝트 산출물 및 견적 포함)'] },
      { label: 'Phase 02', title: '프로젝트 실행', activityTitle: '주요 활동', activities: ['세포주 엔지니어링: 안정 세포주 구축, 기능 검증 및 안정성 시험', '분석 시스템 개발: 방법 최적화와 상세 프로토콜 수립', '스크리닝 및 프로파일링: 카탈로그 제품 또는 맞춤 분석으로 고객 분자 테스트'], deliverableTitle: '결과물', deliverables: ['2주마다 진행 업데이트 및 단계별 마일스톤 보고'] },
      { label: 'Phase 03', title: '자료 및 재료 제공', activityTitle: '제공 내용', activities: ['검증된 안정 세포주', 'qualified assay-ready bioassay', '막 표본 제품', 'Bioassay ICH 방법 적격성 확인 보고서', '비교동등성 연구 보고서'], deliverableTitle: '선택 서비스', deliverables: ['대량 생산', '마스터 세포은행 구축', '시험 사이트로 방법 이전'] },
    ],
    ctaTitle: '맞춤형 프로젝트를 시작할 준비가 되셨나요?',
    ctaDescription: '프로젝트 요구사항을 알려주시면 기술 전문가가 초기 기술 제안과 견적 방안을 제공해 드립니다.',
    ctaButton: '전문가에게 문의',
  },
};

interface CustomCellLineDevProps {
  language?: Language;
}

const CustomCellLineDev: React.FC<CustomCellLineDevProps> = ({ language = 'zh' }) => {
  const content = localizedContent[language];

  return (
    <div className="bg-white">
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <h1 className="mb-6 text-4xl font-extrabold text-[#1C2C5E]">{content.title}</h1>
          <h2 className="mb-6 text-xl font-bold text-[#4B827E]">{content.subtitle}</h2>
          <div className="mb-8 h-1 w-20 bg-[#4B827E]"></div>
          <div className="space-y-6 text-lg leading-relaxed text-slate-600">
            {content.intro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <ul className="list-inside list-disc space-y-2 pl-4">
              {content.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-10 text-center text-3xl font-bold text-[#1C2C5E]">{content.highlightsTitle}</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {content.highlights.map((item) => (
              <div key={item.title} className="rounded-2xl border border-slate-100 bg-white p-8 shadow-sm transition-all hover:shadow-md">
                <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-[#4B827E]/10 text-[#4B827E]">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="mb-3 text-lg font-bold text-[#1C2C5E]">{item.title}</h3>
                <p className="text-sm leading-relaxed text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <h2 className="mb-12 text-center text-3xl font-bold text-[#1C2C5E]">{content.capabilitiesTitle}</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {content.capabilities.map((capability) => (
            <div key={capability.title} className={`rounded-2xl border border-slate-200 bg-white p-8 shadow-sm ${capability.wide ? 'lg:col-span-2' : ''}`}>
              <h4 className="mb-6 flex items-center text-xl font-bold text-[#4B827E]">
                <span className="mr-4 h-8 w-2 rounded-full bg-[#4B827E]"></span>
                {capability.title}
              </h4>
              <ul className={`space-y-4 text-sm text-slate-600 ${capability.wide ? 'md:grid md:grid-cols-2 md:gap-4 md:space-y-0' : ''}`}>
                {capability.items.map((item) => (
                  <li key={item} className="flex items-start">
                    <span className="mr-2 font-bold text-[#4B827E]">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-16 text-center text-3xl font-bold text-[#1C2C5E]">{content.workflowTitle}</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {content.phases.map((phase) => (
              <div key={phase.label} className="flex flex-col gap-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
                <div>
                  <div className="mb-2 text-sm font-bold uppercase tracking-widest text-[#4B827E]">{phase.label}</div>
                  <h3 className="text-2xl font-bold text-[#1C2C5E]">{phase.title}</h3>
                </div>
                <div className="space-y-6">
                  <div>
                    <h4 className="mb-3 font-bold text-[#1C2C5E]">{phase.activityTitle}</h4>
                    <ul className="space-y-2 text-sm text-slate-600">
                      {phase.activities.map((activity) => (
                        <li key={activity}>• {activity}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="mb-3 font-bold text-[#1C2C5E]">{phase.deliverableTitle}</h4>
                    <ul className="space-y-2 text-sm text-slate-600">
                      {phase.deliverables.map((deliverable) => (
                        <li key={deliverable}>• {deliverable}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
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

export default CustomCellLineDev;
