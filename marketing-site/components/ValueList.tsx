// components/ValueList.tsx
import { ValuePoint } from "@/lib/cases";

export default function ValueList({ values }: { values: ValuePoint[] }) {
  return (
    <div className="space-y-3">
      {values.map((v, i) => (
        <div
          key={i}
          className="rounded-xl border border-green-200 bg-green-50 p-4 shadow-sm"
        >
          <div className="flex items-start justify-between gap-2">
            <div className="text-base font-semibold text-gray-900">
              {v.title}
            </div>
            {v.metric ? (
              <div className="text-xs font-medium text-green-700 bg-green-100 px-2 py-1 rounded-lg">
                {v.metric}
              </div>
            ) : null}
          </div>
          <div className="text-sm text-gray-700">{v.desc}</div>
        </div>
      ))}
    </div>
  );
}
