import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { CheckCircle2, Shield, Zap, Monitor, Server, Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

// Import logos
import travelgatexLogo from '@/assets/logos/travelgatex.png';
import wbetravelLogo from '@/assets/logos/wbetravel.png';
import cyberlogicLogo from '@/assets/logos/cyberlogic.png';
import giataLogo from '@/assets/logos/giata.png';
import travelcompositorLogo from '@/assets/logos/travelcompositor.png';
import bewotecLogo from '@/assets/logos/bewotec.png';
import netstormingLogo from '@/assets/logos/netstorming.png';
import peakworkLogo from '@/assets/logos/peakwork.png';

const integrations = [
  { name: 'TravelGateX', logo: travelgatexLogo },
  { name: 'wbe.travel', logo: wbetravelLogo },
  { name: 'Cyberlogic', logo: cyberlogicLogo },
  { name: 'GIATA', logo: giataLogo },
  { name: 'Travel Compositor', logo: travelcompositorLogo },
  { name: 'Bewotec', logo: bewotecLogo },
  { name: 'Netstorming', logo: netstormingLogo },
  { name: 'Peakwork', logo: peakworkLogo },
];

const ConnectivitySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [hoveredPartner, setHoveredPartner] = useState<string | null>(null);
  const { t } = useLanguage();

  const features = [
    { icon: Zap, text: t('connectivity.xmlJsonApi') },
    { icon: Shield, text: t('connectivity.uptimeSla') },
    { icon: CheckCircle2, text: t('connectivity.sslSecured') },
  ];

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
            <span className="text-gradient">{t('connectivity.title')}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('connectivity.description')}
          </p>
        </motion.div>

        {/* Integration Flow Diagram */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative max-w-6xl mx-auto mb-20"
        >
          <div className="glass rounded-2xl p-8 lg:p-12">
            <div className="grid lg:grid-cols-3 gap-8 items-center">
              {/* Client Systems */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-muted border border-white/10 mb-4">
                  <Monitor size={32} className="text-muted-foreground" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{t('connectivity.yourSystem')}</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {t('connectivity.yourSystemDesc')}
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  {['OTA', 'DMC', 'Tech Platform', 'Bedbank', 'Tour Operator'].map((type) => (
                    <span
                      key={type}
                      className="px-2 py-1 text-xs font-mono bg-neon-purple/10 rounded border border-neon-purple/20 text-neon-purple"
                    >
                      {type}
                    </span>
                  ))}
                </div>
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
                  <Server size={36} className="mx-auto text-accent mb-3" />
                  <div className="text-3xl font-bold text-gradient-brand mb-2">{t('connectivity.vasdream')}</div>
                  <div className="font-mono text-accent text-sm">{t('connectivity.apiGateway')}</div>

                  {/* Features */}
                  <div className="mt-6 space-y-2">
                    {features.map((feature) => (
                      <div
                        key={feature.text}
                        className="flex items-center justify-center gap-2 text-sm text-muted-foreground"
                      >
                        <feature.icon size={14} className="text-accent" />
                        <span>{feature.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Hotel Inventory */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-primary/20 border border-neon-purple/30 mb-4">
                  <Globe size={32} className="text-neon-purple" />
                </div>
                <h3 className="font-semibold text-lg mb-1">{t('connectivity.hotelInventory')}</h3>
                <p className="text-sm text-muted-foreground">{t('connectivity.hotelsWorldwide')}</p>
                <div className="mt-4 flex flex-wrap justify-center gap-2">
                  {['Albania', 'Montenegro', 'Greece'].map((country) => (
                    <span
                      key={country}
                      className="px-2 py-1 text-xs font-mono bg-neon-purple/10 rounded border border-neon-purple/20 text-neon-purple"
                    >
                      {country}
                    </span>
                  ))}
                  <span className="px-2 py-1 text-xs font-mono bg-accent/10 rounded border border-accent/20 text-accent">
                    Balkan
                  </span>
                </div>
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
            {t('connectivity.connectedPlatforms')}
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {integrations.map((integration, index) => (
              <motion.div
                key={integration.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.05 }}
                className="spotlight-card spotlight-border glass rounded-xl p-6 flex items-center justify-center group cursor-pointer min-h-[100px]"
                onMouseEnter={() => setHoveredPartner(integration.name)}
                onMouseLeave={() => setHoveredPartner(null)}
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const x = ((e.clientX - rect.left) / rect.width) * 100;
                  const y = ((e.clientY - rect.top) / rect.height) * 100;
                  e.currentTarget.style.setProperty('--mouse-x', `${x}%`);
                  e.currentTarget.style.setProperty('--mouse-y', `${y}%`);
                }}
              >
                <img
                  src={integration.logo}
                  alt={integration.name}
                  className="max-h-10 max-w-full object-contain opacity-80 group-hover:opacity-100 transition-opacity filter brightness-0 invert"
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
