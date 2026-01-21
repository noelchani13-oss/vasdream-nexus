import { motion } from 'framer-motion';
import { Linkedin, Instagram, Mail, MapPin } from 'lucide-react';

const footerLinks = {
  products: [
    { label: 'Bedbank', href: '#bedbank' },
    { label: 'API Access', href: '#connectivity' },
    { label: 'Direct Contracts', href: '#bedbank' },
    { label: 'Channel Manager', href: '#' },
  ],
  resources: [
    { label: 'API Documentation', href: '#' },
    { label: 'Developer Portal', href: '#' },
    { label: 'Integration Guides', href: '#' },
    { label: 'Status Page', href: '#' },
  ],
  company: [
    { label: 'About Us', href: '#about' },
    { label: 'Careers', href: '#' },
    { label: 'Press', href: '#' },
    { label: 'Contact', href: '#contact' },
  ],
  legal: [
    { label: 'Terms of Service', href: '#' },
    { label: 'Privacy Policy', href: '#' },
    { label: 'Cookie Policy', href: '#' },
    { label: 'GDPR', href: '#' },
  ],
};

const socialLinks = [
  { icon: Linkedin, href: 'https://www.linkedin.com/company/vasdream/', label: 'LinkedIn' },
  { icon: Instagram, href: 'https://www.instagram.com/vasdreamplatform/?hl=en', label: 'Instagram' },
];

const Footer = () => {
  return (
    <footer className="relative pt-20 pb-8 border-t border-white/5">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-background to-muted/10" />

      <div className="relative container mx-auto px-4 lg:px-8">
        {/* Main Footer */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-2xl font-bold text-gradient-brand">VASDREAM</span>
              <p className="mt-4 text-sm text-muted-foreground max-w-xs">
                Connecting travel businesses to 3M+ hotels across 190+ countries with cutting-edge API technology.
              </p>

              {/* Contact Info */}
              <div className="mt-6 space-y-3">
                <div className="space-y-1">
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">Travel Agencies</p>
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
                    OTAs, DMCs, Tour Operators & Tech Platforms
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

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            >
              <h4 className="font-semibold text-foreground mb-4 capitalize">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} VasDream. All rights reserved.
            </p>

            {/* API Status */}
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-xs font-mono text-muted-foreground">API Status: Operational</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
