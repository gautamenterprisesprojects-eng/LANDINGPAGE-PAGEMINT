import type { Metadata } from 'next'
import Navigation from '@/components/marketing/Navigation'
import Footer from '@/components/marketing/Footer'
import RequestDemoContent from '@/components/marketing/RequestDemoContent'

export const metadata: Metadata = {
  title: 'Contact Us & Request a Demo | PageMint',
  description: 'Connect with the PageMint team at Gautam Enterprises for publishing platform demonstrations, enterprise onboarding, and newspaper automation consultation.',
}

export default function RequestDemoPage() {
  return (
    <>
      <Navigation />
      <RequestDemoContent />
      <Footer />
    </>
  )
}
