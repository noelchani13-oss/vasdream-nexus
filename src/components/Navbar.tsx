import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import vasdreamLogo from '@/assets/logos/vasdream-logo.svg';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const navLinks = [
    { label: t('nav.about'), href: '#about' },
    { label: t('nav.solutions'), href: '#solutions' },
    { label: t('nav.connectivity'), href: '#connectivity' },
    { label: t('nav.bedbank'), href: '#bedbank' },
    { label: t('nav.global'), href: '#global' },
    { label: t('nav.contact'), href: '#contact' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="fixed top-0 left-0 right-0 z-50 glass-strong"
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2">
              <img src={vasdreamLogo} alt="VasDream" className="h-10 w-auto" />
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>

            {/* Right Actions */}
            <div className="hidden lg:flex items-center gap-4">
              {/* Language Toggle */}
              <div className="flex items-center glass rounded-full p-1">
                <button
                  onClick={() => setLanguage('EN')}
                  className={`px-3 py-1 text-xs font-mono transition-all duration-200 rounded-full ${
                    language === 'EN'
                      ? 'bg-accent text-accent-foreground'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  EN
                </button>
                <button
                  onClick={() => setLanguage('AL')}
                  className={`px-3 py-1 text-xs font-mono transition-all duration-200 rounded-full ${
                    language === 'AL'
                      ? 'bg-accent text-accent-foreground'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  AL
                </button>
              </div>

              {/* Partner Login Button */}
              <a
                href="https://booking.vasdream.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-glow px-5 py-2.5 rounded-lg bg-gradient-to-r from-neon-cyan/20 to-neon-purple/20 border border-accent/50 text-accent font-medium text-sm"
              >
                {t('nav.partnerLogin')}
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-foreground"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden glass-strong border-t border-white/10"
            >
              <div className="container mx-auto px-4 py-6 space-y-4">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-lg font-medium text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </motion.a>
                ))}
                <div className="pt-4 flex flex-col gap-4">
                  <div className="flex gap-2">
                    <button
                      onClick={() => setLanguage('EN')}
                      className={`px-4 py-2 text-sm font-mono rounded-lg transition-all ${
                        language === 'EN' ? 'bg-accent text-accent-foreground' : 'glass'
                      }`}
                    >
                      EN
                    </button>
                    <button
                      onClick={() => setLanguage('AL')}
                      className={`px-4 py-2 text-sm font-mono rounded-lg transition-all ${
                        language === 'AL' ? 'bg-accent text-accent-foreground' : 'glass'
                      }`}
                    >
                      AL
                    </button>
                  </div>
                  <a
                    href="https://booking.vasdream.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsMenuOpen(false)}
                    className="btn-glow w-full py-3 rounded-lg bg-gradient-to-r from-neon-cyan/20 to-neon-purple/20 border border-accent/50 text-accent font-medium text-center block"
                  >
                    {t('nav.partnerLogin')}
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Navbar;
