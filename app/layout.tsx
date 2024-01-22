import type { Metadata } from "next";
import { Inter, UnifrakturCook } from "next/font/google";

import { Footer } from "@/app/components";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const unifraktur = UnifrakturCook({
  weight: "700",
  subsets: ["latin"],
  variable: "--font-unifraktur",
});

export const metadata: Metadata = {
  title: "𝕮𝖆𝖘𝖙𝖑𝖊 𝕯𝖗𝖔𝖕",
  description: "Official site for Castle Drop",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="en">
    <body className={`${inter.variable} ${unifraktur.variable}`}>
      <div className="flex min-h-screen flex-col items-center">
        <main className="flex w-full max-w-5xl flex-auto flex-col px-4">
          {children}
        </main>
        <Footer />
      </div>
    </body>
  </html>
);

export default RootLayout;
