import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Briefcase, Globe2, Building, Code } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const WhoWeServeSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeTab, setActiveTab] = useState('agencies');
  const { t } = useLanguage();

  const tabs = [
    {
      id: 'agencies',
      icon: Briefcase,
      label: t('serve.agencies'),
      title: t('serve.agencies.title'),
      description: t('serve.agencies.desc'),
      features: [t('serve.agencies.feature1'), t('serve.agencies.feature2'), t('serve.agencies.feature3'), t('serve.agencies.feature4')],
    },
    {
      id: 'otas',
      icon: Globe2,
      label: t('serve.otas'),
      title: t('serve.otas.title'),
      description: t('serve.otas.desc'),
      features: [t('serve.otas.feature1'), t('serve.otas.feature2'), t('serve.otas.feature3'), t('serve.otas.feature4')],
    },
    {
      id: 'corporate',
      icon: Building,
      label: t('serve.corporate'),
      title: t('serve.corporate.title'),
      description: t('serve.corporate.desc'),
      features: [t('serve.corporate.feature1'), t('serve.corporate.feature2'), t('serve.corporate.feature3'), t('serve.corporate.feature4')],
    },
    {
      id: 'tech',
      icon: Code,
      label: t('serve.tech'),
      title: t('serve.tech.title'),
      description: t('serve.tech.desc'),
      features: [t('serve.tech.feature1'), t('serve.tech.feature2'), t('serve.tech.feature3'), t('serve.tech.feature4')],
    },
  ];

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
            <span className="text-gradient">{t('serve.title')}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('serve.description')}
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
