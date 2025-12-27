# Hi-its-me
Hi there, <a href="https://chanakyalahiri.netlify.app//" target="_blank">Welcome</a> &lt;3

Powered by Tailwind (CDN, no heavy build step).  
Dark UI, soft orange glows, smooth scrolling, animated effects, skills/tooling rows, Formspree contact, and minified custom assets.

<p align="center">
  <img src="https://github.com/hashlahiri/Hi-its-me/blob/main/assets/screens/screen1.png" alt="Homepage hero preview" width="900">
</p>

## ✨ Features

- **Tailwind (Play CDN)**: zero tooling; just open `me.html`
- **Skills section** with grayscale → color + brand glow on hover
- **Sticky navbar** with smooth scroll & mobile menu
- Accessible colors, keyboard-navigable

## 🧱 Tech Stack

- HTML + Tailwind CSS (CDN)
- Local SVG icons (Devicon-style)
- Minified custom CSS/JS (`styles/style.css`, `js/main.js`)

## 📁 Project Structure (key files)

```
.
├── index.html          # main page (links to styles/style.css, js/main.js)
├── assets/             # images and SVG skill icons
├── styles/style.css    # custom styles (minified)
├── js/main.js          # scripts (menu toggle, year, contact form submit)
└── scripts/build.sh    # bundles a deployable /dist folder
```

## 🚀 Quick Start

1. Clone the repo
2. Open `index.html` in your browser
3. (Optional) Use VS Code **Live Server** for auto-reload

## 📦 Build for hosting

Creates a clean `dist/` with everything needed for static hosting.

```bash
chmod +x scripts/build.sh   # first time only
./scripts/build.sh
```

Upload the contents of `dist/` to your static host (Netlify, Vercel, Cloudflare Pages, S3+CDN, etc.).

## ✉️ Contact form (Formspree)

- `index.html` form `action` points to your Formspree endpoint.
- `js/main.js` posts to the form `action`; no extra config needed if you change the endpoint.
- Basic client-side validation: email format + 10+ char message.

---

## 🖼️ Screenshots

  <p align="center">
    <img src="https://github.com/hashlahiri/Hi-its-me/blob/main/assets/screens/screen1.png" alt="Homepage hero preview" width="900">
  </p>
  <p align="center">
    <img src="https://github.com/hashlahiri/Hi-its-me/blob/main/assets/screens/screen2.png" alt="Homepage hero preview" width="900">
  </p>
  <p align="center">
    <img src="https://github.com/hashlahiri/Hi-its-me/blob/main/assets/screens/screen3.png" alt="Homepage hero preview" width="900">
  </p>
  <p align="center">
    <img src="https://github.com/hashlahiri/Hi-its-me/blob/main/assets/screens/screen4.png" alt="Homepage hero preview" width="900">
  </p>

---

MIT © Chanakya Lahiri
