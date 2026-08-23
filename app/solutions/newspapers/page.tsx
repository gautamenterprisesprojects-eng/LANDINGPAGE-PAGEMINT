import type { Metadata } from 'next'
import Navigation from '@/components/marketing/Navigation'
import Footer from '@/components/marketing/Footer'
import NewspapersContent from '@/components/marketing/NewspapersContent'

export const metadata: Metadata = {
  title: 'Solutions for Newspapers — PageMint',
  description: 'PageMint for daily, weekly, and regional newspapers. Automate newspaper layout, print PDF, and digital edition publishing from one platform.',
}

export default function NewspapersSolutionPage() {
  return (
    <>
      <Navigation />
      <NewspapersContent />
      <Footer />
    </>
  )
}
