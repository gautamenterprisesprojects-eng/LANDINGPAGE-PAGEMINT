'use client'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Monitor, Smartphone, Search, Bookmark, Share2, Download } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

export default function DigitalEditionsSection() {
  const { t } = useLanguage()

  const headingPartOne = t('digital', 'headline_1') || 'Print editions become digital.'
  const headingPartTwo = t('digital', 'headline_2') || 'Ready for every reader.'
  const ctaLabel = t('digital', 'cta') || 'Explore Digital Editions'
  const featureItems = [
    { icon: Monitor, label: t('digital', 'features.f1') || 'Desktop replica editions' },
    { icon: Smartphone, label: t('digital', 'features.f2') || 'Mobile reading apps' },
    { icon: Search, label: t('digital', 'features.f3') || 'Full-text search' },
    { icon: Bookmark, label: t('digital', 'features.f4') || 'Article bookmarks' },
    { icon: Share2, label: t('digital', 'features.f5') || 'WhatsApp and social sharing' },
    { icon: Download, label: t('digital', 'features.f6') || 'Offline PDF downloads' },
  ]

  return (
    <section className="section-padding bg-slate-50/60 dark:bg-slate-900/40 border-y border-slate-200/80 dark:border-slate-800">
      <div className="container-max">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-5">
            <p className="section-label-blue mb-3">{t('digital', 'badge')}</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white tracking-tight leading-tight mb-5">
              {headingPartOne}{' '}
              <span className="text-sky-600">{headingPartTwo}</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
              {t('digital', 'tagline')}
            </p>

            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {featureItems.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2.5 p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 shadow-xs">
                  <div className="w-7 h-7 rounded-lg bg-sky-50 dark:bg-slate-900 flex items-center justify-center text-sky-600 dark:text-sky-400 shrink-0">
                    <Icon size={14} />
                  </div>
                  <span className="text-xs font-semibold text-slate-800 dark:text-slate-300">{label}</span>
                </div>
              ))}
            </div>

            <Link href="/digital-editions" className="btn-primary inline-flex">
              {ctaLabel}
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* Right Column — Device & Reader Screenshot */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-hero-device bg-white dark:bg-slate-950">
              <Image
                src="/images/pagemint-reader.jpg"
                alt="PageMint digital edition reader showing 2-page newspaper spread and navigation controls"
                width={1200}
                height={750}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

