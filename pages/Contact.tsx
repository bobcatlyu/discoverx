import React from 'react';

const Contact: React.FC = () => {
  const companyEmail = 'CustomerService_DRX_China@cpt.eurofinscn.com';

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid gap-16 md:grid-cols-2">
        <div>
          <h2 className="mb-4 text-3xl font-bold text-slate-900">联系我们</h2>
          <p className="mb-8 leading-relaxed text-slate-600">
            欧陆生物制品（上海）有限公司是 Eurofins 集团在中国的全资子公司，全面负责 DiscoverX 系列产品在中国的销售、市场推广和技术支持。
          </p>
          <p className="mb-8 leading-relaxed text-slate-600">
            如需获取报价、索取样品或咨询技术问题，请直接通过页面显示的邮箱地址发送邮件，我们会尽快与您联系。
          </p>

          <div className="space-y-6">
            <div className="flex items-start">
              <div className="mr-4 rounded-lg border border-teal-100 bg-teal-50 p-3 text-[#4B827E]">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>

              <div>
                <h4 className="font-bold text-slate-800">上海办公室</h4>
                <p className="text-sm text-slate-600">上海市闵行区浦江镇陈行公路 2168 号 8 号楼</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="mr-4 rounded-lg border border-teal-100 bg-teal-50 p-3 text-[#4B827E]">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-slate-800">电子邮箱</h4>
                <a href={`mailto:${companyEmail}`} className="text-sm text-[#4B827E] underline decoration-teal-200 underline-offset-4 transition hover:text-[#3d6b67]">
                  {companyEmail}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-start justify-center md:justify-end">
          <div className="w-full max-w-md overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-lg">
            <img
              src="/pic/qrcode_for_gh_97a0bd4fdaad_430.jpg"
              className="h-auto w-full object-contain"
              alt="DiscoverX 微信二维码"
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;
