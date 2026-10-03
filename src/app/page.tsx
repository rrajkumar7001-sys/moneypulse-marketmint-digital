"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type IconName =
  | "home"
  | "companies"
  | "products"
  | "campaigns"
  | "creatives"
  | "pages"
  | "leads"
  | "approvals"
  | "analytics"
  | "settings"
  | "traffic"
  | "reach"
  | "conversion"
  | "menu"
  | "close"
  | "search"
  | "plus"
  | "arrow"
  | "spark"
  | "chart"
  | "source"
  | "recent"
  | "bolt";

type Workspace = {
  id: number;
  slug: string;
  name: string;
  shortName: string;
  industry: string;
  traffic: number;
  reach: number;
  leads: number;
  conversion: string;
  campaigns: number;
  status: string;
};

const workspaces: Workspace[] = [
  {
    id: 1,
    slug: "anand-rathi",
    name: "Anand Rathi",
    shortName: "AR",
    industry: "Finance & Wealth",
    traffic: 0,
    reach: 0,
    leads: 0,
    conversion: "0.00%",
    campaigns: 0,
    status: "Setup",
  },
  {
    id: 2,
    slug: "motilal-oswal",
    name: "Motilal Oswal",
    shortName: "MO",
    industry: "Finance & Wealth",
    traffic: 0,
    reach: 0,
    leads: 0,
    conversion: "0.00%",
    campaigns: 0,
    status: "Setup",
  },
  {
    id: 3,
    slug: "kotak",
    name: "Kotak",
    shortName: "KT",
    industry: "Finance & Wealth",
    traffic: 0,
    reach: 0,
    leads: 0,
    conversion: "0.00%",
    campaigns: 0,
    status: "Setup",
  },
  {
    id: 4,
    slug: "moneypulse-app",
    name: "MoneyPulse App",
    shortName: "MP",
    industry: "FinTech",
    traffic: 0,
    reach: 0,
    leads: 0,
    conversion: "0.00%",
    campaigns: 0,
    status: "Setup",
  },
];

const nav: Array<[IconName, string, string]> = [
  ["home", "Dashboard", "/"],
  ["companies", "Companies", "/modules/companies"],
  ["products", "Products", "/modules/products"],
  ["campaigns", "Campaigns", "/modules/campaigns"],
  ["creatives", "Creatives", "/modules/creatives"],
  ["pages", "Landing Pages", "/modules/landing-pages"],
  ["leads", "Leads", "/modules/leads"],
  ["approvals", "Approvals", "/modules/approvals"],
  ["analytics", "Analytics", "/modules/analytics"],
  ["settings", "Settings", "/modules/settings"],
];

const quickCreate: Array<[IconName, string, string, string]> = [
  ["companies", "Company", "Create workspace", "/modules/companies"],
  ["products", "Product", "Add a product", "/modules/products"],
  ["campaigns", "Campaign", "Plan campaign", "/modules/campaigns"],
  ["creatives", "Creative", "Create marketing asset", "/modules/creatives"],
  ["pages", "Landing Page", "Build campaign page", "/modules/landing-pages"],
  ["leads", "Lead Form", "Capture enquiries", "/modules/leads"],
];

function Icon({
  name,
  className = "h-5 w-5",
}: {
  name: IconName;
  className?: string;
}) {
  const common = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  const paths: Record<IconName, React.ReactNode> = {
    home: (
      <>
        <path d="M3 11.5 12 4l9 7.5" />
        <path d="M5.5 10.5V20h13v-9.5" />
        <path d="M9.5 20v-6h5v6" />
      </>
    ),
    companies: (
      <>
        <rect x="3" y="4" width="8" height="16" rx="2" />
        <rect x="13" y="8" width="8" height="12" rx="2" />
        <path d="M6 8h2M6 12h2M6 16h2M16 12h2M16 16h2" />
      </>
    ),
    products: (
      <>
        <path d="m12 3 8 4.5-8 4.5-8-4.5L12 3Z" />
        <path d="m4 12 8 4.5 8-4.5" />
        <path d="m4 16.5 8 4.5 8-4.5" />
      </>
    ),
    campaigns: (
      <>
        <path d="M4 13V9l11-4v12L4 13Z" />
        <path d="M15 9h2a3 3 0 0 1 0 6h-2" />
        <path d="m6 13 1 6h4l-1-5" />
      </>
    ),
    creatives: (
      <>
        <path d="m12 3 1.6 4.4L18 9l-4.4 1.6L12 15l-1.6-4.4L6 9l4.4-1.6L12 3Z" />
        <path d="m18.5 15 .8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8.8-2.2Z" />
      </>
    ),
    pages: (
      <>
        <rect x="4" y="3" width="16" height="18" rx="2" />
        <path d="M8 8h8M8 12h8M8 16h5" />
      </>
    ),
    leads: (
      <>
        <circle cx="9" cy="8" r="3" />
        <path d="M3.5 19c.7-3.2 2.5-5 5.5-5s4.8 1.8 5.5 5" />
        <path d="M17 8h4M19 6v4" />
      </>
    ),
    approvals: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="m8 12 2.5 2.5L16 9" />
      </>
    ),
    analytics: (
      <>
        <path d="M4 20V10M10 20V4M16 20v-7M22 20V7" />
      </>
    ),
    settings: (
      <>
        <circle cx="12" cy="12" r="3" />
        <path d="M19 12a7 7 0 0 0-.1-1l2-1.5-2-3.4-2.4 1A7 7 0 0 0 15 6l-.3-2.6h-4L10.4 6a7 7 0 0 0-1.5.9l-2.4-1-2 3.4 2 1.5a7 7 0 0 0 0 2.2l-2 1.5 2 3.4 2.4-1a7 7 0 0 0 1.5.9l.3 2.6h4l.3-2.6a7 7 0 0 0 1.5-.9l2.4 1 2-3.4-2-1.5c.1-.3.1-.7.1-1Z" />
      </>
    ),
    traffic: (
      <>
        <circle cx="12" cy="12" r="8" />
        <path d="M4 12h16M12 4a13 13 0 0 1 0 16M12 4a13 13 0 0 0 0 16" />
      </>
    ),
    reach: (
      <>
        <circle cx="12" cy="12" r="8" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="12" cy="12" r="1" />
      </>
    ),
    conversion: (
      <>
        <path d="M5 7h11" />
        <path d="m13 4 3 3-3 3" />
        <path d="M19 17H8" />
        <path d="m11 14-3 3 3 3" />
      </>
    ),
    menu: (
      <>
        <path d="M4 7h16M4 12h16M4 17h16" />
      </>
    ),
    close: (
      <>
        <path d="m6 6 12 12M18 6 6 18" />
      </>
    ),
    search: (
      <>
        <circle cx="11" cy="11" r="6" />
        <path d="m16 16 4 4" />
      </>
    ),
    plus: (
      <>
        <path d="M12 5v14M5 12h14" />
      </>
    ),
    arrow: (
      <>
        <path d="M5 12h14M14 7l5 5-5 5" />
      </>
    ),
    spark: (
      <>
        <path d="m12 3 1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3Z" />
      </>
    ),
    chart: (
      <>
        <path d="M4 19V5" />
        <path d="M4 19h16" />
        <path d="m7 15 4-4 3 2 5-6" />
      </>
    ),
    source: (
      <>
        <circle cx="12" cy="12" r="8" />
        <path d="M12 4v8l5 3" />
      </>
    ),
    recent: (
      <>
        <path d="M4 12a8 8 0 1 0 2.3-5.7" />
        <path d="M4 5v5h5" />
        <path d="M12 8v5l3 2" />
      </>
    ),
    bolt: (
      <>
        <path d="m13 2-8 12h7l-1 8 8-12h-7l1-8Z" />
      </>
    ),
  };

  return <svg {...common}>{paths[name]}</svg>;
}

function MetricCard({
  icon,
  label,
  value,
  note,
  theme,
}: {
  icon: IconName;
  label: string;
  value: string;
  note: string;
  theme: "green" | "blue" | "violet" | "gold";
}) {
  const styles = {
    green:
      "border-emerald-400/20 from-emerald-400/[0.15] shadow-emerald-950/30",
    blue:
      "border-sky-400/20 from-sky-500/[0.15] shadow-sky-950/30",
    violet:
      "border-violet-400/20 from-violet-500/[0.15] shadow-violet-950/30",
    gold:
      "border-amber-400/20 from-amber-400/[0.15] shadow-amber-950/30",
  };

  const iconStyles = {
    green: "bg-emerald-400/15 text-emerald-300 border-emerald-300/20",
    blue: "bg-sky-400/15 text-sky-300 border-sky-300/20",
    violet: "bg-violet-400/15 text-violet-300 border-violet-300/20",
    gold: "bg-amber-400/15 text-amber-300 border-amber-300/20",
  };

  return (
    <div
      className={`relative overflow-hidden rounded-[22px] border bg-gradient-to-br via-white/[0.02] to-transparent p-4 shadow-2xl sm:p-5 ${styles[theme]}`}
    >
      <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-white/[0.04] blur-2xl" />
      <div className="relative flex items-start gap-3 sm:gap-4">
        <div
          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border sm:h-12 sm:w-12 ${iconStyles[theme]}`}
        >
          <Icon name={icon} />
        </div>
        <div className="min-w-0">
          <p className="text-[10px] font-semibold text-slate-400 sm:text-xs">
            {label}
          </p>
          <p className="mt-1 text-2xl font-black tracking-tight text-white sm:text-3xl">
            {value}
          </p>
          <p className="mt-1.5 text-[9px] text-slate-600">{note}</p>
        </div>
      </div>
    </div>
  );
}

function EmptyPanel({
  icon,
  title,
  text,
}: {
  icon: IconName;
  title: string;
  text: string;
}) {
  return (
    <div className="flex min-h-[210px] items-center justify-center rounded-[20px] border border-dashed border-white/[0.08] bg-black/15 px-6 text-center">
      <div className="max-w-sm">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl border border-emerald-300/15 bg-emerald-400/10 text-emerald-300">
          <Icon name={icon} className="h-5 w-5" />
        </div>
        <p className="mt-4 text-sm font-bold text-slate-300">{title}</p>
        <p className="mt-2 text-[10px] leading-5 text-slate-600">{text}</p>
      </div>
    </div>
  );
}

export default function Home() {
  const router = useRouter();
  const [createOpen, setCreateOpen] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  const go = (href: string) => {
    setMobileMenu(false);
    router.push(href);
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#02070c] text-white">
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute left-[10%] top-[-15%] h-[500px] w-[500px] rounded-full bg-emerald-500/[0.07] blur-[150px]" />
        <div className="absolute right-[-10%] top-[5%] h-[550px] w-[550px] rounded-full bg-cyan-500/[0.06] blur-[170px]" />
        <div className="absolute bottom-[-20%] left-[45%] h-[500px] w-[500px] rounded-full bg-violet-600/[0.05] blur-[170px]" />
      </div>

      {mobileMenu && (
        <div className="fixed inset-0 z-[80] xl:hidden">
          <button
            type="button"
            aria-label="Close navigation overlay"
            onClick={() => setMobileMenu(false)}
            className="absolute inset-0 bg-black/75 backdrop-blur-sm"
          />
          <aside className="absolute left-0 top-0 flex h-full w-[86%] max-w-[340px] flex-col border-r border-white/[0.08] bg-[#041018]/95 shadow-2xl backdrop-blur-3xl">
            <div className="flex items-center justify-between border-b border-white/[0.07] p-5">
              <div className="flex items-center gap-3">
                <div className="h-14 w-14 overflow-hidden rounded-2xl border border-emerald-300/20 bg-white/[0.04] p-1">
                  <img
                    src="/moneypulse-logo.png"
                    alt="MarketMint Digital"
                    className="h-full w-full object-contain"
                  />
                </div>
                <div>
                  <p className="text-[8px] font-black uppercase tracking-[0.28em] text-emerald-400">
                    MMD
                  </p>
                  <p className="mt-1 text-sm font-black">
                    MarketMint <span className="text-emerald-400">Digital</span>
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setMobileMenu(false)}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.04] text-slate-400"
              >
                <Icon name="close" />
              </button>
            </div>

            <nav className="flex-1 space-y-1 overflow-y-auto p-4">
              {nav.map(([icon, label, href], index) => (
                <button
                  key={label}
                  type="button"
                  onClick={() => go(href)}
                  className={`flex w-full items-center gap-3 rounded-2xl border px-4 py-3.5 text-left text-sm font-medium ${
                    index === 0
                      ? "border-emerald-300/20 bg-emerald-400/10 text-emerald-300"
                      : "border-transparent text-slate-400 hover:bg-white/[0.04] hover:text-white"
                  }`}
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/[0.04]">
                    <Icon name={icon} className="h-[18px] w-[18px]" />
                  </span>
                  {label}
                </button>
              ))}
            </nav>
          </aside>
        </div>
      )}

      <div className="relative flex min-h-screen">
        <aside className="hidden w-[292px] shrink-0 border-r border-white/[0.07] bg-[#041018]/90 backdrop-blur-3xl xl:flex xl:flex-col">
          <div className="border-b border-white/[0.07] px-6 py-6">
            <div className="flex items-center gap-4">
              <div className="h-[72px] w-[72px] shrink-0 overflow-hidden rounded-[22px] border border-emerald-300/20 bg-white/[0.04] p-1 shadow-[0_0_35px_rgba(16,185,129,0.12)]">
                <img
                  src="/moneypulse-logo.png"
                  alt="MarketMint Digital"
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="min-w-0">
                <p className="text-[9px] font-black uppercase tracking-[0.28em] text-emerald-400">
                  MMD
                </p>
                <h1 className="mt-1 whitespace-nowrap text-[17px] font-black tracking-tight">
                  MarketMint <span className="text-emerald-400">Digital</span>
                </h1>
                <p className="mt-1 text-[10px] text-slate-600">
                  Growth Intelligence OS
                </p>
              </div>
            </div>
          </div>

          <p className="px-7 pt-6 text-[9px] font-bold uppercase tracking-[0.24em] text-slate-700">
            Marketing Command
          </p>

          <nav className="mt-3 flex-1 space-y-1 px-4">
            {nav.map(([icon, label, href], index) => (
              <button
                key={label}
                type="button"
                onClick={() => router.push(href)}
                className={`group flex w-full items-center gap-3 rounded-2xl border px-4 py-3 text-left text-[13px] font-medium transition ${
                  index === 0
                    ? "border-emerald-300/20 bg-gradient-to-r from-emerald-400/20 to-cyan-400/[0.06] text-emerald-300"
                    : "border-transparent text-slate-400 hover:border-white/[0.06] hover:bg-white/[0.035] hover:text-white"
                }`}
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-white/[0.035]">
                  <Icon name={icon} className="h-[17px] w-[17px]" />
                </span>
                {label}
              </button>
            ))}
          </nav>

          <div className="m-4 rounded-[20px] border border-amber-300/15 bg-gradient-to-br from-amber-400/[0.10] to-transparent p-4">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-400/15 text-amber-300">
                <Icon name="spark" className="h-[18px] w-[18px]" />
              </div>
              <div>
                <p className="text-xs font-bold text-amber-100">
                  MMD Intelligence
                </p>
                <p className="mt-1 text-[9px] text-slate-500">
                  Growth layer ready
                </p>
              </div>
            </div>
          </div>
        </aside>

        <div className="min-w-0 flex-1 pb-20 xl:pb-0">
          <header className="sticky top-0 z-40 border-b border-white/[0.07] bg-[#030b11]/90 backdrop-blur-3xl">
            <div className="flex min-h-[76px] items-center justify-between gap-3 px-4 sm:px-6 md:min-h-[88px] md:px-8 xl:px-10">
              <div className="flex min-w-0 items-center gap-3">
                <button
                  type="button"
                  onClick={() => setMobileMenu(true)}
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/[0.08] bg-white/[0.04] text-slate-300 xl:hidden"
                >
                  <Icon name="menu" />
                </button>

                <div className="h-11 w-11 shrink-0 overflow-hidden rounded-xl border border-emerald-300/20 bg-white/[0.04] p-0.5 sm:h-12 sm:w-12 xl:hidden">
                  <img
                    src="/moneypulse-logo.png"
                    alt="MarketMint Digital"
                    className="h-full w-full object-contain"
                  />
                </div>

                <div className="min-w-0">
                  <p className="truncate text-[8px] font-black uppercase tracking-[0.2em] text-emerald-400 sm:text-[9px] sm:tracking-[0.28em]">
                    MoneyPulse · MarketMint Digital
                  </p>
                  <h2 className="mt-1 truncate text-base font-black tracking-tight sm:text-xl md:text-2xl">
                    Marketing Control Center
                  </h2>
                </div>
              </div>

              <div className="flex shrink-0 items-center gap-2">
                <div className="hidden items-center gap-2 rounded-2xl border border-white/[0.08] bg-white/[0.035] px-4 py-3 text-xs text-slate-500 lg:flex">
                  <Icon name="search" className="h-4 w-4" />
                  Search
                </div>

                <div className="hidden rounded-2xl border border-white/[0.08] bg-white/[0.035] px-4 py-3 text-xs text-slate-400 md:block">
                  4 Workspaces
                </div>

                <button
                  type="button"
                  onClick={() => setCreateOpen(!createOpen)}
                  className="flex h-11 items-center gap-1.5 rounded-2xl border border-emerald-300/20 bg-gradient-to-r from-emerald-400 to-teal-400 px-3 text-xs font-black text-[#02110d] shadow-[0_10px_35px_rgba(16,185,129,0.18)] sm:px-4"
                >
                  <Icon name="plus" className="h-4 w-4" />
                  <span className="hidden sm:inline">Create</span>
                </button>
              </div>
            </div>
          </header>

          <div className="mx-auto max-w-[1700px] px-4 py-5 sm:px-6 md:px-8 md:py-7 xl:px-10">
            {createOpen && (
              <section className="mb-5 overflow-hidden rounded-[26px] border border-emerald-300/15 bg-[#07141c]/95 p-4 shadow-2xl sm:p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[0.28em] text-emerald-400">
                      Quick Create
                    </p>
                    <h3 className="mt-2 text-base font-bold sm:text-lg">
                      Start your next growth action
                    </h3>
                  </div>
                  <button
                    type="button"
                    onClick={() => setCreateOpen(false)}
                    className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-slate-400"
                  >
                    <Icon name="close" className="h-4 w-4" />
                  </button>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3 xl:grid-cols-6">
                  {quickCreate.map(([icon, title, text, href]) => (
                    <button
                      key={title}
                      type="button"
                      onClick={() => router.push(href)}
                      className="rounded-[18px] border border-white/[0.07] bg-gradient-to-br from-white/[0.05] to-transparent p-3 text-left transition hover:border-emerald-300/20 sm:p-4"
                    >
                      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-300">
                        <Icon name={icon} className="h-[18px] w-[18px]" />
                      </span>
                      <p className="mt-3 text-xs font-bold">{title}</p>
                      <p className="mt-1 text-[9px] text-slate-600">{text}</p>
                    </button>
                  ))}
                </div>
              </section>
            )}

            <section>
              <div className="mb-4 flex items-end justify-between">
                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-slate-600">
                    Overall Performance
                  </p>
                  <h3 className="mt-1.5 text-xl font-black tracking-tight sm:text-2xl">
                    Growth Overview
                  </h3>
                </div>
                <span className="hidden rounded-xl border border-white/[0.07] bg-white/[0.025] px-3 py-2 text-[10px] text-slate-500 sm:block">
                  Awaiting live analytics
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
                <MetricCard
                  icon="traffic"
                  label="Total Traffic"
                  value="0"
                  note="All workspaces"
                  theme="green"
                />
                <MetricCard
                  icon="reach"
                  label="Total Reach"
                  value="0"
                  note="Organic + paid"
                  theme="blue"
                />
                <MetricCard
                  icon="leads"
                  label="Total Leads"
                  value="0"
                  note="All lead sources"
                  theme="violet"
                />
                <MetricCard
                  icon="conversion"
                  label="Conversion Rate"
                  value="0.00%"
                  note="Lead conversion"
                  theme="gold"
                />
              </div>
            </section>

            <section className="mt-4 grid gap-4 xl:grid-cols-[1.55fr_.85fr]">
              <div className="overflow-hidden rounded-[26px] border border-white/[0.08] bg-gradient-to-br from-[#081823] to-[#040c12] p-4 shadow-2xl sm:p-6">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-emerald-300/15 bg-emerald-400/10 text-emerald-300">
                      <Icon name="chart" />
                    </span>
                    <div>
                      <h3 className="text-sm font-bold sm:text-base">
                        Growth Intelligence
                      </h3>
                      <p className="mt-1 text-[9px] text-slate-600 sm:text-[10px]">
                        Traffic, reach, leads and conversions
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => router.push("/modules/analytics")}
                    className="rounded-xl border border-white/[0.08] bg-white/[0.025] px-3 py-2 text-[9px] text-slate-400 hover:text-white sm:text-[10px]"
                  >
                    Analytics
                  </button>
                </div>

                <div className="relative mt-5 min-h-[250px] overflow-hidden rounded-[20px] border border-white/[0.06] bg-[#030a0f]/70">
                  {[20, 40, 60, 80].map((top) => (
                    <div
                      key={top}
                      className="absolute left-0 right-0 border-t border-dashed border-white/[0.06]"
                      style={{ top: `${top}%` }}
                    />
                  ))}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="max-w-sm px-5 text-center">
                      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl border border-emerald-300/15 bg-emerald-400/10 text-emerald-300">
                        <Icon name="chart" />
                      </div>
                      <p className="mt-4 text-sm font-bold text-slate-300">
                        Performance chart ready
                      </p>
                      <p className="mt-2 text-[10px] leading-5 text-slate-600">
                        Real analytics will appear here after the data layer is
                        connected.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-[26px] border border-white/[0.08] bg-gradient-to-br from-[#081823] to-[#040c12] p-4 shadow-2xl sm:p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-violet-400">
                      Company Network
                    </p>
                    <h3 className="mt-2 font-bold">4 Workspaces</h3>
                  </div>
                  <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-violet-400/10 text-violet-300">
                    <Icon name="companies" className="h-[18px] w-[18px]" />
                  </span>
                </div>

                <div className="mt-4 space-y-2">
                  {workspaces.map((company) => (
                    <button
                      key={company.id}
                      type="button"
                      onClick={() => router.push(`/companies/${company.slug}`)}
                      className="group flex w-full items-center justify-between rounded-[17px] border border-white/[0.06] bg-white/[0.025] p-3 text-left transition hover:border-emerald-300/20 hover:bg-emerald-400/[0.035]"
                    >
                      <div className="flex min-w-0 items-center gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-slate-700 to-slate-900 text-[10px] font-black text-slate-300">
                          {company.shortName}
                        </div>
                        <div className="min-w-0">
                          <p className="truncate text-xs font-bold text-slate-300">
                            {company.name}
                          </p>
                          <p className="mt-1 text-[9px] text-slate-600">
                            {company.industry}
                          </p>
                        </div>
                      </div>
                      <Icon
                        name="arrow"
                        className="h-4 w-4 text-slate-700 transition group-hover:text-emerald-400"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </section>

            <section className="mt-4 grid grid-cols-2 gap-3 lg:grid-cols-4">
              {[
                ["campaigns" as IconName, "Active Campaigns", "0", "/modules/campaigns"],
                ["pages" as IconName, "Landing Pages", "0", "/modules/landing-pages"],
                ["approvals" as IconName, "Pending Approvals", "0", "/modules/approvals"],
                ["companies" as IconName, "Active Companies", "4", "/modules/companies"],
              ].map(([icon, title, value, href]) => (
                <button
                  key={title}
                  type="button"
                  onClick={() => router.push(href)}
                  className="group rounded-[20px] border border-white/[0.07] bg-gradient-to-br from-white/[0.05] to-transparent p-4 text-left shadow-xl transition hover:-translate-y-0.5 hover:border-emerald-300/20 sm:p-5"
                >
                  <div className="flex items-center justify-between">
                    <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/[0.07] bg-white/[0.04] text-slate-300">
                      <Icon name={icon as IconName} className="h-[18px] w-[18px]" />
                    </span>
                    <Icon
                      name="arrow"
                      className="h-4 w-4 text-slate-700 group-hover:text-emerald-400"
                    />
                  </div>
                  <p className="mt-4 text-[9px] font-medium text-slate-500 sm:text-[10px]">
                    {title}
                  </p>
                  <p className="mt-1 text-2xl font-black sm:text-3xl">{value}</p>
                </button>
              ))}
            </section>

            <section className="mt-4 grid gap-4 lg:grid-cols-2 2xl:grid-cols-3">
              <div className="rounded-[26px] border border-white/[0.08] bg-gradient-to-br from-[#081823] to-[#040c12] p-4 sm:p-5">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-sky-400/10 text-sky-300">
                    <Icon name="campaigns" className="h-[18px] w-[18px]" />
                  </span>
                  <div>
                    <h3 className="text-sm font-bold">Campaign Performance</h3>
                    <p className="mt-1 text-[9px] text-slate-600">
                      Active marketing campaigns
                    </p>
                  </div>
                </div>
                <div className="mt-4">
                  <EmptyPanel
                    icon="campaigns"
                    title="No campaign data yet"
                    text="Campaign performance will appear after campaigns are created and connected."
                  />
                </div>
              </div>

              <div className="rounded-[26px] border border-white/[0.08] bg-gradient-to-br from-[#081823] to-[#040c12] p-4 sm:p-5">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-violet-400/10 text-violet-300">
                    <Icon name="source" className="h-[18px] w-[18px]" />
                  </span>
                  <div>
                    <h3 className="text-sm font-bold">Lead Source Breakdown</h3>
                    <p className="mt-1 text-[9px] text-slate-600">
                      Organic, paid, social and direct
                    </p>
                  </div>
                </div>
                <div className="mt-4">
                  <EmptyPanel
                    icon="source"
                    title="Awaiting lead sources"
                    text="Source distribution will populate when lead tracking starts."
                  />
                </div>
              </div>

              <div className="rounded-[26px] border border-white/[0.08] bg-gradient-to-br from-[#081823] to-[#040c12] p-4 sm:p-5 lg:col-span-2 2xl:col-span-1">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-amber-400/10 text-amber-300">
                    <Icon name="recent" className="h-[18px] w-[18px]" />
                  </span>
                  <div>
                    <h3 className="text-sm font-bold">Recent Leads</h3>
                    <p className="mt-1 text-[9px] text-slate-600">
                      Latest captured enquiries
                    </p>
                  </div>
                </div>
                <div className="mt-4">
                  <EmptyPanel
                    icon="leads"
                    title="No leads captured yet"
                    text="New leads will appear here once lead forms and campaigns are live."
                  />
                </div>
              </div>
            </section>

            <section className="mt-4 rounded-[26px] border border-white/[0.08] bg-gradient-to-br from-[#081823] to-[#040c12] p-4 sm:p-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-emerald-400">
                    Quick Actions
                  </p>
                  <h3 className="mt-2 text-sm font-bold sm:text-base">
                    Start marketing work
                  </h3>
                </div>
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-400/10 text-emerald-300">
                  <Icon name="bolt" className="h-[18px] w-[18px]" />
                </span>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-2 md:grid-cols-3 xl:grid-cols-6">
                {quickCreate.map(([icon, title, text, href]) => (
                  <button
                    key={title}
                    type="button"
                    onClick={() => router.push(href)}
                    className="group rounded-[18px] border border-white/[0.06] bg-black/15 p-3 text-left transition hover:border-emerald-300/20 hover:bg-emerald-400/[0.035]"
                  >
                    <Icon
                      name={icon}
                      className="h-[18px] w-[18px] text-emerald-400"
                    />
                    <p className="mt-3 text-[11px] font-bold text-slate-300">
                      {title}
                    </p>
                    <p className="mt-1 text-[8px] text-slate-600">{text}</p>
                  </button>
                ))}
              </div>
            </section>

            <section className="mt-5">
              <div className="mb-4 flex items-end justify-between">
                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-cyan-400">
                    Company Workspaces
                  </p>
                  <h3 className="mt-2 text-lg font-black">
                    Marketing Performance
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => router.push("/modules/companies")}
                  className="rounded-xl border border-white/[0.08] bg-white/[0.025] px-3 py-2 text-[9px] text-slate-400 hover:text-white sm:text-[10px]"
                >
                  Manage
                </button>
              </div>

              <div className="grid gap-3 sm:grid-cols-2 2xl:grid-cols-4">
                {workspaces.map((company) => (
                  <button
                    key={company.id}
                    type="button"
                    onClick={() => router.push(`/companies/${company.slug}`)}
                    className="group overflow-hidden rounded-[22px] border border-white/[0.07] bg-gradient-to-br from-[#081721] to-[#040b10] p-4 text-left shadow-xl transition hover:-translate-y-1 hover:border-emerald-300/20 sm:p-5"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex min-w-0 items-center gap-3">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/[0.07] bg-white/[0.035] text-xs font-black text-slate-300">
                          {company.shortName}
                        </div>
                        <div className="min-w-0">
                          <p className="truncate text-sm font-bold">
                            {company.name}
                          </p>
                          <p className="mt-1 text-[9px] text-slate-600">
                            {company.industry}
                          </p>
                        </div>
                      </div>
                      <span className="rounded-full border border-amber-300/15 bg-amber-400/[0.06] px-2 py-1 text-[7px] font-bold uppercase tracking-wider text-amber-300">
                        {company.status}
                      </span>
                    </div>

                    <div className="mt-4 grid grid-cols-4 gap-1.5">
                      {[
                        ["Traffic", company.traffic],
                        ["Reach", company.reach],
                        ["Leads", company.leads],
                        ["Conv.", company.conversion],
                      ].map(([label, value]) => (
                        <div
                          key={label}
                          className="min-w-0 rounded-xl border border-white/[0.05] bg-black/20 p-2"
                        >
                          <p className="truncate text-[7px] text-slate-700 sm:text-[8px]">
                            {label}
                          </p>
                          <p className="mt-1 truncate text-[10px] font-bold text-slate-300 sm:text-[11px]">
                            {value}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-4 flex items-center justify-between border-t border-white/[0.06] pt-4">
                      <span className="text-[8px] text-slate-600 sm:text-[9px]">
                        {company.campaigns} active campaigns
                      </span>
                      <span className="flex items-center gap-1 text-[9px] font-bold text-emerald-400">
                        Open
                        <Icon name="arrow" className="h-3 w-3" />
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </section>

            <footer className="mt-8 flex flex-col gap-3 border-t border-white/[0.07] py-6 text-[9px] text-slate-700 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-2">
                <img
                  src="/moneypulse-logo.png"
                  alt="MarketMint Digital"
                  className="h-8 w-8 rounded-lg object-contain"
                />
                <span>MoneyPulse MarketMint Digital</span>
              </div>
              <span>Multi-Company Digital Marketing Growth Platform</span>
            </footer>
          </div>
        </div>
      </div>

      <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/[0.08] bg-[#041018]/95 px-2 pb-[max(8px,env(safe-area-inset-bottom))] pt-2 backdrop-blur-3xl xl:hidden">
        <div className="mx-auto grid max-w-lg grid-cols-5 gap-1">
          {[
            ["home" as IconName, "Home", "/"],
            ["companies" as IconName, "Companies", "/modules/companies"],
            ["campaigns" as IconName, "Campaigns", "/modules/campaigns"],
            ["leads" as IconName, "Leads", "/modules/leads"],
            ["analytics" as IconName, "Analytics", "/modules/analytics"],
          ].map(([icon, label, href], index) => (
            <button
              key={label}
              type="button"
              onClick={() => router.push(href)}
              className={`flex min-w-0 flex-col items-center justify-center rounded-xl py-2 text-[8px] ${
                index === 0
                  ? "bg-emerald-400/10 text-emerald-300"
                  : "text-slate-500"
              }`}
            >
              <Icon name={icon as IconName} className="h-[18px] w-[18px]" />
              <span className="mt-1 max-w-full truncate">{label}</span>
            </button>
          ))}
        </div>
      </nav>
    </main>
  );
}
