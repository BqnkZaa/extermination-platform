import HeroSection from '@/components/home/HeroSection';
import TrustSignals from '@/components/home/TrustSignals';

import ServicesGrid from '@/components/home/ServicesGrid';
import ProcessSection from '@/components/home/ProcessSection';
import ServiceAreaMap from '@/components/home/ServiceAreaMap';
import Testimonials from '@/components/home/Testimonials';
import CTASection from '@/components/home/CTASection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustSignals />
      <ServicesGrid />

      <ProcessSection />
      <ServiceAreaMap />
      <Testimonials />
      <CTASection />
    </>
  );
}
