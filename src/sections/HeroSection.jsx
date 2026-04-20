import { useState, useEffect, useRef, useCallback } from "react";
import { ArrowDown, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { heroSlides } from "../data/siteData";

const EASE_CINEMATIC = [0.76, 0, 0.24, 1];
const AUTO_PLAY_MS = 5500;

function SlideImage({ slide, direction, isActive }) {
  return (
    <motion.div
      key={slide.id}
      className="absolute inset-0 will-change-transform"
      initial={{ x: direction > 0 ? "100%" : "-100%", scale: 1.08 }}
      animate={{ x: 0, scale: 1 }}
      exit={{ x: direction > 0 ? "-100%" : "100%", scale: 1.08 }}
      transition={{ duration: 1.2, ease: EASE_CINEMATIC }}
    >
      {/* Ken-Burns slow zoom while active */}
      <motion.div
        className="absolute inset-0"
        animate={isActive ? { scale: [1, 1.06] } : { scale: 1 }}
        transition={{ duration: AUTO_PLAY_MS / 1000 + 1, ease: "linear" }}
      >
        <img
          src={slide.image}
          alt={slide.category}
          className="w-full h-full object-cover"
          loading="eager"
        />
      </motion.div>

      {/* Layered overlays for depth + readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-black/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      {/* Subtle vignette */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.6) 100%)",
        }}
      />
    </motion.div>
  );
}

function CategoryBadge({ label, accent, visible }) {
  return (
    <AnimatePresence mode="wait">
      {visible && (
        <motion.div
          key={label}
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 24 }}
          transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
          className="inline-flex items-center gap-2.5 mb-5 sm:mb-6"
        >
          <span className="w-6 h-px" style={{ background: accent }} />
          <span
            className="font-sans text-[11px] tracking-[0.25em] uppercase font-medium"
            style={{ color: accent }}
          >
            {label}
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-champagne via-cream to-blush/30" />

        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-rose/10 blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-gold/10 blur-[80px]" />

        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle, #C9A84C 1px, transparent 1px)`,
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      {/* Floating decorative elements */}
      {/* {floatingElements.map((el, i) => (
        <motion.div
          key={i}
          className="absolute text-2xl select-none pointer-events-none opacity-30"
          style={{
            left: `${10 + i * 15}%`,
            top: `${15 + (i % 3) * 25}%`,
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, -10, 0],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 4 + i * 0.7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
        >
          {el}
        </motion.div>
      ))} */}

      <div className="mt-10 relative z-10 max-w-8xl mx-auto px-10 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mt-6 inline-flex items-center gap- bg-white/80 backdrop-blur-sm border border-gold/30 rounded-full px-5 py-2 mb-8 shadow-sm"
        >
          <Sparkles size={16} className="text-gold" />

          <span className="font-sans text-xs tracking-[0.25em] text-warmgray uppercase">
            Your One Stop Event Planning @ Bengaluru
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="font-display text-5xl sm:text-6xl lg:text-8xl font-semibold text-charcoal leading-[1.05] tracking-tight mb-6"
        >
          Turning Your
          <br />
          <em
            className="italic text-gold-gradient not-italic"
            style={{
              background:
                "linear-gradient(135deg, #C9A84C 0%, #E8D5A3 50%, #A8832A 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Dreams
          </em>
          <br />
          Into Reality
        </motion.h1>
        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="font-body text-lg sm:text-xl text-warmgray max-w-xl mx-auto mb-10 leading-relaxed"
        >
          From Baby Showers to Birthday celebrations, we design experiences that
          touch hearts and live forever in memories.
        </motion.p>
        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="group flex items-center gap-2 bg-charcoal text-cream font-sans font-medium text-md px-8 py-4 rounded-full shadow-lg hover:shadow-xl hover:bg-gold transition-all duration-300 min-w-[180px] justify-center"
          >
            Book Your Event
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </motion.a>
          <motion.a
            href="#services"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-gold/40 text-charcoal font-sans font-medium text-md px-8 py-4 rounded-full hover:border-gold hover:bg-white transition-all duration-300 min-w-[180px] justify-center"
          >
            Explore Services
          </motion.a>
        </motion.div>
        {/* Will put stats later */}
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center text-center gap-2 text-warmgray"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="font-sans text-xs tracking-[0.2em] uppercase">
          Scroll
        </span>
        <ArrowDown size={16} />
      </motion.div>
    </section>
  );
}
