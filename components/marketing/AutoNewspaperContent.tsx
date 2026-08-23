'use client'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

export default function AutoNewspaperContent() {
  const { t } = useLanguage()

  const STEPS = [
    { step: '01', title: t('autonews', 's1_title') || 'Publication Setup', desc: t('autonews', 's1_desc') || 'Choose publication, city edition, target language, and date.' },
    { step: '02', title: t('autonews', 's2_title') || 'Page Geometry Plan', desc: t('autonews', 's2_desc') || 'Set page size (Broadsheet/Tabloid), column count, and margins.' },
    { step: '03', title: t('autonews', 's3_title') || 'Story Ingestion', desc: t('autonews', 's3_desc') || 'Import from RSS, CMS APIs, JSON feeds, or manual editor entries.' },
    { step: '04', title: t('autonews', 's4_title') || 'Editorial Weighting', desc: t('autonews', 's4_desc') || 'Assign Lead, Major, Standard, Brief, or Filler priorities.' },
    { step: '05', title: t('autonews', 's5_title') || 'Ad Lock-in', desc: t('autonews', 's5_desc') || 'Define booked ad sizes and mandatory page positions as hard constraints.' },
    { step: '06', title: t('autonews', 's6_title') || 'Auto Generation', desc: t('autonews', 's6_desc') || 'Engine scores candidates and generates print & digital pages in seconds.' },
  ]

  const SCORING = [
    { label: t('autonews', 'score_1') || 'Fill Score (Space Optimization)', weight: '25%' },
    { label: t('autonews', 'score_2') || 'Editorial Hierarchy Balance', weight: '20%' },
    { label: t('autonews', 'score_3') || 'Whitespace & Padding Rhythm', weight: '15%' },
    { label: t('autonews', 'score_4') || 'Image Aspect & DPI Quality', weight: '15%' },
    { label: t('autonews', 'score_5') || 'Typographic Justification', weight: '10%' },
    { label: t('autonews', 'score_6') || 'Continuation Sentence Integrity', weight: '10%' },
    { label: t('autonews', 'score_7') || 'Ad Constraint Compliance', weight: '5%' },
  ]

  return (
    <>
      {/* 6-Step Workflow */}
      <section className="section-padding bg-white dark:bg-slate-950 border-b border-slate-200/80 dark:border-slate-800">
        <div className="container-max">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="section-label-blue mb-2">{t('autonews', 'workflow_label') || 'Workflow'}</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
              {t('autonews', 'workflow_title') || 'The 6-Step Generation Process'}
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {STEPS.map((s) => (
              <div key={s.step} className="feature-card">
                <div className="text-4xl font-black text-sky-200 dark:text-sky-900/50 mb-3">{s.step}</div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">{s.title}</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Spreads Showcase */}
      <section className="section-padding bg-slate-50/70 dark:bg-slate-900 border-b border-slate-200/80 dark:border-slate-800">
        <div className="container-max">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5">
              <p className="section-label-blue mb-3">{t('autonews', 'scoring_label') || 'Multi-Candidate Scoring'}</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight mb-5">
                {t('autonews', 'scoring_title') || 'Layouts Selected by Mathematical Score, Not Guesswork.'}
              </h2>
              <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                {t('autonews', 'scoring_desc') || 'For every page, PageMint generates and evaluates up to 12 candidate layouts against configurable editorial weights. The highest-scoring layout is selected automatically.'}
              </p>

              <div className="space-y-3 mb-8">
                {SCORING.map((s) => (
                  <div key={s.label}>
                    <div className="flex justify-between text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                      <span>{s.label}</span>
                      <span className="text-sky-600">{s.weight}</span>
                    </div>
                    <div className="h-1.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-sky-500 to-blue-600 rounded-full"
                        style={{ width: s.weight }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-xl bg-white">
                <Image
                  src="/images/pagemint-newspaper-spreads.jpg"
                  alt="PageMint newspaper spreads"
                  width={1200}
                  height={720}
                  className="w-full h-auto object-cover dark:opacity-90"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-white dark:bg-slate-950">
        <div className="container-max text-center max-w-xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            {t('autonews', 'cta_title_bottom') || 'Test Auto Layout with Your Content'}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-8">
            {t('autonews', 'cta_desc_bottom') || 'We\'ll configure a live sandbox with your newspaper dimensions and sample articles.'}
          </p>
          <Link href="/request-demo" className="btn-coral">
            {t('nav', 'contact_us') || 'Contact us & Request Demo'} <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  )
}
