"use client"

import { useTranslation } from "@/lib/i18n"
import { Heart, Mail, Facebook, Twitter, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  const { t, locale } = useTranslation()

  return (
    <footer className="bg-muted/50 border-t px-4">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Heart className="h-6 w-6 text-primary" />
              <span className="font-bold text-lg">
                {locale === "ar" ? "صندوق طوارئ عائلة غزة" : "Gaza Family Emergency Fund"}
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">{t("contact.privacy")}</p>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold">{t("contact.title")}</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <Mail className="h-4 w-4" />
                <span>{t("contact.email")}</span>
              </div>
              <p className="text-sm text-muted-foreground">{t("contact.social")}</p>
              <div className="flex gap-2">
                <a href="https://www.facebook.com/kareem.marwan.abu.muaileq?mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="sm">
                    <Facebook className="h-4 w-4" />
                  </Button>
                </a>
                <a href="https://x.com/kareem_muaileq?s=21" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="sm">
                    <Twitter className="h-4 w-4" />
                  </Button>
                </a>
                <a href="https://www.instagram.com/kareem_marwan95" target="_blank" rel="noopener noreferrer">

                  <Button variant="outline" size="sm">
                    <Instagram className="h-4 w-4" />
                  </Button>
                </a>
               
              </div>
            </div>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="font-semibold">Legal</h3>
            <div className="space-y-2">
              <Button variant="link" className="p-0 h-auto text-sm justify-start">
                {t("footer.privacy")}
              </Button>
              <Button variant="link" className="p-0 h-auto text-sm justify-start">
                {t("footer.terms")}
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">{t("footer.copyright")}</p>
        </div>
      </div>
    </footer>
  )
}
