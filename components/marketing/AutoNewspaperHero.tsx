'use client'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Cpu } from 'lucide-react'
import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import { PAGEMINT_APP_URL } from '@/lib/links'

export default function AutoNewspaperHero() {
  const { t } = useLanguage()

  return (
    <section className="pt-32 lg:pt-40 pb-16 surface-blue-hero border-b border-slate-200/80 dark:border-slate-800 overflow-hidden relative">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="badge-blue mb-4 inline-flex">
              <Cpu size={13} className="text-sky-600" />
              {t('autonews', 'badge') || 'Intelligent Layout Automation'}
            </div>
            <h1 className="hero-serif-headline text-4xl sm:text-5xl lg:text-6xl text-slate-900 dark:text-white mb-6">
              {t('autonews', 'headline_1') || 'From Raw Newsroom Copy to Finished Newspaper.'}{' '}
              <span className="text-sky-600">{t('autonews', 'headline_2') || 'Automatically.'}</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
              {t('autonews', 'tagline') || 'PageMint automatically evaluates story priorities, word counts, photo dimensions, and advertising bookings to assemble publication-ready pages in seconds — keeping your editors in complete creative control.'}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/request-demo" className="btn-coral">
                Contact us &amp; Request Demo <ArrowRight size={16} />
              </Link>
              <Link href={PAGEMINT_APP_URL} className="btn-secondary">
                Access Portal
              </Link>
            </div>
          </motion.div>

          {/* Right Content - Image and Animation */}
          <motion.div 
            initial={{ opacity: 0, x: 30, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full"
          >
            <div className="rounded-2xl overflow-hidden border border-slate-200/90 dark:border-slate-700 shadow-2xl bg-white dark:bg-slate-800 relative group">
              <Image
                src="/images/pagemint-pipeline-showcase.jpg"
                alt="Modern publishing engine pipeline showing news stories transforming into automated layout grids and mobile apps"
                width={1280}
                height={720}
                priority
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              />
              {/* Overlay Animation (Sweep) */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 translate-x-[-150%]"
                animate={{ translateX: "150%" }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3, ease: "easeInOut" }}
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
