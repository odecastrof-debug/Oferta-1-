import { Header } from '@/components/landing/header';
import { HeroSection } from '@/components/landing/hero-section';
import { StatsSection } from '@/components/landing/stats-section';
import { ChallengeSection } from '@/components/landing/challenge-section';
import { WaysToUnderstandSection } from '@/components/landing/ways-to-understand-section';
import { ModulesSection } from '@/components/landing/modules-section';
import { TestimonialSection } from '@/components/landing/testimonial-section';
import { WhatYouGetSection } from '@/components/landing/what-you-get-section';
import { BonusesSection } from '@/components/landing/bonuses-section';
import { PricingSection } from '@/components/landing/pricing-section';
import { GuaranteeSection } from '@/components/landing/guarantee-section';
import { FaqSection } from '@/components/landing/faq-section';
import { FinalCtaSection } from '@/components/landing/final-cta-section';
import { Footer } from '@/components/landing/footer';
import { CtaButtonSection } from '@/components/landing/cta-button-section';
import { VisualValueSection } from '@/components/landing/visual-value-section';
import { GallerySection } from '@/components/landing/gallery-section';
import { SocialProofToast } from '@/components/SocialProofToast';
import { StickyCtaBar } from '@/components/landing/StickyCtaBar';

export default function Home() {
  return (
    <div className="bg-background text-foreground">
      <Header />
      <HeroSection />
      <StatsSection />
      <CtaButtonSection />
      <VisualValueSection />
      <GallerySection />
      <WaysToUnderstandSection />
      <ChallengeSection />
      <ModulesSection />
      <TestimonialSection />
      <WhatYouGetSection />
      <BonusesSection />
      <PricingSection />
      <GuaranteeSection />
      <FaqSection />
      <FinalCtaSection />
      <Footer />
      <SocialProofToast />
      <StickyCtaBar />
    </div>
  );
}
