"use client"

import { useCallback } from "react"
import { useLanguage } from "./language-provider"
import { translations } from "./translations"

export function useTranslation() {
  const { language } = useLanguage()

  const t = useCallback(
    (key: string) => {
      return translations[language][key] || key
    },
    [language],
  )

  return { t }
}
