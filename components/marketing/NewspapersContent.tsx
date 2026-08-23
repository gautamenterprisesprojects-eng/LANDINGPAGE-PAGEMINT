'use client'
import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'
import { motion } from 'framer-motion'

export default function NewspapersContent() {
  const { t } = useLanguage()

  const features = [
    { title: t('newspapers', 'f1_title') || 'Daily Newspapers', desc: t('newspapers', 'f1_desc') || 'High-volume production. Multiple editions, cities, and sections managed from one dashboard.' },
    { title: t('newspapers', 'f2_title') || 'Weekly Newspapers', desc: t('newspapers', 'f2_desc') || 'More pages, more features. Weekend supplements, lifestyle sections, and comprehensive coverage.' },
    { title: t('newspapers', 'f3_title') || 'Local Newspapers', desc: t('newspapers', 'f3_desc') || 'Community-first publishing with local advertisement support and regional content ingestion.' },
    { title: t('newspapers', 'f4_title') || 'Hindi Newspapers', desc: t('newspapers', 'f4_desc') || 'First-class Devanagari support with correct Unicode, shaping, justification, and line-breaking.' },
    { title: t('newspapers', 'f5_title') || 'English Newspapers', desc: t('newspapers', 'f5_desc') || 'Professional broadsheet and tabloid layouts with full continuation and preflight validation.' },
    { title: t('newspapers', 'f6_title') || 'Regional Language', desc: t('newspapers', 'f6_desc') || 'Architecture ready for additional languages beyond English and Hindi.' },
  ]

  const needsList = [
    t('newspapers', 'n1') || 'Automatic front-page generation with masthead',
    t('newspapers', 'n2') || 'Inner page headers per section',
    t('newspapers', 'n3') || 'Story continuation with auto-references',
    t('newspapers', 'n4') || 'Advertisement hard constraints on all pages',
    t('newspapers', 'n5') || 'Photo caption and credit management',
    t('newspapers', 'n6') || 'DPI validation for print output',
    t('newspapers', 'n7') || 'Multiple city editions from one issue',
    t('newspapers', 'n8') || 'Print PDF with bleed and crop marks',
    t('newspapers', 'n9') || 'Digital ePaper published simultaneously',
    t('newspapers', 'n10') || 'Edition archive with front-page thumbnails',
  ]

  return (
    <main>
      <section className="pt-32 lg:pt-40 pb-16 surface-blue-hero dark:bg-slate-900 border-b border-slate-200/80 dark:border-slate-800">
        <div className="container-max max-w-4xl text-center mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="badge-blue mb-6 inline-flex">{t('newspapers', 'badge') || 'Newspapers'}</div>
            <h1 className="hero-serif-headline text-4xl sm:text-5xl lg:text-6xl text-slate-900 dark:text-white mb-6">
              {t('newspapers', 'headline_1') || 'Designed for how newspapers '}<span className="text-sky-600">{t('newspapers', 'headline_2') || 'actually work.'}</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 leading-relaxed mb-10 max-w-2xl mx-auto">
              {t('newspapers', 'tagline') || 'PageMint understands newspaper production — deadlines, section structures, advertising constraints, continuation articles, and the editorial hierarchy that defines every page.'}
            </p>
            <Link href="/request-demo" className="btn-primary inline-flex">
              {t('nav', 'contact_us') || 'Request Demo'} <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-slate-50 dark:bg-slate-950">
        <div className="container-max">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((item, i) => (
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                key={i} 
                className="feature-card"
              >
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">{item.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16 p-8 md:p-12 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-8 text-center">{t('newspapers', 'needs_title') || 'Everything a newspaper needs'}</h2>
            <div className="grid sm:grid-cols-2 gap-y-4 gap-x-8">
              {needsList.map((feat, i) => (
                <div key={i} className="flex items-start gap-3 text-sm md:text-base text-slate-700 dark:text-slate-300">
                  <CheckCircle2 size={20} className="text-sky-600 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-padding surface-blue-hero dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
        <div className="container-max text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">{t('newspapers', 'cta_title') || 'See it for your newspaper.'}</h2>
          <Link href="/request-demo" className="btn-coral text-base px-8 py-3.5 shadow-xl shadow-red-500/20">
            {t('nav', 'contact_us') || 'Request a Demo'} <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  )
}
