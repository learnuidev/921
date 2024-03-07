import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "../lib/font-awesome/font-awesome.config";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "921",
  description: "gen ai platform the future",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
