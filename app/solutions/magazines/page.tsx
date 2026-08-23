import type { Metadata } from 'next'
import Navigation from '@/components/marketing/Navigation'
import Footer from '@/components/marketing/Footer'
import MagazinesContent from '@/components/marketing/MagazinesContent'

export const metadata: Metadata = {
  title: 'Solutions for Magazines — PageMint',
}

export default function MagazinesPage() {
  return (
    <>
      <Navigation />
      <MagazinesContent />
      <Footer />
    </>
  )
}
