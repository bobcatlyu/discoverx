
import React from 'react';

const CalixarDetail: React.FC = () => {
  const expertise = [
    { title: '膜蛋白 (Membrane Proteins)', subtitle: 'GPCRs, Ion Channels, Transporters...', icon: '🧬' },
    { title: '可溶性蛋白 (Soluble Proteins)', subtitle: 'Kinases, Phosphatases, Helicases...', icon: '🧪' },
    { title: '试剂 (Reagents)', subtitle: 'Solubilizers, Stabilizers...', icon: '🧴' },
  ];

  const applications = [
    { title: '小分子筛选 (Small Molecule Screening)', items: ['HTS', 'SPR', 'MST', 'AS-MS', 'STD-NMR', 'DEL'] },
    { title: '抗体发现 (Antibody Discovery)', items: ['Immunization', 'Phage/Yeast Display'] },
    { title: '疫苗发现 (Vaccine Discovery)', items: ['Subunit (Recombinant Protein)'] },
    { title: '结构生物学研究 (Structural Biology Study)', items: ['Cryo-EM', 'SBDD', 'X-Ray', 'Epitope Mapping'] },
    { title: '生物分析开发 (Bioassay Development)', items: ['Functional Validation', 'Diagnostic (ELISA...)'] },
  ];

  const workflow = [
    { stage: '构建设计 (Construct Design)', time: '4 weeks', details: ['Gene Optimization', 'Affinity Tags (Strep, His, Flag, GST, MBP...)', 'Specific Tags (GFP, RFP, Avi...)', 'Signal Sequences (HA, Sec)'] },
    { stage: '表达 (Expression)', time: '2-4 weeks', details: ['Mammalian Cells (HEK, CHO)', 'Insect Cells (BEVS - Sf9, Sf21)', 'Yeast (P. pastoris, S. cerevisiae)', 'Bacteria (E. coli)'] },
    { stage: '增溶与稳定 (Solubilization & Stabilization)', time: '2 weeks', details: ['Proprietary Detergents', 'Stabilizing Reagents', 'Nanodiscs (MSP, Synthetic, SMALPs)', 'Proteoliposomes', 'Amphipols'] },
    { stage: '纯化 (Purification)', time: '2 weeks', details: ['Purification Systems (IMAC, Affinity, SEC, HIC, IEX...)', 'Quality Controls (SDS-PAGE, Native-PAGE, Western-blot, Cryostability Assay)'] },
    { stage: '表征 (Characterization)', time: '2 weeks', details: ['Thermal Shift Assay', 'Ligand Binding Assay (MST, Radiobinding, Fluo Polarization)', 'Enzymatic Assay', 'ELISA'] },
    { stage: '大规模生产 (Large-scale Production)', time: '2-6 weeks', details: ['25L-bioreactor (Mammalian, Insect Cells)', '10L+ Production (Yeast, Bacteria)', 'Automated Purification'] },
  ];

  const technicalSteps = [
    {
      stage: '表达 (EXPRESSION)',
      description: '在最适合的宿主系统中表达全长可溶性蛋白或全长膜蛋白。',
      items: ['原代细胞 (Primary cells)', '哺乳动物细胞 (Mammalian cells | CHO, HEK)', '昆虫细胞 (Insect cells | Sf9)', '酵母 (Yeast | P. pastoris, S. cerevisiae)', '细菌 (Bacteria | E. coli)']
    },
    {
      stage: '增溶与稳定 (SOLUBILIZATION & STABILIZATION)',
      description: '使用专利技术确保蛋白质在提取过程中的结构完整性。',
      items: ['专利去垢剂、聚合物及稳定剂 (8个专利家族)', '创新的去垢剂与稳定剂组合', '创新聚合物技术', '显著提升增溶效果与稳定性']
    },
    {
      stage: '纯化 (PURIFICATION)',
      description: '获得高纯度、高活性的全长野生型蛋白。',
      items: ['去垢剂胶束 (Micelle of detergent)', '合成纳米盘 (Synthetic Nanodisc | SMALP...)', '特性：全长 (Full-length)、野生型 (Wild-type)、高纯度 (Pure)、高活性 (Active)、高稳定性 (Stable)、均一性 (Homogenous)']
    },
    {
      stage: '重组/复性 (RECONSTITUTION)',
      description: '将蛋白质重组到模拟天然脂质环境的体系中。',
      items: ['MSP纳米盘 (MSP-nanodiscs)', '蛋白脂质体 (Proteoliposome)', '两性聚合物 (Amphipol)']
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Hero Section */}
      <div className="mb-16">
        <h1 className="text-4xl font-extrabold text-[#1C2C5E] mb-4">开启 Eurofins CALIXAR 定制蛋白专业技术的力量</h1>
        <p className="text-xl text-[#4B827E] font-bold mb-8">为药物发现和治疗开发提供高质量、完全天然且功能完备的蛋白质</p>
        
        <div className="space-y-6 text-slate-600 leading-relaxed max-w-4xl mb-12">
          <p>
            Eurofins CALIXAR 是 Eurofins DiscoverX 的一部分，是一家领先的生物技术公司，专注于生产和稳定完全天然、功能完备的重组蛋白。凭借专利技术，我们为广泛的应用提供高纯度和稳定的蛋白质。
          </p>
          <p>
            通过保留复杂蛋白质的结构完整性和功能性，我们提供定制化解决方案，加速研究和治疗药物的开发。无论是用于筛选、机制研究还是结构生物学，我们的服务都能量身定制，以满足最苛刻的研究需求。
          </p>
        </div>

        {/* Our Expertise */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {expertise.map((item, idx) => (
            <div key={idx} className="bg-slate-50 p-8 rounded-2xl border border-slate-100 text-center hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold text-[#1C2C5E] mb-2">{item.title}</h3>
              <p className="text-sm text-slate-500">{item.subtitle}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Technical Description - Fully Native Process */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold text-[#1C2C5E] mb-10 border-l-4 border-[#4B827E] pl-4">定制蛋白生产：完整流程</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {technicalSteps.map((step, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-teal-50 flex items-center justify-center text-[#4B827E] font-bold mr-4">
                  0{idx + 1}
                </div>
                <h3 className="text-xl font-bold text-[#1C2C5E]">{step.stage}</h3>
              </div>
              <p className="text-sm text-[#4B827E] font-medium mb-4">{step.description}</p>
              <ul className="space-y-2">
                {step.items.map((item, i) => (
                  <li key={i} className="text-xs text-slate-600 flex items-start">
                    <span className="text-[#4B827E] mr-2">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-8 p-6 bg-teal-50 rounded-2xl border border-teal-100 text-center">
          <p className="text-[#4B827E] font-bold italic">
            最终获得：高成药性、稳定且功能完备的重组蛋白 (Highly-druggable, stable & functional recombinant proteins)
          </p>
        </div>
      </div>

      {/* Applications */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold text-[#1C2C5E] mb-10 border-l-4 border-[#4B827E] pl-4">应用领域 / Applications</h2>
        <p className="text-slate-600 mb-8">由我们的专家开发的重组蛋白在抗体开发、疫苗配方以及通过 SBDD 或 HTS 实验发现主要先导化合物方面处于领先地位。</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {applications.map((app, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
              <h4 className="font-bold text-[#1C2C5E] mb-4 border-b pb-2">{app.title}</h4>
              <ul className="space-y-2">
                {app.items.map((item, i) => (
                  <li key={i} className="text-sm text-slate-600 flex items-center">
                    <span className="w-1.5 h-1.5 bg-[#4B827E] rounded-full mr-2"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Workflow */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold text-[#1C2C5E] mb-10 border-l-4 border-[#4B827E] pl-4">定制蛋白的卓越流程</h2>
        <div className="relative border-l-2 border-slate-200 ml-4 space-y-12">
          {workflow.map((step, idx) => (
            <div key={idx} className="relative pl-8">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#4B827E] border-4 border-white"></div>
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-[#1C2C5E]">{step.stage}</h3>
                <span className="text-sm font-bold text-[#4B827E] bg-teal-50 px-3 py-1 rounded-full mt-2 md:mt-0">{step.time}</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {step.details.map((detail, i) => (
                  <div key={i} className="text-sm text-slate-600 bg-slate-50 p-3 rounded-lg border border-slate-100">
                    {detail}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="bg-[#1C2C5E] rounded-3xl p-12 text-white shadow-xl">
        <h2 className="text-3xl font-bold mb-12 text-center">为什么选择我们的蛋白质生产解决方案？</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
          {[
            { label: '专利技术', sub: 'Proprietary Technology' },
            { label: '高成功率', sub: 'High Success Rate' },
            { label: '强大专业知识', sub: 'Strong Expertise' },
            { label: '科学专家', sub: 'Scientific Experts' },
            { label: '结果驱动', sub: 'Results Driven' },
            { label: '20+ 年经验', sub: '20+ Years Experience' },
          ].map((item, idx) => (
            <div key={idx} className="space-y-2">
              <div className="text-lg font-bold">{item.label}</div>
              <div className="text-[10px] uppercase tracking-wider opacity-60">{item.sub}</div>
            </div>
          ))}
        </div>
        <div className="mt-12 pt-12 border-t border-white/10 text-center">
          <p className="text-xl font-bold mb-4">500+ 可溶性蛋白 | 250+ 膜蛋白</p>
          <p className="text-white/60 max-w-2xl mx-auto">无论您是在寻找膜蛋白还是复杂蛋白质，我们的定制服务都能量身定制，以满足您的确切研究要求。</p>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="mt-16 text-center">
        <p className="text-slate-500 mb-6">联系我们，了解我们的定制蛋白服务如何加速您的研究和药物开发计划。</p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="mailto:ProteinRequests@discovery.eurofinseu.com" className="bg-[#4B827E] text-white px-8 py-3 rounded-full font-bold hover:bg-[#3d6a67] transition-colors shadow-lg">
            立即发送邮件咨询
          </a>
          <button className="border-2 border-[#4B827E] text-[#4B827E] px-8 py-3 rounded-full font-bold hover:bg-teal-50 transition-colors">
            访问 calixar.com
          </button>
        </div>
      </div>
    </div>
  );
};

export default CalixarDetail;
