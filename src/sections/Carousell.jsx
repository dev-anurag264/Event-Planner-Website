import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowDown } from "lucide-react";
import { heroSlides } from "../data/siteData";

// ── Easing curves ─────────────────────────────────────────────
const EASE_CINEMATIC = [0.76, 0, 0.24, 1];
const AUTO_PLAY_MS = 5500;

// ── Slide image: parallax-aware, Ken-Burns zoom ───────────────
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

// ── Category badge ────────────────────────────────────────────
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

// ── Main headline ─────────────────────────────────────────────
function SlideHeadline({ slide, visible }) {
  return (
    <AnimatePresence mode="wait">
      {visible && (
        <motion.div key={slide.id} className="mb-6">
          {/* Line 1 */}
          <div className="overflow-hidden">
            <motion.p
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              exit={{ y: "-110%" }}
              transition={{ duration: 0.75, delay: 0.25, ease: EASE_CINEMATIC }}
              className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold text-white leading-none tracking-tight"
            >
              {slide.headline}
            </motion.p>
          </div>

          {/* Highlighted word */}
          <div className="overflow-hidden">
            <motion.p
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              exit={{ y: "-110%" }}
              transition={{ duration: 0.75, delay: 0.37, ease: EASE_CINEMATIC }}
              className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold leading-none tracking-tight italic"
              style={{ color: slide.accent }}
            >
              {slide.highlight}
            </motion.p>
          </div>

          {/* Line 3 */}
          <div className="overflow-hidden">
            <motion.p
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              exit={{ y: "-110%" }}
              transition={{ duration: 0.75, delay: 0.49, ease: EASE_CINEMATIC }}
              className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold text-white/90 leading-none tracking-tight"
            >
              {slide.subline}
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// ── Progress bar (thin line per slide) ───────────────────────
function ProgressBar({ duration, isPlaying }) {
  return (
    <motion.div
      key={isPlaying}
      className="h-full origin-left"
      style={{ background: "white" }}
      initial={{ scaleX: 0 }}
      animate={isPlaying ? { scaleX: 1 } : { scaleX: 0 }}
      transition={{ duration: duration / 1000, ease: "linear" }}
    />
  );
}

// ── Slide counter (e.g. "02 / 05") ───────────────────────────
function SlideCounter({ current, total }) {
  return (
    <div className="flex items-center gap-2">
      <motion.span
        key={current}
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        className="font-display text-white text-xl font-medium leading-none"
      >
        {String(current + 1).padStart(2, "0")}
      </motion.span>
      <span className="text-white/30 font-sans text-xs">
        / {String(total).padStart(2, "0")}
      </span>
    </div>
  );
}

// ── Main Hero Component ───────────────────────────────────────
export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [playing, setPlaying] = useState(true);
  const [dragging, setDragging] = useState(false);
  const dragStart = useRef(null);
  const slide = heroSlides[current];

  const go = useCallback((idx, dir) => {
    setDirection(dir);
    setCurrent(idx);
    setPlaying(false);
    setTimeout(() => setPlaying(true), 50);
  }, []);

  const next = useCallback(() => {
    go((current + 1) % heroSlides.length, 1);
  }, [current, go]);

  const prev = useCallback(() => {
    go((current - 1 + heroSlides.length) % heroSlides.length, -1);
  }, [current, go]);

  // Auto-advance
  useEffect(() => {
    if (!playing) return;
    const id = setTimeout(next, AUTO_PLAY_MS);
    return () => clearTimeout(id);
  }, [playing, current, next]);

  // Keyboard navigation
  useEffect(() => {
    const handler = (e) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [next, prev]);

  // Touch/drag swipe
  const onDragStart = (e) => {
    dragStart.current = e.touches?.[0]?.clientX ?? e.clientX;
  };
  const onDragEnd = (e) => {
    if (dragStart.current === null) return;
    const end = e.changedTouches?.[0]?.clientX ?? e.clientX;
    const delta = dragStart.current - end;
    if (Math.abs(delta) > 50) delta > 0 ? next() : prev();
    dragStart.current = null;
  };

  return (
    <section
      id="home"
      className="relative h-screen min-h-[600px] max-h-[1000px] overflow-hidden cursor-grab active:cursor-grabbing"
      onMouseDown={onDragStart}
      onMouseUp={onDragEnd}
      onTouchStart={onDragStart}
      onTouchEnd={onDragEnd}
    >
      {/* ── Slide images ─────────────────────────────────────── */}
      <AnimatePresence initial={false} custom={direction}>
        <SlideImage
          key={slide.id}
          slide={slide}
          direction={direction}
          isActive={playing}
        />
      </AnimatePresence>

      {/* ── Content overlay ──────────────────────────────────── */}
      <div className="relative z-10 h-full flex flex-col">
        {/* Top bar: branding + slide counter */}
        <div className="flex items-center justify-between px-6 sm:px-10 lg:px-16 pt-8">
          {/* Logo */}
          <motion.a
            href="#home"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex items-center gap-2 z-20"
          >
            <span className="text-gold text-xl">✦</span>
            <div>
              <div className="font-display font-semibold text-base sm:text-lg text-white leading-none tracking-wide">
                11.11<span className="text-gold">Butterfly Events</span>
              </div>
              <div className="font-sans text-[8px] tracking-[0.22em] text-white/50 uppercase">
                Event Planners
              </div>
            </div>
          </motion.a>

          {/* Counter */}
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <SlideCounter current={current} total={heroSlides.length} />
          </motion.div>
        </div>

        {/* Main content — left-anchored */}
        <div className="flex-1 flex items-end pb-24 sm:pb-28 px-6 sm:px-10 lg:px-16">
          <div className="max-w-3xl w-full">
            {/* Category badge */}
            <CategoryBadge
              label={slide.category}
              accent={slide.accent}
              visible={true}
            />

            {/* Headline (letter-masked reveal) */}
            <SlideHeadline slide={slide} visible={true} />

            {/* Tagline */}
            <AnimatePresence mode="wait">
              <motion.p
                key={slide.id + "-tag"}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                className="font-body text-base sm:text-lg text-white/75 max-w-md leading-relaxed mb-8 sm:mb-10"
              >
                {slide.tagline}
              </motion.p>
            </AnimatePresence>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.75 }}
              className="flex flex-wrap items-center gap-3 sm:gap-4"
            ></motion.div>
          </div>
        </div>
      </div>

      {/* ── Right-side nav arrows ─────────────────────────────── */}
      <div className="absolute right-5 sm:right-8 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-3">
        <motion.button
          onClick={prev}
          whileHover={{ scale: 1.12, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="w-11 h-11 rounded-full border border-white/25 bg-black/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 hover:border-white/50 transition-all duration-300"
          aria-label="Previous"
        >
          <ChevronLeft size={18} />
        </motion.button>
        <motion.button
          onClick={next}
          whileHover={{ scale: 1.12, y: 2 }}
          whileTap={{ scale: 0.95 }}
          className="w-11 h-11 rounded-full border border-white/25 bg-black/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 hover:border-white/50 transition-all duration-300"
          aria-label="Next"
        >
          <ChevronRight size={18} />
        </motion.button>
      </div>

      {/* ── Bottom bar: progress dots + slide strip thumbnails ───── */}
      <div className="absolute bottom-0 left-0 right-0 z-20 px-6 sm:px-10 lg:px-16 pb-7">
        <div className="flex items-end justify-between gap-6">
          {/* Progress indicators */}
          <div className="flex items-center gap-2">
            {heroSlides.map((s, i) => (
              <button
                key={s.id}
                onClick={() => go(i, i > current ? 1 : -1)}
                className="group flex flex-col gap-1 items-center"
                aria-label={`Go to slide ${i + 1}`}
              >
                {/* Thin progress track */}
                <div className="w-12 sm:w-16 h-[2px] bg-white/20 rounded-full overflow-hidden">
                  {i === current && (
                    <ProgressBar duration={AUTO_PLAY_MS} isPlaying={playing} />
                  )}
                  {i < current && <div className="h-full w-full bg-white/60" />}
                </div>
              </button>
            ))}
          </div>

          {/* Thumbnail strip — shows next 3 slides */}
          <div className="hidden sm:flex items-center gap-2">
            {heroSlides.map((s, i) => (
              <motion.button
                key={s.id}
                onClick={() => go(i, i > current ? 1 : -1)}
                whileHover={{ scale: 1.06, y: -3 }}
                className={`relative overflow-hidden rounded-xl transition-all duration-400 ${
                  i === current
                    ? "w-24 h-14 ring-2 ring-white/70 ring-offset-1 ring-offset-transparent"
                    : "w-16 h-10 opacity-50 hover:opacity-80"
                }`}
              >
                <img
                  src={s.image}
                  alt={s.category}
                  className="w-full h-full object-cover"
                />
                {i === current && (
                  <div className="absolute inset-0 bg-white/10" />
                )}
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
