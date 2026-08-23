'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Layout, Sparkles, CheckCircle2 } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

export default function TemplatesShowcaseSection() {
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
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } }
  }

  return (
    <section className="section-padding bg-gradient-to-b from-slate-50 to-sky-50/50 dark:from-slate-900 dark:to-slate-900/50 border-b border-slate-200/80 dark:border-slate-800">
      <div className="container-max">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <div className="badge-blue mb-3 inline-flex">
            <Layout size={13} className="text-sky-600" />
            {t('templates', 'badge')}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white tracking-tight">
            {t('templates', 'headline')}
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mt-4 leading-relaxed">
            {t('templates', 'tagline')}
          </p>
        </motion.div>

        {/* Panoramic Newspaper Spreads Image */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="rounded-2xl overflow-hidden border border-slate-200/90 dark:border-slate-800 shadow-2xl bg-white dark:bg-slate-950 mb-12 max-w-6xl mx-auto group"
        >
          <Image
            src="/images/pagemint-newspaper-spreads.jpg"
            alt="Panoramic showcase of PageMint newspaper layouts floating across broadsheet, tabloid, and digital tablet formats"
            width={1280}
            height={720}
            className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.02]"
          />
        </motion.div>

        {/* Template Category Pills */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto"
        >
          {[
            { title: t('templates', 'items.t1_title'), desc: t('templates', 'items.t1_desc') },
            { title: t('templates', 'items.t2_title'), desc: t('templates', 'items.t2_desc') },
            { title: t('templates', 'items.t3_title'), desc: t('templates', 'items.t3_desc') },
            { title: t('templates', 'items.t4_title'), desc: t('templates', 'items.t4_desc') },
          ].map((item) => (
            <motion.div variants={itemVariants} key={item.title} className="p-4 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 shadow-xs hover:border-sky-300 dark:hover:border-sky-700 hover:shadow-md transition-all duration-300">
              <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-1 flex items-center gap-1.5">
                <CheckCircle2 size={14} className="text-sky-600 shrink-0" />
                {item.title}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
