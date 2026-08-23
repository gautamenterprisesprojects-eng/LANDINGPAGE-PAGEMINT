'use client'
import Link from 'next/link'
import { ArrowRight, Sparkles, ShieldCheck } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

export default function CtaSection() {
  const { t } = useLanguage()
  return (
    <section className="section-padding bg-gradient-to-br from-sky-50 via-blue-50/60 to-white border-t border-slate-200/80">
      <div className="container-max text-center max-w-4xl mx-auto">
        <div className="badge-blue mb-4 inline-flex">
          <Sparkles size={13} className="text-sky-600" />
          {t('cta', 'badge')}
        </div>
        
        <h2 className="text-3xl sm:text-5xl font-bold text-slate-900 dark:text-white tracking-tight leading-tight mb-6">
          {t('cta', 'headline')}
        </h2>

        <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto leading-relaxed">
          {t('cta', 'tagline')}
        </p>

        <div className="flex flex-wrap justify-center items-center gap-4">
          <Link href="/request-demo" className="btn-coral text-base px-8 py-3.5 shadow-md shadow-red-500/20 font-bold">
            {t('cta', 'cta_primary')}
            <ArrowRight size={17} />
          </Link>
          <Link href="/auto-newspaper" className="btn-secondary text-base px-8 py-3.5 font-bold">
            {t('cta', 'cta_secondary')}
          </Link>
        </div>

        <div className="mt-8 flex items-center justify-center gap-2 text-xs text-slate-500 font-medium">
          <ShieldCheck size={14} className="text-sky-600" />
          <span>{t('cta', 'footer_text')} (gautamenterprises.org)</span>
        </div>
      </div>
    </section>
  )
}


