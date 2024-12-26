import { Navbar } from "@/components/navbar"
import { ThemeProvider } from "@/components/theme-provider"
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Hawk-a-thoon'25",
  description: "Meme on that thing!",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="min-h-screen flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="flex-grow container mx-auto px-4">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}