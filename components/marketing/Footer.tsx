'use client'
import Link from 'next/link'
import { ArrowRight, ExternalLink, ShieldCheck, Building2, MapPin, Mail, Phone } from 'lucide-react'

import { useLanguage } from '@/contexts/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()

  const FOOTER_COLUMNS = [
    {
      heading: t('footer', 'cols.c1_title'),
      links: [
        { label: t('footer', 'cols.c1_l1'), href: '/auto-newspaper' },
        { label: t('footer', 'cols.c1_l2'), href: '/epaper' },
        { label: t('footer', 'cols.c1_l3'), href: '/platform' },
        { label: t('footer', 'cols.c1_l4'), href: '/platform' },
        { label: t('footer', 'cols.c1_l5'), href: '/digital-editions' },
        { label: t('footer', 'cols.c1_l6'), href: '/publisher-portal' },
      ],
    },
    {
      heading: t('footer', 'cols.c2_title'),
      links: [
        { label: t('footer', 'cols.c2_l1'), href: '/solutions/newspapers' },
        { label: t('footer', 'cols.c2_l2'), href: '/solutions/magazines' },
        { label: t('footer', 'cols.c2_l3'), href: '/solutions/regional-publishers' },
        { label: t('footer', 'cols.c2_l4'), href: '/platform' },
        { label: t('footer', 'cols.c2_l5'), href: '/about' },
        { label: t('footer', 'cols.c2_l6'), href: '/about' },
      ],
    },
    {
      heading: t('footer', 'cols.c3_title'),
      links: [
        { label: t('footer', 'cols.c3_l1'), href: 'https://www.gautamenterprises.org/', external: true },
        { label: t('footer', 'cols.c3_l2'), href: 'https://www.gautamenterprises.org/digital-wing', external: true },
        { label: t('footer', 'cols.c3_l3'), href: 'https://www.gautamenterprises.org/digital-wing#ai-automation', external: true },
        { label: t('footer', 'cols.c3_l4'), href: 'https://www.gautamenterprises.org/design-lab', external: true },
        { label: t('footer', 'cols.c3_l5'), href: 'https://www.gautamenterprises.org/oem', external: true },
        { label: t('footer', 'cols.c3_l6'), href: 'https://www.gautamenterprises.org/company-desk/compliance', external: true },
      ],
    },
    {
      heading: t('footer', 'cols.c4_title'),
      links: [
        { label: t('footer', 'cols.c4_l1'), href: '/about' },
        { label: t('footer', 'cols.c4_l2'), href: '/platform' },
        { label: t('footer', 'cols.c4_l3'), href: '/request-demo' },
        { label: t('footer', 'cols.c4_l4'), href: '/contact' },
        { label: t('footer', 'cols.c4_l5'), href: '/about#compliance' },
        { label: t('footer', 'cols.c4_l6'), href: 'https://www.gautamenterprises.org/company-desk/policies', external: true },
      ],
    },
  ]

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800">
      
      {/* Top Corporate Trust Strip */}
      <div className="border-b border-slate-900 bg-slate-900/60 py-6">
        <div className="container-max flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-3 flex-wrap">
            <span className="text-white font-bold inline-flex items-center gap-1.5">
              <ShieldCheck size={16} className="text-sky-400" />
              Gautam Enterprises
            </span>
            <span className="text-slate-600 dark:text-slate-400">•</span>
            <span className="text-slate-300">{t('footer', 'trust.c1')}</span>
            <span className="text-slate-600 dark:text-slate-400">•</span>
            <span className="text-slate-300">{t('footer', 'trust.c2')}</span>
            <span className="text-slate-600 dark:text-slate-400">•</span>
            <span className="text-slate-300">{t('footer', 'trust.c3')}</span>
            <span className="text-slate-600 dark:text-slate-400">•</span>
            <span className="text-slate-400 font-mono">GSTIN: 23BFJPT7384H1ZX</span>
          </div>
          <a
            href="https://www.gautamenterprises.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-400 hover:text-white font-semibold inline-flex items-center gap-1 transition-colors"
          >
            {t('footer', 'trust.link')} <ExternalLink size={12} />
          </a>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="container-max py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 lg:gap-12">
          
          {/* Brand Info */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-sky-500 to-blue-700 flex items-center justify-center text-white font-bold shadow-md shadow-sky-500/20">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 4H14L19 9V20H4V4Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M14 4V9H19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <div className="text-base font-bold text-white leading-none">PageMint</div>
                <div className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider mt-0.5">
                  A Unit of Gautam Enterprises
                </div>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed mb-6">
              {t('footer', 'brand.tagline')}
            </p>

            <div className="space-y-2 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <MapPin size={14} className="text-sky-400 shrink-0" />
                <span>Bhopal, Madhya Pradesh, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={14} className="text-sky-400 shrink-0" />
                <a href="mailto:hello@gautamenterprises.org" className="hover:text-white transition-colors">
                  hello@gautamenterprises.org
                </a>
              </div>
            </div>
          </div>

          {/* Columns */}
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.heading}>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">{col.heading}</p>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-slate-400 hover:text-sky-400 transition-colors inline-flex items-center gap-1"
                      >
                        {link.label}
                        <ExternalLink size={10} />
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-xs text-slate-400 hover:text-sky-400 transition-colors"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-900 py-6 text-xs text-slate-500">
        <div className="container-max flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} {t('footer', 'bottom.copyright')}</p>
          <div className="flex items-center gap-6">
            <Link href="/about" className="hover:text-slate-300 transition-colors">{t('footer', 'bottom.l1')}</Link>
            <Link href="/request-demo" className="hover:text-slate-300 transition-colors">{t('footer', 'bottom.l2')}</Link>
            <a href="https://www.gautamenterprises.org/" target="_blank" rel="noopener noreferrer" className="hover:text-slate-300 transition-colors">
              {t('footer', 'bottom.l3')}
            </a>
          </div>
        </div>
      </div>

    </footer>
  )
}


