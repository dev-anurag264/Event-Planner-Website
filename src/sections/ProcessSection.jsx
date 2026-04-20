import { motion } from "framer-motion";
import SectionHeader from "../components/SectionHeader";
import ScrollReveal from "../components/ScrollReveal";

const steps = [
  {
    number: "01",
    emoji: "💬",
    title: "Tell Us Your Vision",
    desc: "Share your ideas, theme preferences, and budget. We listen carefully to understand exactly what you dream of.",
    color: "#F2C4CE",
  },
  {
    number: "02",
    emoji: "🎨",
    title: "We Design & Plan",
    desc: "Our creative team crafts a personalised plan — from colour palettes to vendor coordination — tailored just for you.",
    color: "#C9A84C",
  },
  {
    number: "03",
    emoji: "✦",
    title: "We Set Everything Up",
    desc: "On the day of your event, we arrive early, handle every detail, and ensure everything is absolutely perfect.",
    color: "#8FAE88",
  },
  {
    number: "04",
    emoji: "🥂",
    title: "You Celebrate",
    desc: "Relax and enjoy your special day. We manage all the logistics so you can be fully present in every magical moment.",
    color: "#E8A0AF",
  },
];

export default function ProcessSection() {
  return (
    <section className="py-24 lg:py-32 bg-champagne/40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="How It Works"
          title="Your Event Journey"
          titleHighlight="Made Simple"
          subtitle="Four thoughtful steps from your first message to a flawlessly executed celebration."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-[3.5rem] left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

          {steps.map((step, i) => (
            <ScrollReveal key={step.number} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="relative bg-white rounded-3xl p-7 text-center border border-champagne shadow-sm hover:shadow-lg hover:border-gold/20 transition-all duration-400 group"
              >
                {/* Step number badge */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-5 relative z-10 group-hover:scale-110 transition-transform duration-300"
                  style={{ backgroundColor: `${step.color}30` }}
                >
                  {step.emoji}
                </div>

                <div className="font-sans text-xs tracking-[0.2em] text-warmgray/50 mb-2">
                  Step {step.number}
                </div>
                <h3 className="font-display text-lg font-semibold text-charcoal mb-3">
                  {step.title}
                </h3>
                <p className="font-body text-sm text-warmgray leading-relaxed">
                  {step.desc}
                </p>

                {/* Arrow connector for mobile */}
                {i < steps.length - 1 && (
                  <div className="lg:hidden mt-6 flex justify-center text-gold/40 text-xl">↓</div>
                )}
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
