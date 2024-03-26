import { Inter } from "next/font/google"

import '../globals.css';
import { ClerkProvider } from "@clerk/nextjs";

export const metadata = {
    title: "Alumni Portal",
    description: "A Next.js 13 AP Shah Alumni Portal Application",
}

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
     children 
    }: { 
        children: React.ReactNode 
    }) {
    return (
        <ClerkProvider>
            <html lang="en">
                <body className={`${inter.className} bg-dark-1`}>
                    <div className="w-full flex justify-center items-center min-h-screen">
                        {children}
                    </div>
                </body>
            </html>
        </ClerkProvider>
    )
}