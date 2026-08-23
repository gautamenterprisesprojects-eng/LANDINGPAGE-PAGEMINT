'use client'
import { useLanguage } from '@/contexts/LanguageContext'

export default function WorkflowSection() {
  const { t } = useLanguage()

  const STEPS = [
    {
      number: '01',
      title: t('workflow', 'steps.s1_title'),
      desc: t('workflow', 'steps.s1_desc'),
    },
    {
      number: '02',
      title: t('workflow', 'steps.s2_title'),
      desc: t('workflow', 'steps.s2_desc'),
    },
    {
      number: '03',
      title: t('workflow', 'steps.s3_title'),
      desc: t('workflow', 'steps.s3_desc'),
    },
    {
      number: '04',
      title: t('workflow', 'steps.s4_title'),
      desc: t('workflow', 'steps.s4_desc'),
    },
    {
      number: '05',
      title: t('workflow', 'steps.s5_title'),
      desc: t('workflow', 'steps.s5_desc'),
    },
  ]

  return (
    <section className="section-padding bg-white dark:bg-slate-950">
      <div className="container-max">
        <div className="max-w-xl mb-14">
          <p className="workflow-badge mb-4">{t('workflow', 'badge')}</p>
          <h2 className="section-headline">
            {t('workflow', 'headline')}
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-0 lg:divide-x lg:divide-[#e2ded8] dark:divide-slate-800">
          {STEPS.map((step) => (
            <div
              key={step.number}
              className="group lg:px-8 py-6 lg:py-0 border-b lg:border-b-0 border-[#e2ded8] dark:border-slate-800 first:pl-0 last:pr-0"
            >
              <div className="text-5xl font-black text-[#e2ded8] dark:text-slate-800 dark:text-slate-200 group-hover:text-[#bbf7d9] dark:group-hover:text-sky-900 transition-colors duration-300 leading-none mb-4 tabular-nums">
                {step.number}
              </div>
              <h3 className="text-base font-bold text-[#1a1916] dark:text-white mb-2">{step.title}</h3>
              <p className="text-sm text-[#6b6860] dark:text-slate-400 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


