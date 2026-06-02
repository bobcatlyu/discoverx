import React from 'react';
import { Page } from '../types';

interface TargetsJapanesePageProps {
  onNavigate: (page: Page) => void;
}

const targetCards = [
  {
    id: 'gpcr',
    title: 'Gタンパク質共役受容体 GPCR',
    description:
      '生理機能、代謝、神経伝達、炎症などに関わる主要な膜受容体ファミリーです。DiscoverX は beta-arrestin、cAMP、calcium、internalization など複数の測定系を提供します。',
    imageUrl: '/pic/GPCR-1150x350.jpg',
    page: Page.Gpcr,
  },
  {
    id: 'cytokine',
    title: 'サイトカイン受容体 Cytokine Receptors',
    description:
      'インターロイキン、インターフェロン、成長因子などのシグナル評価に利用できます。二量体化、シグナル伝達、レポーター系の assay 選定に適しています。',
    imageUrl: '/pic/Cytokines_Small-Card-Image.jpg',
    page: Page.CytokineReceptors,
  },
  {
    id: 'checkpoint',
    title: '免疫チェックポイント受容体',
    description:
      'T 細胞活性化、共刺激、免疫抑制シグナルの評価に使用されます。PD-1、CTLA-4、TNFRSF、IgSF 関連ターゲットの機能評価を支援します。',
    imageUrl: '/pic/Checkpoint-Modulators_Small-Card-Image.jpg',
    page: Page.CheckpointReceptors,
  },
  {
    id: 'kinase',
    title: '受容体チロシンキナーゼ RTK / Kinases',
    description:
      '細胞増殖、分化、生存、代謝制御に関わる kinase target に対応します。受容体活性化、SH2 recruitment、酵素活性 assay の検討に使えます。',
    imageUrl: '/pic/RTKs_CTKs_Small-Card-Image.jpg',
    page: Page.KinaseReceptors,
  },
  {
    id: 'nhr',
    title: '核内受容体 NHR',
    description:
      'リガンド依存性転写因子として、代謝、発生、炎症反応に関与する target 群です。NHR translocation や interaction assay の確認に適しています。',
    imageUrl: '/pic/Nuclear-Hormones_Small-Card-Image-1.jpg',
    page: Page.Nhr,
  },
  {
    id: 'ion-channel',
    title: 'イオンチャネル Ion Channels',
    description:
      '膜電位、神経伝達、筋収縮、細胞興奮性に関わる target 群です。創薬初期の機能確認や選択性評価の候補として整理できます。',
    imageUrl: '/pic/Ion-Channels_Large-Image-310x174-1.jpg',
    page: Page.IonChannels,
  },
  {
    id: 'epigenetic',
    title: 'エピジェネティック関連タンパク質',
    description:
      'ヒストン修飾、DNA methylation、chromatin regulation に関わる target 群です。細胞内 target engagement や機能解析の導入に向いています。',
    imageUrl: '/pic/Nuclear-Hormones_Small-Card-Image-1.jpg',
    page: Page.EpigeneticProteins,
  },
];

const TargetsJapanesePage: React.FC<TargetsJapanesePageProps> = ({ onNavigate }) => {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8" lang="ja">
      <div className="mb-10 max-w-3xl">
        <p className="mb-3 text-sm font-bold uppercase tracking-widest text-[#4B827E]">Target Selection</p>
        <h1 className="text-3xl font-bold text-slate-900 md:text-4xl">ターゲットから DiscoverX assay を選ぶ</h1>
        <p className="mt-4 text-lg leading-8 text-slate-600">
          受容体、シグナル経路、細胞機能の観点から、薬剤探索、MOA 確認、bioassay 開発に利用できる
          DiscoverX の主要 target 領域を整理しています。
        </p>
        <div className="mt-5 h-1 w-16 bg-[#4B827E]" />
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {targetCards.map((card) => (
          <article
            key={card.id}
            className="group flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white transition-all duration-300 hover:border-[#4B827E] hover:shadow-xl"
          >
            <div className="h-48 overflow-hidden bg-slate-100">
              <img
                src={card.imageUrl}
                alt={card.title}
                className="h-full w-full object-cover opacity-90 transition-transform duration-500 group-hover:scale-105 group-hover:opacity-100"
              />
            </div>
            <div className="flex flex-grow flex-col p-6">
              <h2 className="mb-3 text-xl font-bold leading-7 text-slate-800">{card.title}</h2>
              <p className="mb-6 flex-grow text-sm leading-7 text-slate-600">{card.description}</p>
              <button
                type="button"
                onClick={() => onNavigate(card.page)}
                className="inline-flex items-center text-sm font-semibold text-[#4B827E] hover:text-[#3d6b67]"
              >
                詳細を見る
                <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default TargetsJapanesePage;
