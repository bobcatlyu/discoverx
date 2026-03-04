
import React from 'react';

const EnzymeDetail: React.FC = () => {
  // 2. 重组磷酸酶产品列表
  const phosphataseData = [
    { name: 'CD45', col2: 'PP1α', col3: 'RPTPμ' },
    { name: 'DUSP22', col2: 'PP5', col3: 'SHP-1' },
    { name: 'HePTP', col2: 'PTP-1B', col3: 'SHP-2' },
    { name: 'Histone', col2: 'PTPMEG-1', col3: 'TCPTP' },
    { name: 'Lambda PP', col2: 'PTPMEG-2', col3: 'TMDP' },
    { name: 'LMPTP-A', col2: 'PTPN22', col3: 'VHR' },
    { name: 'LMPTP-B', col2: 'PTPβ', col3: 'YopH' },
    { name: 'MKP6', col2: '', col3: '' },
  ];

  // 3. DNA解旋酶产品列表
  const helicaseData = [
    { name: 'BLM', col2: 'DHX9', col3: 'RECQ1' },
    { name: 'DBY', col2: 'FANCJ', col3: 'RECQ4' },
    { name: 'DDX3X', col2: 'LGP2', col3: 'RECQ5' },
    { name: 'DDX43', col2: 'MDA5', col3: 'RIG-I' },
    { name: 'DDX49', col2: 'POLQ', col3: 'WRN' },
  ];

  // 4. 表观遗传蛋白产品列表
  const epigeneticData = [
    { name: 'BAZ2A', col2: 'JMJD2A (KDM4A)', col3: 'SETD2' },
    { name: 'BRD2', col2: 'JMJD2B', col3: 'SETD7' },
    { name: 'BRD3', col2: 'JMJD2C', col3: 'SETD8' },
    { name: 'BRD4', col2: 'JMJD2D', col3: 'Sirtuin 1' },
    { name: 'BRDT', col2: 'JMJD2E', col3: 'Sirtuin 2 (SIRT2)' },
    { name: 'DOT1L', col2: 'JMJD3', col3: 'SMARCA4' },
    { name: 'EHMT1', col2: 'KAT2A (GCN5L2)', col3: 'SUV39H2' },
    { name: 'EP300', col2: 'NSD1', col3: 'SUV4-20H2 (KMT5C)' },
    { name: 'G9a (EHMT2)', col2: 'PHF8', col3: 'TAF1(L2)' },
    { name: 'HAT1', col2: 'PRMT1', col3: 'WHSC1 (NSD2, MMSET)' },
    { name: '', col2: 'PRMT3', col3: '' },
  ];

  // 5. 激酶活性检测试剂盒产品列表
  const kinaseKitData = [
    { target: 'Any Kinase, ATPase, GTPase or UTPase', catalog: '90-0083', description: 'ADP Hunter™ Plus' },
    { target: '', catalog: '90-0071', description: 'ADP Quest™' },
  ];

  // 6. 预装激酶、ATP、试剂的激酶检测试剂盒套装产品列表
  const preloadedKitData = [
    { name: 'AKT1/PKBα', col2: 'Hck', col3: 'PI3-Kinase (p110α(E542K)/p85α) human' },
    { name: 'AMPK (α1, β1, γ1)', col2: 'HIPK4', col3: 'PI3-Kinase (p110α(E542K)/p85α) Mouse' },
    { name: 'BTK', col2: 'ICK', col3: 'PI3-Kinase (p110α (H1047R)/p85α)' },
    { name: 'Casein Kinase 1γ1', col2: 'IRAK1', col3: 'PI3-Kinase (p110α/p85α)' },
    { name: 'Casein Kinase 1γ2', col2: 'IRAK4', col3: 'PI4KIIIα' },
    { name: 'Casein Kinase 1γ3', col2: 'JAK1', col3: 'PIM2' },
    { name: 'CDK15', col2: 'LOK', col3: 'PIM3' },
    { name: 'CDK16', col2: 'LRRK2', col3: 'PKA' },
    { name: 'CDK17', col2: 'LTK', col3: 'PKBγ' },
    { name: 'Cdk2/Cyclin E', col2: 'MAP3K19', col3: 'PKBβ' },
    { name: 'CDKL5', col2: 'MAP4K3', col3: 'Rse' },
    { name: 'CK1 (α, ε, δ)', col2: 'MAP4K4', col3: 'SGK1' },
    { name: 'c-KIT', col2: 'MSK1', col3: 'SLK' },
    { name: 'COT1', col2: 'MSK2', col3: 'Src' },
    { name: 'CSNK1A1L', col2: 'MST4', col3: 'SRMS' },
    { name: 'DYRK1A', col2: 'MYO3A', col3: 'STK25' },
    { name: 'DYRK1B', col2: 'MYO3B', col3: 'Syk' },
    { name: 'DYRK3', col2: 'NEK1', col3: 'TBK1' },
    { name: 'EphB1', col2: 'NEK5', col3: 'TNIK' },
    { name: 'Fyn', col2: 'Txk', col3: 'TrkC' },
  ];

  // 完整产品列表 - 共595个产品（仅用于重组激酶计数）
  const productData = [
    { category: '重组激酶', name: 'AAK1', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'Abl', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'ACK1', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'ACTR2', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'ActRIIB', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'Akt1/PKBα', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'Akt2/PKBβ', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'Akt3/PKBγ', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'ALK', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'ALK1', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'ALK2', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'ALK4', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'ALK6', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'AMPK (α1, β1, γ1)', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'AMPK (α2, β1, γ1)', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'A-Raf', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'Arg', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'NuaK1 (ARK5)', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'Ask1', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'ATM', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'ATR/ATRIP', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'Aurora-A', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'Aurora-B', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'Aurora C', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'Axl', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'BIKe', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'Blk', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'BMPR2', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'Bmx', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'B-Raf', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'BRK', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'BrSK1', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'BrSK2', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'BTK', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'CaM Kinase I γ', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'CaMKI', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'CaM Kinase IIa', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'CaMKIIβ', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'CaMKIIγ', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'CaMKIIδ', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'CaMKIV', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'CaM Kinase Iβ', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'CaMKIδ', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'CaMKK1', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'CaMKK2', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'CK1γ1', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'CK1γ2', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'CK1γ3', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'CK1γδ', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'CK2', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'CK2α', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'CK2α2', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'Cdc7/cyclin B1', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'CDK1/cyclinB', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'CDK12/cyclin K', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'CDK13/cyclin K', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'CDK14/cyclin Y', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'CDK16/cyclin Y', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'CDK17/cyclin Y', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'CDK18/cyclin Y', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'CDK2/cyclinA', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'CDK2/cyclinE', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'CDK3/cyclinE', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'CDK4/cyclin D3', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'CDK5/p25', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'CDK5/p35', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'CDK6/cyclinD3', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'CDK7/cyclinH/MAT1', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'CDK9/cyclin T1', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'CDKL1', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'CDKL2', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'CDKL3', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'CDKL4', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'CDKL5', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'ChaK1', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'CHK1', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'CHK2', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'CK1a', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'CK1d', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'CK1e', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'CK1g1', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'CK1g2', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'CK1g3', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'c-Kit', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'CLIK1', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'CLK1', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'CLK2', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'CLK3', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'CLK4', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'COT1', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'CRIK', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'CSK', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'CSNK1A1L', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'DAPK1', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'DAPK2', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'DCAMKL1', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'DCAMKL2', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'DCAMKL3', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'DDR1', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'DDR2', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'DMPK', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'DNA-PK', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'DRAK1', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'DRAK2', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'DYRK1A', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'DYRK1B', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'DYRK2', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'DYRK3', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'eEF-2K', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'EGFR', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'EphA1', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'EphA2', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'EphA3', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'EphA4', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'EphA5', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'EphA6', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'EphA7', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'EphA8', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'EphB1', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'EphB2', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'EphB3', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'EphB4', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'ErbB2', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'ErbB4', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'FAK', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'Fer', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'Fes/Fps', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'FGFR1', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'FGFR2', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'FGFR3', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'FGFR4', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'Fgr', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'Flt1', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'Flt3', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'Flt4', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'Fms', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'Fyn', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'GAK', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'GCK', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'GCN2', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'GRK1', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'RK2', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'GRK3', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'GRK4', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'GRK5', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'GRK6', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'GRK7', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'GSK3α', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'GSK3β', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'haspin', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'Hck', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'HIPK1', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'HIPK2', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'HIPK3', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'HIPK4', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'HPK1', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'HRI', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'ICK', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'IGF-1R', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'IKKα', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'IKKβ', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'IKKe', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'IR', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'IRAK1', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'IRAK4', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'IRE1', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'IRE2', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'IRR', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'Itk', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'JAK1', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'JAK2', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'JAK3', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'JNK1α1/SAPK1c', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'JNK2α2/SAPK1a', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'JNK3/SAPK1b', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'KDR', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'LATS1', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'LATS2', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'Lck', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'LIMK1', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'LIMK2', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'LKB1', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'LOK', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'LRRK2', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'LTK', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'Lyn', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'MAK', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'MAPK1', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'MAPK2', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'MAP3K19', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'MAP4K3', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'MAP4K5', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'MAPK4', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'MAPKAP-K2', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'MAPKAP-K3', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'MARK1', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'MARK3', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'MARK4', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'MATK', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'MEK1', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'MEK2', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'MEKK2', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'MEKK3', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'MELK', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'Mer', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'Met (D1246H)', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'Met', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'MINK', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'MKK3', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'MKK4', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'MKK6', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'MLCK', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'MLK1', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'MLK2', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'MLK3', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'MLK4', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'Mnk2', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'MOK', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'MRCKα', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'MRCKβ', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'MRCKγ', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'MSK1', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'MSK2', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'MSSK1', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'MST1', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'MST2', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'MST3', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'MST4', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'mTOR (FRAP1)', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'mTOR ', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'MuSK', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'MYLK2', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'MYO3A', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'MYO3B', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'NDR1', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'NDR2', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'NEK1', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'NEK11', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'NEK2', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'NEK3', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'NEK4', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'NEK5', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'NEK6', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'NEK7', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'NEK9', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'NIM1', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'NLK', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'NUAK2', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'OSR1', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'p38α/SAPK2a', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'p38β2/SAPK2b2', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'p38γ/SAPK3', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'p38δ/SAPK4', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'p53', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'p70S6K', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'PAK1', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'PAK2', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'PAK3', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'PAK4', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'PAK5', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'PAK6', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'PAR-1Ba', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'PASK', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'PDGFRα', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'PDGFRβ', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'PDHK2', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'PDHK4', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'PDK1', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'PEK', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'PhKγ1', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'PhKγ2', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'PI3Kα/p85α', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'PI3Kα/p65α', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'PI3Kβ/p85α', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'PI3Kβ/p85β', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'PI3Kδ/p85α', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'PI3Kγ', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'PI3K-C2α', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'PI3KC2β', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'PI3K-C2γ', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'PI4KIIIα', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'PIK3C3', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'Pim-1', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'Pim-2', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'Pim-3', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'PIP4K2α', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'PIP5K1α', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'PIP5K1γ', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'PKA', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'PKAcβ', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'PKCι', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'PKCζ', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'PKCη', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'PKCθ', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'PKCα', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'PKCβI', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'PKCβII', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'PKCγ', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'PKCδ', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'PKCε', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'PKCµ', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'PKD2', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'PKD3', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'PKG1α', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'PKG1β', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'PKR', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'Plk1', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'PLK2', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'PLK3', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'Plk4', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'PRAK', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'PRK1', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'PRK2', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'PRKG2', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'PrKX', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'PRP4', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'PTK5', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'Pyk2', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'c-RAF', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'Ret', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'RIPK1', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'RIPK2', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'RIPK5', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'ROKα/ROCK-II', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'ROKβ/ROCK-I', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'Ron', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'Ros', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'Rse', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'Rsk1', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'Rsk2', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'Rsk3', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'Rsk4', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'SAPK4', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'SBK1', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'SGK1', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'SGK2', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'SGK3', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'SIK', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'SIK2', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'SIK3', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'SLK', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'SNRK', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'Src', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'SRMS', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'SRPK1', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'SRPK2', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'STK16', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'STK25', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'STK32A', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'STK32B', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'STK32C', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'STK33', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'STK39', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'Syk', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'TAF1L', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'Tak1', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'TAO1', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'TAO2', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'TAO3', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'TBK1', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'Tec', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'TGFBR1', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'TGFBR2', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'Tie2', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'TLK1', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'TLK2', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'TNIK', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'TRB2', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'TrkA', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'TrkB', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'TrkC', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'TSSK1', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'TSSK2', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'TSSK3', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'TSSK4', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'TTBK1', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'TTBK2', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'TTK', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'Txk', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'TYK2', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'ULK1', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'ULK2', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'ULK3', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'VRK1', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'VRK2', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'WEE1', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'Wee1B', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'WNK1', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'WNK2', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'WNK3', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'WNK4', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'Yes', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'ZAK', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'ZAP-70', app: '重组激酶抑制剂筛选' },
    { category: '重组激酶', name: 'ZIPK', app: '重组激酶抑制剂筛选' },
    { category: '重组磷酸酶', name: 'CD45', app: '重组磷酸酶抑制剂筛选' },
    { category: '重组磷酸酶', name: 'DUSP22', app: '重组磷酸酶抑制剂筛选' },
    { category: '重组磷酸酶', name: 'HePTP', app: '重组磷酸酶抑制剂筛选' },
    { category: '重组磷酸酶', name: 'Histone', app: '重组磷酸酶抑制剂筛选' },
    { category: '重组磷酸酶', name: 'Lambda PP', app: '重组磷酸酶抑制剂筛选' },
    { category: '重组磷酸酶', name: 'LMPTP-A', app: '重组磷酸酶抑制剂筛选' },
    { category: '重组磷酸酶', name: 'LMPTP-B', app: '重组磷酸酶抑制剂筛选' },
    { category: '重组磷酸酶', name: 'MKP5', app: '重组磷酸酶抑制剂筛选' },
    { category: '重组磷酸酶', name: 'BLM', app: '重组磷酸酶抑制剂筛选' },
    { category: '重组磷酸酶', name: 'DBY', app: '重组磷酸酶抑制剂筛选' },
    { category: '重组磷酸酶', name: 'DDX3X', app: '重组磷酸酶抑制剂筛选' },
    { category: '重组磷酸酶', name: 'DDX43', app: '重组磷酸酶抑制剂筛选' },
    { category: '重组磷酸酶', name: 'DDX49', app: '重组磷酸酶抑制剂筛选' },
    { category: '重组磷酸酶', name: 'BAZ2A', app: '重组磷酸酶抑制剂筛选' },
    { category: '重组磷酸酶', name: 'BRD2', app: '重组磷酸酶抑制剂筛选' },
    { category: '重组磷酸酶', name: 'BRD3', app: '重组磷酸酶抑制剂筛选' },
    { category: '重组磷酸酶', name: 'BRD4', app: '重组磷酸酶抑制剂筛选' },
    { category: '重组磷酸酶', name: 'BRDT', app: '重组磷酸酶抑制剂筛选' },
    { category: '重组磷酸酶', name: 'DOT1L', app: '重组磷酸酶抑制剂筛选' },
    { category: '重组磷酸酶', name: 'EHMT1', app: '重组磷酸酶抑制剂筛选' },
    { category: '重组磷酸酶', name: 'EP300', app: '重组磷酸酶抑制剂筛选' },
    { category: '重组磷酸酶', name: 'G9a (EHMT2)', app: '重组磷酸酶抑制剂筛选' },
    { category: '重组磷酸酶', name: 'HAT1', app: '重组磷酸酶抑制剂筛选' },
    { category: '重组磷酸酶', name: 'Any Kinase, ATPase, GTPase or UTPase', app: '重组磷酸酶抑制剂筛选' },
    { category: '重组磷酸酶', name: 'AKT1/PKBa', app: '重组磷酸酶抑制剂筛选' },
    { category: '重组磷酸酶', name: 'AMPK (a1, β1, g1)', app: '重组磷酸酶抑制剂筛选' },
    { category: '重组磷酸酶', name: 'BTK', app: '重组磷酸酶抑制剂筛选' },
    { category: '重组磷酸酶', name: 'Casein Kinase 1g1', app: '重组磷酸酶抑制剂筛选' },
    { category: '重组磷酸酶', name: 'Casein Kinase 1g2', app: '重组磷酸酶抑制剂筛选' },
    { category: '重组磷酸酶', name: 'Casein Kinase 1g3', app: '重组磷酸酶抑制剂筛选' },
    { category: '重组磷酸酶', name: 'CDK15', app: '重组磷酸酶抑制剂筛选' },
    { category: '重组磷酸酶', name: 'CDK16', app: '重组磷酸酶抑制剂筛选' },
    { category: '重组磷酸酶', name: 'CDK17', app: '重组磷酸酶抑制剂筛选' },
    { category: '重组磷酸酶', name: 'Cdk2/Cyclin E', app: '重组磷酸酶抑制剂筛选' },
    { category: '重组磷酸酶', name: 'CDKL5', app: '重组磷酸酶抑制剂筛选' },
    { category: '重组磷酸酶', name: 'CK1 (a, e, d)', app: '重组磷酸酶抑制剂筛选' },
    { category: '重组磷酸酶', name: 'c-KIT', app: '重组磷酸酶抑制剂筛选' },
    { category: '重组磷酸酶', name: 'COT1', app: '重组磷酸酶抑制剂筛选' },
    { category: '重组磷酸酶', name: 'CSNK1A1L', app: '重组磷酸酶抑制剂筛选' },
    { category: '重组磷酸酶', name: 'DYRK1A', app: '重组磷酸酶抑制剂筛选' },
    { category: '重组磷酸酶', name: 'DYRK1B', app: '重组磷酸酶抑制剂筛选' },
    { category: '重组磷酸酶', name: 'DYRK3', app: '重组磷酸酶抑制剂筛选' },
    { category: '重组磷酸酶', name: 'EphB1', app: '重组磷酸酶抑制剂筛选' },
    { category: '重组磷酸酶', name: 'Fyn', app: '重组磷酸酶抑制剂筛选' },
    { category: '重组磷酸酶', name: 'PP1α', app: '重组磷酸酶抑制剂筛选' },
    { category: '重组磷酸酶', name: 'PP5', app: '重组磷酸酶抑制剂筛选' },
    { category: '重组磷酸酶', name: 'PTP-1B', app: '重组磷酸酶抑制剂筛选' },
    { category: '重组磷酸酶', name: 'PTPMEG-1', app: '重组磷酸酶抑制剂筛选' },
    { category: '重组磷酸酶', name: 'PTPMEG-2', app: '重组磷酸酶抑制剂筛选' },
    { category: '重组磷酸酶', name: 'PTPN22', app: '重组磷酸酶抑制剂筛选' },
    { category: '重组磷酸酶', name: 'PTPβ', app: '重组磷酸酶抑制剂筛选' },
    { category: '重组磷酸酶', name: 'DHX9', app: '重组磷酸酶抑制剂筛选' },
    { category: '重组磷酸酶', name: 'FANCJ', app: '重组磷酸酶抑制剂筛选' },
    { category: '重组磷酸酶', name: 'LGP2', app: '重组磷酸酶抑制剂筛选' },
    { category: '重组磷酸酶', name: 'MDA5', app: '重组磷酸酶抑制剂筛选' },
    { category: '重组磷酸酶', name: 'POLQ', app: '重组磷酸酶抑制剂筛选' },
    { category: '重组磷酸酶', name: 'JMJD2A (KDM4A)', app: '重组磷酸酶抑制剂筛选' },
    { category: '重组磷酸酶', name: 'JMJD2B', app: '重组磷酸酶抑制剂筛选' },
    { category: '重组磷酸酶', name: 'JMJD2C', app: '重组磷酸酶抑制剂筛选' },
    { category: '重组磷酸酶', name: 'JMJD2D', app: '重组磷酸酶抑制剂筛选' },
    { category: '重组磷酸酶', name: 'JMJD2E', app: '重组磷酸酶抑制剂筛选' },
    { category: '重组磷酸酶', name: 'JMJD3', app: '重组磷酸酶抑制剂筛选' },
    { category: '重组磷酸酶', name: 'KAT2A (GCN5L2)', app: '重组磷酸酶抑制剂筛选' },
    { category: '重组磷酸酶', name: 'NSD1', app: '重组磷酸酶抑制剂筛选' },
    { category: '重组磷酸酶', name: 'PHF8', app: '重组磷酸酶抑制剂筛选' },
    { category: '重组磷酸酶', name: 'PRMT1', app: '重组磷酸酶抑制剂筛选' },
    { category: '重组磷酸酶', name: 'PRMT3', app: '重组磷酸酶抑制剂筛选' },
    { category: '重组磷酸酶', name: '90-0083', app: '重组磷酸酶抑制剂筛选' },
    { category: '重组磷酸酶', name: '90-0071', app: '重组磷酸酶抑制剂筛选' },
    { category: '重组磷酸酶', name: 'Hck', app: '重组磷酸酶抑制剂筛选' },
    { category: '重组磷酸酶', name: 'HIPK4', app: '重组磷酸酶抑制剂筛选' },
    { category: '重组磷酸酶', name: 'ICK', app: '重组磷酸酶抑制剂筛选' },
    { category: '重组磷酸酶', name: 'IRAK1', app: '重组磷酸酶抑制剂筛选' },
    { category: '重组磷酸酶', name: 'IRAK4', app: '重组磷酸酶抑制剂筛选' },
    { category: '重组磷酸酶', name: 'JAK1', app: '重组磷酸酶抑制剂筛选' },
    { category: '重组磷酸酶', name: 'LOK', app: '重组磷酸酶抑制剂筛选' },
    { category: '重组磷酸酶', name: 'LRRK2', app: '重组磷酸酶抑制剂筛选' },
    { category: '重组磷酸酶', name: 'LTK', app: '重组磷酸酶抑制剂筛选' },
    { category: '重组磷酸酶', name: 'MAP3K19', app: '重组磷酸酶抑制剂筛选' },
    { category: '重组磷酸酶', name: 'MAP4K3 Kinase EAA Kit', app: '重组磷酸酶抑制剂筛选' },
    { category: '重组磷酸酶', name: 'MAP4K4 Kinase EAA Kit', app: '重组磷酸酶抑制剂筛选' },
    { category: '重组磷酸酶', name: 'MSK1 Kinase EAA Kit', app: '重组磷酸酶抑制剂筛选' },
    { category: '重组磷酸酶', name: 'MSK2 Kinase EAA Kit', app: '重组磷酸酶抑制剂筛选' },
    { category: '重组磷酸酶', name: 'MST4 Kinase EAA Kit', app: '重组磷酸酶抑制剂筛选' },
    { category: '重组磷酸酶', name: 'MYO3A', app: '重组磷酸酶抑制剂筛选' },
    { category: '重组磷酸酶', name: 'MYO3B', app: '重组磷酸酶抑制剂筛选' },
    { category: '重组磷酸酶', name: 'NEK1', app: '重组磷酸酶抑制剂筛选' },
    { category: '重组磷酸酶', name: 'NEK5', app: '重组磷酸酶抑制剂筛选' },
    { category: '重组磷酸酶', name: 'Txk', app: '重组磷酸酶抑制剂筛选' },
    { category: '重组磷酸酶', name: 'RPTPµ', app: '重组磷酸酶抑制剂筛选' },
    { category: '重组磷酸酶', name: 'SHP-1', app: '重组磷酸酶抑制剂筛选' },
    { category: '重组磷酸酶', name: 'SHP-2', app: '重组磷酸酶抑制剂筛选' },
    { category: '重组磷酸酶', name: 'TCPTP', app: '重组磷酸酶抑制剂筛选' },
    { category: '重组磷酸酶', name: 'TMDP', app: '重组磷酸酶抑制剂筛选' },
    { category: '重组磷酸酶', name: 'VHR', app: '重组磷酸酶抑制剂筛选' },
    { category: '重组磷酸酶', name: 'YopH', app: '重组磷酸酶抑制剂筛选' },
    { category: '重组磷酸酶', name: 'RECQ1', app: '重组磷酸酶抑制剂筛选' },
    { category: '重组磷酸酶', name: 'RECQ4', app: '重组磷酸酶抑制剂筛选' },
    { category: '重组磷酸酶', name: 'RECQ5', app: '重组磷酸酶抑制剂筛选' },
    { category: '重组磷酸酶', name: 'RIG-I', app: '重组磷酸酶抑制剂筛选' },
    { category: '重组磷酸酶', name: 'WRN', app: '重组磷酸酶抑制剂筛选' },
    { category: '重组磷酸酶', name: 'SETD2', app: '重组磷酸酶抑制剂筛选' },
    { category: '重组磷酸酶', name: 'SETD7', app: '重组磷酸酶抑制剂筛选' },
    { category: '重组磷酸酶', name: 'SETD8', app: '重组磷酸酶抑制剂筛选' },
    { category: '重组磷酸酶', name: 'Sirtuin 1', app: '重组磷酸酶抑制剂筛选' },
    { category: '重组磷酸酶', name: 'Sirtuin 2 (SIRT2)', app: '重组磷酸酶抑制剂筛选' },
    { category: '重组磷酸酶', name: 'SMARCA4', app: '重组磷酸酶抑制剂筛选' },
    { category: '重组磷酸酶', name: 'SUV39H2', app: '重组磷酸酶抑制剂筛选' },
    { category: '重组磷酸酶', name: 'SUV4-20H2 (KMT5C)', app: '重组磷酸酶抑制剂筛选' },
    { category: '重组磷酸酶', name: 'TAF1L(2)', app: '重组磷酸酶抑制剂筛选' },
    { category: '重组磷酸酶', name: 'WHSC1 (NSD2, MMSET)', app: '重组磷酸酶抑制剂筛选' },
    { category: '重组磷酸酶', name: 'ADP Hunter™ Plus', app: '重组磷酸酶抑制剂筛选' },
    { category: '重组磷酸酶', name: 'ADP Quest™', app: '重组磷酸酶抑制剂筛选' },
    { category: '重组磷酸酶', name: 'PI3-Kinase (p110α(E542K)/p85α) human', app: '重组磷酸酶抑制剂筛选' },
    { category: '重组磷酸酶', name: 'PI3-Kinase (p110α(E542K)/p85α) Mouse', app: '重组磷酸酶抑制剂筛选' },
    { category: '重组磷酸酶', name: 'PI3-Kinase (p110α(H1047R)/p85α)', app: '重组磷酸酶抑制剂筛选' },
    { category: '重组磷酸酶', name: 'PI3-Kinase (p110α/p85α)', app: '重组磷酸酶抑制剂筛选' },
    { category: '重组磷酸酶', name: 'PI4KIIIa', app: '重组磷酸酶抑制剂筛选' },
    { category: '重组磷酸酶', name: 'PIM2', app: '重组磷酸酶抑制剂筛选' },
    { category: '重组磷酸酶', name: 'PIM3', app: '重组磷酸酶抑制剂筛选' },
    { category: '重组磷酸酶', name: 'PKA', app: '重组磷酸酶抑制剂筛选' },
    { category: '重组磷酸酶', name: 'PKBg', app: '重组磷酸酶抑制剂筛选' },
    { category: '重组磷酸酶', name: 'PKBβ', app: '重组磷酸酶抑制剂筛选' },
    { category: '重组磷酸酶', name: 'Rse', app: '重组磷酸酶抑制剂筛选' },
    { category: '重组磷酸酶', name: 'SGK1', app: '重组磷酸酶抑制剂筛选' },
    { category: '重组磷酸酶', name: 'SLK', app: '重组磷酸酶抑制剂筛选' },
    { category: '重组磷酸酶', name: 'Src', app: '重组磷酸酶抑制剂筛选' },
    { category: '重组磷酸酶', name: 'SRMS', app: '重组磷酸酶抑制剂筛选' },
    { category: '重组磷酸酶', name: 'STK25', app: '重组磷酸酶抑制剂筛选' },
    { category: '重组磷酸酶', name: 'Syk', app: '重组磷酸酶抑制剂筛选' },
    { category: '重组磷酸酶', name: 'TBK1', app: '重组磷酸酶抑制剂筛选' },
    { category: '重组磷酸酶', name: 'TNIK', app: '重组磷酸酶抑制剂筛选' },
    { category: '重组磷酸酶', name: 'TrkC', app: '重组磷酸酶抑制剂筛选' },
    { category: 'DNA解旋酶', name: 'BLM', app: 'DNA解旋酶抑制剂筛选' },
    { category: 'DNA解旋酶', name: 'DHX9', app: 'DNA解旋酶抑制剂筛选' },
    { category: 'DNA解旋酶', name: 'RECQ1', app: 'DNA解旋酶抑制剂筛选' },
    { category: 'DNA解旋酶', name: 'DBY', app: 'DNA解旋酶抑制剂筛选' },
    { category: 'DNA解旋酶', name: 'FANCJ', app: 'DNA解旋酶抑制剂筛选' },
    { category: 'DNA解旋酶', name: 'RECQ4', app: 'DNA解旋酶抑制剂筛选' },
    { category: 'DNA解旋酶', name: 'DDX3X', app: 'DNA解旋酶抑制剂筛选' },
    { category: 'DNA解旋酶', name: 'LGP2', app: 'DNA解旋酶抑制剂筛选' },
    { category: 'DNA解旋酶', name: 'RECQ5', app: 'DNA解旋酶抑制剂筛选' },
    { category: 'DNA解旋酶', name: 'DDX43', app: 'DNA解旋酶抑制剂筛选' },
    { category: 'DNA解旋酶', name: 'MDA5', app: 'DNA解旋酶抑制剂筛选' },
    { category: 'DNA解旋酶', name: 'RIG-I', app: 'DNA解旋酶抑制剂筛选' },
    { category: 'DNA解旋酶', name: 'DDX49', app: 'DNA解旋酶抑制剂筛选' },
    { category: 'DNA解旋酶', name: 'POLQ', app: 'DNA解旋酶抑制剂筛选' },
    { category: 'DNA解旋酶', name: 'WRN', app: 'DNA解旋酶抑制剂筛选' },
    { category: '表观遗传蛋白', name: 'BAZ2A', app: '表观遗传蛋白抑制剂筛选' },
    { category: '表观遗传蛋白', name: 'JMJD2A (KDM4A)', app: '表观遗传蛋白抑制剂筛选' },
    { category: '表观遗传蛋白', name: 'SETD2', app: '表观遗传蛋白抑制剂筛选' },
    { category: '表观遗传蛋白', name: 'BRD2', app: '表观遗传蛋白抑制剂筛选' },
    { category: '表观遗传蛋白', name: 'JMJD2B', app: '表观遗传蛋白抑制剂筛选' },
    { category: '表观遗传蛋白', name: 'SETD7', app: '表观遗传蛋白抑制剂筛选' },
    { category: '表观遗传蛋白', name: 'BRD3', app: '表观遗传蛋白抑制剂筛选' },
    { category: '表观遗传蛋白', name: 'JMJD2C', app: '表观遗传蛋白抑制剂筛选' },
    { category: '表观遗传蛋白', name: 'SETD8', app: '表观遗传蛋白抑制剂筛选' },
    { category: '表观遗传蛋白', name: 'BRD4', app: '表观遗传蛋白抑制剂筛选' },
    { category: '表观遗传蛋白', name: 'JMJD2D', app: '表观遗传蛋白抑制剂筛选' },
    { category: '表观遗传蛋白', name: 'Sirtuin 1', app: '表观遗传蛋白抑制剂筛选' },
    { category: '表观遗传蛋白', name: 'BRDT', app: '表观遗传蛋白抑制剂筛选' },
    { category: '表观遗传蛋白', name: 'JMJD2E', app: '表观遗传蛋白抑制剂筛选' },
    { category: '表观遗传蛋白', name: 'Sirtuin 2 (SIRT2)', app: '表观遗传蛋白抑制剂筛选' },
    { category: '表观遗传蛋白', name: 'DOT1L', app: '表观遗传蛋白抑制剂筛选' },
    { category: '表观遗传蛋白', name: 'JMJD3', app: '表观遗传蛋白抑制剂筛选' },
    { category: '表观遗传蛋白', name: 'SMARCA4', app: '表观遗传蛋白抑制剂筛选' },
    { category: '表观遗传蛋白', name: 'EHMT1', app: '表观遗传蛋白抑制剂筛选' },
    { category: '表观遗传蛋白', name: 'KAT2A (GCN5L2)', app: '表观遗传蛋白抑制剂筛选' },
    { category: '表观遗传蛋白', name: 'SUV39H2', app: '表观遗传蛋白抑制剂筛选' },
    { category: '表观遗传蛋白', name: 'EP300', app: '表观遗传蛋白抑制剂筛选' },
    { category: '表观遗传蛋白', name: 'NSD1', app: '表观遗传蛋白抑制剂筛选' },
    { category: '表观遗传蛋白', name: 'SUV4-20H2 (KMT5C)', app: '表观遗传蛋白抑制剂筛选' },
    { category: '表观遗传蛋白', name: 'G9a (EHMT2)', app: '表观遗传蛋白抑制剂筛选' },
    { category: '表观遗传蛋白', name: 'PHF8', app: '表观遗传蛋白抑制剂筛选' },
    { category: '表观遗传蛋白', name: 'TAF1L(2)', app: '表观遗传蛋白抑制剂筛选' },
    { category: '表观遗传蛋白', name: 'HAT1', app: '表观遗传蛋白抑制剂筛选' },
    { category: '表观遗传蛋白', name: 'PRMT1', app: '表观遗传蛋白抑制剂筛选' },
    { category: '表观遗传蛋白', name: 'WHSC1 (NSD2, MMSET)', app: '表观遗传蛋白抑制剂筛选' },
    { category: '表观遗传蛋白', name: 'PRMT3', app: '表观遗传蛋白抑制剂筛选' },
    { category: '激酶检测试剂盒', name: 'Any Kinase, ATPase, GTPase or UTPase', app: '激酶检测试剂盒抑制剂筛选' },
    { category: '激酶检测试剂盒', name: 'AKT1/PKBa', app: '激酶检测试剂盒抑制剂筛选' },
    { category: '激酶检测试剂盒', name: 'AMPK (a1, β1, g1)', app: '激酶检测试剂盒抑制剂筛选' },
    { category: '激酶检测试剂盒', name: 'BTK', app: '激酶检测试剂盒抑制剂筛选' },
    { category: '激酶检测试剂盒', name: 'Casein Kinase 1g1', app: '激酶检测试剂盒抑制剂筛选' },
    { category: '激酶检测试剂盒', name: 'Casein Kinase 1g2', app: '激酶检测试剂盒抑制剂筛选' },
    { category: '激酶检测试剂盒', name: 'Casein Kinase 1g3', app: '激酶检测试剂盒抑制剂筛选' },
    { category: '激酶检测试剂盒', name: 'CDK15', app: '激酶检测试剂盒抑制剂筛选' },
    { category: '激酶检测试剂盒', name: 'CDK16', app: '激酶检测试剂盒抑制剂筛选' },
    { category: '激酶检测试剂盒', name: 'CDK17', app: '激酶检测试剂盒抑制剂筛选' },
    { category: '激酶检测试剂盒', name: 'Cdk2/Cyclin E', app: '激酶检测试剂盒抑制剂筛选' },
    { category: '激酶检测试剂盒', name: 'CDKL5', app: '激酶检测试剂盒抑制剂筛选' },
    { category: '激酶检测试剂盒', name: 'CK1 (a, e, d)', app: '激酶检测试剂盒抑制剂筛选' },
    { category: '激酶检测试剂盒', name: 'c-KIT', app: '激酶检测试剂盒抑制剂筛选' },
    { category: '激酶检测试剂盒', name: 'COT1', app: '激酶检测试剂盒抑制剂筛选' },
    { category: '激酶检测试剂盒', name: 'CSNK1A1L', app: '激酶检测试剂盒抑制剂筛选' },
    { category: '激酶检测试剂盒', name: 'DYRK1A', app: '激酶检测试剂盒抑制剂筛选' },
    { category: '激酶检测试剂盒', name: 'DYRK1B', app: '激酶检测试剂盒抑制剂筛选' },
    { category: '激酶检测试剂盒', name: 'DYRK3', app: '激酶检测试剂盒抑制剂筛选' },
    { category: '激酶检测试剂盒', name: 'EphB1', app: '激酶检测试剂盒抑制剂筛选' },
    { category: '激酶检测试剂盒', name: 'Fyn', app: '激酶检测试剂盒抑制剂筛选' },
  ];

  // 计算重组激酶数量
  const kinaseProducts = productData.filter(p => p.category === '重组激酶');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-16">
        <h1 className="text-4xl font-extrabold text-[#1C2C5E] mb-8">重组酶类 / Recombinant Enzymes</h1>

        <div className="space-y-6 text-slate-600 leading-relaxed mb-12 max-w-4xl">
          <p className="text-xl font-bold text-[#4B827E]">提供行业内规模最大的纯化重组蛋白产品组合，用于抑制剂筛选</p>
          <p>
            在药物研发过程中，重组蛋白是指在特定生产宿主中表达的外源蛋白，用于人类或动物疾病的治疗或预防研究。
          </p>
          <p>
            Eurofins DiscoverX® 是活性重组蛋白领域的领先供应商，产品覆盖多种蛋白类别，包括激酶、磷酸酶、解旋酶、泛素化相关酶、表观遗传蛋白等。
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>激酶</strong>是细胞信号传导中的关键酶，催化 ATP 上的磷酸基转移至底物分子；</li>
            <li><strong>磷酸酶</strong>则移除底物上的磷酸基，发挥调控作用。</li>
            <li><strong>表观遗传蛋白</strong>通过修饰 DNA 或其相关蛋白（如组蛋白）结构来调控基因表达。</li>
            <li><strong>解旋酶</strong>在 DNA 或 RNA 复制、修复及转录过程中负责解开双链结构，对维持基因组稳定性和调控转录过程至关重要。</li>
            <li>参与<strong>泛素化通路</strong>的蛋白在蛋白质降解、DNA 修复、基因表达及内吞等多种细胞过程中发挥关键作用。</li>
          </ul>
          <p>
            人类基因组中约含有 538 种激酶（eLife Sciences，2021），通常分为丝氨酸/苏氨酸激酶、酪氨酸激酶或脂质激酶。激酶的底物包括多种细胞内蛋白和分子，如其他激酶、转录因子、脂质及其他蛋白。底物的磷酸化与去磷酸化会改变其酶学活性，进而影响细胞分裂、蛋白质合成、转录调控和神经传导等多种生物学过程。激酶的激活性突变，或其上游调控失衡导致的功能获得或功能丧失，与多种疾病（包括癌症）的发生密切相关。
          </p>
          <p>
            Eurofins DiscoverX® 整合了原 Millipore（Upstate）的重组激酶产品组合，覆盖超过 70% 的人类活性激酶组（kinome）。产品线包括 440 余种活性、突变型及失活型重组激酶，提供多种包装规格（包括大包装），满足从单次实验到大规模高通量筛选（HTS）的扩展需求。
          </p>
          <p>
            借助这些高质量重组蛋白，您可以深入解析激酶和磷酸酶的生理功能，开展抑制剂筛选，或进行酶活性检测实验。您还可使用与 KinaseProfiler™、PhosphataseProfiler™ 和 EPIscan 服务相同的蛋白资源，这些服务在过去数十年中积累了数亿数据点，为产品质量与可靠性提供坚实保障。
          </p>
        </div>

        <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 mb-16">
          <h2 className="text-2xl font-bold text-[#1C2C5E] mb-8 flex items-center">
            <div className="w-2 h-8 bg-[#4B827E] mr-4 rounded-full"></div>
            产品亮点 / Product Highlights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-2">
              <div className="text-[#4B827E] font-bold flex items-center">
                <span className="mr-2">●</span> 全面产品组合
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">超过 520 种高质量活性、失活、未激活及突变型激酶、磷酸酶、表观遗传及泛素相关蛋白，包含多种独家酶类以及 PI3K 与 PIKK 家族成员（ATM、ATR、mTOR、DNA-PK）</p>
            </div>
            <div className="space-y-2">
              <div className="text-[#4B827E] font-bold flex items-center">
                <span className="mr-2">●</span> 最优表达系统
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">在最适合的表达系统（昆虫、哺乳动物或细菌）中生产酶蛋白，以确保正确的活性与抑制特性</p>
            </div>
            <div className="space-y-2">
              <div className="text-[#4B827E] font-bold flex items-center">
                <span className="mr-2">●</span> 高质量标准
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">严格的质量控制流程，确保高纯度、高比活性及批次间一致性</p>
            </div>
            <div className="space-y-2">
              <div className="text-[#4B827E] font-bold flex items-center">
                <span className="mr-2">●</span> 多规格选择
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">提供多种包装规格及大包装选项，支持从单次实验到完整 HTS 项目的灵活需求</p>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-12">
        <h2 className="text-3xl font-bold text-[#1C2C5E] mb-8">产品分类 / Product Categories</h2>

        {/* 1. 重组激酶 - 仅显示描述和下载链接 */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-[#1C2C5E] mb-6">1. 重组激酶 / Recombinant Kinases</h3>
          <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8">
            <p className="text-slate-600 leading-relaxed mb-6">
              我们提供超过 400 种高质量活性重组激酶产品，覆盖人类激酶组的主要家族。这些激酶经过严格的质量控制，适用于抑制剂筛选、酶活性检测等多种应用场景。
            </p>
            <div className="flex items-center space-x-4">
              <a
                href="/downloads/recombinant-kinases-list.pdf"
                className="inline-flex items-center px-6 py-3 bg-[#4B827E] text-white font-semibold rounded-lg hover:bg-[#3d6b68] transition-colors"
                download
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                下载完整重组激酶产品列表
              </a>
              <span className="text-sm text-slate-500">共 {kinaseProducts.length} 种产品</span>
            </div>
          </div>
        </div>

        {/* 2. 重组磷酸酶 */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-[#1C2C5E] mb-6">2. 重组磷酸酶 / Recombinant Phosphatases</h3>
          <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8">
            <div className="grid grid-cols-3 gap-x-12 gap-y-4">
              {phosphataseData.map((row, idx) => (
                <React.Fragment key={idx}>
                  {row.name && <div className="text-sm font-mono text-[#1C2C5E]">{row.name}</div>}
                  {row.col2 && <div className="text-sm font-mono text-[#1C2C5E]">{row.col2}</div>}
                  {row.col3 && <div className="text-sm font-mono text-[#1C2C5E]">{row.col3}</div>}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        {/* 3. DNA解旋酶 */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-[#1C2C5E] mb-6">3. DNA解旋酶 / DNA Helicases</h3>
          <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8">
            <div className="grid grid-cols-3 gap-x-12 gap-y-4">
              {helicaseData.map((row, idx) => (
                <React.Fragment key={idx}>
                  {row.name && <div className="text-sm font-mono text-[#1C2C5E]">{row.name}</div>}
                  {row.col2 && <div className="text-sm font-mono text-[#1C2C5E]">{row.col2}</div>}
                  {row.col3 && <div className="text-sm font-mono text-[#1C2C5E]">{row.col3}</div>}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        {/* 4. 表观遗传蛋白 */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-[#1C2C5E] mb-6">4. 表观遗传蛋白 / Epigenetic Proteins</h3>
          <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8">
            <div className="grid grid-cols-3 gap-x-12 gap-y-4">
              {epigeneticData.map((row, idx) => (
                <React.Fragment key={idx}>
                  {row.name && <div className="text-sm font-mono text-[#1C2C5E]">{row.name}</div>}
                  {row.col2 && <div className="text-sm font-mono text-[#1C2C5E]">{row.col2}</div>}
                  {row.col3 && <div className="text-sm font-mono text-[#1C2C5E]">{row.col3}</div>}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        {/* 5. 激酶活性检测试剂盒 */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-[#1C2C5E] mb-6">5. 激酶活性检测试剂盒 / Kinase Activity Assay Kits</h3>
          <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
            <table className="w-full">
              <thead className="bg-[#4B827E]">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-bold text-white">靶点</th>
                  <th className="px-6 py-3 text-left text-sm font-bold text-white">货号</th>
                  <th className="px-6 py-3 text-left text-sm font-bold text-white">描述</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {kinaseKitData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4 text-sm text-[#1C2C5E]">{row.target}</td>
                    <td className="px-6 py-4 text-sm font-mono text-[#1C2C5E]">{row.catalog}</td>
                    <td className="px-6 py-4 text-sm text-[#4B827E] font-medium">{row.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 6. 预装激酶、ATP、试剂的激酶检测试剂盒套装 */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-[#1C2C5E] mb-6">6. 预装激酶、ATP、试剂的激酶检测试剂盒套装 / Pre-loaded Kinase Assay Kit Sets</h3>
          <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8">
            <div className="grid grid-cols-3 gap-x-12 gap-y-4">
              {preloadedKitData.map((row, idx) => (
                <React.Fragment key={idx}>
                  {row.name && <div className="text-sm font-mono text-[#1C2C5E]">{row.name}</div>}
                  {row.col2 && <div className="text-sm font-mono text-[#1C2C5E]">{row.col2}</div>}
                  {row.col3 && <div className="text-sm font-mono text-[#1C2C5E]">{row.col3}</div>}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 bg-slate-100 rounded-xl p-8 border border-slate-200">
        <h4 className="text-[#1C2C5E] font-bold text-lg mb-4">技术服务支持</h4>
        <p className="text-sm text-slate-600 leading-relaxed">
          Eurofins DiscoverX 提供的重组蛋白产品均经过严格的功能验证。如果您在列表中未找到所需的特定激酶、突变体或表观遗传蛋白，或需要定制化的大包装供应，请随时联系我们的技术支持团队。
        </p>
      </div>
    </div>
  );
};

export default EnzymeDetail;
