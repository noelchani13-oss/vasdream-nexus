import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const offices = [
  { country: 'Albania', city: 'Tirana', flag: '🇦🇱', isHQ: true },
  { country: 'Kosovo', city: 'Pristina', flag: '🇽🇰', isHQ: false },
  { country: 'Bosnia & Herzegovina', city: 'Sarajevo', flag: '🇧🇦', isHQ: false },
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
  const { t } = useLanguage();

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
            <span className="text-gradient">{t('global.title')}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('global.description')}
          </p>
        </motion.div>

        {/* Office Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-24"
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
                  <span className="ml-1 text-xs text-neon-purple">({t('global.headquarters')})</span>
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
          <p className="text-sm font-medium text-accent mb-8 uppercase tracking-wider">
            {t('global.trustedBy')}
          </p>
          <div className="space-y-6">
            {/* First row - 5 partners */}
            <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-10">
              {partners.slice(0, 5).map((partner, index) => (
                <motion.div
                  key={partner}
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.05 }}
                  className="text-lg lg:text-xl font-bold text-foreground/70 hover:text-accent hover:drop-shadow-[0_0_8px_hsl(var(--accent))] transition-all duration-300 cursor-pointer"
                >
                  {partner}
                </motion.div>
              ))}
            </div>
            {/* Second row - 5 partners */}
            <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-10">
              {partners.slice(5, 10).map((partner, index) => (
                <motion.div
                  key={partner}
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.85 + index * 0.05 }}
                  className="text-lg lg:text-xl font-bold text-foreground/70 hover:text-neon-purple hover:drop-shadow-[0_0_8px_hsl(var(--neon-purple))] transition-all duration-300 cursor-pointer"
                >
                  {partner}
                </motion.div>
              ))}
            </div>
            {/* And many more */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 1.1 }}
              className="text-sm text-muted-foreground italic pt-2"
            >
              {t('global.andMore')}
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GlobalMapSection;
