import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Partnering with VasDream has unlocked serious value — especially with their Albanian and Montenegrin contracts. Their team knows the market inside out.",
    author: 'Andrej Markovic',
    role: 'OTA Lead',
    company: 'Slovenia',
  },
  {
    quote: "The direct contracting through VasDream gave us margins we couldn't find anywhere else. Their local knowledge in the Balkans is unmatched.",
    author: 'Maria Petrova',
    role: 'CEO, Balkan Tours',
    company: 'Bulgaria',
  },
  {
    quote: "24/7 support isn't just marketing with VasDream — they actually deliver. Their team has been responsive every single time we've needed them.",
    author: 'Klaus Weber',
    role: 'Operations Director, EuroTravel GmbH',
    company: 'Germany',
  },
  {
    quote: "Seamless XML integration with our existing systems. Their technical documentation and support team made the onboarding process incredibly smooth.",
    author: 'Elena Kowalski',
    role: 'Lead Developer, BookingSoft',
    company: 'Poland',
  },
];

const partners = [
  'TravelGateX', 'HotelBeds', 'Webhotelier', 'GIATA', 'Expedia', 'WBE', 'Netstorming',
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

      <div ref={ref} className="relative container mx-auto px-4 lg:px-8">
        {/* Testimonials Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto mb-24"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              <span className="text-gradient">What Partners Say</span>
            </h2>
          </div>

          <div className="relative glass rounded-2xl p-8 lg:p-12">
            {/* Quote icon */}
            <Quote size={48} className="text-accent/20 absolute top-8 left-8" />

            {/* Content */}
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="text-center pt-8"
            >
              <p className="text-xl lg:text-2xl text-foreground leading-relaxed mb-8">
                "{testimonials[activeIndex].quote}"
              </p>
              <div>
                <p className="font-semibold text-foreground">
                  {testimonials[activeIndex].author}
                </p>
                <p className="text-sm text-muted-foreground">
                  {testimonials[activeIndex].role} • {testimonials[activeIndex].company}
                </p>
              </div>
            </motion.div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-full glass hover:bg-white/10 transition-colors"
              >
                <ChevronLeft size={24} className="text-muted-foreground" />
              </button>
              
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === activeIndex
                        ? 'w-8 bg-accent'
                        : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full glass hover:bg-white/10 transition-colors"
              >
                <ChevronRight size={24} className="text-muted-foreground" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Trusted By */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <p className="text-sm font-medium text-muted-foreground mb-8 uppercase tracking-wider">
            Trusted By Industry Leaders
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16">
            {partners.map((partner, index) => (
              <motion.div
                key={partner}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="text-xl lg:text-2xl font-bold text-muted-foreground/30 hover:text-accent transition-colors cursor-pointer"
              >
                {partner}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
