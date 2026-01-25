# TACOS Technologies Website

**Tactical Aerospace Command & Operations Solutions**

A modern, high-performance website for TACOS Technologies - showcasing AI-powered drone systems, UAV parts, technical consultation, and mechanical engineering services.

## 🚀 Features

- **Modern Design**: Apple-inspired smooth animations and transitions
- **Fully Responsive**: Optimized for all devices (mobile to 4K displays)
- **SEO Optimized**: Comprehensive SEO with structured data and meta tags
- **High Performance**: 90+ Lighthouse scores across all categories
- **Accessibility**: WCAG compliant with keyboard navigation and screen reader support
- **Image Sequence Animation**: Scroll-controlled drone transformation showcase
- **Contact Form**: Integrated email functionality with Resend API
- **Social Integration**: Links to Instagram, TikTok, and X (Twitter)

## 🛠️ Tech Stack

- **Framework**: Next.js 15.5.2 (React 18)
- **Styling**: Tailwind CSS 3.4
- **Animations**: Framer Motion 12
- **Language**: TypeScript 5
- **Deployment**: Cloudflare Pages
- **Email**: Resend API

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/Owen2space/tacosreact.git

# Navigate to project directory
cd tacosreact

# Install dependencies
npm install

# Create environment file
cp .env.example .env.local

# Add your environment variables
# RESEND_API_KEY=your_api_key_here
# NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## 📝 Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm start            # Start production server
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint errors
npm run type-check   # Check TypeScript types
npm run pages:build  # Build for Cloudflare Pages
npm run pages:deploy # Deploy to Cloudflare Pages
```

## 🎨 Project Structure

```
tacosreact/
├── app/                      # Next.js app directory
│   ├── about/               # About page
│   ├── api/                 # API routes
│   │   └── contact/         # Contact form API
│   ├── contact/             # Contact page
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Homepage
│   ├── loading.tsx          # Loading state
│   ├── error.tsx            # Error boundary
│   ├── not-found.tsx        # 404 page
│   ├── robots.ts            # Robots.txt
│   ├── sitemap.ts           # Sitemap.xml
│   └── globals.css          # Global styles
├── components/              # React components
│   ├── ContactForm.tsx      # Contact form
│   ├── DroneShowcase.tsx    # Drone showcase section
│   ├── Footer.tsx           # Footer component
│   ├── Header.tsx           # Header/navigation
│   ├── ParallaxImages.tsx   # Parallax section
│   ├── ServiceCard.tsx      # Service card component
│   └── VideoShowcase.tsx    # Image sequence animation
├── lib/                     # Utility functions
│   └── seo.ts              # SEO configuration
├── public/                  # Static assets
│   └── assets/             # Images and media
├── DEPLOYMENT_CHECKLIST.md  # Deployment guide
├── EMAIL_SETUP_GUIDE.md     # Email configuration
├── PERFORMANCE_OPTIMIZATION.md # Performance guide
├── SEO_GUIDE.md            # SEO strategy
└── README.md               # This file
```

## 🌐 Pages

- **Home** (`/`) - Hero, services, stats, drone showcase, CTA
- **About** (`/about`) - Company information and team
- **Contact** (`/contact`) - Contact form and information
- **Capabilities** (`/#services`) - Service offerings

## 🎯 Services

1. **Drone Systems & Parts** - Custom UAV assembly and component supply
2. **AI & Machine Learning** - Computer vision and autonomous systems
3. **Technical Consultation** - Expert guidance and planning
4. **Mechanical Engineering** - Precision design and fabrication

## 📧 Contact Information

- **Email**: info@tacostechnologies.com
- **Email**: tacostechnologies@gmail.com
- **Phone**: +254 796 803 774
- **Location**: Nairobi, Kenya

## 🔗 Social Media

- **Instagram**: [@tacostechnology](https://www.instagram.com/tacostechnology/)
- **TikTok**: [@tacostechnology](https://www.tiktok.com/@tacostechnology)
- **X (Twitter)**: [@_Tacostech](https://x.com/_Tacostech)

## 🚀 Deployment

### Cloudflare Pages

```bash
# Build for Cloudflare Pages
npm run pages:build

# Deploy
npm run pages:deploy
```

Or connect your GitHub repository to Cloudflare Pages:
1. Build command: `npm run pages:build`
2. Output directory: `.vercel/output/static`
3. Add environment variables
4. Deploy

See [DEPLOYMENT_CHECKLIST.md](./DEPLOYMENT_CHECKLIST.md) for detailed instructions.

## 📊 Performance

- **Lighthouse Score**: 90+ (Performance, Accessibility, Best Practices, SEO)
- **First Contentful Paint**: < 1.8s
- **Largest Contentful Paint**: < 2.5s
- **Time to Interactive**: < 3.8s
- **Cumulative Layout Shift**: < 0.1

## 🔍 SEO Features

- Dynamic XML sitemap
- Optimized robots.txt
- Structured data (JSON-LD)
- Open Graph tags
- Twitter Card tags
- Meta descriptions
- Semantic HTML
- Mobile-first design

See [SEO_GUIDE.md](./SEO_GUIDE.md) for comprehensive SEO strategy.

## 🎨 Design Features

- **Apple-style animations**: Smooth, hardware-accelerated transitions
- **Scroll-controlled showcase**: Interactive drone transformation
- **Glassmorphism**: Modern glass effects
- **Gradient mesh**: Subtle background patterns
- **Responsive typography**: Fluid text scaling
- **Dark mode ready**: Theme support built-in

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file:

```env
RESEND_API_KEY=your_resend_api_key
NEXT_PUBLIC_SITE_URL=https://tacostechnologies.com
```

### Email Setup

See [EMAIL_SETUP_GUIDE.md](./EMAIL_SETUP_GUIDE.md) for Resend API configuration.

## 📱 Responsive Breakpoints

- **xs**: 320px (mobile)
- **sm**: 640px (large mobile)
- **md**: 768px (tablet)
- **lg**: 1024px (desktop)
- **xl**: 1280px (large desktop)
- **2xl**: 1536px (extra large)

## 🎯 Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

This is a private project for TACOS Technologies. For inquiries, contact:
- info@tacostechnologies.com
- tacostechnologies@gmail.com

## 📄 License

© 2026 TACOS Technologies. All rights reserved.

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Framer Motion for smooth animations
- Tailwind CSS for utility-first styling
- Cloudflare for hosting and CDN

## 📚 Documentation

- [Performance Optimization Guide](./PERFORMANCE_OPTIMIZATION.md)
- [SEO Strategy Guide](./SEO_GUIDE.md)
- [Deployment Checklist](./DEPLOYMENT_CHECKLIST.md)
- [Email Setup Guide](./EMAIL_SETUP_GUIDE.md)

## 🐛 Known Issues

None currently. Report issues to info@tacostechnologies.com

## 🔄 Version History

### v1.0.0 (January 2026)
- Initial release
- Full responsive design
- SEO optimization
- Image sequence animation
- Contact form integration
- Social media integration

---

**Built with ❤️ by TACOS Technologies**

For support: info@tacostechnologies.com | +254 796 803 774
