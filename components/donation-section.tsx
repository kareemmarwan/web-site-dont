"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { useTranslation } from "@/lib/i18n"
import { Heart, Check, DollarSign, ExternalLink } from "lucide-react"

const DONATION_TIERS = [
  { amount: 25, key: "tier1" },
  { amount: 50, key: "tier2" },
  { amount: 100, key: "tier3" },
  { amount: 250, key: "tier4" },
]

export function DonationSection() {
  const { t, locale } = useTranslation()
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null)
  const [customAmount, setCustomAmount] = useState("")

  const handleDonate = (amount: number) => {
    // Replace with actual PayPal link
    // const paypalLink = `https://www.paypal.com/donate?amount=${amount}&currency_code=USD&business=YounisAbuzayed`
    const paypalLink = `https://www.paypal.com/paypalme/YounisAbuzayed`
    window.open(paypalLink, "_blank")
  }

  const handleCustomDonate = () => {
    const amount = Number.parseFloat(customAmount)
    if (amount && amount > 0) {
      handleDonate(amount)
    }
  }

  const donationUses = t("donations.uses")
  const usesArray = Array.isArray(donationUses) ? donationUses : []

  return (
    <section id="donations" className="py-20 px-4">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("donations.title")}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{t("donations.subtitle")}</p>
        </div>

        {/* How donations help */}
        <Card className="mb-12 border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Heart className="h-5 w-5 text-primary" />
              {t("donations.title")}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {usesArray.map((use: string, index: number) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{use}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Donation tiers */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-6 text-center">{t("donations.tiers.title")}</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {DONATION_TIERS.map((tier) => (
              <Card
                key={tier.amount}
                className={`cursor-pointer transition-all hover:shadow-lg ${
                  selectedAmount === tier.amount ? "ring-2 ring-primary border-primary" : "hover:border-primary/50"
                }`}
                onClick={() => setSelectedAmount(tier.amount)}
              >
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">${tier.amount}</div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {t(`donations.tiers.${tier.key}.description`)}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Custom amount */}
          <Card className="max-w-md mx-auto">
            <CardContent className="p-6">
              <div className="space-y-4">
                <label className="text-sm font-medium">{t("donations.tiers.customAmount")}</label>
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="number"
                      placeholder="0.00"
                      value={customAmount}
                      onChange={(e) => setCustomAmount(e.target.value)}
                      className="pl-10"
                      min="1"
                      step="0.01"
                    />
                  </div>
                  <Button
                    onClick={handleCustomDonate}
                    disabled={!customAmount || Number.parseFloat(customAmount) <= 0}
                    className="bg-primary hover:bg-primary/90"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    {locale === "ar" ? "تبرع" : "Donate"}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Selected amount donation button */}
        {selectedAmount && (
          <div className="text-center">
            <Button
              size="lg"
              onClick={() => handleDonate(selectedAmount)}
              className="text-lg px-8 py-6 bg-primary hover:bg-primary/90"
            >
              <Heart className="mr-2 h-5 w-5" />
              {locale === "ar" ? `تبرع بـ $${selectedAmount}` : `Donate $${selectedAmount}`}
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </div>
        )}

        {/* Payment security note */}
        <div className="text-center mt-8">
          <p className="text-sm text-muted-foreground">
            {locale === "ar"
              ? "جميع المدفوعات آمنة ومحمية عبر PayPal"
              : "All payments are secure and protected through PayPal"}
          </p>
        </div>
      </div>
    </section>
  )
}
