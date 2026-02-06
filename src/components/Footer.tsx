import { useState } from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Instagram, Mail, MapPin, Send } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import vasdreamLogo from '@/assets/logos/vasdream-logo.svg';
import PartnerModal from './PartnerModal';

const Footer = () => {
  const { t } = useLanguage();
  const [email, setEmail] = useState('');
  const [isPartnerModalOpen, setIsPartnerModalOpen] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/company/vasdream/', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://www.instagram.com/vasdreamplatform/?hl=en', label: 'Instagram' },
  ];

  return (
    <footer className="relative pt-20 pb-8 border-t border-white/5">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-background to-muted/10" />

      <div className="relative container mx-auto px-4 lg:px-8">
        {/* Main Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <img src={vasdreamLogo} alt="VasDream" className="h-12 w-auto mb-4" />
              <p className="mt-4 text-sm text-muted-foreground max-w-md">
                {t('footer.description')}
              </p>

              {/* Contact Info */}
              <div className="mt-6 space-y-3">
                <div className="space-y-1">
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">{t('footer.travelAgencies')}</p>
                  <a
                    href="mailto:b2b@vasdream.com"
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Mail size={14} className="text-accent" />
                    b2b@vasdream.com
                  </a>
                </div>
                <div className="space-y-1">
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">
                    {t('footer.otasDmcs')}
                  </p>
                  <a
                    href="mailto:api@vasdream.com"
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Mail size={14} className="text-accent" />
                    api@vasdream.com
                  </a>
                </div>
                <p className="flex items-start gap-2 text-sm text-muted-foreground">
                  <MapPin size={14} className="text-accent mt-0.5 flex-shrink-0" />
                  Rruga Dervish Shaba, Tirana, Albania, 1019
                </p>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-4 mt-6">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 rounded-lg glass flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent/30 transition-all"
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-semibold text-foreground mb-4">{t('footer.company')}</h4>
            <ul className="space-y-3">
              <li>
                <a href="https://www.linkedin.com/company/vas-group/jobs/" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {t('footer.careers')}
                </a>
              </li>
              <li>
                <button onClick={() => setIsPartnerModalOpen(true)} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {t('footer.contact')}
                </button>
              </li>
            </ul>

            <h4 className="font-semibold text-foreground mb-4 mt-8">{t('footer.legal')}</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/privacy-policy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {t('footer.privacyPolicy')}
                </Link>
              </li>
              <li>
                <Link to="/cookies-policy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {t('footer.cookiesPolicy')}
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-semibold text-foreground mb-4">{t('footer.newsletter')}</h4>
            <p className="text-sm text-muted-foreground mb-4">
              {t('footer.newsletterDesc')}
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t('footer.emailPlaceholder')}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
                required
              />
              <button
                type="submit"
                className="w-full px-6 py-3 rounded-lg font-medium text-sm relative overflow-hidden group transition-all duration-300"
                style={{
                  background: 'linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(280 70% 50%) 100%)',
                }}
              >
                {/* Mirror/Glass effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent" />
                <div className="absolute inset-[1px] rounded-[7px] bg-gradient-to-b from-white/10 to-transparent opacity-50" />
                
                <span className="relative flex items-center justify-center gap-2 text-white">
                  <Send size={16} />
                  {t('footer.subscribe')}
                </span>
              </button>
            </form>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} VasDream. {t('footer.rights')}
            </p>

            {/* API Status */}
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-xs font-mono text-muted-foreground">{t('footer.apiStatus')}</span>
            </div>
          </div>
        </div>
      </div>
      
      <PartnerModal isOpen={isPartnerModalOpen} onClose={() => setIsPartnerModalOpen(false)} />
    </footer>
  );
};

export default Footer;
