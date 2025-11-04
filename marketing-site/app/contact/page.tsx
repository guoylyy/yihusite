// app/contact/page.tsx
export const metadata = {
  title: "联系我们｜项目案例库"
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-screen-sm p-4 space-y-6">
      <h1 className="text-xl font-bold text-gray-900">联系我们</h1>
      
      <div className="space-y-4">
        <p className="text-sm text-gray-700 leading-relaxed">
          如果您有项目需求或合作意向，欢迎通过以下方式与我们联系。
          我们专注于为企业提供定制化的技术解决方案，确保项目顺利落地。
        </p>

        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm space-y-4">
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">联系方式</h2>
            <div className="space-y-2 text-sm text-gray-700">
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>电话：请通过微信联系</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>邮箱：请通过微信联系</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>地址：根据项目需求安排现场支持</span>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-4">
            <h3 className="text-md font-medium text-gray-900 mb-3">微信联系</h3>
            <div className="flex flex-col items-center space-y-3">
              <div className="bg-gray-100 p-4 rounded-lg">
                <div className="w-48 h-48 bg-white flex items-center justify-center border border-gray-300">
                  <span className="text-gray-500 text-sm">微信二维码</span>
                </div>
              </div>
              <p className="text-xs text-gray-500 text-center">
                扫描二维码添加微信<br/>
                请备注"项目咨询"
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-blue-200 bg-blue-50 p-4">
          <h3 className="text-md font-semibold text-blue-900 mb-2">服务承诺</h3>
          <ul className="text-sm text-blue-800 space-y-1">
            <li>• 24小时内响应咨询</li>
            <li>• 免费提供初步方案评估</li>
            <li>• 按里程碑交付，确保项目质量</li>
            <li>• 提供完整的部署和技术支持</li>
          </ul>
        </div>

        <p className="text-xs text-gray-500 leading-relaxed text-center">
          我们期待与您合作，共同打造优秀的项目成果。
        </p>
      </div>
    </div>
  );
}
