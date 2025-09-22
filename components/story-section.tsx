// "use client"

// import { useState } from "react"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent } from "@/components/ui/card"
// import { useTranslation } from "@/lib/i18n"
// import { ChevronDown, ChevronUp } from "lucide-react"
// import Image from "next/image"

// export function StorySection() {
//   const { t, locale } = useTranslation()
//   // console.log(locale,'---1>')
//   const [showFullStory, setShowFullStory] = useState(false)

//   return (
//     <section id="story" className="py-20 px-4 bg-muted/30" role="region" aria-labelledby="story-heading">
//       <div className="container">
//         <div className="text-center mb-12">
//           <h2 id="story-heading" className="text-3xl md:text-4xl font-bold mb-4">
//             {t("story.title")}
//           </h2>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//           {/* Story Content */}
//           <div className="space-y-6">
//             <Card className="border-l-4 border-l-primary">
//               <CardContent className="p-6">
//                 <div className="text-lg leading-relaxed text-muted-foreground" role="article" aria-label="Family story">
//                   {showFullStory ? (
//                     <div>
//                       {t("story.fullStory")
//                         .split("\n\n")
//                         .map((paragraph: string, index: number) => (
//                           <p key={index} className="mb-4 last:mb-0">
//                             {paragraph}
//                           </p>
//                         ))}
//                     </div>
//                   ) : (
//                     <p>{t("story.shortStory")}</p>
//                   )}
//                 </div>

//                 <Button
//                   variant="link"
//                   onClick={() => setShowFullStory(!showFullStory)}
//                   className="mt-4 p-0 h-auto text-primary"
//                   aria-expanded={showFullStory}
//                   aria-controls="story-content"
//                 >
//                   {showFullStory ? (
//                     <>
//                       <ChevronUp className="mr-2 h-4 w-4" aria-hidden="true" />
//                       {locale === "ar" ? "اقرأ أقل" : "Read Less"}
//                     </>
//                   ) : (
//                     <>
//                       <ChevronDown className="mr-2 h-4 w-4" aria-hidden="true" />
//                       {locale === "ar" ? "اقرأ المزيد" : "Read More"}
//                     </>
//                   )}
//                 </Button>
//               </CardContent>
//             </Card>

//             {/* Key Facts */}
//             <div className="grid grid-cols-2 gap-4" role="group" aria-label="Family statistics">
//               <Card className="text-center p-4">
//                 <div className="text-2xl font-bold text-primary" aria-label="Six family members">
//                   6
//                 </div>
//                 <div className="text-sm text-muted-foreground">
//                   {locale === "ar" ? "أفراد العائلة" : "Family Members"}
//                 </div>
//               </Card>
//               <Card className="text-center p-4">
//                 <div className="text-2xl font-bold text-secondary" aria-label="Four children">
//                   4
//                 </div>
//                 <div className="text-sm text-muted-foreground">{locale === "ar" ? "أطفال" : "Children"}</div>
//               </Card>
//             </div>
//           </div>

//           {/* Image */}
//           <div className="relative">
//             <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
//               <Image
//                 src="/palestinian-family-portrait--children-and-parents-.jpg"
//                 alt="Portrait of the Palestinian family - parents with their four children showing resilience and hope"
//                 fill
//                 className="object-cover"
//               />
//             </div>

//             {/* Decorative elements */}
//             <div
//               className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full keffiyeh-pattern"
//               aria-hidden="true"
//             />
//             <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-secondary/10 rounded-full" aria-hidden="true" />
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// 🧠 تأكد أنك في ملف يستخدم `use client`
"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useTranslation } from "@/lib/i18n"
import { ChevronDown, ChevronUp } from "lucide-react"
import Image from "next/image"

// Swiper Imports
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper/modules"
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export function StorySection() {
  const { t, locale } = useTranslation()
  const [showFullStory, setShowFullStory] = useState(false)

  const images = [
    {
      src: "2-1.jpeg",
      alt: "Palestinian family with children"
    },
    {
     src: "1-1.jpeg",
      alt: "Palestinian family with children"
    },
     {
      src: "1-2.jpeg",
      alt: "Palestinian family with children"
    },
     {
     src: "1-3.jpeg",
      alt: "Palestinian family with children"
    }
    ,
     {
     src: "1-4.jpeg",
      alt: "Palestinian family with children"
    }
    ,
     {
     src: "1-5.jpeg",
      alt: "Palestinian family with children"
    }
    ,
     {
     src: "1-6.jpeg",
      alt: "Palestinian family with children"
    }
    ,
     {
     src: "1-7.jpeg",
      alt: "Palestinian family with children"
    }
    
  
    ,
     {
     src: "1-10.jpeg",
      alt: "Palestinian family with children"
    }
    ,
     {
     src: "1-11.jpeg",
      alt: "Palestinian family with children"
    }
  
    ,
     {
     src: "1-13.jpeg",
      alt: "Palestinian family with children"
    }
    ,
     {
     src: "1-14.jpeg",
      alt: "Palestinian family with children"
    }
    ,
     {
     src: "1-17.jpeg",
      alt: "Palestinian family with children"
    }
    ,
   
      {
     src: "2-7.jpeg",
      alt: "Palestinian family with children"
    }
    ,
  
  
    
    // يمكنك إضافة المزيد
  ]

  return (
    <section id="story" className="py-20 px-4 bg-muted/30" role="region" aria-labelledby="story-heading">
      <div className="container">
        <div className="text-center mb-12">
          <h2 id="story-heading" className="text-3xl md:text-4xl font-bold mb-4">
            {t("story.title")}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Story Content */}
          <div className="space-y-6">
            <Card className="border-l-4 border-l-primary">
              <CardContent className="p-6">
                <div className="text-lg leading-relaxed text-muted-foreground" role="article" aria-label="Family story">
                  {showFullStory ? (
                    <div>
                      {t("story.fullStory")
                        .split("\n\n")
                        .map((paragraph: string, index: number) => (
                          <p key={index} className="mb-4 last:mb-0">
                            {paragraph}
                          </p>
                        ))}
                    </div>
                  ) : (
                    <p>{t("story.shortStory")}</p>
                  )}
                </div>

                <Button
                  variant="link"
                  onClick={() => setShowFullStory(!showFullStory)}
                  className="mt-4 p-0 h-auto text-primary"
                  aria-expanded={showFullStory}
                  aria-controls="story-content"
                >
                  {showFullStory ? (
                    <>
                      <ChevronUp className="mr-2 h-4 w-4" aria-hidden="true" />
                      {locale === "ar" ? "اقرأ أقل" : "Read Less"}
                    </>
                  ) : (
                    <>
                      <ChevronDown className="mr-2 h-4 w-4" aria-hidden="true" />
                      {locale === "ar" ? "اقرأ المزيد" : "Read More"}
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>

            {/* Key Facts */}
            <div className="grid grid-cols-2 gap-4" role="group" aria-label="Family statistics">
              <Card className="text-center p-4">
                <div className="text-2xl font-bold text-primary">11</div>
                <div className="text-sm text-muted-foreground">
                  {locale === "ar" ? "أفراد العائلة" : "Family Members"}
                </div>
              </Card>
              <Card className="text-center p-4">
                <div className="text-2xl font-bold text-secondary">13</div>
                <div className="text-sm text-muted-foreground">
                  {locale === "ar" ? "أطفال" : "Children"}
                </div>
              </Card>
            </div>
          </div>

          {/* 🖼️ Swiper Carousel */}
          <div className="relative">
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={20}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              color="green"
              className="rounded-lg overflow-hidden"
            >
              {images.map((image, index) => (
                <SwiperSlide key={index}>
                  <div className="relative w-full h-[250px] md:h-[300px]">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover rounded-lg"
                      sizes="(max-width: 768px) 100vw, 400px"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full keffiyeh-pattern" aria-hidden="true" />
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-secondary/10 rounded-full" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  )
}
