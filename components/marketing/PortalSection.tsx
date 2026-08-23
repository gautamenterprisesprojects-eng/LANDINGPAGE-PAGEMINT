'use client'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, LayoutDashboard, Layers, ShieldCheck } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

export default function PortalSection() {
  const { t } = useLanguage()
  return (
    <section className="section-padding bg-white dark:bg-slate-950">
      <div className="container-max">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="section-label-blue mb-3">{t('portal', 'badge')}</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white tracking-tight">
            {t('portal', 'headline')}
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mt-4 leading-relaxed">
            {t('portal', 'tagline')}
          </p>
        </div>

        {/* Portal Dashboard Screenshot */}
        <div className="rounded-2xl overflow-hidden border border-slate-200/90 shadow-xl bg-slate-900 mb-10 max-w-5xl mx-auto">
          <Image
            src="/images/pagemint-portal.jpg"
            alt="PageMint Publisher Portal dashboard showing active newspaper publications, edition progress and publishing controls"
            width={1200}
            height={720}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Modules Ribbon */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 max-w-4xl mx-auto mb-10">
          {[
            t('portal', 'modules.mod1'),
            t('portal', 'modules.mod2'),
            t('portal', 'modules.mod3'),
            t('portal', 'modules.mod4'),
            t('portal', 'modules.mod5'),
            t('portal', 'modules.mod6'),
          ].map((item) => (
            <div
              key={item}
              className="text-center py-3.5 px-2 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 text-xs font-bold text-slate-700 hover:border-sky-300 hover:bg-sky-50/50 transition-colors cursor-default"
            >
              {item}
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/publisher-portal" className="btn-primary inline-flex">
            {t('portal', 'cta')}
            <ArrowRight size={16} />
          </Link>
        </div>

      </div>
    </section>
  )
}


