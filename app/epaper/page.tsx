import type { Metadata } from 'next'
import Navigation from '@/components/marketing/Navigation'
import Footer from '@/components/marketing/Footer'
import EPaperContent from '@/components/marketing/EPaperContent'

export const metadata: Metadata = {
  title: 'ePaper — Replica Digital Editions for Newspapers',
  description: 'Publish faithful replica ePaper editions from your print layout. PageMint creates searchable, navigable digital replicas with article hotspots and archive access.',
}

export default function ePaperPage() {
  return (
    <>
      <Navigation />
      <EPaperContent />
      <Footer />
    </>
  )
}
