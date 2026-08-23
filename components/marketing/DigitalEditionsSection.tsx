'use client'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Monitor, Smartphone, Search, Bookmark, Share2, Download, CheckCircle2 } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

export default function DigitalEditionsSection() {
  const { t } = useLanguage()
  return (
    <section className="section-padding bg-slate-50/60 dark:bg-slate-900/40 border-y border-slate-200/80 dark:border-slate-800">
      <div className="container-max">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-5">
            <p className="section-label-blue mb-3">{t('digital', 'badge')}</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white tracking-tight leading-tight mb-5">
              {t('digital', 'headline_1')}{' '}
              <span className="text-sky-600">{t('digital', 'headline_2')}</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
              {t('digital', 'tagline')}
            </p>

            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {[
                { icon: Monitor, label: t('digital', 'features.f1') },
                { icon: Smartphone, label: t('digital', 'features.f2') },
                { icon: Search, label: t('digital', 'features.f3') },
                { icon: Bookmark, label: t('digital', 'features.f4') },
                { icon: Share2, label: t('digital', 'features.f5') },
                { icon: Download, label: t('digital', 'features.f6') },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2.5 p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 shadow-xs">
                  <div className="w-7 h-7 rounded-lg bg-sky-50 dark:bg-slate-900 flex items-center justify-center text-sky-600 dark:text-sky-400 shrink-0">
                    <Icon size={14} />
                  </div>
                  <span className="text-xs font-semibold text-slate-800 dark:text-slate-300">{label}</span>
                </div>
              ))}
            </div>

            <Link href="/digital-editions" className="btn-primary inline-flex">
              {t('digital', 'cta')}
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

