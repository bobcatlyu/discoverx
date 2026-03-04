
import React from 'react';

const DetectionKitsDetail: React.FC = () => {
  const allData = [
    { cat: '90-0075LM10', desc: 'HitHunter cAMP Assay for Biologics', specs: '1,000/4,000 dp (96-well/384-well)' },
    { cat: '90-0075LM100', desc: 'HitHunter cAMP Assay for Biologics', specs: '10,000/40,000 dp (96-well/384-well)' },
    { cat: '90-0075LM2', desc: 'HitHunter cAMP Assay for Biologics', specs: '200/800 dp (96-well/384-well)' },
    { cat: '90-0075LM25', desc: 'HitHunter cAMP Assay for Biologics', specs: '2,500/10,000 dp (96-well/384-well)' },
    { cat: '90-0075SM10', desc: 'HitHunter cAMP Assay for Small Molecules', specs: '1,000/4,000 dp (96-well/384-well)' },
    { cat: '90-0075SM2', desc: 'HitHunter cAMP Assay for Small Molecules', specs: '200/800 dp (96-well/384-well)' },
    { cat: '90-0075SM25', desc: 'HitHunter cAMP Assay for Small Molecules', specs: '2,500/10,000 dp (96-well/384-well)' },
    { cat: '90-0075SM-HTS200', desc: 'HitHunter cAMP Assay for Small Molecules', specs: '500 plates, 200,000 dp' },
    { cat: '90-0075SM-HTS400', desc: 'HitHunter cAMP Assay for Small Molecules', specs: '1,000 plates, 400,000 dp' },
    { cat: '90-0075SM-HTS800', desc: 'HitHunter cAMP Assay for Small Molecules', specs: '2,000 plates, 800,000 dp' },
    { cat: '93-0001', desc: 'PathHunter Detection Kit', specs: '75 mL (10 plates), 1,000/4,000 dp (96-well/384-well)' },
    { cat: '93-0001L', desc: 'PathHunter Detection Kit', specs: '550 mL (100 plates), 40,000 dp (384-well)' },
    { cat: '93-0001M', desc: 'PathHunter Detection Kit', specs: '15 mL (2 plates), 200/800 dp (96-well/384-well)' },
    { cat: '93-0001XL', desc: 'PathHunter Detection Kit', specs: '2,401 mL (500 plates), 200,000 dp (384-well)' },
    { cat: '93-0001-HTS400', desc: 'PathHunter Detection Kit', specs: '1000 plates, 400,000 dp' },
    { cat: '93-0001-HTS800', desc: 'PathHunter Detection Kit', specs: '2000 plates, 800,000 dp' },
    { cat: '93-0933', desc: 'PathHunter Bioassay Detection Kit', specs: '75 mL (1,000 dp, 96-well)' },
    { cat: '93-0933E', desc: 'PathHunter Bioassay Detection Kit', specs: '15 mL (200 dp, 96-well)' },
    { cat: '93-0933L', desc: 'PathHunter Bioassay Detection Kit', specs: '500 mL (10,000 dp, 96-well)' },
    { cat: '93-1043', desc: 'PathHunter Bioassay ED Detection Kit', specs: '50 mL (1,000 dp, 96-well)' },
    { cat: '93-1043E', desc: 'PathHunter Bioassay ED Detection Kit', specs: '10 mL (200 dp, 96-well)' },
    { cat: '93-0247', desc: 'PathHunter Flash Detection Kit', specs: '125 mL (10 plates), 1,000/4,000 dp (96-well/384-well)' },
    { cat: '93-0247L', desc: 'PathHunter Flash Detection Kit', specs: '1,000 mL (100 plates), 40,000 dp, (384-well)' },
    { cat: '93-0247M', desc: 'PathHunter Flash Detection Kit', specs: '25 mL (2 plates), 200/800 dp (96-well/384-well)' },
    { cat: '93-0247XL', desc: 'PathHunter Flash Detection Kit', specs: '4,000 mL (400 plates), 160,000 dp (384-well)' },
    { cat: '93-0247-HTS400', desc: 'PathHunter Flash Detection Kit', specs: '1000 plates, 400,000 dp' },
    { cat: '93-0247-HTS800', desc: 'PathHunter Flash Detection Kit', specs: '2000 plates, 800,000 dp' },
    { cat: '93-0183', desc: 'PathHunter EA Detection Kit', specs: '800 dp (384-well)' },
    { cat: '93-0812', desc: 'PathHunter PL/PK Detection kit', specs: '4,000 dp (384-well)' },
    { cat: '93-0812L', desc: 'PathHunter PL/PK Detection kit', specs: '40,000 dp (384-well)' },
    { cat: '93-0180', desc: 'PathHunter ProLabel Detection Kit', specs: '800 dp (384-well)' },
    { cat: '93-0180L', desc: 'PathHunter ProLabel Detection Kit', specs: '10,000 dp (384-well)' },
    { cat: '92-0006', desc: 'ProLink Detection Kit', specs: '800 dp (384-well)' },
    { cat: '96-0079', desc: 'InCELL Detection Kit', specs: '10-plate (1,000/4,000 dp)' },
    { cat: '96-0079-HTS480', desc: 'InCELL Detection Kit', specs: '480,000 dp' },
    { cat: '96-0079-HTS960', desc: 'InCELL Detection Kit', specs: '960,000 dp' },
    { cat: '96-0079L', desc: 'InCELL Detection Kit', specs: '80-plate (8,000/32,000 dp)' },
    { cat: '96-0079S', desc: 'InCELL Detection Kit', specs: '2-plate (200/800 dp)' },
    { cat: '97-0001L', desc: 'KILR Detection Kit', specs: '2,500 dp (96-well)' },
    { cat: '97-0001M', desc: 'KILR Detection Kit', specs: '1,000 dp (96-well)' },
    { cat: '97-0001S', desc: 'KILR Detection Kit', specs: '200 dp (96-well)' },
  ];

  const ProductTable = ({ data, title }: { data: any[], title: string }) => (
    <div className="flex justify-start mb-12">
      <div className="inline-block max-w-full bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden w-fit">
        <div className="bg-[#4B827E] px-6 py-4">
          <h3 className="text-xl font-bold text-white uppercase tracking-wider whitespace-nowrap">{title}</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="divide-y divide-slate-200">
            <thead className="bg-slate-50 sticky top-0 z-10">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-bold text-slate-500 uppercase tracking-wider border-r border-slate-200 whitespace-nowrap">货号</th>
                <th className="px-6 py-3 text-left text-xs font-bold text-slate-500 uppercase tracking-wider border-r border-slate-200 whitespace-nowrap">描述</th>
                <th className="px-6 py-3 text-left text-xs font-bold text-slate-500 uppercase tracking-wider whitespace-nowrap">规格</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-slate-100">
              {data.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-mono font-bold text-[#1C2C5E] border-r border-slate-50">{row.cat}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600 font-medium border-r border-slate-50">{row.desc}</td>
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
      {/* Introduction & Highlights Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left: Introduction */}
          <div>
            <h1 className="text-4xl font-extrabold text-[#1C2C5E] mb-6">检测试剂盒（Detection Kits）</h1>
            <div className="h-1 w-20 bg-[#4B827E] mb-8"></div>
            <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
              <p>
                Eurofins DiscoverX® 检测试剂盒与其丰富的工程化细胞系产品线同步开发，覆盖不同作用机制（MOA）与靶点类别，为治疗分子提供灵敏且定量化的检测读数。检测试剂盒可单独购买，也可作为细胞系检测套装的一部分，与对应的稳定细胞系及细胞培养试剂组合提供。
              </p>
              <p>
                无论您的治疗形式是生物制剂、肽类、小分子还是细胞治疗产品，这些检测试剂盒都能提供准确的药理学数据和高度可重复的实验结果。产品提供多种化学发光与荧光读出体系，以满足不同药物研发阶段与项目需求。
              </p>
              <p>
                Eurofins DiscoverX 在检测试剂盒与相关试剂的开发和优化方面拥有超过二十年的经验。将优化后的检测试剂与 PathHunter、KILR、cAMP Hunter 及 InCELL 细胞系结合使用，可获得高度灵敏且稳定可靠的实验结果。
              </p>
            </div>
          </div>

          {/* Right: Highlights */}
          <div className="flex flex-col gap-5">
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#4B827E]/10 flex items-center justify-center text-[#4B827E] flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#1C2C5E] mb-2">卓越性能</h3>
                  <p className="text-slate-600 leading-relaxed text-sm">检测灵敏、信号稳健、结果高度可重复</p>
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
                  <h3 className="text-lg font-bold text-[#1C2C5E] mb-2">均相体系</h3>
                  <p className="text-slate-600 leading-relaxed text-sm">无需洗板，一步加样；化学发光与荧光读数可通过标准酶标仪读取</p>
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
                  <h3 className="text-lg font-bold text-[#1C2C5E] mb-2">灵活应用</h3>
                  <p className="text-slate-600 leading-relaxed text-sm">适用于蛋白-蛋白相互作用、受体二聚化、蛋白转位、受体激活、蛋白转运、受体内吞、小分子富集等多种研究场景</p>
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
                  <h3 className="text-lg font-bold text-[#1C2C5E] mb-2">模式多样</h3>
                  <p className="text-slate-600 leading-relaxed text-sm">支持激动剂（agonist）、拮抗剂（antagonist）、反向激动剂（inverse agonist）及变构调节剂（allosteric modulator）等多种检测模式</p>
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
                  <h3 className="text-lg font-bold text-[#1C2C5E] mb-2">可扩展</h3>
                  <p className="text-slate-600 leading-relaxed text-sm">支持高通量筛选，检测格式可从 96 孔扩展至 384、1536 乃至3456 孔</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Table Section */}
      <section className="bg-slate-50 py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProductTable title="检测试剂盒产品列表 (Detection Kits Portfolio)" data={allData} />
        </div>
      </section>

      {/* Technical Note Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-xl p-8 border border-slate-200 shadow-sm">
          <h4 className="text-[#4B827E] font-bold text-lg mb-4">技术说明</h4>
          <ul className="list-disc list-inside text-slate-600 space-y-2 text-sm leading-relaxed">
            <li><strong>HitHunter® cAMP:</strong> 利用 EFC 技术开发的均相竞争性免疫测定，专门用于测量细胞内 cAMP 水平的变化。</li>
            <li><strong>PathHunter® Detection:</strong> 通用的 EFC 检测底物，适用于所有表达 EA 和 PK 标签的工程化细胞系。</li>
            <li><strong>KILR® Detection:</strong> 专门用于监测细胞毒性的非放射性替代方案，通过释放标记的 EA 片段实现细胞裂解的定量。</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default DetectionKitsDetail;
