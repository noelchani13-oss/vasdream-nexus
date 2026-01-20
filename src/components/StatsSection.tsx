import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Building2, Globe, Award, Users } from 'lucide-react';

const stats = [
  { icon: Building2, value: 6500, suffix: '+', label: 'Direct Hotel Contracts', duration: 2 },
  { icon: Globe, value: 4, suffix: '', label: 'Core Markets', subtext: 'Albania, Montenegro, Greece, Balkans', duration: 1 },
  { icon: Award, value: 30, suffix: '+', label: 'Years Experience', duration: 1.5 },
  { icon: Users, value: 500, suffix: '+', label: 'Active Partners', duration: 1.5 },
];

const AnimatedCounter = ({ 
  value, 
  duration, 
  suffix,
  isInView 
}: { 
  value: number; 
  duration: number; 
  suffix: string;
  isInView: boolean;
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = value;
    const incrementTime = (duration * 1000) / end;
    
    // For large numbers, use bigger increments
    const increment = value > 1000 ? Math.ceil(value / 100) : 1;
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, Math.max(incrementTime * increment, 20));

    return () => clearInterval(timer);
  }, [value, duration, isInView]);

  const formatNumber = (num: number) => {
    if (num >= 1000) {
      return num.toLocaleString();
    }
    return num.toString();
  };

  return (
    <span className="font-mono">
      {formatNumber(count)}{suffix}
    </span>
  );
};

const StatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section className="relative py-16 overflow-hidden">
      {/* Gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />

      <div ref={ref} className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="glass rounded-2xl p-8 lg:p-12"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent/10 text-accent mb-4 group-hover:scale-110 transition-transform">
                  <stat.icon size={24} />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-gradient-brand mb-2">
                  <AnimatedCounter
                    value={stat.value}
                    duration={stat.duration}
                    suffix={stat.suffix}
                    isInView={isInView}
                  />
                </div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
