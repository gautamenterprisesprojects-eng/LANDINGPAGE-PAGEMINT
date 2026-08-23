import type { Metadata } from 'next'
import Navigation from '@/components/marketing/Navigation'
import Footer from '@/components/marketing/Footer'
import HeroSection from '@/components/marketing/HeroSection'
import TrustSection from '@/components/marketing/TrustSection'
import AutoNewspaperSection from '@/components/marketing/AutoNewspaperSection'
import TemplatesShowcaseSection from '@/components/marketing/TemplatesShowcaseSection'
import StudioSection from '@/components/marketing/StudioSection'
import DigitalEditionsSection from '@/components/marketing/DigitalEditionsSection'
import AnalyticsSection from '@/components/marketing/AnalyticsSection'
import PortalSection from '@/components/marketing/PortalSection'
import WorkflowSection from '@/components/marketing/WorkflowSection'
import FeaturesSection from '@/components/marketing/FeaturesSection'
import EnterpriseSection from '@/components/marketing/EnterpriseSection'
import CtaSection from '@/components/marketing/CtaSection'

export const metadata: Metadata = {
  title: 'PageMint — Market-leading Newspaper Publishing & eEditions Platform',
  description:
    'Transform newsroom content into beautifully designed print and digital editions with intelligent automation. Backed by Gautam Enterprises.',
}

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <TrustSection />
        <AutoNewspaperSection />
        <TemplatesShowcaseSection />
        <StudioSection />
        <DigitalEditionsSection />
        <AnalyticsSection />
        <PortalSection />
        <WorkflowSection />
        <FeaturesSection />
        <EnterpriseSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  )
}
