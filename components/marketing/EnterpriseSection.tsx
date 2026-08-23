'use client'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, ShieldCheck, ExternalLink, Upload, Cpu, ScanLine, Layers, Zap } from 'lucide-react'

import { useLanguage } from '@/contexts/LanguageContext'

export default function EnterpriseSection() {
  const { t } = useLanguage()

  const CREDENTIALS = [
    t('enterprise', 'credentials.c1'),
    t('enterprise', 'credentials.c2'),
    t('enterprise', 'credentials.c3'),
    t('enterprise', 'credentials.c4'),
    t('enterprise', 'credentials.c5'),
    t('enterprise', 'credentials.c6'),
  ]

  const STEPS = [
    {
      icon: Upload,
      num: '01',
      title: t('enterprise', 'pipeline.s1_title'),
      desc: t('enterprise', 'pipeline.s1_desc'),
      color: 'text-sky-400',
      bg: 'bg-sky-400/10',
      border: 'border-sky-400/30',
    },
    {
      icon: Cpu,
      num: '02',
      title: t('enterprise', 'pipeline.s2_title'),
      desc: t('enterprise', 'pipeline.s2_desc'),
      color: 'text-violet-400',
      bg: 'bg-violet-400/10',
      border: 'border-violet-400/30',
    },
    {
      icon: ScanLine,
      num: '03',
      title: t('enterprise', 'pipeline.s3_title'),
      desc: t('enterprise', 'pipeline.s3_desc'),
      color: 'text-amber-400',
      bg: 'bg-amber-400/10',
      border: 'border-amber-400/30',
    },
    {
      icon: Layers,
      num: '04',
      title: t('enterprise', 'pipeline.s4_title'),
      desc: t('enterprise', 'pipeline.s4_desc'),
      color: 'text-emerald-400',
      bg: 'bg-emerald-400/10',
      border: 'border-emerald-400/30',
    },
    {
      icon: Zap,
      num: '05',
      title: t('enterprise', 'pipeline.s5_title'),
      desc: t('enterprise', 'pipeline.s5_desc'),
      color: 'text-rose-400',
      bg: 'bg-rose-400/10',
      border: 'border-rose-400/30',
    },
  ]

  return (
    <section className="section-padding bg-slate-900 text-white relative overflow-hidden">
      {/* Background glowing gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container-max relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-6">
            <div className="badge-dark mb-4 inline-flex">
              <ShieldCheck size={13} className="text-sky-400" />
              {t('enterprise', 'badge')}
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight mb-6">
              {t('enterprise', 'headline_1')}{' '}
              <span className="text-sky-400">{t('enterprise', 'headline_2')}</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-300 mb-8 leading-relaxed">
              {t('enterprise', 'tagline_1')}{' '}
              <a
                href="https://www.gautamenterprises.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-400 font-semibold underline underline-offset-4 hover:text-white transition-colors inline-flex items-center gap-1"
              >
                Gautam Enterprises <ExternalLink size={14} />
              </a>{' '}
              {t('enterprise', 'tagline_2')}
            </p>

            <div className="space-y-3.5 mb-8">
              {CREDENTIALS.map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm text-slate-200">
                  <CheckCircle2 size={17} className="text-sky-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Link href="/request-demo" className="btn-coral">
                {t('enterprise', 'cta_primary')}
                <ArrowRight size={16} />
              </Link>
              <Link href="/about" className="btn-secondary !bg-slate-800 !text-white !border-slate-700 hover:!bg-slate-700">
                {t('enterprise', 'cta_secondary')}
              </Link>
            </div>
          </div>

          {/* Right Column — How PageMint Works pipeline */}
          <div className="lg:col-span-6">
            <div className="bg-slate-800/80 rounded-2xl p-6 border border-slate-700/80 backdrop-blur-md">
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-700 text-xs font-bold text-slate-400 uppercase tracking-wider">
                <span>{t('enterprise', 'pipeline.title')}</span>
                <span className="text-emerald-400 font-mono flex items-center gap-1.5">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  {t('enterprise', 'pipeline.live')}
                </span>
              </div>

              <div className="space-y-3">
                {STEPS.map((step) => {
                  const Icon = step.icon
                  return (
                    <div
                      key={step.num}
                      className={`flex items-start gap-4 p-3.5 rounded-xl bg-slate-900/90 border ${step.border} group hover:bg-slate-900 transition-colors`}
                    >
                      {/* Step icon */}
                      <div className={`shrink-0 w-9 h-9 rounded-lg ${step.bg} border ${step.border} flex items-center justify-center`}>
                        <Icon size={16} className={step.color} />
                      </div>
                      {/* Text */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-0.5">
                          <span className={`text-[10px] font-black font-mono ${step.color}`}>{step.num}</span>
                          <span className="text-sm font-bold text-white">{step.title}</span>
                        </div>
                        <p className="text-xs text-slate-400 leading-relaxed">{step.desc}</p>
                      </div>
                      {/* Done indicator */}
                      <CheckCircle2 size={14} className="text-emerald-400 shrink-0 mt-1" />
                    </div>
                  )
                })}
              </div>

              {/* Stats Bar */}
              <div className="grid grid-cols-3 gap-3 mt-5 pt-4 border-t border-slate-700/80 text-center">
                <div>
                  <div className="text-2xl font-black text-white">99.9%</div>
                  <div className="text-[11px] text-slate-400">{t('enterprise', 'stats.uptime_label')}</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-sky-400">&lt;5s</div>
                  <div className="text-[11px] text-slate-400">{t('enterprise', 'stats.gen_time_label')}</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-white">6-in-1</div>
                  <div className="text-[11px] text-slate-400">{t('enterprise', 'stats.formats_label')}</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

