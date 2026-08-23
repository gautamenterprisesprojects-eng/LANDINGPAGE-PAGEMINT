'use client'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'
import { motion } from 'framer-motion'

export default function PlatformContent() {
  const { t } = useLanguage()

  const PLATFORM_MODULES = [
    {
      name: t('platform', 'm1_title') || 'PageMint Studio',
      desc: t('platform', 'm1_desc') || 'Professional canvas-based newspaper page editor with layers, drag-and-drop blocks, typography controls, autosave, and version history.',
      href: '/platform#studio',
      color: '#0284c7', // sky-600
    },
    {
      name: t('platform', 'm2_title') || 'Newspaper Automation',
      desc: t('platform', 'm2_desc') || 'Multi-candidate layout engine scores and selects the best design for every page combination of content, images, and advertisements.',
      href: '/auto-newspaper',
      color: '#0369a1', // sky-700
    },
    {
      name: t('platform', 'm3_title') || 'Content Hub',
      desc: t('platform', 'm3_desc') || 'Unified newsroom content library with article management, filtering, priority assignment, and multi-source ingestion adapters.',
      href: '/platform#content',
      color: '#0ea5e9', // sky-500
    },
    {
      name: t('platform', 'm4_title') || 'Flatplan Builder',
      desc: t('platform', 'm4_desc') || 'Visual drag-and-drop page sequence planner. Lock pages, define sections, and set advertising zones before layout generation.',
      href: '/platform#flatplan',
      color: '#e11d48', // rose-600
    },
    {
      name: t('platform', 'm5_title') || 'Template Library',
      desc: t('platform', 'm5_desc') || 'Hundreds of professionally designed newspaper templates — front page, national, sports, business, feature, and more.',
      href: '/platform#templates',
      color: '#6366f1', // indigo-500
    },
    {
      name: t('platform', 'm6_title') || 'Edition Manager',
      desc: t('platform', 'm6_desc') || 'Full edition lifecycle management from draft to archive. Status tracking, approval workflows, and production timelines.',
      href: '/platform#editions',
      color: '#0f766e', // teal-700
    },
    {
      name: t('platform', 'm7_title') || 'Publishing Portal',
      desc: t('platform', 'm7_desc') || 'Enterprise publishing workspace for the full team — editors, designers, reporters, ad managers, and reviewers.',
      href: '/publisher-portal',
      color: '#334155', // slate-700
    },
    {
      name: t('platform', 'm8_title') || 'Analytics',
      desc: t('platform', 'm8_desc') || 'Privacy-conscious digital edition analytics with reader behaviour, top content, device breakdown, and archive usage.',
      href: '/platform#analytics',
      color: '#059669', // emerald-600
    },
  ]

  return (
    <main>
      <section className="pt-32 lg:pt-40 pb-16 surface-blue-hero dark:bg-slate-900 border-b border-slate-200/80 dark:border-slate-800">
        <div className="container-max max-w-4xl text-center mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="badge-blue mb-6 inline-flex">{t('platform', 'badge') || 'Platform'}</div>
            <h1 className="hero-serif-headline text-4xl sm:text-5xl lg:text-6xl text-slate-900 dark:text-white mb-6">
              {t('platform', 'headline_1') || 'The complete publishing platform, '}<span className="text-sky-600">{t('platform', 'headline_2') || 'end to end.'}</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 leading-relaxed mb-10 max-w-2xl mx-auto">
              {t('platform', 'tagline') || 'PageMint covers the full publishing workflow — from content ingestion and intelligent layout to print PDF export, digital editions, and reader analytics. Every component is designed to work together.'}
            </p>
            <Link href="/request-demo" className="btn-primary inline-flex">
              {t('nav', 'contact_us') || 'Request Demo'} <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-slate-50 dark:bg-slate-950">
        <div className="container-max">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PLATFORM_MODULES.map((mod, i) => (
              <Link
                key={mod.name}
                href={mod.href}
                className="feature-card group block hover:scale-[1.02] transition-transform duration-300"
              >
                <div
                  className="w-3 h-3 rounded-full mb-5"
                  style={{ backgroundColor: mod.color }}
                />
                <h3 className="text-base font-bold mb-3 text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                  {mod.name}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{mod.desc}</p>
                <div
                  className="flex items-center gap-1.5 text-xs font-bold mt-5 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ color: mod.color }}
                >
                  {t('platform', 'learn_more') || 'Learn more'} <ArrowRight size={12} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding surface-blue-hero dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
        <div className="container-max text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">{t('platform', 'cta_title') || 'Ready to see the full platform?'}</h2>
          <Link href="/request-demo" className="btn-coral text-base px-8 py-3.5 shadow-xl shadow-red-500/20">
            {t('nav', 'contact_us') || 'Request a Demo'} <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  )
}
