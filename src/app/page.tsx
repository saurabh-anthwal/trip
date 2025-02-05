import Image from "next/image";
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import PopularToursSection from '@/components/sections/PopularToursSection';
import StatsSection from '@/components/sections/StatsSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <PopularToursSection />
      <StatsSection />
      <TestimonialsSection />
    </main>
  );
}
