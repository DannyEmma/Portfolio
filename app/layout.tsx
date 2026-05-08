import type { Metadata } from "next"
import { Roboto } from "next/font/google"
import "./globals.css"
import Header from "@/components/Header/Header"
import Footer from "@/components/Footer/Footer"

export const metadata: Metadata = {
  title: "Danny Emma",
  icons: {
    icon: "/favicon.png",
  },
}

const roboto = Roboto({
  subsets: ["latin"],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className="scroll-smooth" data-scroll-behavior="smooth">
      <body className={`${roboto.className} px-6 antialiased`}>
        <Header />

        {children}

        <Footer />
      </body>
    </html>
  )
}
