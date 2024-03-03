"use client";
import HeroSection from '@/sections/HeroSection';
import BenefitsSection from '@/sections/Benefits';
import StaffAugmentationSection from '@/sections/StaffAugmentation';
import WorkSection from '@/sections/Work';
import WhenShouldSection from '@/sections/WhenShould';
import QuoteSection from '@/sections/Quote';
import Layouts from '@/layouts';

export default function Home() {
  return (
    <main> 
      <Layouts>
        <HeroSection />
        <StaffAugmentationSection />
        <WorkSection />
        <BenefitsSection />
        <WhenShouldSection />
        <QuoteSection />
      </Layouts>
    </main>
  )
}