"use client"

import { useState, useEffect } from "react"

export type Locale = "en" | "ar"

export const locales: Locale[] = ["en", "ar"]
export const defaultLocale: Locale = "en"

// Import locale data
import enData from "../locales/en.json"
import arData from "../locales/ar.json"

const messages = {
  en: enData,
  ar: arData,
}

export function useTranslation(initialLocale: Locale = defaultLocale) {
  const [locale, setLocale] = useState<Locale>(initialLocale)

  useEffect(() => {
    // Update document direction and lang attribute
    document.documentElement.dir = locale === "ar" ? "rtl" : "ltr"
    document.documentElement.lang = locale
  }, [locale])

  const t = (key: string): string => {
    const keys = key.split(".")
    let value: any = messages[locale]

    for (const k of keys) {
      value = value?.[k]
    }

    return value || key
  }

  const switchLocale = () => {
    setLocale(locale === "en" ? "ar" : "en")
  }

  return { t, locale, switchLocale }
}

export function getStaticTranslation(locale: Locale) {
  return {
    t: (key: string): string => {
      const keys = key.split(".")
      let value: any = messages[locale]

      for (const k of keys) {
        value = value?.[k]
      }

      return value || key
    },
  }
}
