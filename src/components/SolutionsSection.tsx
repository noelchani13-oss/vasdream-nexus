import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  FileText, 
  Globe, 
  Code2, 
  BadgePercent, 
  Headphones, 
  Filter,
  Building2,
  Plane,
  Users,
  Briefcase
} from 'lucide-react';

const solutions = [
  {
    icon: FileText,
    title: 'Direct Contracting',
    description: 'Access our portfolio of 6,500+ directly contracted hotels with exclusive rates.',
  },
  {
    icon: Globe,
    title: 'Extranet Access',
    description: 'Manage bookings, view availability, and control inventory through our intuitive platform.',
  },
  {
    icon: Code2,
    title: 'XML / API Integration',
    description: 'Seamless technical integration with your existing systems via XML or JSON API.',
  },
  {
    icon: BadgePercent,
    title: 'Exclusive Rates',
    description: 'Preferential pricing unavailable on public channels, maximizing your margins.',
  },
  {
    icon: Headphones,
    title: '24/7 Multilingual Support',
    description: 'Round-the-clock assistance in multiple languages whenever you need it.',
  },
  {
    icon: Filter,
    title: 'Advanced Filtering',
    description: 'Search and filter by destination, category, board type, and more.',
  },
];

const clientTypes = [
  { icon: Plane, label: 'OTAs' },
  { icon: Building2, label: 'DMCs' },
  { icon: Users, label: 'Agencies' },
  { icon: Briefcase, label: 'Corporate' },
];

const SolutionsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="solutions" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 mesh-gradient opacity-30" />
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div ref={ref} className="relative container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-gradient">Our Solutions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to power your travel business with the Western Balkans' premier hotel inventory
          </p>
        </motion.div>

        {/* Solutions Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
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
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <solution.icon size={24} className="text-accent" />
              </div>
              <h3 className="font-semibold text-lg text-foreground mb-2">{solution.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{solution.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Who We Serve Quick View */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="glass rounded-2xl p-8 text-center"
        >
          <p className="text-sm font-mono text-accent mb-6 uppercase tracking-wider">
            Serving Travel Professionals Worldwide
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {clientTypes.map((client, index) => (
              <motion.div
                key={client.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
              >
                <client.icon size={20} />
                <span className="font-medium">{client.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionsSection;
