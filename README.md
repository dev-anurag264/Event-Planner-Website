# ✦ MomentsMagic — Event Planning Website

> A premium, production-ready event planning website built with **React + Vite + Tailwind CSS + Framer Motion**.

---

## 📸 Preview

> **Live Demo:** _(Add your Vercel / Netlify URL here once deployed)_

**What's inside:**
-  Cinematic 5-slide Hero Carousel with Ken-Burns zoom + thumbnail strip
-  7 Service Cards — Wedding, Floral, Surprise, Custom, Birthday, Bridal, Baby Shower
-  Floating Masonry Gallery with lightbox + category filters
-  4-Step Process Section
-  Testimonials Carousel with dot navigation
-  Contact Form with validation + success state
-  Fully responsive — Mobile, tablet, desktop
-  Floating WhatsApp button

---

## 🗂️ Project Structure

```
momentsmagic-frontend/
│
├── public/
│   └── images/
│       ├── gallery/          ← Your real event photos go here
│       │   ├── wedding-01.jpg
│       │   ├── floral-01.jpg
│       │   └── ...
│       └── hero/             ← Hero carousel photos
│           ├── hero-01.jpg
│           └── ...
│
├── src/
│   ├── components/
│   │   ├── Navbar.jsx             # Fixed nav, transparent over hero → white on scroll
│   │   ├── Footer.jsx             # Full footer + WhatsApp floating button
│   │   ├── ScrollReveal.jsx       # Scroll-triggered animation wrapper
│   │   └── SectionHeader.jsx      # Reusable gold eyebrow + display heading
│   │
│   ├── sections/
│   │   ├── HeroSection.jsx        # 5-slide cinematic carousel
│   │   ├── ServicesSection.jsx    # Service cards grid
│   │   ├── ProcessSection.jsx     # How it works steps
│   │   ├── GallerySection.jsx     # Masonry collage + lightbox
│   │   ├── AboutSection.jsx       # Brand story + stats
│   │   ├── TestimonialsSection.jsx # Client reviews carousel
│   │   ├── CTASection.jsx         # Call-to-action banner
│   │   └── ContactSection.jsx     # Enquiry form
│   │
│   ├── data/
│   │   └── siteData.js            # All text content (edit this file to customise)
│   │
│   ├── App.jsx                    # Assembles all sections
│   ├── main.jsx                   # React entry point
│   └── index.css                  # Tailwind + Google Fonts
│
├── tailwind.config.js             # Custom colour palette
├── vite.config.js
├── package.json
└── .gitignore
```

---

## 🚀 Getting Started Locally

### Prerequisites

- **Node.js v18+** — [Download](https://nodejs.org/)
- **npm** — comes with Node

### Steps

```bash
# 1. Clone the repository
git clone https://github.com/YOUR_USERNAME/momentsmagic-frontend.git
cd momentsmagic-frontend

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
# Open http://localhost:5173

# 4. Build for production
npm run build

# 5. Preview production build
npm run preview
```

---

## 🎨 Customising the Website

### Update Contact Details

Search and replace these values across the project:

| Find | Replace with |
|------|------|
| `+91 98765 43210` | Your phone number |
| `hello@momentsmagic.in` | Your email |
| `wa.me/919876543210` | `wa.me/91XXXXXXXXXX` (your WhatsApp) |
| `MomentsMagic` | Your business name |
| `Siliguri, West Bengal` | Your city |

### Change the Colour Palette

Open `tailwind.config.js`:

```js
colors: {
  cream:     '#FBF7F0',   // Page background
  gold:      '#C9A84C',   // Primary accent (headings, borders, highlights)
  charcoal:  '#2C2C2C',   // Dark buttons and text
  champagne: '#F7EED3',   // Light card borders
  warmgray:  '#7A7068',   // Body text
  blush:     '#F2C4CE',   // Soft pink accent
  rose:      '#E8A0AF',   // Medium pink
  sage:      '#8FAE88',   // Green accent
}
```

---

## 🖼️ Adding Your Event Photos

### Gallery Photos

**1. Put your photos in** `public/images/gallery/`

Recommended size: **800px wide**, JPG format, under 200KB each.

Use [Squoosh](https://squoosh.app/) to compress before uploading — it's free and browser-based.

**2. Edit** `src/sections/GallerySection.jsx` — update `GALLERY_ITEMS` at the top of the file:

```js
const GALLERY_ITEMS = [
  {
    id: 1,
    cat: "wedding",                        // Filter category
    src: "/images/gallery/wedding-01.jpg", // Path from public/ folder
    label: "Wedding",                      // Category shown in lightbox
    name: "Garden Ceremony",               // Title shown in lightbox
    span: "tall",     // "tall" = taller card, "normal" = square card
  },
  {
    id: 2,
    cat: "floral",
    src: "/images/gallery/floral-01.jpg",
    label: "Floral Décor",
    name: "Bloom Archway",
    span: "normal",
  },
  // Keep adding more...
];
```

**Category values:** `wedding` | `floral` | `birthday` | `baby` | `surprise`

**Tip:** Mix 2–3 `span: "tall"` cards among every 8–10 items for a natural collage feel.

### Hero Carousel Photos

Recommended size: **1800×1100px**, JPG, under 500KB each.

Edit `src/data/siteData.js` — update the `heroSlides` array:

```js
export const heroSlides = [
  {
    id: 1,
    image: "/images/hero/hero-01.jpg",
    category: "Wedding",
    headline: "Making Your",
    highlight: "Moments",
    subline: "Magical",
    tagline: "Exquisite weddings crafted with love and elegance.",
    accent: "#C9A84C",  // Colour of the CTA button on this slide
  },
  // Add up to 5 slides
];
```

---

## 🔗 Connecting to Spring Boot Backend

The contact form currently simulates a submit. To connect to your API:

Open `src/sections/ContactSection.jsx` and replace the `submit` function:

```js
const submit = async (e) => {
  e.preventDefault();
  setLoading(true);
  try {
    const res = await fetch("http://localhost:8080/api/enquiries", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name:      form.name,
        phone:     form.phone,
        email:     form.email,
        service:   form.service,
        eventDate: form.date || null,
        message:   form.message,
      }),
    });
    const data = await res.json();
    if (data.success) {
      setDone(true);
    } else {
      alert(data.message || "Something went wrong. Please try again.");
    }
  } catch (err) {
    alert("Could not connect. Please try again.");
  } finally {
    setLoading(false);
  }
};
```

In production, replace `http://localhost:8080` with your server URL.

---

## 📦 Tech Stack

| Technology | Purpose |
|---|---|
| React 19 | UI framework |
| Vite 8 | Build tool + dev server |
| Tailwind CSS 3 | Utility styling |
| Framer Motion 12 | Animations |
| Lucide React | Icons |

---

## 🌐 Deployment

### Vercel (Recommended — Free)

1. Push to GitHub (see guide below)
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your repo — framework preset **Vite** is auto-detected
4. Click Deploy — live in ~60 seconds
5. Your site gets a free `*.vercel.app` domain instantly

### Netlify (Also Free)

1. [netlify.com](https://netlify.com) → Add new site → Import from Git
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Deploy

---

## 📄 License

Built exclusively for Event Planners. Private and proprietary.