import ScrollReveal from "./ScrollReveal";

export default function SectionHeader({ eyebrow, title, titleHighlight, subtitle }) {
  return (
    <div className="text-center mb-16">
      {eyebrow && (
        <ScrollReveal>
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-gold" />
            <span className="font-sans text-xs tracking-[0.2em] text-gold uppercase">{eyebrow}</span>
            <span className="w-8 h-px bg-gold" />
          </div>
        </ScrollReveal>
      )}
      <ScrollReveal delay={0.1}>
        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-charcoal leading-tight">
          {title}
          {titleHighlight && (
            <>
              {" "}
              <em className="italic" style={{
                background: "linear-gradient(135deg, #C9A84C 0%, #E8D5A3 50%, #A8832A 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                {titleHighlight}
              </em>
            </>
          )}
        </h2>
      </ScrollReveal>
      {subtitle && (
        <ScrollReveal delay={0.2}>
          <p className="mt-4 font-body text-lg text-warmgray max-w-xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </ScrollReveal>
      )}
    </div>
  );
}
