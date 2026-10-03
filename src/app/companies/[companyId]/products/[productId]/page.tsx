"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";

type CompanyConfig = {
  name: string;
  industry: string;
};

type ProductConfig = {
  name: string;
  category: string;
  icon: string;
};

const companies: Record<string, CompanyConfig> = {
  "anand-rathi": {
    name: "Anand Rathi",
    industry: "Finance & Wealth",
  },
  "motilal-oswal": {
    name: "Motilal Oswal",
    industry: "Finance & Wealth",
  },
  kotak: {
    name: "Kotak",
    industry: "Finance & Wealth",
  },
  "moneypulse-app": {
    name: "MoneyPulse App",
    industry: "Fintech",
  },
};

const financeProducts: Record<string, ProductConfig> = {
  "mutual-funds": {
    name: "Mutual Funds",
    category: "Investment",
    icon: "MF",
  },
  insurance: {
    name: "Insurance",
    category: "Protection",
    icon: "IN",
  },
  bonds: {
    name: "Bonds",
    category: "Fixed Income",
    icon: "BD",
  },
  ipo: {
    name: "IPO",
    category: "Primary Market",
    icon: "IP",
  },
  "private-equity": {
    name: "Private Equity",
    category: "Alternative Investment",
    icon: "PE",
  },
  "unlisted-shares": {
    name: "Unlisted Shares",
    category: "Alternative Investment",
    icon: "US",
  },
};

const fintechProducts: Record<string, ProductConfig> = {
  "market-intelligence": {
    name: "Market Intelligence",
    category: "Intelligence",
    icon: "MI",
  },
  "research-dashboard": {
    name: "Research Dashboard",
    category: "Research",
    icon: "RD",
  },
  "trading-tools": {
    name: "Trading Tools",
    category: "Tools",
    icon: "TT",
  },
  "user-acquisition": {
    name: "User Acquisition",
    category: "Growth",
    icon: "UA",
  },
};

const modules = [
  {
    title: "Campaigns",
    description: "Plan and manage product-specific marketing campaigns.",
    icon: "CP",
  },
  {
    title: "Creatives",
    description: "Create posters, banners and campaign creative briefs.",
    icon: "CR",
  },
  {
    title: "Reels & Videos",
    description: "Plan short-form videos, scripts, hooks and reels.",
    icon: "RV",
  },
  {
    title: "Landing Pages",
    description: "Build conversion-focused pages for this product.",
    icon: "LP",
  },
  {
    title: "Lead Forms",
    description: "Create forms and capture campaign enquiries.",
    icon: "LF",
  },
  {
    title: "SEO & Keywords",
    description: "Plan search topics, keywords and organic content.",
    icon: "SEO",
  },
  {
    title: "Social Posts",
    description: "Prepare channel-specific social media content.",
    icon: "SP",
  },
  {
    title: "Ads",
    description: "Organize Google and Meta advertising campaigns.",
    icon: "AD",
  },
  {
    title: "WhatsApp CTA",
    description: "Plan approved WhatsApp calls-to-action and follow-ups.",
    icon: "WA",
  },
  {
    title: "Approvals",
    description: "Move drafts through review and publishing approval.",
    icon: "AP",
  },
  {
    title: "Analytics",
    description: "Track traffic, leads, campaigns and conversions.",
    icon: "AN",
  },
];

const quickActions = [
  "New Campaign",
  "New Creative",
  "New Landing Page",
  "New Lead Form",
];

const statuses = [
  {
    label: "Campaigns",
    value: "0",
    note: "Active",
  },
  {
    label: "Creatives",
    value: "0",
    note: "Ready / Live",
  },
  {
    label: "Leads",
    value: "0",
    note: "Captured",
  },
  {
    label: "Conversion",
    value: "0%",
    note: "Current rate",
  },
  {
    label: "Approvals",
    value: "0",
    note: "Pending",
  },
];

export default function ProductMarketingCenter() {
  const params = useParams<{
    companyId: string;
    productId: string;
  }>();

  const companyId = params.companyId;
  const productId = params.productId;

  const company =
    companies[companyId] ?? {
      name: "Company Workspace",
      industry: "Marketing",
    };

  const productCollection =
    companyId === "moneypulse-app"
      ? fintechProducts
      : financeProducts;

  const product =
    productCollection[productId] ?? {
      name: productId
        .split("-")
        .map(
          (word) =>
            word.charAt(0).toUpperCase() + word.slice(1)
        )
        .join(" "),
      category: "Product",
      icon: "PR",
    };

  const [activeTab, setActiveTab] = useState("Overview");

  const tabs = [
    "Overview",
    "Campaigns",
    "Creatives",
    "Landing Pages",
    "Leads",
    "Approvals",
    "Analytics",
  ];

  return (
    <main className="min-h-screen bg-[#07111f] text-white">
      <div className="mx-auto max-w-[1600px] px-5 py-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-6 flex flex-wrap items-center gap-2 text-sm text-slate-400">
          <Link
            href="/"
            className="transition hover:text-white"
          >
            MMD Dashboard
          </Link>

          <span>/</span>

          <Link
            href={`/companies/${companyId}`}
            className="transition hover:text-white"
          >
            {company.name}
          </Link>

          <span>/</span>

          <span className="text-slate-200">
            {product.name}
          </span>
        </div>

        {/* Header */}
        <section className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.025] p-6 shadow-2xl shadow-black/20 lg:p-8">
          <div className="flex flex-col justify-between gap-6 xl:flex-row xl:items-center">
            <div className="flex items-start gap-4">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04]">
                <span className="text-[9px] font-semibold uppercase tracking-wider text-slate-500">
                  Logo
                </span>
              </div>

              <div>
                <div className="mb-2 flex flex-wrap items-center gap-2">
                  <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">
                    Product Marketing Center
                  </span>

                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
                    {company.industry}
                  </span>
                </div>

                <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
                  {product.name}
                </h1>

                <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-400">
                  {company.name} · {product.category}
                </p>

                <p className="mt-1 max-w-3xl text-sm leading-6 text-slate-500">
                  Plan, create, approve, publish and measure
                  product-specific marketing activity from one
                  isolated workspace.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              <Link
                href={`/companies/${companyId}/products/${productId}/ai-coach`}
                className="rounded-xl border border-emerald-400/30 bg-emerald-400/10 px-4 py-2.5 text-sm font-bold text-emerald-300 transition hover:bg-emerald-400/15"
              >
                Open AI Coach
              </Link>

              <Link
                href={`/companies/${companyId}/products/${productId}/tasks`}
                className="rounded-xl bg-emerald-400 px-4 py-2.5 text-sm font-bold text-slate-950 transition hover:bg-emerald-300"
              >
                Open Task Engine
              </Link>

              {quickActions.map((action) => (
                <button
                  key={action}
                  type="button"
                  className="rounded-xl border border-white/10 bg-white/[0.05] px-4 py-2.5 text-sm font-medium text-slate-200 transition hover:border-emerald-400/30 hover:bg-emerald-400/10 hover:text-white"
                >
                  + {action}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Metrics */}
        <section className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
          {statuses.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-white/10 bg-white/[0.035] p-5"
            >
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-slate-500">
                {item.label}
              </p>

              <div className="mt-3 flex items-end justify-between gap-3">
                <p className="text-3xl font-bold tracking-tight">
                  {item.value}
                </p>

                <span className="text-xs text-slate-500">
                  {item.note}
                </span>
              </div>
            </div>
          ))}
        </section>

        {/* Tabs */}
        <section className="mt-6">
          <div className="flex gap-2 overflow-x-auto rounded-2xl border border-white/10 bg-white/[0.025] p-2">
            {tabs.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`whitespace-nowrap rounded-xl px-4 py-2.5 text-sm font-medium transition ${
                  activeTab === tab
                    ? "bg-emerald-400 text-slate-950"
                    : "text-slate-400 hover:bg-white/5 hover:text-white"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </section>

        {/* Overview */}
        <section className="mt-6 grid gap-6 xl:grid-cols-[1.5fr_0.8fr]">
          <div>
            <div className="mb-4">
              <h2 className="text-lg font-semibold">
                Marketing Modules
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Everything created here belongs only to{" "}
                {company.name} → {product.name}.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {modules.map((module) => (
                <button
                  key={module.title}
                  type="button"
                  className="group rounded-2xl border border-white/10 bg-white/[0.035] p-5 text-left transition hover:-translate-y-0.5 hover:border-emerald-400/30 hover:bg-white/[0.055]"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-11 min-w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 px-2 text-xs font-bold text-emerald-300">
                      {module.icon}
                    </div>

                    <span className="text-slate-600 transition group-hover:text-emerald-300">
                      →
                    </span>
                  </div>

                  <h3 className="mt-5 font-semibold">
                    {module.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {module.description}
                  </p>
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-5">
            {/* AI Coach Preview */}
            <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/[0.06] p-5">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-emerald-300">
                    AI Marketing Coach
                  </p>

                  <h2 className="mt-2 text-lg font-semibold">
                    Today&apos;s Plan
                  </h2>
                </div>

                <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300">
                  Foundation
                </span>
              </div>

              <div className="mt-5 space-y-3">
                {[
                  "Create product campaign brief",
                  "Prepare 2 creative concepts",
                  "Draft landing-page headline",
                  "Research 5 SEO keyword ideas",
                  "Review pending approvals",
                ].map((task) => (
                  <div
                    key={task}
                    className="flex items-start gap-3 rounded-xl border border-white/10 bg-[#07111f]/60 p-3"
                  >
                    <div className="mt-0.5 h-4 w-4 shrink-0 rounded border border-slate-600" />

                    <div>
                      <p className="text-sm text-slate-200">
                        {task}
                      </p>

                      <p className="mt-1 text-xs text-slate-500">
                        Pending
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <p className="mt-4 text-xs leading-5 text-slate-500">
                Preview only. The Task Engine and AI Coach will
                later generate these from real workspace,
                product and campaign data.
              </p>
            </div>

            {/* Approval Flow */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
                Publishing Control
              </p>

              <h2 className="mt-2 text-lg font-semibold">
                Approval Workflow
              </h2>

              <div className="mt-5 space-y-2">
                {[
                  "AI Draft",
                  "Human Review",
                  "Approval",
                  "Publish",
                ].map((step, index) => (
                  <div
                    key={step}
                    className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.025] p-3"
                  >
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/5 text-xs font-semibold text-slate-400">
                      {index + 1}
                    </span>

                    <span className="text-sm text-slate-300">
                      {step}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Isolation */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
                Brand Isolation
              </p>

              <h2 className="mt-2 font-semibold">
                {company.name} → {product.name}
              </h2>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                Campaigns, creatives, leads, landing pages,
                approvals and analytics created in this Product
                Marketing Center stay scoped to this company and
                product.
              </p>
            </div>
          </div>
        </section>

        <footer className="mt-10 border-t border-white/10 py-6 text-center text-xs text-slate-600">
          MoneyPulse MarketMint Digital · MMD Product Marketing
          Center V1
        </footer>
      </div>
    </main>
  );
}


