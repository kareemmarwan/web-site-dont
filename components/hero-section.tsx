"use client"

import { Button } from "@/components/ui/button"
import { useTranslation } from "@/lib/i18n"
import { Heart, ArrowDown } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  const { t, locale } = useTranslation()

  const scrollToStory = () => {
    document.getElementById("story")?.scrollIntoView({ behavior: "smooth" })
  }

  const handleDonate = () => {
    document.getElementById("donations")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
      role="banner"
      aria-label={t("hero.title")}
    >
      {/* Background with keffiyeh pattern overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/5">
        <div className="absolute inset-0 keffiyeh-pattern opacity-30" />
        <Image
          src="/palestinian-family-in-gaza--warm-lighting--hope-an.jpg"
          alt="Palestinian family showing hope and resilience"
          fill
          className="object-cover opacity-20"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container text-center space-y-8 px-4">
        <div className="space-y-4">
          <div className="flex justify-center mb-6">
            <div
              className="p-4 rounded-full bg-primary/10 border-2 border-primary/20"
              role="img"
              aria-label="Heart icon representing love and support"
            >
              <Heart className="h-12 w-12 text-primary" aria-hidden="true" />
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-balance leading-tight">{t("hero.title")}</h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            {t("hero.subtitle")}
          </p>
        </div>

        <div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          role="group"
          aria-label="Main action buttons"
        >
          <Button
            size="lg"
            className="text-lg px-8 py-6 bg-primary hover:bg-primary/90"
 onClick={() => window.open("https://www.paypal.com/paypalme/YounisAbuzayed", "_blank")}            aria-describedby="donate-description"
          >
            <Heart className="mr-2 h-5 w-5" aria-hidden="true" />
            {t("hero.donateButton")}
          </Button>
          <div id="donate-description" className="sr-only">
            Navigate to donation section to help the family
          </div>

          <Button
            variant="outline"
            size="lg"
            className="text-lg px-8 py-6 bg-transparent"
            onClick={scrollToStory}
            aria-describedby="story-description"
          >
            <ArrowDown className="mr-2 h-5 w-5" aria-hidden="true" />
            {t("hero.readStoryButton")}
          </Button>
          <div id="story-description" className="sr-only">
            Navigate to story section to learn more about the family
          </div>
        </div>

      
      </div>
    </section>
  )
}
