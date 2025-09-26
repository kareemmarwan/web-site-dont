"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { useTranslation } from "@/lib/i18n"
import { Target, Users, DollarSign } from "lucide-react"

// These would be updated dynamically in a real application
const CAMPAIGN_DATA = {
  raised: 15,
  goal: 50000,
  supporters: 1,
}

export function ProgressSection() {
  const { t, locale } = useTranslation()
  const progressPercentage = (CAMPAIGN_DATA.raised / CAMPAIGN_DATA.goal) * 100

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat(locale === "ar" ? "ar-PS" : "en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
    }).format(amount)
  }

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("progress.title")}</h2>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main progress card */}
          <Card className="mb-8 border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-primary" />
                  {t("progress.title")}
                </span>
                <span className="text-2xl font-bold text-primary">{progressPercentage.toFixed(1)}%</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <Progress value={progressPercentage} className="h-4" />

              <div className="flex justify-between items-center text-lg">
                <div>
                  <span className="text-muted-foreground">{t("progress.raised")}: </span>
                  <span className="font-bold text-primary">{formatCurrency(CAMPAIGN_DATA.raised)}</span>
                </div>
                <div>
                  <span className="text-muted-foreground">{t("progress.goal")}: </span>
                  <span className="font-bold">{formatCurrency(CAMPAIGN_DATA.goal)}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Stats grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="text-center">
              <CardContent className="p-6">
                <DollarSign className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-primary">{formatCurrency(CAMPAIGN_DATA.raised)}</div>
                <div className="text-sm text-muted-foreground">{t("progress.raised")}</div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <Target className="h-8 w-8 text-secondary mx-auto mb-2" />
                <div className="text-2xl font-bold text-secondary">{formatCurrency(CAMPAIGN_DATA.goal)}</div>
                <div className="text-sm text-muted-foreground">{t("progress.goal")}</div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-primary">{CAMPAIGN_DATA.supporters.toLocaleString()}</div>
                <div className="text-sm text-muted-foreground">{t("progress.supporters")}</div>
              </CardContent>
            </Card>
          </div>

          {/* Remaining amount */}
          <div className="text-center mt-8">
            <p className="text-lg text-muted-foreground">
              {locale === "ar"
                ? `نحتاج ${formatCurrency(CAMPAIGN_DATA.goal - CAMPAIGN_DATA.raised)} أخرى للوصول إلى هدفنا`
                : `We need ${formatCurrency(CAMPAIGN_DATA.goal - CAMPAIGN_DATA.raised)} more to reach our goal`}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
