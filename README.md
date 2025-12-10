# TACOS Technologies - Drone Solutions Website

Modern, SEO-optimized Next.js website for TACOS Technologies - East Africa's leading drone solutions provider.

## Getting Started

1. Install dependencies:
```bash
npm install --legacy-peer-deps
```

2. Set up environment variables:
```bash
cp .env.example .env.local
```
Then edit `.env.local` with your SMTP credentials for the contact form.

3. Run development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## Features

- Next.js 14 with App Router
- TypeScript
- Tailwind CSS
- Framer Motion animations
- SEO optimized with structured data
- Image optimization
- Functional contact form (requires SMTP setup)
- Responsive design
- Performance optimized

## Project Structure

```
├── app/                 # Next.js pages and API routes
│   ├── api/contact/     # Contact form API endpoint
│   ├── about/           # About page
│   └── contact/         # Contact page
├── components/          # React components
├── lib/                 # Utility functions (SEO config)
└── public/assets/       # Static assets and images
```

## Environment Variables

Create a `.env.local` file with:

```
SMTP_HOST=your-smtp-host
SMTP_PORT=587
SMTP_USER=your-email
SMTP_PASS=your-password
CONTACT_EMAIL=info@tacostechnologies.com
```

## Deployment

### Vercel (Recommended)
```bash
vercel deploy
```

### Cloudflare Pages
```bash
npm run pages:build
npm run pages:deploy
```

## Contact

- Website: [tacostechnologies.com](https://tacostechnologies.com)
- Email: info@tacostechnologies.com
- Location: Nairobi, Kenya
