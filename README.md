# 🚀 Apexcify Technology — Official Website

<div align="center">

![Version](https://img.shields.io/badge/Version-1.0.0-E94560?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Active-16213E?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-0F3460?style=for-the-badge)
![Tech](https://img.shields.io/badge/Tech-HTML%2FCSS%2FJS-1A1A2E?style=for-the-badge)

*A modern, fully responsive company website built with pure HTML, CSS & JavaScript*

</div>

---

## 📋 Table of Contents

1. [Project Overview](#-project-overview)
2. [Features](#-features)
3. [Tech Stack](#-tech-stack)
4. [Project Structure](#-project-structure)
5. [Getting Started](#-getting-started)
6. [Pages & Sections](#-pages--sections)
7. [JavaScript Functionality](#-javascript-functionality)
8. [Responsive Design](#-responsive-design)
9. [Animations & Effects](#-animations--effects)
10. [Portfolio Filters](#-portfolio-filters)
11. [Browser Compatibility](#-browser-compatibility)
12. [Contributing](#-contributing)
13. [License](#-license)

---

## 🌐 Project Overview

This is the official website for **Apexcify Technology** — a modern, fully responsive web experience built using **HTML**, **CSS**, and **vanilla JavaScript**. The website showcases the company's services, portfolio, team, and vision with a sleek dark-themed interface, fluid animations, and interactive elements.

The website is designed to:

- 🎯 Represent Apexcify Technology's brand identity with a professional, high-impact design
- 💡 Provide an intuitive and engaging user experience across all devices
- ⚙️ Demonstrate technical excellence through smooth interactions and modern UI patterns
- 📣 Serve as a portfolio and marketing hub for the company's offerings

---

## ✨ Features

### 🧭 Navigation

- **Next / Previous buttons** for seamless browsing through portfolio items and pages
- **Sticky navbar** with smooth scroll behavior and background transition on scroll
- **Active link highlighting** based on the current scroll position using IntersectionObserver
- **Mobile hamburger menu** with animated open/close transition

### 🖼️ Lightbox View

- Click-to-expand image/portfolio lightbox overlay
- **Keyboard support** — Arrow keys to navigate, `Escape` to close
- **Backdrop blur** effect for a focused, immersive viewing experience
- **Touch/swipe** support for mobile devices
- Dynamic project details (title, tech stack, links) loaded per item

### 🎨 Hover Effects & Transitions

- Smooth CSS transitions on all interactive elements (`0.3s ease`)
- **Card lift effect** — `translateY(-8px)` + enhanced box-shadow on hover
- **Button ripple** animation on click
- **Image zoom-in** within `overflow: hidden` container on project card hover
- **Underline slide-in** effect on navigation links using `::after` pseudo-element

### 📱 Responsive Design

- **Mobile-first** approach using CSS Flexbox and Grid
- Breakpoints at `480px`, `768px`, `1024px`, and `1440px`
- **Fluid typography** using `clamp()` and viewport units (`vw`, `vh`)
- Collapsible navigation for small screens
- Optimized images and layout for all screen sizes

### 🎬 Bonus: Animations & Filters

- CSS keyframe animations for hero section entrance
- **Intersection Observer API** for scroll-triggered element animations
- **Portfolio filter buttons** to sort projects by category (Web, Mobile, AI, Design)
- **Counter animation** for stats section (clients, projects, years of experience)
- **Particle background** animation in the hero section
- **Loading screen** with branded animation on first visit

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| HTML5 | Latest | Structure & Semantic Markup |
| CSS3 | Latest | Styling, Animations, Transitions |
| JavaScript (ES6+) | Vanilla | Interactivity & DOM Manipulation |
| CSS Grid | — | Page Layout System |
| CSS Flexbox | — | Component Alignment |
| Intersection Observer API | — | Scroll-Triggered Animations |
| CSS Custom Properties | — | Theming & Design Tokens |

> **No frameworks. No build tools. No dependencies.** Pure web standards.

---

## 📁 Project Structure

```
apexcify-website/
│
├── index.html                  # Main homepage
├── about.html                  # About Us page
├── services.html               # Services listing
├── portfolio.html              # Portfolio with filters & lightbox
├── contact.html                # Contact form & map
│
├── css/
│   ├── style.css               # Global styles & CSS variables
│   ├── animations.css          # Keyframes & transitions
│   ├── responsive.css          # Media queries (mobile-first)
│   └── components.css          # Reusable component styles
│
├── js/
│   ├── main.js                 # Core app logic & initialization
│   ├── navigation.js           # Next/prev & navbar logic
│   ├── lightbox.js             # Lightbox functionality
│   ├── filters.js              # Portfolio filter system
│   └── animations.js           # Scroll & entrance animations
│
├── assets/
│   ├── images/                 # All image assets
│   ├── icons/                  # SVG icons & favicons
│   └── fonts/                  # Custom web fonts
│
└── README.md                   # This file
```

---

## ⚙️ Getting Started

### Prerequisites

No build tools or package managers required — just a modern web browser.

- A modern browser (Chrome 90+, Firefox 88+, Safari 14+, Edge 90+)
- A code editor (**VS Code** recommended)
- **Live Server** extension for local development *(optional but recommended)*

### Installation

**Step 1 — Clone the repository:**

```bash
git clone https://github.com/apexcify/apexcify-website.git
cd apexcify-website
```

**Step 2 — Open in your browser:**

```bash
# Option A: Open directly
open index.html

# Option B: Use VS Code Live Server
code .
# Then click 'Go Live' in the bottom status bar
```

**Step 3 — You're live!** No build step needed. ✅

---

## 📄 Pages & Sections

### 🏠 Homepage (`index.html`)
- **Hero Section** — Animated headline, CTA buttons, particle background
- **Stats Counter** — Animated numbers (clients, projects, years of experience)
- **Services Preview** — Card grid with hover effects
- **Why Choose Us** — Icon-driven feature highlights
- **Latest Portfolio** — Filtered preview of recent projects
- **Testimonials** — Auto-sliding testimonial carousel
- **Call to Action** — Contact prompt with animated background

### 👥 About Page (`about.html`)
- **Company Story** — Timeline layout of company milestones
- **Team Section** — Member cards with social links on hover
- **Core Values** — Animated icon cards
- **Mission & Vision** — Split-panel layout

### 🛎️ Services Page (`services.html`)
- **Service Categories** — Grid of service cards with icons and descriptions
- **Process Steps** — Numbered, animated step-by-step flow
- **Technology Stack** — Visual tech logos we work with

### 🖼️ Portfolio Page (`portfolio.html`)
- **Filter Bar** — Category filters (All, Web, Mobile, AI, Design)
- **Project Grid** — Masonry-style responsive grid layout
- **Lightbox** — Fullscreen project viewer with prev/next arrows
- **Project Details** — Title, tech used, live link, GitHub link

### 📬 Contact Page (`contact.html`)
- **Contact Form** — Validated form with animated input focus states
- **Office Location** — Embedded interactive map
- **Social Links** — Animated social media icon buttons
- **Direct Contact Info** — Phone, email, and physical address

---

## ⚡ JavaScript Functionality

### Navigation (`navigation.js`)

```javascript
// Next/Prev buttons navigate portfolio items programmatically
nextBtn.addEventListener('click', () => showItem(currentIndex + 1));
prevBtn.addEventListener('click', () => showItem(currentIndex - 1));

// Navbar scroll state
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 80);
});
```

- **Smooth Scroll** — Uses `scrollIntoView({ behavior: 'smooth' })` for all anchor links
- **Active Section Detection** — IntersectionObserver highlights the current nav link in real time

### Lightbox (`lightbox.js`)

```javascript
// Open lightbox on card click
card.addEventListener('click', () => openLightbox(projectData));

// Keyboard controls
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight') nextProject();
  if (e.key === 'ArrowLeft')  prevProject();
  if (e.key === 'Escape')     closeLightbox();
});
```

- **Backdrop click** closes the lightbox
- **Swipe gestures** supported on touch devices

### Filters (`filters.js`)

```javascript
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const category = btn.dataset.filter;
    items.forEach(item => {
      const match = category === 'all' || item.dataset.category === category;
      item.style.opacity = match ? '1' : '0';
      item.style.transform = match ? 'scale(1)' : 'scale(0.8)';
      item.style.pointerEvents = match ? 'auto' : 'none';
    });
  });
});
```

---

## 📱 Responsive Design

The website uses a **mobile-first** CSS strategy with the following breakpoints:

| Breakpoint | Width | Layout Changes |
|---|---|---|
| Mobile | `< 480px` | Single column, hamburger nav, stacked buttons |
| Tablet | `481px – 768px` | 2-column grid, compact padding, simplified hero |
| Small Desktop | `769px – 1024px` | 3-column grids, horizontal navbar |
| Desktop | `1025px – 1440px` | Full layout, all animations active |
| Large Screen | `> 1440px` | Max-width container (1400px), centered layout |

```css
/* Mobile-first base styles */
.grid { grid-template-columns: 1fr; }

@media (min-width: 768px) {
  .grid { grid-template-columns: repeat(2, 1fr); }
}

@media (min-width: 1024px) {
  .grid { grid-template-columns: repeat(3, 1fr); }
}
```

---

## 🎬 Animations & Effects

### CSS Keyframe Animations

| Animation | Effect | Used On |
|---|---|---|
| `fadeInUp` | Rise from below | Hero text, section headings |
| `fadeInLeft` | Slide from left | Left-panel content |
| `fadeInRight` | Slide from right | Right-panel content |
| `scaleIn` | Pop-in scale | Cards, icons, badges |
| `pulse` | Breathing glow | CTA buttons |
| `float` | Gentle levitation | Hero graphic element |
| `spin` | Full rotation | Loading screen spinner |

### Scroll-Triggered Animations

All section animations trigger via **IntersectionObserver**. Elements begin invisible and animate in when entering the viewport:

```css
.animate {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.animate.visible {
  opacity: 1;
  transform: translateY(0);
}
```

### Hover Transitions

```css
.card {
  transition: all 0.3s ease;
}
.card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(233, 69, 96, 0.2);
}
```

---

## 🔍 Portfolio Filters

The portfolio page includes a dynamic filter system with these categories:

| Filter | Description |
|---|---|
| **All** | Displays every portfolio item |
| **Web Development** | Websites, web apps, e-commerce platforms |
| **Mobile Apps** | iOS and Android application projects |
| **AI / ML** | Artificial intelligence and data science work |
| **UI/UX Design** | Interface and user experience design |

Filtering is handled via `data-category` attributes on each portfolio card. Items animate out with `opacity: 0` and `scale(0.8)` rather than `display: none` to ensure smooth transitions.

---

## 🌐 Browser Compatibility

| Browser | Support |
|---|---|
| Chrome 90+ | ✅ Full support |
| Firefox 88+ | ✅ Full support |
| Safari 14+ | ✅ Full support |
| Edge 90+ | ✅ Full support |
| Opera 76+ | ✅ Full support |
| Internet Explorer | ❌ Not supported |

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. **Fork** the repository
2. **Create a branch** — `git checkout -b feature/your-feature-name`
3. **Commit changes** — `git commit -m "Add: your feature description"`
4. **Push to branch** — `git push origin feature/your-feature-name`
5. **Open a Pull Request** and describe what you changed and why

Please make sure:
- All pages remain fully responsive
- Code follows the existing naming and formatting conventions
- Animations don't break on reduced-motion settings (`prefers-reduced-motion`)

---

## 📄 License

This project is licensed under the **MIT License**.

```
MIT License

Copyright (c) 2025 Apexcify Technology

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
```

---

<div align="center">

**Built with ❤️ by the Apexcify Technology Team**

🌐 [www.apexcify.com](https://www.apexcify.com) · 📧 info@apexcify.com · 📞 +92 300 000 0000

*Karachi, Pakistan*

</div>
