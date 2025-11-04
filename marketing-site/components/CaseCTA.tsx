// components/CaseCTA.tsx
"use client";

import Image from "next/image";
import { useState } from "react";

export default function CaseCTA({
  wechatId,
  wechatQR,
  phone
}: {
  wechatId: string;
  wechatQR: string;
  phone?: string;
}) {
  const [copied, setCopied] = useState(false);

  async function copyWechat() {
    try {
      await navigator.clipboard.writeText(wechatId);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Copy failed", err);
    }
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-gray-200 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto flex max-w-screen-sm items-center gap-3 p-3">
        <div className="flex items-center gap-2">
          <div className="h-12 w-12 overflow-hidden rounded-xl border border-gray-200 bg-white p-1">
            <Image
              src={wechatQR}
              alt="微信二维码"
              width={48}
              height={48}
              className="h-full w-full object-cover rounded-lg"
            />
          </div>
          <div className="flex flex-col text-xs leading-tight text-gray-700">
            <span className="font-semibold text-gray-900">
              想做类似系统？
            </span>
            <span>加我微信聊需求</span>
            <span className="text-gray-500">微信：{wechatId}</span>
            {phone ? (
              <span className="text-gray-500">电话：{phone}</span>
            ) : null}
          </div>
        </div>

        <div className="ml-auto flex flex-col gap-2">
          <button
            onClick={copyWechat}
            className="rounded-xl bg-green-600 px-3 py-2 text-xs font-semibold text-white shadow-lg active:scale-95"
          >
            {copied ? "已复制微信号" : "复制微信号"}
          </button>

          <a
            href={phone ? `tel:${phone}` : "#"}
            className="text-[10px] text-gray-500 underline"
          >
            {phone ? "电话沟通" : "微信扫码"}
          </a>
        </div>
      </div>
    </div>
  );
}
