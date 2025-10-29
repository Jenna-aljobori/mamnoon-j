# Quick Start Guide - Mamnon Website

## 🚀 Get Started in 30 Seconds

```bash
cd mamnoon-j
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) 🎉

## 📂 What You Get

A complete Arabic website with:

- ✅ Full homepage with 8 sections
- ✅ Interactive phone mockups
- ✅ Smooth animations
- ✅ RTL support
- ✅ Mobile responsive
- ✅ 3 placeholder pages

## 🎨 Key Features

### 1. Interactive Hero

Real scrollable phone displays with:

- Main phone with service cards
- Background phones at angles
- Floating animations

### 2. Services Slider

Horizontal scrolling with:

- 5 service cards
- Navigation arrows
- Featured service

### 3. Modern Design

- Glassmorphism effects
- Gradient backgrounds
- Smooth animations
- Professional UI/UX

## 🔧 Available Commands

```bash
# Development
pnpm dev          # Start dev server (port 3000)

# Production
pnpm build        # Build for production
pnpm start        # Start production server

# Linting
pnpm lint         # Run ESLint
```

## 📁 Project Structure

```
src/
├── app/
│   ├── page.tsx              # Homepage
│   ├── layout.tsx            # Root layout
│   ├── globals.css           # Global styles
│   └── [pages]/              # Other pages
└── components/
    ├── Navbar.tsx            # Navigation
    ├── Hero.tsx              # Hero section
    ├── Services.tsx          # Services slider
    ├── WhyMamnon.tsx         # Features
    ├── HowItWorks.tsx        # Timeline
    ├── AppFeatures.tsx       # App showcase
    ├── CTASection.tsx        # Call-to-action
    └── Footer.tsx            # Footer
```

## 🎯 Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4.1
- Framer Motion
- Cairo Font (Arabic)

## 🌐 Pages

1. **/** - Full homepage
2. **/our-story** - Coming soon
3. **/offers** - Coming soon
4. **/contact** - Coming soon

## 🎨 Brand Colors

```css
Primary Green: #154a3c
Primary Yellow: #ffaf12
```

## 📱 Responsive

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🚀 Deploy

### Vercel (Recommended)

```bash
vercel
```

### Other Platforms

```bash
pnpm build
# Upload .next folder
```

## 📝 Quick Edits

### Change Colors

Edit: `src/app/globals.css`

```css
--primary: #154a3c;
--secondary: #ffaf12;
```

### Change Content

Edit components in `src/components/`

### Add New Page

Create: `src/app/[page-name]/page.tsx`

## 🐛 Troubleshooting

### Port Already in Use

```bash
# Use different port
pnpm dev -p 3001
```

### Dependencies Issues

```bash
# Clean install
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

### Build Errors

```bash
# Clear cache
rm -rf .next
pnpm build
```

## 📚 Documentation

- [README.md](./README.md) - Full documentation
- [PROJECT_SUMMARY.md](../PROJECT_SUMMARY.md) - Implementation details
- [CONTENT_GUIDE.md](./CONTENT_GUIDE.md) - All Arabic content

## ✅ What's Complete

- [x] RTL Layout
- [x] Arabic Typography
- [x] All Homepage Sections
- [x] Interactive Animations
- [x] Mobile Responsive
- [x] Placeholder Pages
- [x] SEO Optimized
- [x] Accessibility Features

## 🎉 You're Ready!

The website is production-ready. Just customize the content and deploy!

---

Need help? Check the documentation or contact support.
