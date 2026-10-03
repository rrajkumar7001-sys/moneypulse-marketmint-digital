"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useMemo, useState } from "react";

type TaskStatus =
  | "Pending"
  | "In Progress"
  | "Approval Required"
  | "Completed";

type Priority = "Low" | "Medium" | "High";

type Task = {
  id: number;
  title: string;
  category: string;
  assignedTo: string;
  dueDate: string;
  priority: Priority;
  status: TaskStatus;
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

const initialTasks: Task[] = [
  {
    id: 1,
    title: "Create product campaign brief",
    category: "Campaign",
    assignedTo: "Unassigned",
    dueDate: "Not scheduled",
    priority: "High",
    status: "Pending",
  },
  {
    id: 2,
    title: "Prepare 2 creative concepts",
    category: "Creative",
    assignedTo: "Unassigned",
    dueDate: "Not scheduled",
    priority: "High",
    status: "Pending",
  },
  {
    id: 3,
    title: "Draft landing-page headline",
    category: "Landing Page",
    assignedTo: "Unassigned",
    dueDate: "Not scheduled",
    priority: "Medium",
    status: "Pending",
  },
  {
    id: 4,
    title: "Research 5 SEO keyword ideas",
    category: "SEO",
    assignedTo: "Unassigned",
    dueDate: "Not scheduled",
    priority: "Medium",
    status: "Pending",
  },
  {
    id: 5,
    title: "Review pending approvals",
    category: "Approval",
    assignedTo: "Unassigned",
    dueDate: "Not scheduled",
    priority: "High",
    status: "Approval Required",
  },
];

const statusOptions: TaskStatus[] = [
  "Pending",
  "In Progress",
  "Approval Required",
  "Completed",
];

function statusStyle(status: TaskStatus) {
  if (status === "Completed") {
    return "border-emerald-400/20 bg-emerald-400/10 text-emerald-300";
  }

  if (status === "In Progress") {
    return "border-sky-400/20 bg-sky-400/10 text-sky-300";
  }

  if (status === "Approval Required") {
    return "border-amber-400/20 bg-amber-400/10 text-amber-300";
  }

  return "border-white/10 bg-white/5 text-slate-300";
}

function priorityStyle(priority: Priority) {
  if (priority === "High") {
    return "text-rose-300";
  }

  if (priority === "Medium") {
    return "text-amber-300";
  }

  return "text-slate-400";
}

export default function TaskEnginePage() {
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

  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [filter, setFilter] = useState<"All" | TaskStatus>("All");
  const [showCreate, setShowCreate] = useState(false);

  const [newTitle, setNewTitle] = useState("");
  const [newCategory, setNewCategory] = useState("Campaign");
  const [newPriority, setNewPriority] =
    useState<Priority>("Medium");

  const counts = useMemo(() => {
    return {
      total: tasks.length,
      pending: tasks.filter((task) => task.status === "Pending")
        .length,
      progress: tasks.filter(
        (task) => task.status === "In Progress"
      ).length,
      approval: tasks.filter(
        (task) => task.status === "Approval Required"
      ).length,
      completed: tasks.filter(
        (task) => task.status === "Completed"
      ).length,
    };
  }, [tasks]);

  const visibleTasks =
    filter === "All"
      ? tasks
      : tasks.filter((task) => task.status === filter);

  function updateStatus(id: number, status: TaskStatus) {
    setTasks((current) =>
      current.map((task) =>
        task.id === id ? { ...task, status } : task
      )
    );
  }

  function createTask() {
    const title = newTitle.trim();

    if (!title) return;

    setTasks((current) => [
      ...current,
      {
        id: Date.now(),
        title,
        category: newCategory,
        assignedTo: "Unassigned",
        dueDate: "Not scheduled",
        priority: newPriority,
        status: "Pending",
      },
    ]);

    setNewTitle("");
    setNewCategory("Campaign");
    setNewPriority("Medium");
    setShowCreate(false);
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

          <span className="text-slate-200">Task Engine</span>
        </div>

        {/* Header */}
        <section className="mt-6 rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.025] p-6 lg:p-8">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
            <div>
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-300">
                  MMD Task Engine
                </span>

                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-400">
                  {companyName} → {productName}
                </span>
              </div>

              <h1 className="mt-4 text-3xl font-bold tracking-tight">
                Daily Marketing Tasks
              </h1>

              <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-400">
                Assign, execute, review and complete product-specific
                marketing work. This becomes the execution layer for
                the AI Marketing Coach.
              </p>
            </div>

            <button
              type="button"
              onClick={() => setShowCreate((value) => !value)}
              className="rounded-xl bg-emerald-400 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-emerald-300"
            >
              + Create Task
            </button>
          </div>
        </section>

        {/* Stats */}
        <section className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
          {[
            ["Total Tasks", counts.total],
            ["Pending", counts.pending],
            ["In Progress", counts.progress],
            ["Approval Required", counts.approval],
            ["Completed", counts.completed],
          ].map(([label, value]) => (
            <div
              key={label}
              className="rounded-2xl border border-white/10 bg-white/[0.035] p-5"
            >
              <p className="text-xs uppercase tracking-[0.14em] text-slate-500">
                {label}
              </p>

              <p className="mt-3 text-3xl font-bold">{value}</p>
            </div>
          ))}
        </section>

        {/* Create Task */}
        {showCreate && (
          <section className="mt-6 rounded-2xl border border-emerald-400/20 bg-emerald-400/[0.04] p-5">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-semibold">Create Marketing Task</h2>
                <p className="mt-1 text-sm text-slate-500">
                  Manual task creation foundation.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setShowCreate(false)}
                className="text-sm text-slate-500 hover:text-white"
              >
                Close
              </button>
            </div>

            <div className="mt-5 grid gap-4 lg:grid-cols-4">
              <input
                value={newTitle}
                onChange={(event) => setNewTitle(event.target.value)}
                placeholder="Task title"
                className="rounded-xl border border-white/10 bg-[#07111f] px-4 py-3 text-sm outline-none placeholder:text-slate-600 focus:border-emerald-400/40 lg:col-span-2"
              />

              <select
                value={newCategory}
                onChange={(event) =>
                  setNewCategory(event.target.value)
                }
                className="rounded-xl border border-white/10 bg-[#07111f] px-4 py-3 text-sm outline-none"
              >
                <option>Campaign</option>
                <option>Creative</option>
                <option>Reels & Videos</option>
                <option>Landing Page</option>
                <option>Lead Form</option>
                <option>SEO</option>
                <option>Social Post</option>
                <option>Ads</option>
                <option>WhatsApp</option>
                <option>Approval</option>
              </select>

              <select
                value={newPriority}
                onChange={(event) =>
                  setNewPriority(event.target.value as Priority)
                }
                className="rounded-xl border border-white/10 bg-[#07111f] px-4 py-3 text-sm outline-none"
              >
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
              </select>
            </div>

            <button
              type="button"
              onClick={createTask}
              className="mt-4 rounded-xl bg-emerald-400 px-5 py-2.5 text-sm font-bold text-slate-950"
            >
              Create Task
            </button>
          </section>
        )}

        {/* Filter */}
        <section className="mt-6 flex flex-wrap gap-2">
          {[
            "All",
            "Pending",
            "In Progress",
            "Approval Required",
            "Completed",
          ].map((item) => (
            <button
              key={item}
              type="button"
              onClick={() =>
                setFilter(item as "All" | TaskStatus)
              }
              className={`rounded-xl border px-4 py-2 text-sm transition ${
                filter === item
                  ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-300"
                  : "border-white/10 bg-white/[0.025] text-slate-400 hover:text-white"
              }`}
            >
              {item}
            </button>
          ))}
        </section>

        {/* Task List */}
        <section className="mt-5 space-y-3">
          {visibleTasks.map((task) => (
            <article
              key={task.id}
              className="rounded-2xl border border-white/10 bg-white/[0.035] p-5"
            >
              <div className="grid gap-5 xl:grid-cols-[1.5fr_0.7fr_0.7fr_0.8fr_1fr] xl:items-center">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-lg border border-white/10 bg-white/5 px-2 py-1 text-[10px] uppercase tracking-wider text-slate-500">
                      {task.category}
                    </span>

                    <span
                      className={`text-xs font-semibold ${priorityStyle(
                        task.priority
                      )}`}
                    >
                      {task.priority} Priority
                    </span>
                  </div>

                  <h3 className="mt-3 font-semibold text-slate-100">
                    {task.title}
                  </h3>
                </div>

                <div>
                  <p className="text-[10px] uppercase tracking-wider text-slate-600">
                    Assigned To
                  </p>
                  <p className="mt-1 text-sm text-slate-300">
                    {task.assignedTo}
                  </p>
                </div>

                <div>
                  <p className="text-[10px] uppercase tracking-wider text-slate-600">
                    Due Date
                  </p>
                  <p className="mt-1 text-sm text-slate-300">
                    {task.dueDate}
                  </p>
                </div>

                <div>
                  <span
                    className={`inline-flex rounded-full border px-3 py-1.5 text-xs font-medium ${statusStyle(
                      task.status
                    )}`}
                  >
                    {task.status}
                  </span>
                </div>

                <select
                  value={task.status}
                  onChange={(event) =>
                    updateStatus(
                      task.id,
                      event.target.value as TaskStatus
                    )
                  }
                  className="rounded-xl border border-white/10 bg-[#07111f] px-3 py-2.5 text-sm text-slate-300 outline-none"
                >
                  {statusOptions.map((status) => (
                    <option key={status}>{status}</option>
                  ))}
                </select>
              </div>
            </article>
          ))}
        </section>

        {/* AI Foundation */}
        <section className="mt-6 grid gap-5 lg:grid-cols-2">
          <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/[0.05] p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-emerald-300">
              AI Marketing Coach
            </p>

            <h2 className="mt-2 text-lg font-semibold">
              Task Engine Connection
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-400">
              The AI Coach will use company, product, campaign,
              performance and pending-work context to prepare the
              daily task plan. AI-generated work will enter this Task
              Engine for team execution.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
              Workflow
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-2 text-sm">
              <span className="rounded-lg bg-white/5 px-3 py-2">
                AI Plan
              </span>
              <span className="text-slate-600">→</span>
              <span className="rounded-lg bg-white/5 px-3 py-2">
                Assigned
              </span>
              <span className="text-slate-600">→</span>
              <span className="rounded-lg bg-white/5 px-3 py-2">
                Work
              </span>
              <span className="text-slate-600">→</span>
              <span className="rounded-lg bg-white/5 px-3 py-2">
                Review
              </span>
              <span className="text-slate-600">→</span>
              <span className="rounded-lg bg-white/5 px-3 py-2">
                Approval
              </span>
              <span className="text-slate-600">→</span>
              <span className="rounded-lg bg-white/5 px-3 py-2">
                Complete
              </span>
            </div>
          </div>
        </section>

        <footer className="mt-10 border-t border-white/10 py-6 text-center text-xs text-slate-600">
          MoneyPulse MarketMint Digital · MMD Task Engine V1
        </footer>
      </div>
    </main>
  );
}
