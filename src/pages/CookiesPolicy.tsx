import { motion } from 'framer-motion';
import { ArrowLeft, Cookie } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const CookiesPolicy = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <div className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 mesh-gradient opacity-40" />
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="relative container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft size={16} />
              {t('legal.backHome')}
            </Link>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-neon-purple/10 flex items-center justify-center">
                <Cookie size={24} className="text-neon-purple" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gradient">
                {t('cookies.title')}
              </h1>
            </div>
            <p className="text-muted-foreground mt-2">
              {t('cookies.lastUpdated')}: February 2026
            </p>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 lg:px-8 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto glass rounded-2xl p-8 lg:p-12 space-y-8"
        >
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">{t('cookies.section1.title')}</h2>
            <p className="text-muted-foreground leading-relaxed">{t('cookies.section1.content')}</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">{t('cookies.section2.title')}</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">{t('cookies.section2.content')}</p>

            <div className="space-y-4">
              <div className="glass rounded-lg p-4 border border-white/10">
                <h3 className="font-medium text-foreground mb-1">{t('cookies.type1.title')}</h3>
                <p className="text-sm text-muted-foreground">{t('cookies.type1.desc')}</p>
              </div>
              <div className="glass rounded-lg p-4 border border-white/10">
                <h3 className="font-medium text-foreground mb-1">{t('cookies.type2.title')}</h3>
                <p className="text-sm text-muted-foreground">{t('cookies.type2.desc')}</p>
              </div>
              <div className="glass rounded-lg p-4 border border-white/10">
                <h3 className="font-medium text-foreground mb-1">{t('cookies.type3.title')}</h3>
                <p className="text-sm text-muted-foreground">{t('cookies.type3.desc')}</p>
              </div>
              <div className="glass rounded-lg p-4 border border-white/10">
                <h3 className="font-medium text-foreground mb-1">{t('cookies.type4.title')}</h3>
                <p className="text-sm text-muted-foreground">{t('cookies.type4.desc')}</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">{t('cookies.section3.title')}</h2>
            <p className="text-muted-foreground leading-relaxed">{t('cookies.section3.content')}</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">{t('cookies.section4.title')}</h2>
            <p className="text-muted-foreground leading-relaxed">{t('cookies.section4.content')}</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">{t('cookies.section5.title')}</h2>
            <p className="text-muted-foreground leading-relaxed">{t('cookies.section5.content')}</p>
          </section>

          <section className="pt-4 border-t border-white/10">
            <h2 className="text-xl font-semibold text-foreground mb-3">{t('cookies.contact.title')}</h2>
            <p className="text-muted-foreground leading-relaxed">
              {t('cookies.contact.content')}
            </p>
            <p className="text-muted-foreground mt-2">
              Email: <a href="mailto:b2b@vasdream.com" className="text-accent hover:underline">b2b@vasdream.com</a>
            </p>
            <p className="text-muted-foreground">
              {t('cookies.contact.address')}
            </p>
          </section>
        </motion.div>
      </div>
    </div>
  );
};

export default CookiesPolicy;
