import type { Metadata } from 'next'
import { Nunito, Poppins } from 'next/font/google'
import './globals.css'

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-nunito',
  display: 'swap',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-poppins',
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
    <html lang="en" className={`${nunito.variable} ${poppins.variable}`}>
      <body>{children}</body>
    </html>
  )
}
