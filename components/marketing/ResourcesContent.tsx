'use client'
import Link from 'next/link'
import { BookOpen, BarChart3, Video, Newspaper, Star } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'
import { motion } from 'framer-motion'

export default function ResourcesContent() {
  const { t } = useLanguage()

  const RESOURCE_CATEGORIES = [
    {
      icon: BookOpen,
      title: t('resources', 'c1_title') || 'Publishing Guides',
      desc: t('resources', 'c1_desc') || 'In-depth guides on newspaper production, digital publishing, layout best practices, and workflow optimisation.',
      href: '/resources/guides',
      count: t('resources', 'c1_count') || '12 guides',
      color: '#0284c7', // sky-600
    },
    {
      icon: Star,
      title: t('resources', 'c2_title') || 'Case Studies',
      desc: t('resources', 'c2_desc') || 'How publishers are using PageMint to automate production, reduce costs, and publish digital editions.',
      href: '/resources/case-studies',
      count: t('resources', 'c2_count') || '8 case studies',
      color: '#0f766e', // teal-700
    },
    {
      icon: BarChart3,
      title: t('resources', 'c3_title') || 'Insights',
      desc: t('resources', 'c3_desc') || 'Analysis, trends and opinion on newspaper publishing, digital transformation and publishing technology.',
      href: '/resources/insights',
      count: t('resources', 'c3_count') || '24 articles',
      color: '#4338ca', // indigo-700
    },
    {
      icon: Video,
      title: t('resources', 'c4_title') || 'Webinars',
      desc: t('resources', 'c4_desc') || 'Live and on-demand sessions covering PageMint features, publishing workflows, and industry topics.',
      href: '/resources/webinars',
      count: t('resources', 'c4_count') || '6 recordings',
      color: '#be123c', // rose-700
    },
    {
      icon: Newspaper,
      title: t('resources', 'c5_title') || 'Product Updates',
      desc: t('resources', 'c5_desc') || 'Changelog and release notes for all PageMint platform improvements and new capabilities.',
      href: '/resources/updates',
      count: t('resources', 'c5_count') || 'Latest: v2.4',
      color: '#6d28d9', // violet-700
    },
  ]

  const SAMPLE_ARTICLES = [
    {
      category: t('resources', 't1_cat') || 'Publishing Guide',
      title: t('resources', 't1_title') || 'The complete guide to newspaper flatplan creation',
      date: t('resources', 't1_date') || 'August 2026',
      href: '/resources/guides/flatplan',
    },
    {
      category: t('resources', 't2_cat') || 'Insight',
      title: t('resources', 't2_title') || 'How regional publishers are adopting print-to-digital workflows in 2026',
      date: t('resources', 't2_date') || 'August 2026',
      href: '/resources/insights/regional-digital',
    },
    {
      category: t('resources', 't3_cat') || 'Publishing Guide',
      title: t('resources', 't3_title') || 'DPI requirements for newspaper print output: a practical guide',
      date: t('resources', 't3_date') || 'July 2026',
      href: '/resources/guides/dpi-print',
    },
    {
      category: t('resources', 't4_cat') || 'Insight',
      title: t('resources', 't4_title') || 'Automated layout engines: how scoring works in modern newspaper software',
      date: t('resources', 't4_date') || 'July 2026',
      href: '/resources/insights/layout-scoring',
    },
    {
      category: t('resources', 't5_cat') || 'Publishing Guide',
      title: t('resources', 't5_title') || 'Setting up multilingual newspaper editions: English and Hindi',
      date: t('resources', 't5_date') || 'June 2026',
      href: '/resources/guides/multilingual',
    },
    {
      category: t('resources', 't6_cat') || 'Insight',
      title: t('resources', 't6_title') || 'Advertisement planning in the digital age: constraints, compliance and automation',
      date: t('resources', 't6_date') || 'June 2026',
      href: '/resources/insights/ad-planning',
    },
  ]

  return (
    <main>
      <section className="pt-32 lg:pt-40 pb-16 surface-blue-hero dark:bg-slate-900 border-b border-slate-200/80 dark:border-slate-800">
        <div className="container-max max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="badge-blue mb-6 inline-flex">{t('resources', 'badge') || 'Resources'}</div>
            <h1 className="hero-serif-headline text-4xl sm:text-5xl lg:text-6xl text-slate-900 dark:text-white mb-6">
              {t('resources', 'headline_1') || 'Publishing knowledge, '}<span className="text-sky-600">{t('resources', 'headline_2') || 'at your fingertips.'}</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 leading-relaxed mb-10 max-w-2xl mx-auto">
              {t('resources', 'tagline') || 'Guides, case studies, insights and product updates for publishers navigating print and digital transformation.'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="section-padding bg-slate-50 dark:bg-slate-950">
        <div className="container-max">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {RESOURCE_CATEGORIES.map(({ icon: Icon, title, desc, href, count, color }, i) => (
              <Link key={title} href={href} className="feature-card group block hover:scale-[1.02] transition-transform duration-300">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ backgroundColor: `${color}18`, color }}
                >
                  <Icon size={20} />
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">{title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">{desc}</p>
                <span className="text-xs font-semibold" style={{ color }}>{count}</span>
              </Link>
            ))}
          </div>

          {/* Latest articles */}
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-8">{t('resources', 'latest') || 'Latest from PageMint'}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SAMPLE_ARTICLES.map((article, i) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                key={article.title}
              >
                <Link
                  href={article.href}
                  className="group block p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-sky-500/50 hover:shadow-xl hover:shadow-sky-500/10 transition-all h-full"
                >
                  <span className="text-xs font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400 mb-3 block">
                    {article.category}
                  </span>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white leading-snug mb-4 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                    {article.title}
                  </h3>
                  <span className="text-xs font-medium text-slate-500 dark:text-slate-400">{article.date}</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
