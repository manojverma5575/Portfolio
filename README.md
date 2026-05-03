# Manoj Verma — Developer Portfolio

A modern, animated developer portfolio built with **Next.js 14 (App Router)**, **Tailwind CSS**, and **Framer Motion**.

## ✨ Features

- **Dark / Light mode** toggle (persisted in localStorage)
- **Framer Motion** scroll animations, hover effects, page transitions
- **Typing animation** on hero role
- **Fully responsive** — mobile-first design
- **Dynamic data** — all content served from `data/resume.json`
- **Resume download** from resume section
- **Contact form** with animated feedback

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── globals.css          # Design tokens, custom utilities
│   ├── layout.tsx           # Root layout + Google Fonts
│   └── page.tsx             # Main page assembling all sections
├── components/
│   ├── ui/
│   │   ├── ThemeProvider.tsx    # Dark/light context
│   │   ├── Navbar.tsx           # Sticky glassmorphism nav
│   │   ├── Footer.tsx           # Footer with social links
│   │   ├── ScrollProgress.tsx   # Top progress bar
│   │   └── SectionHeading.tsx   # Reusable heading component
│   └── sections/
│       ├── Hero.tsx             # Hero + typing animation + floating pills
│       ├── About.tsx            # Summary + animated skill badges
│       ├── Projects.tsx         # Featured cards + expandable grid
│       ├── Education.tsx        # Animated vertical timeline
│       ├── Certifications.tsx   # Certificate cards with icons
│       ├── Resume.tsx           # Dynamic resume from JSON + download
│       └── Contact.tsx          # Contact form + social links
├── data/
│   └── resume.json          # 🎯 All portfolio data lives here
├── public/
│   └── resume.pdf           # (Add your actual PDF resume here)
├── tailwind.config.js
├── next.config.js
├── tsconfig.json
└── package.json
```

## 🚀 Getting Started

### 1. Install dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 2. Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for production

```bash
npm run build
npm start
```

## 🎨 Customization

### Updating your data

All personal information is in **`data/resume.json`**. Edit this file to update:
- Contact details
- Skills and their categories
- Education history
- Projects (set `"featured": true` for highlighted projects)
- Certifications

### Changing colors

The accent color (`#E8612C`) is defined in:
- `app/globals.css` — CSS variables (`--accent`)
- `tailwind.config.js` — Tailwind tokens

Change the hex value in both files to update the entire color scheme.

### Adding a PDF resume

1. Add your PDF as `public/resume.pdf`
2. In `components/sections/Resume.tsx`, update the `handleDownload` function:

```tsx
const handleDownload = () => {
  const link = document.createElement('a')
  link.href = '/resume.pdf'
  link.download = 'Manoj_Verma_Resume.pdf'
  link.click()
}
```

### Connecting the contact form

Replace the simulated submission in `components/sections/Contact.tsx` with a real service like [Formspree](https://formspree.io/), [EmailJS](https://emailjs.com/), or your own API:

```tsx
// Example with Formspree:
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(form),
})
```

## 🚢 Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm run build
# Upload the `.next` folder to Netlify
```

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| Next.js 14 (App Router) | Framework |
| TypeScript | Type safety |
| Tailwind CSS v3 | Styling |
| Framer Motion | Animations |
| Lucide React | Icons |
| Google Fonts | Typography (Playfair Display + DM Sans) |

## 📝 License

MIT — feel free to use this as a template for your own portfolio.
