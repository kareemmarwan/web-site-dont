"use client"

import { HeroSection } from "@/components/hero-section"
import { StorySection } from "@/components/story-section"
import { DonationSection } from "@/components/donation-section"
import { ProgressSection } from "@/components/progress-section"
import { UpdatesSection } from "@/components/updates-section"
import { FAQSection } from "@/components/faq-section"

export default function HomePage() {
  return (
    <div className="min-h-screen ">
      <HeroSection  />
      <StorySection />
      {/* <DonationSection /> */}
      <ProgressSection />
      {/* <UpdatesSection /> */}
      <FAQSection />
    </div>
  )
}
