import { motion } from 'framer-motion';
import { ArrowLeft, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const PrivacyPolicy = () => {
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
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                <Shield size={24} className="text-accent" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gradient">
                {t('privacy.title')}
              </h1>
            </div>
            <p className="text-muted-foreground mt-2">
              {t('privacy.lastUpdated')}: February 2026
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
            <h2 className="text-xl font-semibold text-foreground mb-3">{t('privacy.section1.title')}</h2>
            <p className="text-muted-foreground leading-relaxed">{t('privacy.section1.content')}</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">{t('privacy.section2.title')}</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">{t('privacy.section2.content')}</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>{t('privacy.section2.item1')}</li>
              <li>{t('privacy.section2.item2')}</li>
              <li>{t('privacy.section2.item3')}</li>
              <li>{t('privacy.section2.item4')}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">{t('privacy.section3.title')}</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">{t('privacy.section3.content')}</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>{t('privacy.section3.item1')}</li>
              <li>{t('privacy.section3.item2')}</li>
              <li>{t('privacy.section3.item3')}</li>
              <li>{t('privacy.section3.item4')}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">{t('privacy.section4.title')}</h2>
            <p className="text-muted-foreground leading-relaxed">{t('privacy.section4.content')}</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">{t('privacy.section5.title')}</h2>
            <p className="text-muted-foreground leading-relaxed">{t('privacy.section5.content')}</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">{t('privacy.section6.title')}</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">{t('privacy.section6.content')}</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>{t('privacy.section6.item1')}</li>
              <li>{t('privacy.section6.item2')}</li>
              <li>{t('privacy.section6.item3')}</li>
              <li>{t('privacy.section6.item4')}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">{t('privacy.section7.title')}</h2>
            <p className="text-muted-foreground leading-relaxed">{t('privacy.section7.content')}</p>
          </section>

          <section className="pt-4 border-t border-white/10">
            <h2 className="text-xl font-semibold text-foreground mb-3">{t('privacy.contact.title')}</h2>
            <p className="text-muted-foreground leading-relaxed">
              {t('privacy.contact.content')}
            </p>
            <p className="text-muted-foreground mt-2">
              Email: <a href="mailto:b2b@vasdream.com" className="text-accent hover:underline">b2b@vasdream.com</a>
            </p>
            <p className="text-muted-foreground">
              {t('privacy.contact.address')}
            </p>
          </section>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
