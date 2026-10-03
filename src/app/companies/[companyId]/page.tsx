"use client";

import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";

type CompanyConfig = {
  name: string;
  shortName: string;
  industry: string;
  description: string;
};

type Product = {
  slug: string;
  name: string;
  category: string;
  icon: string;
  status: string;
};

const companies: Record<string, CompanyConfig> = {
  "anand-rathi": {
    name: "Anand Rathi",
    shortName: "AR",
    industry: "Finance & Wealth",
    description: "Dedicated marketing workspace for Anand Rathi.",
  },

  "motilal-oswal": {
    name: "Motilal Oswal",
    shortName: "MO",
    industry: "Finance & Wealth",
    description: "Dedicated marketing workspace for Motilal Oswal.",
  },

  kotak: {
    name: "Kotak",
    shortName: "KT",
    industry: "Finance & Wealth",
    description: "Dedicated marketing workspace for Kotak.",
  },

  "moneypulse-app": {
    name: "MoneyPulse App",
    shortName: "MP",
    industry: "FinTech",
    description: "Growth and acquisition workspace for MoneyPulse App.",
  },
};

const financeProductTemplates: Product[] = [
  {
    slug: "mutual-funds",
    name: "Mutual Funds",
    category: "Investment",
    icon: "MF",
    status: "Template",
  },
  {
    slug: "insurance",
    name: "Insurance",
    category: "Protection",
    icon: "IN",
    status: "Template",
  },
  {
    slug: "bonds",
    name: "Bonds",
    category: "Fixed Income",
    icon: "BD",
    status: "Template",
  },
  {
    slug: "ipo",
    name: "IPO",
    category: "Primary Market",
    icon: "IP",
    status: "Template",
  },
  {
    slug: "private-equity",
    name: "Private Equity",
    category: "Alternative",
    icon: "PE",
    status: "Template",
  },
  {
    slug: "unlisted-shares",
    name: "Unlisted Shares",
    category: "Alternative",
    icon: "US",
    status: "Template",
  },
];

const fintechProductTemplates: Product[] = [
  {
    slug: "market-intelligence",
    name: "Market Intelligence",
    category: "Product",
    icon: "MI",
    status: "Template",
  },
  {
    slug: "research-dashboard",
    name: "Research Dashboard",
    category: "Product",
    icon: "RD",
    status: "Template",
  },
  {
    slug: "trading-tools",
    name: "Trading Tools",
    category: "Product",
    icon: "TT",
    status: "Template",
  },
  {
    slug: "user-acquisition",
    name: "User Acquisition",
    category: "Growth",
    icon: "UA",
    status: "Template",
  },
];

const modules = [
  {
    name: "Products",
    description: "Products and services marketed by this workspace.",
    icon: "◈",
  },
  {
    name: "Campaigns",
    description: "Organic and paid marketing campaigns.",
    icon: "📣",
  },
  {
    name: "Creatives",
    description: "Posters, reels, videos and marketing content.",
    icon: "✦",
  },
  {
    name: "Landing Pages",
    description: "Campaign-specific conversion pages.",
    icon: "▤",
  },
  {
    name: "Leads",
    description: "Captured leads and source attribution.",
    icon: "◎",
  },
  {
    name: "Approvals",
    description: "Review creatives and campaigns before publishing.",
    icon: "✓",
  },
  {
    name: "SEO",
    description: "Keywords, content and organic growth.",
    icon: "⌕",
  },
  {
    name: "Analytics",
    description: "Traffic, reach, leads and conversion reports.",
    icon: "⌁",
  },
];

const metrics = [
  { label: "Traffic", value: "0", note: "Analytics pending" },
  { label: "Reach", value: "0", note: "Organic + paid" },
  { label: "Leads", value: "0", note: "Lead tracking pending" },
  { label: "Conversion", value: "0.00%", note: "Tracking pending" },
  { label: "Campaigns", value: "0", note: "No active campaigns" },
  { label: "Landing Pages", value: "0", note: "No live pages" },
];

export default function CompanyWorkspacePage() {
  const router = useRouter();
  const params = useParams<{ companyId: string }>();

  const companyId = params.companyId;
  const company = companies[companyId];

  const [addProductOpen, setAddProductOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Overview");

  if (!company) {
    return (
      <main className="min-h-screen bg-[#061015] p-10 text-white">
        <div className="mx-auto max-w-3xl rounded-2xl border border-white/10 bg-white/[0.03] p-8">
          <p className="text-sm text-red-300">Workspace not found.</p>

          <Link
            href="/"
            className="mt-5 inline-block rounded-xl bg-emerald-400 px-4 py-2 text-sm font-bold text-[#04100c]"
          >
            Back to MMD Dashboard
          </Link>
        </div>
      </main>
    );
  }

  const productTemplates =
    company.industry === "FinTech"
      ? fintechProductTemplates
      : financeProductTemplates;

  const tabs = [
    "Overview",
    "Products",
    "Campaigns",
    "Creatives",
    "Landing Pages",
    "Leads",
    "Approvals",
    "Analytics",
  ];

  return (
    <main className="min-h-screen bg-[#061015] text-white">
      <header className="border-b border-white/10 bg-[#08141a]">
        <div className="mx-auto max-w-[1500px] px-5 py-5 md:px-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04]">
                <span className="text-[9px] font-semibold uppercase tracking-wider text-slate-500">
                  Logo
                </span>
              </div>

              <div>
                <Link
                  href="/"
                  className="text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-400 hover:text-emerald-300"
                >
                  ← MMD Main Dashboard
                </Link>

                <h1 className="mt-1 text-2xl font-bold md:text-3xl">
                  {company.name}
                </h1>

                <div className="mt-2 flex flex-wrap items-center gap-2">
                  <span className="rounded-full border border-white/10 px-2.5 py-1 text-[10px] text-slate-400">
                    {company.industry}
                  </span>

                  <span className="rounded-full border border-amber-400/20 bg-amber-400/[0.06] px-2.5 py-1 text-[10px] font-semibold text-amber-300">
                    SETUP MODE
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              <button className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-xs font-semibold text-slate-300 hover:text-white">
                Brand Assets
              </button>

              <button className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-xs font-semibold text-slate-300 hover:text-white">
                Workspace Settings
              </button>

              <button
                onClick={() => setAddProductOpen(true)}
                className="rounded-xl bg-emerald-400 px-4 py-2.5 text-xs font-bold text-[#04100c] hover:bg-emerald-300"
              >
                + Add Product
              </button>
            </div>
          </div>

          <div className="mt-6 flex gap-1 overflow-x-auto border-t border-white/[0.07] pt-4">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`whitespace-nowrap rounded-lg px-3 py-2 text-xs font-medium transition ${
                  activeTab === tab
                    ? "bg-emerald-400/10 text-emerald-300"
                    : "text-slate-500 hover:bg-white/[0.04] hover:text-white"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-[1500px] px-5 py-7 md:px-8">
        {addProductOpen && (
          <section className="mb-7 rounded-2xl border border-emerald-400/20 bg-[#0a171d] p-5">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
                  Add Product
                </p>
                <h2 className="mt-1 text-lg font-semibold">
                  Create a product inside {company.name}
                </h2>
                <p className="mt-1 text-xs text-slate-500">
                  Product creation will be connected to persistent storage in
                  the next phase.
                </p>
              </div>

              <button
                onClick={() => setAddProductOpen(false)}
                className="w-fit rounded-lg border border-white/10 px-3 py-2 text-xs text-slate-400 hover:text-white"
              >
                Close
              </button>
            </div>

            <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              <label className="block">
                <span className="mb-2 block text-[11px] text-slate-400">
                  Product Name
                </span>
                <input
                  placeholder="Enter product name"
                  className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm outline-none placeholder:text-slate-700 focus:border-emerald-400/40"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-[11px] text-slate-400">
                  Category
                </span>
                <input
                  placeholder="Investment, Insurance..."
                  className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm outline-none placeholder:text-slate-700 focus:border-emerald-400/40"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-[11px] text-slate-400">
                  Product Icon
                </span>
                <input
                  placeholder="MF / IPO / RE..."
                  className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm outline-none placeholder:text-slate-700 focus:border-emerald-400/40"
                />
              </label>

              <div className="flex items-end">
                <button className="w-full rounded-xl bg-emerald-400 px-4 py-3 text-sm font-bold text-[#04100c]">
                  Create Product
                </button>
              </div>
            </div>
          </section>
        )}

        <section className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            Workspace Overview
          </p>

          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-4"
              >
                <p className="text-xs text-slate-400">{metric.label}</p>
                <p className="mt-2 text-2xl font-bold">{metric.value}</p>
                <p className="mt-2 text-[10px] text-slate-600">
                  {metric.note}
                </p>
              </div>
            ))}
          </div>
        </section>

        <div className="grid gap-6 xl:grid-cols-[1.25fr_0.75fr]">
          <section className="rounded-2xl border border-white/10 bg-white/[0.025] p-5">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
                  Product Hub
                </p>

                <h2 className="mt-1 text-xl font-semibold">
                  Products & Services
                </h2>

                <p className="mt-1 text-xs text-slate-500">
                  Suggested templates only. Add the actual approved products
                  used by this workspace.
                </p>
              </div>

              <button
                onClick={() => setAddProductOpen(true)}
                className="w-fit rounded-xl border border-white/10 px-4 py-2 text-xs font-semibold text-slate-300 hover:border-emerald-400/30"
              >
                + Add Product
              </button>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {productTemplates.map((product) => (
                <button
                  key={product.name}
                  onClick={() => router.push(`/companies/${companyId}/products/${product.slug}`)}
                  className="group rounded-xl border border-white/[0.08] bg-black/10 p-4 text-left transition hover:border-emerald-400/30 hover:bg-emerald-400/[0.025]"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-400/10 text-xs font-bold text-emerald-300">
                      {product.icon}
                    </div>

                    <span className="rounded-full border border-white/10 px-2 py-1 text-[9px] uppercase tracking-wider text-slate-500">
                      {product.status}
                    </span>
                  </div>

                  <h3 className="mt-4 text-sm font-semibold">
                    {product.name}
                  </h3>

                  <p className="mt-1 text-[11px] text-slate-500">
                    {product.category}
                  </p>

                  <div className="mt-4 flex items-center justify-between border-t border-white/[0.06] pt-3">
                    <span className="text-[10px] text-slate-600">
                      No campaigns yet
                    </span>

                    <span className="text-[11px] font-semibold text-emerald-400">
                      Open →
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </section>

          <section className="rounded-2xl border border-white/10 bg-white/[0.025] p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-purple-400">
              Workspace Tools
            </p>

            <h2 className="mt-1 text-xl font-semibold">
              Marketing Operations
            </h2>

            <div className="mt-5 space-y-2">
              {modules.map((module) => (
                <button
                  key={module.name}
                  onClick={() => setActiveTab(module.name)}
                  className="flex w-full items-center gap-3 rounded-xl border border-white/[0.07] bg-black/10 p-3 text-left transition hover:border-purple-400/30"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/[0.04] text-sm">
                    {module.icon}
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-semibold">{module.name}</p>
                    <p className="mt-1 truncate text-[10px] text-slate-600">
                      {module.description}
                    </p>
                  </div>

                  <span className="text-xs text-slate-600">→</span>
                </button>
              ))}
            </div>
          </section>
        </div>

        <div className="mt-6 grid gap-5 lg:grid-cols-3">
          <section className="rounded-2xl border border-white/10 bg-white/[0.025] p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-400">
              Campaigns
            </p>
            <div className="mt-3 flex items-end justify-between">
              <div>
                <p className="text-3xl font-bold">0</p>
                <p className="mt-1 text-[11px] text-slate-500">
                  Active campaigns
                </p>
              </div>
              <button className="text-xs font-semibold text-emerald-400">
                + Create Campaign
              </button>
            </div>
          </section>

          <section className="rounded-2xl border border-white/10 bg-white/[0.025] p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
              Creative Pipeline
            </p>
            <div className="mt-3 flex items-end justify-between">
              <div>
                <p className="text-3xl font-bold">0</p>
                <p className="mt-1 text-[11px] text-slate-500">
                  Pending creatives
                </p>
              </div>
              <button className="text-xs font-semibold text-emerald-400">
                + New Creative
              </button>
            </div>
          </section>

          <section className="rounded-2xl border border-white/10 bg-white/[0.025] p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
              Landing Pages
            </p>
            <div className="mt-3 flex items-end justify-between">
              <div>
                <p className="text-3xl font-bold">0</p>
                <p className="mt-1 text-[11px] text-slate-500">
                  Published pages
                </p>
              </div>
              <button className="text-xs font-semibold text-emerald-400">
                + Build Page
              </button>
            </div>
          </section>
        </div>

        <section className="mt-6 rounded-2xl border border-emerald-400/10 bg-emerald-400/[0.025] p-5">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
                Brand Isolation
              </p>
              <h3 className="mt-1 text-sm font-semibold">
                {company.name} Workspace
              </h3>
              <p className="mt-2 max-w-3xl text-[11px] leading-5 text-slate-500">
                Products, campaigns, creatives, landing pages, leads and
                analytics created here belong only to {company.name}. Other
                company branding should not be mixed into this workspace.
              </p>
            </div>

            <span className="w-fit rounded-full border border-emerald-400/20 px-3 py-2 text-[10px] font-semibold text-emerald-300">
              ISOLATED WORKSPACE
            </span>
          </div>
        </section>

        <footer className="mt-8 flex flex-col gap-2 border-t border-white/10 py-5 text-[11px] text-slate-600 sm:flex-row sm:justify-between">
          <span>MoneyPulse MarketMint Digital · MMD V1</span>
          <span>{company.name} · Marketing Workspace</span>
        </footer>
      </div>
    </main>
  );
}



