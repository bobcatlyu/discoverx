
import React from 'react';

const DatasheetDetail: React.FC = () => {
  return (
    <div className="bg-slate-100 py-12 min-h-screen font-sans">
      <div className="max-w-[1000px] mx-auto bg-white shadow-2xl p-16 border border-slate-200">
        
        {/* PDF Header Section - Updated to Theme Green */}
        <div className="flex justify-between items-start mb-12 border-b-2 border-[#4B827E] pb-8">
          <div className="flex items-center">
            <div className="bg-[#4B827E] p-1.5 rounded-sm mr-3">
              <svg className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                 <circle cx="12" cy="12" r="10" />
                 <circle cx="12" cy="12" r="4" fill="white" fillOpacity="0.3" />
              </svg>
            </div>
            <div>
              <span className="text-3xl font-black text-[#4B827E] tracking-tight">DiscoverX</span>
            </div>
          </div>
          <div className="text-right">
             <button className="bg-[#4B827E] text-white px-4 py-2 rounded font-bold text-sm flex items-center hover:bg-[#3d6b67] transition shadow-md">
               <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
               </svg>
               DOWNLOAD PDF
             </button>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-3xl font-black text-slate-900 mb-8">PathHunter® CHO-K1 GLP1R β-Arrestin Cell Line</h1>

        {/* Catalog Info Table */}
        <div className="grid grid-cols-2 gap-8 mb-12">
          <div className="flex items-baseline border-b border-slate-100 py-2">
            <span className="font-bold text-sm text-slate-800 w-40">Catalog Number:</span>
            <span className="text-sm text-slate-600">93-0300C2</span>
          </div>
          <div className="flex items-baseline border-b border-slate-100 py-2">
            <span className="font-bold text-sm text-slate-800 w-40">Lot Number:</span>
            <span className="text-sm text-slate-600">See Vial</span>
          </div>
          <div className="flex items-baseline border-b border-slate-100 py-2 col-span-2">
            <span className="font-bold text-sm text-slate-800 w-40">Contents:</span>
            <span className="text-sm text-slate-600">2 vials, 1 x 10⁶ cells per vial in 1 mL</span>
          </div>
        </div>

        {/* Background Section */}
        <div className="mb-10">
          <h2 className="text-lg font-bold text-[#4B827E] mb-4 uppercase tracking-wider">Background</h2>
          <p className="text-slate-700 text-sm leading-relaxed text-justify">
            PathHunter β-Arrestin GPCR cell lines are engineered to co-express the ProLink™ (PK) tagged GPCR and the Enzyme Acceptor (EA) tagged β-Arrestin. Activation of the GPCR-PK induces β-Arrestin-EA recruitment, forcing complementation of the two β-galactosidase enzyme fragments (EA and PK). The resulting functional enzyme hydrolyzes substrate to generate a chemiluminescent signal.
          </p>
        </div>

        {/* Product Information Grid */}
        <div className="mb-12">
          <h2 className="text-lg font-bold text-[#4B827E] mb-6 uppercase tracking-wider">Product Information</h2>
          <div className="grid grid-cols-2 gap-x-12 gap-y-3">
            {[
              { label: 'Target GPCR:', value: 'GLP1R' },
              { label: 'Description:', value: 'Glucagon-like peptide receptor 1' },
              { label: 'Receptor Family:', value: 'Glucagon' },
              { label: 'Coupling:', value: 'Gs' },
              { label: 'Accession Number:', value: 'NM_002062.3' },
              { label: 'GPCR Species:', value: 'Human' },
              { label: 'β-Arrestin Isoform:', value: 'β-Arrestin-2' },
              { label: 'ProLink™ Tag:', value: 'PK1' },
              { label: 'Cell Type:', value: 'CHO-K1' },
              { label: 'Storage:', value: 'Short term (<24 h): Store at -80°C; Long term (>24 h): Store in vapor phase of liquid nitrogen.' }
            ].map((info, idx) => (
              <div key={idx} className={`flex items-start py-1 ${idx === 9 ? 'col-span-2' : ''}`}>
                <span className="font-bold text-xs text-slate-800 w-44 shrink-0">{info.label}</span>
                <span className="text-xs text-slate-600">{info.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Functional Performance Section */}
        <div className="mb-12">
          <h2 className="text-lg font-bold text-[#4B827E] mb-6 uppercase tracking-wider">Functional Performance</h2>
          <p className="text-slate-700 text-xs leading-relaxed mb-8">
            Cells were plated in a 384-well plate and incubated overnight at 37°C and 5% CO₂ to allow the cells to attach and grow. Cells were then stimulated with a control agonist, using the assay conditions described below. Following stimulation, signal was detected using the PathHunter Detection Kit according to the recommended protocol.
          </p>

          <div className="flex gap-12 items-center">
            {/* Chart Area */}
            <div className="w-1/2 border border-slate-200 p-4 rounded bg-slate-50">
               <img 
                 src="https://picsum.photos/seed/assay_chart/400/300" 
                 alt="Functional Assay Chart" 
                 className="w-full h-auto"
               />
               <p className="text-[10px] text-center mt-2 text-slate-500 font-bold uppercase">Exendin-4 [M]</p>
            </div>
            
            {/* Stats Table */}
            <div className="w-1/2 space-y-2">
              {[
                { label: 'Cell Number/Well:', value: '2400' },
                { label: 'Control Agonist:', value: 'Exendin-4', bold: true },
                { label: 'Agonist Incubation Time (minutes):', value: '90' },
                { label: 'Agonist Incubation Temp (°C):', value: '37' },
                { label: 'EC₅₀ for Agonist Stimulation (nM):', value: '2.2', highlight: true },
                { label: 'Signal:Background at Agonist Emax:', value: '19.2' },
                { label: 'Control Antagonist:', value: 'Exendin-3(9-39)-NH₂', bold: true },
                { label: 'IC₅₀ of Antagonist (nM):', value: '75.6', highlight: true }
              ].map((row, idx) => (
                <div key={idx} className="flex justify-between border-b border-slate-100 py-1">
                  <span className={`text-[11px] text-slate-700 ${row.bold ? 'font-black underline' : ''}`}>{row.label}</span>
                  <span className={`text-[11px] font-mono ${row.highlight ? 'text-teal-600 font-bold' : 'text-slate-600'}`}>{row.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Page Footer Mock */}
        <div className="border-t border-slate-200 pt-8 mt-12 flex justify-between items-center text-[10px] text-slate-400 font-bold">
           <span>93-0300C2</span>
           <span>PathHunter® CHO-K1 GLP1R β-Arrestin Cell Line</span>
           <span>See Vial</span>
           <span>20170526</span>
           <span>1</span>
        </div>
      </div>
      
      {/* Page 2 Materials Section */}
      <div className="max-w-[1000px] mx-auto bg-white shadow-2xl p-16 border border-slate-200 mt-8">
        <h2 className="text-xl font-bold text-[#4B827E] mb-6 uppercase tracking-wider">Required Materials</h2>
        <table className="w-full text-xs border-collapse">
          <thead>
            <tr className="bg-slate-50 text-slate-600 border-b-2 border-slate-200">
              <th className="text-left py-3 px-4 border-r border-slate-200">Product Use*</th>
              <th className="text-left py-3 px-4 border-r border-slate-200">Product Description</th>
              <th className="text-left py-3 px-4">Catalog Number</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 border-b border-slate-200">
            {[
              { use: 'Detection', desc: 'PathHunter® Detection Kit', cat: '93-0001' },
              { use: 'Cell Culture', desc: 'AssayComplete™ Cell Culture Kit-107', cat: '92-3107G' },
              { use: 'Cell Plating', desc: 'AssayComplete™ Cell Plating 2 Reagent', cat: '93-0563R2A' },
              { use: 'Cell Detachment', desc: 'AssayComplete™ Cell Detachment Reagent', cat: '92-0009' },
              { use: 'Cell Thawing', desc: 'AssayComplete™ Thawing Reagent T2', cat: '92-4102TR' },
              { use: 'Cell Freezing', desc: 'AssayComplete™ Freezing Reagent F2', cat: '92-5102FR' }
            ].map((m, i) => (
              <tr key={i} className="hover:bg-teal-50/20">
                <td className="py-3 px-4 border-r border-slate-200 text-slate-900 font-bold">{m.use}</td>
                <td className="py-3 px-4 border-r border-slate-200 text-slate-700">{m.desc}</td>
                <td className="py-3 px-4 text-slate-600 font-mono">{m.cat}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="text-[10px] text-slate-400 mt-4 italic">*Please inquire about our cell line-specific AssayComplete Starter Packs to get you started.</p>
      </div>
    </div>
  );
};

export default DatasheetDetail;
