'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Cpu, LayoutGrid, Layers, CheckCircle2, Sparkles, FileText, Zap } from 'lucide-react'
import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'

export default function AutoNewspaperSection() {
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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }

  return (
    <section className="section-padding bg-slate-50/70 dark:bg-slate-900/40 border-b border-slate-200/80 dark:border-slate-800 relative overflow-hidden" id="auto-newspaper">
      <div className="container-max">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <div className="badge-blue mb-3 inline-flex">
            <Cpu size={13} className="text-sky-600" />
            {t('autonews', 'badge')}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white tracking-tight">
            {t('autonews', 'headline_1')}{' '}
            <span className="text-sky-600">{t('autonews', 'headline_2')}</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mt-4 leading-relaxed">
            {t('autonews', 'tagline')}
          </p>
        </motion.div>

        {/* Visual Pipeline Showcase Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="rounded-2xl overflow-hidden border border-slate-200/90 dark:border-slate-800 shadow-xl bg-white dark:bg-slate-950 mb-12 max-w-5xl mx-auto relative group"
        >
          <Image
            src="/images/pagemint-pipeline-showcase.jpg"
            alt="PageMint modern publishing engine pipeline showing raw news stories transforming into automated grid layouts, print PDF, and interactive mobile apps"
            width={1280}
            height={720}
            className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.02]"
          />
          {/* Subtle overlay animation */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 translate-x-[-150%]"
            whileInView={{ translateX: "150%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
          />
        </motion.div>

        {/* 4 Key Engine Metrics & Features */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {[
            {
              title: t('autonews', 'metrics.m1_title'),
              desc: t('autonews', 'metrics.m1_desc'),
              metric: '96.4%',
              metricLabel: t('autonews', 'metrics.m1_label'),
            },
            {
              title: t('autonews', 'metrics.m2_title'),
              desc: t('autonews', 'metrics.m2_desc'),
              metric: '100%',
              metricLabel: t('autonews', 'metrics.m2_label'),
            },
            {
              title: t('autonews', 'metrics.m3_title'),
              desc: t('autonews', 'metrics.m3_desc'),
              metric: '0',
              metricLabel: t('autonews', 'metrics.m3_label'),
            },
            {
              title: t('autonews', 'metrics.m4_title'),
              desc: t('autonews', 'metrics.m4_desc'),
              metric: '< 5s',
              metricLabel: t('autonews', 'metrics.m4_label'),
            },
          ].map((item) => (
            <motion.div variants={itemVariants} key={item.title} className="feature-card bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 hover:-translate-y-1 transition-transform duration-300 shadow-sm hover:shadow-md">
              <div className="text-3xl font-black text-sky-600 mb-0.5">{item.metric}</div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">{item.metricLabel}</div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">{item.title}</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link href="/auto-newspaper" className="btn-primary inline-flex shadow-lg shadow-sky-500/20 group">
            {t('autonews', 'cta')}
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

      </div>
    </section>
  )
}
