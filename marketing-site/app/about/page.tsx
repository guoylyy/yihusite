// app/about/page.tsx
export const metadata = {
  title: "我们是谁｜关于我们"
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-screen-sm p-4 space-y-6">
      <h1 className="text-xl font-bold text-gray-900">我们是谁</h1>
      <p className="text-sm text-gray-700 leading-relaxed">
        我们是一个以"落地交付"为导向的小型技术团队。
        我们不靠卖咨询PPT赚钱，而是直接把系统做出来，部署到客户现场，
        真正被一线员工/老板日常使用。
      </p>

      <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm text-sm text-gray-700 leading-relaxed space-y-2">
        <p>
          核心能力包括：业务流程梳理、产品原型、前端/后端研发、部署交付、
          后续运营和迭代。典型交付周期 4~8 周，按里程碑签收。
        </p>
        <p>
          我们目前主要服务于：制造业工厂、售后/运维团队、物业/维保团队、
          以及需要"小程序+后台"闭环的中小企业老板。
        </p>
      </div>

      {/* 公司基本信息 */}
      <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
        <h2 className="text-lg font-semibold text-gray-900 mb-3">公司基本信息</h2>
        <div className="text-sm text-gray-700 space-y-2">
          <p><span className="font-medium">公司名称：</span>上海以虎科技有限公司</p>
          <p><span className="font-medium">成立时间：</span>2019年8月</p>
          <p><span className="font-medium">注册资金：</span>500万元</p>
          <p><span className="font-medium">公司地址：</span>上海江桥镇西郊商务区C1六号楼301</p>
          <p><span className="font-medium">联系电话：</span>+86 18516171260</p>
          <p><span className="font-medium">邮箱：</span>guoyiliang@yihukeji.cn</p>
        </div>
      </div>

      {/* 公司概况 */}
      <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
        <h2 className="text-lg font-semibold text-gray-900 mb-3">公司概况</h2>
        <div className="text-sm text-gray-700 space-y-2">
          <p>成立于2019年08月，注册于同济大学科技园，是该科技园重点孵化企业。</p>
          <p>一家实力雄厚、管理严格且具备丰富施工经验的现代软件研发企业。</p>
          <p>现有职工30余名，其中90%为技术开发、测试、产品类专业人员，核心团队具备较强的技术研发能力。</p>
        </div>
      </div>

      {/* 业务类型 */}
      <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
        <h2 className="text-lg font-semibold text-gray-900 mb-3">业务类型</h2>
        <div className="text-sm text-gray-700 space-y-2">
          <p className="font-medium">主项业务：</p>
          <ul className="list-disc list-inside ml-2">
            <li>企业信息化软件承包研发</li>
          </ul>
          <p className="font-medium mt-2">增项业务：</p>
          <ul className="list-disc list-inside ml-2">
            <li>企业ERP软件研发</li>
            <li>企业培训Training系统研发</li>
            <li>企业客户CRM、营销系统研发</li>
            <li>车载HMI人机交互测试程序研发</li>
            <li>车载娱乐系统研发</li>
            <li>教育音视频、直播软件研发</li>
          </ul>
        </div>
      </div>

      {/* 合作客户 */}
      <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
        <h2 className="text-lg font-semibold text-gray-900 mb-3">合作客户</h2>
        <div className="text-sm text-gray-700 space-y-2">
          <p className="font-medium">汽车行业：</p>
          <p>大众集团、尼桑汽车、宝马集团、PSA汽车、上汽零束、保时捷公司、上汽大众、PSA GROUPE、PEUGEOT</p>
          <p className="font-medium mt-2">院校机构：</p>
          <p>同济大学、哈佛大学</p>
        </div>
      </div>

      {/* 经营业绩与服务宗旨 */}
      <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
        <h2 className="text-lg font-semibold text-gray-900 mb-3">经营业绩与服务宗旨</h2>
        <div className="text-sm text-gray-700 space-y-2">
          <p>近年来，每年完成各类技术研发等工程业务金额达800万元以上。</p>
          <p><span className="font-medium">核心宗旨：</span>效率第一、质量第一、用户至上。</p>
          <p><span className="font-medium">管理原则：</span>严格科学管理，狠抓规范技术方案，确保项目质量，凭借专业服务赢得合作甲方的一致好评。</p>
        </div>
      </div>

      <p className="text-xs text-gray-500 leading-relaxed">
        想了解我们能不能搞定你的需求？直接在任何案例详情页底部扫码加微信即可。
      </p>
    </div>
  );
}
