// app/layout.tsx
import "./globals.css";
import type { ReactNode } from "react";
import Header from "@/components/Header";

export const metadata = {
  title: "项目案例库｜定制软件交付能力展示",
  description:
    "我们为制造业、服务业、线下运营团队打造定制系统：排产、派单、巡检、可视化大屏、微信入口，一站式交付。"
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="zh-CN">
      <body className="bg-white text-gray-900">
        <Header />
        <main className="min-h-screen pb-24 pt-16">{children}</main>
      </body>
    </html>
  );
}
