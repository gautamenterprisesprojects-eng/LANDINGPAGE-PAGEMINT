'use client'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

export default function MagazinesContent() {
  const { t } = useLanguage()
  
  const FEATURES = [
    { title: t('magazines', 'f1_title'), desc: t('magazines', 'f1_desc') },
    { title: t('magazines', 'f2_title'), desc: t('magazines', 'f2_desc') },
    { title: t('magazines', 'f3_title'), desc: t('magazines', 'f3_desc') },
    { title: t('magazines', 'f4_title'), desc: t('magazines', 'f4_desc') },
    { title: t('magazines', 'f5_title'), desc: t('magazines', 'f5_desc') },
    { title: t('magazines', 'f6_title'), desc: t('magazines', 'f6_desc') },
  ]

  return (
    <main>
      <section className="pt-28 pb-16 lg:pt-36 surface-editorial dark:bg-slate-950">
        <div className="container-max max-w-3xl">
          <div className="badge mb-6 dark:text-slate-200">{t('magazines', 'badge')}</div>
          <h1 className="hero-headline mb-6 dark:text-white">
            {t('magazines', 'headline_1')} <span className="text-sky-600">{t('magazines', 'headline_2')}</span>
          </h1>
          <p className="body-large mb-8 dark:text-slate-400">
            {t('magazines', 'tagline')}
          </p>
          <Link href="/request-demo" className="btn-primary inline-flex">
            {t('magazines', 'cta')} <ArrowRight size={16} />
          </Link>
        </div>
      </section>
      <section className="section-padding bg-white dark:bg-slate-950">
        <div className="container-max">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {FEATURES.map((item) => (
              <div key={item.title} className="feature-card">
                <h3 className="text-base font-bold text-[#1a1916] dark:text-white mb-2">{item.title}</h3>
                <p className="text-sm text-[#6b6860] dark:text-slate-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
