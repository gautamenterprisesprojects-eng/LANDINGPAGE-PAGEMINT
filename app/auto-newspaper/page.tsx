import type { Metadata } from 'next'
import Navigation from '@/components/marketing/Navigation'
import Footer from '@/components/marketing/Footer'
import AutoNewspaperHero from '@/components/marketing/AutoNewspaperHero'
import AutoNewspaperContent from '@/components/marketing/AutoNewspaperContent'

export const metadata: Metadata = {
  title: 'Auto Newspaper Layout Engine | PageMint',
  description:
    'From newsroom feeds to finished newspapers automatically. PageMint evaluates articles, photographs, and advertisements to build professional layouts.',
}

export default function AutoNewspaperPage() {
  return (
    <>
      <Navigation />
      <main>
        <AutoNewspaperHero />
        <AutoNewspaperContent />
      </main>
      <Footer />
    </>
  )
}
