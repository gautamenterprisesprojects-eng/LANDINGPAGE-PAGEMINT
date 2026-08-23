'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, BarChart3, TrendingUp, Users, Clock, Eye } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

export default function AnalyticsSection() {
  const { t } = useLanguage()
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } }
  }

  return (
    <section className="section-padding bg-white dark:bg-slate-950 border-b border-slate-200/80">
      <div className="container-max">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column — Analytics Image */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 order-2 lg:order-1"
          >
            <div className="rounded-2xl overflow-hidden border border-slate-200/90 shadow-2xl bg-slate-900 group">
              <Image
                src="/images/pagemint-analytics-suite.jpg"
                alt="PageMint live publishing analytics dashboard showing subscriber growth, edition heatmaps, page dwell times, and preflight status"
                width={1200}
                height={750}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              />
            </div>
          </motion.div>

          {/* Right Column — Info */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-5 order-1 lg:order-2"
          >
            <p className="section-label-blue mb-3">{t('analytics', 'badge')}</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white tracking-tight leading-tight mb-6">
              {t('analytics', 'headline')}
            </h2>
            
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
              {t('analytics', 'tagline')}
            </p>

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4 mb-8"
            >
              {[
                { icon: Users, stat: t('analytics', 'metrics.m1_stat'), label: t('analytics', 'metrics.m1_label') },
                { icon: Clock, stat: t('analytics', 'metrics.m2_stat'), label: t('analytics', 'metrics.m2_label') },
                { icon: Eye, stat: t('analytics', 'metrics.m3_stat'), label: t('analytics', 'metrics.m3_label') },
                { icon: TrendingUp, stat: t('analytics', 'metrics.m4_stat'), label: t('analytics', 'metrics.m4_label') },
              ].map(({ icon: Icon, stat, label }) => (
                <motion.div variants={itemVariants} key={label} className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 hover:border-sky-300 transition-colors">
                  <div className="flex items-center gap-2 text-sky-600 mb-1">
                    <Icon size={16} />
                    <span className="text-lg font-black text-slate-900 dark:text-white">{stat}</span>
                  </div>
                  <div className="text-[11px] font-medium text-slate-500">{label}</div>
                </motion.div>
              ))}
            </motion.div>

            <Link href="/request-demo" className="btn-primary inline-flex">
              {t('analytics', 'cta')}
              <ArrowRight size={16} />
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

