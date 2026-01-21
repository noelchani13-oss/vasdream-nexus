import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ArrowRight, CheckCircle2, Shield, Zap, Monitor, Server, Globe } from 'lucide-react';
const integrations = [{
  name: 'TravelGateX',
  description: 'Leading connectivity hub'
}, {
  name: 'WBE',
  description: 'Booking engine integration'
}, {
  name: 'Netstorming',
  description: 'Channel management'
}, {
  name: 'Bewotec',
  description: 'Tour operator systems'
}, {
  name: 'HotelBeds',
  description: 'Global distribution'
}, {
  name: 'Webhotelier',
  description: 'Hotel management'
}, {
  name: 'Hotelston',
  description: 'Wholesale platform'
}, {
  name: 'GIATA',
  description: 'Hotel content database'
}, {
  name: 'Expedia Group',
  description: 'OTA connectivity'
}, {
  name: 'Emerging Group',
  description: 'Distribution network'
}];
const features = [{
  icon: Zap,
  text: 'XML & JSON API'
}, {
  icon: Shield,
  text: '99.9% Uptime SLA'
}, {
  icon: CheckCircle2,
  text: 'SSL Secured'
}];
const ConnectivitySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-100px'
  });
  const [hoveredPartner, setHoveredPartner] = useState<string | null>(null);
  return <section id="connectivity" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 mesh-gradient opacity-30" />

      <div ref={ref} className="relative container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={isInView ? {
        opacity: 1,
        y: 0
      } : {}} transition={{
        duration: 0.6
      }} className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-gradient">Seamless Integration Ecosystem</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Connect your systems to the world's leading travel technology platforms
          </p>
        </motion.div>

        {/* Integration Flow Diagram */}
        <motion.div initial={{
        opacity: 0,
        scale: 0.95
      }} animate={isInView ? {
        opacity: 1,
        scale: 1
      } : {}} transition={{
        duration: 0.8,
        delay: 0.2
      }} className="relative max-w-6xl mx-auto mb-20">
          <div className="glass rounded-2xl p-8 lg:p-12">
            <div className="grid lg:grid-cols-3 gap-8 items-center">
              {/* Client Systems */}
              <motion.div initial={{
              opacity: 0,
              x: -30
            }} animate={isInView ? {
              opacity: 1,
              x: 0
            } : {}} transition={{
              duration: 0.5,
              delay: 0.4
            }} className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-muted border border-white/10 mb-4">
                  <Monitor size={32} className="text-muted-foreground" />
                </div>
                <h3 className="font-semibold text-lg mb-1">Your System</h3>
                <p className="text-sm text-muted-foreground">OTAs, Agencies, Platforms</p>
                <div className="mt-4 flex flex-wrap justify-center gap-2">
                  {['OTA', 'DMC', 'Agency'].map(type => <span key={type} className="px-2 py-1 text-xs font-mono bg-white/5 rounded border border-white/10">
                      {type}
                    </span>)}
                </div>
              </motion.div>

              {/* VasDream API */}
              <motion.div initial={{
              opacity: 0,
              y: 30
            }} animate={isInView ? {
              opacity: 1,
              y: 0
            } : {}} transition={{
              duration: 0.5,
              delay: 0.5
            }} className="relative">
                {/* Connection lines */}
                <div className="hidden lg:block absolute top-1/2 -left-8 w-8 h-0.5 bg-gradient-to-r from-transparent to-accent" />
                <div className="hidden lg:block absolute top-1/2 -right-8 w-8 h-0.5 bg-gradient-to-r from-accent to-transparent" />
                
                {/* Animated pulse on lines */}
                
                
                
                <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-accent/20 to-neon-purple/20 border border-accent/30 glow-cyan">
                  <Server size={36} className="mx-auto text-accent mb-3" />
                  <div className="text-3xl font-bold text-gradient-brand mb-2">VasDream</div>
                  <div className="font-mono text-accent text-sm">API Gateway</div>
                  
                  {/* Features */}
                  <div className="mt-6 space-y-2">
                    {features.map(feature => <div key={feature.text} className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                        <feature.icon size={14} className="text-accent" />
                        <span>{feature.text}</span>
                      </div>)}
                  </div>
                </div>
              </motion.div>

              {/* Hotel Inventory */}
              <motion.div initial={{
              opacity: 0,
              x: 30
            }} animate={isInView ? {
              opacity: 1,
              x: 0
            } : {}} transition={{
              duration: 0.5,
              delay: 0.6
            }} className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-primary/20 border border-neon-purple/30 mb-4">
                  <Globe size={32} className="text-neon-purple" />
                </div>
                <h3 className="font-semibold text-lg mb-1">Hotel Inventory</h3>
                <p className="text-sm text-muted-foreground">6,500+ Direct Contracts</p>
                <div className="mt-4 flex flex-wrap justify-center gap-2">
                  {['Albania', 'Montenegro', 'Greece'].map(country => <span key={country} className="px-2 py-1 text-xs font-mono bg-neon-purple/10 rounded border border-neon-purple/20 text-neon-purple">
                      {country}
                    </span>)}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Integration Partners */}
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={isInView ? {
        opacity: 1,
        y: 0
      } : {}} transition={{
        duration: 0.6,
        delay: 0.4
      }}>
          <h3 className="text-center text-lg font-semibold text-muted-foreground mb-8">
            Connected Platforms
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {integrations.map((integration, index) => <motion.div key={integration.name} initial={{
            opacity: 0,
            y: 20
          }} animate={isInView ? {
            opacity: 1,
            y: 0
          } : {}} transition={{
            duration: 0.5,
            delay: 0.5 + index * 0.05
          }} className="spotlight-card spotlight-border glass rounded-xl p-4 text-center group cursor-pointer relative" onMouseEnter={() => setHoveredPartner(integration.name)} onMouseLeave={() => setHoveredPartner(null)} onMouseMove={e => {
            const rect = e.currentTarget.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width * 100;
            const y = (e.clientY - rect.top) / rect.height * 100;
            e.currentTarget.style.setProperty('--mouse-x', `${x}%`);
            e.currentTarget.style.setProperty('--mouse-y', `${y}%`);
          }}>
                <h4 className="font-semibold text-foreground text-sm group-hover:text-accent transition-colors">
                  {integration.name}
                </h4>
                
                {/* Tooltip */}
                {hoveredPartner === integration.name && <motion.div initial={{
              opacity: 0,
              y: 5
            }} animate={{
              opacity: 1,
              y: 0
            }} className="absolute -top-10 left-1/2 -translate-x-1/2 z-10">
                    <div className="glass rounded-lg px-3 py-1.5 whitespace-nowrap text-xs text-muted-foreground">
                      {integration.description}
                    </div>
                  </motion.div>}
                
                <ArrowRight size={14} className="mx-auto mt-2 text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>)}
          </div>
        </motion.div>
      </div>
    </section>;
};
export default ConnectivitySection;