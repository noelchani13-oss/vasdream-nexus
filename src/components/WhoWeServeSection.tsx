import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Briefcase, Globe2, Building, Code } from 'lucide-react';

const tabs = [
  {
    id: 'agencies',
    icon: Briefcase,
    label: 'Travel Agencies',
    title: 'Full margin control with dedicated support',
    description: 'Access competitive B2B rates with transparent pricing that lets you maintain healthy margins. Every agency partner gets a dedicated account manager who understands your business.',
    features: ['Margin control tools', 'Dedicated account manager', 'White-label booking solutions', 'Competitive B2B rates'],
  },
  {
    id: 'otas',
    icon: Globe2,
    label: 'OTAs & Wholesalers',
    title: 'Volume access with seamless API connection',
    description: 'Built for high-volume operations with robust API infrastructure. Scale your Balkan inventory without infrastructure concerns — our platform handles thousands of requests effortlessly.',
    features: ['High-volume API access', 'Bulk rate management', 'Real-time availability', 'Automated booking flow'],
  },
  {
    id: 'corporate',
    icon: Building,
    label: 'Corporate',
    title: 'Clean dashboard with special corporate rates',
    description: 'Streamline business travel with our corporate booking platform. Access negotiated rates, manage policies, and get detailed reporting for finance teams.',
    features: ['Corporate rate programs', 'Clean booking dashboard', 'Policy management', 'Travel expense reporting'],
  },
  {
    id: 'tech',
    icon: Code,
    label: 'Tech Integrators',
    title: 'API-ready with scalable architecture',
    description: 'Developer-first approach with comprehensive documentation and a scalable design that grows with your platform. XML and JSON support for maximum flexibility.',
    features: ['RESTful & SOAP APIs', 'Comprehensive documentation', 'Scalable architecture', '24/7 technical support'],
  },
];

const WhoWeServeSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeTab, setActiveTab] = useState('agencies');

  const activeContent = tabs.find((tab) => tab.id === activeTab);

  return (
    <section id="who-we-serve" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />

      <div ref={ref} className="relative container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-gradient">Who We Serve</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tailored solutions for every travel business model
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-accent/20 to-neon-purple/20 border border-accent/50 text-accent glow-cyan'
                  : 'glass text-muted-foreground hover:text-foreground hover:border-white/20'
              }`}
            >
              <tab.icon size={18} />
              <span className="hidden sm:inline">{tab.label}</span>
            </button>
          ))}
        </motion.div>

        {/* Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="glass rounded-2xl p-8 lg:p-12 max-w-4xl mx-auto"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left: Text */}
            <div>
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-accent/10 text-accent mb-6">
                {activeContent && <activeContent.icon size={28} />}
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-foreground">
                {activeContent?.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {activeContent?.description}
              </p>
            </div>

            {/* Right: Features */}
            <div className="space-y-4">
              {activeContent?.features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-center gap-3 p-4 rounded-lg bg-white/5 border border-white/5"
                >
                  <span className="w-2 h-2 rounded-full bg-accent" />
                  <span className="text-foreground">{feature}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhoWeServeSection;
