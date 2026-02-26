import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import PartnerModal from './PartnerModal';

const HeroSection = () => {
  const { t } = useLanguage();
  const [isPartnerModalOpen, setIsPartnerModalOpen] = useState(false);
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background layers */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 grid-pattern" />
      <div className="absolute inset-0 mesh-gradient opacity-60" />

      {/* Animated orbs - pure CSS for performance */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-purple/20 rounded-full blur-3xl animate-orb-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/15 rounded-full blur-3xl animate-orb-slower" />

      {/* 3D Network visualization */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <svg viewBox="0 0 800 600" className="w-full h-full max-w-5xl opacity-30">
          {/* Connection lines */}
          {[{
          x1: 400,
          y1: 300,
          x2: 200,
          y2: 150
        }, {
          x1: 400,
          y1: 300,
          x2: 600,
          y2: 150
        }, {
          x1: 400,
          y1: 300,
          x2: 150,
          y2: 400
        }, {
          x1: 400,
          y1: 300,
          x2: 650,
          y2: 400
        }, {
          x1: 400,
          y1: 300,
          x2: 300,
          y2: 500
        }, {
          x1: 400,
          y1: 300,
          x2: 500,
          y2: 500
        }, {
          x1: 200,
          y1: 150,
          x2: 100,
          y2: 200
        }, {
          x1: 600,
          y1: 150,
          x2: 700,
          y2: 200
        }].map((line, i) => <motion.line key={i} x1={line.x1} y1={line.y1} x2={line.x2} y2={line.y2} stroke="url(#lineGradient)" strokeWidth="1" initial={{
          pathLength: 0,
          opacity: 0
        }} animate={{
          pathLength: 1,
          opacity: 0.6
        }} transition={{
          duration: 2,
          delay: i * 0.2
        }} />)}

          {/* Nodes */}
          {[{
          cx: 400,
          cy: 300,
          r: 8
        }, {
          cx: 200,
          cy: 150,
          r: 5
        }, {
          cx: 600,
          cy: 150,
          r: 5
        }, {
          cx: 150,
          cy: 400,
          r: 4
        }, {
          cx: 650,
          cy: 400,
          r: 4
        }, {
          cx: 300,
          cy: 500,
          r: 3
        }, {
          cx: 500,
          cy: 500,
          r: 3
        }, {
          cx: 100,
          cy: 200,
          r: 3
        }, {
          cx: 700,
          cy: 200,
          r: 3
        }].map((node, i) => <motion.circle key={i} cx={node.cx} cy={node.cy} r={node.r} fill="url(#nodeGradient)" initial={{
          scale: 0,
          opacity: 0
        }} animate={{
          scale: 1,
          opacity: 1
        }} transition={{
          duration: 0.5,
          delay: 1 + i * 0.1
        }} />)}

          {/* Gradient definitions */}
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(180, 100%, 50%)" stopOpacity="0.8" />
              <stop offset="100%" stopColor="hsl(300, 60%, 50%)" stopOpacity="0.3" />
            </linearGradient>
            <radialGradient id="nodeGradient">
              <stop offset="0%" stopColor="hsl(180, 100%, 50%)" />
              <stop offset="100%" stopColor="hsl(300, 60%, 50%)" />
            </radialGradient>
          </defs>
        </svg>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 lg:px-8 text-center">
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8
      }} className="max-w-4xl mx-auto">
          {/* Badge */}
          <motion.div initial={{
          opacity: 0,
          scale: 0.9
        }} animate={{
          opacity: 1,
          scale: 1
        }} transition={{
          delay: 0.2
        }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-accent/30 mb-8">
            <Sparkles size={14} className="text-accent" />
            <span className="text-xs text-muted-foreground">{t('hero.experience')}</span>
          </motion.div>

          {/* Main headline */}
          <motion.h1 initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.3,
          duration: 0.8
        }} className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-6">
            <span className="text-gradient">{t('hero.headline')}</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.4,
          duration: 0.8
        }} className="text-xl md:text-2xl text-muted-foreground font-light mb-4">{t('hero.subheadline')}</motion.p>

          {/* Support line */}
          <motion.p initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.5,
          duration: 0.8
        }} className="text-base md:text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            <span className="font-mono text-accent">{t('hero.features')}</span>
            <br />
            <span className="mt-2 inline-block">{t('hero.builtFor')}</span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.6,
          duration: 0.8
        }} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={() => setIsPartnerModalOpen(true)}
              className="btn-glow group px-8 py-4 rounded-xl bg-gradient-to-r from-accent to-neon-purple text-accent-foreground font-semibold flex items-center gap-2 glow-cyan"
            >
              {t('hero.becomePartner')}
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        
      </div>
      
      <PartnerModal isOpen={isPartnerModalOpen} onClose={() => setIsPartnerModalOpen(false)} />
    </section>;
};
export default HeroSection;