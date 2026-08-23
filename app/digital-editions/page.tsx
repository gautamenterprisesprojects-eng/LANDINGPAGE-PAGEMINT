import type { Metadata } from 'next'
import Navigation from '@/components/marketing/Navigation'
import Footer from '@/components/marketing/Footer'
import DigitalEditionsContent from '@/components/marketing/DigitalEditionsContent'

export const metadata: Metadata = {
  title: 'Digital Editions & ePaper Suite | PageMint',
  description: 'Deliver responsive digital editions, interactive ePaper replicas, and mobile article reading applications with PageMint.',
}

export default function DigitalEditionsPage() {
  return (
    <>
      <Navigation />
      <DigitalEditionsContent />
      <Footer />
    </>
  )
}
