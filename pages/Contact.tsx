import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const companyEmail = 'CustomerService_DRX_China@cpt.eurofinscn.com';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid gap-16 md:grid-cols-2">
        <div>
          <h2 className="mb-4 text-3xl font-bold text-slate-900">联系我们</h2>
          <p className="mb-8 leading-relaxed text-slate-600">
            欧陆科仪（上海）有限公司是 Eurofins 集团在中国的全资子公司，全面负责 DiscoverX
            系列产品在中国的销售、市场推广和技术支持。
          </p>
          <p className="mb-8 leading-relaxed text-slate-600">
            如需获取报价、索取样品或咨询技术问题，请填写右侧表单。我们的销售或技术支持团队会尽快与您联系。
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
                <p className="text-sm text-slate-600">{companyEmail}</p>
              </div>
            </div>
          </div>

          <div className="mt-12 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-lg">
            <img
              src="/pic/qrcode_for_gh_97a0bd4fdaad_430.jpg"
              className="h-auto w-full object-contain"
              alt="DiscoverX 微信二维码"
            />
          </div>
        </div>

        <div className="rounded-2xl border border-slate-100 bg-white p-8 shadow-xl">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-xs font-bold uppercase text-slate-500">
                    姓名 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 transition-all focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#4B827E]/50"
                    placeholder="请输入您的姓名"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-xs font-bold uppercase text-slate-500">
                    公司/机构 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 transition-all focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#4B827E]/50"
                    placeholder="请输入单位名称"
                  />
                </div>
              </div>
              <div>
                <label className="mb-2 block text-xs font-bold uppercase text-slate-500">
                  邮箱地址 <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  required
                  className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 transition-all focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#4B827E]/50"
                  placeholder="example@domain.com"
                />
              </div>
              <div>
                <label className="mb-2 block text-xs font-bold uppercase text-slate-500">咨询类型</label>
                <select className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 transition-all focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#4B827E]/50">
                  <option>产品咨询</option>
                  <option>开发服务</option>
                  <option>技术支持</option>
                  <option>索取资料</option>
                </select>
              </div>
              <div>
                <label className="mb-2 block text-xs font-bold uppercase text-slate-500">留言信息</label>
                <textarea
                  rows={4}
                  className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 transition-all focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#4B827E]/50"
                  placeholder="请写下您的问题或具体需求"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-lg bg-[#4B827E] py-4 font-bold uppercase tracking-widest text-white shadow-lg shadow-teal-100 transition hover:bg-[#3d6b67]"
              >
                提交咨询
              </button>
            </form>
          ) : (
            <div className="py-20 text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-teal-50 text-[#4B827E]">
                <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="mb-2 text-2xl font-bold text-slate-800">感谢您的咨询</h3>
              <p className="mb-4 text-slate-600">您的留言已经提交，您也可以通过以下邮箱直接联系我们：</p>
              <p className="mb-6 text-lg font-bold text-[#4B827E]">{companyEmail}</p>
              <button
                onClick={() => setSubmitted(false)}
                className="border-b border-slate-200 text-xs font-bold text-slate-400 transition-colors hover:border-[#4B827E] hover:text-[#4B827E]"
              >
                返回重新填写
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
