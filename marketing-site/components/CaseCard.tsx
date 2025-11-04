// components/CaseCard.tsx
import Link from "next/link";
import { CaseData } from "@/lib/cases";

export default function CaseCard({ data }: { data: CaseData }) {
  return (
    <Link
      href={`/cases/${data.slug}`}
      className="block rounded-2xl border border-gray-200 p-4 shadow-sm hover:shadow-lg transition-shadow"
    >
      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-semibold text-gray-900">{data.title}</h3>
        <p className="text-sm text-gray-600">{data.tagline}</p>

        <div className="flex flex-wrap text-xs text-gray-500 gap-2">
          <span className="rounded-lg bg-gray-100 px-2 py-1">
            {data.industry}
          </span>
          <span className="rounded-lg bg-gray-100 px-2 py-1">
            交付 {data.duration_weeks} 周
          </span>
          <span className="rounded-lg bg-gray-100 px-2 py-1">
            成本 {data.cost_range}
          </span>
        </div>
      </div>
    </Link>
  );
}
