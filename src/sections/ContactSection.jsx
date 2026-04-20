import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, Send, CheckCircle } from "lucide-react";
import SectionHeader from "../components/SectionHeader";
import ScrollReveal from "../components/ScrollReveal";
import { services } from "../data/siteData";
import { Instagram } from "lucide-react";
import { API } from "../api/api";

const contactInfo = [
  {
    icon: Phone,
    label: "Call / WhatsApp",
    value: "+91 9099998886",
    href: "tel:+91 9099998886",
    color: "#8FAE88",
  },
  {
    icon: Mail,
    label: "Email Us",
    value: "11.11butterflyevents@gmail.com",
    href: "mailto:11.11butterflyevents@gmail.com",
    color: "#C9A84C",
  },
  {
    icon: Instagram,
    label: "Follow Us",
    value: "@11.11_butterfly_events",
    href: "#",
    color: "#E8A0AF",
  },
];

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    date: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormState((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setLoading(true);
  //   await new Promise((r) => setTimeout(r, 1500));
  //   setLoading(false);
  //   setSubmitted(true);
  // };

  //New handleSubmit with API call
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      //  Map <frontend fields , backend fields >
      const payload = {
        name: formState.name,
        phone: formState.phone,
        email: formState.email,
        service: formState.service,
        eventDate: formState.date || null, // backend expects null if no date provided
        message: formState.message,
      };

      const response = await API.post("/enquiries", payload);

      console.log("Saved:", response.data);

      setSubmitted(true);
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to submit enquiry. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Get in Touch"
          title="Let's Plan Your"
          titleHighlight="Dream Event"
          subtitle="Tell us about your vision and we'll bring it to life. Every celebration starts with a conversation."
        />

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left Info */}
          <div className="lg:col-span-2 space-y-8">
            <ScrollReveal direction="right">
              <div className="bg-white rounded-3xl p-8 border border-champagne shadow-sm">
                <h3 className="font-display text-2xl font-semibold text-charcoal mb-6">
                  Let's Connect
                </h3>
                <div className="space-y-5">
                  {contactInfo.map((info) => (
                    <motion.a
                      key={info.label}
                      href={info.href}
                      whileHover={{ x: 4 }}
                      className="flex items-center gap-4 group"
                    >
                      <div
                        className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                        style={{ backgroundColor: `${info.color}25` }}
                      >
                        <info.icon size={18} style={{ color: info.color }} />
                      </div>
                      <div>
                        <div className="font-sans text-xs text-warmgray">
                          {info.label}
                        </div>
                        <div className="font-sans text-sm font-medium text-charcoal group-hover:text-gold transition-colors">
                          {info.value}
                        </div>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.1}>
              <div className="bg-charcoal rounded-3xl p-8 text-cream relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-gold/10 blur-2xl" />
                <div className="relative z-10">
                  <div className="text-3xl mb-3">💌</div>
                  <h4 className="font-display text-xl font-semibold mb-2">
                    Quick Response Promise
                  </h4>
                  <p className="font-body text-cream/70 text-sm leading-relaxed">
                    We respond to all enquiries within 2 hours. Your dream event
                    is our priority.
                  </p>
                  <div className="mt-5 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-sage animate-pulse" />
                    <span className="font-sans text-xs text-cream/60">
                      Available Mon–Sun, 9am–9pm
                    </span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Form */}
          <ScrollReveal className="lg:col-span-3" direction="left">
            <div className="bg-white rounded-3xl p-8 lg:p-10 border border-champagne shadow-sm">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <CheckCircle size={56} className="text-sage mx-auto mb-4" />
                  <h3 className="font-display text-2xl font-semibold text-charcoal mb-2">
                    We've Got Your Message!
                  </h3>
                  <p className="font-body text-warmgray">
                    Thank you, {formState.name}! We'll reach out to you within 2
                    hours to discuss your event.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormState({
                        name: "",
                        phone: "",
                        email: "",
                        service: "",
                        date: "",
                        message: "",
                      });
                    }}
                    className="mt-6 font-sans text-sm text-gold hover:underline"
                  >
                    Submit another enquiry
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="font-display text-2xl font-semibold text-charcoal mb-6">
                    Book a Consultation
                  </h3>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="font-sans text-xs text-warmgray uppercase tracking-wider block mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formState.name}
                        onChange={handleChange}
                        placeholder="e.g. Priya Sharma"
                        className="w-full bg-cream border border-champagne rounded-xl px-4 py-3 font-sans text-sm text-charcoal placeholder:text-warmgray/50 focus:outline-none focus:border-gold transition-colors"
                      />
                    </div>
                    <div>
                      <label className="font-sans text-xs text-warmgray uppercase tracking-wider block mb-1.5">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formState.phone}
                        onChange={handleChange}
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full bg-cream border border-champagne rounded-xl px-4 py-3 font-sans text-sm text-charcoal placeholder:text-warmgray/50 focus:outline-none focus:border-gold transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="font-sans text-xs text-warmgray uppercase tracking-wider block mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        className="w-full bg-cream border border-champagne rounded-xl px-4 py-3 font-sans text-sm text-charcoal placeholder:text-warmgray/50 focus:outline-none focus:border-gold transition-colors"
                      />
                    </div>
                    <div>
                      <label className="font-sans text-xs text-warmgray uppercase tracking-wider block mb-1.5">
                        Event Date
                      </label>
                      <input
                        type="date"
                        name="date"
                        value={formState.date}
                        onChange={handleChange}
                        className="w-full bg-cream border border-champagne rounded-xl px-4 py-3 font-sans text-sm text-charcoal focus:outline-none focus:border-gold transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="font-sans text-xs text-warmgray uppercase tracking-wider block mb-1.5">
                      Service Interested In *
                    </label>
                    <select
                      name="service"
                      required
                      value={formState.service}
                      onChange={handleChange}
                      className="w-full bg-cream border border-champagne rounded-xl px-4 py-3 font-sans text-sm text-charcoal focus:outline-none focus:border-gold transition-colors"
                    >
                      <option value="">Select a service…</option>
                      {services.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                      <option value="Multiple Services">
                        Multiple Services
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="font-sans text-xs text-warmgray uppercase tracking-wider block mb-1.5">
                      Tell Us About Your Dream Event
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formState.message}
                      onChange={handleChange}
                      placeholder="Share your vision, theme preferences, guest count, budget range…"
                      className="w-full bg-cream border border-champagne rounded-xl px-4 py-3 font-sans text-sm text-charcoal placeholder:text-warmgray/50 focus:outline-none focus:border-gold transition-colors resize-none"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={loading}
                    whileHover={{ scale: 1.02, y: -1 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full flex items-center justify-center gap-2 bg-charcoal text-cream font-sans text-sm font-medium py-4 rounded-xl hover:bg-gold transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          className="w-4 h-4 border-2 border-cream/30 border-t-cream rounded-full"
                        />
                        Sending…
                      </>
                    ) : (
                      <>
                        Send Enquiry
                        <Send size={15} />
                      </>
                    )}
                  </motion.button>

                  <p className="font-sans text-xs text-warmgray text-center">
                    We respect your privacy. Your information is never shared.
                  </p>
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
