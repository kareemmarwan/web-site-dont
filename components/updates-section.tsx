"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useTranslation } from "@/lib/i18n"
import { Calendar, ImageIcon, FileText, Heart } from "lucide-react"
import Image from "next/image"

// Sample updates data - in a real app, this would come from a CMS or API
const SAMPLE_UPDATES = [
  {
    id: 1,
    date: "2024-01-15",
    type: "photo",
    title: {
      en: "Medical supplies received",
      ar: "تم استلام الإمدادات الطبية",
    },
    content: {
      en: "Thanks to your generous donations, we were able to purchase essential medical supplies for our family. The children are now receiving proper treatment.",
      ar: "بفضل تبرعاتكم السخية، تمكنا من شراء الإمدادات الطبية الأساسية لعائلتنا. الأطفال يتلقون الآن العلاج المناسب.",
    },
    image: "/placeholder.svg?key=medical-supplies",
  },
  {
    id: 2,
    date: "2024-01-10",
    type: "receipt",
    title: {
      en: "Food purchases - January",
      ar: "مشتريات الطعام - يناير",
    },
    content: {
      en: "Receipt for food supplies purchased with donation funds. We are grateful for every meal we can provide to our children.",
      ar: "إيصال لمستلزمات الطعام المشتراة بأموال التبرعات. نحن ممتنون لكل وجبة يمكننا تقديمها لأطفالنا.",
    },
    image: "/placeholder.svg?key=food-receipt",
  },
  {
    id: 3,
    date: "2024-01-05",
    type: "update",
    title: {
      en: "New temporary shelter",
      ar: "مأوى مؤقت جديد",
    },
    content: {
      en: "We have found a safer temporary shelter for our family. The children can finally sleep peacefully at night. Thank you for making this possible.",
      ar: "لقد وجدنا مأوى مؤقت أكثر أماناً لعائلتنا. يمكن للأطفال أخيراً النوم بسلام في الليل. شكراً لكم لجعل هذا ممكناً.",
    },
    image: "/placeholder.svg?key=new-shelter",
  },
]

export function UpdatesSection() {
  const { t, locale } = useTranslation()

  const getUpdateIcon = (type: string) => {
    switch (type) {
      case "photo":
        return <ImageIcon className="h-4 w-4" />
      case "receipt":
        return <FileText className="h-4 w-4" />
      default:
        return <Heart className="h-4 w-4" />
    }
  }

  const getUpdateBadgeColor = (type: string) => {
    switch (type) {
      case "photo":
        return "bg-blue-100 text-blue-800"
      case "receipt":
        return "bg-green-100 text-green-800"
      default:
        return "bg-primary/10 text-primary"
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat(locale === "ar" ? "ar-PS" : "en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(date)
  }

  return (
    <section className="py-20 px-4">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("updates.title")}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{t("updates.subtitle")}</p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {SAMPLE_UPDATES.map((update) => (
            <Card key={update.id} className="overflow-hidden">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Badge className={getUpdateBadgeColor(update.type)}>
                        {getUpdateIcon(update.type)}
                        <span className="ml-1 capitalize">{update.type}</span>
                      </Badge>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        {formatDate(update.date)}
                      </div>
                    </div>
                    <CardTitle className="text-xl">{locale === "ar" ? update.title.ar : update.title.en}</CardTitle>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="md:col-span-2">
                    <p className="text-muted-foreground leading-relaxed">
                      {locale === "ar" ? update.content.ar : update.content.en}
                    </p>
                  </div>

                  <div className="relative aspect-square rounded-lg overflow-hidden bg-muted">
                    <Image
                      src={update.image || "/placeholder.svg"}
                      alt={locale === "ar" ? update.title.ar : update.title.en}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            {locale === "ar"
              ? "نشارك التحديثات بانتظام لإظهار كيف تساعد تبرعاتكم"
              : "We share regular updates to show how your donations are helping"}
          </p>
          <div className="flex justify-center">
            <Badge variant="outline" className="text-sm px-4 py-2">
              {locale === "ar" ? "آخر تحديث: منذ 5 أيام" : "Last update: 5 days ago"}
            </Badge>
          </div>
        </div>
      </div>
    </section>
  )
}
