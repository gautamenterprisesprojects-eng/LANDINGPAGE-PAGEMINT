'use client'
import { useLanguage } from '@/contexts/LanguageContext'

export default function TrustSection() {
  const { t } = useLanguage()

  const features = [
    { name: t('trust', 'features.ap') || 'Automated Pagination', abbr: 'AP', color: '#0284c7' },
    { name: t('trust', 'features.cmyk') || 'CMYK Print Ready', abbr: 'CMYK', color: '#0f172a' },
    { name: t('trust', 'features.ud') || 'Unicode Devanagari', abbr: 'UD', color: '#0369a1' },
    { name: t('trust', 'features.ms') || 'Multi-candidate Scoring', abbr: 'MS', color: '#334155' },
    { name: t('trust', 'features.rni') || 'RNI Ready Workflow', abbr: 'RNI', color: '#075985' },
    { name: t('trust', 'features.ad') || 'Smart Ad Placement', abbr: 'AD', color: '#0284c7' },
    { name: t('trust', 'features.ep') || 'Auto-Generated ePaper', abbr: 'EP', color: '#1e293b' },
    { name: t('trust', 'features.bf') || 'Custom Brand Fonts', abbr: 'BF', color: '#0369a1' },
  ]

  // Duplicate the array to create a seamless infinite scroll effect
  const marqueeItems = [...features, ...features]

  return (
    <section className="py-12 border-b border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-950 overflow-hidden relative">
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
          width: max-content;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
      
      <div className="container-max mb-8">
        <p className="text-center text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500">
          {t('trust', 'heading')}
        </p>
      </div>
      
      {/* Infinite Marquee Container */}
      <div className="relative w-full flex overflow-hidden group">
        {/* Left and Right Fade Gradients */}
        <div className="absolute top-0 left-0 h-full w-12 sm:w-24 bg-gradient-to-r from-white dark:from-slate-950 to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 h-full w-12 sm:w-24 bg-gradient-to-l from-white dark:from-slate-950 to-transparent z-10 pointer-events-none" />
        
        <div className="animate-scroll flex items-center gap-10 sm:gap-16 px-4">
          {marqueeItems.map((feature, index) => (
            <div key={`${feature.name}-${index}`} className="flex items-center gap-2.5 opacity-60 hover:opacity-100 transition-opacity cursor-default whitespace-nowrap">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-[10px] font-black shadow-sm shrink-0"
                style={{ backgroundColor: feature.color }}
              >
                {feature.abbr}
              </div>
              <span
                className="font-bold text-sm tracking-tight text-slate-800 dark:text-slate-200 font-serif"
              >
                {feature.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
