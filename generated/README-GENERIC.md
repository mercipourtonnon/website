# Generic Component System

## Overview

The site now uses a **fully generic, composable component system** with **zero business logic** in React components. Everything is defined in JSON through recursive composition.

## Architecture

### 3 Core Files

1. **`components.jsx`** - Generic, reusable React components
2. **`page.json`** - Complete site configuration using n-level composition
3. **`render.js`** - Simple render logic using the `Render` component

### Component Types

#### Atomic Components
- `section` - Section wrapper with id, className, style
- `container` - Max-width container with padding
- `grid` - Flexible grid layout (cols, gap, responsive)
- `flex` - Flexbox layout (direction, align, justify, gap)
- `text` - Typography (h1-h6, p, span with size, color, weight)
- `image` - Image with lazy loading
- `link` - Internal/external links
- `button` - CTA buttons with variants
- `icon` - Lucide icon wrapper
- `badge` - Inline badges
- `card` - Generic card with variants
- `list` - Lists with icons

#### Composite Components
- `timeline` - Timeline visualization
- `accordion` - Accordion/collapsible content
- `customHTML` - Render custom HTML safely

### Special Components
- `Head` - Generates `<head>` with meta tags, custom elements, etc.
- `Scripts` - Generates all JavaScript functionality
- `Banner` - Top announcement banner
- `Navigation` - Main navigation with mobile menu
- `Render` - **Recursive component** that renders any element based on `type`

## How to Use

### Basic Structure

```json
{
  "sections": [
    {
      "type": "section",
      "props": {
        "id": "hero",
        "className": "px-6 py-16 bg-white"
      },
      "children": [
        {
          "type": "container",
          "children": [
            {
              "type": "text",
              "props": {
                "level": "h1",
                "size": "4xl",
                "color": "orange"
              },
              "content": "Hello World"
            }
          ]
        }
      ]
    }
  ]
}
```

### Element Anatomy

Every element has:
- `type` (required) - Component type (`section`, `text`, `grid`, etc.)
- `props` (optional) - Component properties
- `content` (optional) - Simple text/HTML content
- `children` (optional) - Array of child elements (recursive)

### Examples

#### Simple Text
```json
{
  "type": "text",
  "props": {
    "level": "p",
    "color": "gray-700",
    "size": "lg"
  },
  "content": "This is a paragraph"
}
```

#### Grid with Cards
```json
{
  "type": "grid",
  "props": {
    "cols": 1,
    "colsMd": 2,
    "colsLg": 3,
    "gap": 6
  },
  "children": [
    {
      "type": "card",
      "props": {
        "variant": "colored",
        "color": "orange"
      },
      "children": [
        {
          "type": "text",
          "props": {"level": "h3", "size": "xl", "weight": "bold"},
          "content": "Card Title"
        },
        {
          "type": "text",
          "props": {"level": "p"},
          "content": "Card description"
        }
      ]
    }
  ]
}
```

#### Complex Section
```json
{
  "type": "section",
  "props": {
    "id": "features",
    "className": "px-6 py-16 bg-gray-50"
  },
  "children": [
    {
      "type": "container",
      "props": {"maxWidth": "max-w-7xl"},
      "children": [
        {
          "type": "text",
          "props": {"level": "h2", "size": "3xl", "align": "center", "className": "mb-12"},
          "content": "Features"
        },
        {
          "type": "grid",
          "props": {"cols": 1, "colsMd": 3, "gap": 8},
          "children": [
            // Card 1, Card 2, Card 3...
          ]
        }
      ]
    }
  ]
}
```

## Custom Head Elements

Add custom elements to `<head>` using `meta.customElements`:

```json
{
  "meta": {
    "customElements": [
      {
        "type": "meta",
        "attrs": {
          "name": "custom-meta",
          "content": "Custom value"
        }
      },
      {
        "type": "link",
        "attrs": {
          "rel": "preconnect",
          "href": "https://cdn.example.com"
        }
      },
      {
        "type": "script",
        "attrs": {
          "src": "https://cdn.example.com/script.js",
          "defer": true
        }
      }
    ]
  }
}
```

## Component Props Reference

### Section
- `id` - Section ID for navigation
- `className` - Tailwind classes
- `style` - Inline styles object

### Container
- `maxWidth` - Max width class (`max-w-7xl`, `max-w-5xl`, etc.)
- `className` - Additional classes

### Grid
- `cols` - Columns (default: 1)
- `colsMd` - Columns on md breakpoint
- `colsLg` - Columns on lg breakpoint
- `gap` - Gap size (default: 6)
- `className` - Additional classes

### Flex
- `direction` - `row` or `col` (default: `row`)
- `align` - `start`, `center`, `end`, `stretch` (default: `start`)
- `justify` - `start`, `center`, `end`, `between`, `around` (default: `start`)
- `gap` - Gap size (default: 4)
- `wrap` - Boolean (default: false)
- `className` - Additional classes

### Text
- `level` - `h1`, `h2`, `h3`, `h4`, `h5`, `h6`, `p`, `span` (default: `p`)
- `color` - Tailwind color (`orange`, `gray-700`, etc.)
- `size` - Text size (`xs`, `sm`, `base`, `lg`, `xl`, `2xl`, `3xl`, `4xl`, etc.)
- `weight` - Font weight (`normal`, `medium`, `semibold`, `bold`)
- `align` - Text alignment (`left`, `center`, `right`)
- `className` - Additional classes

### Button
- `href` - Link URL
- `variant` - `primary`, `secondary`, `outline` (default: `primary`)
- `size` - `sm`, `md`, `lg` (default: `md`)
- `className` - Additional classes

### Icon
- `name` - Lucide icon name
- `size` - Icon size (default: 5)
- `color` - Tailwind color
- `className` - Additional classes

### Card
- `variant` - `default`, `colored`, `bordered`, `borderTop` (default: `default`)
- `color` - Color for colored/bordered variants
- `padding` - Padding size (default: 6)
- `className` - Additional classes

### List
- `items` - Array of strings
- `icon` - Lucide icon name
- `iconColor` - Icon color
- `ordered` - Boolean (default: false)
- `className` - Additional classes

## Migration Guide

To convert business-specific sections to generic:

**Before (Business Component):**
```jsx
export const Hero = ({ title, subtitle, badges, cta }) => {
  // Hard-coded HTML structure
}
```

**After (Generic JSON):**
```json
{
  "type": "section",
  "props": {"id": "hero", "className": "px-6 py-16 bg-gradient"},
  "children": [
    {"type": "container", "children": [
      {"type": "text", "props": {"level": "h1"}, "content": title},
      {"type": "text", "props": {"level": "p"}, "content": subtitle},
      {"type": "flex", "props": {"gap": 3}, "children": badges},
      {"type": "button", "props": {"href": cta.href}, "content": cta.text}
    ]}
  ]
}
```

## Benefits

✅ **Zero business logic** - Components are purely presentational
✅ **Fully composable** - Build any layout with n-level nesting
✅ **Type-safe** - All props are validated by React prop types
✅ **Flexible** - Easy to add new sections without touching React code
✅ **Maintainable** - Change content/structure by editing JSON
✅ **Custom HTML** - Add custom elements anywhere via `customHTML` type
✅ **Custom Head** - Add meta tags, scripts, links via `customElements`

## Files Reference

- `components.jsx` - Generic React components (keep these!)
- `page.json` - Site configuration (edit this!)
- `render.js` - Simple render logic (rarely touch)
- `page-business.json.backup` - Old business structure (for reference)
- `components-business.jsx.backup` - Old business components (for reference)
- `page-test.json` - Simple test example
- `test-output.html` - Generated test HTML

## Building

```bash
# Build the site
bun run render

# Output: index.html in project root
```

The build process:
1. Reads `page.json`
2. Uses `components.jsx` to render
3. Recursively builds HTML via `Render` component
4. Outputs complete HTML file

## Next Steps

1. Migrate remaining business content to generic structure
2. Test build produces identical HTML
3. Delete backup files once migration is complete
4. Add more generic components as needed (tabs, modals, etc.)
