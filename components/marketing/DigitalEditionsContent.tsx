'use client'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Monitor, Smartphone, Search, Bookmark, Share2, Download } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'
import { motion } from 'framer-motion'

export default function DigitalEditionsContent() {
  const { t } = useLanguage()

  const features = [
    { icon: Monitor, title: t('digital', 'f1_title') || 'Desktop Replica Spread' },
    { icon: Smartphone, title: t('digital', 'f2_title') || 'Mobile Article View' },
    { icon: Search, title: t('digital', 'f3_title') || 'Full-Text Search' },
    { icon: Bookmark, title: t('digital', 'f4_title') || 'Article Bookmarks' },
    { icon: Share2, title: t('digital', 'f5_title') || 'WhatsApp & Social Share' },
    { icon: Download, title: t('digital', 'f6_title') || 'Offline PDF Downloads' },
  ]

  return (
    <main>
      {/* Hero */}
      <section className="pt-32 lg:pt-40 pb-16 surface-blue-hero dark:bg-slate-900 border-b border-slate-200/80 dark:border-slate-800">
        <div className="container-max">
          <div className="max-w-3xl mb-12">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <div className="badge-blue mb-4 inline-flex">
                <Monitor size={13} className="text-sky-600 dark:text-sky-400" />
                <span className="ml-1.5">{t('digital', 'badge') || 'Cross-Platform eEditions'}</span>
              </div>
              <h1 className="hero-serif-headline text-4xl sm:text-5xl lg:text-6xl text-slate-900 dark:text-white mb-6">
                {t('digital', 'headline') || 'Turn Every Print Issue Into an Interactive Digital Experience.'}
              </h1>
              <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                {t('digital', 'tagline') || 'Every print edition published through PageMint is automatically converted into high-fidelity digital replicas and mobile reading applications — complete with search, offline caching, and bookmarks.'}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/request-demo" className="btn-coral">
                  {t('nav', 'contact_us') || 'Contact us & Request Demo'} <ArrowRight size={16} />
                </Link>
                <Link href="/epaper" className="btn-secondary">
                  {t('digital', 'explore') || 'Explore ePaper'}
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Multi-Device Visual Header */}
          <div className="rounded-2xl overflow-hidden border border-slate-200/90 dark:border-slate-700 shadow-2xl bg-white dark:bg-slate-800 max-w-6xl mx-auto">
            <Image
              src="/images/pagemint-devices-hero.jpg"
              alt="PageMint multi-device digital edition reading suite on iPad, iPhone, and MacBook"
              width={1280}
              height={720}
              priority
              className="w-full h-auto object-cover dark:opacity-90"
            />
          </div>
        </div>
      </section>

      {/* Reader Spread Breakdown */}
      <section className="section-padding bg-white dark:bg-slate-950 border-b border-slate-200/80 dark:border-slate-800">
        <div className="container-max">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5">
              <p className="section-label-blue mb-3">{t('digital', 'reader_label') || 'Interactive Reader'}</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight mb-5">
                {t('digital', 'reader_title') || 'Desktop 2-Page Spreads with Mobile Article Popouts.'}
              </h2>
              <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                {t('digital', 'reader_desc') || 'Readers enjoy the tactile familiarity of flipping full newspaper pages on desktop and tablet screens, while mobile users can tap any story to open a clean, readable article modal with customizable typography.'}
              </p>

              <div className="grid sm:grid-cols-2 gap-3 mb-8">
                {features.map(({ icon: Icon, title }) => (
                  <div key={title} className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700">
                    <Icon size={16} className="text-sky-600 dark:text-sky-400 shrink-0" />
                    <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">{title}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-xl bg-white">
                <Image
                  src="/images/pagemint-reader.jpg"
                  alt="PageMint digital edition interactive reader spread"
                  width={1200}
                  height={750}
                  className="w-full h-auto object-cover dark:opacity-90"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Live Analytics Visual Section */}
      <section className="section-padding bg-slate-50/70 dark:bg-slate-900 border-b border-slate-200/80 dark:border-slate-800">
        <div className="container-max">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7">
              <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-xl bg-slate-900">
                <Image
                  src="/images/pagemint-analytics-suite.jpg"
                  alt="PageMint live readership analytics dashboard"
                  width={1200}
                  height={750}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-5">
              <p className="section-label-blue mb-3">{t('digital', 'analytics_label') || 'Audience Insights'}</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight mb-5">
                {t('digital', 'analytics_title') || 'Track Dwell Times, Top Articles & Subscribers.'}
              </h2>
              <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                {t('digital', 'analytics_desc') || 'PageMint provides publishers with privacy-compliant reader analytics. Identify high-performing editorial sections, peak reading hours, and subscriber engagement trends.'}
              </p>
              <Link href="/request-demo" className="btn-primary inline-flex">
                {t('digital', 'analytics_cta') || 'Request Analytics Demo'} <ArrowRight size={16} />
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-white dark:bg-slate-950">
        <div className="container-max text-center max-w-xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            {t('digital', 'cta_title_bottom') || 'Start Publishing Digital Editions Today'}
          </h2>
          <Link href="/request-demo" className="btn-coral mt-4">
            {t('nav', 'contact_us') || 'Contact us & Request Demo'} <ArrowRight size={16} />
          </Link>
        </div>
      </section>

    </main>
  )
}
