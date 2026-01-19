import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import BedbankSection from '@/components/BedbankSection';
import StatsSection from '@/components/StatsSection';
import ConnectivitySection from '@/components/ConnectivitySection';
import WhoWeServeSection from '@/components/WhoWeServeSection';
import GlobalMapSection from '@/components/GlobalMapSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <BedbankSection />
        <StatsSection />
        <ConnectivitySection />
        <WhoWeServeSection />
        <GlobalMapSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;