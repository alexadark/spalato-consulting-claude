# Spalato Consulting Website Plan

## Project Overview

Build a professional, non-generic website for Spalato Consulting, an AI automation consultancy. The site will highlight services for small and medium-sized businesses (SMBs) to identify inefficiencies, save time and money through AI-driven automations. Emphasize unique value: tailored AI solutions that "get a ride" on existing processes without disruption.

Core goals:

- World-class design: Clean, innovative, avoiding generic AI tropes (e.g., no floating robots or neon circuits).
- Focus on trust, efficiency, and results.
- Optimize for conversions: Lead generation via contact forms, case studies.

## Tech Stack

- Framework: Next.js (React-based) for server-side rendering, SEO, and performance. Use functional components exclusively.
- Styling: Tailwind CSS for rapid, responsive design.
- Hosting: Vercel for seamless deployment and scaling.
- Additional Tools:
  - React Hook Form for forms.
  - Framer Motion for subtle animations.
  - MDX for blog/content if needed.
  - Analytics: Google Analytics or Vercel Analytics.

## Directory Structure

Organize the project in Next.js structure:

```
/Users/webstantly/DEV/projects/claude-code/1-website/
├── app/
│   ├── layout.tsx          # Root layout with global styles and navigation
│   ├── page.tsx            # Home page
│   ├── about/page.tsx      # About page
│   ├── services/page.tsx   # Services page
│   ├── case-studies/page.tsx # Case studies
│   ├── blog/
│   │   └── [slug]/page.tsx # Dynamic blog posts
│   └── contact/page.tsx    # Contact page
├── components/
│   ├── Header.tsx          # Navigation bar
│   ├── Footer.tsx          # Footer
│   ├── Hero.tsx            # Reusable hero sections
│   ├── ServiceCard.tsx     # Card components for services
│   └── ContactForm.tsx     # Form component
├── public/
│   ├── images/             # Logos, icons, photos
│   └── favicon.ico
├── styles/
│   └── globals.css         # Tailwind imports and custom styles
├── tailwind.config.js      # Tailwind configuration
├── next.config.js          # Next.js config
├── tsconfig.json           # TypeScript config (if using TS)
└── package.json            # Dependencies
```

## Pages and Content Structure

1. **Home Page**:
   - Hero section: Bold headline like "Unlock Efficiency: AI Automations That Save Your Business Time and Money."
   - Sections: Problem identification, How We Help, Testimonials, CTA.

2. **About Page**:
   - Company story, team bios, mission: "Empowering SMBs with AI to streamline operations without the hype."

3. **Services Page**:
   - Audit & Analysis, Custom AI Implementations, Training & Support.
   - Use cards with icons representing efficiency (e.g., gears, clocks).

4. **Case Studies**:
   - Real-world examples (anonymized if needed) showing time/money saved.

5. **Blog**:
   - Articles on AI trends, tips for SMBs – to establish thought leadership.

6. **Contact Page**:
   - Form for inquiries, map if physical location.

### Contact Form Details

The contact form will be a key element for lead generation, implemented as a reusable ContactForm.tsx component. It will include:

- **First Name**: Required input field.
- **Last Name**: Required input field.
- **Company Name**: Required input field.
- **Type of Company**: Select dropdown or input field (e.g., options like Retail, Services, Manufacturing).
- **Business Challenges**: Textarea for free-form input where users can describe their issues or request free content.
- **Additional Suggested Fields**:
  - Email: Required for contact.
  - Phone Number: Optional for quicker follow-up.

- **Submit Button**: Labeled "Audit my company now".

The form will use Tailwind CSS for styling: Modern, clean inputs with subtle brutalist touches like bold borders and high contrast. Use React Hook Form for handling state and validation. For now, it will log submissions to console or show a success message; backend integration can be added later.

Navigation: Simple top bar with logo, links to pages, and CTA button.

## Design Guidelines

Aim for non-generic: Modern, attractive design with subtle brutalist elements (bold typography, high contrast, geometric shapes) for a unique, professional feel.

### Color Palette

- Primary: Deep Blue (#0A2540) – Trust and depth.
- Secondary: Olive Green (#4F6D3A) – Growth and stability.
- Accent: Warm Coral (#E07A5F) – Energy and innovation.
- Neutral: Soft Gray (#F4F4F4) for backgrounds, Dark Gray (#333333) for text.
- Avoid: Neon blues/purples common in AI sites; opt for earthy, sophisticated tones.

### Typography

- Headings: Serif font like Playfair Display for elegance (non-generic touch).
- Body: Sans-serif like Inter for readability.
- Sizes: H1 3rem, H2 2.25rem, Body 1rem.

### Layout and UI

- Responsive: Mobile-first with Tailwind breakpoints.
- Whitespace: Generous for a premium feel.
- Animations: Subtle fades and hovers, no over-the-top effects.
- Icons: Custom or from Heroicons, styled to match palette.
- Images: High-quality photos of business scenarios, abstract AI visuals (e.g., streamlined workflows).

## Implementation Steps

1. **Setup Project**:
   - Run `npx create-next-app@latest` in the workspace root.
   - Install Tailwind: `npm install -D tailwindcss postcss autoprefixer`, then `npx tailwindcss init`.

2. **Configure Tailwind**:
   - Add custom colors to tailwind.config.js:
     ```
     extend: {
       colors: {
         'adriatic-blue': '#0A2540',
         'olive-green': '#4F6D3A',
         'warm-coral': '#E07A5F',
       }
     }
     ```

3. **Build Components**:
   - Create reusable functional components with Tailwind classes.
   - Specifically for the form: Implement ContactForm.tsx with fields: First Name, Last Name, Company Name, Type of Company, a textarea named "Business Challenges" for free-form input, and suggested additions: Email, Phone Number. Submit button: "Audit my company now".

4. **Develop Pages**:
   - Start with layout.tsx for consistent structure.
   - Implement each page sequentially.

5. **Content and Copy**:
   - Focus on benefit-driven copy: "Save 30% on operational costs" instead of tech jargon.
   - SEO: Use Next.js metadata for titles, descriptions.

6. **Testing and Deployment**:
   - Test responsiveness, forms.
   - Deploy to Vercel: Connect Git repo, push.

7. **Optimization**:
   - Image optimization with Next.js Image.
   - Performance: Lazy loading, code splitting.

This plan ensures a unique, professional site that stands out in the AI consultancy space.
