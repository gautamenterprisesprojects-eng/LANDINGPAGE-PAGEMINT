'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'

export type Language = 'EN' | 'HI'

interface LanguageContextType {
  lang: Language
  toggleLanguage: () => void
  t: (namespace: string, key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

import enDict from '@/locales/en'
import hiDict from '@/locales/hi'

const dictionaries = {
  EN: enDict,
  HI: hiDict,
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>('EN')

  useEffect(() => {
    // Check localStorage on mount
    const saved = localStorage.getItem('pagemint_lang') as Language
    if (saved === 'EN' || saved === 'HI') {
      setLang(saved)
    }
  }, [])

  const toggleLanguage = () => {
    const nextLang = lang === 'EN' ? 'HI' : 'EN'
    setLang(nextLang)
    localStorage.setItem('pagemint_lang', nextLang)
  }

  // A basic translation function that looks up nested keys
  const t = (namespace: string, key: string): string => {
    const dict = dictionaries[lang] as any
    const enFallback = dictionaries['EN'] as any

    const getNestedValue = (obj: any, path: string) => {
      return path.split('.').reduce((acc, part) => acc && acc[part], obj)
    }

    const translation = dict?.[namespace] ? getNestedValue(dict[namespace], key) : undefined
    
    // Fallback to English if Hindi translation is missing
    if (!translation && lang === 'HI') {
        const fallback = enFallback?.[namespace] ? getNestedValue(enFallback[namespace], key) : undefined
        return fallback || `${namespace}.${key}`
    }
    
    return translation || `${namespace}.${key}`
  }

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
