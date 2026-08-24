import type { Metadata } from 'next'
import Link from 'next/link'
import {
  LayoutDashboard, Newspaper, BookOpen, FileText, LayoutGrid,
  Image as ImageIcon, Megaphone, BarChart3, Users, Settings, Layers, LogOut
} from 'lucide-react'
import { PAGEMINT_APP_URL } from '@/lib/links'

export const metadata: Metadata = {
  title: 'Publisher Portal — PageMint',
  description: 'PageMint Publisher Portal — manage publications, editions, content, and more.',
}

const NAV_ITEMS = [
  { icon: LayoutDashboard, label: 'Dashboard', href: '/portal', active: true },
  { icon: Newspaper, label: 'Publications', href: '/portal/publications' },
  { icon: BookOpen, label: 'Editions', href: '/portal/editions' },
  { icon: FileText, label: 'Content', href: '/portal/content' },
  { icon: Layers, label: 'Auto Newspaper', href: PAGEMINT_APP_URL },
  { icon: LayoutGrid, label: 'Flatplan', href: '/portal/flatplan' },
  { icon: LayoutGrid, label: 'Templates', href: '/portal/templates' },
  { icon: ImageIcon, label: 'Media Library', href: '/portal/media' },
  { icon: Megaphone, label: 'Advertising', href: '/portal/advertising' },
  { icon: BarChart3, label: 'Analytics', href: '/portal/analytics' },
  { icon: Users, label: 'Team', href: '/portal/team' },
  { icon: Settings, label: 'Settings', href: '/portal/settings' },
]

const DEMO_EDITIONS = [
  { pub: 'The Metro Herald', date: 'Aug 23, 2026', pages: 24, status: 'Generated', color: '#16a257' },
  { pub: 'Delhi Morning Post', date: 'Aug 23, 2026', pages: 16, status: 'In Review', color: '#1e40af' },
  { pub: 'Coastal Gazette', date: 'Aug 22, 2026', pages: 20, status: 'Published', color: '#0e6b52' },
  { pub: 'Punjab Tribune', date: 'Aug 22, 2026', pages: 12, status: 'Draft', color: '#6b7280' },
]

const ACTIVITY = [
  { time: '11:18', text: 'Metro Herald — Page 7 approved by Editor' },
  { time: '11:12', text: 'Delhi Post — Auto generation completed (16 pages)' },
  { time: '11:05', text: 'Coastal Gazette — Preflight passed' },
  { time: '10:58', text: 'Metro Herald — 24 pages generated in 6.4s' },
  { time: '10:32', text: 'Delhi Post — Content import completed (38 articles)' },
]

export default function PortalDashboard() {
  return (
    <div className="flex h-screen bg-[#f5f3ef] overflow-hidden">
      {/* Sidebar */}
      <aside className="w-60 bg-[#1a1916] flex flex-col flex-shrink-0">
        {/* Logo */}
        <div className="p-5 border-b border-white/10">
          <div className="flex items-center gap-2.5">
            <PortalLogo />
            <div>
              <div className="text-sm font-bold text-white leading-none">PageMint</div>
              <div className="text-[10px] text-white/40 mt-0.5">Publisher Portal</div>
            </div>
          </div>
        </div>

        {/* Nav */}
        <nav className="flex-1 py-4 overflow-y-auto">
          {NAV_ITEMS.map(({ icon: Icon, label, href, active }) => (
            <Link
              key={label}
              href={href}
              className={`flex items-center gap-3 px-4 py-2.5 text-sm font-medium transition-colors ${
                active
                  ? 'bg-[#16a257] text-white'
                  : 'text-white/60 hover:text-white hover:bg-white/8'
              }`}
            >
              <Icon size={16} />
              {label}
            </Link>
          ))}
        </nav>

        {/* Bottom */}
        <div className="p-4 border-t border-white/10">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 rounded-full bg-[#16a257] flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
              RK
            </div>
            <div className="min-w-0">
              <div className="text-xs font-semibold text-white truncate">Rajesh Kumar</div>
              <div className="text-[10px] text-white/40">Managing Editor</div>
            </div>
          </div>
          <button className="flex items-center gap-2 text-xs text-white/40 hover:text-white/60 transition-colors">
            <LogOut size={13} />
            Sign out
          </button>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 overflow-y-auto">
        {/* Header */}
        <div className="bg-white border-b border-[#e2ded8] px-8 py-4 flex items-center justify-between sticky top-0 z-10">
          <div>
            <h1 className="text-lg font-bold text-[#1a1916]">Dashboard</h1>
            <p className="text-xs text-[#6b6860]">Sunday, 23 August 2026</p>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href={PAGEMINT_APP_URL}
              className="btn-primary text-sm py-2 px-4"
            >
              + New Edition
            </Link>
          </div>
        </div>

        <div className="p-8">
          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {[
              { label: "Today's Editions", value: '4', sub: '2 in progress' },
              { label: 'Articles Waiting', value: '127', sub: 'Across 3 publications' },
              { label: 'Pages Generated', value: '72', sub: 'This week' },
              { label: 'Preflight Warnings', value: '3', sub: 'Requires attention' },
            ].map((stat) => (
              <div key={stat.label} className="bg-white rounded-xl border border-[#e2ded8] p-5">
                <div className="text-2xl font-black text-[#1a1916] leading-none mb-1">{stat.value}</div>
                <div className="text-xs font-semibold text-[#4a4845]">{stat.label}</div>
                <div className="text-xs text-[#6b6860] mt-0.5">{stat.sub}</div>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Editions */}
            <div className="lg:col-span-2 bg-white rounded-xl border border-[#e2ded8] overflow-hidden">
              <div className="px-5 py-4 border-b border-[#e2ded8] flex items-center justify-between">
                <h2 className="text-sm font-bold text-[#1a1916]">Active Editions</h2>
                <Link href="/portal/editions" className="text-xs font-medium text-[#16a257] hover:underline">
                  View all
                </Link>
              </div>
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[#f5f3ef]">
                    <th className="text-left px-5 py-3 text-xs font-bold text-[#6b6860] uppercase tracking-wide">Publication</th>
                    <th className="text-left px-3 py-3 text-xs font-bold text-[#6b6860] uppercase tracking-wide">Date</th>
                    <th className="text-left px-3 py-3 text-xs font-bold text-[#6b6860] uppercase tracking-wide">Pages</th>
                    <th className="text-left px-3 py-3 text-xs font-bold text-[#6b6860] uppercase tracking-wide">Status</th>
                    <th className="px-3 py-3" />
                  </tr>
                </thead>
                <tbody>
                  {DEMO_EDITIONS.map((ed) => (
                    <tr key={ed.pub} className="border-b border-[#f5f3ef] hover:bg-[#fefdf8] transition-colors">
                      <td className="px-5 py-3.5 font-medium text-[#1a1916]">{ed.pub}</td>
                      <td className="px-3 py-3.5 text-[#6b6860] text-xs">{ed.date}</td>
                      <td className="px-3 py-3.5 text-[#6b6860] text-xs">{ed.pages}pp</td>
                      <td className="px-3 py-3.5">
                        <span
                          className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold"
                          style={{
                            backgroundColor: `${ed.color}18`,
                            color: ed.color,
                          }}
                        >
                          {ed.status}
                        </span>
                      </td>
                      <td className="px-3 py-3.5 text-right">
                        <button className="text-xs font-medium text-[#16a257] hover:underline">Edit</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Activity */}
            <div className="bg-white rounded-xl border border-[#e2ded8] overflow-hidden">
              <div className="px-5 py-4 border-b border-[#e2ded8]">
                <h2 className="text-sm font-bold text-[#1a1916]">Recent Activity</h2>
              </div>
              <div className="p-5 space-y-4">
                {ACTIVITY.map((item) => (
                  <div key={item.text} className="flex items-start gap-3">
                    <div className="text-xs text-[#6b6860] font-mono w-10 flex-shrink-0 mt-0.5">{item.time}</div>
                    <p className="text-xs text-[#4a4845] leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

function PortalLogo() {
  return (
    <svg width="28" height="28" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="7" y="9" width="14" height="17" rx="1.5" fill="white" fillOpacity="0.9" />
      <path d="M17 9 L21 13 L17 13 Z" fill="white" fillOpacity="0.5" />
      <path d="M20 20 C22 18 24 19 24 22 C24 25 21 27 20 27 C19 27 16 25 16 22 C16 19 18 18 20 20 Z" fill="#22c36e" />
    </svg>
  )
}
