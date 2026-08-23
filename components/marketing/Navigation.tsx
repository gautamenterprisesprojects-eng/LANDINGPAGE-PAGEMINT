'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ChevronDown, ArrowRight, ShieldCheck, Building2, ExternalLink, Globe, Moon, Sun } from 'lucide-react'

import { useTheme } from 'next-themes'
import { useLanguage } from '@/contexts/LanguageContext'

// We will map the nav items inside the component or just translate the labels inline.
const NAV_ITEMS_KEYS = [
  { key: 'home', href: '/' },
  {
    key: 'solutions',
    href: '/solutions/newspapers',
    mega: true,
    columns: [
      {
        headingKey: 'menu.publisher_type',
        links: [
          { labelKey: 'menu.daily_newspapers', href: '/solutions/newspapers', descKey: 'menu.daily_newspapers_desc' },
          { labelKey: 'menu.magazines_periodicals', href: '/solutions/magazines', descKey: 'menu.magazines_desc' },
          { labelKey: 'menu.regional_publishers', href: '/solutions/regional-publishers', descKey: 'menu.regional_desc' },
          { labelKey: 'menu.media_houses', href: '/platform', descKey: 'menu.media_houses_desc' },
        ],
      },
      {
        headingKey: 'menu.publishing_products',
        links: [
          { labelKey: 'menu.auto_layout_engine', href: '/auto-newspaper', descKey: 'menu.auto_layout_desc' },
          { labelKey: 'menu.epaper_editions', href: '/epaper', descKey: 'menu.epaper_desc' },
          { labelKey: 'menu.print_pdf', href: '/platform', descKey: 'menu.print_pdf_desc' },
          { labelKey: 'menu.portal', href: '/publisher-portal', descKey: 'menu.portal_desc' },
        ],
      },
    ],
  },
  { key: 'auto_layout', href: '/auto-newspaper' },
  { key: 'digital_editions', href: '/digital-editions' },
  { key: 'about_us', href: '/about' },
  {
    key: 'resources',
    href: '/resources',
    mega: false,
    links: [
      { labelKey: 'menu.publishing_guides', href: '/resources' },
      { labelKey: 'menu.platform_architecture', href: '/platform' },
      { labelKey: 'menu.gautam_parent', href: 'https://www.gautamenterprises.org/' },
      { labelKey: 'menu.contact_support', href: 'https://www.gautamenterprises.org/contact' },
    ],
  },
]

const CONTACT_URL = 'https://www.gautamenterprises.org/contact'

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const { lang, toggleLanguage, t } = useLanguage()
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [currentDate, setCurrentDate] = useState('')

  useEffect(() => {
    setMounted(true)
    const date = new Date()
    const options: Intl.DateTimeFormatOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
    setCurrentDate(`India | ${date.toLocaleDateString('en-US', options)}`)
    
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll, { passive: true })
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-200">
      {/* Top Enterprise Verification Strip */}
      <div className="bg-slate-900 text-slate-300 text-[11px] font-medium py-1.5 px-4 border-b border-slate-800">
        <div className="container-max flex flex-wrap items-center justify-between gap-y-2 gap-x-4">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="inline-flex items-center gap-1.5 text-sky-400 font-semibold">
              <ShieldCheck size={13} className="text-sky-400" />
              <span className="hidden sm:inline">{t('nav', 'unit_of')}</span>
              <span className="sm:hidden">Gautam Enterprises</span>
            </span>
            <span className="hidden md:inline text-slate-500">|</span>
            <span className="hidden md:inline-flex items-center gap-1 text-slate-300">
              <Building2 size={12} className="text-slate-400" />
              {t('nav', 'gem_compliant')}
            </span>
            <span className="hidden lg:inline text-slate-500">|</span>
            <span className="hidden lg:inline text-slate-300">
              GSTIN: 23BFJPT7384H1ZX
            </span>
          </div>
          
          <div className="flex items-center gap-3 ml-auto sm:ml-0">
            {mounted && currentDate && (
              <>
                <span className="hidden md:inline text-[11px] text-slate-300">
                  {currentDate}
                </span>
                <span className="hidden md:inline text-slate-600 dark:text-slate-400">|</span>
              </>
            )}
            <button onClick={toggleLanguage} className="flex items-center gap-1.5 hover:text-white transition-colors" title="Select Language">
              <Globe size={13} />
              <span className="hidden sm:inline">{lang}</span>
            </button>
            <span className="text-slate-600 dark:text-slate-400">|</span>
            {mounted && (
              <button 
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} 
                className="flex items-center hover:text-white transition-colors"
                title="Toggle Theme"
              >
                {theme === 'dark' ? <Sun size={13} /> : <Moon size={13} />}
              </button>
            )}
            <span className="hidden sm:inline text-slate-600 dark:text-slate-400">|</span>
            <a
              href="https://www.gautamenterprises.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1 text-sky-300 hover:text-white transition-colors text-[11px]"
            >
              gautamenterprises.org <ExternalLink size={10} />
            </a>
          </div>
        </div>
      </div>

      {/* Main PageSuite-style Navigation Bar */}
      <div
        className={`w-full transition-all duration-200 ${
          scrolled
            ? 'bg-white/70 dark:bg-slate-950/70 backdrop-blur-md shadow-sm border-b border-slate-200/50 dark:border-slate-800/50'
            : 'bg-transparent backdrop-blur-sm border-b border-transparent'
        }`}
      >
        <div className="container-max">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-0 select-none group">
              <PageMintLogo />
              <div className="flex flex-col">
                <span className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white transition-colors uppercase">
                  <span className="text-sky-500">Page</span> <span className="font-medium">Mint</span>
                </span>
                <span className="text-[9px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 -mt-1">
                  {t('nav', 'unit_of')}
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1" onMouseLeave={() => setActiveMenu(null)}>
              {NAV_ITEMS_KEYS.map((item) => (
                <div key={item.key} className="relative" onMouseEnter={() => setActiveMenu(item.key)}>
                  {item.mega || item.links ? (
                    <button className="flex items-center gap-1 px-4 py-2 rounded-md text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-sky-600 dark:hover:text-sky-400 hover:bg-sky-50/60 dark:hover:bg-sky-900/30 transition-colors">
                      {t('nav', item.key)}
                      <ChevronDown
                        size={14}
                        className={`text-slate-400 dark:text-slate-500 transition-transform duration-200 ${
                          activeMenu === item.key ? 'rotate-180 text-sky-600 dark:text-sky-400' : ''
                        }`}
                      />
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className="px-4 py-2 rounded-md text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-sky-600 dark:hover:text-sky-400 hover:bg-sky-50/60 dark:hover:bg-sky-900/30 transition-colors"
                    >
                      {t('nav', item.key)}
                    </Link>
                  )}

                  {/* Mega Menu Dropdown */}
                  {activeMenu === item.key && (item.mega || item.links) && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50">
                      {item.mega && item.columns ? (
                        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-150 dark:border-slate-800 p-6 min-w-[580px] grid grid-cols-2 gap-6 animate-in fade-in slide-in-from-top-2 duration-150">
                          {item.columns.map((col) => (
                            <div key={col.headingKey}>
                              <p className="text-[11px] font-bold uppercase tracking-widest text-sky-700 dark:text-sky-400 mb-3 pb-1.5 border-b border-slate-100 dark:border-slate-800">
                                {t('nav', col.headingKey)}
                              </p>
                              <ul className="space-y-1">
                                {col.links.map((link) => (
                                  <li key={link.labelKey}>
                                    <Link
                                      href={link.href}
                                      className="flex flex-col px-3 py-2 rounded-lg hover:bg-sky-50/80 dark:hover:bg-sky-900/30 transition-colors group"
                                      onClick={() => setActiveMenu(null)}
                                    >
                                      <span className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                                        {t('nav', link.labelKey)}
                                      </span>
                                      {link.descKey && (
                                        <span className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{t('nav', link.descKey)}</span>
                                      )}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="bg-white dark:bg-slate-900 rounded-xl shadow-xl border border-slate-150 dark:border-slate-800 py-2 min-w-[220px] animate-in fade-in slide-in-from-top-2 duration-150">
                          {item.links?.map((link) => (
                            <Link
                              key={link.labelKey}
                              href={link.href}
                              className="block px-4 py-2.5 text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-sky-600 dark:hover:text-sky-400 hover:bg-sky-50 dark:hover:bg-sky-900/30 transition-colors"
                              onClick={() => setActiveMenu(null)}
                            >
                              {t('nav', link.labelKey)}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Desktop Action Buttons — PageSuite style red/coral button */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="/publisher-portal"
                className="text-sm font-bold text-slate-700 dark:text-slate-200 hover:text-sky-600 dark:hover:text-sky-400 px-3 py-2 rounded-lg transition-colors"
              >
                {t('nav', 'publisher_portal')}
              </Link>
              <Link
                href={CONTACT_URL}
                className="text-sm font-bold text-slate-700 dark:text-slate-200 hover:text-sky-600 dark:hover:text-sky-400 px-3 py-2 rounded-lg transition-colors"
              >
                {t('nav', 'contact_us')}
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-800 hover:bg-slate-100 transition-colors"
              aria-label={mobileOpen ? 'Close Menu' : 'Open Menu'}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 top-[100px] bg-white z-40 overflow-y-auto border-t border-slate-200">
          <div className="p-6 space-y-3">
            {NAV_ITEMS_KEYS.map((item) => (
              <div key={item.key}>
                <Link
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-3 text-base font-bold text-slate-800 hover:text-sky-600 hover:bg-sky-50 rounded-xl"
                >
                  {t('nav', item.key)}
                </Link>
              </div>
            ))}
            <div className="pt-6 border-t border-slate-100 space-y-3">
              <Link
                href="/portal"
                onClick={() => setMobileOpen(false)}
                className="block w-full text-center py-3 rounded-xl border border-slate-200 dark:border-slate-800 text-sm font-bold text-slate-800 dark:text-slate-200"
              >
                {t('nav', 'publisher_portal')}
              </Link>
              <Link
                href={CONTACT_URL}
                onClick={() => setMobileOpen(false)}
                className="btn-coral w-full justify-center text-center"
              >
                Contact us & Request Demo
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

function PageMintLogo() {
  const { theme } = useTheme()
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const img = new window.Image()
    img.src = '/images/custom-logo.png'
    img.onload = () => {
      const canvas = canvasRef.current
      if (!canvas) return
      const ctx = canvas.getContext('2d')
      if (!ctx) return

      canvas.width = img.width
      canvas.height = img.height
      ctx.drawImage(img, 0, 0)

      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
      const data = imageData.data
      
      const isDark = theme === 'dark'

      for (let i = 0; i < data.length; i += 4) {
        const r = data[i]
        const g = data[i + 1]
        const b = data[i + 2]

        // Detect white background (tolerance for JPEG artifacts)
        if (r > 240 && g > 240 && b > 240) {
          data[i + 3] = 0 // Make transparent
        } else {
          // If dark mode, turn the non-white pixels pure white
          if (isDark) {
            data[i] = 255
            data[i + 1] = 255
            data[i + 2] = 255
          }
        }
      }
      ctx.putImageData(imageData, 0, 0)
    }
  }, [theme])

  return (
    <div className="w-20 h-20 shrink-0 relative flex items-center justify-center">
      <canvas
        ref={canvasRef}
        className="w-full h-full object-contain"
        style={{ display: 'block' }}
      />
    </div>
  )
}

