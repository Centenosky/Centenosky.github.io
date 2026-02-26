import type { Metadata, Viewport } from "next"
import { Inter, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const _geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
})

export const metadata: Metadata = {
  title: "Diego Centeno | Desarrollador Fullstack & IA",
  description:
    "Desarrollo web, aplicaciones móviles, inteligencia artificial y automatización para hacer crecer tu negocio. Chatbots, agentes de venta 24/7 y secretarias virtuales con IA.",
  keywords: [
    "desarrollador fullstack",
    "inteligencia artificial",
    "automatización",
    "chatbots",
    "agentes de venta IA",
    "desarrollo web",
    "Next.js",
    "React",
    "Python",
    "OpenAI",
  ],
  authors: [{ name: "Diego Centeno" }],
}

export const viewport: Viewport = {
  themeColor: "#050505",
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="dark">
      <body className={`${_inter.variable} ${_geistMono.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
