import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const offices = [
  { country: 'Albania', city: 'Tirana', flag: '🇦🇱', isHQ: true },
  { country: 'Kosovo', city: 'Pristina', flag: '🇽🇰', isHQ: false },
  { country: 'Bosnia & Herzegovina', city: 'Sarajevo', flag: '🇧🇦', isHQ: false },
  { country: 'Slovenia', city: 'Ljubljana', flag: '🇸🇮', isHQ: false },
  { country: 'Austria', city: 'Vienna', flag: '🇦🇹', isHQ: false },
  { country: 'UAE', city: 'Dubai', flag: '🇦🇪', isHQ: false },
];

const partners = [
  'HotelBeds',
  'Expedia Group',
  'W2M',
  'Yanolja GoGlobal',
  'SmyRooms',
  'Dida Travel',
  'Paximum',
  'Avoris',
  'Restel',
  'Roibos',
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

        {/* Office Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-24"
        >
          {offices.map((office, index) => (
            <motion.div
              key={office.country}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className={`glass rounded-xl p-6 text-center ${
                office.isHQ ? 'border border-neon-purple/30 bg-neon-purple/5' : ''
              }`}
            >
              <span className="text-4xl mb-4 block">{office.flag}</span>
              <h4 className="font-semibold text-foreground text-sm">
                {office.city}
                {office.isHQ && (
                  <span className="ml-1 text-xs text-neon-purple">(HQ)</span>
                )}
              </h4>
              <p className="text-xs text-muted-foreground mt-1">{office.country}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Trusted By Partners */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <p className="text-sm font-medium text-muted-foreground mb-8 uppercase tracking-wider">
            Trusted By Industry Leaders
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-10">
            {partners.map((partner, index) => (
              <motion.div
                key={partner}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.05 }}
                className="text-lg lg:text-xl font-bold text-muted-foreground/30 hover:text-accent transition-colors cursor-pointer"
              >
                {partner}
              </motion.div>
            ))}
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 1.1 }}
              className="text-sm text-muted-foreground italic"
            >
              and many more
            </motion.span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GlobalMapSection;
