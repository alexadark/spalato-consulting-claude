# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the Spalato Consulting website - a professional AI automation consultancy site targeting SMBs. The focus is on non-generic, world-class design emphasizing trust, efficiency, and results-driven AI solutions.

## Tech Stack

- **Framework**: Next.js (App Router) with React functional components only
- **Styling**: Tailwind CSS
- **Forms**: React Hook Form
- **Animations**: Framer Motion (subtle animations only)
- **Content**: MDX for blog posts
- **Hosting**: Vercel

## Development Commands

```bash
# Initial setup (if not already done)
npx create-next-app@latest
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init

# Development
npm run dev          # Start development server (http://localhost:3000)

# Production
npm run build        # Build for production
npm start            # Start production server

# Linting
npm run lint         # Run ESLint
```

## Architecture

### App Router Structure

The project uses Next.js App Router with the following page structure:

- `app/layout.tsx` - Root layout with global navigation and styles
- `app/page.tsx` - Home page with hero, problem identification, testimonials
- `app/about/page.tsx` - Company story and team bios
- `app/services/page.tsx` - Service offerings with card layouts
- `app/case-studies/page.tsx` - Real-world client examples
- `app/blog/[slug]/page.tsx` - Dynamic blog posts using MDX
- `app/contact/page.tsx` - Lead generation contact form

### Component Organization

All reusable components live in `components/`:

- **Header.tsx** - Top navigation bar with logo and CTA button
- **Footer.tsx** - Site footer
- **Hero.tsx** - Reusable hero sections for different pages
- **ServiceCard.tsx** - Card components for displaying services
- **ContactForm.tsx** - Lead generation form (see Form Requirements below)

### Form Requirements

The `ContactForm.tsx` component is critical for lead generation and must include:

**Required Fields:**
- First Name (input)
- Last Name (input)
- Company Name (input)
- Email (input)
- Type of Company (select dropdown: Retail, Services, Manufacturing, etc.)
- Business Challenges (textarea for free-form input)

**Optional Fields:**
- Phone Number (input)

**Submit Button Text:** "Audit my company now"

**Implementation:**
- Use React Hook Form for state management and validation
- Style with Tailwind CSS using brutalist design elements (bold borders, high contrast)
- Currently logs to console or shows success message (backend integration TBD)

## Design System

### Color Palette (Tailwind Config)

Custom colors defined in `tailwind.config.js`:

```javascript
colors: {
  'adriatic-blue': '#0A2540',  // Primary: Trust and depth
  'olive-green': '#4F6D3A',     // Secondary: Growth and stability
  'warm-coral': '#E07A5F',      // Accent: Energy and innovation
}
```

**Neutrals:**
- Background: Soft Gray (#F4F4F4)
- Text: Dark Gray (#333333)

**Avoid:** Neon blues/purples common in generic AI sites. Use earthy, sophisticated tones.

### Typography

- **Headings**: Playfair Display (serif) for elegance
- **Body**: Inter (sans-serif) for readability
- **Scale**: H1 3rem, H2 2.25rem, Body 1rem

### Design Principles

- **Modern with subtle brutalist elements**: Bold typography, high contrast, geometric shapes
- **Mobile-first responsive design** using Tailwind breakpoints
- **Generous whitespace** for premium feel
- **Subtle animations only**: Fades and hovers via Framer Motion, no over-the-top effects
- **High-quality imagery**: Business scenarios, abstract workflow visuals (no floating robots or neon circuits)

## Content Guidelines

- **Focus on benefits over features**: "Save 30% on operational costs" not technical jargon
- **Trust-building language**: Emphasize tailored solutions, no disruption to existing processes
- **SEO optimization**: Use Next.js metadata API for titles and descriptions in each page
- **Thought leadership**: Blog content on AI trends and SMB tips

## Key Implementation Notes

- **Use functional components exclusively** - no class components
- **Image optimization**: Always use Next.js `<Image>` component from `next/image`
- **Performance**: Implement lazy loading and code splitting for optimal load times
- **Form handling**: Currently client-side only; backend integration to be added later
- **Icons**: Use Heroicons or custom icons matching the color palette
- **Responsive testing**: Test all breakpoints (mobile, tablet, desktop)

## Project Philosophy

This site must stand out from generic AI consultancy websites. The design language combines modern sophistication with subtle brutalist touches to convey professionalism, trust, and innovation without relying on AI clichés.
