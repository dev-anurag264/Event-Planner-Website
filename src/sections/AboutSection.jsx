import { motion } from "framer-motion";
import SectionHeader from "../components/SectionHeader";
import ScrollReveal from "../components/ScrollReveal";
import { stats } from "../data/siteData";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Visual Side */}
          <ScrollReveal direction="right">
            <div className="relative">
              {/* Main card */}
              <div className="relative bg-gradient-to-br from-champagne to-blush/40 rounded-3xl p-12 text-center overflow-hidden">
                <div className="text-8xl mb-4">✦</div>
                <div className="font-display text-3xl font-semibold text-charcoal mb-2">
                  11:11 Butterfly Events
                </div>
                <div className="font-sans text-xs tracking-[0.3em] text-warmgray uppercase">
                  by Pallavi S.
                </div>
                {/* Decorative circles */}
                <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-gold/10 blur-xl" />
                <div className="absolute -bottom-8 -left-8 w-40 h-40 rounded-full bg-rose/20 blur-2xl" />
              </div>

              {/* Floating stat cards */}
              {stats.map((stat, i) => {
                const positions = [
                  "top-4 -left-6",
                  "top-4 -right-6",
                  "-bottom-6 left-8",
                  "-bottom-6 right-8",
                ];
                return (
                  <motion.div
                    key={stat.label}
                    className={`absolute ${positions[i]} bg-white rounded-2xl shadow-lg px-5 py-3 text-center border border-champagne`}
                    animate={{ y: [0, -6, 0] }}
                    transition={{
                      duration: 3 + i * 0.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.4,
                    }}
                  >
                    <div className="font-display text-2xl font-semibold text-gold">
                      {stat.value}
                    </div>
                    <div className="font-sans text-[10px] tracking-wider text-warmgray uppercase">
                      {stat.label}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </ScrollReveal>

          {/* Text Side */}
          <div>
            <ScrollReveal>
              <div className="inline-flex items-center gap-3 mb-5">
                <span className="w-8 h-px bg-gold" />
                <span className="font-sans text-xs tracking-[0.2em] text-gold uppercase">
                  Our Story
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h2 className="font-display text-4xl sm:text-5xl font-semibold text-charcoal leading-tight mb-6">
                Crafting Love &{" "}
                <em
                  className="italic"
                  style={{
                    background:
                      "linear-gradient(135deg, #C9A84C 0%, #A8832A 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Joy
                </em>{" "}
                with Every Detail
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="font-body text-lg text-warmgray leading-relaxed mb-5">
                Born from a passion for beautiful moments, MomentsMagic started
                as a small wedding décor studio in Siliguri. Today, we're one of
                the most trusted event planning companies across North Bengal —
                with over 500 celebrations under our belt.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <p className="font-body text-lg text-warmgray leading-relaxed mb-8">
                We believe every event deserves a touch of magic. Whether it's
                the subtle blush tones of a baby shower or the grandeur of a
                wedding mandap, we approach every event with the same devotion —
                yours.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.a
                  href="#services"
                  whileHover={{ scale: 1.04 }}
                  className="flex items-center justify-center gap-2 bg-charcoal text-cream font-sans text-sm px-7 py-3.5 rounded-full hover:bg-gold transition-all duration-300"
                >
                  Our Services
                </motion.a>
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.04 }}
                  className="flex items-center justify-center gap-2 border border-champagne text-charcoal font-sans text-sm px-7 py-3.5 rounded-full hover:border-gold transition-all duration-300"
                >
                  Get in Touch
                </motion.a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
