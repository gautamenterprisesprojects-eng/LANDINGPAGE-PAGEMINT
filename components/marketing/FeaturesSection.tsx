'use client'

import {
  Zap, LayoutGrid, Image as ImageIcon, Megaphone, ArrowLeftRight,
  FileDown, Monitor, Building2, Users, Languages, CalendarClock, BarChart3
} from 'lucide-react'
import { motion } from 'framer-motion'

import { useLanguage } from '@/contexts/LanguageContext'

export default function FeaturesSection() {
  const { t } = useLanguage()

  const FEATURES = [
    {
      icon: Zap,
      title: t('features', 'items.i1_title'),
      desc: t('features', 'items.i1_desc'),
      badge: t('features', 'items.i1_badge'),
    },
    {
      icon: LayoutGrid,
      title: t('features', 'items.i2_title'),
      desc: t('features', 'items.i2_desc'),
      badge: t('features', 'items.i2_badge'),
    },
    {
      icon: Monitor,
      title: t('features', 'items.i3_title'),
      desc: t('features', 'items.i3_desc'),
      badge: t('features', 'items.i3_badge'),
    },
    {
      icon: FileDown,
      title: t('features', 'items.i4_title'),
      desc: t('features', 'items.i4_desc'),
      badge: t('features', 'items.i4_badge'),
    },
    {
      icon: Megaphone,
      title: t('features', 'items.i5_title'),
      desc: t('features', 'items.i5_desc'),
      badge: t('features', 'items.i5_badge'),
    },
    {
      icon: ArrowLeftRight,
      title: t('features', 'items.i6_title'),
      desc: t('features', 'items.i6_desc'),
      badge: t('features', 'items.i6_badge'),
    },
    {
      icon: Building2,
      title: t('features', 'items.i7_title'),
      desc: t('features', 'items.i7_desc'),
      badge: t('features', 'items.i7_badge'),
    },
    {
      icon: Languages,
      title: t('features', 'items.i8_title'),
      desc: t('features', 'items.i8_desc'),
      badge: t('features', 'items.i8_badge'),
    },
    {
      icon: Users,
      title: t('features', 'items.i9_title'),
      desc: t('features', 'items.i9_desc'),
      badge: t('features', 'items.i9_badge'),
    },
    {
      icon: ImageIcon,
      title: t('features', 'items.i10_title'),
      desc: t('features', 'items.i10_desc'),
      badge: t('features', 'items.i10_badge'),
    },
    {
      icon: CalendarClock,
      title: t('features', 'items.i11_title'),
      desc: t('features', 'items.i11_desc'),
      badge: t('features', 'items.i11_badge'),
    },
    {
      icon: BarChart3,
      title: t('features', 'items.i12_title'),
      desc: t('features', 'items.i12_desc'),
      badge: t('features', 'items.i12_badge'),
    },
  ]


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  }

  return (
    <section className="section-padding bg-gradient-to-b from-white via-sky-50/40 to-white">
      <div className="container-max">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-14"
        >
          <p className="section-label-blue mb-3">{t('features', 'badge')}</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white tracking-tight">
            {t('features', 'headline')}
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mt-4 leading-relaxed">
            {t('features', 'tagline')}
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
        >
          {FEATURES.map((feat) => {
            const Icon = feat.icon
            return (
              <motion.div
                variants={itemVariants}
                key={feat.title}
                className="feature-card group hover:border-sky-300 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="feature-icon !mb-0 group-hover:bg-sky-500 group-hover:text-white transition-colors duration-300">
                    <Icon size={19} />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-sky-600 bg-sky-50 px-2.5 py-1 rounded-full border border-sky-100 group-hover:bg-sky-100 transition-colors">
                    {feat.badge}
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 group-hover:text-sky-600 transition-colors">
                  {feat.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{feat.desc}</p>
              </motion.div>
            )
          })}
        </motion.div>

      </div>
    </section>
  )
}

