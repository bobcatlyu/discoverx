
export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  category: 'Product Launch' | 'Marketing' | 'Technical Article' | '技术讨论' | '产品介绍';
  date: string;
  summary: string;
  imageUrl: string;
  content?: string; // Full article content in markdown or HTML
  author?: string;
  tags?: string[];
  seoTitle?: string;
  seoDescription?: string;
  keywords?: string[];
}

export interface Product {
  id: string;
  name: string;
  description: string;
  type: string;
  target: string;
  mechanism: string;
  imageUrl: string;
}

export interface Resource {
  id: string;
  title: string;
  type: 'Application Note' | 'User Manual' | 'Whitepaper' | 'Certificate';
  date: string;
  size: string;
}

export enum Page {
  // First-level Pages
  Home = 'home',
  Products = 'products',
  Targets = 'targets',
  TargetsJapanese = 'targets-ja',
  Applications = 'mechanisms',
  Custom = 'custom',
  Documents = 'documents',
  Contacts = 'contacts',
  Search = 'search',
  BlogList = 'latest-news',

  // Products Sub-pages
  CellLine = 'cell-line',
  ExpressKit = 'express-kit',
  BioassayKit = 'bioassay-kit',
  Toolbox = 'toolbox',
  DetectionKit = 'detection-kit',
  Reagent = 'reagent',
  MembranePrep = 'membrane-prep',
  Enzyme = 'enzyme',
  Calixar = 'calixar',

  // Targets Sub-pages
  Gpcr = 'gpcr',
  Glp1r = 'glp1r',
  CheckpointReceptors = 'checkpoint-receptors',
  CytokineReceptors = 'cytokine-receptors',
  KinaseReceptors = 'kinase-receptor',
  Nhr = 'nhr',
  IonChannels = 'ion-channels',
  EpigeneticProteins = 'epigenetic-proteins',

  // Mechanism Sub-pages
  CytotoxicityDetail = 'cytotoxicity',
  DimerizationDetail = 'dimerization',
  PpiDetail = 'ppi',
  SignalPathwayDetail = 'signaling-pathways',
  TargetEngagementDetail = 'target-engagement',
  InternalizationDetail = 'internalization',
  TpdDetail = 'tpd',

  // Custom Sub-pages
  CustomAssayDevelopment = 'custom-assay-development',
  BioassayDevelopment = 'bioassay-development',
  SampleTesting = 'sample-testing',

  // Documents Sub-pages
  DatasheetList = 'datasheet-list',
  DatasheetDetail = 'datasheet',
  UserManual = 'user-manual',
  QualificationData = 'qualification-data',
  ApplicationNote = 'application-note',
  Reference = 'reference',
  OthersDoc = 'others-doc',

  // Blog
  BlogDetail = 'blog'
}
