import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Database, Lock, TrendingUp, Building2, ArrowRight, Sparkles, X, CheckCircle2, Globe, Users, Percent } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const BedbankSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [showHotelForm, setShowHotelForm] = useState(false);
  const [formData, setFormData] = useState({
    hotelName: '',
    contactName: '',
    email: '',
    phone: '',
    location: '',
    rooms: '',
  });
  const { t } = useLanguage();

  const features = [
    { icon: Database, title: t('bedbank.feature1.title'), description: t('bedbank.feature1.desc') },
    { icon: Lock, title: t('bedbank.feature2.title'), description: t('bedbank.feature2.desc') },
    { icon: TrendingUp, title: t('bedbank.feature3.title'), description: t('bedbank.feature3.desc') },
    { icon: Building2, title: t('bedbank.feature4.title'), description: t('bedbank.feature4.desc') },
  ];

  const hotelBenefits = [
    { icon: Globe, text: t('bedbank.hotelBenefit1') },
    { icon: Users, text: t('bedbank.hotelBenefit2') },
    { icon: Percent, text: t('bedbank.hotelBenefit3') },
    { icon: CheckCircle2, text: t('bedbank.hotelBenefit4') },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you! Our representatives will contact you shortly.');
    setShowHotelForm(false);
    setFormData({ hotelName: '', contactName: '', email: '', phone: '', location: '', rooms: '' });
  };

  return (
    <section id="bedbank" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="absolute inset-0 grid-pattern opacity-50" />

      {/* Floating orbs */}
      <motion.div
        animate={{ y: [-20, 20, -20], x: [-10, 10, -10] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-20 right-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ y: [20, -20, 20] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-20 left-10 w-48 h-48 bg-neon-purple/15 rounded-full blur-3xl"
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
              <Sparkles size={14} className="text-neon-purple" />
              <span className="text-xs font-mono text-neon-purple">{t('bedbank.badge')}</span>
              <span className="text-xs text-muted-foreground">{t('bedbank.badgeText')}</span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-foreground">{t('bedbank.title')}</span>
            </h2>

            <p className="text-xl text-muted-foreground mb-4 leading-relaxed">
              {t('bedbank.subtitle')}
              <span className="text-accent font-semibold"> {t('bedbank.subtitleHighlight')}</span>.
            </p>

            <p className="text-muted-foreground mb-8 leading-relaxed">
              {t('bedbank.description')}
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-4 mb-8">
              <button className="btn-glow group px-6 py-3 rounded-xl bg-gradient-to-r from-accent to-neon-purple text-accent-foreground font-semibold flex items-center gap-2 glow-cyan">
                {t('bedbank.getStarted')}
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <span className="text-sm text-muted-foreground flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent" />
                {t('bedbank.availableVia')}
              </span>
            </div>

            {/* Hotel CTA - Enhanced */}
            <div className="glass rounded-xl p-6 border border-accent/20">
              <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                <Building2 size={20} className="text-accent" />
                {t('bedbank.hotelTitle')}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                {t('bedbank.hotelDesc')}
              </p>
              <ul className="space-y-2 mb-4">
                {hotelBenefits.map((benefit) => (
                  <li key={benefit.text} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <benefit.icon size={14} className="text-accent flex-shrink-0" />
                    <span>{benefit.text}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => setShowHotelForm(true)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent/10 border border-accent/30 text-accent text-sm font-medium hover:bg-accent/20 transition-colors"
              >
                {t('bedbank.startHere')} <ArrowRight size={14} />
              </button>
            </div>
          </motion.div>

          {/* Right: Feature Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
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

      {/* Hotel Form Modal */}
      {showHotelForm && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
          onClick={() => setShowHotelForm(false)}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="w-full max-w-md glass-strong rounded-2xl p-6 border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-foreground">{t('bedbank.formTitle')}</h3>
              <button
                onClick={() => setShowHotelForm(false)}
                className="p-2 rounded-lg hover:bg-white/10 transition-colors"
              >
                <X size={20} className="text-muted-foreground" />
              </button>
            </div>

            <p className="text-sm text-muted-foreground mb-6">
              {t('bedbank.formDesc')}
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">{t('bedbank.formHotelName')} *</label>
                <input
                  type="text"
                  required
                  value={formData.hotelName}
                  onChange={(e) => setFormData({ ...formData, hotelName: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg bg-muted border border-white/10 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent/50"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">{t('bedbank.formContactName')} *</label>
                <input
                  type="text"
                  required
                  value={formData.contactName}
                  onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg bg-muted border border-white/10 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent/50"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">{t('bedbank.formEmail')} *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2 rounded-lg bg-muted border border-white/10 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent/50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">{t('bedbank.formPhone')}</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2 rounded-lg bg-muted border border-white/10 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent/50"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">{t('bedbank.formLocation')} *</label>
                  <input
                    type="text"
                    required
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full px-4 py-2 rounded-lg bg-muted border border-white/10 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent/50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">{t('bedbank.formRooms')}</label>
                  <input
                    type="number"
                    value={formData.rooms}
                    onChange={(e) => setFormData({ ...formData, rooms: e.target.value })}
                    className="w-full px-4 py-2 rounded-lg bg-muted border border-white/10 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent/50"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-full btn-glow py-3 rounded-xl bg-gradient-to-r from-accent to-neon-purple text-accent-foreground font-semibold"
              >
                {t('bedbank.formSubmit')}
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default BedbankSection;
