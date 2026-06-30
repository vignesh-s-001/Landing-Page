# TechNova Solutions — Landing Page

A modern, responsive company landing page for **TechNova Solutions**, a fictional technology company. Built with **Next.js 15**, **TypeScript**, **Tailwind CSS**, and **Framer Motion** as a Frontend Developer Technical Assessment.

[![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?logo=typescript)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?logo=tailwind-css)](https://tailwindcss.com)
[![Framer Motion](https://img.shields.io/badge/Framer-Motion-0055FF?logo=framer)](https://www.framer.com/motion/)

---

## 🌟 Live Demo

> **Live URL:** `[Add your deployment URL here]`  
> **GitHub:** `[Add your repository URL here]`

---

## ✨ Features

### Core Sections
| Section | Description |
|---------|-------------|
| 🦸 **Hero** | Full-screen with animated stats, gradient headings, CTA buttons, scroll indicator |
| 🏢 **About** | Company overview, mission & vision cards, 6 feature cards |
| ⚙️ **Services** | 6 service cards (Web, Mobile, UI/UX, Cloud, AI, Marketing) with hover effects |
| 📝 **Blog** | 6 blog cards with featured images, categories, author info |
| 💬 **Testimonials** | 3-column grid on desktop, animated carousel on mobile |
| 📞 **Contact** | Form with full client-side validation, contact info sidebar |
| 🦶 **Footer** | Newsletter, nav links, social media, copyright |

### Bonus Features (All Implemented ✅)
- 🌙 **Dark Mode** — Light/Dark theme toggle with localStorage persistence and OS preference detection
- 🔗 **Dynamic Blog Pages** — `/blog/[slug]` with `generateStaticParams` and per-post metadata
- 🎬 **Framer Motion Animations** — Scroll-triggered reveals, staggered cards, page transitions, carousel

---

## 🛠 Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 + custom glassmorphism design system
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Fonts:** Poppins + Open Sans (Google Fonts)
- **Images:** Next.js Image component (optimized)

---

## 📁 Project Structure

```
technova-solutions/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with SEO metadata
│   │   ├── page.tsx            # Home page (all sections)
│   │   ├── globals.css         # Design system + utilities
│   │   └── blog/
│   │       └── [slug]/
│   │           └── page.tsx    # Dynamic blog post pages
│   ├── components/
│   │   ├── Navbar.tsx          # Responsive navbar with dark mode toggle
│   │   ├── Hero.tsx            # Hero section
│   │   ├── About.tsx           # About section
│   │   ├── Services.tsx        # Services section
│   │   ├── Blog.tsx            # Blog listing section
│   │   ├── Testimonials.tsx    # Testimonials section
│   │   ├── ContactForm.tsx     # Contact form with validation
│   │   ├── Footer.tsx          # Footer
│   │   └── ThemeProvider.tsx   # Dark/light mode context
│   └── data/
│       └── blogPosts.ts        # Local blog post data (JSON-like)
├── public/                     # Static assets
├── next.config.ts              # Next.js config (image domains)
├── tailwind.config.ts          # Tailwind config
├── tsconfig.json               # TypeScript config
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** v18+ ([Download](https://nodejs.org))
- **npm** v9+ (comes with Node.js)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/YOUR_USERNAME/technova-solutions.git
   cd technova-solutions
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   ```
   http://localhost:3000
   ```

### Production Build

```bash
npm run build
npm run start
```

---

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and import your repository
3. Click **Deploy** — Vercel auto-detects Next.js configuration
4. Your site will be live at `https://your-project.vercel.app`

### Deploy to Netlify

1. Run `npm run build`
2. Import repository at [netlify.com](https://netlify.com)
3. Set build command: `npm run build`
4. Set publish directory: `.next`
5. Add environment variable: `NODE_VERSION=18`

---

## 📊 SEO Implementation

- ✅ Page title and meta description via Next.js Metadata API
- ✅ Open Graph tags (title, description, image)
- ✅ Twitter Card tags
- ✅ Per-page metadata via `generateMetadata` on blog routes
- ✅ Semantic HTML5 elements (`main`, `article`, `section`, `nav`, `footer`)
- ✅ Proper heading hierarchy (single `h1` per page)
- ✅ Alt text on all images
- ✅ ARIA labels on all interactive elements

---

## 🎨 Design System

Built with a **Glassmorphism** aesthetic:

| Token | Value | Purpose |
|-------|-------|---------|
| Primary | `#6366F1` | Indigo — brand color |
| Secondary | `#818CF8` | Light indigo |
| Accent/CTA | `#059669` | Emerald — call to action |
| Background | `#F5F3FF` | Light lavender |
| Foreground | `#1E1B4B` | Deep navy |
| Heading Font | Poppins | Bold, modern |
| Body Font | Open Sans | Clean, readable |

---

## ♿ Accessibility

- Focus states on all interactive elements
- ARIA labels and roles
- `aria-required` and `aria-describedby` on form fields
- Error messages with `role="alert"` for screen readers
- `prefers-reduced-motion` respected
- Semantic HTML throughout

---

## 📝 Git Commit History

```
Initial commit — Next.js project setup
feat: Add Navbar with dark mode toggle and mobile menu
feat: Add Hero section with animated stats and CTA
feat: Add About section with mission/vision cards
feat: Add Services section with 6 service cards
feat: Add Blog section with 6 posts
feat: Add Testimonials section with carousel
feat: Add ContactForm with client-side validation
feat: Add Footer with newsletter and social links
feat: Add dynamic blog routes /blog/[slug]
feat: Add SEO metadata and Open Graph tags
feat: Add dark mode theme toggle
feat: Deployment completed
```

---

## 📄 License

MIT License — free to use for learning and assessment purposes.

---

*Built by [Your Name] as part of the Frontend Developer Technical Assessment.*