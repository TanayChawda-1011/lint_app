import { ClerkProvider } from "@clerk/nextjs";
import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Topbar from "@/components/shared/Topbar";
import LeftSidebar from "@/components/shared/LeftSidebar";
import RightSidebar from "@/components/shared/RightSidebar";
import Bottombar from "@/components/shared/Bottombar";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Alumni Portal",
  description: "A Next.js 13 AP Shah Alumni Portal Application",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <link rel="icon" href="/favicon.ico?v=2" />
          <main className="flex flex-row">
          <Topbar/>
          <LeftSidebar/>
            
            <section className="main-container">
              <div className="full-w max-w-4xl">
                {children}
              </div>
            </section>

            <RightSidebar/>
          </main>

          <Bottombar/>
        </body>
      </html>
    </ClerkProvider>
  );
}
