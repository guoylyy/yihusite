// components/FeatureList.tsx
import { Feature } from "@/lib/cases";

export default function FeatureList({ features }: { features: Feature[] }) {
  return (
    <div className="space-y-3">
      {features.map((f, i) => (
        <div
          key={i}
          className="rounded-xl border border-gray-200 p-4 shadow-sm bg-white"
        >
          <div className="text-base font-semibold text-gray-900">
            {f.title}
          </div>
          <div className="text-sm text-gray-600">{f.desc}</div>
        </div>
      ))}
    </div>
  );
}
