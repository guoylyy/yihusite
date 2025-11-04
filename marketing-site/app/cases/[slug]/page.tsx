// app/cases/[slug]/page.tsx
import Image from "next/image";
import FeatureList from "@/components/FeatureList";
import ValueList from "@/components/ValueList";
import CaseCTA from "@/components/CaseCTA";
import { getAllCases, getCaseBySlug } from "@/lib/cases";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return getAllCases().map((c) => ({ slug: c.slug }));
}

export default function CasePage({
  params
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const data = getCaseBySlug(slug);

  if (!data) {
    notFound();
  }

  return (
    <>
      <article className="mx-auto max-w-screen-sm p-4 pb-32 space-y-8">
        {/* 标题 / 背景 */}
        <section className="space-y-2">
          <h1 className="text-2xl font-bold text-gray-900">
            {data!.title}
          </h1>
          <p className="text-sm text-gray-600 leading-relaxed">
            {data!.tagline}
          </p>

          <div className="flex flex-wrap gap-2 text-xs text-gray-500">
            <span className="rounded-lg bg-gray-100 px-2 py-1">
              {data!.industry}
            </span>
            <span className="rounded-lg bg-gray-100 px-2 py-1">
              交付周期 {data!.duration_weeks} 周
            </span>
            <span className="rounded-lg bg-gray-100 px-2 py-1">
              成本区间 {data!.cost_range}
            </span>
          </div>
        </section>

        {/* 客户背景 & 我们交付了什么 */}
        <section className="space-y-4">
          <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-900">
              项目概览
            </h2>
            <div className="mt-2 text-sm text-gray-700 leading-relaxed space-y-2">
              <p>
                <span className="font-medium text-gray-900">
                  客户背景：
                </span>{" "}
                {data!.client_profile}
              </p>
              <p>
                <span className="font-medium text-gray-900">
                  他们的痛点：
                </span>{" "}
                {data!.problem}
              </p>
              <p>
                <span className="font-medium text-gray-900">
                  我们交付：
                </span>{" "}
                {data!.solution_summary}
              </p>
            </div>
          </div>
        </section>

        {/* 功能模块清单 */}
        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-gray-900">
            关键功能模块
          </h2>
          <FeatureList features={data!.features} />
        </section>

        {/* 技术亮点 / 先进性 */}
        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-gray-900">
            我们方案的先进性
          </h2>
          <ul className="list-disc pl-5 text-sm text-gray-700 space-y-2 leading-relaxed">
            {data!.tech_highlights.map((t, i) => (
              <li key={i}>{t}</li>
            ))}
          </ul>
        </section>

        {/* 业务价值 */}
        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-gray-900">
            给客户带来的业务价值
          </h2>
          <ValueList values={data!.business_value} />
        </section>

        {/* 截图 / 演示素材 */}
        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-gray-900">
            实际交付界面 / 现场截图
          </h2>

          <div className="grid gap-4">
            {data!.media.map((m, i) => (
              <figure
                key={i}
                className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm"
              >
                {m.type === "image" ? (
                  <Image
                    src={m.url}
                    alt={m.caption}
                    width={800}
                    height={450}
                    className="w-full rounded-xl border border-gray-100 object-cover"
                  />
                ) : m.type === "video" ? (
                  <video
                    src={m.url}
                    controls
                    className="w-full rounded-xl border border-gray-100"
                  />
                ) : (
                  <div className="text-sm text-gray-500">
                    {m.caption}（图示）
                  </div>
                )}
                <figcaption className="mt-2 text-xs text-gray-500">
                  {m.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* 合作模式 & 价格档位 */}
        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-gray-900">
            合作怎么开始？价格大概在哪个区间？
          </h2>

          <ol className="list-decimal pl-5 text-sm text-gray-700 space-y-1 leading-relaxed">
            <li>先聊需求（30分钟即可）</li>
            <li>我们给出范围界定 + 粗报价</li>
            <li>签约并按里程碑交付</li>
          </ol>

          <div className="grid gap-3">
            {data!.pricing_tiers.map((tier, i) => (
              <div
                key={i}
                className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm"
              >
                <div className="flex items-start justify-between">
                  <div className="text-base font-semibold text-gray-900">
                    {tier.name}
                  </div>
                  <div className="text-xs font-bold text-green-700 bg-green-100 px-2 py-1 rounded-lg">
                    {tier.price_hint}
                  </div>
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  交付周期 {tier.delivery_weeks} 周
                </div>

                <ul className="mt-2 text-sm text-gray-700 list-disc pl-5 space-y-1 leading-relaxed">
                  {tier.includes.map((inc, j) => (
                    <li key={j}>{inc}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="rounded-xl border border-yellow-200 bg-yellow-50 p-3 text-xs text-gray-800 leading-relaxed">
            说明：以上为典型价位带宽，用于让你快速判断量级。
            具体报价会根据你的模块范围、交互复杂度、部署方式（云 or 私有化）微调。
          </div>
        </section>

        <section className="pb-24 text-center text-xs text-gray-400">
          —— 看完了？想做类似的系统？页面底部可以直接加我微信 ——
        </section>
      </article>

      <CaseCTA
        wechatId={data!.cta.wechat_id}
        wechatQR={data!.cta.wechat_qr}
        phone={data!.cta.phone}
      />
    </>
  );
}
