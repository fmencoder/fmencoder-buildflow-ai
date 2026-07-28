# BuildFlow AI — Launch Landing Page

AI-powered project management platform for construction teams.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Linting**: ESLint (eslint-config-next)

## Getting Started

```bash
npm install
npm run dev
```

## Brand Configuration

All brand copy (name, tagline, description, URLs, colours) is centralised in [`lib/brand.ts`](lib/brand.ts).

## Landing Page Sections

1. **Navbar** – sticky top navigation with mobile hamburger placeholder
2. **Hero** – headline, tagline, dual CTA buttons, social proof note
3. **Features** – 6-card grid of core product capabilities
4. **How It Works** – 4-step numbered workflow
5. **Testimonials** – 3 customer quotes
6. **Pricing** – 3-tier plan cards (Starter · Pro · Enterprise) with payment methods
7. **CTA** – conversion banner
8. **Contact** – email link + contact form
9. **Footer** – links, social, copyright

## Payment Methods Displayed

Visa · Mastercard · American Express · PayPal · Apple Pay · Google Pay

> **PayPal status**: displayed as an accepted payment method on the pricing section. Full server-side PayPal SDK integration is **not yet implemented** and is tracked as a future task.

## Development Commands

```bash
npm run lint       # ESLint
npx tsc --noEmit   # TypeScript check
npm run build      # Production build
```
