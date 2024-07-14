import Theme from "@/components/Toggle";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/scss/global.scss";

import { Navbar } from "@/components/nav";
import Footer from "@/components/footer";
import { baseUrl } from "./sitemap";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Next.js Portfolio Starter",
    template: "%s | Next.js Portfolio Starter",
  },
  description: "This is my portfolio.",
  openGraph: {
    title: "My Portfolio",
    description: "This is my portfolio.",
    url: baseUrl,
    siteName: "My Portfolio",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const cx = (...classes) => classes.filter(Boolean).join(" ");

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cx("text-black bg-white dark:text-white dark:bg-black", inter.className)}>
        <Theme>
          <main>
            <Navbar />
            <div className="min-h-[80vh]">{children}</div>
            <Footer />
          </main>
        </Theme>
      </body>
    </html>
  );
}
