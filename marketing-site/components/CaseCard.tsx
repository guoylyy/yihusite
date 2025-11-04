// components/CaseCard.tsx
import Link from "next/link";
import { CaseData } from "@/lib/cases";
import Image from "next/image";

export default function CaseCard({ data }: { data: CaseData }) {
  // 获取第一张图片作为封面
  const coverImage = data.media?.find(media => media.type === "image");

  return (
    <Link
      href={`/cases/${data.slug}`}
      className="block rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
    >
      <div className="flex flex-col md:flex-row">
        {/* 图片区域 */}
        <div className="md:w-1/3 h-48 md:h-auto bg-gray-100 relative">
          {coverImage ? (
            <Image
              src={coverImage.url}
              alt={coverImage.caption}
              fill
              className="object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-400">
              <span>暂无图片</span>
            </div>
          )}
        </div>
        
        {/* 内容区域 */}
        <div className="md:w-2/3 p-4">
          <h3 className="text-lg font-semibold text-gray-900">{data.title}</h3>
          <p className="mt-1 text-sm text-gray-600 line-clamp-2">{data.tagline}</p>

          <div className="mt-3 flex flex-wrap text-xs text-gray-500 gap-2">
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
      </div>
    </Link>
  );
}
