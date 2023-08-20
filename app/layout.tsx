import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const title = "bitmatter labs";
const description =
  "bitmatter labs official website.";
const creator = {
  name: "bitmatter labs",
  url: "https://bitmatterlabs.com",
};
const githubActionsWorkflow = {
  isActionRunning: process.env.GITHUB_ACTIONS || false,
  repo: process.env.GITHUB_REPOSITORY?.toString().replace(
    new RegExp(`^${process.env.GITHUB_REPOSITORY_OWNER || ""}/`),
    ""
  ),
  repoOwner: process.env.GITHUB_REPOSITORY_OWNER,
};
const siteUrl = githubActionsWorkflow.isActionRunning
  ? "https://bitmatterlabs.com"
  : "http:/localhost:3000";
const appleTouchIcon = `${siteUrl}/apple-touch-icon.png`;
const androidIcon512 = `${siteUrl}/android-chrome-512x512.png`;
const ogImage = `${siteUrl}/bitmatter_og.png`;

export const metadata: Metadata = {
  title: title,
  description: description,
  applicationName: "bitmatter labs official website",
  authors: { name: creator.name, url: creator.url },
  generator: "Next.js",
  keywords: [
    "bitmatter",
    "bitmatter labs",
    "website development",
    "logo designing",
    "business card designing",
    "social media marketing",
    "webapp development",
    "chatbot development",
    "facebook ad campaigns",
    "digital marketing",
    "app development",
    "AI",
    "Artificial Intelligence",
    "Machine Learning",
    "Natural Language Processing",
    "NLP",
    "ML",
    "fullstack development",
    "bitmatterlabs.com",
    "bitmatter.com",
    "Bitmatter Labs",
    "bitmatter labs com",
    "bitmatter.lk",
    "bitmatterlabs.lk",
  ],
  viewport: { width: "device-width", height: "device-height", initialScale: 1 },
  creator: creator.name,
  publisher: creator.name,
  robots: { index: true, follow: true },
  alternates: {
    canonical: siteUrl,
    languages: { "en-US": siteUrl },
  },
  icons: {
    icon: androidIcon512,
    apple: appleTouchIcon,
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: title,
    description: description,
    siteName: title,
    images: [
      {
        url: ogImage,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: siteUrl,
    creator: creator.name,
    title: title,
    description: description,
    images: ogImage,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
