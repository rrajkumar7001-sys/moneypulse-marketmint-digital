"use client";

import Link from "next/link";
import { useState } from "react";

const companies = [
  {
    name: "Anand Rathi",
    industry: "Finance & Wealth",
    website: "Not added",
    products: 6,
  },
  {
    name: "Motilal Oswal",
    industry: "Finance & Wealth",
    website: "Not added",
    products: 6,
  },
  {
    name: "Kotak",
    industry: "Finance & Wealth",
    website: "Not added",
    products: 6,
  },
  {
    name: "MoneyPulse App",
    industry: "Fintech",
    website: "Not added",
    products: 4,
  },
];

export default function BrandAssetsPage() {
  const [selectedCompany, setSelectedCompany] = useState("Anand Rathi");

  return (
    <main className="min-h-screen bg-[#07111f] text-white">
      <div className="mx-auto max-w-[1600px] px-5 py-6 lg:px-8">

        <div className="flex flex-wrap items-center gap-2 text-sm text-slate-500">
          <Link href="/" className="transition hover:text-white">
            MMD Dashboard
          </Link>
          <span>/</span>
          <span className="text-emerald-300">Brand Assets</span>
        </div>

        <section className="mt-6 rounded-3xl border border-emerald-400/20 bg-gradient-to-br from-emerald-400/[0.08] via-white/[0.025] to-transparent p-6 lg:p-8">
          <div className="flex flex-col justify-between gap-6 xl:flex-row xl:items-center">

            <div>
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-bold text-emerald-300">
                  MMD Brand Control
                </span>

                <span className="rounded-full border border-cyan-400/20 bg-cyan-400/[0.08] px-3 py-1 text-xs font-semibold text-cyan-300">
                  Frontend V1
                </span>
              </div>

              <h1 className="mt-4 text-3xl font-bold tracking-tight lg:text-4xl">
                Brand Assets Center
              </h1>

              <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-400">
                Manage company logos, websites, brand identity and reusable
                marketing assets while keeping every company workspace isolated.
              </p>
            </div>

            <Link
              href="/"
              className="w-fit rounded-xl border border-white/10 bg-white/[0.05] px-4 py-2.5 text-sm font-semibold text-slate-200 transition hover:bg-white/10"
            >
              ← Dashboard
            </Link>

          </div>
        </section>

        <section className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {[
            ["Companies", "4", "Initial workspaces"],
            ["Logos", "0", "Upload pending"],
            ["Brand Assets", "0", "Storage pending"],
            ["Websites", "0", "Links pending"],
          ].map(([label, value, note]) => (
            <article
              key={label}
              className="rounded-2xl border border-white/10 bg-white/[0.035] p-5"
            >
              <p className="text-xs uppercase tracking-[0.12em] text-slate-500">
                {label}
              </p>

              <p className="mt-3 text-3xl font-bold">{value}</p>

              <p className="mt-2 text-xs text-slate-600">{note}</p>
            </article>
          ))}
        </section>

        <section className="mt-6 grid gap-6 xl:grid-cols-[1fr_1fr]">

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 lg:p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-300">
              Company Brands
            </p>

            <h2 className="mt-2 text-xl font-semibold">
              Workspace Brand Library
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              Select a company to prepare its identity and marketing assets.
            </p>

            <div className="mt-5 space-y-3">
              {companies.map((company) => {
                const active = selectedCompany === company.name;

                return (
                  <button
                    key={company.name}
                    type="button"
                    onClick={() => setSelectedCompany(company.name)}
                    className={`w-full rounded-2xl border p-4 text-left transition ${
                      active
                        ? "border-emerald-400/30 bg-emerald-400/[0.07]"
                        : "border-white/[0.08] bg-black/10 hover:bg-white/[0.035]"
                    }`}
                  >
                    <div className="flex items-center gap-4">

                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-dashed border-white/15 bg-white/[0.03] text-[10px] font-semibold uppercase tracking-wider text-slate-600">
                        Logo
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <p className="font-semibold text-slate-100">
                            {company.name}
                          </p>

                          {active && (
                            <span className="rounded-full bg-emerald-400/10 px-2 py-1 text-[10px] font-bold text-emerald-300">
                              Selected
                            </span>
                          )}
                        </div>

                        <p className="mt-1 text-xs text-slate-500">
                          {company.industry}
                        </p>

                        <p className="mt-2 text-[11px] text-slate-600">
                          {company.products} product templates
                        </p>
                      </div>

                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 lg:p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-300">
              Brand Setup
            </p>

            <h2 className="mt-2 text-xl font-semibold">
              {selectedCompany}
            </h2>

            <div className="mt-5 flex items-center gap-4 rounded-2xl border border-white/[0.08] bg-black/10 p-4">

              <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-2xl border border-dashed border-white/15 bg-white/[0.03] text-xs font-semibold uppercase tracking-wider text-slate-600">
                Logo
              </div>

              <div>
                <p className="text-sm font-semibold">Company Logo</p>

                <p className="mt-1 text-xs leading-5 text-slate-500">
                  PNG, JPG or SVG brand asset.
                </p>

                <button
                  type="button"
                  className="mt-3 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-xs font-semibold text-slate-300"
                >
                  Upload Logo
                </button>
              </div>

            </div>

            <div className="mt-5 space-y-4">

              <div>
                <label className="text-xs font-semibold text-slate-400">
                  Company Name
                </label>

                <input
                  value={selectedCompany}
                  readOnly
                  className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-slate-300 outline-none"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-400">
                  Website
                </label>

                <input
                  placeholder="https://companywebsite.com"
                  className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm outline-none placeholder:text-slate-700 focus:border-emerald-400/40"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-400">
                  Industry
                </label>

                <select className="mt-2 w-full rounded-xl border border-white/10 bg-[#091522] px-4 py-3 text-sm text-slate-300 outline-none">
                  <option>Finance & Wealth</option>
                  <option>Fintech</option>
                  <option>Real Estate</option>
                  <option>Retail / E-commerce</option>
                  <option>Affiliate Marketing</option>
                  <option>Education</option>
                  <option>Automobile</option>
                  <option>Hospitality</option>
                  <option>Professional Services</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-400">
                  Brand Notes
                </label>

                <textarea
                  rows={4}
                  placeholder="Brand tone, approved messaging, design rules..."
                  className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm outline-none placeholder:text-slate-700 focus:border-emerald-400/40"
                />
              </div>

            </div>

            <button
              type="button"
              className="mt-5 w-full rounded-xl bg-emerald-400 px-4 py-3 text-sm font-bold text-[#04100c]"
            >
              Save Brand Setup
            </button>

            <p className="mt-3 text-center text-[11px] text-slate-600">
              Frontend preview only · Persistence connects with MMD database.
            </p>
          </div>

        </section>

        <section className="mt-6 rounded-3xl border border-white/10 bg-white/[0.025] p-5 lg:p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-purple-300">
            Asset Library
          </p>

          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">

            {[
              ["Logos", "Primary & alternate logos"],
              ["Brand Colors", "Approved identity palette"],
              ["Templates", "Reusable creative templates"],
              ["Documents", "Guidelines & approved assets"],
            ].map(([title, description]) => (
              <button
                key={title}
                type="button"
                className="rounded-2xl border border-white/[0.08] bg-black/10 p-4 text-left transition hover:border-white/20 hover:bg-white/[0.035]"
              >
                <p className="text-sm font-semibold text-slate-200">
                  {title}
                </p>

                <p className="mt-2 text-xs leading-5 text-slate-600">
                  {description}
                </p>

                <p className="mt-4 text-[10px] font-semibold uppercase tracking-wider text-emerald-300">
                  Storage Ready →
                </p>
              </button>
            ))}

          </div>
        </section>

        <section className="mt-6 rounded-3xl border border-amber-400/15 bg-amber-400/[0.035] p-5 lg:p-6">
          <div className="grid gap-4 lg:grid-cols-[0.75fr_2fr] lg:items-center">

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-amber-300">
                Isolation Rule
              </p>

              <h2 className="mt-2 text-lg font-semibold">
                Company-Specific Assets
              </h2>
            </div>

            <p className="text-sm leading-6 text-slate-400">
              Logos, websites, brand guidelines and marketing assets belong
              only to their selected company workspace. AI Marketing Coach
              and Creative Studio should use assets from the correct company
              context only.
            </p>

          </div>
        </section>

        <footer className="mt-10 flex flex-col gap-2 border-t border-white/10 py-6 text-xs text-slate-600 sm:flex-row sm:justify-between">
          <span>MoneyPulse MarketMint Digital · MMD V1</span>
          <span>Brand Assets Center</span>
        </footer>

      </div>
    </main>
  );
}
