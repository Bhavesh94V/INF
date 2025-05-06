import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import { ReduxProvider } from "@/lib/redux/providers"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Talent Tree Recruits - Professional Recruitment Agency",
  description:
    "Connecting top talent with leading companies. Find your next career opportunity with Talent Tree Recruits.",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <div className="flex flex-col min-h-screen">
              <Header />
              <main className="flex-grow">{children}</main>
              <Footer />
            </div>
          </ThemeProvider>
        </ReduxProvider>
      </body>
    </html>
  )
}
