'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Palette, Layers, Grid, Type, Sliders, CheckCircle2 } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

export default function StudioSection() {
  const { t } = useLanguage()
  return (
    <section className="section-padding bg-slate-900 text-white relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-sky-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container-max relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="badge-dark mb-4 inline-flex">
              <Palette size={13} className="text-sky-400" />
              {t('studio', 'badge')}
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight mb-6">
              {t('studio', 'headline')}
            </h2>

            <p className="text-base sm:text-lg text-slate-300 mb-8 leading-relaxed">
              {t('studio', 'tagline')}
            </p>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: { transition: { staggerChildren: 0.1 } }
              }}
              className="space-y-3.5 mb-8"
            >
              {[
                { icon: Layers, label: t('studio', 'features.f1') },
                { icon: Grid, label: t('studio', 'features.f2') },
                { icon: Type, label: t('studio', 'features.f3') },
                { icon: Sliders, label: t('studio', 'features.f4') },
              ].map(({ icon: Icon, label }) => (
                <motion.div 
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  key={label} 
                  className="flex items-center gap-3 text-sm text-slate-200"
                >
                  <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-sky-400 shrink-0 border border-slate-700">
                    <Icon size={16} />
                  </div>
                  <span>{label}</span>
                </motion.div>
              ))}
            </motion.div>

            <Link href="/auto-newspaper" className="btn-primary inline-flex">
              {t('studio', 'cta')}
              <ArrowRight size={16} />
            </Link>
          </motion.div>

          {/* Right Column — Studio Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, rotateY: -5 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 perspective-1000"
          >
            <div className="rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl bg-slate-950 group">
              <Image
                src="/images/pagemint-studio.jpg"
                alt="PageMint Studio editor canvas showing full newspaper page design interface with tools, columns and layer panel"
                width={1200}
                height={750}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
