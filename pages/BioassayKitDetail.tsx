
import React, { useState } from 'react';

const BioassayKitDetail: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // 4.1 已验证 Bioassay Kit (Qualified Bioassay Kit) - From PDF Page 1 & 2
  const qualifiedKits = [
    { name: 'cAMP Hunter™ Tirzepatide (GIP RA) Bioassay Kit', drug: 'Tirzepatide', qualified: 'Tirzepatide', moa: 'GIPR Agonist', measure: 'cAMP Accumulation' },
    { name: 'cAMP Hunter™ Tirzepatide (GLP-1 RA) Bioassay Kit', drug: 'Tirzepatide', qualified: 'Tirzepatide', moa: 'GLP1R Agonist', measure: 'cAMP Accumulation' },
    { name: 'KILR® Raji ADCC Bioassay Kit', drug: 'Rituximab', qualified: '', moa: 'Direct Target Cell Death', measure: 'ADCC' },
    { name: 'cAMP Hunter™ Semaglutide Bioassay Kit', drug: 'Semaglutide', qualified: 'Ozempic®', moa: 'GLP1R Agonist', measure: 'cAMP Accumulation' },
    { name: 'PathHunter® Aflibercept Bioassay Kits (includes HS version)', drug: 'Aflibercept', qualified: 'Eylea®', moa: 'VEGF-Trap', measure: 'VEGFR2 (KDR) Dimerization' },
    { name: 'PathHunter® Bevacizumab Bioassay Kits (includes HS version)', drug: 'Bevacizumab', qualified: 'Avastin®', moa: 'Anti-VEGFA mAb', measure: 'VEGFR2 (KDR) Dimerization' },
    { name: 'PathHunter® Ranibizumab Bioassay Kits (includes HS version)', drug: 'Ranibizumab', qualified: 'Lucentis®', moa: 'Anti-VEGFA mAb', measure: 'VEGFR2 (KDR) Dimerization' },
    { name: 'PathHunter® Adalimumab Bioassay Kit', drug: 'Adalimumab', qualified: 'Humira®', moa: 'Anti-TNFα mAb', measure: 'IkB Degradation' },
    { name: 'PathHunter® PD-1 Bioassay Kit (SHP1 Signaling)', drug: 'Anti-PD-1/PD-L1', qualified: 'Keytruda®', moa: 'PD-L1-induced PD-1 Signaling', measure: 'SHP Recruitment' },
    { name: 'PathHunter® Tocilizumab Bioassay Kit', drug: 'Tocilizumab', qualified: 'Actemra®', moa: 'Anti-ligand (IL-6) or Anti receptor (IL-6RA) Drugs', measure: 'IL6RA/IL6ST Dimerization' },
    { name: 'PathHunter® Anakinra Bioassay Kit', drug: 'Anakinra', qualified: 'Kineret®', moa: 'IL-1RA (Inhibits IL-1)', measure: 'IL1R/IL1RAP Dimerization' },
    { name: 'PathHunter® Darbepoetin Alfa Bioassay Kit', drug: 'Darbepoetin Alfa', qualified: 'Aranesp®', moa: 'EPOR Agonist', measure: 'EpoR/EpoR Dimerization' },
    { name: 'PathHunter® Epoetin Alfa Bioassay Kit', drug: 'Epoetin Alfa', qualified: 'Recombinant hEpo', moa: 'EPOR agonist', measure: 'EpoR/EpoR Dimerization' },
    { name: 'cAMP Hunter™ Exenatide Bioassay Kit', drug: 'Exenatide', qualified: 'Byetta®', moa: 'GLP1R agonist', measure: 'cAMP Accumulation' },
    { name: 'cAMP Hunter™ Liraglutide Bioassay Kit', drug: 'Liraglutide', qualified: 'Victoza®', moa: 'GLP1R agonist', measure: 'cAMP Accumulation' },
    { name: 'PathHunter® Insulin Glargine Bioassay Kit', drug: 'Insulin Glargine', qualified: 'USP Insulin', moa: 'INSRb agonist', measure: 'SH2 Recruitment' },
    { name: 'PathHunter® Insulin Lispro Bioassay Kit', drug: 'Insulin Lispro', qualified: 'USP Insulin', moa: 'INSRb agonist', measure: 'SH2 Recruitment' },
    { name: 'PathHunter® Insulin Bioassay Kit', drug: 'Insulin', qualified: 'USP Insulin', moa: 'INSRb agonist', measure: 'SH2 Recruitment' },
    { name: 'PathHunter® Panitumumab Bioassay Kit', drug: 'Panitumumab', qualified: 'Vectibix®', moa: 'Anti-EGFR mAb', measure: 'EGFR/ErbB2 Dimerization' },
    { name: 'PathHunter® Pertuzumab Bioassay Kit', drug: 'Pertuzumab', qualified: 'Perjeta®', moa: 'Anti-HER2-dimerization mAb', measure: 'ErbB2/ErbB3 Dimerization' },
    { name: 'cAMP Hunter™ Teriparatide Bioassay Kit', drug: 'Teriparatide', qualified: 'Forteo®', moa: 'PTHR agonist', measure: 'cAMP Accumulation' },
    { name: 'PathHunter® Growth Hormone Bioassay Kit', drug: 'Somatotropin, Somatropin', qualified: 'Recombinant hGH', moa: 'GHR agonist', measure: 'SH2 Recruitment' },
    { name: 'cAMP Hunter™ Follitropin Alfa Bioassay Kit', drug: 'Follitropin alfa', qualified: 'Gonal-F', moa: 'FSHR agonist', measure: 'cAMP Accumulation' },
    { name: 'PathHunter® Sargramostim Bioassay Kit', drug: 'Sargramostim', qualified: 'Leukine®', moa: 'Recombinant GM-CSF (CSFR2 agonist)', measure: 'CSF2RB/CSF2R Dimerization' },
  ];

  // 4.2 基于靶点的 Bioassay Kit (Target-based Bioassay Kit) - From PDF Page 3 & 4
  const targetBasedKits = [
    { name: 'PathHunter® CALCRL-RAMP3 (AM2) Bioassay Kit', target: 'AM2', moa: 'CLR Agonist', measure: 'β-Arrestin Recruitment' },
    { name: 'cAMP Hunter™ GCGR Bioassay Kit', target: 'GCG', moa: 'GCG Agonist', measure: 'cAMP Accumulation' },
    { name: 'cAMP Hunter™ GLP-1 RA Bioassay Kit', target: 'GLP-1', moa: 'GLP-1 Agonist', measure: 'cAMP Accumulation' },
    { name: 'cAMP Hunter™ GIP RA Bioassay Kit', target: 'GIP', moa: 'GIP Agonist', measure: 'cAMP Accumulation' },
    { name: 'PathHunter® IL-15 Bioassay Kit (Dimerization)', target: 'IL2RB/IL2RG', moa: 'IL-15 Agonist', measure: 'IL2Rβ/IL2Rγ Dimerization' },
    { name: 'PathHunter® IL-15 Bioassay Kit (Reporter)', target: 'IL-15', moa: 'Endogeneous Receptor Activation', measure: 'IL-15 Signaling' },
    { name: 'KILR® NCI-N87 ADCC Bioassay Kit', target: 'HER2', moa: 'Cytotoxicity', measure: 'ADCC' },
    { name: 'KILR® Raji ADCP Bioassay Kit', target: 'CD19, CD20, CD38', moa: 'Cytotoxicity', measure: 'ADCP' },
    { name: 'KILR® Daudi ADCC Bioassay Kit', target: 'CD19, CD20, CD38', moa: 'Cytotoxicity', measure: 'ADCC' },
    { name: 'PathHunter® DLD1 IL7R/IL2RG Bioassay Kit', target: 'IL7R/IL2RG', moa: 'IL-7 Agonists', measure: 'IL7R/IL2RG Dimerization' },
    { name: 'PathHunter® U2OS IL1RL1/IL1RAP Bioassay Kit', target: 'IL1RL1/IL1RAP', moa: 'IL-33 Antagonists', measure: 'IL1RL1/IL1RAP Dimerization' },
    { name: 'PathHunter® U2OS TrkA-p75 Bioassay Kit', target: 'TrkA-p75', moa: 'Agonist drugs', measure: 'SH2 Recruitment' },
    { name: 'PathHunter® U2OS MCHR1 Bioassay Kit', target: 'MCHR1', moa: 'Agonist drugs', measure: 'β-Arrestin Recruitment' },
    { name: 'PathHunter® U2OS GHSR Bioassay Kit', target: 'GHSR', moa: 'Agonist drugs', measure: 'β-Arrestin Recruitment' },
    { name: 'cAMP Hunter CHO-K1 LHCGR Bioassay Kit', target: 'LHCGR', moa: 'Agonist drugs', measure: 'cAMP Accumulation' },
    { name: 'PathHunter® CHO-K1 MRGPRX2 Bioassay Kit', target: 'MRGPRX2', moa: 'Agonist drugs', measure: 'β-Arrestin Recruitment' },
    { name: 'PathHunter® CHO-K1 AGTR1 Bioassay Kit', target: 'AGTR1', moa: 'AGTR1 Agonists', measure: 'β-Arrestin Recruitment' },
    { name: 'PathHunter® CHO-K1 AGTRL1 Bioassay Kit', target: 'AGTRL1', moa: 'AGTRL1 Agonists', measure: 'β-Arrestin Recruitment' },
    { name: 'PathHunter® CHO-K1 BDKRB2 Bioassay Kit', target: 'BDKRB2', moa: 'BDKRB2 Agonists', measure: 'β-Arrestin Recruitment' },
    { name: 'PathHunter® CHO-K1 CNR1 Bioassay Kit', target: 'CNR1', moa: 'CNR1 Agonists', measure: 'β-Arrestin Recruitment' },
    { name: 'PathHunter® CHO-K1 C5AR1 Bioassay Kit', target: 'C5AR1', moa: 'Anti-ligand (anti-C5a)', measure: 'β-Arrestin Recruitment' },
    { name: 'PathHunter® CHO-K1 CCR2 Bioassay Kit', target: 'CCR2', moa: 'Antagonist drugs', measure: 'β-Arrestin Recruitment' },
    { name: 'PathHunter® CHO-K1 CXCR5 Bioassay Kit', target: 'CXCR5', moa: 'Antagonist drugs', measure: 'β-Arrestin Recruitment' },
    { name: 'PathHunter® Exendin-4 Bioassay Kit', target: 'Exendin-4', moa: 'Agonist drugs', measure: 'β-Arrestin Recruitment' },
    { name: 'PathHunter® U2OS FGFR4-β-Klotho Bioassay Kit', target: 'FGFR4-β Klotho', moa: 'Agonist drugs', measure: 'SH2 Recruitment' },
    { name: 'cAMP Hunter™ CHO-K1 GPBAR1 Bioassay Kit', target: 'GPBAR1', moa: 'Agonist drugs', measure: 'cAMP Accumulation' },
    { name: 'PathHunter® GLP1 (7-37) Bioassay Kit', target: 'GLP1R', moa: 'Agonist drugs', measure: 'β-Arrestin Recruitment' },
    { name: 'PathHunter® CHO-K1 GLP2R Bioassay Kit', target: 'GLP2R', moa: 'Agonist drugs', measure: 'β-Arrestin Recruitment' },
    { name: 'PathHunter® IGF-1 Bioassay Kit', target: 'IGF1R', moa: 'Agonist drugs', measure: 'SH2 Recruitment' },
    { name: 'PathHunter® IL-2 Bioassay Kit (Dimerization)', target: 'IL2RB/IL2RG/IL2RA', moa: 'Modified agonists; anti-IL2 drugs', measure: 'Hetero-oligomerization' },
    { name: 'PathHunter® U2OS IL6RA/IL6ST Bioassay Kit', target: 'IL6R/IL6ST', moa: 'Anti-IL-6 mAbs', measure: 'IL6RA/IL6ST Dimerization' },
    { name: 'PathHunter® U2OS IL10RA/IL10RB Dimerization Bioassay Kit', target: 'IL10RA/IL10RB', moa: 'Anti-receptor (IL 10RA) drugs', measure: 'IL10RA/IL10RB Dimerization' },
    { name: 'PathHunter® IL-17A/IL-17F Bioassay Kit (Dimerization)', target: 'IL17RA/IL17RC', moa: 'Anti-IL-17 mABs', measure: 'IL17RC/IL17RC Dimerization' },
    { name: 'PathHunter® U2OS IL31R/OSMRb Bioassay Kit', target: 'IL31RA/OSMRb', moa: 'Anti-ligand (IL-31); Anti-receptor drugs', measure: 'IL31RA/OSMRb Dimerization' },
    { name: 'PathHunter® U2OS MC4R Bioassay Kit', target: 'MC4R', moa: 'Antagonist drugs', measure: 'β-Arrestin Recruitment' },
    { name: 'PathHunter® CHO-K1 NPY2R Bioassay Kit', target: 'NPY2R (β-Arrestin)', moa: 'Agonist, Antagonist drugs', measure: 'β-Arrestin Recruitment' },
    { name: 'cAMP Hunter™ CHO-K1 NPY2R Bioassay Kit', target: 'NPY2R (cAMP)', moa: 'Agonist, Antagonist drugs', measure: 'cAMP Accumulation' },
    { name: 'PathHunter® U2OS PDGFRa Bioassay Kit', target: 'PDGFRA', moa: 'Antagonist drugs', measure: 'SH2 Recruitment' },
    { name: 'PathHunter® U2OS PDGFRb Bioassay Kit', target: 'PDGFRB', moa: 'Antagonist drugs', measure: 'SH2 Recruitment' },
    { name: 'PathHunter® PTH Bioassay Kit', target: 'PTH Receptor', moa: 'Agonist drugs', measure: 'β-Arrestin Recruitment' },
    { name: 'PathHunter® Jurkat SIRPa Signaling Bioassay Kit', target: 'SIRPa(-CD47)', moa: 'Agonists, Antagonist drugs', measure: 'SH2 Recruitment' },
    { name: 'PathHunter® CHO-K1 SSTR2 Bioassay Kit', target: 'SSTR2', moa: 'Agonist drugs', measure: 'β-Arrestin Recruitment' },
    { name: 'PathHunter® U2OS TrkB-P75 Bioassay Kit', target: 'TrkB-p75', moa: 'Antagonist drugs', measure: 'SH2 Recruitment' },
    { name: 'PathHunter® U2OS TrkC Bioassay Kit', target: 'TrkC', moa: 'Antagonist drugs', measure: 'SH2 Recruitment' },
    { name: 'PathHunter® CHO-K1 VIPR2 Bioassay Kit', target: 'VIPR2', moa: 'Agonist drugs', measure: 'β-Arrestin Recruitment' },
  ];

  // 4.3 早期 Bioassay Kit (Early Access Bioassay Kit) - From PDF Page 4
  const earlyAccessKits = [
    { target: 'Denosumab', moa: 'Anti-RANKL mAb', measure: 'NF-κB transcriptional reporter' },
    { target: 'CXCR2', moa: 'Agonist drugs', measure: 'β-Arrestin recruitment' },
    { target: 'CALCRL-RAMP3', moa: 'Agonist drugs', measure: 'β-Arrestin recruitment' },
    { target: 'MC1R', moa: 'Agonist drugs', measure: 'β-Arrestin recruitment' },
    { target: 'CSF1R/CSF1R', moa: 'Antagonist drugs', measure: 'Ligand-mediated Receptor Dimerization' },
    { target: 'AXL', moa: 'Agonist drugs', measure: 'SH2 recruitment' },
  ];

  const filteredQualified = qualifiedKits.filter(k => 
    k.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    k.drug.toLowerCase().includes(searchTerm.toLowerCase()) ||
    k.qualified.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white pb-32">
      {/* 一、Introduction Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <h1 className="text-4xl font-extrabold text-[#1C2C5E] mb-6">生物活性检测 Bioassay Kits</h1>
            <div className="h-1 w-20 bg-[#4B827E] mb-8"></div>
            <div className="space-y-4 text-slate-600 leading-relaxed text-lg text-justify">
              <p>
                Bioassay 是使用代表<strong>药物作用机制(MOA)</strong>的生物系统来测量药物生物学活性或效价的分析方法。
              </p>
              <p>
                Eurofins DiscoverX 提供广泛的 Bioassay Kit 产品，这些产品具有 MoA 相关性，使用 <strong>ICH(国际人用药品注册技术协调组织)</strong>指南和已上市创新药或标准品进行了优化和验证。无需昂贵且耗时的细胞培养或分析开发，从而缩短了开发时间并减少了错误。
              </p>
              <p>
                这些稳健、定量、即用型的 Bioassay Kit 使用简单、均质化的方法。它们易于实施，用于功能表征、效价检测、中和抗体(NAb)检测、稳定性研究以及许多其他应用，以探究生物功能并加速您的生物制剂开发项目从发现到上市后 <strong>QC 批次放行测试</strong>。
              </p>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="relative">
              <img src="/pic/Bioassay kit.jpg" className="rounded-2xl shadow-2xl border border-slate-100" alt="Bioassay Kits" />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border border-slate-100 hidden lg:block">
                <p className="text-[#4B827E] font-black text-2xl">减少 12+ 个月</p>
                <p className="text-slate-400 text-xs font-bold uppercase tracking-widest leading-none">分析开发时间 / Time Saved</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 二、Product Applications */}
      <section className="bg-slate-50 py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1C2C5E] mb-12 text-center">产品应用</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { title: 'Potency 检测', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
              { title: '中和抗体(NAb)检测', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' },
              { title: '稳定性研究', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' },
              { title: '可比性研究', icon: 'M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' },
              { title: '功能表征', icon: 'M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z' }
            ].map((app, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 text-center hover:shadow-md transition-all group">
                <div className="w-12 h-12 bg-teal-50 text-[#4B827E] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#4B827E] group-hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={app.icon} /></svg>
                </div>
                <h4 className="text-sm font-bold text-[#1C2C5E] leading-tight">{app.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 三、Product Highlights */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-bold text-[#1C2C5E] mb-12 text-center md:text-left border-l-8 border-[#4B827E] pl-6">产品亮点</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            { title: '生物学相关性', desc: '反映 MOA 的功能性分析，用于监测和测试生物制剂治疗。' },
            { title: '已验证', desc: '使用 ICH 指南，使用市场生物药物或参考标准进行验证。' },
            { title: '稳健且可重现', desc: '在 QC 批次放行应用中，用于稳定性和效价测试的分析，具有批内和批间的高重现性。' },
            { title: '简单方案，快速结果', desc: '自动化友好，均质化方案，适合在多个实验室实施，兼容高通量格式，提高效率。' }
          ].map((h, i) => (
            <div key={i} className="flex gap-5 p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:bg-white hover:border-[#4B827E]/30 transition-all">
              <div className="shrink-0 w-8 h-8 bg-[#4B827E] text-white rounded-lg flex items-center justify-center font-bold">✓</div>
              <div>
                <h4 className="font-bold text-[#1C2C5E] mb-2">{h.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{h.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 四、Product Lists */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-black text-[#1C2C5E] mb-16 tracking-tight">产品列表</h2>

        {/* 4.1 已验证 Bioassay Kit */}
        <div className="mb-24">
          <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
            <div className="max-w-3xl">
              <h3 className="text-2xl font-bold text-[#4B827E] mb-4">1. 已验证 Bioassay Kit (Qualified Bioassay Kit)</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                这些 Bioassay kit 已使用其相应的原研药或标准品进行了优化和验证，可轻松减少 12 个月以上的分析开发时间。主要产品包括：
              </p>
            </div>
            <div className="relative w-full md:w-80">
              <input 
                type="text" 
                placeholder="搜索产品名称、原研药..." 
                className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-full focus:ring-2 focus:ring-[#4B827E] outline-none text-sm transition-all shadow-inner"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </div>
          </div>
          
          <div className="overflow-x-auto shadow-2xl rounded-2xl border border-slate-200">
            <table className="min-w-full divide-y divide-slate-200">
              <thead className="bg-[#1C2C5E] text-white">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider border-r border-white/10">Bioassay Kit</th>
                  <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider border-r border-white/10">Drug Name</th>
                  <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider border-r border-white/10">Qualified With</th>
                  <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider border-r border-white/10">Molecular MOA</th>
                  <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider">Assay Measures</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-slate-100">
                {filteredQualified.map((row, idx) => (
                  <tr key={idx} className="hover:bg-teal-50/30 transition-colors">
                    <td className="px-6 py-4 text-sm font-bold text-[#1C2C5E]">{row.name}</td>
                    <td className="px-6 py-4 text-sm text-slate-600 font-medium">{row.drug}</td>
                    <td className="px-6 py-4 text-sm text-red-600 italic font-medium">{row.qualified}</td>
                    <td className="px-6 py-4 text-xs text-slate-500">{row.moa}</td>
                    <td className="px-6 py-4 text-xs text-slate-400 font-mono italic">{row.measure}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-[10px] text-slate-400 italic">*HS Bioassay kits have been further optimized to deliver reproducible results with lower variability.</p>
        </div>

        {/* 4.2 基于靶点的 Bioassay Kit */}
        <div className="mb-24">
          <div className="max-w-3xl mb-10">
            <h3 className="text-2xl font-bold text-[#4B827E] mb-4">2. 基于靶点的 Bioassay Kit (Target-based Bioassay Kit)</h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              即用型基于靶点或基于 MOA 的 Bioassay Kit，使用标准品进行了优化。主要靶点包括：
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs font-bold text-slate-500">
              {['GCGR（胰高血糖素受体）', 'GLP-1 受体', 'GIP 受体', 'IL-15', 'HER2', 'CD19、CD20、CD38', 'IL-7 受体系列', 'CXCR2、CCR2、CXCR5', '以及更多其他靶点'].map((t, i) => (
                <div key={i} className="bg-slate-100 px-3 py-2 rounded-lg border border-slate-200 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#4B827E] rounded-full"></span> {t}
                </div>
              ))}
            </div>
          </div>

          <div className="overflow-x-auto shadow-2xl rounded-2xl border border-slate-200">
            <table className="min-w-full divide-y divide-slate-200">
              <thead className="bg-[#4B827E] text-white">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider border-r border-white/10">Bioassay Kit</th>
                  <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider border-r border-white/10">Target</th>
                  <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider border-r border-white/10">Molecular MOA</th>
                  <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider">Assay Measures</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-slate-100">
                {targetBasedKits.map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50 hover:bg-teal-50/20 transition-colors'}>
                    <td className="px-6 py-4 text-sm font-bold text-[#1C2C5E]">{row.name}</td>
                    <td className="px-6 py-4 text-sm text-slate-600">{row.target}</td>
                    <td className="px-6 py-4 text-xs text-slate-500">{row.moa}</td>
                    <td className="px-6 py-4 text-xs text-slate-400 italic font-mono">{row.measure}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 4.3 早期 Bioassay Kit */}
        <div className="bg-slate-100 rounded-3xl p-10 border border-slate-200 shadow-inner">
          <div className="max-w-4xl">
            <h3 className="text-2xl font-bold text-[#1C2C5E] mb-4">3. 早期 Bioassay Kit (Early Access Bioassay Kit)</h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-10">
              Eurofins DiscoverX 提供部分处于开发早期的 Bioassay Kit，帮助您加速项目进展。这些开发早期的 Bioassay Kit 交货时间为 6-8 周，非常适合效价测试和中和抗体检测。可用靶点包括：
            </p>
          </div>
          
          <div className="overflow-x-auto bg-white shadow-xl rounded-2xl border border-slate-200">
            <table className="min-w-full divide-y divide-slate-200">
              <thead className="bg-[#1C2C5E] text-white">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider border-r border-white/20">Drug Name or Target</th>
                  <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider border-r border-white/20">Molecular Moa</th>
                  <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider">Assay Measures</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {earlyAccessKits.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4 text-sm font-bold text-[#1C2C5E]">{row.target}</td>
                    <td className="px-6 py-4 text-sm text-slate-500">{row.moa}</td>
                    <td className="px-6 py-4 text-xs text-slate-400 italic">{row.measure}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BioassayKitDetail;
