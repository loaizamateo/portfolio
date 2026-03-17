'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import type { Lang } from './i18n'

interface LangCtx { lang: Lang; toggle: () => void }
const Ctx = createContext<LangCtx>({ lang: 'es', toggle: () => {} })

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('es')

  useEffect(() => {
    const saved = localStorage.getItem('lang') as Lang | null
    if (saved) setLang(saved)
  }, [])

  const toggle = () => {
    setLang(l => {
      const next = l === 'es' ? 'en' : 'es'
      localStorage.setItem('lang', next)
      return next
    })
  }

  return <Ctx.Provider value={{ lang, toggle }}>{children}</Ctx.Provider>
}

export const useLang = () => useContext(Ctx)
