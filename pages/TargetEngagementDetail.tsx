
import React from 'react';

const TargetEngagementDetail: React.FC = () => {
  const epigeneticData = [
    { target: 'BAZ2A', cellLine: '796-0074C1', exp10: '', exp2: '' },
    { target: 'BRD2(1)', cellLine: '796-0004C1', exp10: '96-0004E1CP0L', exp2: '96-0004E1CP0M' },
    { target: 'BRD2(1,2)', cellLine: '796-0049C1', exp10: '', exp2: '' },
    { target: 'BRD3(1,2)', cellLine: '796-0036C1', exp10: '', exp2: '' },
    { target: 'BRD3(1,2)', cellLine: '796-0038C1', exp10: '96-0038E1CP7L', exp2: '96-0038E1CP7M' },
    { target: 'BRD4(1)', cellLine: '796-0005C1', exp10: '96-0005E1CP0L', exp2: '96-0005E1CP0M' },
    { target: 'BRDT(1)', cellLine: '796-0006C1', exp10: '', exp2: '' },
    { target: 'BRDT(1,2)', cellLine: '796-0046C1', exp10: '96-0046E1CP7L', exp2: '96-0046E1CP7M' },
    { target: 'EP300', cellLine: '796-0073C15', exp10: '', exp2: '' },
    { target: 'G9a', cellLine: '796-0003C15', exp10: '96-0003E15CP7L', exp2: '96-0003E15CP7M' },
    { target: 'GLP', cellLine: '796-0045C15', exp10: '96-0045E15CP7L', exp2: '96-0045E15CP7M' },
    { target: 'PRMT3', cellLine: '796-0072C15', exp10: '', exp2: '' },
    { target: 'SMARCA4', cellLine: '796-0060C1', exp10: '96-0060E1CP7L', exp2: '96-0060E1CP7M' },
    { target: 'TAF1L(2)', cellLine: '796-0058C1', exp10: '', exp2: '' },
  ];

  const kinaseData = [
    { target: 'BLK', cellLine: '796-0044C1', exp10: '96-0044E1CP0L', exp2: '96-0044E1CP0M' },
    { target: 'BTK', cellLine: '796-0056C15', exp10: '96-0056E15CP0L', exp2: '96-0056E15CP0M' },
    { target: 'CLK1', cellLine: '796-0059C1', exp10: '96-0059E1CP0L', exp2: '96-0059E1CP0M' },
    { target: 'CLK2', cellLine: '796-0057C15', exp10: '96-0057E15CP0L', exp2: '96-0057E15CP0M' },
    { target: 'CSF1R', cellLine: '796-0047C15', exp10: '96-0047E15CP0L', exp2: '96-0047E15CP0M' },
    { target: 'CSNK1D', cellLine: '796-0048C15', exp10: '96-0048E15CP0L', exp2: '96-0048E15CP0M' },
    { target: 'FGR', cellLine: '796-0043C1', exp10: '', exp2: '' },
    { target: 'HCK', cellLine: '796-0041C15', exp10: '96-0041E15CP0L', exp2: '96-0041E15CP0M' },
    { target: 'HPK1', cellLine: '796-0083C1', exp10: '', exp2: '' },
    { target: 'MEK1', cellLine: '796-0040C15', exp10: '96-0040E15CP0L', exp2: '96-0040E15CP0M' },
    { target: 'PI3K', cellLine: '796-0061C1', exp10: '', exp2: '' },
    { target: 'PIKFYVE', cellLine: '796-0078C1', exp10: '', exp2: '' },
    { target: 'PIM1', cellLine: '796-0052C15', exp10: '96-0052E15CP0L', exp2: '96-0052E15CP0M' },
    { target: 'PKCθ', cellLine: '796-0082C19', exp10: '', exp2: '' },
    { target: 'PYK2', cellLine: '796-0042C15', exp10: '96-0042E15CP0L', exp2: '96-0042E15CP0M' },
    { target: 'RIPK1', cellLine: '796-0076C19', exp10: '', exp2: '' },
    { target: 'RIPK2', cellLine: '796-0050C1', exp10: '96-0050E1CP0L', exp2: '96-0050E1CP0M' },
    { target: 'RIPK3', cellLine: '796-0077C19', exp10: '', exp2: '' },
    { target: 'SIK1', cellLine: '796-0051C15', exp10: '96-0051E15CP0L', exp2: '96-0051E15CP0M' },
    { target: 'ULK1', cellLine: '796-0081C1', exp10: '', exp2: '' },
  ];

  const otherData = [
    { target: 'Bcl2-Bax', cellLine: '796-0010C3', exp10: '', exp2: '' },
    { target: 'Bcl2-Bim', cellLine: '796-0008C3', exp10: '', exp2: '' },
    { target: 'Bcl2L1-Bax', cellLine: '796-0009C3', exp10: '96-0009E3CP16L', exp2: '96-0009E3CP16M' },
    { target: 'Bcl2L1-Bim', cellLine: '796-0037C3', exp10: '', exp2: '' },
    { target: 'MCL1-BIM', cellLine: '796-0075C3', exp10: '', exp2: '' },
  ];

  const reagentData = [
    { desc: 'InCELL检测试剂盒', cat: '96-0079', spec: '10-plate (1,000/4,000 dp)' },
    { desc: 'InCELL检测试剂盒', cat: '96-0079S', spec: '2-plate (200/800 dp)' },
    { desc: 'InCELL检测试剂盒', cat: '96-0079L', spec: '80-plate (8,000/32,000 dp)' },
    { desc: 'InCELL检测试剂盒', cat: '96-0079-HTS480', spec: '480,000 dp' },
    { desc: 'InCELL检测试剂盒', cat: '96-0079-HTS960', spec: '960,000 dp' },
    { desc: 'InCELL Pulse 工具箱', cat: '94-4007S', spec: '4-plate (400/1,600 dp)' },
  ];

  const ProductTable = ({ data, title }: { data: any[], title: string }) => (
    <div className="mb-12 overflow-hidden shadow-xl rounded-xl border border-slate-200 w-fit">
      <div className="bg-[#4B827E] px-6 py-4">
        <h3 className="text-lg font-bold text-white uppercase tracking-wider whitespace-nowrap">{title}</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="divide-y divide-slate-200">
          <thead className="bg-slate-50 text-slate-500">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider border-r border-slate-200 whitespace-nowrap">靶点</th>
              <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider border-r border-slate-200 whitespace-nowrap">Cell Line Assay Kit</th>
              <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider border-r border-slate-200 whitespace-nowrap">eXpress® Kit (10-plate)</th>
              <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider whitespace-nowrap">eXpress® Kit (2-plate)</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-slate-200">
            {data.map((row, idx) => (
              <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50 hover:bg-teal-50/30 transition-colors'}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-[#1C2C5E] border-r border-slate-100">{row.target}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-slate-600 border-r border-slate-100">{row.cellLine}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-slate-600 border-r border-slate-100">{row.exp10 || '-'}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-slate-600">{row.exp2 || '-'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  return (
    <div className="bg-white">
      {/* 1. Introduction Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-16">
          <h1 className="text-4xl font-extrabold text-[#1C2C5E] mb-4">靶标结合检测 Target Engagement Assays</h1>
          <h2 className="text-2xl font-bold text-[#4B827E] mb-6">通用型细胞水平化合物-靶点结合检测</h2>
          <div className="h-1 w-20 bg-[#4B827E] mb-8"></div>
          <div className="space-y-4 text-slate-600 leading-relaxed text-lg">
            <p>
              靶点结合检测用于测量化合物与特定蛋白靶点的结合情况。在细胞环境中，这类检测能够监测化合物的细胞穿透能力及其与靶点的相互作用，从而评估化合物效力并确认其作用机制（MOA）。
            </p>
            <p>
              InCELL 细胞水平化合物-靶点结合检测提供了在原生细胞环境中确认化合物细胞进入及蛋白靶点结合的能力，可用于筛选并排序抑制剂、验证生化检测中获得的命中化合物，以及测定细胞环境下的 EC50 值。这类简便的结合检测无需自定义化学示踪剂或抗体试剂，在功能性检测不可行或难以实施的情况下提供了便捷的解决方案。
            </p>
            <p>
              InCELL 靶点结合检测与靶向蛋白降解（TPD）项目高度互补，可用于解析并优化化合物与靶点的结合部分。通过 InCELL 检测，研究人员可利用细胞系检测套件、即用型试剂盒以及 DIY 入门套件快速构建靶点结合检测体系。
            </p>
          </div>
        </div>

        {/* Product Highlights */}
        <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100">
          <h3 className="text-2xl font-bold text-[#1C2C5E] mb-8 flex items-center">
            <div className="w-2 h-8 bg-[#4B827E] mr-4 rounded-full"></div>
            产品亮点 / Product Highlights
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-teal-50 flex items-center justify-center text-[#4B827E] shrink-0 font-bold">1</div>
              <div>
                <h4 className="font-bold text-[#1C2C5E] mb-1">生物学相关性强</h4>
                <p className="text-sm text-slate-600">获得细胞水平化合物进入与靶点结合的定量数据，为药物发现决策提供更可靠依据</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-teal-50 flex items-center justify-center text-[#4B827E] shrink-0 font-bold">2</div>
              <div>
                <h4 className="font-bold text-[#1C2C5E] mb-1">操作简便</h4>
                <p className="text-sm text-slate-600">均相检测流程，无需洗涤步骤，采用化学发光读数即可测定化合物与靶点的结合情况</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-teal-50 flex items-center justify-center text-[#4B827E] shrink-0 font-bold">3</div>
              <div>
                <h4 className="font-bold text-[#1C2C5E] mb-1">兼容高通量筛选</h4>
                <p className="text-sm text-slate-600">可轻松实现自动化操作，用于多化合物的准确筛选与评估</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-teal-50 flex items-center justify-center text-[#4B827E] shrink-0 font-bold">4</div>
              <div>
                <h4 className="font-bold text-[#1C2C5E] mb-1">快速开发流程</h4>
                <p className="text-sm text-slate-600">依据详细步骤协议，可在两周以内构建自有靶点结合细胞检测体系</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MOA Section */}
      <section className="bg-slate-50 py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1C2C5E] mb-10 text-center">作用机制 (Mechanism of Action)</h2>
          
          <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="p-10">
              <p className="text-slate-600 leading-relaxed text-lg mb-8">
                Eurofins DiscoverX 的两大检测平台——InCELL Pulse™ 与 InCELL Hunter™。两者均基于行业验证的 EFC 技术并共享相似原理，但在底层机制上存在关键差异，适用于不同类型的蛋白靶点。
              </p>
              <div className="space-y-8">
                <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100">
                  <h4 className="text-2xl font-bold text-[#4B827E] mb-4">InCELL Hunter™</h4>
                  <p className="text-slate-600 leading-relaxed mb-6">
                    基于与蛋白周转或相互作用破坏相关的蛋白稳定化原理。适用于监测化合物对胞内蛋白稳态的影响。
                  </p>
                  <img
                    src="/pic/Target-Engagement-Assays-principles-2.png"
                    alt="InCELL Hunter Principles"
                    className="w-3/4 rounded-xl shadow-md border border-slate-200"
                  />
                </div>
                <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100">
                  <h4 className="text-2xl font-bold text-[#4B827E] mb-4">InCELL Pulse™</h4>
                  <p className="text-slate-600 leading-relaxed mb-6">
                    基于蛋白热稳定性原理。该平台利用小分子结合诱导的蛋白热稳定性改变，通过 EFC 技术捕捉信号变化，从而定量分析靶标结合。
                  </p>
                  <img
                    src="/pic/Target-Engagement-Assays-principles-1.png"
                    alt="InCELL Pulse Principles"
                    className="w-3/4 rounded-xl shadow-md border border-slate-200"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Product Lists from Image */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pb-32">
        <h2 className="text-3xl font-bold text-[#1C2C5E] mb-12 text-center md:text-left">靶标结合产品列表 / Target Engagement Portfolio</h2>
        
        <ProductTable title="表观遗传蛋白 / Epigenetic Proteins" data={epigeneticData} />
        <ProductTable title="激酶靶点 / Kinase Targets" data={kinaseData} />
        <ProductTable title="其他蛋白 / Other Proteins" data={otherData} />

        {/* Reagents Table */}
        <div className="mb-12 overflow-hidden shadow-xl rounded-xl border border-slate-200 w-fit">
          <div className="bg-[#4B827E] px-6 py-4">
            <h3 className="text-lg font-bold text-white uppercase tracking-wider whitespace-nowrap">试剂 / Reagents</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="divide-y divide-slate-200">
              <thead className="bg-slate-50 text-slate-500">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider border-r border-slate-200 whitespace-nowrap">描述</th>
                  <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider border-r border-slate-200 whitespace-nowrap">货号</th>
                  <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider whitespace-nowrap">规格</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-slate-100">
                {reagentData.map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                    <td className="px-6 py-4 text-sm font-bold text-[#1C2C5E] border-r border-slate-100 whitespace-nowrap">{row.desc}</td>
                    <td className="px-6 py-4 text-sm font-mono text-slate-600 border-r border-slate-100 whitespace-nowrap">{row.cat}</td>
                    <td className="px-6 py-4 text-sm text-slate-500 whitespace-nowrap">{row.spec}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate-500 text-sm italic bg-slate-50 py-4 rounded-lg border border-dashed border-slate-300">
            * 我们可以利用 InCELL® 平台为您的特定兴趣蛋白开发靶标结合检测服务。
          </p>
        </div>
      </section>
    </div>
  );
};

export default TargetEngagementDetail;
