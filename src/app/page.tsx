import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import StatsSection from '@/components/sections/StatsSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import ServicesSection from "@/components/sections/ServicesSection";
import ExploreSection from "@/components/sections/ExploreSection";
import MonthlyPlacesSection from "@/components/sections/MonthlyPlacesSection";
import BannerSection from "@/components/sections/BannerSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ExploreSection />
      <StatsSection />
      <MonthlyPlacesSection />
      <TestimonialsSection />
      <BannerSection />
    </main>
  );
}
