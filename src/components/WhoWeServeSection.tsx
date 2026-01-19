import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Briefcase, Globe2, Building, Code } from 'lucide-react';

const tabs = [
  {
    id: 'agencies',
    icon: Briefcase,
    label: 'Travel Agencies',
    title: 'Competitive rates and instant confirmation',
    description: 'Access exclusive hotel rates and real-time availability for your clients. Our B2B platform provides travel agencies with the tools to compete with larger OTAs while maintaining higher margins.',
    features: ['Instant booking confirmation', 'Competitive B2B rates', 'Dedicated account manager', 'White-label solutions'],
  },
  {
    id: 'otas',
    icon: Globe2,
    label: 'OTAs & Wholesalers',
    title: 'High-speed XML booking for scale',
    description: 'Built for high-volume operations, our API handles thousands of requests per second with sub-200ms response times. Scale your business without infrastructure concerns.',
    features: ['High-throughput API', 'Sub-200ms response time', 'Bulk rate updates', 'Automated reconciliation'],
  },
  {
    id: 'corporate',
    icon: Building,
    label: 'Corporate',
    title: 'Manage business travel with precision',
    description: 'Streamline corporate travel management with negotiated rates, policy compliance tools, and detailed reporting for finance and HR teams.',
    features: ['Corporate rate programs', 'Policy enforcement', 'Expense management', 'Travel analytics dashboard'],
  },
  {
    id: 'tech',
    icon: Code,
    label: 'Tech Integrators',
    title: 'Clean documentation and sandbox environment',
    description: 'Developer-first approach with comprehensive API documentation, SDKs for popular languages, and a full sandbox environment for testing.',
    features: ['RESTful & SOAP APIs', 'Multi-language SDKs', 'Sandbox testing', '24/7 technical support'],
  },
];

const WhoWeServeSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeTab, setActiveTab] = useState('agencies');

  const activeContent = tabs.find((tab) => tab.id === activeTab);

  return (
    <section id="solutions" className="relative py-32 overflow-hidden">
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