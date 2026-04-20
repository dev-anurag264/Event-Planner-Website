import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { X, ArrowRight } from "lucide-react";

const GALLERY_ITEMS = [
  {
    id: 1,
    cat: "wedding",
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=85&auto=format&fit=crop",
    label: "Wedding",
    name: "Garden Ceremony",
    span: "tall",
  },
  {
    id: 2,
    cat: "floral",
    src: "./src/assets/img1.jpg",
    label: "Floral Decor",
    name: "Bloom Archway",
    span: "normal",
  },
  {
    id: 3,
    cat: "birthday",
    src: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&q=85&auto=format&fit=crop",
    label: "Birthday",
    name: "Luxury Setup",
    span: "normal",
  },
  {
    id: 4,
    cat: "baby",
    src: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&q=85&auto=format&fit=crop",
    label: "Baby Shower",
    name: "Dreamy Welcome",
    span: "tall",
  },
  {
    id: 5,
    cat: "surprise",
    src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=85&auto=format&fit=crop",
    label: "Surprise",
    name: "Candlelight Evening",
    span: "normal",
  },
  {
    id: 6,
    cat: "wedding",
    src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=85&auto=format&fit=crop",
    label: "Wedding",
    name: "Grand Reception",
    span: "normal",
  },
  {
    id: 7,
    cat: "floral",
    src: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&q=85&auto=format&fit=crop",
    label: "Floral Décor",
    name: "Table Centrepiece",
    span: "normal",
  },
  {
    id: 8,
    cat: "surprise",
    src: "./src/assets/img2.jpg",
    label: "Surprise",
    name: "Bridal Shower",
    span: "tall",
  },
  {
    id: 9,
    cat: "birthday",
    src: "./src/assets/img3.jpg",
    label: "Birthday",
    name: "Sweet Celebration",
    span: "normal",
  },
  {
    id: 10,
    cat: "wedding",
    src: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=800&q=85&auto=format&fit=crop",
    label: "Bride to Be",
    name: "Bridal Moment",
    span: "normal",
  },
  {
    id: 11,
    cat: "baby",
    src: "./src/assets/baby.jpg",
    label: "Baby Shower",
    name: "Soft & Sweet",
    span: "normal",
  },
  {
    id: 12,
    cat: "floral",
    src: "./src/assets/img5.jpg",
    label: "Floral Décor",
    name: "Bridal Bouquet",
    span: "tall",
  },
];

const CATEGORIES = [
  { id: "all", label: "All Events" },
  { id: "wedding", label: "Weddings" },
  { id: "floral", label: "Floral Décor" },
  { id: "birthday", label: "Birthdays" },
  { id: "baby", label: "Baby Showers" },
  { id: "surprise", label: "Surprises" },
];

const FLOATS = [
  { y: [0, -7, 0], rotate: [-0.8, 0.5, -0.8], dur: 5.0 },
  { y: [0, -5, 0], rotate: [0.6, -0.4, 0.6], dur: 6.2 },
  { y: [0, -9, 0], rotate: [-1.0, 0.8, -1.0], dur: 4.5 },
  { y: [0, -4, 0], rotate: [0.3, -0.6, 0.3], dur: 7.0 },
];

function GalleryCard({ item, index, onClick }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const float = FLOATS[index % FLOATS.length];
  const isTall = item.span === "tall";

  return (
    <motion.div
      ref={ref}
      layout
      initial={{ opacity: 0, y: 32, scale: 0.94 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{
        duration: 0.65,
        delay: (index % 4) * 0.07,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className="relative overflow-hidden cursor-pointer group"
      style={{ borderRadius: 20 }}
      onClick={() => onClick(item)}
    >
      <motion.div
        className="w-full h-full"
        animate={{ y: float.y, rotate: float.rotate }}
        transition={{
          duration: float.dur,
          repeat: Infinity,
          ease: "easeInOut",
          delay: index * 0.3,
        }}
      >
        <div
          className="w-full overflow-hidden"
          style={{ borderRadius: 20, height: isTall ? 420 : 220 }}
        >
          <motion.img
            src={item.src}
            alt={item.name}
            loading="lazy"
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.07 }}
            transition={{ duration: 0.65, ease: [0.21, 0.47, 0.32, 0.98] }}
          />
        </div>

        <motion.div
          className="absolute inset-0 flex flex-col justify-end p-5"
          style={{
            borderRadius: 20,
            background:
              "linear-gradient(to top,rgba(44,44,44,0.88) 0%,rgba(44,44,44,0.12) 50%,transparent 100%)",
          }}
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.35 }}
        >
          <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-white/65 mb-1">
            {item.label}
          </p>
          <p className="font-display text-base font-medium text-white leading-snug">
            {item.name}
          </p>
        </motion.div>

        <motion.div
          className="absolute bottom-0 left-0 right-0 h-[3px]"
          style={{
            borderRadius: "0 0 20px 20px",
            background: "linear-gradient(90deg,#C9A84C,#E8D5A3,#C9A84C)",
            transformOrigin: "left",
          }}
          initial={{ scaleX: 0 }}
          whileHover={{ scaleX: 1 }}
          transition={{ duration: 0.4 }}
        />
      </motion.div>
    </motion.div>
  );
}

function Lightbox({ item, onClose }) {
  useEffect(() => {
    const fn = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center p-6"
      style={{ background: "rgba(44,44,44,0.93)", backdropFilter: "blur(8px)" }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <motion.div
        initial={{ scale: 0.88, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.88, y: 20 }}
        transition={{ duration: 0.38, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="relative max-w-4xl w-full"
      >
        <img
          src={item.src.replace("w=800", "w=1400")}
          alt={item.name}
          className="w-full rounded-3xl object-cover"
          style={{ maxHeight: "82vh" }}
        />
        <div
          className="absolute bottom-0 left-0 right-0 p-7 rounded-b-3xl"
          style={{
            background: "linear-gradient(to top,rgba(0,0,0,0.8),transparent)",
          }}
        >
          <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-white/55 mb-1.5">
            {item.label}
          </p>
          <p className="font-display text-2xl font-medium text-white">
            {item.name}
          </p>
        </div>
        <motion.button
          onClick={onClose}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="absolute -top-4 -right-4 w-11 h-11 rounded-full bg-white flex items-center justify-center shadow-xl"
        >
          <X size={18} className="text-charcoal" />
        </motion.button>
      </motion.div>
    </motion.div>
  );
}

function StatBadge({ value, label, className, delay = 0 }) {
  return (
    <motion.div
      className={`absolute z-10 bg-white rounded-2xl px-5 py-3 shadow-xl border border-gold/20 hidden lg:block ${className}`}
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay }}
    >
      <div className="font-display text-xl font-semibold text-gold leading-none">
        {value}
      </div>
      <div className="font-sans text-[9px] tracking-[0.18em] uppercase text-warmgray mt-1">
        {label}
      </div>
    </motion.div>
  );
}

export default function GallerySection() {
  const [activeCat, setActiveCat] = useState("all");
  const [lightbox, setLightbox] = useState(null);

  const filtered =
    activeCat === "all"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((i) => i.cat === activeCat);

  return (
    <>
      <section
        id="gallery"
        className="relative py-24 lg:py-32 overflow-hidden"
        style={{
          background:
            "linear-gradient(160deg,#FBF7F0 0%,#F7EED3 42%,#FBF7F0 85%)",
        }}
      >
        {/* Dot-grid */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle,rgba(201,168,76,0.13) 1px,transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />

        {/* Floating stats */}
        {/* <StatBadge
          value="500+"
          label="Events Done"
          className="top-36 right-[4%]"
          delay={0.5}
        />
        <StatBadge
          value="8 yrs"
          label="Experience"
          className="top-64 left-[3%]"
          delay={1.3}
        />
        <StatBadge
          value="100%"
          label="Love Delivered"
          className="bottom-44 right-[5%]"
          delay={0.9}
        /> */}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-3 mb-5"
            >
              <span className="w-8 h-px bg-gold" />
              <span className="font-sans text-xs tracking-[0.22em] text-gold uppercase">
                Our Portfolio
              </span>
              <span className="w-8 h-px bg-gold" />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display text-5xl sm:text-6xl lg:text-7xl font-semibold text-charcoal leading-[1.06] mb-5"
            >
              Moments We've
              <br />
              <em
                className="italic"
                style={{
                  background:
                    "linear-gradient(135deg,#C9A84C 0%,#E8D5A3 50%,#A8832A 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Brought to Life
              </em>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-body text-lg text-warmgray max-w-md mx-auto leading-relaxed italic"
            >
              Every photograph tells the story of a day someone will cherish
              forever.
            </motion.p>
          </div>

          {/* Category filter */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="flex flex-wrap justify-center gap-2 mb-14"
          >
            {CATEGORIES.map((cat) => (
              <motion.button
                key={cat.id}
                onClick={() => setActiveCat(cat.id)}
                whileHover={{ scale: 1.04, y: -1 }}
                whileTap={{ scale: 0.97 }}
                className={`font-sans text-xs font-medium px-5 py-2.5 rounded-full border transition-all duration-300 ${
                  activeCat === cat.id
                    ? "bg-charcoal text-cream border-charcoal shadow-md"
                    : "bg-white/70 text-warmgray border-champagne hover:border-gold/50 hover:text-charcoal"
                }`}
              >
                {cat.label}
              </motion.button>
            ))}
          </motion.div>

          {/* Masonry collage */}
          <div
            className="columns-2 sm:columns-3 lg:columns-4"
            style={{ columnGap: 16 }}
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((item, i) => (
                <div key={item.id} className="break-inside-avoid mb-4">
                  <GalleryCard item={item} index={i} onClick={setLightbox} />
                </div>
              ))}
            </AnimatePresence>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-16 text-center"
          >
            <p className="font-body text-lg text-warmgray italic mb-6">
              Want to see your event here? Let's make it happen.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 bg-charcoal text-cream font-sans text-sm font-medium px-8 py-4 rounded-full hover:bg-gold transition-all duration-300 shadow-md hover:shadow-xl"
            >
              Book Your Event <ArrowRight size={15} />
            </motion.a>
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {lightbox && (
          <Lightbox item={lightbox} onClose={() => setLightbox(null)} />
        )}
      </AnimatePresence>
    </>
  );
}
