import "./globals.css";
import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import { Header } from "@/components/Header";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.BASE_URL || "http://localhost:3000"),
  title: "siteyo blog",
  description: "my life blog presented by siteyo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        <Header />
        <div>nav</div>
        <main>{children}</main>
        <div>footer</div>
      </body>
    </html>
  );
}
