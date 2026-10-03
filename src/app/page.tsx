"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type Workspace = {
  slug: string;
  id: number;
  name: string;
  shortName: string;
  industry: string;
  icon: string;
  traffic: number;
  reach: number;
  leads: number;
  conversion: string;
  campaigns: number;
  status: string;
};

const initialWorkspaces: Workspace[] = [
  {
    id: 1,
    name: "Anand Rathi",
    slug: "anand-rathi",
    shortName: "AR",
    industry: "Finance & Wealth",
    icon: "₹",
    traffic: 0,
    reach: 0,
    leads: 0,
    conversion: "0.00%",
    campaigns: 0,
    status: "Setup",
  },
  {
    id: 2,
    name: "Motilal Oswal",
    slug: "motilal-oswal",
    shortName: "MO",
    industry: "Finance & Wealth",
    icon: "₹",
    traffic: 0,
    reach: 0,
    leads: 0,
    conversion: "0.00%",
    campaigns: 0,
    status: "Setup",
  },
  {
    id: 3,
    name: "Kotak",
    slug: "kotak",
    shortName: "KT",
    industry: "Finance & Wealth",
    icon: "₹",
    traffic: 0,
    reach: 0,
    leads: 0,
    conversion: "0.00%",
    campaigns: 0,
    status: "Setup",
  },
  {
    id: 4,
    name: "MoneyPulse App",
    slug: "moneypulse-app",
    shortName: "MP",
    industry: "FinTech",
    icon: "M",
    traffic: 0,
    reach: 0,
    leads: 0,
    conversion: "0.00%",
    campaigns: 0,
    status: "Setup",
  },
];

const metrics = [
  { label: "Total Traffic", value: "0", note: "All workspaces" },
  { label: "Total Reach", value: "0", note: "Organic + paid" },
  { label: "Total Leads", value: "0", note: "All lead sources" },
  { label: "Conversion Rate", value: "0.00%", note: "Lead conversion" },
  { label: "Active Campaigns", value: "0", note: "Across companies" },
  { label: "Live Landing Pages", value: "0", note: "Published pages" },
  { label: "Pending Approvals", value: "0", note: "Needs review" },
];

const quickCreate = [
  { icon: "🏢", title: "Company", text: "Create a new workspace" },
  { icon: "◈", title: "Product", text: "Add company product" },
  { icon: "📣", title: "Campaign", text: "Start a campaign" },
  { icon: "✦", title: "Creative", text: "Poster, reel or content" },
  { icon: "▤", title: "Landing Page", text: "Build campaign page" },
  { icon: "◎", title: "Lead Form", text: "Create lead capture" },
];

const marketingTools = [
  "Creative Studio",
  "Landing Pages",
  "Campaign Manager",
  "Lead Manager",
  "SEO",
  "Social Media",
  "Google / Meta Ads",
  "WhatsApp",
  "Content Calendar",
  "Approval Center",
  "UTM Builder",
  "Analytics & Reports",
];

const industries = [
  "Finance & Wealth",
  "Real Estate",
  "Retail / E-commerce",
  "Affiliate Marketing",
  "Education",
  "Automobile",
  "Hospitality",
  "Professional Services",
  "Other",
];

export default function Home() {
  const router = useRouter();
  const [workspaces] = useState(initialWorkspaces);
  const [createOpen, setCreateOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#061015] text-white">
      <div className="flex min-h-screen">
        <aside className="hidden w-64 shrink-0 border-r border-white/10 bg-[#08141a] xl:flex xl:flex-col">
          <div className="border-b border-white/10 px-6 py-7">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-emerald-400">
              MoneyPulse
            </p>
            <h1 className="mt-2 text-lg font-bold">MarketMint Digital</h1>
            <p className="mt-1 text-xs text-slate-500">MMD Control Center</p>
          </div>

          <nav className="flex-1 space-y-1 p-4 text-sm">
            {[
              ["⌂", "Dashboard"],
              ["▦", "Companies"],
              ["◈", "Products"],
              ["📣", "Campaigns"],
              ["✦", "Creatives"],
              ["▤", "Landing Pages"],
              ["◎", "Leads"],
              ["✓", "Approvals"],
              ["⌁", "Analytics"],
              ["⚙", "Settings"],
            ].map(([icon, label], index) => (
              <button
                key={label}
                className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left transition ${
                  index === 0
                    ? "bg-emerald-400/10 text-emerald-300"
                    : "text-slate-400 hover:bg-white/5 hover:text-white"
                }`}
              >
                <span className="w-5 text-center">{icon}</span>
                {label}
              </button>
            ))}
          </nav>

          <div className="border-t border-white/10 p-5">
            <p className="text-xs font-semibold text-slate-300">MMD V1</p>
            <p className="mt-1 text-[11px] text-slate-600">
              Multi-company growth platform
            </p>
          </div>
        </aside>

        <div className="min-w-0 flex-1">
          <header className="sticky top-0 z-20 border-b border-white/10 bg-[#061015]/95 backdrop-blur">
            <div className="flex items-center justify-between gap-4 px-5 py-4 md:px-8">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-400">
                  MoneyPulse MarketMint Digital
                </p>
                <h2 className="mt-1 text-xl font-bold md:text-2xl">
                  Marketing Control Center
                </h2>
              </div>

              <div className="flex items-center gap-3">
                <div className="hidden rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs text-slate-400 md:block">
                  4 Workspaces
                </div>

                <button
                  onClick={() => setCreateOpen(!createOpen)}
                  className="rounded-xl bg-emerald-400 px-4 py-2.5 text-sm font-bold text-[#04100c] transition hover:bg-emerald-300"
                >
                  + Create
                </button>
              </div>
            </div>
          </header>

          <div className="mx-auto max-w-[1600px] px-5 py-7 md:px-8">
            {createOpen && (
              <section className="mb-7 rounded-2xl border border-emerald-400/20 bg-[#0a171d] p-5">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
                      Quick Create
                    </p>
                    <h3 className="mt-1 text-lg font-semibold">
                      What do you want to create?
                    </h3>
                  </div>

                  <button
                    onClick={() => setCreateOpen(false)}
                    className="rounded-lg border border-white/10 px-3 py-1.5 text-xs text-slate-400 hover:text-white"
                  >
                    Close
                  </button>
                </div>

                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
                  {quickCreate.map((item) => (
                    <button
                      key={item.title}
                      className="rounded-xl border border-white/10 bg-white/[0.025] p-4 text-left transition hover:border-emerald-400/30 hover:bg-emerald-400/[0.04]"
                    >
                      <span className="text-xl">{item.icon}</span>
                      <p className="mt-3 text-sm font-semibold">{item.title}</p>
                      <p className="mt-1 text-[11px] leading-4 text-slate-500">
                        {item.text}
                      </p>
                    </button>
                  ))}
                </div>
              </section>
            )}

            <section className="mb-8">
              <div className="mb-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Overall Performance
                </p>
                <h3 className="mt-1 text-xl font-semibold">Growth Overview</h3>
              </div>

              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-7">
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

            <section className="mb-8">
              <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
                    Company Workspaces
                  </p>
                  <h3 className="mt-1 text-xl font-semibold">
                    Marketing Performance
                  </h3>
                  <p className="mt-1 text-xs text-slate-500">
                    Each company operates as an isolated marketing workspace.
                  </p>
                </div>

                <button
                  onClick={() => setCreateOpen(true)}
                  className="w-fit rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2 text-xs font-semibold text-slate-300 hover:border-emerald-400/30 hover:text-white"
                >
                  + Add Company
                </button>
              </div>

              <div className="grid gap-4 md:grid-cols-2 2xl:grid-cols-4">
                {workspaces.map((company) => (
                  <button
                    key={company.id}
                    onClick={() => router.push(`/companies/${company.slug}`)}
                    className="group rounded-2xl border border-white/10 bg-[#0a151b] p-5 text-left transition hover:-translate-y-0.5 hover:border-emerald-400/30 hover:bg-[#0c1920]"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-white/[0.04]">
                          <span className="text-[9px] font-semibold uppercase tracking-wider text-slate-500">
                            Logo
                          </span>
                        </div>

                        <div>
                          <h4 className="font-semibold">{company.name}</h4>
                          <p className="mt-1 text-[11px] text-slate-500">
                            {company.industry}
                          </p>
                        </div>
                      </div>

                      <span className="rounded-full border border-amber-400/20 bg-amber-400/[0.06] px-2.5 py-1 text-[9px] font-semibold uppercase tracking-wider text-amber-300">
                        {company.status}
                      </span>
                    </div>

                    <div className="mt-5 grid grid-cols-2 gap-2">
                      <div className="rounded-xl bg-white/[0.025] p-3">
                        <p className="text-[10px] text-slate-500">Traffic</p>
                        <p className="mt-1 text-lg font-bold">
                          {company.traffic}
                        </p>
                      </div>

                      <div className="rounded-xl bg-white/[0.025] p-3">
                        <p className="text-[10px] text-slate-500">Reach</p>
                        <p className="mt-1 text-lg font-bold">
                          {company.reach}
                        </p>
                      </div>

                      <div className="rounded-xl bg-white/[0.025] p-3">
                        <p className="text-[10px] text-slate-500">Leads</p>
                        <p className="mt-1 text-lg font-bold">
                          {company.leads}
                        </p>
                      </div>

                      <div className="rounded-xl bg-white/[0.025] p-3">
                        <p className="text-[10px] text-slate-500">
                          Conversion
                        </p>
                        <p className="mt-1 text-lg font-bold">
                          {company.conversion}
                        </p>
                      </div>
                    </div>

                    <div className="mt-4 flex items-center justify-between border-t border-white/[0.07] pt-4">
                      <span className="text-[11px] text-slate-500">
                        {company.campaigns} active campaigns
                      </span>
                      <span className="text-xs font-semibold text-emerald-400">
                        Open Workspace →
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </section>

            <div className="grid gap-5 xl:grid-cols-[1.1fr_0.9fr]">
              <section className="rounded-2xl border border-white/10 bg-white/[0.025] p-5">
                <div className="mb-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-purple-400">
                    Marketing Engine
                  </p>
                  <h3 className="mt-1 text-lg font-semibold">
                    Tools & Modules
                  </h3>
                </div>

                <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                  {marketingTools.map((tool) => (
                    <button
                      key={tool}
                      className="flex items-center justify-between rounded-xl border border-white/[0.07] bg-black/10 px-4 py-3 text-left text-xs text-slate-300 transition hover:border-purple-400/30 hover:text-white"
                    >
                      <span>{tool}</span>
                      <span className="text-slate-600">→</span>
                    </button>
                  ))}
                </div>
              </section>

              <section className="rounded-2xl border border-white/10 bg-white/[0.025] p-5">
                <div className="mb-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-400">
                    Scalable Setup
                  </p>
                  <h3 className="mt-1 text-lg font-semibold">
                    Industry Templates
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {industries.map((industry) => (
                    <span
                      key={industry}
                      className="rounded-full border border-white/[0.08] bg-black/10 px-3 py-2 text-[11px] text-slate-400"
                    >
                      {industry}
                    </span>
                  ))}
                </div>

                <div className="mt-5 rounded-xl border border-emerald-400/10 bg-emerald-400/[0.035] p-4">
                  <p className="text-xs font-semibold text-emerald-300">
                    Dynamic Workspace Architecture
                  </p>
                  <p className="mt-2 text-[11px] leading-5 text-slate-400">
                    Add future companies, industries and products without
                    rebuilding the dashboard. Company branding, campaigns,
                    creatives, landing pages, leads and analytics remain
                    isolated by workspace.
                  </p>
                </div>
              </section>
            </div>

            <div className="mt-5 grid gap-5 lg:grid-cols-2">
              <section className="rounded-2xl border border-white/10 bg-white/[0.025] p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
                      Approval Center
                    </p>
                    <h3 className="mt-1 text-lg font-semibold">
                      Pending Reviews
                    </h3>
                  </div>
                  <span className="text-2xl font-bold">0</span>
                </div>

                <div className="mt-5 rounded-xl border border-dashed border-white/10 p-6 text-center">
                  <p className="text-xs text-slate-500">
                    No creatives or campaigns waiting for approval.
                  </p>
                </div>
              </section>

              <section className="rounded-2xl border border-white/10 bg-white/[0.025] p-5">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
                    Recent Activity
                  </p>
                  <h3 className="mt-1 text-lg font-semibold">
                    Workspace Updates
                  </h3>
                </div>

                <div className="mt-5 rounded-xl border border-dashed border-white/10 p-6 text-center">
                  <p className="text-xs text-slate-500">
                    Activity will appear when your team starts creating
                    products, campaigns and content.
                  </p>
                </div>
              </section>
            </div>

            <footer className="mt-8 flex flex-col gap-2 border-t border-white/10 py-5 text-[11px] text-slate-600 sm:flex-row sm:items-center sm:justify-between">
              <span>MoneyPulse MarketMint Digital · MMD V1</span>
              <span>Multi-Company Digital Marketing Control Center</span>
            </footer>
          </div>
        </div>
      </div>
    </main>
  );
}



