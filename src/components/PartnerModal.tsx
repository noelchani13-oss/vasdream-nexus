import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Building2, Code2, Send, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { supabase } from '@/integrations/supabase/client';

interface PartnerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type PartnerType = 'agency' | 'api' | null;

const PartnerModal = ({ isOpen, onClose }: PartnerModalProps) => {
  const { t } = useLanguage();
  const [partnerType, setPartnerType] = useState<PartnerType>(null);
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    website: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await supabase.functions.invoke('send-form-email', {
        body: {
          formType: partnerType === 'agency' ? 'partner-agency' : 'partner-api',
          data: formData,
        },
      });
    } catch (err) {
      console.error('Email send error:', err);
    }
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleClose = () => {
    setPartnerType(null);
    setIsSubmitted(false);
    setFormData({
      companyName: '',
      contactName: '',
      email: '',
      phone: '',
      website: '',
      message: '',
    });
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 z-[100] bg-background/80 backdrop-blur-sm"
          />

          {/* Modal Container - centered with flexbox */}
          <div className="fixed inset-0 z-[101] flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }}
              className="w-full max-w-lg max-h-[85vh] overflow-y-auto pointer-events-auto"
            >
              <div className="glass-strong rounded-2xl p-8 relative overflow-hidden">
              {/* Glow effect */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-accent/20 rounded-full blur-3xl" />
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-neon-purple/20 rounded-full blur-3xl" />

              {/* Close button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 p-2 text-muted-foreground hover:text-foreground transition-colors z-10"
              >
                <X size={20} />
              </button>

              {/* Content */}
              <div className="relative">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-gradient-brand mb-2">
                    {t('partner.title')}
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    {t('partner.subtitle')}
                  </p>
                </div>

                {isSubmitted ? (
                  /* Thank You Message */
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8"
                  >
                    <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 size={32} className="text-accent" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {t('partner.thankYouTitle')}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-6">
                      {t('partner.thankYouDesc')}
                    </p>
                    <button
                      onClick={handleClose}
                      className="px-6 py-2 rounded-lg glass border border-white/10 text-sm font-medium text-foreground hover:bg-white/10 transition-colors"
                    >
                      {t('partner.close')}
                    </button>
                  </motion.div>
                ) : !partnerType ? (
                  /* Partner Type Selection */
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setPartnerType('agency')}
                      className="glass rounded-xl p-6 border border-white/10 hover:border-accent/50 transition-all text-left group"
                    >
                      <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <Building2 size={24} className="text-accent" />
                      </div>
                      <h3 className="font-semibold text-foreground mb-2">
                        {t('partner.agencyTitle')}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {t('partner.agencyDesc')}
                      </p>
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setPartnerType('api')}
                      className="glass rounded-xl p-6 border border-white/10 hover:border-neon-purple/50 transition-all text-left group"
                    >
                      <div className="w-12 h-12 rounded-xl bg-neon-purple/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <Code2 size={24} className="text-neon-purple" />
                      </div>
                      <h3 className="font-semibold text-foreground mb-2">
                        {t('partner.apiTitle')}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {t('partner.apiDesc')}
                      </p>
                    </motion.button>
                  </div>
                ) : (
                  /* Partner Form */
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                  >
                    <button
                      onClick={() => setPartnerType(null)}
                      className="text-sm text-accent hover:text-accent/80 mb-6 flex items-center gap-1"
                    >
                      ← {t('partner.back')}
                    </button>

                    <div className="flex items-center gap-3 mb-6 p-3 rounded-lg bg-white/5 border border-white/10">
                      {partnerType === 'agency' ? (
                        <Building2 size={20} className="text-accent" />
                      ) : (
                        <Code2 size={20} className="text-neon-purple" />
                      )}
                      <span className="text-sm font-medium">
                        {partnerType === 'agency' ? t('partner.agencyTitle') : t('partner.apiTitle')}
                      </span>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-muted-foreground mb-2">
                            {t('partner.companyName')} *
                          </label>
                          <input
                            type="text"
                            required
                            value={formData.companyName}
                            onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                            className="w-full px-4 py-3 rounded-lg glass border border-white/10 bg-white/5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-all"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-muted-foreground mb-2">
                            {t('partner.contactName')} *
                          </label>
                          <input
                            type="text"
                            required
                            value={formData.contactName}
                            onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                            className="w-full px-4 py-3 rounded-lg glass border border-white/10 bg-white/5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-all"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-muted-foreground mb-2">
                            {t('partner.email')} *
                          </label>
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full px-4 py-3 rounded-lg glass border border-white/10 bg-white/5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-all"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-muted-foreground mb-2">
                            {t('partner.phone')}
                          </label>
                          <input
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full px-4 py-3 rounded-lg glass border border-white/10 bg-white/5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-all"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-muted-foreground mb-2">
                          {t('partner.website')}
                        </label>
                        <input
                          type="url"
                          value={formData.website}
                          onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                          placeholder="https://"
                          className="w-full px-4 py-3 rounded-lg glass border border-white/10 bg-white/5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-muted-foreground mb-2">
                          {t('partner.message')}
                        </label>
                        <textarea
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          rows={3}
                          className="w-full px-4 py-3 rounded-lg glass border border-white/10 bg-white/5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-all resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="btn-glow w-full py-3.5 rounded-lg bg-gradient-to-r from-accent to-neon-purple text-accent-foreground font-semibold flex items-center justify-center gap-2 glow-cyan disabled:opacity-50"
                      >
                        <Send size={18} />
                        {isSubmitting ? t('partner.submitting') : t('partner.submit')}
                      </button>
                    </form>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default PartnerModal;
