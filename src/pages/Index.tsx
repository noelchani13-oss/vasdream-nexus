import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SolutionsSection from '@/components/SolutionsSection';
import ConnectivitySection from '@/components/ConnectivitySection';
import BedbankSection from '@/components/BedbankSection';
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
        {/* Section A: Hero */}
        <HeroSection />
        
        {/* Section B: About */}
        <AboutSection />
        
        {/* Section C: Solutions */}
        <SolutionsSection />
        
        {/* Section D: Bedbank (New Feature) */}
        <BedbankSection />
        
        {/* Section E: Connectivity */}
        <ConnectivitySection />
        
        {/* Section F: Who We Serve (Tabs) */}
        <WhoWeServeSection />
        
        {/* Section G: Global Presence */}
        <GlobalMapSection />
        
        {/* Section H: Testimonials & Partners */}
        <TestimonialsSection />
        
        {/* Section I: Final CTA */}
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
