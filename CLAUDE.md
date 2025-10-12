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
- **CSS Framework**: Tailwind CSS v4.1.13 (using @tailwindcss/cli with custom theme)
- **No build framework**: Pure HTML/CSS/JS - no React, Vue, or similar
- **Deployment**: Static site hosted via GitHub Pages (CNAME file points to mercipourtonnon.fr)

### File Structure
- `index.html` - Single-page website containing all content
- `charte.html` - Brand guidelines and visual identity documentation
- `input.css` - Tailwind entry point with custom fonts (@font-face) and theme colors
- `output.css` - Compiled Tailwind CSS output (generated, not manually edited)
- `public/` - Images, favicons, team pictures, logo assets
- `public/fonts/` - Custom fonts (Bely Display, Neue Machina)
- `robots.txt` & `sitemap.xml` - SEO files

### Key Features in index.html

1. **Responsive Navigation**: Desktop menu + mobile/tablet sidebar menu with overlay
2. **Dynamic Date Updates**: JavaScript automatically updates workshop dates based on hardcoded schedule
3. **Billetweb Integration**: Event registration embedded via external script
4. **Mobile Menu**: Custom JavaScript implementation with overlay
5. **Scroll-Spy Navigation**: Active nav link highlighting based on scroll position

### Brand Typography & Custom Styling
- **Bely Display**: Display font for all titles (via `.title-font` class)
  - Always lowercase (`text-transform: lowercase`)
  - Letter-spacing: 0.05em
  - Fallback: Archivo Black (Google Fonts)
- **Neue Machina**: Body font for all text
  - Weights: Light (300), Regular (400), Ultrabold (800)
  - Fallback: Space Grotesk (Google Fonts)
- **Custom CSS classes** defined in `<style>` tag:
  - `.title-font` - Bely Display font for headers (lowercase)
  - `.hero-title` - Hero title with fadeInUp animation
  - `.gradient-text` - Orange-to-pourpre gradient text
  - Animation keyframes: `fadeInUp`, `fadeIn`, `float`

## Brand Guidelines (charte.html)

### Four Brand Colors
The brand uses four semantic colors from the logo:

1. **Pourpre** (#F5004F)
   - Energy: Émotion, authenticité, découverte
   - Usage: Testimonials, emotional sections, authentic moments
   - Light variant: #FFF0F5

2. **Orange** (#FFAF00)
   - Energy: Action, engagement, chaleur
   - Usage: CTAs, registration buttons, important information
   - Light variant: #FFF8E6

3. **Mauve** (#7B01FE)
   - Energy: Exploration, apprentissage, créativité
   - Usage: Educational sections, exploratory content
   - Light variant: #F3E6FF

4. **Cyan** (#12A19D)
   - Energy: Validation, calme, ressources
   - Usage: Confirmations, downloadable resources, factual info
   - Light variant: #E6F9F8

### Color Usage Rules
- **NEVER use saturated colors** (#FFAF00, #F5004F, etc.) as section backgrounds
- **ALWAYS use light variants** (#FFF8E6, #FFF0F5, etc.) for section backgrounds
- **Alternate white and colored backgrounds** between sections for visual rhythm
- Use colors semantically based on their energy and meaning

### Button Styling
- **Rounded-full**: All buttons use fully rounded corners
- **Color-only hover**: Buttons only darken color on hover (NO scale or shadow effects)
- **Transition-colors**: Use `transition-colors` for smooth color changes
- Four color variants available for different intentions

### Tone of Voice
- **Tutoiement**: Always use "tu/ton/te/tes" (informal "you")
- **Inclusive writing**: Use ·e and ·es (participant·e, tou·te·s)
- **No corporate jargon**: Avoid "solution", "optimisation", "performance", "ROI"
- **No marketing hyperbole**: Avoid "révolutionnaire", "unique", "certifiant"

## Content Sections (in order)

1. Hero with multi-color title
2. "Pour qui?" - Target audience cards (#pour-qui)
3. Workshop details (#atelier)
4. Practical information (#infos-pratiques)
5. Testimonials (#temoignages)
6. Mission & Approach (#mission)
7. Values (#valeurs)
8. Team (#equipe)
9. Programme (#programme)
10. FAQ (#faq)
11. Follow Us (social media links) (#suivez-nous)
12. Event Registration (#events)

## Important Notes

### Workshop Dates
Workshop dates are hardcoded in JavaScript at the end of index.html. To update:
1. Edit the `workshopDates` array in the script section
2. Format: `new Date('YYYY-MM-DDTHH:mm:ss')`
3. The script automatically selects the next future date and updates two locations:
   - Banner: `.text-white.font-semibold`
   - Hero: `.text-sm.text-gray-600 strong`

### SEO & Meta Tags
Extensive meta tags for SEO and social sharing in `<head>`:
- Open Graph (Facebook, LinkedIn, WhatsApp)
- Twitter Cards
- Schema.org structured data for events
- Keywords optimized for French audience

### Responsive Design
- Uses Tailwind's responsive prefixes (sm:, md:, lg:)
- Mobile menu activates below lg: breakpoint
- Desktop nav has Mission, Valeurs, Équipe as separate links (not grouped under "À propos")

### External Dependencies
- Google Fonts (Archivo Black, Space Grotesk) - fallbacks for custom fonts
- Lucide Icons (https://unpkg.com/lucide@latest) - preferred over emojis per brand guidelines
- Billetweb ticketing widget
- Plausible Analytics (privacy-friendly analytics)

## Common Tasks

### Updating Team Members
Team section (`#equipe`). Each member has:
- Profile image in `public/pictures/`
- Name and role
- Fallback handling with `onerror="this.style.display='none'"`

### Modifying Colors
**IMPORTANT**: Always follow charte.html guidelines:
- Use semantic color meanings (see Brand Guidelines section above)
- Only use light variants for section backgrounds
- Never use saturated colors as backgrounds
- Alternate white and colored backgrounds between sections

### Editing Content
All content is in `index.html`. No separate content management system. Edit HTML directly for text changes.

**Tone of voice checklist**:
- [ ] Use tutoiement (tu/ton/tes)
- [ ] Use inclusive writing (·e, ·es)
- [ ] Avoid corporate jargon
- [ ] Keep titles in lowercase when using `.title-font`

### CSS Changes
1. Edit Tailwind classes directly in HTML (preferred)
2. For custom fonts or brand colors, edit `input.css` and run `bun run build`
3. Custom theme colors are defined in `input.css` under `@theme` directive
4. DO NOT manually edit `output.css` (auto-generated)

### Adding New Icons
Use Lucide icons instead of emojis:
```html
<i data-lucide="icon-name" class="w-5 h-5 text-orange"></i>
```
Preferred icons: heart, ear, hand, users, shield (human-focused, not technical)
