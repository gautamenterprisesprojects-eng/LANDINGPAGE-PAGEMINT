import type { Metadata } from 'next'
import Navigation from '@/components/marketing/Navigation'
import Footer from '@/components/marketing/Footer'
import AboutContent from '@/components/marketing/AboutContent'

export const metadata: Metadata = {
  title: 'About Us — PageMint & Gautam Enterprises',
  description:
    'Learn about PageMint, a flagship publishing technology unit of Gautam Enterprises (gautamenterprises.org) — delivering AI web engineering, automatic newspaper layout, and digital editions.',
}

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <AboutContent />
      <Footer />
    </>
  )
}
