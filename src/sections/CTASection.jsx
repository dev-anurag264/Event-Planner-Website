import { motion } from "framer-motion";
import ScrollReveal from "../components/ScrollReveal";

export default function CTASection() {
  return (
    <section className="py-24 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <motion.div
            className="relative rounded-[2.5rem] overflow-hidden bg-charcoal text-center px-8 py-16 lg:py-20"
            whileHover={{ scale: 1.005 }}
            transition={{ duration: 0.4 }}
          >
            {/* Background decorations */}
            <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-gold/10 blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-rose/10 blur-3xl pointer-events-none" />
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: `radial-gradient(circle, #C9A84C 1px, transparent 1px)`,
                backgroundSize: "32px 32px",
              }}
            />

            {/* Floating emojis */}
            {["💍", "🌸", "✨", "🎂", "🍼", "🎀"].map((emoji, i) => (
              <motion.span
                key={i}
                className="absolute text-xl opacity-20 select-none pointer-events-none"
                style={{
                  left: `${8 + i * 15}%`,
                  top: i % 2 === 0 ? "15%" : "70%",
                }}
                animate={{ y: [0, -12, 0], rotate: [0, 8, -8, 0] }}
                transition={{
                  duration: 3.5 + i * 0.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.3,
                }}
              >
                {emoji}
              </motion.span>
            ))}

            <div className="relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6"
              >
                <span className="text-gold text-xs">✦</span>
                <span className="font-sans text-xs tracking-[0.2em] text-cream/70 uppercase">Your Event Awaits</span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                viewport={{ once: true }}
                className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-cream leading-tight mb-5"
              >
                Ready to Create
                <br />
                <span style={{
                  background: "linear-gradient(135deg, #C9A84C 0%, #E8D5A3 50%, #C9A84C 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}>
                  Something Magical?
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                viewport={{ once: true }}
                className="font-body text-lg text-cream/70 max-w-lg mx-auto mb-10"
              >
                Let's begin with a conversation. We'll help you visualise your dream event
                and turn it into something even more beautiful than you imagined.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
              >
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-2 bg-gold text-white font-sans text-sm font-medium px-8 py-4 rounded-full shadow-lg hover:shadow-xl hover:bg-lightgold hover:text-charcoal transition-all duration-300 min-w-[180px] justify-center"
                >
                  Book Your Event ✦
                </motion.a>
                <motion.a
                  href="https://wa.me/919876543210"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-cream font-sans text-sm font-medium px-8 py-4 rounded-full hover:bg-white/20 transition-all duration-300 min-w-[180px] justify-center"
                >
                  💬 Chat on WhatsApp
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
}
