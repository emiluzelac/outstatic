import { absoluteUrl } from '@/lib/utils'
import { Metadata } from 'next'
import '../styles/index.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://outstatic.com'),
  title: {
    default: 'IAM',
    template: '%s | IAM'
  },
  description: 'A blog starter built with Outstatic.',
  openGraph: {
    title: 'Outstatic - A Static Site CMS for Next.js',
    description: 'A blog starter built with Outstatic.',
    url: absoluteUrl('/'),
    siteName: 'Next.js',
    images: [
      {
        url: absoluteUrl('/images/og-image.png'),
        width: 1800,
        height: 1600
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  icons: {
    icon: [{ url: '/favicon/favicon-32x32.png' }],
    apple: [{ url: '/favicon/apple-touch-icon.png' }]
  }
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="antialiased light">
      <body className="bg-zinc-50 font-sans dark:bg-zinc-950">{children}</body>
    </html>
  )
}
