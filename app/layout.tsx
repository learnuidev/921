import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "../lib/aws-amplify/amplify.init";
import "../lib/font-awesome/font-awesome.config";
import { Authenticated } from "@/components/authenticated";
import { Navbar } from "@/components/nav-bar";
import { SettingsBar } from "@/components/settings-bar";
import { QueryClientProvider } from "@/lib/react-query";

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
      <body className={inter.className}>
        <Authenticated>
          <QueryClientProvider>
            <Navbar />
            <div className="flex my-4">
              <SettingsBar />
              <main className="flex-grow">{children}</main>

              <div className="w-6 flex items-center justify-end flex-col mx-4 h-screen py-16 space-y-4"></div>
            </div>
          </QueryClientProvider>
        </Authenticated>
      </body>
    </html>
  );
}
