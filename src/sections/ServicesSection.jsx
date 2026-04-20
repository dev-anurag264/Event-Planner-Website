import { motion } from "framer-motion";
import { Check } from "lucide-react";
import SectionHeader from "../components/SectionHeader";
import ScrollReveal from "../components/ScrollReveal";
import { services } from "../data/siteData";

function ServiceCard({ service, index }) {
  return (
    <ScrollReveal delay={index * 0.08} direction="up">
      <motion.div
        whileHover={{ y: -8, scale: 1.01 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="group relative bg-white rounded-3xl p-7 shadow-sm hover:shadow-xl transition-all duration-500 border border-transparent hover:border-gold/20 overflow-hidden cursor-pointer h-full"
      >
        {/* Subtle bg on hover */}
        <div>
          <motion.img
            src={service.image}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>
        <div
          className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-50 transition-opacity duration-500 rounded-3xl`}
        />

        <div className="relative z-10">
          {/* Title */}
          <h3 className="font-display text-xl font-semibold text-charcoal mb-3 group-hover:text-charcoal transition-colors">
            {service.title}
          </h3>

          {/* Description */}
          <p className="font-body text-warmgray text-base leading-relaxed mb-5">
            {service.description}
          </p>

          {/* Features */}
          <div className="grid grid-cols-2 gap-1.5">
            {service.features.map((f) => (
              <div key={f} className="flex items-center gap-1.5">
                <Check
                  size={12}
                  style={{ color: service.accent }}
                  className="flex-shrink-0"
                />
                <span className="font-sans text-xs text-warmgray">{f}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <motion.a
            href="#contact"
            whileHover={{ x: 4 }}
            className="inline-flex items-center gap-1.5 mt-6 font-sans text-sm font-medium transition-colors duration-300"
            style={{ color: service.accent }}
          >
            Learn more →
          </motion.a>
        </div>
      </motion.div>
    </ScrollReveal>
  );
}

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Our Services"
          title="Everything You Need for"
          titleHighlight="Perfect Events"
          subtitle="From floral dreams to full-scale weddings — we handle every detail so you can simply enjoy your special day."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <ScrollReveal delay={0.3}>
          <div className="mt-16 text-center">
            <p className="font-body text-warmgray mb-6">
              Not sure which service you need? Let's talk and craft the perfect
              package for you.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 bg-charcoal text-cream font-sans text-sm font-medium px-8 py-4 rounded-full hover:bg-gold transition-all duration-300"
            >
              Get a Custom Quote
            </motion.a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
