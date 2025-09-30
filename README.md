# SolarPower Co. - Solar Panel Company Website

A modern, fully responsive website for a solar panel company built with Astro and Tailwind CSS 3. This project showcases a complete business website with multiple pages, custom components, SVG assets, animations, and SEO optimization.

## 🌟 Features

- **Modern Design**: Clean, professional design with smooth animations and transitions
- **Fully Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **SEO Optimized**: Comprehensive SEO components with meta tags, JSON-LD schema, and semantic HTML
- **Performance**: Built with Astro for optimal performance and fast load times
- **Custom SVG Assets**: Hand-crafted SVG icons and illustrations
- **Tailwind CSS 3**: Utilizing modern CSS framework with custom animations
- **Component-Based**: Reusable components for maintainability
- **CMS Integrated**: Decap CMS (18,608⭐) for easy content management - no database required!

## 📁 Project Structure

```
Demo-Website/
├── src/
│   ├── assets/              # Static assets
│   ├── components/          # Reusable components
│   │   ├── icons/          # Custom SVG icon components
│   │   │   ├── Logo.astro
│   │   │   ├── SolarPanel.astro
│   │   │   ├── Installation.astro
│   │   │   ├── Maintenance.astro
│   │   │   ├── Consulting.astro
│   │   │   ├── Battery.astro
│   │   │   ├── LeafEnergy.astro
│   │   │   ├── Shield.astro
│   │   │   └── Award.astro
│   │   ├── sections/       # Page section components
│   │   │   ├── Hero.astro
│   │   │   ├── Services.astro
│   │   │   ├── Testimonials.astro
│   │   │   ├── Projects.astro
│   │   │   └── CTA.astro
│   │   ├── Button.astro
│   │   ├── Card.astro
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── SectionTitle.astro
│   │   ├── SEO.astro
│   │   └── JsonLd.astro
│   ├── layouts/
│   │   └── BaseLayout.astro # Main layout wrapper
│   ├── pages/              # Website pages
│   │   ├── index.astro     # Home page
│   │   ├── about.astro     # About page
│   │   ├── services.astro  # Services page
│   │   └── contact.astro   # Contact page
│   └── styles/
│       └── global.css      # Global styles and Tailwind imports
├── public/                 # Public static files
├── astro.config.mjs       # Astro configuration
├── tailwind.config.mjs    # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Project dependencies

```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. **Install dependencies:**

```bash
npm install
```

2. **Start the development server:**

```bash
npm run dev
```

The site will be available at `http://localhost:4321`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Access the CMS

```bash
# Start dev server
npm run dev

# Open CMS at http://localhost:4321/admin
```

See `CMS_SETUP.md` for detailed CMS documentation.

## 📄 Pages Overview

### Home Page (`/`)
- **Hero Section**: Eye-catching hero with animated SVG illustration and CTAs
- **Services Section**: Grid of 6 services with icons and descriptions
- **Projects Section**: Portfolio of completed installations
- **Testimonials Section**: Customer reviews with star ratings
- **Call to Action**: Conversion-focused section with benefits

### About Page (`/about`)
- Company story and mission
- Core values with custom icons
- Statistics and achievements
- Team members showcase
- Call to action

### Services Page (`/services`)
- Detailed service offerings with features and benefits
- 5-step process visualization
- Why choose us section
- Dual CTA (form + phone)

### Contact Page (`/contact`)
- Contact information cards (phone, email, location)
- Functional contact form with validation
- Business hours
- Map placeholder section
- Additional info and benefits

## 🎨 Design Features

### Color Scheme
- **Primary**: Orange tones (#f59e0b, #ed721b)
- **Secondary**: Green tones (#22c55e, #16a34a)
- Custom color palettes defined in Tailwind config

### Animations
- Fade in/out effects
- Slide animations
- Scroll-triggered animations
- Hover transitions
- Floating elements
- SVG path animations

### Typography
- System font stack for performance
- Responsive font sizes
- Text balance for headings

## 🧩 Component Library

### Layout Components
- **Header**: Sticky navigation with mobile menu
- **Footer**: Multi-column footer with social links
- **BaseLayout**: Wrapper with SEO and global scripts

### UI Components
- **Button**: Multiple variants (primary, secondary, outline)
- **Card**: Hoverable cards with shadows
- **SectionTitle**: Consistent section headers

### SEO Components
- **SEO**: Meta tags, Open Graph, Twitter cards
- **JsonLd**: Structured data for search engines

### Icon Components
Custom SVG components for visual consistency:
- Logo, Solar Panel, Installation, Maintenance
- Consulting, Battery, Leaf Energy, Shield, Award

## 🔧 Customization

### Updating Content

1. **Site Information**: Edit `astro.config.mjs` and SEO components
2. **Colors**: Modify `tailwind.config.mjs` theme colors
3. **Services**: Update data in `src/components/sections/Services.astro`
4. **Testimonials**: Edit testimonials array in respective component
5. **Contact Info**: Update footer and contact page details

### Adding New Pages

1. Create new `.astro` file in `src/pages/`
2. Use BaseLayout and import necessary components
3. Add navigation link in Header component
4. Update footer links if needed

### Custom Icons

To add new SVG icons:

1. Create new file in `src/components/icons/`
2. Use existing icons as templates
3. Import and use in your components

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## ⚡ Performance

- Static site generation for fast load times
- Optimized images and SVGs
- Minimal JavaScript
- CSS purging in production
- Lazy loading for animations

## 🔍 SEO Features

- Meta tags (title, description, keywords)
- Open Graph tags for social sharing
- Twitter Card support
- Canonical URLs
- JSON-LD structured data
- Semantic HTML5
- Sitemap ready
- Mobile-friendly

## 🛠️ Technologies Used

- **[Astro](https://astro.build/)** - Modern static site generator
- **[Tailwind CSS 3](https://tailwindcss.com/)** - Utility-first CSS framework
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- Custom SVG Graphics

## 📝 License

This project is created for demonstration purposes.

## 🤝 Contributing

Feel free to fork this project and customize it for your needs!

## 📧 Support

For questions or issues, please contact the development team.

---

**Built with ❤️ using Astro and Tailwind CSS**
