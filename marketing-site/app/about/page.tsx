// app/about/page.tsx
export const metadata = {
  title: "我们是谁｜关于我们"
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-screen-sm p-4 space-y-4">
      <h1 className="text-xl font-bold text-gray-900">我们是谁</h1>
      <p className="text-sm text-gray-700 leading-relaxed">
        我们是一个以“落地交付”为导向的小型技术团队。
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
          以及需要“小程序+后台”闭环的中小企业老板。
        </p>
      </div>

      <p className="text-xs text-gray-500 leading-relaxed">
        想了解我们能不能搞定你的需求？直接在任何案例详情页底部扫码加微信即可。
      </p>
    </div>
  );
}
