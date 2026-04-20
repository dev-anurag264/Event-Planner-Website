import { motion } from "framer-motion";
import { Instagram, Facebook, Youtube, Heart } from "lucide-react";
import { services } from "../data/siteData";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "About Us", href: "#about" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { icon: Instagram, label: "Instagram", href: "#", color: "#E1306C" },
  { icon: Facebook, label: "Facebook", href: "#", color: "#1877F2" },
  { icon: Youtube, label: "YouTube", href: "#", color: "#FF0000" },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 py-16 border-b border-white/10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-gold text-xl">✦</span>
              <div>
                <div className="font-display font-semibold text-lg text-cream leading-none">
                  11<span className="text-gold">:11</span>
                </div>
                <div className="font-sans text-[9px] tracking-[0.2em] text-cream/50 uppercase">
                  Butterfly Events
                </div>
              </div>
            </div>
            <p className="font-body text-sm text-cream/60 leading-relaxed mb-5">
              Crafting beautiful memories and magical moments. Your dream event,
              our passion.
            </p>
            <div className="flex gap-3">
              {socials.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  whileHover={{ scale: 1.15, y: -2 }}
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                  aria-label={s.label}
                >
                  <s.icon size={16} className="text-cream/80" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-sans text-xs tracking-[0.2em] uppercase text-gold mb-5">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <motion.a
                    href={link.href}
                    whileHover={{ x: 4 }}
                    className="font-sans text-sm text-cream/60 hover:text-gold transition-colors inline-flex items-center gap-1.5"
                  >
                    <span className="text-gold/40 text-xs">›</span>
                    {link.label}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-sans text-xs tracking-[0.2em] uppercase text-gold mb-5">
              Our Services
            </h4>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s.id}>
                  <motion.a
                    href="#services"
                    whileHover={{ x: 4 }}
                    className="font-sans text-sm text-cream/60 hover:text-gold transition-colors inline-flex items-center gap-1.5"
                  >
                    <span className="text-xs">{s.icon}</span>
                    {s.title}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-sans text-xs tracking-[0.2em] uppercase text-gold mb-5">
              Get in Touch
            </h4>
            <div className="space-y-4">
              <div>
                <div className="font-sans text-xs text-cream/40 mb-0.5">
                  Phone / WhatsApp
                </div>
                <a
                  href="tel:+919876543210"
                  className="font-sans text-sm text-cream/70 hover:text-gold transition-colors"
                >
                  +91 7004421182
                </a>
              </div>
              <div>
                <div className="font-sans text-xs text-cream/40 mb-0.5">
                  Email
                </div>
                <a
                  href="mailto:ask@1111ButterflyEvents.in"
                  className="font-sans text-sm text-cream/70 hover:text-gold transition-colors"
                >
                  ask@1111ButterflyEvents.in
                </a>
              </div>
              <div>
                <div className="font-sans text-xs text-cream/40 mb-0.5">
                  Location
                </div>
                <p className="font-sans text-sm text-cream/70">
                  Whitefield, Bengaluru, India
                </p>
              </div>
              <div>
                <div className="font-sans text-xs text-cream/40 mb-0.5">
                  Hours
                </div>
                <p className="font-sans text-sm text-cream/70">
                  Mon–Sun: 9am – 9pm
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-center">
          <p className="font-sans text-xs text-cream/40">
            © {new Date().getFullYear()} 11:11 Butterfly Events. All rights
            reserved.
          </p>
          <p className="font-sans text-xs text-cream/40 flex items-center gap-1">
            Made with <Heart size={11} fill="#E8A0AF" className="text-rose" />{" "}
            for every celebration
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              className="font-sans text-xs text-cream/40 hover:text-gold transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="font-sans text-xs text-cream/40 hover:text-gold transition-colors"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
