import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import SectionHeader from "../components/SectionHeader";
import ScrollReveal from "../components/ScrollReveal";
import { testimonials } from "../data/siteData";

function StarRating({ rating }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(rating)].map((_, i) => (
        <Star key={i} size={14} fill="#C9A84C" color="#C9A84C" />
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-charcoal overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-64 h-64 rounded-full bg-gold/5 blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 rounded-full bg-rose/5 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle, #C9A84C 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <ScrollReveal>
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-gold" />
              <span className="font-sans text-xs tracking-[0.2em] text-gold uppercase">Testimonials</span>
              <span className="w-8 h-px bg-gold" />
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="font-display text-4xl sm:text-5xl font-semibold text-cream leading-tight">
              Words from Our{" "}
              <em className="italic" style={{
                background: "linear-gradient(135deg, #C9A84C 0%, #E8D5A3 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                Beloved Clients
              </em>
            </h2>
          </ScrollReveal>
        </div>

        {/* Main testimonial */}
        <div className="relative max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-10 lg:p-14 text-center"
            >
              <Quote size={40} className="text-gold/40 mx-auto mb-6" />
              <p className="font-body text-xl lg:text-2xl text-cream/90 leading-relaxed mb-8 italic">
                "{testimonials[current].quote}"
              </p>
              <div className="flex flex-col items-center gap-2">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white font-display text-lg font-semibold"
                  style={{ backgroundColor: testimonials[current].color }}
                >
                  {testimonials[current].avatar}
                </div>
                <div>
                  <div className="font-display text-lg font-medium text-cream">
                    {testimonials[current].name}
                  </div>
                  <div className="font-sans text-sm text-warmgray">
                    {testimonials[current].event} · {testimonials[current].city}
                  </div>
                </div>
                <StarRating rating={testimonials[current].rating} />
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <motion.button
              onClick={prev}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-cream hover:border-gold hover:text-gold transition-all duration-300"
            >
              <ChevronLeft size={18} />
            </motion.button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`rounded-full transition-all duration-300 ${
                    i === current ? "w-6 h-2 bg-gold" : "w-2 h-2 bg-white/30 hover:bg-white/60"
                  }`}
                />
              ))}
            </div>

            <motion.button
              onClick={next}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-cream hover:border-gold hover:text-gold transition-all duration-300"
            >
              <ChevronRight size={18} />
            </motion.button>
          </div>
        </div>

        {/* All testimonial cards below */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-16">
          {testimonials.map((t, i) => (
            <ScrollReveal key={t.id} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -4 }}
                onClick={() => setCurrent(i)}
                className={`bg-white/5 border rounded-2xl p-5 cursor-pointer transition-all duration-300 ${
                  i === current
                    ? "border-gold/50 bg-white/10"
                    : "border-white/10 hover:border-white/20"
                }`}
              >
                <StarRating rating={t.rating} />
                <p className="font-body text-sm text-cream/70 mt-3 mb-4 leading-relaxed line-clamp-3">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-2">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-display font-semibold flex-shrink-0"
                    style={{ backgroundColor: t.color }}
                  >
                    {t.avatar}
                  </div>
                  <div>
                    <div className="font-sans text-xs text-cream font-medium">{t.name}</div>
                    <div className="font-sans text-xs text-warmgray">{t.event}</div>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
