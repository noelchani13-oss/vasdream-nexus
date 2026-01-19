import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Database, Lock, Sparkles, TrendingUp } from 'lucide-react';

const features = [
  {
    icon: Database,
    title: 'Direct Contracts',
    description: 'Static & Dynamic inventory with real-time availability and pricing.',
  },
  {
    icon: Lock,
    title: 'Exclusive Rates',
    description: 'Access preferential rates unavailable on public channels.',
  },
  {
    icon: TrendingUp,
    title: 'Own Your Inventory',
    description: 'Build your hotel portfolio with our contracting platform.',
  },
  {
    icon: Sparkles,
    title: 'Smart Caching',
    description: 'Lightning-fast responses with intelligent rate caching.',
  },
];

const BedbankSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="bedbank" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="absolute inset-0 grid-pattern opacity-50" />

      {/* Floating orb */}
      <motion.div
        animate={{ y: [-20, 20, -20] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-20 right-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl"
      />

      <div ref={ref} className="relative container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-neon-purple/30 mb-6">
              <span className="w-2 h-2 rounded-full bg-neon-purple animate-pulse" />
              <span className="text-xs font-mono text-neon-purple">NEW FEATURE</span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-gradient-brand">VasDream Bedbank</span>
            </h2>

            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              The engine powering your travel business. Direct contracting platform 
              that puts you in control of your hotel inventory.
            </p>

            <div className="flex items-center gap-4 font-mono text-sm">
              <span className="px-3 py-1 rounded-md bg-accent/10 text-accent border border-accent/20">
                99.9% Uptime
              </span>
              <span className="px-3 py-1 rounded-md bg-neon-purple/10 text-neon-purple border border-neon-purple/20">
                SSL Secured
              </span>
            </div>
          </motion.div>

          {/* Right: Feature Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="spotlight-card spotlight-border glass rounded-xl p-6 group cursor-pointer"
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const x = ((e.clientX - rect.left) / rect.width) * 100;
                  const y = ((e.clientY - rect.top) / rect.height) * 100;
                  e.currentTarget.style.setProperty('--mouse-x', `${x}%`);
                  e.currentTarget.style.setProperty('--mouse-y', `${y}%`);
                }}
              >
                <feature.icon 
                  size={28} 
                  className="text-accent mb-4 group-hover:scale-110 transition-transform duration-300" 
                />
                <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BedbankSection;