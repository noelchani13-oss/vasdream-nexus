import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin } from 'lucide-react';

const offices = [
  { country: 'Albania', city: 'Tirana', position: { top: '38%', left: '52%' } },
  { country: 'Kosovo', city: 'Pristina', position: { top: '36%', left: '53%' } },
  { country: 'Bosnia', city: 'Sarajevo', position: { top: '35%', left: '50%' } },
  { country: 'Slovenia', city: 'Ljubljana', position: { top: '32%', left: '48%' } },
  { country: 'Austria', city: 'Vienna', position: { top: '30%', left: '49%' } },
  { country: 'Dubai', city: 'Dubai', position: { top: '48%', left: '62%' } },
];

const GlobalMapSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="global" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 mesh-gradient opacity-20" />

      <div ref={ref} className="relative container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-gradient">Local Presence, Global Reach</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Strategic offices across Europe and the Middle East
          </p>
        </motion.div>

        {/* Map - Desktop */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden lg:block max-w-5xl mx-auto aspect-[2/1] glass rounded-2xl p-8 overflow-hidden"
        >
          {/* Stylized world map SVG */}
          <svg
            viewBox="0 0 1000 500"
            className="w-full h-full opacity-30"
            fill="none"
          >
            {/* Europe outline simplified */}
            <path
              d="M400 100 L500 80 L580 100 L600 150 L580 200 L520 250 L480 280 L420 260 L380 220 L370 160 Z"
              stroke="hsl(180, 100%, 50%)"
              strokeWidth="1"
              fill="hsl(180, 100%, 50%)"
              fillOpacity="0.05"
            />
            {/* Africa */}
            <path
              d="M420 280 L500 270 L560 300 L580 380 L520 450 L440 430 L400 350 Z"
              stroke="hsl(180, 100%, 50%)"
              strokeWidth="1"
              fill="hsl(180, 100%, 50%)"
              fillOpacity="0.03"
            />
            {/* Middle East */}
            <path
              d="M580 200 L680 180 L720 230 L700 300 L620 280 L580 250 Z"
              stroke="hsl(180, 100%, 50%)"
              strokeWidth="1"
              fill="hsl(180, 100%, 50%)"
              fillOpacity="0.04"
            />
            {/* Asia */}
            <path
              d="M680 100 L850 80 L920 150 L880 250 L780 280 L700 230 L680 160 Z"
              stroke="hsl(180, 100%, 50%)"
              strokeWidth="1"
              fill="hsl(180, 100%, 50%)"
              fillOpacity="0.03"
            />
            {/* Americas */}
            <path
              d="M100 80 L200 100 L250 180 L220 300 L150 350 L80 280 L60 150 Z"
              stroke="hsl(180, 100%, 50%)"
              strokeWidth="1"
              fill="hsl(180, 100%, 50%)"
              fillOpacity="0.03"
            />
            {/* Grid lines */}
            {[0, 1, 2, 3, 4].map((i) => (
              <line
                key={`h-${i}`}
                x1="0"
                y1={100 + i * 80}
                x2="1000"
                y2={100 + i * 80}
                stroke="hsl(180, 100%, 50%)"
                strokeWidth="0.5"
                strokeOpacity="0.1"
              />
            ))}
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
              <line
                key={`v-${i}`}
                x1={100 + i * 90}
                y1="0"
                x2={100 + i * 90}
                y2="500"
                stroke="hsl(180, 100%, 50%)"
                strokeWidth="0.5"
                strokeOpacity="0.1"
              />
            ))}
          </svg>

          {/* Office markers */}
          {offices.map((office, index) => (
            <motion.div
              key={office.country}
              initial={{ scale: 0, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              style={{ top: office.position.top, left: office.position.left }}
              className="absolute -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
            >
              {/* Ping animation */}
              <span className="absolute inset-0 w-6 h-6 rounded-full bg-accent/30 animate-ping" />
              
              {/* Marker */}
              <div className="relative w-6 h-6 rounded-full bg-accent flex items-center justify-center glow-cyan">
                <MapPin size={14} className="text-accent-foreground" />
              </div>

              {/* Tooltip */}
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="glass rounded-lg px-3 py-2 whitespace-nowrap">
                  <p className="font-semibold text-foreground text-sm">{office.country}</p>
                  <p className="text-xs text-muted-foreground">{office.city}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Office List - Mobile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="lg:hidden grid grid-cols-2 sm:grid-cols-3 gap-4"
        >
          {offices.map((office, index) => (
            <motion.div
              key={office.country}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="glass rounded-xl p-4 text-center"
            >
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-3">
                <MapPin size={18} className="text-accent" />
              </div>
              <h4 className="font-semibold text-foreground">{office.country}</h4>
              <p className="text-sm text-muted-foreground">{office.city}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default GlobalMapSection;