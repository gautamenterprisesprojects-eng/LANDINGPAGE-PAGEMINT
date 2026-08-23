'use client'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'
import { motion } from 'framer-motion'

export default function EPaperContent() {
  const { t } = useLanguage()

  const features = [
    { title: t('epaper', 'f1_title') || 'Replica Fidelity', desc: t('epaper', 'f1_desc') || 'Exact reproduction of your print layout — same fonts, same columns, same images.' },
    { title: t('epaper', 'f2_title') || 'Article Hotspots', desc: t('epaper', 'f2_desc') || 'Interactive areas on each page open articles in a clean reading view.' },
    { title: t('epaper', 'f3_title') || 'Page Navigation', desc: t('epaper', 'f3_desc') || 'Page-by-page browsing with thumbnail strip, keyboard support, and search.' },
    { title: t('epaper', 'f4_title') || 'PDF Upload Mode', desc: t('epaper', 'f4_desc') || 'Upload an existing newspaper PDF and publish it as an ePaper without re-production.' },
    { title: t('epaper', 'f5_title') || 'Archive Access', desc: t('epaper', 'f5_desc') || 'Complete edition archive browsable by publication, date, city, and edition.' },
    { title: t('epaper', 'f6_title') || 'Analytics', desc: t('epaper', 'f6_desc') || 'Privacy-conscious readership data including page views and article engagement.' },
  ]

  return (
    <main>
      <section className="pt-32 lg:pt-40 pb-16 surface-editorial dark:bg-slate-900 border-b border-slate-200/80 dark:border-slate-800">
        <div className="container-max max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="badge-blue mb-6 inline-flex">{t('epaper', 'badge') || 'ePaper'}</div>
            <h1 className="hero-serif-headline text-4xl sm:text-5xl lg:text-6xl text-slate-900 dark:text-white mb-6">
              {t('epaper', 'headline_1') || 'Faithful digital replicas. '}<span className="text-sky-600">{t('epaper', 'headline_2') || 'Automatically from print.'}</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 leading-relaxed mb-10 max-w-2xl mx-auto">
              {t('epaper', 'tagline') || 'PageMint transforms every print edition into a pixel-faithful ePaper replica — searchable, navigable, and accessible — without any additional production work.'}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/request-demo" className="btn-primary inline-flex">
                {t('nav', 'contact_us') || 'Request Demo'} <ArrowRight size={16} />
              </Link>
              <Link href="/digital-editions" className="btn-secondary inline-flex">
                {t('epaper', 'overview') || 'Digital Editions Overview'}
              </Link>
            </div>
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
        </div>
      </section>

      <section className="section-padding surface-blue-hero dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
        <div className="container-max text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">{t('epaper', 'cta_title') || 'Start publishing ePaper editions.'}</h2>
          <Link href="/request-demo" className="btn-coral text-base px-8 py-3.5 shadow-xl shadow-red-500/20">
            {t('nav', 'contact_us') || 'Request a Demo'} <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  )
}
