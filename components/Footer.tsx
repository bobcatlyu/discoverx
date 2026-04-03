import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#4B827E] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-white text-lg font-bold mb-4 uppercase tracking-wider border-b border-white/20 pb-2 inline-block">
            关于我们
          </h3>
          <p className="text-sm leading-relaxed text-white/90">
            Eurofins DiscoverX 聚焦药物研发相关的细胞模型、试剂盒、工具产品与定制化检测服务，支持从早期筛选到机制验证的关键环节。
          </p>
        </div>
        <div>
          <h3 className="text-white text-lg font-bold mb-4 uppercase tracking-wider border-b border-white/20 pb-2 inline-block">
            核心产品
          </h3>
          <ul className="text-sm space-y-2 text-white/90">
            <li className="hover:text-teal-200 cursor-pointer transition">PathHunter GPCR 细胞系</li>
            <li className="hover:text-teal-200 cursor-pointer transition">HitHunter cAMP 试剂盒</li>
            <li className="hover:text-teal-200 cursor-pointer transition">KILR 细胞毒性监测</li>
            <li className="hover:text-teal-200 cursor-pointer transition">InCELL 靶标结合分析</li>
          </ul>
        </div>
        <div>
          <h3 className="text-white text-lg font-bold mb-4 uppercase tracking-wider border-b border-white/20 pb-2 inline-block">
            技术支持
          </h3>
          <ul className="text-sm space-y-2 text-white/90">
            <li className="hover:text-teal-200 cursor-pointer transition">产品说明书</li>
            <li className="hover:text-teal-200 cursor-pointer transition">用户手册</li>
            <li className="hover:text-teal-200 cursor-pointer transition">技术应用资料</li>
          </ul>
        </div>
        <div>
          <h3 className="text-white text-lg font-bold mb-4 uppercase tracking-wider border-b border-white/20 pb-2 inline-block">
            联系我们
          </h3>
          <p className="text-sm text-white/90 mb-2">地址：上海市闵行区浦江镇陈行公路 2168 号 8 号楼</p>
          <p className="text-sm text-white/90">邮箱：CustomerService_DRX_China@cpt.eurofinscn.com</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-white/20 text-center text-[10px]">
        <p className="text-white/70 uppercase tracking-[0.2em]">© 2024 Eurofins DiscoverX (China). All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
