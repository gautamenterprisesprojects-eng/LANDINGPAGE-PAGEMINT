import type { Metadata } from 'next'
import Navigation from '@/components/marketing/Navigation'
import Footer from '@/components/marketing/Footer'
import PublisherPortalContent from '@/components/marketing/PublisherPortalContent'

export const metadata: Metadata = {
  title: 'Publisher Portal — Everything Your Publishing Team Needs, In One Place',
  description: 'Manage publications, editions, content, advertisements, team and analytics from a single professional publishing operations portal.',
}

export default function PublisherPortalPage() {
  return (
    <>
      <Navigation />
      <PublisherPortalContent />
      <Footer />
    </>
  )
}
