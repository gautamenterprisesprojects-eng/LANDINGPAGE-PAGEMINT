'use client'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'
import { motion } from 'framer-motion'

export default function RegionalPublishersContent() {
  const { t } = useLanguage()

  const features = [
    { title: t('regional', 'f1_title') || 'Affordable Production', desc: t('regional', 'f1_desc') || 'No specialist design staff required. PageMint automates the page-making workflow.' },
    { title: t('regional', 'f2_title') || 'Multilingual Support', desc: t('regional', 'f2_desc') || 'English, Hindi, and regional language support built in from day one.' },
    { title: t('regional', 'f3_title') || 'Local Advertising', desc: t('regional', 'f3_desc') || 'Manage local advertising clients, campaigns, and placements in one place.' },
    { title: t('regional', 'f4_title') || 'Simple Onboarding', desc: t('regional', 'f4_desc') || '7-step guided onboarding gets your first edition ready quickly.' },
    { title: t('regional', 'f5_title') || 'Multiple Editions', desc: t('regional', 'f5_desc') || 'Manage city editions, regional splits, and supplement inserts easily.' },
    { title: t('regional', 'f6_title') || 'Digital Reach', desc: t('regional', 'f6_desc') || 'Automatically publish a digital edition alongside your print — no extra work.' },
  ]

  return (
    <main>
      <section className="pt-32 lg:pt-40 pb-16 surface-light-blue border-b border-slate-200/80 dark:border-slate-800">
        <div className="container-max max-w-4xl text-center mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="badge-blue mb-6 inline-flex">{t('regional', 'badge') || 'Regional Publishers'}</div>
            <h1 className="hero-serif-headline text-4xl sm:text-5xl lg:text-6xl text-slate-900 dark:text-white mb-6">
              {t('regional', 'headline_1') || 'Enterprise publishing tools for '}<span className="text-sky-600">{t('regional', 'headline_2') || 'every publisher.'}</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 leading-relaxed mb-10 max-w-2xl mx-auto">
              {t('regional', 'tagline') || 'Regional and local publishers deserve the same production quality as national titles. PageMint makes enterprise newspaper publishing accessible — regardless of organisation size.'}
            </p>
            <Link href="/request-demo" className="btn-primary inline-flex">
              {t('nav', 'contact_us') || 'Request Demo'} <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-white dark:bg-slate-950">
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
    </main>
  )
}
