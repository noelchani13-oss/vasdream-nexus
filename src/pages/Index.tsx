import { lazy, Suspense } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';

// Lazy load below-fold sections
const AboutSection = lazy(() => import('@/components/AboutSection'));
const SolutionsSection = lazy(() => import('@/components/SolutionsSection'));
const BedbankSection = lazy(() => import('@/components/BedbankSection'));
const ConnectivitySection = lazy(() => import('@/components/ConnectivitySection'));
const WhoWeServeSection = lazy(() => import('@/components/WhoWeServeSection'));
const GlobalMapSection = lazy(() => import('@/components/GlobalMapSection'));
const BuyersNetworkSection = lazy(() => import('@/components/BuyersNetworkSection'));
const TestimonialsSection = lazy(() => import('@/components/TestimonialsSection'));
const CTASection = lazy(() => import('@/components/CTASection'));
const Footer = lazy(() => import('@/components/Footer'));

const SectionFallback = () => (
  <div className="min-h-[200px]" />
);

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <Suspense fallback={<SectionFallback />}>
          <AboutSection />
          <SolutionsSection />
          <BedbankSection />
          <ConnectivitySection />
          <WhoWeServeSection />
          <GlobalMapSection />
          <BuyersNetworkSection />
          <TestimonialsSection />
          <CTASection />
        </Suspense>
      </main>
      <Suspense fallback={<SectionFallback />}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;
