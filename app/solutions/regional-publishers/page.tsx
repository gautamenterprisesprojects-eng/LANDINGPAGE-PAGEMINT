import type { Metadata } from 'next'
import Navigation from '@/components/marketing/Navigation'
import Footer from '@/components/marketing/Footer'
import RegionalPublishersContent from '@/components/marketing/RegionalPublishersContent'

export const metadata: Metadata = {
  title: 'Solutions for Regional Publishers — PageMint',
  description: 'PageMint for regional and local publishers. Efficient newspaper production with multilingual support, local advertising, and digital edition publishing.',
}

export default function RegionalPublishersPage() {
  return (
    <>
      <Navigation />
      <RegionalPublishersContent />
      <Footer />
    </>
  )
}
