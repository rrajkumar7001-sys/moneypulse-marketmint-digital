"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import QRCode from "qrcode";

export default function TrackingCenterPage() {
  const [baseUrl, setBaseUrl] = useState(
    "https://example.com/product"
  );

  const [source, setSource] = useState("instagram");
  const [medium, setMedium] = useState("social");
  const [campaign, setCampaign] = useState("product-launch");
  const [content, setContent] = useState("");
  const [term, setTerm] = useState("");
  const [copied, setCopied] = useState(false);
  const [qrDataUrl, setQrDataUrl] = useState("");
  const [qrError, setQrError] = useState("");

  const trackableUrl = useMemo(() => {
    try {
      const url = new URL(baseUrl);

      if (source.trim()) {
        url.searchParams.set("utm_source", source.trim());
      }

      if (medium.trim()) {
        url.searchParams.set("utm_medium", medium.trim());
      }

      if (campaign.trim()) {
        url.searchParams.set("utm_campaign", campaign.trim());
      }

      if (content.trim()) {
        url.searchParams.set("utm_content", content.trim());
      }

      if (term.trim()) {
        url.searchParams.set("utm_term", term.trim());
      }

      return url.toString();
    } catch {
      return "";
    }
  }, [baseUrl, source, medium, campaign, content, term]);

  useEffect(() => {
    let active = true;

    async function generateQr() {
      if (!trackableUrl) {
        setQrDataUrl("");
        setQrError("");
        return;
      }

      try {
        const dataUrl = await QRCode.toDataURL(trackableUrl, {
          width: 512,
          margin: 2,
          errorCorrectionLevel: "M",
        });

        if (active) {
          setQrDataUrl(dataUrl);
          setQrError("");
        }
      } catch {
        if (active) {
          setQrDataUrl("");
          setQrError("Unable to generate QR code.");
        }
      }
    }

    generateQr();

    return () => {
      active = false;
    };
  }, [trackableUrl]);

  function downloadQr() {
    if (!qrDataUrl) return;

    const link = document.createElement("a");
    link.href = qrDataUrl;

    const safeCampaign =
      campaign.trim().replace(/[^a-zA-Z0-9-_]/g, "-") ||
      "mmd-campaign";

    link.download = `${safeCampaign}-qr.png`;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  async function copyLink() {
    if (!trackableUrl) return;

    try {
      await navigator.clipboard.writeText(trackableUrl);
      setCopied(true);

      window.setTimeout(() => {
        setCopied(false);
      }, 1800);
    } catch {
      setCopied(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#07111f] text-white">
      <div className="mx-auto max-w-[1600px] px-5 py-6 lg:px-8">
        <div className="flex flex-wrap items-center gap-2 text-sm text-slate-500">
          <Link href="/" className="transition hover:text-white">
            MMD Dashboard
          </Link>

          <span>/</span>

          <span className="text-emerald-300">
            QR + UTM Tracking
          </span>
        </div>

        <section className="mt-6 overflow-hidden rounded-3xl border border-emerald-400/20 bg-gradient-to-br from-emerald-400/[0.08] via-cyan-400/[0.025] to-transparent p-6 lg:p-8">
          <div className="flex flex-col justify-between gap-6 xl:flex-row xl:items-center">
            <div>
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-bold text-emerald-300">
                  MMD Tracking Center
                </span>

                <span className="rounded-full border border-cyan-400/20 bg-cyan-400/[0.08] px-3 py-1 text-xs font-semibold text-cyan-300">
                  Frontend V1
                </span>
              </div>

              <h1 className="mt-4 text-3xl font-bold tracking-tight lg:text-4xl">
                QR + UTM + Trackable Link Center
              </h1>

              <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-400">
                Build campaign tracking URLs for social media, ads,
                WhatsApp, landing pages and offline QR campaigns while
                keeping company and product attribution ready for analytics.
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
            ["Trackable Links", "0", "Saved links"],
            ["QR Codes", "0", "Generated QR"],
            ["Total Clicks", "0", "Tracking pending"],
            ["Conversions", "0", "Analytics pending"],
          ].map(([label, value, note]) => (
            <article
              key={label}
              className="rounded-2xl border border-white/10 bg-white/[0.035] p-5"
            >
              <p className="text-xs uppercase tracking-[0.12em] text-slate-500">
                {label}
              </p>

              <p className="mt-3 text-3xl font-bold">
                {value}
              </p>

              <p className="mt-2 text-xs text-slate-600">
                {note}
              </p>
            </article>
          ))}
        </section>

        <section className="mt-6 grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 lg:p-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-300">
                UTM Builder
              </p>

              <h2 className="mt-2 text-xl font-semibold">
                Create Trackable Campaign Link
              </h2>

              <p className="mt-2 text-sm text-slate-500">
                Enter the destination and campaign attribution.
                Your final URL updates automatically.
              </p>
            </div>

            <div className="mt-6">
              <label className="text-xs font-semibold text-slate-400">
                Destination URL
              </label>

              <input
                value={baseUrl}
                onChange={(event) => setBaseUrl(event.target.value)}
                placeholder="https://yourwebsite.com/product"
                className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-700 focus:border-emerald-400/40"
              />
            </div>

            <div className="mt-5 grid gap-4 md:grid-cols-2">
              <div>
                <label className="text-xs font-semibold text-slate-400">
                  UTM Source
                </label>

                <input
                  value={source}
                  onChange={(event) => setSource(event.target.value)}
                  placeholder="instagram"
                  className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm outline-none focus:border-emerald-400/40"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-400">
                  UTM Medium
                </label>

                <input
                  value={medium}
                  onChange={(event) => setMedium(event.target.value)}
                  placeholder="social"
                  className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm outline-none focus:border-emerald-400/40"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-400">
                  UTM Campaign
                </label>

                <input
                  value={campaign}
                  onChange={(event) => setCampaign(event.target.value)}
                  placeholder="product-launch"
                  className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm outline-none focus:border-emerald-400/40"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-400">
                  UTM Content
                </label>

                <input
                  value={content}
                  onChange={(event) => setContent(event.target.value)}
                  placeholder="creative-a"
                  className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm outline-none focus:border-emerald-400/40"
                />
              </div>
            </div>

            <div className="mt-4">
              <label className="text-xs font-semibold text-slate-400">
                UTM Term
              </label>

              <input
                value={term}
                onChange={(event) => setTerm(event.target.value)}
                placeholder="Optional keyword / audience"
                className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm outline-none focus:border-emerald-400/40"
              />
            </div>

            <div className="mt-6 rounded-2xl border border-emerald-400/15 bg-emerald-400/[0.04] p-4">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-emerald-300">
                    Final Trackable URL
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    Generated automatically from your UTM settings.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={copyLink}
                  disabled={!trackableUrl}
                  className="rounded-lg bg-emerald-400 px-3 py-2 text-xs font-bold text-[#04100c] transition hover:bg-emerald-300 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  {copied ? "Copied ✓" : "Copy Link"}
                </button>
              </div>

              <div className="mt-4 break-all rounded-xl border border-white/[0.07] bg-black/20 p-4 font-mono text-xs leading-6 text-slate-300">
                {trackableUrl ||
                  "Enter a valid destination URL to generate the trackable link."}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <section className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 lg:p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-300">
                QR Generator
              </p>

              <h2 className="mt-2 text-xl font-semibold">
                Campaign QR Preview
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                The QR will point to the generated trackable URL so
                offline scans can retain campaign attribution.
              </p>

              <div className="mt-6 flex min-h-[250px] items-center justify-center rounded-3xl border border-dashed border-white/10 bg-white/[0.02] p-5">
                <div className="text-center">
                  {qrDataUrl ? (
                    <img
                      src={qrDataUrl}
                      alt="Trackable campaign QR code"
                      className="mx-auto h-44 w-44 rounded-2xl bg-white p-2"
                    />
                  ) : (
                    <div className="mx-auto flex h-44 w-44 items-center justify-center rounded-2xl border border-white/10 bg-black/20 px-4">
                      <p className="text-xs leading-5 text-slate-600">
                        Enter a valid destination URL to generate QR.
                      </p>
                    </div>
                  )}

                  <p className="mt-4 text-sm font-semibold">
                    {qrDataUrl ? "Live Scannable QR" : "QR Preview"}
                  </p>

                  <p className="mt-1 text-xs text-slate-600">
                    {qrError ||
                      (qrDataUrl
                        ? "QR automatically follows the final trackable URL."
                        : "Waiting for a valid trackable URL.")}
                  </p>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3">
                <button
                  type="button"
                  disabled={!trackableUrl}
                  onClick={() => {
                    if (trackableUrl) {
                      navigator.clipboard.writeText(trackableUrl);
                    }
                  }}
                  className="rounded-xl border border-white/10 bg-white/[0.035] px-4 py-3 text-xs font-semibold text-slate-300 transition hover:bg-white/[0.06] disabled:cursor-not-allowed disabled:opacity-40"
                >
                  Copy QR Link
                </button>

                <button
                  type="button"
                  onClick={downloadQr}
                  disabled={!qrDataUrl}
                  className="rounded-xl bg-emerald-400 px-4 py-3 text-xs font-bold text-[#04100c] transition hover:bg-emerald-300 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  Download PNG
                </button>
              </div>
            </section>

            <section className="rounded-3xl border border-purple-400/15 bg-purple-400/[0.035] p-5 lg:p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-purple-300">
                Attribution Context
              </p>

              <div className="mt-4 space-y-3">
                {[
                  ["Company", "Select during campaign setup"],
                  ["Product", "Product attribution"],
                  ["Campaign", campaign || "Not selected"],
                  ["Source", source || "Not selected"],
                  ["Medium", medium || "Not selected"],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="flex items-center justify-between gap-4 rounded-xl border border-white/[0.07] bg-black/10 px-4 py-3"
                  >
                    <span className="text-xs text-slate-500">
                      {label}
                    </span>

                    <span className="text-right text-xs font-semibold text-slate-300">
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </section>

        <section className="mt-6 rounded-3xl border border-white/10 bg-white/[0.025] p-5 lg:p-6">
          <div className="grid gap-5 lg:grid-cols-[0.75fr_2fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-amber-300">
                Tracking Flow
              </p>

              <h2 className="mt-2 text-lg font-semibold">
                Campaign Attribution
              </h2>
            </div>

            <div className="grid gap-2 sm:grid-cols-3 lg:grid-cols-6">
              {[
                "Campaign",
                "Trackable URL",
                "QR / Link",
                "Visitor",
                "Lead",
                "Analytics",
              ].map((item, index) => (
                <div
                  key={item}
                  className="rounded-xl border border-white/[0.07] bg-black/10 p-3 text-center"
                >
                  <p className="text-[10px] text-slate-600">
                    {String(index + 1).padStart(2, "0")}
                  </p>

                  <p className="mt-1 text-xs font-semibold text-slate-300">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <footer className="mt-10 flex flex-col gap-2 border-t border-white/10 py-6 text-xs text-slate-600 sm:flex-row sm:justify-between">
          <span>MoneyPulse MarketMint Digital · MMD V1</span>
          <span>QR + UTM + Trackable Link Center</span>
        </footer>
      </div>
    </main>
  );
}

