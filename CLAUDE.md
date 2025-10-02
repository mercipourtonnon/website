# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static website for "Merci pour ton non", a non-profit organization offering consent workshops in Strasbourg, France. The site is a single-page application built with vanilla HTML, CSS (Tailwind CSS v4), and JavaScript.

## Development Commands

```bash
# Install dependencies
bun install

# Start development server and watch CSS changes
bun run build

# Serve the site locally (opens index.html)
bun start
```

## Architecture

### Technology Stack
- **Runtime**: Bun (JavaScript runtime)
- **CSS Framework**: Tailwind CSS v4.1.13 (using @tailwindcss/cli)
- **No build framework**: Pure HTML/CSS/JS - no React, Vue, or similar
- **Deployment**: Static site hosted via GitHub Pages (CNAME file points to mercipourtonnon.fr)

### File Structure
- `index.html` - Single-page website (1500+ lines) containing all content
- `input.css` - Tailwind entry point (just imports Tailwind)
- `output.css` - Compiled Tailwind CSS output (generated, not manually edited)
- `assets/` - Images, favicons, team pictures
- `robots.txt` & `sitemap.xml` - SEO files

### Key Features in index.html

1. **Responsive Navigation**: Desktop menu + mobile/tablet sidebar menu with overlay
2. **Dynamic Date Updates**: JavaScript automatically updates workshop dates based on hardcoded schedule (lines 1518-1560)
3. **Billetweb Integration**: Event registration embedded via external script (line 1562-1565)
4. **Mobile Menu**: Custom JavaScript implementation (lines 1462-1502)
5. **Floating CTA**: Sticky button appears after scrolling past hero (lines 1439-1459, 1505-1515)

### Custom Styling
- Uses Google Fonts: Inter (body) and Bebas Neue (titles)
- Custom CSS classes defined in `<style>` tag (lines 152-255):
  - `.title-font` - Bebas Neue font for headers
  - `.pill-header` / `.pill-purple` - Colored pill-shaped section headers
  - `.gradient-text` - Orange-to-red gradient text
  - `.hover-lift` - Elevation effect on hover
  - Animation keyframes: `fadeInUp`, `fadeIn`, `float`

## Content Sections (in order)

1. Hero with workshop image
2. Workshop details (#atelier)
3. Testimonials (#temoignages)
4. Mission & Approach (#mission)
5. Values (#valeurs)
6. Team (#equipe)
7. FAQ (#faq)
8. Event Registration (#events)

## Important Notes

### Workshop Dates
Workshop dates are hardcoded in JavaScript (lines 1520-1527). To update:
1. Edit the `workshopDates` array in the script
2. Format: `new Date('YYYY-MM-DDTHH:mm:ss')`
3. The script automatically selects the next future date

### SEO & Meta Tags
Extensive meta tags for SEO and social sharing (lines 13-123):
- Open Graph (Facebook, LinkedIn, WhatsApp)
- Twitter Cards
- Schema.org structured data for events
- Keywords optimized for French audience

### Responsive Design
- Uses Tailwind's responsive prefixes (sm:, md:, lg:)
- Mobile menu activates below lg: breakpoint
- Images use responsive sizing and lazy loading

### External Dependencies
- Google Fonts (Inter, Bebas Neue)
- Billetweb ticketing widget
- Google Analytics (G-KPTGNRZSP6)

## Common Tasks

### Updating Team Members
Team section starts at line 1091. Each member has:
- Profile image in `assets/pictures/`
- Name and role
- Fallback handling with `onerror="this.style.display='none'"`

### Modifying Colors
Brand colors:
- Primary: Orange-500 (#f97316)
- Secondary: Purple-600 (#9333ea)
- Gradients: orange-to-purple throughout

### Editing Content
All content is in `index.html`. No separate content management system. Edit HTML directly for text changes.

### CSS Changes
1. Edit Tailwind classes directly in HTML
2. For custom styles, add to `<style>` tag (lines 152-255) or use Tailwind utilities
3. Run `bun run build` to regenerate output.css if using Tailwind utilities
