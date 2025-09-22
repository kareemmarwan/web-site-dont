"use client"

import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"
import { useTranslation } from "@/lib/i18n"

export function LanguageSwitcher() {
  const { t, locale, switchLocale } = useTranslation()

  return (
    <Button variant="outline" size="sm" onClick={switchLocale} className="flex items-center gap-2 bg-transparent">
      <Globe className="h-4 w-4" />
      {t("language.switch")}
    </Button>
  )
}
