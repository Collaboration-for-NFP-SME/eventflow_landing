import type { Metadata } from 'next'
import { Inter, Outfit } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const outfit = Outfit({ 
  subsets: ['latin'],
  variable: '--font-outfit',
})

export const metadata: Metadata = {
  title: 'EventFlow - Streamline Communications & Event Management',
  description: 'All-in-one platform for individuals, small to medium businesses, and nonprofits to streamline communications, manage events, track projects, and coordinate volunteers.',
  keywords: 'event management, communication platform, project tracking, volunteer coordination, nonprofit management, business organization',
  authors: [{ name: 'EventFlow Team' }],
  openGraph: {
    title: 'EventFlow - Streamline Communications & Event Management',
    description: 'All-in-one platform for seamless communication and event management',
    type: 'website',
    siteName: 'EventFlow',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EventFlow - Streamline Communications & Event Management',
    description: 'All-in-one platform for seamless communication and event management',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body className="font-inter antialiased bg-slate-50 text-slate-900">
        {children}
      </body>
    </html>
  )
}