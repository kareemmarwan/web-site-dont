"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { useTranslation } from "@/lib/i18n"
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react"

export function FAQSection() {
  const { t, locale } = useTranslation()
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  // Get FAQ questions from translations
  const faqQuestions = t("faq.questions")
  const questions = Array.isArray(faqQuestions) ? faqQuestions : []

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="p-3 rounded-full bg-primary/10">
              <HelpCircle className="h-8 w-8 text-primary" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("faq.title")}</h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {questions.map((faq: any, index: number) => (
            <Card key={index} className="overflow-hidden">
              <Collapsible open={openItems.includes(index)} onOpenChange={() => toggleItem(index)}>
                <CollapsibleTrigger asChild>
                  <CardHeader className="cursor-pointer hover:bg-muted/50 transition-colors">
                    <CardTitle className="flex items-center justify-between text-left">
                      <span className="text-lg font-semibold">{faq.question}</span>
                      {openItems.includes(index) ? (
                        <ChevronUp className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                      )}
                    </CardTitle>
                  </CardHeader>
                </CollapsibleTrigger>

                <CollapsibleContent>
                  <CardContent className="pt-0">
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </CardContent>
                </CollapsibleContent>
              </Collapsible>
            </Card>
          ))}
        </div>

        {/* Additional help */}
        <div className="text-center mt-12">
          <Card className="max-w-md mx-auto border-primary/20">
            <CardContent className="p-6">
              <HelpCircle className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">{locale === "ar" ? "هل لديك سؤال آخر؟" : "Have another question?"}</h3>
              <p className="text-sm text-muted-foreground mb-4">
                {locale === "ar"
                  ? "لا تتردد في التواصل معنا للحصول على مساعدة إضافية"
                  : "Don't hesitate to reach out for additional help"}
              </p>
              <a href="kareemmarwan1995@gmail.com" className="text-primary hover:underline font-medium">
              kareemmarwan1995@gmail.com
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
