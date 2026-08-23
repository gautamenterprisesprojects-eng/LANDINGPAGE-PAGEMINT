import type { Metadata } from 'next'
import Navigation from '@/components/marketing/Navigation'
import Footer from '@/components/marketing/Footer'
import PlatformContent from '@/components/marketing/PlatformContent'

export const metadata: Metadata = {
  title: 'Platform Overview — PageMint Publishing Technology',
  description: 'Explore the full PageMint platform: Studio editor, Auto Newspaper, Content Hub, Flatplan Builder, Templates, Edition Manager, Publishing Portal and Analytics.',
}

export default function PlatformPage() {
  return (
    <>
      <Navigation />
      <PlatformContent />
      <Footer />
    </>
  )
}
