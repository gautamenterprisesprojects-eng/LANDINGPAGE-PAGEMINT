import type { Metadata } from 'next'
import { Inter, Lora } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-lora',
  display: 'swap',
  style: ['normal', 'italic'],
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://pagemint.in'),
  title: {
    default: 'PageMint — The Intelligent Newspaper Publishing Platform',
    template: '%s | PageMint',
  },
  description:
    'Turn newsroom content into professionally designed print and digital editions automatically. PageMint automates newspaper layout, ePaper, and digital publishing for newspapers, magazines, and media houses.',
  keywords: [
    'newspaper publishing software',
    'ePaper platform',
    'digital edition publisher',
    'automatic newspaper layout',
    'publishing automation',
    'print and digital publishing',
    'PageMint',
  ],
  authors: [{ name: 'PageMint — A Unit of Gautam Enterprises' }],
  creator: 'PageMint',
  publisher: 'Gautam Enterprises',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://pagemint.in',
    siteName: 'PageMint',
    title: 'PageMint — The Intelligent Newspaper Publishing Platform',
    description:
      'Transform newsroom content into beautifully designed print and digital editions with intelligent automation.',
    images: [
      {
        url: '/images/og-pagemint.jpg',
        width: 1200,
        height: 630,
        alt: 'PageMint — The Intelligent Newspaper Publishing Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PageMint — The Intelligent Newspaper Publishing Platform',
    description:
      'Transform newsroom content into beautifully designed print and digital editions with intelligent automation.',
    creator: '@PageMintHQ',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
}

import { ThemeProvider } from '@/components/ThemeProvider'
import { LanguageProvider } from '@/contexts/LanguageContext'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${lora.variable} overflow-x-hidden`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': 'Organization',
                  '@id': 'https://pagemint.in/#organization',
                  name: 'PageMint',
                  alternateName: 'PageMint — A Unit of Gautam Enterprises',
                  url: 'https://pagemint.in',
                  description:
                    'PageMint is a professional publishing-technology SaaS platform for newspapers, magazines, media houses, publishers and digital-first news organisations.',
                  sameAs: [
                    'https://twitter.com/PageMintHQ',
                    'https://linkedin.com/company/pagemint',
                  ],
                },
                {
                  '@type': 'SoftwareApplication',
                  '@id': 'https://pagemint.in/#software',
                  name: 'PageMint',
                  applicationCategory: 'BusinessApplication',
                  operatingSystem: 'Web',
                  description:
                    'Intelligent newspaper publishing platform for print and digital editions.',
                  offers: {
                    '@type': 'Offer',
                    url: 'https://pagemint.in/request-demo',
                  },
                  publisher: {
                    '@id': 'https://pagemint.in/#organization',
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased text-slate-900 bg-white dark:bg-slate-950 dark:text-slate-50 transition-colors overflow-x-hidden" suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
