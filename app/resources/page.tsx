import type { Metadata } from 'next'
import Navigation from '@/components/marketing/Navigation'
import Footer from '@/components/marketing/Footer'
import ResourcesContent from '@/components/marketing/ResourcesContent'

export const metadata: Metadata = {
  title: 'Resources — Publishing Guides, Case Studies & Insights',
  description: 'Explore PageMint resources: publishing guides, case studies, product updates, webinars and insights for newspaper and magazine publishers.',
}

export default function ResourcesPage() {
  return (
    <>
      <Navigation />
      <ResourcesContent />
      <Footer />
    </>
  )
}
