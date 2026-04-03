
export interface BlogPost {
  id: string;
  title: string;
  category: 'Product Launch' | 'Marketing' | 'Technical Article' | '技术讨论';
  date: string;
  summary: string;
  imageUrl: string;
  content?: string; // Full article content in markdown or HTML
  author?: string;
  tags?: string[];
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
  Applications = 'applications',
  Custom = 'custom',
  Documents = 'documents',
  Contacts = 'contacts',
  Search = 'search',

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
  CheckpointReceptors = 'checkpoint-receptors',
  CytokineReceptors = 'cytokine-receptors',
  KinaseReceptors = 'kinase-receptor',
  Nhr = 'nhr',
  IonChannels = 'ion-channels',
  EpigeneticProteins = 'epigenetic-proteins',

  // Applications Sub-pages
  CytotoxicityDetail = 'cytotoxicity-detail',
  DimerizationDetail = 'dimerization-detail',
  PpiDetail = 'ppi-detail',
  SignalPathwayDetail = 'signal-pathway-detail',
  TargetEngagementDetail = 'target-engagement-detail',
  InternalizationDetail = 'internalization-detail',
  TpdDetail = 'tpd-detail',

  // Custom Sub-pages
  CustomAssayDevelopment = 'custom-assay-development',
  BioassayDevelopment = 'bioassay-development',
  SampleTesting = 'sample-testing',
  FunctionalScreening = 'functional-screening',

  // Documents Sub-pages
  DatasheetList = 'datasheet-list',
  DatasheetDetail = 'datasheet-detail',
  UserManual = 'user-manual',
  QualificationData = 'qualification-data',
  ApplicationNote = 'application-note',
  Reference = 'reference',
  OthersDoc = 'others-doc',

  // Blog
  BlogDetail = 'blog-detail'
}
