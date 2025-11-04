// app/page.tsx
import CaseCard from "@/components/CaseCard";
import { getAllCases } from "@/lib/cases";

export default function HomePage() {
  const cases = getAllCases();

  return (
    <div className="mx-auto max-w-screen-sm p-4 space-y-8">
      <section className="space-y-2">
        <h1 className="text-2xl font-bold text-gray-900">我们做什么？</h1>
        <p className="text-sm text-gray-600 leading-relaxed">
          我们是一个“定制业务系统交付团队”。从业务痛点出发，交付真实上线的软件产物，
          而不是PPT。典型场景包括：现场工单/维保调度、工厂排产与看板、私域小程序、
          3D可视化配置工具等。
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-900">
          我们近期的实际案例
        </h2>

        <div className="grid gap-4">
          {cases.map((c) => (
            <CaseCard key={c.slug} data={c} />
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-gray-200 bg-gray-50 p-4 shadow-sm">
        <div className="text-base font-semibold text-gray-900">
          为什么客户找我们？
        </div>
        <ul className="mt-2 list-disc pl-5 text-sm text-gray-700 space-y-1">
          <li>能落地：我们交付的是可用系统，而不是方案幻灯片。</li>
          <li>懂现场：我们会跟一线操作/老板谈清楚真实流程。</li>
          <li>快上线：以 4~8 周为交付节奏，别拖半年。</li>
        </ul>
      </section>
    </div>
  );
}
