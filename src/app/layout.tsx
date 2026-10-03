import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "MoneyPulse MarketMint Digital | MMD",
    template: "%s | MoneyPulse MarketMint Digital",
  },

  description:
    "MoneyPulse MarketMint Digital (MMD) provides market intelligence, research, market insights, strategy analytics and data-driven trading tools.",

  applicationName: "MoneyPulse",

  keywords: [
    "MoneyPulse",
    "market intelligence",
    "stock market research",
    "NIFTY analysis",
    "intraday market analysis",
    "options analytics",
    "trading research",
  ],

  authors: [{ name: "MoneyPulse" }],
  creator: "MoneyPulse",
  publisher: "MoneyPulse",

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    siteName: "MoneyPulse MarketMint Digital",
    title: "MoneyPulse MarketMint Digital | MMD",
    description:
      "Research, market insights, strategy analytics and data-driven market intelligence.",
  },

  twitter: {
    card: "summary_large_image",
    title: "MoneyPulse MarketMint Digital | MMD",
    description:
      "Research, market insights, strategy analytics and data-driven market intelligence.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>

      {gtmId ? <GoogleTagManager gtmId={gtmId} /> : null}
    </html>
  );
}

