import { Language } from '../types';

export const targetDetailCommon = {
  zh: {
    productHighlights: '产品亮点',
    moaTitle: '作用机制',
    productList: '产品列表',
    catalogNumber: '货号',
    missingTargetNote: '* 如未找到您的特定靶点，欢迎联系我们的开发服务团队进一步沟通。',
  },
  ja: {
    productHighlights: '製品ハイライト',
    moaTitle: '作用機序',
    productList: '製品リスト',
    catalogNumber: 'カタログ番号',
    missingTargetNote: '* お探しのターゲットが見つからない場合は、開発サービスチームまでお問い合わせください。',
  },
  ko: {
    productHighlights: '제품 하이라이트',
    moaTitle: '작용 기전',
    productList: '제품 목록',
    catalogNumber: '카탈로그 번호',
    missingTargetNote: '* 특정 타깃을 찾지 못한 경우 개발 서비스 팀에 문의해 주세요.',
  },
} satisfies Record<Language, Record<string, string>>;

const columnTranslations: Record<Language, Record<string, string>> = {
  zh: {},
  ja: {
    靶点: 'ターゲット',
    靶点类型: 'ターゲットタイプ',
    产品类型: '製品タイプ',
    作用机制: '作用機序',
    检测机制: 'アッセイ機序',
    货号: 'カタログ番号',
    产品描述: '製品説明',
    描述: '説明',
    规格: 'サイズ',
    信号通路: 'シグナル経路',
    细胞种类: '細胞種',
    细胞描述: '細胞説明',
    MOA: 'MOA',
  },
  ko: {
    靶点: '타깃',
    靶点类型: '타깃 유형',
    产品类型: '제품 유형',
    作用机制: '작용 기전',
    检测机制: '분석 기전',
    货号: '카탈로그 번호',
    产品描述: '제품 설명',
    描述: '설명',
    规格: '규격',
    信号通路: '신호 경로',
    细胞种类: '세포 유형',
    细胞描述: '세포 설명',
    MOA: 'MOA',
  },
};

const valueTranslations: Record<Language, Record<string, string>> = {
  zh: {},
  ja: {
    'Stable Cell Line Assay': '安定細胞株アッセイ',
    'Assay-Ready eXpress Kits': 'アッセイレディ eXpress Kit',
    'Qualified Bioassay Kits': '適格性確認済み Bioassay Kit',
    'Target-Based Bioassay Kits': 'ターゲットベース Bioassay Kit',
    'Frozen Cells': '凍結細胞',
    'Membrane Prep': '膜標品',
    'Kinase RTK': 'キナーゼ RTK',
    Dimerization: '二量体化',
    Signaling: 'シグナル伝達',
    'NFAT Reporter': 'NFAT レポーター',
    Internalization: '内在化',
    Clustering: 'クラスタリング',
    'Protein Interaction': 'タンパク質相互作用',
    'Nuclear Translocation': '核移行',
    'cAMP & 钙离子': 'cAMP・カルシウム',
    '受体内化': '受容体内在化',
    'β-Arrestin': 'β-Arrestin',
    '结合/GTPγS 功能': '結合 / GTPγS 機能',
  },
  ko: {
    'Stable Cell Line Assay': '안정 세포주 분석',
    'Assay-Ready eXpress Kits': '바로 사용 가능한 eXpress Kit',
    'Qualified Bioassay Kits': '검증 완료 Bioassay Kit',
    'Target-Based Bioassay Kits': '타깃 기반 Bioassay Kit',
    'Frozen Cells': '동결 세포',
    'Membrane Prep': '막 표본',
    'Kinase RTK': '키나아제 RTK',
    Dimerization: '이합체화',
    Signaling: '신호 전달',
    'NFAT Reporter': 'NFAT 리포터',
    Internalization: '내재화',
    Clustering: '클러스터링',
    'Protein Interaction': '단백질 상호작용',
    'Nuclear Translocation': '핵 이동',
    'cAMP & 钙离子': 'cAMP 및 칼슘',
    '受体内化': '수용체 내재화',
    'β-Arrestin': 'β-Arrestin',
    '结合/GTPγS 功能': '결합 / GTPγS 기능',
  },
};

export const localizeTargetColumns = (columns: string[], language: Language) => {
  return columns.map((column) => columnTranslations[language][column] ?? column);
};

export const localizeTargetCell = (cell: string, language: Language) => {
  return valueTranslations[language][cell] ?? cell;
};

export const localizeTargetRows = (rows: string[][], language: Language) => {
  return rows.map((row) => row.map((cell) => localizeTargetCell(cell, language)));
};
