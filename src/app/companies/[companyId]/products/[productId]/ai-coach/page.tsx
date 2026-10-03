"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useMemo, useState } from "react";

type PlanStatus =
  | "Suggested"
  | "Added to Tasks"
  | "Approval Required";

type DailyPlanItem = {
  id: number;
  title: string;
  category: string;
  reason: string;
  priority: "High" | "Medium" | "Low";
  status: PlanStatus;
};

const companies: Record<string, string> = {
  "anand-rathi": "Anand Rathi",
  "motilal-oswal": "Motilal Oswal",
  kotak: "Kotak",
  "moneypulse-app": "MoneyPulse App",
};

const products: Record<string, string> = {
  "mutual-funds": "Mutual Funds",
  insurance: "Insurance",
  bonds: "Bonds",
  ipo: "IPO",
  "private-equity": "Private Equity",
  "unlisted-shares": "Unlisted Shares",
  "market-intelligence": "Market Intelligence",
  "research-dashboard": "Research Dashboard",
  "trading-tools": "Trading Tools",
  "user-acquisition": "User Acquisition",
};

const foundationPlan: DailyPlanItem[] = [
  {
    id: 1,
    title: "Prepare today's campaign focus",
    category: "Campaign",
    reason:
      "Start the day with one clear product marketing objective before creating content.",
    priority: "High",
    status: "Suggested",
  },
  {
    id: 2,
    title: "Draft 2 creative concepts",
    category: "Creative",
    reason:
      "Create multiple concepts so the team can review the strongest approved direction.",
    priority: "High",
    status: "Suggested",
  },
  {
    id: 3,
    title: "Prepare one landing-page headline variation",
    category: "Landing Page",
    reason:
      "Keep campaign messaging aligned from creative to landing-page experience.",
    priority: "Medium",
    status: "Suggested",
  },
  {
    id: 4,
    title: "Research 5 relevant SEO keyword ideas",
    category: "SEO",
    reason:
      "Build a reusable organic content and search-intent pipeline for this product.",
    priority: "Medium",
    status: "Suggested",
  },
  {
    id: 5,
    title: "Review items waiting for approval",
    category: "Approval",
    reason:
      "Publishing should happen only after the required human review and approval.",
    priority: "High",
    status: "Approval Required",
  },
];

function priorityClass(priority: "High" | "Medium" | "Low") {
  if (priority === "High") return "text-rose-300";
  if (priority === "Medium") return "text-amber-300";
  return "text-slate-400";
}

export default function AIMarketingCoachPage() {
  const params = useParams<{
    companyId: string;
    productId: string;
  }>();

  const companyId = params.companyId;
  const productId = params.productId;

  const companyName =
    companies[companyId] ??
    companyId
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

  const productName =
    products[productId] ??
    productId
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

  const [plan, setPlan] =
    useState<DailyPlanItem[]>(foundationPlan);

  const [objective, setObjective] = useState(
    "Build product awareness and generate qualified enquiries"
  );

  const summary = useMemo(() => {
    return {
      suggested: plan.filter(
        (item) => item.status === "Suggested"
      ).length,
      taskReady: plan.filter(
        (item) => item.status === "Added to Tasks"
      ).length,
      approval: plan.filter(
        (item) => item.status === "Approval Required"
      ).length,
    };
  }, [plan]);

  function addToTasks(id: number) {
    setPlan((current) =>
      current.map((item) =>
        item.id === id && item.status === "Suggested"
          ? { ...item, status: "Added to Tasks" }
          : item
      )
    );
  }

  function resetFoundationPlan() {
    setPlan(foundationPlan);
  }

  return (
    <main className="min-h-screen bg-[#07111f] text-white">
      <div className="mx-auto max-w-[1600px] px-5 py-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex flex-wrap items-center gap-2 text-sm text-slate-500">
          <Link href="/" className="hover:text-white">
            MMD Dashboard
          </Link>

          <span>/</span>

          <Link
            href={`/companies/${companyId}`}
            className="hover:text-white"
          >
            {companyName}
          </Link>

          <span>/</span>

          <Link
            href={`/companies/${companyId}/products/${productId}`}
            className="hover:text-white"
          >
            {productName}
          </Link>

          <span>/</span>

          <span className="text-emerald-300">
            AI Marketing Coach
          </span>
        </div>

        {/* Header */}
        <section className="mt-6 overflow-hidden rounded-3xl border border-emerald-400/20 bg-gradient-to-br from-emerald-400/[0.08] to-white/[0.025] p-6 lg:p-8">
          <div className="flex flex-col justify-between gap-6 xl:flex-row xl:items-center">
            <div>
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-bold text-emerald-300">
                  AI Marketing Coach V1
                </span>

                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-400">
                  {companyName} → {productName}
                </span>
              </div>

              <h1 className="mt-4 text-3xl font-bold tracking-tight">
                Today&apos;s Marketing Plan
              </h1>

              <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-400">
                A workspace-aware planning layer designed to turn
                company, product, campaign, task, approval and
                performance context into structured daily marketing
                actions.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              <Link
                href={`/companies/${companyId}/products/${productId}/tasks`}
                className="rounded-xl border border-white/10 bg-white/[0.05] px-4 py-2.5 text-sm font-medium text-slate-200 hover:bg-white/10"
              >
                Open Task Engine
              </Link>

              <button
                type="button"
                onClick={resetFoundationPlan}
                className="rounded-xl bg-emerald-400 px-4 py-2.5 text-sm font-bold text-slate-950 hover:bg-emerald-300"
              >
                Refresh Plan
              </button>
            </div>
          </div>
        </section>

        {/* Context Pipeline */}
        <section className="mt-6">
          <div className="mb-4">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-300">
              Intelligence Context
            </p>

            <h2 className="mt-2 text-xl font-semibold">
              What the Coach will understand
            </h2>
          </div>

          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-6">
            {[
              ["Company", companyName],
              ["Product", productName],
              ["Campaign", "Context Ready"],
              ["Pending Work", "Task Context"],
              ["Approvals", "Review Context"],
              ["Performance", "Analytics Context"],
            ].map(([title, value]) => (
              <div
                key={title}
                className="rounded-2xl border border-white/10 bg-white/[0.035] p-4"
              >
                <p className="text-[10px] uppercase tracking-[0.14em] text-slate-600">
                  {title}
                </p>

                <p className="mt-2 text-sm font-medium text-slate-200">
                  {value}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Objective */}
        <section className="mt-6 rounded-2xl border border-white/10 bg-white/[0.035] p-5">
          <div className="grid gap-5 lg:grid-cols-[0.7fr_2fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
                Today&apos;s Objective
              </p>

              <p className="mt-2 text-sm text-slate-400">
                Human-defined goal that guides the daily plan.
              </p>
            </div>

            <input
              value={objective}
              onChange={(event) =>
                setObjective(event.target.value)
              }
              className="rounded-xl border border-white/10 bg-[#07111f] px-4 py-3 text-sm text-slate-200 outline-none focus:border-emerald-400/40"
            />
          </div>
        </section>

        {/* Summary */}
        <section className="mt-6 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-5">
            <p className="text-xs uppercase tracking-wider text-slate-500">
              Suggested
            </p>
            <p className="mt-3 text-3xl font-bold">
              {summary.suggested}
            </p>
          </div>

          <div className="rounded-2xl border border-sky-400/20 bg-sky-400/[0.05] p-5">
            <p className="text-xs uppercase tracking-wider text-sky-300">
              Added To Tasks
            </p>
            <p className="mt-3 text-3xl font-bold">
              {summary.taskReady}
            </p>
          </div>

          <div className="rounded-2xl border border-amber-400/20 bg-amber-400/[0.05] p-5">
            <p className="text-xs uppercase tracking-wider text-amber-300">
              Approval Required
            </p>
            <p className="mt-3 text-3xl font-bold">
              {summary.approval}
            </p>
          </div>
        </section>

        {/* Daily Plan */}
        <section className="mt-6 grid gap-6 xl:grid-cols-[1.5fr_0.7fr]">
          <div>
            <div className="mb-4 flex items-end justify-between gap-4">
              <div>
                <h2 className="text-xl font-semibold">
                  Recommended Actions
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  Foundation recommendations for {productName}.
                </p>
              </div>

              <span className="text-xs text-slate-600">
                Objective: {objective}
              </span>
            </div>

            <div className="space-y-3">
              {plan.map((item, index) => (
                <article
                  key={item.id}
                  className="rounded-2xl border border-white/10 bg-white/[0.035] p-5"
                >
                  <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-center">
                    <div className="flex gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-sm font-bold text-slate-400">
                        {index + 1}
                      </div>

                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="rounded-lg border border-white/10 bg-white/5 px-2 py-1 text-[10px] uppercase tracking-wider text-slate-500">
                            {item.category}
                          </span>

                          <span
                            className={`text-xs font-semibold ${priorityClass(
                              item.priority
                            )}`}
                          >
                            {item.priority} Priority
                          </span>
                        </div>

                        <h3 className="mt-3 font-semibold">
                          {item.title}
                        </h3>

                        <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-500">
                          {item.reason}
                        </p>
                      </div>
                    </div>

                    <div className="shrink-0">
                      {item.status === "Suggested" ? (
                        <button
                          type="button"
                          onClick={() => addToTasks(item.id)}
                          className="rounded-xl border border-emerald-400/20 bg-emerald-400/10 px-4 py-2.5 text-sm font-semibold text-emerald-300 hover:bg-emerald-400/15"
                        >
                          + Add to Tasks
                        </button>
                      ) : (
                        <span
                          className={`inline-flex rounded-xl border px-4 py-2.5 text-xs font-semibold ${
                            item.status === "Approval Required"
                              ? "border-amber-400/20 bg-amber-400/10 text-amber-300"
                              : "border-sky-400/20 bg-sky-400/10 text-sky-300"
                          }`}
                        >
                          {item.status}
                        </span>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-5">
            <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/[0.05] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-emerald-300">
                Daily Logic
              </p>

              <h2 className="mt-2 text-lg font-semibold">
                Coach Decision Flow
              </h2>

              <div className="mt-5 space-y-2">
                {[
                  "Read workspace context",
                  "Read product context",
                  "Check unfinished work",
                  "Check approval queue",
                  "Review performance",
                  "Apply today's objective",
                  "Prepare priority plan",
                ].map((step, index) => (
                  <div
                    key={step}
                    className="flex items-center gap-3 rounded-xl border border-white/10 bg-[#07111f]/60 p-3"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white/5 text-xs text-slate-400">
                      {index + 1}
                    </span>

                    <span className="text-sm text-slate-300">
                      {step}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
                Publishing Guardrail
              </p>

              <h2 className="mt-2 font-semibold">
                Human Approval Required
              </h2>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                The Coach can prepare plans, briefs and draft
                recommendations. Publishing remains behind the
                review and approval workflow.
              </p>

              <div className="mt-4 flex flex-wrap items-center gap-2 text-xs">
                <span className="rounded-lg bg-white/5 px-3 py-2">
                  AI Draft
                </span>
                <span className="text-slate-600">→</span>
                <span className="rounded-lg bg-white/5 px-3 py-2">
                  Human Review
                </span>
                <span className="text-slate-600">→</span>
                <span className="rounded-lg bg-white/5 px-3 py-2">
                  Approval
                </span>
                <span className="text-slate-600">→</span>
                <span className="rounded-lg bg-white/5 px-3 py-2">
                  Publish
                </span>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
                Isolation
              </p>

              <p className="mt-3 text-sm leading-6 text-slate-400">
                AI context is scoped to{" "}
                <strong className="text-slate-200">
                  {companyName} → {productName}
                </strong>
                . Other company workspace data must not enter this
                plan.
              </p>
            </div>
          </div>
        </section>

        <footer className="mt-10 border-t border-white/10 py-6 text-center text-xs text-slate-600">
          MoneyPulse MarketMint Digital · AI Marketing Coach V1
          Foundation
        </footer>
      </div>
    </main>
  );
}
