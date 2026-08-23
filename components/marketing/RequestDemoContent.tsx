'use client'
import { ArrowRight, CheckCircle2, ShieldCheck, Phone, Mail, Building2, MapPin } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

const COUNTRIES = [
  'India', 'United States', 'United Kingdom', 'United Arab Emirates',
  'Australia', 'Canada', 'Singapore', 'Germany', 'Other',
]

export default function RequestDemoContent() {
  const { t } = useLanguage()

  const REQUIREMENTS = [
    t('requestDemo', 'req.r1'),
    t('requestDemo', 'req.r2'),
    t('requestDemo', 'req.r3'),
    t('requestDemo', 'req.r4'),
    t('requestDemo', 'req.r5'),
    t('requestDemo', 'req.r6'),
    t('requestDemo', 'req.r7'),
    t('requestDemo', 'req.r8'),
  ]

  const INCLUDED = [
    t('requestDemo', 'inc.i1'),
    t('requestDemo', 'inc.i2'),
    t('requestDemo', 'inc.i3'),
    t('requestDemo', 'inc.i4'),
    t('requestDemo', 'inc.i5'),
  ]

  return (
    <main>
      <section className="pt-32 lg:pt-40 pb-20 surface-blue-hero dark:bg-slate-900 border-b border-slate-200/80 dark:border-slate-800">
        <div className="container-max">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column */}
            <div className="lg:col-span-5">
              <div className="badge-blue mb-4 inline-flex">
                <ShieldCheck size={13} className="text-sky-600" />
                {t('requestDemo', 'badge')}
              </div>

              <h1 className="hero-serif-headline text-4xl sm:text-5xl text-slate-900 dark:text-white mb-6">
                {t('requestDemo', 'headline')}
              </h1>

              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed" dangerouslySetInnerHTML={{ __html: t('requestDemo', 'tagline') }} />

              <div className="space-y-3.5 mb-10">
                {INCLUDED.map((item) => (
                  <div key={item} className="flex items-start gap-2.5 text-sm font-semibold text-slate-700 dark:text-slate-300">
                    <CheckCircle2 size={16} className="text-sky-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Corporate Address & Contact Box */}
              <div className="p-5 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 shadow-xs space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-sky-700 pb-2 border-b border-slate-100 dark:border-slate-800">
                  {t('requestDemo', 'corp')}
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-600 dark:text-slate-400">
                  <MapPin size={15} className="text-sky-600 shrink-0 mt-0.5" />
                  <span>{t('requestDemo', 'address')}</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-600 dark:text-slate-400">
                  <Mail size={15} className="text-sky-600 shrink-0" />
                  <a href="mailto:hello@gautamenterprises.org" className="hover:text-sky-600 transition-colors font-medium">
                    hello@gautamenterprises.org
                  </a>
                </div>
              </div>

            </div>

            {/* Right Column — Contact & Demo Form */}
            <div className="lg:col-span-7">
              <div className="bg-white dark:bg-slate-950 rounded-2xl border border-slate-200/90 dark:border-slate-800 p-8 sm:p-10 shadow-xl">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{t('requestDemo', 'form.title')}</h2>
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">
                  {t('requestDemo', 'form.desc')}
                </p>

                <form className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="form-label" htmlFor="firstName">{t('requestDemo', 'form.first')}</label>
                      <input id="firstName" type="text" required className="form-input" placeholder="e.g. Rajesh" />
                    </div>
                    <div>
                      <label className="form-label" htmlFor="lastName">{t('requestDemo', 'form.last')}</label>
                      <input id="lastName" type="text" required className="form-input" placeholder="e.g. Sharma" />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="form-label" htmlFor="workEmail">{t('requestDemo', 'form.email')}</label>
                      <input id="workEmail" type="email" required className="form-input" placeholder="editor@publication.com" />
                    </div>
                    <div>
                      <label className="form-label" htmlFor="phoneNumber">{t('requestDemo', 'form.phone')}</label>
                      <input id="phoneNumber" type="tel" required className="form-input" placeholder="+91 98765 43210" />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="form-label" htmlFor="orgName">{t('requestDemo', 'form.org')}</label>
                      <input id="orgName" type="text" required className="form-input" placeholder="The Daily Herald" />
                    </div>
                    <div>
                      <label className="form-label" htmlFor="country">{t('requestDemo', 'form.country')}</label>
                      <select id="country" required className="form-select">
                        <option value="">{t('requestDemo', 'form.country_ph')}</option>
                        {COUNTRIES.map((c) => (
                          <option key={c} value={c}>{c}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="form-label" htmlFor="frequency">{t('requestDemo', 'form.freq')}</label>
                      <select id="frequency" className="form-select">
                        <option>{t('requestDemo', 'form.freq_1')}</option>
                        <option>{t('requestDemo', 'form.freq_2')}</option>
                        <option>{t('requestDemo', 'form.freq_3')}</option>
                        <option>{t('requestDemo', 'form.freq_4')}</option>
                      </select>
                    </div>
                    <div>
                      <label className="form-label" htmlFor="req">{t('requestDemo', 'form.interest')}</label>
                      <select id="req" required className="form-select">
                        <option value="">{t('requestDemo', 'form.interest_ph')}</option>
                        {REQUIREMENTS.map((r) => (
                          <option key={r} value={r}>{r}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="form-label" htmlFor="notes">{t('requestDemo', 'form.notes')}</label>
                    <textarea
                      id="notes"
                      rows={3}
                      className="form-input resize-none"
                      placeholder={t('requestDemo', 'form.notes_ph')}
                    />
                  </div>

                  <button
                    type="button"
                    className="btn-coral w-full justify-center py-3.5 text-base font-bold shadow-md shadow-red-500/20"
                  >
                    {t('requestDemo', 'form.submit')}
                    <ArrowRight size={16} />
                  </button>
                </form>

                <p className="text-[11px] text-center text-slate-400 mt-4">
                  {t('requestDemo', 'form.footer')}
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  )
}
