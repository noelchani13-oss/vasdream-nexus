import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SolutionsSection from '@/components/SolutionsSection';
import ConnectivitySection from '@/components/ConnectivitySection';
import BedbankSection from '@/components/BedbankSection';
import WhoWeServeSection from '@/components/WhoWeServeSection';
import GlobalMapSection from '@/components/GlobalMapSection';
import BuyersNetworkSection from '@/components/BuyersNetworkSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SolutionsSection />
        <BedbankSection />
        <ConnectivitySection />
        <WhoWeServeSection />
        <GlobalMapSection />
        <BuyersNetworkSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
