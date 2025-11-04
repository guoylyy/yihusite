// lib/cases.ts

export type Feature = {
  title: string;
  desc: string;
};

export type ValuePoint = {
  title: string;
  desc: string;
  metric?: string;
};

export type PricingTier = {
  name: string;
  price_hint: string;
  delivery_weeks: number;
  includes: string[];
};

export type CaseData = {
  slug: string;
  title: string;
  tagline: string;
  industry: string;
  client_profile: string;
  problem: string;
  solution_summary: string;
  duration_weeks: number;
  cost_range: string;
  features: Feature[];
  tech_highlights: string[];
  business_value: ValuePoint[];
  media: {
    type: "image" | "video" | "diagram";
    url: string;
    caption: string;
  }[];
  pricing_tiers: PricingTier[];
  cta: {
    wechat_id: string;
    wechat_qr: string; // /qr/wechat.png
    phone?: string;
  };
};

// === DEMO CASE ===
const demoCase: CaseData = {
  slug: "elevator-maintenance-platform",
  title: "电梯远程维保平台",
  tagline:
    "从“电话+微信群+Excel”升级到自动派单、现场回执、实时监控，维保派工效率缩短到10分钟内",
  industry: "电梯维保 / 物业运维",
  client_profile:
    "华东某大型电梯运维公司（200+台设备，原本靠Excel排班和人工电话调度）",
  problem:
    "现场师傅获取任务慢、调度人员要来回打电话确认状态、老板无法实时看到停梯情况，客户抱怨响应慢。",
  solution_summary:
    "我们交付了派单调度、师傅工单APP、远程监控大屏、客户微信报修入口，打通从报修到结单的全流程。",
  duration_weeks: 8,
  cost_range: "20万~30万元区间",
  features: [
    {
      title: "自动派单调度",
      desc: "系统按区域/技能自动分配师傅；特殊情况可手动一键指派。"
    },
    {
      title: "现场工单回执",
      desc: "师傅到场后手机拍照取证，客户电子签字即回传后台。"
    },
    {
      title: "远程监控大屏",
      desc: "停梯告警、维修进度、SLA响应时间一目了然。"
    },
    {
      title: "客户微信一键报修",
      desc: "业主/物业可用小程序直接报修，信息自动进入工单池。"
    }
  ],
  tech_highlights: [
    "前端：React/Next.js 16 + 移动端小程序壳；适配手机、Pad、PC大屏。",
    "后端：Node 服务 + 实时推送（WebSocket），支持企业内网私有化部署。",
    "数据：所有工单沉淀，可导出报表给老板看月度/季度绩效。"
  ],
  business_value: [
    {
      title: "调度效率提升",
      desc: "原来同一城市要2名调度专员，现在一人+系统就够。",
      metric: "人工调度 ↓50%以上"
    },
    {
      title: "响应速度更快",
      desc: "从客户报修到师傅接单，平均从2小时压缩到10分钟内。"
    },
    {
      title: "老板有可视化管理",
      desc: "实时停梯列表、未结单工单、逾期风险一眼能看，方便追责和复盘。"
    }
  ],
  media: [
    {
      type: "image",
      url: "/cases/demo/dashboard.png",
      caption: "管理后台大屏：在线设备、停梯告警、工单进度"
    },
    {
      type: "image",
      url: "/cases/demo/mobile-ui.png",
      caption: "维修师傅手机端：接单→到场→拍照取证→客户签字"
    }
  ],
  pricing_tiers: [
    {
      name: "标准功能 + 小定制",
      price_hint: "8~12万",
      delivery_weeks: 4,
      includes: ["基础工单流转", "维修师傅APP", "简单报表导出"]
    },
    {
      name: "深度定制 + 私有化部署",
      price_hint: "20~30万",
      delivery_weeks: 8,
      includes: [
        "自动派单调度引擎",
        "大屏监控中心",
        "微信报修入口",
        "本地化部署"
      ]
    }
  ],
  cta: {
    wechat_id: "your-wechat-id-here",
    wechat_qr: "/qr/wechat.png",
    phone: "133-0000-0000"
  }
};

export const CASES: CaseData[] = [demoCase];

export function getAllCases(): CaseData[] {
  return CASES;
}

export function getCaseBySlug(slug: string): CaseData | undefined {
  return CASES.find((c) => c.slug === slug);
}
