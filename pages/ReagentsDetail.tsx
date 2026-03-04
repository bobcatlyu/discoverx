import React from 'react';

const ReagentsDetail: React.FC = () => {
  // Page 1 & 2: Cell Culture Reagents
  const cellCultureReagents = [
    { usage: '细胞培养Cell Culture Kits', cat: '92-3101G', desc: 'AssayComplete Cell Culture Kit-101', specs: 'Kit' },
    { usage: '细胞培养Cell Culture Kits', cat: '92-3102G', desc: 'AssayComplete Cell Culture Kit-102', specs: 'Kit' },
    { usage: '细胞培养Cell Culture Kits', cat: '92-3103G', desc: 'AssayComplete Cell Culture Kit-103', specs: 'Kit' },
    { usage: '细胞培养Cell Culture Kits', cat: '92-3105G', desc: 'AssayComplete Cell Culture Kit-105', specs: 'Kit' },
    { usage: '细胞培养Cell Culture Kits', cat: '92-3107G', desc: 'AssayComplete Cell Culture Kit-107', specs: 'Kit' },
    { usage: '细胞培养Cell Culture Kits', cat: '92-3108G', desc: 'AssayComplete Cell Culture Kit-108', specs: 'Kit' },
    { usage: '细胞培养Cell Culture Kits', cat: '92-3109G', desc: 'AssayComplete Cell Culture Kit-109', specs: 'Kit' },
    { usage: '细胞培养Cell Culture Kits', cat: '92-3110G', desc: 'AssayComplete Cell Culture Kit-110', specs: 'Kit' },
    { usage: '细胞培养Cell Culture Kits', cat: '92-3111G', desc: 'AssayComplete Cell Culture Kit-111', specs: 'Kit' },
    { usage: '细胞培养Cell Culture Kits', cat: '92-3112G', desc: 'AssayComplete Cell Culture Kit-112', specs: 'Kit' },
    { usage: '细胞培养Cell Culture Kits', cat: '92-3113G', desc: 'AssayComplete Cell Culture Kit-113', specs: 'Kit' },
    { usage: '细胞培养Cell Culture Kits', cat: '92-3114G', desc: 'AssayComplete Cell Culture Kit-114', specs: 'Kit' },
    { usage: '细胞培养Cell Culture Kits', cat: '92-3115G', desc: 'AssayComplete Cell Culture Kit-115', specs: 'Kit' },
    { usage: '细胞培养Cell Culture Kits', cat: '92-3116G', desc: 'AssayComplete Cell Culture Kit-116', specs: 'Kit' },
    { usage: '细胞培养Cell Culture Kits', cat: '92-3117G', desc: 'AssayComplete Cell Culture Kit-117', specs: 'Kit' },
    { usage: '细胞消化Cell Detachment', cat: '92-0009', desc: 'AssayComplete Cell Detachment Reagent', specs: '50 mL' },
    { usage: '细胞冻存Cell Freezing', cat: '92-5101FR', desc: 'AssayComplete Freezing Reagent F1', specs: '2 x 50 mL' },
    { usage: '细胞冻存Cell Freezing', cat: '92-5102FR', desc: 'AssayComplete Freezing Reagent F2', specs: '2 x 50 mL' },
    { usage: '细胞冻存Cell Freezing', cat: '92-5103FR', desc: 'AssayComplete Freezing Reagent F3', specs: '2 x 50 mL' },
    { usage: '细胞冻存Cell Freezing', cat: '92-5104FR', desc: 'AssayComplete Freezing Reagent F4', specs: '2 x 50 mL' },
    { usage: '细胞冻存Cell Freezing', cat: '92-5105FR', desc: 'AssayComplete Freezing Reagent F5', specs: '2 x 50 mL' },
    { usage: '细胞冻存Cell Freezing', cat: '92-5106FR', desc: 'AssayComplete Freezing Reagent F6', specs: '2 x 50 mL' },
    { usage: '细胞冻存Cell Freezing', cat: '92-5107FR', desc: 'AssayComplete Freezing Reagent F7', specs: '2 x 50 mL' },
    { usage: '细胞解冻Cell Thawing', cat: '92-4101TR', desc: 'AssayComplete Thawing Reagent T1', specs: '100 mL' },
    { usage: '细胞解冻Cell Thawing', cat: '92-4102TR', desc: 'AssayComplete Thawing Reagent T2', specs: '100 mL' },
    { usage: '细胞解冻Cell Thawing', cat: '92-4103TR', desc: 'AssayComplete Thawing Reagent T3', specs: '100 mL' },
    { usage: '细胞解冻Cell Thawing', cat: '92-4104TR', desc: 'AssayComplete Thawing Reagent T4', specs: '100 mL' },
    { usage: '细胞解冻Cell Thawing', cat: '92-4105TR', desc: 'AssayComplete Thawing Reagent T5', specs: '100 mL' },
    { usage: '细胞解冻Cell Thawing', cat: '92-4106TR', desc: 'AssayComplete Thawing Reagent T6', specs: '100 mL' },
    { usage: '细胞解冻Cell Thawing', cat: '92-4108TR', desc: 'AssayComplete Thawing Reagent T8', specs: '100 mL' },
    { usage: '细胞解冻Cell Thawing', cat: '92-4110TR', desc: 'AssayComplete Thawing Reagent T10', specs: '100 mL' },
    { usage: '细胞铺板Cell Plating', cat: '93-0563R0A', desc: 'AssayComplete Cell Plating 0 Reagent', specs: '100 mL' },
    { usage: '细胞铺板Cell Plating', cat: '93-0563R0B', desc: 'AssayComplete Cell Plating 0 Reagent', specs: '500 mL' },
    { usage: '细胞铺板Cell Plating', cat: '93-0563R10A', desc: 'AssayComplete Cell Plating 10 Reagent', specs: '100 mL' },
    { usage: '细胞铺板Cell Plating', cat: '93-0563R10B', desc: 'AssayComplete Cell Plating 10 Reagent', specs: '500 mL' },
    { usage: '细胞铺板Cell Plating', cat: '93-0563R11A', desc: 'AssayComplete Cell Plating 11 Reagent', specs: '100 mL' },
    { usage: '细胞铺板Cell Plating', cat: '93-0563R11B', desc: 'AssayComplete Cell Plating 11 Reagent', specs: '500 mL' },
    { usage: '细胞铺板Cell Plating', cat: '93-0563R13A', desc: 'AssayComplete Cell Plating 13 Reagent', specs: '100 mL' },
    { usage: '细胞铺板Cell Plating', cat: '93-0563R13B', desc: 'AssayComplete Cell Plating 13 Reagent', specs: '500 mL' },
    { usage: '细胞铺板Cell Plating', cat: '93-0563R14A', desc: 'AssayComplete Cell Plating 14 Reagent', specs: '100 mL' },
    { usage: '细胞铺板Cell Plating', cat: '93-0563R14B', desc: 'AssayComplete Cell Plating 14 Reagent', specs: '500 mL' },
    { usage: '细胞铺板Cell Plating', cat: '93-0563R15A', desc: 'AssayComplete Cell Plating 15 Reagent', specs: '100 mL' },
    { usage: '细胞铺板Cell Plating', cat: '93-0563R15B', desc: 'AssayComplete Cell Plating 15 Reagent', specs: '500 mL' },
    { usage: '细胞铺板Cell Plating', cat: '93-0563R16A', desc: 'AssayComplete Cell Plating 16 Reagent', specs: '100 mL' },
    { usage: '细胞铺板Cell Plating', cat: '93-0563R16B', desc: 'AssayComplete Cell Plating 16 Reagent', specs: '500 mL' },
    { usage: '细胞铺板Cell Plating', cat: '93-0563R17A', desc: 'AssayComplete Cell Plating 17 Reagent', specs: '100 mL' },
    { usage: '细胞铺板Cell Plating', cat: '93-0563R17B', desc: 'AssayComplete Cell Plating 17 Reagent', specs: '500 mL' },
    { usage: '细胞铺板Cell Plating', cat: '93-0563R18A', desc: 'AssayComplete Cell Plating 18 Reagent', specs: '100 mL' },
    { usage: '细胞铺板Cell Plating', cat: '93-0563R18B', desc: 'AssayComplete Cell Plating 18 Reagent', specs: '500 mL' },
    { usage: '细胞铺板Cell Plating', cat: '93-0563R19A', desc: 'AssayComplete Cell Plating 19 Reagent', specs: '100 mL' },
    { usage: '细胞铺板Cell Plating', cat: '93-0563R19B', desc: 'AssayComplete Cell Plating 19 Reagent', specs: '500 mL' },
    { usage: '细胞铺板Cell Plating', cat: '93-0563R1A', desc: 'AssayComplete Cell Plating 1 Reagent', specs: '100 mL' },
    { usage: '细胞铺板Cell Plating', cat: '93-0563R1B', desc: 'AssayComplete Cell Plating 1 Reagent', specs: '500 mL' },
    { usage: '细胞铺板Cell Plating', cat: '93-0563R20A', desc: 'AssayComplete Cell Plating 20 Reagent', specs: '100 mL' },
    { usage: '细胞铺板Cell Plating', cat: '93-0563R20B', desc: 'AssayComplete Cell Plating 20 Reagent', specs: '500 mL' },
    { usage: '细胞铺板Cell Plating', cat: '93-0563R21A', desc: 'AssayComplete Cell Plating 21 Reagent', specs: '100 mL' },
    { usage: '细胞铺板Cell Plating', cat: '93-0563R21B', desc: 'AssayComplete Cell Plating 21 Reagent', specs: '500 mL' },
    { usage: '细胞铺板Cell Plating', cat: '93-0563R22A', desc: 'AssayComplete Cell Plating 22 Reagent', specs: '100 mL' },
    { usage: '细胞铺板Cell Plating', cat: '93-0563R22B', desc: 'AssayComplete Cell Plating 22 Reagent', specs: '500 mL' },
    { usage: '细胞铺板Cell Plating', cat: '93-0563R23A', desc: 'AssayComplete Cell Plating 23 Reagent', specs: '100 mL' },
    { usage: '细胞铺板Cell Plating', cat: '93-0563R23B', desc: 'AssayComplete Cell Plating 23 Reagent', specs: '500 mL' },
    { usage: '细胞铺板Cell Plating', cat: '93-0563R24A', desc: 'AssayComplete Cell Plating 24 Reagent', specs: '100 mL' },
    { usage: '细胞铺板Cell Plating', cat: '93-0563R24B', desc: 'AssayComplete Cell Plating 24 Reagent', specs: '500 mL' },
    { usage: '细胞铺板Cell Plating', cat: '93-0563R25A', desc: 'AssayComplete Cell Plating 25 Reagent', specs: '100 mL' },
    { usage: '细胞铺板Cell Plating', cat: '93-0563R25B', desc: 'AssayComplete Cell Plating 25 Reagent', specs: '500 mL' },
    { usage: '细胞铺板Cell Plating', cat: '93-0563R26A', desc: 'AssayComplete Cell Plating 26 Reagent', specs: '100 mL' },
    { usage: '细胞铺板Cell Plating', cat: '93-0563R26B', desc: 'AssayComplete Cell Plating 26 Reagent', specs: '500 mL' },
    { usage: '细胞铺板Cell Plating', cat: '93-0563R27A', desc: 'AssayComplete Cell Plating 27 Reagent', specs: '100 mL' },
    { usage: '细胞铺板Cell Plating', cat: '93-0563R27B', desc: 'AssayComplete Cell Plating 27 Reagent', specs: '500 mL' },
    { usage: '细胞铺板Cell Plating', cat: '93-0563R28A', desc: 'AssayComplete Cell Plating 28 Reagent', specs: '100 mL' },
    { usage: '细胞铺板Cell Plating', cat: '93-0563R28B', desc: 'AssayComplete Cell Plating 28 Reagent', specs: '500 mL' },
    { usage: '细胞铺板Cell Plating', cat: '93-0563R29A', desc: 'AssayComplete Cell Plating 29 Reagent', specs: '100 mL' },
    { usage: '细胞铺板Cell Plating', cat: '93-0563R29B', desc: 'AssayComplete Cell Plating 29 Reagent', specs: '500 mL' },
    { usage: '细胞铺板Cell Plating', cat: '93-0563R2A', desc: 'AssayComplete Cell Plating 2 Reagent', specs: '100 mL' },
    { usage: '细胞铺板Cell Plating', cat: '93-0563R2B', desc: 'AssayComplete Cell Plating 2 Reagent', specs: '500 mL' },
    { usage: '细胞铺板Cell Plating', cat: '93-0563R30A', desc: 'AssayComplete Cell Plating 30 Reagent', specs: '100 mL' },
    { usage: '细胞铺板Cell Plating', cat: '93-0563R30B', desc: 'AssayComplete Cell Plating 30 Reagent', specs: '500 mL' },
    { usage: '细胞铺板Cell Plating', cat: '93-0563R32A', desc: 'AssayComplete Cell Plating 32 Reagent', specs: '100 mL' },
    { usage: '细胞铺板Cell Plating', cat: '93-0563R32B', desc: 'AssayComplete Cell Plating 32 Reagent', specs: '500 mL' },
    { usage: '细胞铺板Cell Plating', cat: '93-0563R36A', desc: 'AssayComplete Cell Plating 36 Reagent', specs: '100 mL' },
    { usage: '细胞铺板Cell Plating', cat: '93-0563R36B', desc: 'AssayComplete Cell Plating 36 Reagent', specs: '500 mL' },
    { usage: '细胞铺板Cell Plating', cat: '93-0563R38A', desc: 'AssayComplete Cell Plating 38 Reagent', specs: '100 mL' },
    { usage: '细胞铺板Cell Plating', cat: '93-0563R38B', desc: 'AssayComplete Cell Plating 38 Reagent', specs: '500 mL' },
    { usage: '细胞铺板Cell Plating', cat: '93-0563R39A', desc: 'AssayComplete Cell Plating 39 Reagent', specs: '100 mL' },
    { usage: '细胞铺板Cell Plating', cat: '93-0563R39B', desc: 'AssayComplete Cell Plating 39 Reagent', specs: '500 mL' },
    { usage: '细胞铺板Cell Plating', cat: '93-0563R3A', desc: 'AssayComplete Cell Plating 3 Reagent', specs: '100 mL' },
    { usage: '细胞铺板Cell Plating', cat: '93-0563R3B', desc: 'AssayComplete Cell Plating 3 Reagent', specs: '500 mL' },
    { usage: '细胞铺板Cell Plating', cat: '93-0563R43A', desc: 'AssayComplete Cell Plating 43 Reagent', specs: '100 mL' },
    { usage: '细胞铺板Cell Plating', cat: '93-0563R4A', desc: 'AssayComplete Cell Plating 4 Reagent', specs: '100 mL' },
    { usage: '细胞铺板Cell Plating', cat: '93-0563R4B', desc: 'AssayComplete Cell Plating 4 Reagent', specs: '500 mL' },
    { usage: '细胞铺板Cell Plating', cat: '93-0563R5A', desc: 'AssayComplete Cell Plating 5 Reagent', specs: '100 mL' },
    { usage: '细胞铺板Cell Plating', cat: '93-0563R5B', desc: 'AssayComplete Cell Plating 5 Reagent', specs: '500 mL' },
    { usage: '细胞铺板Cell Plating', cat: '93-0563R6A', desc: 'AssayComplete Cell Plating 6 Reagent', specs: '100 mL' },
    { usage: '细胞铺板Cell Plating', cat: '93-0563R6B', desc: 'AssayComplete Cell Plating 6 Reagent', specs: '500 mL' },
    { usage: '细胞铺板Cell Plating', cat: '93-0563R7A', desc: 'AssayComplete Cell Plating 7 Reagent', specs: '100 mL' },
    { usage: '细胞铺板Cell Plating', cat: '93-0563R7B', desc: 'AssayComplete Cell Plating 7 Reagent', specs: '500 mL' },
    { usage: '细胞铺板Cell Plating', cat: '93-0563R9A', desc: 'AssayComplete Cell Plating 9 Reagent', specs: '100 mL' },
    { usage: '细胞铺板Cell Plating', cat: '93-0563R9B', desc: 'AssayComplete Cell Plating 9 Reagent', specs: '500 mL' },
  ];

  // Page 2 & 3: Starter Packs
  const starterPacks = [
    { cat: '493-1133C3', usage: 'Checkpoint Clustering', desc: 'PathHunter U2OS FcyRIIb Clustering Cell Line Starter Pack', specs: 'Pack' },
    { cat: '493-1138C3', usage: 'Checkpoint Clustering', desc: 'PathHunter U2OS FcyR1a Clustering Cell Line Starter Pack', specs: 'Pack' },
    { cat: '493-1139C3', usage: 'Checkpoint Clustering', desc: 'PathHunter U2OS mFCGR2B Clustering Cell Line Starter Pack', specs: 'Pack' },
    { cat: '493-1140C3', usage: 'Checkpoint Clustering', desc: 'PathHunter U2OS FcyRIIa Clustering Cell Line Starter Pack', specs: 'Pack' },
    { cat: '493-1184C3', usage: 'Checkpoint Clustering', desc: 'Pathhunter® FcgRIIIa Clustering Cell Line (U2OS) Starter Pack', specs: 'Pack' },
    { cat: '493-1137C3', usage: 'Checkpoint Ligand', desc: 'PathHunter U2OS CD200 Ligand Cell Line Starter Pack', specs: 'Pack' },
    { cat: '493-1149C19', usage: 'Checkpoint Ligand', desc: 'PathHunter Jurkat CD47-Presenting Cell Line Starter Pack', specs: 'Pack' },
    { cat: '493-1159C3', usage: 'Checkpoint Ligand', desc: 'PathHunter U2OS mPD-L1 Ligand Cell Line Starter Pack', specs: 'Pack' },
    { cat: '493-1162C3', usage: 'Checkpoint Ligand', desc: 'PathHunter® U2OS mCD80 Ligand Cell Line Starter Pack', specs: 'Pack' },
    { cat: '493-1066C3', usage: 'Checkpoint Ligand', desc: 'PathHunter U2OS PD-L1 Ligand Cell Line Starter Pack', specs: 'Pack' },
    { cat: '493-1076C3', usage: 'Checkpoint Ligand', desc: 'PathHunter U2OS PD-L2 Ligand Cell Line Starter Pack', specs: 'Pack' },
    { cat: '493-1093C3', usage: 'Checkpoint Ligand', desc: 'PathHunter U2OS CD86 Ligand Cell Line Starter Pack', specs: 'Pack' },
  ];

  // Control Ligands - Complete list from ligand.xlsx
  const controlLigands = [
    { usage: 'Control Ligands', cat: '90-0099', desc: 'ATP Gold', specs: '7 mg' },
    { usage: 'Control Ligands', cat: '92-0005', desc: 'Forskolin', specs: '2 x 0.25 mg' },
    { usage: 'Control Ligands', cat: '92-0007', desc: 'Ultrapure IBMX', specs: '55.55 mg' },
    { usage: 'Control Ligands', cat: '92-1001', desc: 'Recombinant Human CCL2', specs: '5 µg' },
    { usage: 'Control Ligands', cat: '92-1009', desc: 'Recombinant Human CXCL8', specs: '5 µg' },
    { usage: 'Control Ligands', cat: '92-1010', desc: 'Recombinant Human CXCL11', specs: '5 µg' },
    { usage: 'Control Ligands', cat: '92-1011', desc: 'Recombinant Human CXCL12', specs: '5 µg' },
    { usage: 'Control Ligands', cat: '92-1012', desc: 'Recombinant Human CCL5', specs: '5 µg' },
    { usage: 'Control Ligands', cat: '92-1013', desc: 'Recombinant Human CCL3', specs: '5 µg' },
    { usage: 'Control Ligands', cat: '92-1014', desc: 'Recombinant Human CCL4', specs: '5 µg' },
    { usage: 'Control Ligands', cat: '92-1015', desc: 'Recombinant Human CCL7', specs: '5 µg' },
    { usage: 'Control Ligands', cat: '92-1016', desc: 'Recombinant Human CCL8', specs: '5 µg' },
    { usage: 'Control Ligands', cat: '92-1017', desc: 'Recombinant Human CCL11', specs: '5 µg' },
    { usage: 'Control Ligands', cat: '92-1018', desc: 'Recombinant Human CCL13', specs: '5 µg' },
    { usage: 'Control Ligands', cat: '92-1019', desc: 'Recombinant Human CCL19', specs: '5 µg' },
    { usage: 'Control Ligands', cat: '92-1020', desc: 'Recombinant Human CCL20', specs: '5 µg' },
    { usage: 'Control Ligands', cat: '92-1021', desc: 'Recombinant Human CCL21', specs: '5 µg' },
    { usage: 'Control Ligands', cat: '92-1022', desc: 'Recombinant Human CCL22', specs: '5 µg' },
    { usage: 'Control Ligands', cat: '92-1023', desc: 'Recombinant Human CCL24', specs: '5 µg' },
    { usage: 'Control Ligands', cat: '92-1024', desc: 'Recombinant Human CCL25', specs: '5 µg' },
    { usage: 'Control Ligands', cat: '92-1025', desc: 'Recombinant Human CCL26', specs: '5 µg' },
    { usage: 'Control Ligands', cat: '92-1026', desc: 'Recombinant Human CCL27', specs: '5 µg' },
    { usage: 'Control Ligands', cat: '92-1027', desc: 'Recombinant Human CCL28', specs: '5 µg' },
    { usage: 'Control Ligands', cat: '92-1028', desc: 'Recombinant Human CXCL1', specs: '5 µg' },
    { usage: 'Control Ligands', cat: '92-1029', desc: 'Recombinant Human CXCL2', specs: '5 µg' },
    { usage: 'Control Ligands', cat: '92-1030', desc: 'Recombinant Human CXCL3', specs: '5 µg' },
    { usage: 'Control Ligands', cat: '92-1031', desc: 'Recombinant Human CXCL5', specs: '5 µg' },
    { usage: 'Control Ligands', cat: '92-1032', desc: 'Recombinant Human CXCL6', specs: '5 µg' },
    { usage: 'Control Ligands', cat: '92-1033', desc: 'Recombinant Human CXCL9', specs: '5 µg' },
    { usage: 'Control Ligands', cat: '92-1034', desc: 'Recombinant Human CXCL10', specs: '5 µg' },
    { usage: 'Control Ligands', cat: '92-1035', desc: 'Recombinant Human CXCL13', specs: '5 µg' },
    { usage: 'Control Ligands', cat: '92-1036', desc: 'Recombinant Human CXCL14', specs: '5 µg' },
    { usage: 'Control Ligands', cat: '92-1037', desc: 'Recombinant Human CXCL16', specs: '5 µg' },
    { usage: 'Control Ligands', cat: '92-1038', desc: 'Recombinant Human CX3CL1', specs: '5 µg' },
    { usage: 'Control Ligands', cat: '92-1039', desc: 'Recombinant Human XCL1', specs: '5 µg' },
    { usage: 'Control Ligands', cat: '92-1040', desc: 'Recombinant Human XCL2', specs: '5 µg' },
    { usage: 'Control Ligands', cat: '92-1041', desc: 'Recombinant Human CCL1', specs: '5 µg' },
    { usage: 'Control Ligands', cat: '92-1042', desc: 'Recombinant Human CCL14', specs: '5 µg' },
    { usage: 'Control Ligands', cat: '92-1043', desc: 'Recombinant Human CCL15', specs: '5 µg' },
    { usage: 'Control Ligands', cat: '92-1044', desc: 'Recombinant Human CCL16', specs: '5 µg' },
    { usage: 'Control Ligands', cat: '92-1045', desc: 'Recombinant Human CCL17', specs: '5 µg' },
    { usage: 'Control Ligands', cat: '92-1046', desc: 'Recombinant Human CCL18', specs: '5 µg' },
    { usage: 'Control Ligands', cat: '92-1047', desc: 'Recombinant Human CCL23', specs: '5 µg' },
    { usage: 'Control Ligands', cat: '92-1048', desc: 'Recombinant Human CXCL4', specs: '5 µg' },
    { usage: 'Control Ligands', cat: '92-1049', desc: 'Recombinant Human CXCL7', specs: '5 µg' },
    { usage: 'Control Ligands', cat: '92-1050', desc: 'Recombinant Human CXCL17', specs: '5 µg' },
    { usage: 'Control Ligands', cat: '92-1051', desc: 'Recombinant Human PPBP', specs: '5 µg' },
  ];

  // Page 5: Others
  const otherItems = [
    { usage: 'Plates', cat: '92-0013', desc: '384-well Clear bottom TC Treated, Sterile WCB, FB w/ LID', specs: '10 plates/pk' },
    { usage: 'Plates', cat: '92-0015', desc: '384-well White bottom TC Treated, Sterile w/ LID', specs: '10 plates/pk' },
    { usage: 'Plates', cat: '92-0014', desc: '96-well Clear bottom TC Treated, Sterile WCB, FB w/ LID', specs: '10 plates/pk' },
    { usage: 'Plates', cat: '92-0027', desc: '96-well White bottom TC Treated, Sterile w/LID', specs: '10 plates/pk' },
    { usage: 'PCR Plates', cat: '92-0011', desc: 'Green V-Bottom PP Ligand Dilution Plates', specs: '10 plates/pk' },
    { usage: 'PCR Plates', cat: '92-0031', desc: '96-well Black Low Profile, Skirted PCR Plates', specs: '10 plates/pk' },
    { usage: '抗生素', cat: '92-0028', desc: 'AssayComplete Puromycin', specs: '1 mL' },
    { usage: '抗生素', cat: '92-0029', desc: 'AssayComplete Hygromycin B', specs: '20 mL' },
    { usage: '抗生素', cat: '92-0030', desc: 'AssayComplete G418', specs: '20 mL' },
    { usage: '抗体', cat: '93-0246', desc: 'PathHunter Anti-EA Antibody', specs: '50 μg' },
    { usage: '抗体', cat: '93-0246L', desc: 'PathHunter Anti-EA Antibody', specs: '100 µg' },
    { usage: '抗体', cat: '92-0010', desc: 'PathHunter Anti-PL/PK Antibody', specs: '50 μg' },
    { usage: 'Dilution buffer', cat: '92-0023L', desc: 'AssayComplete Protein Dilution Buffer', specs: '2 x 250 mL' },
    { usage: 'Dilution buffer', cat: '92-0023M', desc: 'AssayComplete Protein Dilution Buffer', specs: '2 x 50 mL' },
  ];

  const ProductTable = ({ data, title, showCategory = true }: { data: any[], title: string, showCategory?: boolean }) => (
    <div className="flex justify-start mb-12">
      <div className="inline-block max-w-full bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden w-fit">
        <div className="bg-[#4B827E] px-6 py-4">
          <h3 className="text-xl font-bold text-white uppercase tracking-wider whitespace-nowrap">{title}</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="divide-y divide-slate-200">
            <thead className="bg-slate-50 sticky top-0 z-10">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-bold text-slate-500 uppercase tracking-wider bg-slate-50 border-r border-slate-200 whitespace-nowrap">货号</th>
                {showCategory && <th className="px-6 py-3 text-left text-xs font-bold text-slate-500 uppercase tracking-wider bg-slate-50 border-r border-slate-200 whitespace-nowrap">分类</th>}
                <th className="px-6 py-3 text-left text-xs font-bold text-slate-500 uppercase tracking-wider bg-slate-50 border-r border-slate-200 whitespace-nowrap">描述</th>
                <th className="px-6 py-3 text-left text-xs font-bold text-slate-500 uppercase tracking-wider bg-slate-50 whitespace-nowrap">规格</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-slate-100">
              {data.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-mono font-bold text-[#1C2C5E] border-r border-slate-50">{row.cat}</td>
                  {showCategory && <td className="px-6 py-4 whitespace-nowrap text-xs text-slate-600 font-medium border-r border-slate-50">{row.usage}</td>}
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600 border-r border-slate-50">{row.desc}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">{row.specs}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-white">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <h1 className="text-4xl font-extrabold text-[#1C2C5E] mb-8">试剂耗材 / Reagents & Consumables</h1>
            <div className="h-1 w-20 bg-[#4B827E] mb-8"></div>
            <div className="space-y-6 text-slate-600 leading-relaxed">
              <p>
                由 Eurofins DiscoverX 开发的 AssayComplete 细胞培养试剂盒与相关试剂，专用于细胞培养准备、细胞系维持及细胞功能检测实验。产品经过精心配方设计，确保理想的细胞形态、良好的细胞活性以及最大化的检测性能，适用于从早期筛选到后期药物研发的多样化应用需求。
              </p>
              <p>
                AssayComplete 试剂可单独购买，也可整合于细胞系检测套装、assay-ready eXpress 或生物检测格式套装中。
              </p>
              <p>
                所有产品均与 Eurofins DiscoverX 工程化细胞系进行严格优化与功能验证，以确保实验数据的准确性与可重复性。这些试剂亦被 Eurofins DiscoverX 筛选服务部门日常使用，用于生成数百万数据点。
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#4B827E]/10 flex items-center justify-center text-[#4B827E] flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#1C2C5E] mb-2">高性能</h3>
                  <p className="text-slate-600 leading-relaxed text-sm">优化配方确保理想细胞形态、良好活性与最佳检测表现</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#4B827E]/10 flex items-center justify-center text-[#4B827E] flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#1C2C5E] mb-2">结果一致</h3>
                  <p className="text-slate-600 leading-relaxed text-sm">针对每种检测体系优化，确保准确且可重复的数据</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#4B827E]/10 flex items-center justify-center text-[#4B827E] flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#1C2C5E] mb-2">可靠性强</h3>
                  <p className="text-slate-600 leading-relaxed text-sm">高发光信号、低背景、自适细胞贴壁性能及降低孔间串扰的高质量检测板材</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#4B827E]/10 flex items-center justify-center text-[#4B827E] flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#1C2C5E] mb-2">即刻开展实验</h3>
                  <p className="text-slate-600 leading-relaxed text-sm">避免细胞检测体系优化、试剂规划、多来源试剂筛选与验证等耗时步骤，显著缩短 assay development 周期</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1C2C5E] mb-12 text-center">产品列表</h2>
          <div className="space-y-4">
            <ProductTable title="细胞培养及处理试剂" data={cellCultureReagents} />
            <ProductTable title="启动包 (Starter Packs)" data={starterPacks} />
            <ProductTable title="对照配体 (Control Ligands)" data={controlLigands} showCategory={false} />
            <ProductTable title="其他耗材、抗体及缓冲液 (Others)" data={otherItems} />
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-xl p-8 border border-slate-200 shadow-sm">
          <h4 className="text-[#1C2C5E] font-bold text-lg mb-4">技术服务支持</h4>
          <p className="text-sm text-slate-600 leading-relaxed">
            以上列表包含 Eurofins DiscoverX 的核心试剂产品系列。所有试剂均经过严格的批次验证，确保与我们的 PathHunter 和 HitHunter 技术平台完全兼容。如果您需要大包装报价或定制规格，请通过联系我们页面与销售团队沟通。
          </p>
        </div>
      </section>
    </div>
  );
};

export default ReagentsDetail;
