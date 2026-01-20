import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Building2, Handshake, MapPin, Users, Calendar, Award } from 'lucide-react';

const highlights = [
  {
    icon: Calendar,
    title: 'Since 2015',
    description: 'Operating as a dedicated B2B wholesaler',
  },
  {
    icon: Award,
    title: '30+ Years Experience',
    description: 'Backed by destination management expertise',
  },
  {
    icon: Building2,
    title: '6,500+ Direct Contracts',
    description: 'Albania, Montenegro, Greece & Balkan Peninsula',
  },
  {
    icon: Handshake,
    title: 'Known & Respected',
    description: 'Trusted by hotels, respected in-market',
  },
  {
    icon: Users,
    title: 'Local Teams',
    description: 'Dedicated contracting teams on the ground',
  },
  {
    icon: MapPin,
    title: 'Long-term Relationships',
    description: 'Decades of supplier partnerships',
  },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/10 to-background" />
      <div className="absolute inset-0 grid-pattern opacity-30" />

      {/* Floating orb */}
      <motion.div
        animate={{ x: [-30, 30, -30], y: [-20, 20, -20] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 right-0 w-80 h-80 bg-neon-purple/10 rounded-full blur-3xl"
      />

      <div ref={ref} className="relative container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-accent/30 mb-6">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-xs font-mono text-accent">OUR STORY</span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-gradient">Albania's Leading</span>
              <br />
              <span className="text-foreground">B2B Travel Wholesaler</span>
            </h2>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                VasDream has been a cornerstone of the Western Balkans travel industry since 2015, 
                building on over <span className="text-accent font-semibold">30 years of destination management experience</span>.
              </p>
              <p>
                With <span className="text-accent font-semibold">6,500+ direct hotel contracts</span> across 
                Albania, Montenegro, Greece, and the wider Balkan Peninsula, we've established ourselves as 
                the region's most trusted B2B wholesaler.
              </p>
              <p>
                Our strength lies in our local presence — dedicated contracting teams, long-standing 
                supplier relationships, and unmatched regional knowledge that gives our partners 
                access to inventory and rates unavailable elsewhere.
              </p>
            </div>

            <div className="mt-8 flex items-center gap-4 font-mono text-sm">
              <span className="px-3 py-1 rounded-md bg-accent/10 text-accent border border-accent/20">
                6,500+ Hotels
              </span>
              <span className="px-3 py-1 rounded-md bg-neon-purple/10 text-neon-purple border border-neon-purple/20">
                Balkans Expert
              </span>
            </div>
          </motion.div>

          {/* Right: Highlights Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="spotlight-card spotlight-border glass rounded-xl p-5 group cursor-pointer"
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const x = ((e.clientX - rect.left) / rect.width) * 100;
                  const y = ((e.clientY - rect.top) / rect.height) * 100;
                  e.currentTarget.style.setProperty('--mouse-x', `${x}%`);
                  e.currentTarget.style.setProperty('--mouse-y', `${y}%`);
                }}
              >
                <item.icon 
                  size={24} 
                  className="text-accent mb-3 group-hover:scale-110 transition-transform duration-300" 
                />
                <h3 className="font-semibold text-foreground text-sm mb-1">{item.title}</h3>
                <p className="text-xs text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
