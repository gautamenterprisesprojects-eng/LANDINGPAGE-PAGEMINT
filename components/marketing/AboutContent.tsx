'use client'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ShieldCheck, CheckCircle2, ExternalLink, Cpu, Printer, Sparkles, Globe } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'
import { motion } from 'framer-motion'

export default function AboutContent() {
  const { t } = useLanguage()

  const certifications = [
    { label: t('about', 'cert_1_label') || 'GeM Portal Compliant', desc: t('about', 'cert_1_desc') || 'Government e-Marketplace verified vendor' },
    { label: t('about', 'cert_2_label') || 'IREPS Registered', desc: t('about', 'cert_2_desc') || 'Indian Railways E-Procurement Systems' },
    { label: t('about', 'cert_3_label') || 'MSME Certified', desc: t('about', 'cert_3_desc') || 'Ministry of Micro, Small & Medium Enterprises' },
    { label: t('about', 'cert_4_label') || 'GSTIN Verified', desc: t('about', 'cert_4_desc') || '23BFJPT7384H1ZX (Active Tax Entity)' },
  ]

  const divisions = [
    {
      icon: Cpu,
      title: t('about', 'div_1_title') || 'Digital & AI Wing',
      desc: t('about', 'div_1_desc') || 'Full-stack AI web engineering, LLM automation, custom software architectures, and MLOps infrastructure.',
      link: 'https://www.gautamenterprises.org/digital-wing',
      badge: t('about', 'div_1_badge') || 'AI Services',
    },
    {
      icon: Sparkles,
      title: t('about', 'div_2_title') || 'Design Lab & UI/UX',
      desc: t('about', 'div_2_desc') || 'Modern interface architecture, design systems, visual branding, and photorealistic visualization.',
      link: 'https://www.gautamenterprises.org/design-lab',
      badge: t('about', 'div_2_badge') || 'UI/UX Design',
    },
    {
      icon: Printer,
      title: t('about', 'div_3_title') || 'Industrial OEM & Printing Press',
      desc: t('about', 'div_3_desc') || 'High-volume offset printing infrastructure, industrial commodities, and institutional procurement.',
      link: 'https://www.gautamenterprises.org/oem',
      badge: t('about', 'div_3_badge') || 'Print Infrastructure',
    },
    {
      icon: Globe,
      title: t('about', 'div_4_title') || 'E-Commerce & Digital Wings',
      desc: t('about', 'div_4_desc') || 'Global marketplace operations, D2C store development, and catalog management systems.',
      link: 'https://www.gautamenterprises.org/ecommerce',
      badge: t('about', 'div_4_badge') || 'E-Commerce',
    },
  ]

  const gallery = [
    {
      src: '/images/pagemint-devices-hero.jpg',
      title: t('about', 'gal_1_title') || 'Cross-Device Readers',
      desc: t('about', 'gal_1_desc') || 'Native iPad spreads and iPhone mobile article layouts.',
    },
    {
      src: '/images/pagemint-studio.jpg',
      title: t('about', 'gal_2_title') || 'PageMint Studio Editor',
      desc: t('about', 'gal_2_desc') || 'In-browser precision newspaper layout and typography tool.',
    },
    {
      src: '/images/pagemint-newspaper-spreads.jpg',
      title: t('about', 'gal_3_title') || 'Automated Spreads',
      desc: t('about', 'gal_3_desc') || 'Intelligently scored broadsheet and tabloid templates.',
    }
  ]

  return (
    <main>
      
      {/* Hero Section with Large Image Header */}
      <section className="pt-32 lg:pt-40 pb-16 surface-blue-hero dark:bg-slate-900 border-b border-slate-200/80 dark:border-slate-800">
        <div className="container-max">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="max-w-4xl mb-12">
              <div className="badge-blue mb-4 inline-flex">
                <ShieldCheck size={13} className="text-sky-600 dark:text-sky-400" />
                <span className="ml-1.5">{t('about', 'badge') || 'Corporate Identity & Heritage'}</span>
              </div>
              <h1 className="hero-serif-headline text-4xl sm:text-5xl lg:text-6xl text-slate-900 dark:text-white mb-6">
                {t('about', 'headline') || 'Engineering the Future of Newspaper Publishing.'}
              </h1>
              <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
                {t('about', 'p1_1') || 'PageMint is a specialized publishing technology SaaS platform operating as a dedicated unit of '}
                <strong className="text-slate-900 dark:text-white font-semibold">Gautam Enterprises</strong>. 
                {' '}{t('about', 'p1_2') || 'We bridge industrial-grade newspaper production with advanced AI layout automation and digital ePaper suites.'}
              </p>
            </div>
          </motion.div>

          {/* Product Visual — Automatic Newspaper Maker */}
          <div className="rounded-2xl overflow-hidden border border-slate-200/90 dark:border-slate-700 shadow-2xl bg-slate-950 max-w-6xl mx-auto group">
            <div className="relative">
              <Image
                src="/images/pagemint-auto-newspaper.jpg"
                alt="PageMint Automatic Newspaper Maker interface showing AI layout generation"
                width={1280}
                height={720}
                priority
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.01] dark:opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/40 to-transparent flex items-end p-6 sm:p-10">
                <div className="text-white max-w-2xl">
                  <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 mb-1 block">
                    {t('about', 'core_tech') || 'Core Technology'}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight">
                    {t('about', 'core_title') || 'PageMint Automatic Newspaper Maker & ePaper Engine'}
                  </h3>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Corporate Profile & Regulatory Registrations */}
      <section id="gautam" className="section-padding bg-white dark:bg-slate-950 border-b border-slate-200/80 dark:border-slate-800">
        <div className="container-max">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-6">
              <p className="section-label-blue mb-3">{t('about', 'parent_label') || 'Parent Organization & Technology'}</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight mb-5">
                {t('about', 'parent_title') || 'About Gautam Enterprises & PageMint'}
              </h2>
              <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                <a
                  href="https://www.gautamenterprises.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 dark:text-sky-400 font-semibold underline underline-offset-4 hover:text-sky-800 dark:hover:text-sky-300 inline-flex items-center gap-1"
                >
                  Gautam Enterprises <ExternalLink size={14} />
                </a>{' '}
                {t('about', 'parent_p1') || 'is a multi-disciplinary technology and industrial services firm based in Bhopal, Madhya Pradesh, India. PageMint is our flagship DTP and SaaS unit dedicated to revolutionizing news media.'}
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                <strong className="dark:text-white">{t('about', 'parent_s1') || 'Industrial-Grade DTP Automation:'}</strong> {t('about', 'parent_p2') || "PageMint isn't just software; it's a complete production pipeline. Our AI layout engine supports full Unicode Devanagari (including exact 'Shirorekha' handling and 10+ calibrated Hindi fonts). We automate multi-column text flow with Widow/Orphan prevention, enabling single-click newspaper generation across 320+ pre-scored broadsheet and tabloid templates."}
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                <strong className="dark:text-white">{t('about', 'parent_s2') || 'RNI-Ready & Press Output:'}</strong> {t('about', 'parent_p3') || 'We understand the strict regulatory requirements of Indian journalism. Our Smart Flatplans include structured imprint-lines for strict RNI compliance. Once approved, the system generates automated CMYK preflight validated PDFs, selectable from lightweight 150 DPI proofing up to high-resolution 2400 DPI exports for advanced offset printing presses.'}
              </p>

              {/* Badges / Registrations */}
              <div className="grid sm:grid-cols-2 gap-3 mb-8">
                {certifications.map((item) => (
                  <div key={item.label} className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
                    <div className="flex items-center gap-2 text-xs font-bold text-slate-900 dark:text-white mb-1">
                      <CheckCircle2 size={14} className="text-sky-600 dark:text-sky-400 shrink-0" />
                      {item.label}
                    </div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400">{item.desc}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <a href="https://www.gautamenterprises.org/" target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex text-sm py-2">
                  {t('about', 'gautam_portal') || 'Gautam Enterprises Portal'} <ExternalLink size={14} />
                </a>
                <Link href="/request-demo" className="btn-secondary inline-flex text-sm py-2">
                  {t('about', 'setup_package') || 'Explore setup options'}
                </Link>
              </div>
            </div>

            {/* Enterprise Divisions Grid */}
            <div className="lg:col-span-6 space-y-4">
              {divisions.map(({ icon: Icon, title, desc, link, badge }) => (
                <a
                  key={title}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="feature-card block group p-5 hover:border-sky-300 dark:hover:border-sky-700 transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-sky-50 dark:bg-slate-800 text-sky-600 dark:text-sky-400 flex items-center justify-center shrink-0 border border-sky-100 dark:border-slate-700">
                      <Icon size={20} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                          {title}
                        </h3>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-sky-600 dark:text-sky-300 bg-sky-50 dark:bg-sky-900/30 px-2 py-0.5 rounded-md">
                          {badge}
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">{desc}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Visual Gallery of Platform Capabilities */}
      <section className="section-padding bg-slate-50/70 dark:bg-slate-900 border-b border-slate-200/80 dark:border-slate-800">
        <div className="container-max">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <p className="section-label-blue mb-3">{t('about', 'gallery_label') || 'Platform Gallery'}</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
              {t('about', 'gallery_title') || 'Architected for Print, Web, and Mobile.'}
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mt-3">
              {t('about', 'gallery_desc') || 'Explore the visual ecosystem developed by PageMint for newsrooms of every scale.'}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {gallery.map((item, i) => (
              <div key={i} className="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-md group">
                <Image
                  src={item.src}
                  alt={item.title}
                  width={600}
                  height={380}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105 dark:opacity-90"
                />
                <div className="p-5">
                  <h3 className="font-bold text-slate-900 dark:text-white text-sm mb-1">{item.title}</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-white dark:bg-slate-950">
        <div className="container-max text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            {t('about', 'cta_title') || 'Schedule an Executive Briefing'}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
            {t('about', 'cta_desc') || 'Connect with our leadership and engineering team to evaluate PageMint for your publication network.'}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/request-demo" className="btn-coral">
              {t('nav', 'contact_us') || 'Contact us & Request Demo'} <ArrowRight size={16} />
            </Link>
            <a
              href="https://www.gautamenterprises.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary flex items-center"
            >
              {t('about', 'gautam_portal') || 'Gautam Enterprises Portal'} <ExternalLink size={15} className="ml-1" />
            </a>
          </div>
        </div>
      </section>

    </main>
  )
}
