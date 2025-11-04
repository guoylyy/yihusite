// app/cases/page.tsx
import CaseCard from "@/components/CaseCard";
import { getAllCases } from "@/lib/cases";

export const metadata = {
  title: "全部案例｜定制系统交付清单"
};

export default function CasesPage() {
  const cases = getAllCases();

  return (
    <div className="mx-auto max-w-screen-md p-4 space-y-6">
      <header className="space-y-1">
        <h1 className="text-xl font-bold text-gray-900">
          我们已经交付过的方向
        </h1>
        <p className="text-sm text-gray-600 leading-relaxed">
          以下是我们真实落地或标准化打包能力的案例。点击任意卡片可查看
          功能清单、技术亮点、报价区间和交付周期。
        </p>
      </header>

      <div className="grid gap-6">
        {cases.map((c) => (
          <CaseCard key={c.slug} data={c} />
        ))}
      </div>
    </div>
  );
}
