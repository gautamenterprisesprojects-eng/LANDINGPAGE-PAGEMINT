'use client'

import Link from 'next/link'
import { ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react'
import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'

// ---------------------------------------------------------------------------
// NewspaperBuilder — CSS-keyframe driven, no white-screen flash on loop
// ---------------------------------------------------------------------------
function NewspaperBuilder() {
  return (
    <div className="absolute inset-0 overflow-hidden" style={{ background: '#f8f5ee' }}>
      {/* Inject looping keyframe styles */}
      <style>{`
        @keyframes np-fadein  { from { opacity:0; transform:translateY(6px) } to { opacity:1; transform:translateY(0) } }
        @keyframes np-slidein { from { opacity:0; transform:scaleX(0) } to { opacity:1; transform:scaleX(1) } }
        @keyframes np-imgpop  { from { opacity:0; transform:scale(1.06) } to { opacity:1; transform:scale(1) } }
        @keyframes np-adpop   { from { opacity:0; transform:scale(0.92) } to { opacity:1; transform:scale(1) } }
        @keyframes np-laser   { 0%{top:0%;opacity:0} 5%{opacity:1} 95%{opacity:1} 100%{top:100%;opacity:0} }
        @keyframes np-flash   { 0%{opacity:0} 50%{opacity:1} 100%{opacity:0} }
        @keyframes np-cycle   {
          0%,2%   { opacity:0 }
          5%,78%  { opacity:1 }
          82%,100%{ opacity:0 }
        }
        @keyframes np-line-cycle {
          0%,5%   { transform:scaleX(0); opacity:0 }
          22%,78% { transform:scaleX(1); opacity:1 }
          84%,100%{ transform:scaleX(0); opacity:0 }
        }
        @keyframes np-img-cycle {
          0%,18%  { opacity:0; transform:scale(1.06) }
          30%,78% { opacity:1; transform:scale(1) }
          84%,100%{ opacity:0 }
        }
        @keyframes np-ad-cycle {
          0%,10%  { opacity:0; transform:scale(0.92) }
          20%,78% { opacity:1; transform:scale(1) }
          84%,100%{ opacity:0 }
        }
        @keyframes np-laser-cycle {
          0%,2%   { top:0%; opacity:0 }
          3%      { opacity:1 }
          14%     { top:100%; opacity:0 }
          100%    { top:100%; opacity:0 }
        }
        @keyframes np-flash-cycle {
          0%,68%  { opacity:0 }
          72%     { opacity:0.7 }
          76%,100%{ opacity:0 }
        }
        @keyframes np-paper-cycle {
          0%,76%  { background-color:#ffffff; transform:rotateY(0deg) rotateX(0deg) }
          85%,100%{ background-color:#f4f1ea; transform:rotateY(-4deg) rotateX(2deg) }
        }
        .np-delay-0  { animation-delay: calc(var(--np-dur, 9s) * 0.04) }
        .np-delay-1  { animation-delay: calc(var(--np-dur, 9s) * 0.08) }
        .np-delay-2  { animation-delay: calc(var(--np-dur, 9s) * 0.12) }
        .np-delay-3  { animation-delay: calc(var(--np-dur, 9s) * 0.16) }
        .np-delay-4  { animation-delay: calc(var(--np-dur, 9s) * 0.18) }
        .np-delay-5  { animation-delay: calc(var(--np-dur, 9s) * 0.20) }
      `}</style>

      {/* ── Newspaper Page ─────────────────────────────── */}
      <div
        className="relative w-full h-full overflow-hidden shadow-2xl"
        style={{
          background: '#ffffff',
          animation: 'np-paper-cycle 9s ease-in-out infinite',
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Laser sweep */}
        <div style={{
          position: 'absolute', left: 0, right: 0, height: '2px',
          background: 'rgba(56,189,248,0.9)',
          boxShadow: '0 0 12px 3px rgba(56,189,248,0.6)',
          zIndex: 50,
          animation: 'np-laser-cycle 9s linear infinite',
          top: '0%',
        }} />

        {/* Preflight flash */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'rgba(52,211,153,0.3)',
          mixBlendMode: 'overlay',
          pointerEvents: 'none',
          zIndex: 40,
          animation: 'np-flash-cycle 9s ease-out infinite',
          opacity: 0,
        }} />

        {/* ── MASTHEAD ──────────────────────────────────── */}
        <div style={{
          padding: '10px 14px 6px',
          borderBottom: '3px solid #0f172a',
          animation: 'np-cycle 9s ease-out infinite',
          opacity: 0,
        }}>
          <div style={{ textAlign:'center', fontFamily:'Georgia,serif', lineHeight:1 }}>
            <div style={{ fontSize: '6px', letterSpacing:'0.18em', color:'#64748b', fontFamily:'monospace', marginBottom: '2px', textTransform:'uppercase' }}>
              DAILY GLOBAL EDITION &bull; 16 PAGES &bull; 300 DPI &bull; ESTABLISHED 1974
            </div>
            <div style={{ fontSize: '26px', fontWeight: 900, color: '#0f172a', letterSpacing: '-1px', lineHeight: 1, fontFamily: 'Georgia,serif' }}>
              THE DAILY CHRONICLE
            </div>
            <div style={{ display:'flex', justifyContent:'space-between', marginTop:'3px', fontSize:'6px', color:'#94a3b8', fontFamily:'monospace' }}>
              <span>VOL. CXLII &bull; No. 49,208</span>
              <span>MONDAY, AUGUST 23, 2026</span>
              <span>PRICE: ₹5.00</span>
            </div>
          </div>
        </div>

        {/* Thin rule below date line */}
        <div style={{ height:'1px', background:'#cbd5e1', margin:'0 14px' }} />

        {/* ── SECTION LABEL BAR ─────────────────────────── */}
        <div style={{
          padding: '2px 14px',
          background: '#0f172a',
          display:'flex', gap:'16px',
          animation: 'np-cycle 9s ease-out infinite',
          opacity: 0,
        }}>
          {['POLITICS','MARKETS','TECHNOLOGY','SPORTS','WORLD'].map(s => (
            <span key={s} style={{ fontSize:'5px', color:'#e2e8f0', fontFamily:'monospace', letterSpacing:'0.12em', textTransform:'uppercase' }}>{s}</span>
          ))}
        </div>

        {/* ── MAIN CONTENT GRID ─────────────────────────── */}
        <div style={{ display:'flex', gap:0, padding:'8px 14px 8px', flex:1, borderTop:'2px solid #0f172a', borderBottom:'2px solid #0f172a', margin:'0', height:'calc(100% - 80px)' }}>

          {/* LEFT COLUMN */}
          <div style={{ width:'29%', paddingRight:'10px', borderRight:'1px solid #cbd5e1', display:'flex', flexDirection:'column', gap:'6px' }}>
            {/* Headline */}
            <div style={{
              fontFamily:'Georgia,serif', fontWeight:900, fontSize:'9px', lineHeight:1.15,
              color:'#0f172a', letterSpacing:'-0.01em',
              animation:'np-cycle 9s ease-out infinite', opacity:0,
            }}>
              MARKET RECOVERY ACCELERATES IN Q3, BEATS ALL FORECASTS
            </div>
            <div style={{ fontSize:'5px', color:'#94a3b8', fontFamily:'monospace', animation:'np-cycle 9s ease-out infinite', opacity:0 }}>
              By Priya Nair &bull; Business Editor
            </div>
            {/* Body text lines */}
            {[100,92,100,85,100,91,78,100,88,100,74].map((pct, i) => (
              <div key={i} style={{
                height:'2px', background:'#94a3b8', width:`${pct}%`, transformOrigin:'left',
                animation:`np-line-cycle 9s ease-out infinite`,
                animationDelay: `${i * 0.04}s`,
                transform:'scaleX(0)', opacity:0,
              }} />
            ))}
            {/* Thin rule + second story */}
            <div style={{ height:'1px', background:'#e2e8f0', marginTop:'4px' }} />
            <div style={{ fontFamily:'Georgia,serif', fontWeight:800, fontSize:'7px', lineHeight:1.2, color:'#1e293b', animation:'np-cycle 9s ease-out infinite', opacity:0, animationDelay:'0.1s' }}>
              LOCAL ELECTION RESULTS STUN ANALYSTS
            </div>
            {[100,90,100,82].map((pct, i) => (
              <div key={i} style={{ height:'2px', background:'#94a3b8', width:`${pct}%`, transformOrigin:'left', animation:`np-line-cycle 9s ease-out infinite`, animationDelay:`${0.2 + i * 0.03}s`, transform:'scaleX(0)', opacity:0 }} />
            ))}
          </div>

          {/* CENTER COLUMN */}
          <div style={{ width:'44%', padding:'0 10px', borderRight:'1px solid #cbd5e1', display:'flex', flexDirection:'column', gap:'5px' }}>
            {/* MAIN HEADLINE spanning center */}
            <div style={{
              fontFamily:'Georgia,serif', fontWeight:900, fontSize:'13px', lineHeight:1.1,
              color:'#0f172a', textAlign:'center', letterSpacing:'-0.02em', borderBottom:'1px solid #0f172a', paddingBottom:'4px',
              animation:'np-cycle 9s ease-out infinite', opacity:0,
            }}>
              TECH GIANTS RALLY AMIDST SWEEPING POLICY REFORMS
            </div>
            <div style={{ fontSize:'5px', color:'#64748b', fontFamily:'monospace', textAlign:'center', animation:'np-cycle 9s ease-out infinite', opacity:0 }}>
              By Rahul Sharma &bull; Technology Correspondent &bull; NEW DELHI
            </div>

            {/* Main Image */}
            <div style={{
              width:'100%', aspectRatio:'3/2', overflow:'hidden',
              border:'1px solid #e2e8f0', position:'relative',
              animation:'np-img-cycle 9s ease-out infinite', opacity:0,
            }}>
              {/* Gradient placeholder that looks like a grayscale photo */}
              <div style={{
                position:'absolute', inset:0,
                background:'linear-gradient(135deg,#94a3b8 0%,#64748b 40%,#475569 70%,#334155 100%)',
              }} />
              <div style={{ position:'absolute', inset:0, display:'flex', alignItems:'center', justifyContent:'center' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15L16 10L5 21"/></svg>
              </div>
              {/* Caption bar */}
              <div style={{ position:'absolute', bottom:0, left:0, right:0, background:'rgba(0,0,0,0.5)', padding:'2px 4px' }}>
                <span style={{ fontSize:'4px', color:'#e2e8f0', fontFamily:'monospace' }}>Above: CEO summit at World Economic Forum, Davos — AP Photo</span>
              </div>
            </div>

            {/* Two-column body text */}
            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'8px', flex:1 }}>
              {[[100,91,100,85,100,90,78],[92,100,80,100,68,100,86]].map((col, ci) => (
                <div key={ci} style={{ display:'flex', flexDirection:'column', gap:'3px' }}>
                  {col.map((pct, i) => (
                    <div key={i} style={{
                      height:'2px', background:'#94a3b8', width:`${pct}%`, transformOrigin:'left',
                      animation:`np-line-cycle 9s ease-out infinite`,
                      animationDelay:`${0.25 + ci * 0.1 + i * 0.03}s`,
                      transform:'scaleX(0)', opacity:0,
                    }} />
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN — AD + BRIEF NEWS */}
          <div style={{ width:'27%', paddingLeft:'10px', display:'flex', flexDirection:'column', gap:'6px' }}>
            {/* AD BLOCK */}
            <div style={{
              border:'1.5px solid #fca5a5', background:'#fff1f2',
              display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center',
              padding:'8px 6px', gap:'3px',
              animation:'np-ad-cycle 9s ease-out infinite', opacity:0,
              flexShrink:0, minHeight:'38%',
            }}>
              <div style={{ fontSize:'4.5px', fontWeight:700, color:'#ef4444', letterSpacing:'0.15em', textTransform:'uppercase', fontFamily:'monospace' }}>Advertisement</div>
              <div style={{ height:'1px', background:'#fca5a5', width:'70%' }} />
              <div style={{ fontSize:'8px', fontWeight:900, color:'#b91c1c', fontFamily:'Georgia,serif', textAlign:'center', lineHeight:1.2 }}>
                GREAT<br/>SAVINGS
              </div>
              <div style={{ fontSize:'5px', color:'#ef4444', fontFamily:'monospace', textAlign:'center' }}>Limited Time Offer</div>
              <div style={{ height:'1px', background:'#fca5a5', width:'50%' }} />
              <div style={{ fontSize:'4px', color:'#94a3b8', fontFamily:'monospace', textAlign:'center' }}>www.advertise.com</div>
            </div>

            {/* BRIEF NEWS */}
            <div style={{ flex:1, borderTop:'1px solid #0f172a', paddingTop:'4px', display:'flex', flexDirection:'column', gap:'4px' }}>
              <div style={{ fontSize:'6px', fontWeight:800, color:'#0f172a', fontFamily:'Georgia,serif', letterSpacing:'0.05em', textTransform:'uppercase', animation:'np-cycle 9s ease-out infinite', opacity:0, animationDelay:'0.15s' }}>
                BRIEF NEWS
              </div>
              {/* Three mini stories */}
              {[
                ['WEATHER', 'Monsoon to recede by Sept 10'],
                ['SPORTS', 'India wins T20 series 3–1'],
                ['FINANCE', 'RBI holds rates steady at 6.5%'],
              ].map(([label, story], si) => (
                <div key={si} style={{ borderTop:'1px solid #e2e8f0', paddingTop:'3px', animation:'np-cycle 9s ease-out infinite', opacity:0, animationDelay:`${0.2 + si * 0.05}s` }}>
                  <div style={{ fontSize:'4.5px', fontWeight:700, color:'#0369a1', fontFamily:'monospace', letterSpacing:'0.1em', textTransform:'uppercase', marginBottom:'2px' }}>{label}</div>
                  <div style={{ fontSize:'5.5px', fontWeight:600, color:'#1e293b', fontFamily:'Georgia,serif', lineHeight:1.25 }}>{story}</div>
                  {[100,88,76].map((pct,i) => (
                    <div key={i} style={{ height:'1.5px', background:'#cbd5e1', width:`${pct}%`, marginTop:'2px', transformOrigin:'left', animation:`np-line-cycle 9s ease-out infinite`, animationDelay:`${0.3 + si * 0.08 + i * 0.03}s`, transform:'scaleX(0)', opacity:0 }} />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── FOOTER RULE ───────────────────────────────── */}
        <div style={{ padding:'2px 14px', background:'#0f172a', display:'flex', justifyContent:'space-between', position:'absolute', bottom:0, left:0, right:0 }}>
          <span style={{ fontSize:'4.5px', color:'#94a3b8', fontFamily:'monospace' }}>© 2026 The Daily Chronicle. All rights reserved.</span>
          <span style={{ fontSize:'4.5px', color:'#38bdf8', fontFamily:'monospace' }}>POWERED BY PAGEMINT</span>
        </div>
      </div>
    </div>
  )
}


// --- Image-based Monitor Mockup Wrapper ---
function MonitorMockup({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative w-full max-w-[900px] mx-auto z-20 overflow-hidden rounded-2xl shadow-2xl border border-slate-200">
      {/* The Background Image from Digital Editions Section */}
      <img
        src="/images/pagemint-reader.jpg"
        alt="Monitor Frame"
        className="w-full h-auto object-cover block select-none pointer-events-none rounded-2xl"
      />

      {/*
        ╔══════════════════════════════════════════════════════╗
        ║  LOCKED — DO NOT CHANGE THESE VALUES                ║
        ║  Calibrated pixel-perfect to pagemint-reader.jpg    ║
        ║  (1376×768px) to overlay the newspaper reading area ║
        ║  inside the monitor, preserving sidebar & chrome.   ║
        ║  top:    12.6%  (below browser toolbar)             ║
        ║  left:   21.1%  (after green sidebar)               ║
        ║  right:  14%    (inside right monitor bezel)        ║
        ║  bottom: 19.2%  (above stand + desk)                ║
        ╚══════════════════════════════════════════════════════╝
      */}
      <div
        className="absolute z-10 overflow-hidden"
        style={{
          top:    '12.6%',
          left:   '21.1%',
          right:  '14%',
          bottom: '19.2%',
        }}
      >
        <div className="w-full h-full relative overflow-hidden" style={{ background: '#ffffff' }}>
          {children}
        </div>
      </div>
    </div>
  )
}

export default function HeroSection() {
  const { t } = useLanguage()

  return (
    <section className="relative overflow-hidden pt-32 lg:pt-40 pb-10 lg:pb-14 surface-blue-hero border-b border-slate-100 dark:border-slate-800">
      {/* Ambient background glows */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 right-10 w-[500px] h-[500px] rounded-full bg-sky-300/40 blur-3xl -z-10 pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-0 left-1/4 w-[400px] h-[300px] rounded-full bg-blue-200/50 blur-3xl -z-10 pointer-events-none"
      />

      <div className="container-max">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Column — Clean Typography Matching Digital Editions Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 z-10"
          >
            {/* Tag / Eyebrow */}
            <motion.p
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5, type: "spring", stiffness: 100 }}
              className="section-label-blue mb-4"
            >
              {t('hero', 'eyebrow')}
            </motion.p>

            {/* Main Sans-Serif Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
              className="text-5xl sm:text-6xl lg:text-[4.5rem] font-bold text-slate-900 dark:text-white tracking-tight leading-[1.05] mb-6"
            >
              {t('hero', 'headline_part_1')}<br />
              <span className="text-sky-600">{t('hero', 'headline_part_2')}</span>
            </motion.h1>

            {/* Clean Sub-headline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7, ease: "easeOut" }}
              className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 mb-8 leading-relaxed max-w-xl"
            >
              {t('hero', 'tagline')}
            </motion.p>

            {/* Key Value Points */}
            <motion.div
              initial="hidden" animate="visible"
              variants={{ visible: { transition: { delayChildren: 0.6, staggerChildren: 0.15 } } }}
              className="space-y-3 mb-8"
            >
              {[
                t('hero', 'bullet_1'),
                t('hero', 'bullet_2'),
                t('hero', 'bullet_3'),
              ].map((item) => (
                <motion.div
                  variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}
                  transition={{ type: "spring", stiffness: 100 }}
                  key={item}
                  className="flex items-center gap-2.5 text-sm font-bold text-slate-700 dark:text-slate-300"
                >
                  <motion.div whileHover={{ scale: 1.2, rotate: 15 }}>
                    <CheckCircle2 size={16} className="text-sky-600 shrink-0 cursor-pointer" />
                  </motion.div>
                  <span>{item}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="flex flex-wrap items-center gap-4"
            >
              <Link href="/request-demo" className="btn-coral text-base px-8 py-3.5 font-bold shadow-xl shadow-red-500/30 hover:scale-105 transition-transform">
                {t('hero', 'book_package')}
                <ArrowRight size={17} />
              </Link>
              <Link href="/auto-newspaper" className="btn-secondary text-base px-7 py-3.5 font-bold hover:scale-105 transition-transform hover:border-sky-300 hover:text-sky-700">
                {t('hero', 'how_it_works')}
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Column — Monitor + Credential below */}
          <div className="lg:col-span-6 relative flex flex-col items-center z-20 gap-6">
            <MonitorMockup>
              <NewspaperBuilder />
            </MonitorMockup>

            {/* GeM Credential strip — bigger, decent, symmetric below monitor */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.7 }}
              className="flex items-center gap-4 bg-white dark:bg-slate-950 border border-slate-200 rounded-2xl px-5 py-4 shadow-md w-full max-w-[520px]"
            >
              {/* Sky accent bar */}
              <div className="w-1 self-stretch rounded-full bg-sky-500 shrink-0" />
              <div className="flex items-center gap-2 shrink-0">
                <div className="bg-sky-50 border border-sky-200 rounded-lg p-2">
                  <ShieldCheck size={20} className="text-sky-600" />
                </div>
                <div className="flex flex-col leading-tight">
                  <span className="text-xs font-black text-sky-700 uppercase tracking-widest">GeM Compliant</span>
                  <span className="text-[10px] text-sky-500 font-mono">Govt. e-Marketplace</span>
                </div>
              </div>
              <div className="h-8 w-px bg-slate-200 shrink-0" />
              <div className="flex flex-col leading-tight min-w-0">
                <span className="text-sm font-bold text-slate-900 dark:text-white truncate">PageMint · Gautam Enterprises</span>
                <span className="text-[10px] text-slate-400 font-mono tracking-wide">MSME • IREPS • GSTIN: 23BFJPT7384H1ZX</span>
              </div>
            </motion.div>
          </div>

        </div>



      </div>
    </section>
  )
}

