import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeader from "../components/SectionHeader";
import ScrollReveal from "../components/ScrollReveal";
import { galleryItems } from "../data/siteData";

const categories = ["All", "Wedding", "Floral", "Birthday", "Baby Shower", "Surprise", "Bridal"];

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <section id="gallery" className="py-24 lg:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Gallery"
          title="Moments We've"
          titleHighlight="Created"
          subtitle="A glimpse into the celebrations we've brought to life — each one unique, each one unforgettable."
        />

        {/* Filter tabs */}
        <ScrollReveal>
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <motion.button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className={`font-sans text-sm px-5 py-2 rounded-full transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-charcoal text-cream shadow-md"
                    : "bg-white text-warmgray border border-champagne hover:border-gold/40 hover:text-charcoal"
                }`}
              >
                {cat}
              </motion.button>
            ))}
          </div>
        </ScrollReveal>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 md:grid-cols-3 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((item, i) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                whileHover={{ scale: 1.02 }}
                className={`group relative overflow-hidden rounded-2xl cursor-pointer ${
                  item.aspect === "tall"
                    ? "row-span-2"
                    : item.aspect === "wide"
                    ? "col-span-2 md:col-span-1"
                    : ""
                }`}
                style={{ minHeight: item.aspect === "tall" ? "400px" : "200px" }}
              >
                {/* Gradient placeholder (replace with real images) */}
                <div
                  className={`w-full h-full min-h-[200px] bg-gradient-to-br ${item.gradient} flex items-center justify-center relative`}
                >
                  <div className="text-center">
                    <div className="text-5xl mb-3 opacity-60">{item.emoji}</div>
                    <div className="font-sans text-xs tracking-widest uppercase text-warmgray opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {item.category}
                    </div>
                  </div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/30 transition-all duration-500 flex items-end p-5">
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      whileHover={{ y: 0, opacity: 1 }}
                      className="opacity-0 group-hover:opacity-100 transition-all duration-300"
                    >
                      <span className="font-sans text-xs tracking-wider uppercase text-white/80 block mb-1">
                        {item.category}
                      </span>
                      <h4 className="font-display text-lg text-white font-medium">
                        {item.title}
                      </h4>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <ScrollReveal delay={0.2}>
          <div className="mt-12 text-center">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.04 }}
              className="inline-flex items-center gap-2 border border-charcoal text-charcoal font-sans text-sm px-7 py-3 rounded-full hover:bg-charcoal hover:text-cream transition-all duration-300"
            >
              View Full Portfolio
            </motion.a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
