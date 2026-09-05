# Thiranex Task 1 — HTML5 Semantic Structure & Accessibility

A professional multi-page personal portfolio for **Sathya M**, Web Development Intern at Thiranex. Built adhering strictly to modern **W3C HTML5 semantic standards**, **WCAG 2.1 AA/AAA accessibility guidelines**, and **SEO best practices**.

---

## 🌟 Features

- **Semantic HTML5 Landmark Architecture**: Structured using native `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<address>`, and `<footer>` elements without redundant `<div>` containers.
- **Accessibility First (WCAG 2.1 AAA Compliant)**:
  - Functional skip link as the first focusable DOM element on every page.
  - Full keyboard tab navigation (`Tab`, `Shift+Tab`, `Enter`, `Space`) with explicit 3px `:focus-visible` ring indicators (`#7C3AED`).
  - High-contrast color palette ($>7:1$ for primary text, $>4.5:1$ for muted text).
  - Explicit `<label>` mapping, `aria-describedby` instructions, native `required` attributes, and `aria-hidden="true"` visual indicators.
  - Live status region (`role="status"`, `aria-live="polite"`, `tabindex="-1"`) for screen-reader form status announcements.
  - Support for `@media (prefers-reduced-motion: reduce)`.
- **Targeted Lighthouse Optimizations**: Engineered to achieve **100 Lighthouse Accessibility** and **100 Lighthouse SEO** scores.
- **Zero-Framework Performance**: Pure HTML5, modular CSS3 custom properties (CSS design system), and lightweight vanilla JavaScript. No external dependencies, heavy JS bundles, or third-party UI libraries.
- **100% Mobile Responsive Layout**: Adapts gracefully across device breakpoints (320px, 375px, 430px, 768px, 1024px, 1440px+).

---

## 🛠️ Technology Stack

- **HTML5**: Semantic sectioning, landmark roles, accessible form controls, structural hierarchy.
- **CSS3**: Custom properties (CSS tokens), CSS Grid, Flexbox, fluid typography, media queries.
- **Vanilla JavaScript**: Lightweight DOM manipulation, client-side validation, accessibility focus management.

---

## 📂 Project Structure

```
Task1/
├── index.html          # Home Page (Hero, Profile Summary, Core Skills, Featured Projects, CTA)
├── about.html          # About Page (Development Approach, Values Aside, Learning Focus)
├── projects.html       # Projects Page (Detailed Project Articles with unique anchors & tech tags)
├── contact.html        # Contact Page (Semantic Address block, Accessible Contact Form, ARIA status)
├── assets/
│   ├── css/
│   │   └── style.css   # Central design system, tokens, responsive layout, focus rings
│   ├── js/
│   │   └── main.js     # Accessible form validation & screen reader focus notification script
│   └── images/         # Asset directory
└── README.md           # Comprehensive technical documentation & evaluation guide
```

---

## ♿ Accessibility Implementation Details

1. **Semantic Landmarks & ARIA**:
   - Primary navigation uses `<nav aria-label="Primary navigation">`.
   - Footer navigation uses `<nav aria-label="Footer navigation">`.
   - Active navigation items use `aria-current="page"`.
   - Decorative elements and required stars use `aria-hidden="true"`.
2. **Keyboard Navigation & Focus Control**:
   - Zero positive `tabindex` values.
   - Logical tab flow matching visual page hierarchy.
   - Visible 3px purple focus outline with 3px offset (`:focus-visible`).
3. **Accessible Contact Form**:
   - Direct `<label for="...">` linking for all inputs.
   - `aria-describedby` connecting fields to explicit help text (`<p id="*-help">`) and error messages (`<p id="*-error">`).
   - JavaScript validation sets `aria-invalid="true"` on invalid fields and shifts focus to `#form-status` (`role="status"`, `aria-live="polite"`).

---

## 🚀 SEO Implementation Details

- Unique `<title>` and `<meta name="description">` on every page.
- Semantic HTML heading structure: exact single `<h1>` per page with linear `<h2>` $\rightarrow$ `<h3>` descent.
- Author tag (`<meta name="author" content="Sathya M">`) and robots instruction (`<meta name="robots" content="index, follow">`).
- Open Graph protocol (`og:title`, `og:description`, `og:type`, `og:url`).
- Canonical `<link rel="canonical" href="...">` tag on every page with clear code comments for live deployment replacement.
- Descriptive link text (e.g. "View project details", "Contact Sathya") avoiding non-descriptive phrases like "click here".

---

## 💻 How to Run Locally

You can serve the static files using any local web server.

### Option 1: Python Built-in HTTP Server (Recommended)
Open a terminal in the project directory (`Task1/`) and run:

```bash
# Python 3
python3 -m http.server 8000
```
Then navigate to `http://localhost:8000` in your web browser.

### Option 2: Node.js `serve` or `npx http-server`
```bash
npx http-server ./ -p 8000
```

---

## 🔍 How to Test with Google Lighthouse

1. Open Chrome (or Chromium-based browser) and navigate to `http://localhost:8000`.
2. Open **Developer Tools** (`F12` or `Cmd + Option + I` on macOS).
3. Select the **Lighthouse** tab.
4. Select the categories:
   - ✅ **Accessibility**
   - ✅ **SEO**
   - ✅ **Best Practices**
5. Choose device mode (**Mobile** or **Desktop**).
6. Click **Analyze page load**.
7. Confirm 100/100 scores across Accessibility and SEO.

---

## 🌐 Deployment Instructions

To deploy this static portfolio to production:

### Deploying to Netlify / Vercel / GitHub Pages
1. Push the project repository to GitHub or drag-and-drop the `Task1/` directory into Netlify.
2. Build command: None required (static site).
3. Publish directory: `./` or root folder.
4. **Post-Deployment Step**:
   - Open each `.html` file.
   - Replace the placeholder canonical link:
     ```html
     <!-- REPLACE THIS CANONICAL URL WITH YOUR LIVE DOMAIN AFTER DEPLOYMENT -->
     <link rel="canonical" href="https://your-domain.com/index.html">
     ```

---

## ✅ Internship Submission Checklist

- [x] Four pages created (`index.html`, `about.html`, `projects.html`, `contact.html`).
- [x] Full HTML5 semantic landmark structure (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<address>`, `<footer>`).
- [x] Accessible navigation with `aria-current="page"` and `aria-label`.
- [x] Skip link implemented as first focusable element on all pages.
- [x] High-contrast WCAG AAA color palette and visible `:focus-visible` focus rings.
- [x] Contact form with direct `<label>` links, `autocomplete`, `inputmode`, `aria-describedby`, and `role="status"` dynamic live messaging.
- [x] Vanilla JS form validation with clear non-backend confirmation notice.
- [x] Complete SEO metadata (title, description, author, robots, Open Graph, canonical links).
- [x] 100% mobile responsive from 320px to 1440px+.
- [x] `@media (prefers-reduced-motion: reduce)` media query support.
