
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#4B827E] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-white text-lg font-bold mb-4 uppercase tracking-wider border-b border-white/20 pb-2 inline-block">关于我们 / About</h3>
          <p className="text-sm leading-relaxed text-white/90">
            Eurofins DiscoverX 是全球领先的生命科学解决方案供应商，致力于为药物研发提供先进的细胞系、试剂盒及定制化检测服务。
          </p>
        </div>
        <div>
          <h3 className="text-white text-lg font-bold mb-4 uppercase tracking-wider border-b border-white/20 pb-2 inline-block">核心产品 / Portfolio</h3>
          <ul className="text-sm space-y-2 text-white/90">
            <li className="hover:text-teal-200 cursor-pointer transition">PathHunter® GPCR 细胞系</li>
            <li className="hover:text-teal-200 cursor-pointer transition">HitHunter® cAMP 试剂盒</li>
            <li className="hover:text-teal-200 cursor-pointer transition">KILR® 细胞毒性监测</li>
            <li className="hover:text-teal-200 cursor-pointer transition">InCELL® 靶标结合分析</li>
          </ul>
        </div>
        <div>
          <h3 className="text-white text-lg font-bold mb-4 uppercase tracking-wider border-b border-white/20 pb-2 inline-block">技术支持 / Support</h3>
          <ul className="text-sm space-y-2 text-white/90">
            <li className="hover:text-teal-200 cursor-pointer transition">产品说明书 (Datasheet)</li>
            <li className="hover:text-teal-200 cursor-pointer transition">操作手册 (Manual)</li>
            <li className="hover:text-teal-200 cursor-pointer transition">技术白皮书下载</li>
          </ul>
        </div>
        <div>
          <h3 className="text-white text-lg font-bold mb-4 uppercase tracking-wider border-b border-white/20 pb-2 inline-block">联系我们 / Contact</h3>
          <p className="text-sm text-white/90 mb-2">地址：上海市闵行区浦江镇陈行公路2168号18号楼</p>
          <p className="text-sm text-white/90">邮箱：CustomerService_DRX_China@cpt.eurofinscn.com</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-white/20 text-center text-[10px]">
        <p className="text-white/70 uppercase tracking-[0.2em]">© 2024 Eurofins DiscoverX (China). All Rights Reserved. 沪ICP备XXXXXXXX号</p>
      </div>
    </footer>
  );
};

export default Footer;
