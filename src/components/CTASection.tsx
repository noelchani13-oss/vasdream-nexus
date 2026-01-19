import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Calendar, Users } from 'lucide-react';

const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 mesh-gradient" />
      <div className="absolute inset-0 grid-pattern opacity-30" />

      {/* Animated orbs */}
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/2 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1.3, 1, 1.3],
          opacity: [0.3, 0.2, 0.3],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/2 right-1/4 w-80 h-80 bg-neon-purple/25 rounded-full blur-3xl"
      />

      <div ref={ref} className="relative container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="text-gradient">Ready to Scale Your Travel Business?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Join 500+ partners worldwide who trust VasDream for their hotel inventory needs.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-glow group w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-accent to-neon-purple text-accent-foreground font-semibold flex items-center justify-center gap-3 glow-cyan"
            >
              <Users size={20} />
              Become a Partner
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-glow group w-full sm:w-auto px-8 py-4 rounded-xl glass border border-white/20 font-semibold flex items-center justify-center gap-3 hover:border-accent/50 transition-colors"
            >
              <Calendar size={20} className="text-accent" />
              Book a Demo
            </motion.button>
          </div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground"
          >
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500" />
              No setup fees
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500" />
              24/7 Support
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500" />
              Free API sandbox
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;