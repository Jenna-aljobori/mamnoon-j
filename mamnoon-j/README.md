# ممنون - Mamnon Website

A modern, interactive Arabic website for **ممنون** - a comprehensive fuel delivery and smart maintenance service. Built with Next.js 16, React 19, TypeScript, Tailwind CSS 4.1, and Framer Motion.

## 🎨 Features

- **Full RTL Support**: Complete right-to-left layout for Arabic content
- **Interactive Phone Mockups**: Animated, scrollable phone displays in the hero section
- **Glassmorphism Effects**: Modern frosted glass design elements
- **Smooth Animations**: Powered by Framer Motion
- **Responsive Design**: Mobile-first approach, looks great on all devices
- **Horizontal Scrolling Services**: Beautiful service cards with snap scrolling
- **Modern UI/UX**: Clean, professional design with brand colors

## 🚀 Tech Stack

- **Framework**: Next.js 16.0.0
- **React**: 19.2.0
- **TypeScript**: Latest
- **Styling**: Tailwind CSS 4.1
- **Animations**: Framer Motion 12.23.24
- **Carousel**: Embla Carousel React 8.6.0
- **Icons**: Lucide React 0.548.0
- **Font**: Cairo (Google Fonts) - Arabic & Latin support

## 📦 Installation

1. Install dependencies:

```bash
pnpm install
```

2. Run the development server:

```bash
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Project Structure

```
mamnoon-j/
├── src/
│   ├── app/
│   │   ├── page.tsx              # Homepage
│   │   ├── layout.tsx            # Root layout with RTL & Arabic font
│   │   ├── globals.css           # Global styles & brand colors
│   │   ├── our-story/            # About page (placeholder)
│   │   ├── offers/               # Offers page (placeholder)
│   │   └── contact/              # Contact page (placeholder)
│   └── components/
│       ├── Navbar.tsx            # Navigation with sticky header
│       ├── Hero.tsx              # Hero with interactive phone mockups
│       ├── Services.tsx          # Horizontal scrollable services
│       ├── WhyMamnon.tsx         # Feature highlights
│       ├── HowItWorks.tsx        # 3-step process timeline
│       ├── AppFeatures.tsx       # App features with phone mockup
│       ├── CTASection.tsx        # Call-to-action section
│       └── Footer.tsx            # Footer with links & social
└── public/
    └── logo (1).svg              # Mamnon logo
```

## 🎨 Brand Colors

The brand colors are defined in `src/app/globals.css`:

- **Primary Green**: `#154a3c`
- **Primary Yellow**: `#ffaf12`
- **Support Green Variants**: Multiple shades from `#175343` to `#2fa586`
- **Support Yellow Variants**: Multiple shades from `#ffae0e` to `#ffd02d`

## 📄 Pages

### Home (`/`)

Full-featured homepage with:

- Hero section with interactive phone mockups
- Services slider
- Why Mamnon features
- How It Works timeline
- App Features showcase
- Call-to-action section

### Our Story (`/our-story`)

Placeholder page with "قريباً" (Coming Soon)

### Offers (`/offers`)

Placeholder page with "قريباً" (Coming Soon)

### Contact (`/contact`)

Placeholder page with "قريباً" (Coming Soon)

## 🎯 Key Components

### Hero Section

- Animated background blobs
- Interactive phone mockups with real scrollable content
- Multiple phones at different angles with parallax effects
- CTA buttons with hover animations

### Services Section

- Horizontal scrollable slider
- Featured service card (Fuel)
- Navigation arrows (desktop)
- Snap scrolling for smooth UX

### How It Works

- 3-step timeline design
- Animated connecting line
- Icon animations with pulse effects
- Alternating left-right layout (RTL)

### App Features

- Feature cards with icons
- App store download buttons
- Animated phone mockup
- Floating background elements

## 🔧 Scripts

```bash
# Development
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Lint
pnpm lint
```

## 🌐 Deployment

This is a Next.js app and can be deployed to:

- Vercel (recommended)
- Netlify
- Any Node.js hosting platform

## ♿ Accessibility

- ARIA labels for interactive elements
- Keyboard navigation support
- Proper semantic HTML
- Focus states on all interactive elements
- Screen reader friendly

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🎨 Design Philosophy

- **Modern & Clean**: Glassmorphism effects with subtle transparency
- **Interactive**: Smooth animations and hover effects
- **Professional**: Pixel-perfect alignment and spacing
- **Mobile-First**: Optimized for all screen sizes

## 🔮 Future Enhancements

- Complete the placeholder pages (Our Story, Offers, Contact)
- Add backend integration for bookings
- Implement user authentication
- Add real-time order tracking
- Multi-language support (English)

## 📝 License

© 2025 ممنون. All rights reserved.

## 👥 Support

For support, email info@mamnon.com

---

Built with ❤️ using Next.js, React, and Tailwind CSS
