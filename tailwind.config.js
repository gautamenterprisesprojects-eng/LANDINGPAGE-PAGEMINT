/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // PageMint Light Blue Design System
        brand: {
          50:  '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
          950: '#082f49',
        },
        slate: {
          50:  '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        },
        coral: {
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
        },
        editorial: {
          ink: '#0f172a',
          rule: '#e2e8f0',
          muted: '#64748b',
          subtle: '#f8fafc',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['var(--font-lora)', 'Georgia', 'serif'],
        display: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'hero-xl': ['clamp(2.5rem, 5.5vw, 4.75rem)', { lineHeight: '1.08', letterSpacing: '-0.025em' }],
        'hero-lg': ['clamp(2rem, 4vw, 3.5rem)', { lineHeight: '1.12', letterSpacing: '-0.02em' }],
        'section': ['clamp(1.75rem, 3vw, 2.75rem)', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
      },
      backgroundImage: {
        'gradient-light-blue': 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 50%, #ffffff 100%)',
        'gradient-blue-glow': 'radial-gradient(circle at 50% 50%, rgba(56, 189, 248, 0.15), transparent 70%)',
        'gradient-dark': 'linear-gradient(180deg, #0f172a 0%, #020617 100%)',
        'gradient-brand': 'linear-gradient(135deg, #0284c7 0%, #0ea5e9 50%, #38bdf8 100%)',
      },
      animation: {
        'float-slow': 'floatSlow 7s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
      },
      keyframes: {
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.85' },
        },
      },
      boxShadow: {
        'card-blue': '0 4px 20px -2px rgba(2, 132, 199, 0.08), 0 2px 6px -1px rgba(15, 23, 42, 0.04)',
        'card-hover': '0 12px 36px -4px rgba(2, 132, 199, 0.16), 0 4px 12px -2px rgba(15, 23, 42, 0.06)',
        'hero-device': '0 25px 60px -15px rgba(2, 132, 199, 0.2), 0 10px 20px -5px rgba(15, 23, 42, 0.08)',
      },
    },
  },
  plugins: [],
}
