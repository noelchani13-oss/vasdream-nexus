import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, CheckCircle2, Shield, Zap } from 'lucide-react';

const integrations = [
  { name: 'TravelGateX', description: 'Leading connectivity hub' },
  { name: 'WBE', description: 'Booking engine integration' },
  { name: 'Netstorming', description: 'Channel management' },
  { name: 'Bewotec', description: 'Tour operator systems' },
];

const features = [
  { icon: Zap, text: 'XML & JSON API' },
  { icon: Shield, text: '99.9% Uptime SLA' },
  { icon: CheckCircle2, text: 'Secure SSL/TLS' },
];

const ConnectivitySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="connectivity" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 mesh-gradient opacity-30" />

      <div ref={ref} className="relative container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-gradient">Seamless Integration Ecosystem</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Connect your systems to the world's leading travel technology platforms
          </p>
        </motion.div>

        {/* Integration Flow Diagram */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative max-w-5xl mx-auto mb-20"
        >
          <div className="glass rounded-2xl p-8 lg:p-12">
            <div className="grid lg:grid-cols-3 gap-8 items-center">
              {/* Your System */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-muted border border-white/10 mb-4">
                  <span className="text-2xl font-mono font-bold text-muted-foreground">{ }</span>
                </div>
                <h3 className="font-semibold text-lg mb-1">Your System</h3>
                <p className="text-sm text-muted-foreground">OTA, Agency, or Platform</p>
              </motion.div>

              {/* VasDream API */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="relative"
              >
                {/* Connection lines */}
                <div className="hidden lg:block absolute top-1/2 -left-8 w-8 h-0.5 bg-gradient-to-r from-transparent to-accent" />
                <div className="hidden lg:block absolute top-1/2 -right-8 w-8 h-0.5 bg-gradient-to-r from-accent to-transparent" />
                
                <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-accent/20 to-neon-purple/20 border border-accent/30 glow-cyan">
                  <div className="text-3xl font-bold text-gradient-brand mb-2">VasDream</div>
                  <div className="font-mono text-accent text-sm">API Gateway</div>
                  
                  {/* Features */}
                  <div className="mt-6 space-y-2">
                    {features.map((feature) => (
                      <div key={feature.text} className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                        <feature.icon size={14} className="text-accent" />
                        <span>{feature.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Global Inventory */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-primary/20 border border-neon-purple/30 mb-4">
                  <span className="text-2xl">🌐</span>
                </div>
                <h3 className="font-semibold text-lg mb-1">Global Inventory</h3>
                <p className="text-sm text-muted-foreground">1M+ Hotels Worldwide</p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Integration Partners */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-center text-lg font-semibold text-muted-foreground mb-8">
            Connected Platforms
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {integrations.map((integration, index) => (
              <motion.div
                key={integration.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="spotlight-card spotlight-border glass rounded-xl p-6 text-center group cursor-pointer"
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const x = ((e.clientX - rect.left) / rect.width) * 100;
                  const y = ((e.clientY - rect.top) / rect.height) * 100;
                  e.currentTarget.style.setProperty('--mouse-x', `${x}%`);
                  e.currentTarget.style.setProperty('--mouse-y', `${y}%`);
                }}
              >
                <h4 className="font-semibold text-foreground mb-1 group-hover:text-accent transition-colors">
                  {integration.name}
                </h4>
                <p className="text-sm text-muted-foreground">{integration.description}</p>
                <ArrowRight 
                  size={16} 
                  className="mx-auto mt-3 text-accent opacity-0 group-hover:opacity-100 transition-opacity" 
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ConnectivitySection;