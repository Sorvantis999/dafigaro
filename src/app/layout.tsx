import type { Metadata } from 'next'
import { Cormorant_Garamond, Jost } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const jost = Jost({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-jost',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'DaFigaro — Real Help for Foreigners in Italy',
  description: 'DaFigaro helps foreigners in Italy solve bureaucracy, paperwork, and everyday admin — quickly, clearly, and in English.',
  openGraph: {
    title: 'DaFigaro — Real Help for Foreigners in Italy',
    description: 'Stuck with Italian paperwork, phone calls, or admin? We can help.',
    siteName: 'DaFigaro',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jost.variable}`}>
      <body>{children}</body>
    </html>
  )
}
