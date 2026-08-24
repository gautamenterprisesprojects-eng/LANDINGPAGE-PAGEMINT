'use client'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'
import { motion } from 'framer-motion'
import { PAGEMINT_APP_URL } from '@/lib/links'

export default function PublisherPortalContent() {
  const { t } = useLanguage()

  const features = [
    { title: t('portal', 'f1_title') || 'Dashboard', desc: t('portal', 'f1_desc') || 'Today\'s editions, production status, preflight warnings and recent activity at a glance.' },
    { title: t('portal', 'f2_title') || 'Publications', desc: t('portal', 'f2_desc') || 'Manage all your newspaper titles, publication profiles, and settings from one panel.' },
    { title: t('portal', 'f3_title') || 'Editions', desc: t('portal', 'f3_desc') || 'Create, track, generate, approve, and publish editions through a structured workflow.' },
    { title: t('portal', 'f4_title') || 'Content Hub', desc: t('portal', 'f4_desc') || 'Import, manage, filter and assign articles across publications and editions.' },
    { title: t('portal', 'f5_title') || 'Media Library', desc: t('portal', 'f5_desc') || 'Centralised image and asset management with DPI warnings and metadata.' },
    { title: t('portal', 'f6_title') || 'Advertisements', desc: t('portal', 'f6_desc') || 'Book, manage, and track campaigns with calendar and placement views.' },
    { title: t('portal', 'f7_title') || 'Team & Roles', desc: t('portal', 'f7_desc') || 'Invite team members, assign publication-specific roles, and control access.' },
    { title: t('portal', 'f8_title') || 'Analytics', desc: t('portal', 'f8_desc') || 'Edition readership, top articles, device breakdown, and conversion events.' },
  ]

  return (
    <main>
      <section className="pt-32 lg:pt-40 pb-16 surface-blue-hero dark:bg-slate-900 border-b border-slate-200/80 dark:border-slate-800">
        <div className="container-max max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="badge-blue mb-6 inline-flex">{t('portal', 'badge') || 'Publisher Portal'}</div>
            <h1 className="hero-serif-headline text-4xl sm:text-5xl lg:text-6xl text-slate-900 dark:text-white mb-6">
              {t('portal', 'headline_1') || 'Everything your publishing team needs, '}<span className="text-sky-600">{t('portal', 'headline_2') || 'in one place.'}</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 leading-relaxed mb-10 max-w-2xl mx-auto">
              {t('portal', 'tagline') || 'From content import to final publication approval — the PageMint Publisher Portal gives every member of your team the right tools, at the right level of access.'}
            </p>
            <Link href={PAGEMINT_APP_URL} className="btn-primary inline-flex">
              {t('nav', 'publisher_portal') || 'Log in'} <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-slate-50 dark:bg-slate-950">
        <div className="container-max">
          <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-xl max-w-5xl mx-auto mb-14 bg-white">
            <Image
              src="/images/pagemint-portal.jpg"
              alt="PageMint Publisher Portal dashboard"
              width={1200}
              height={750}
              className="w-full h-auto dark:opacity-90"
            />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
            {features.map((item, i) => (
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                key={i} 
                className="feature-card"
              >
                <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-2">{item.title}</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
