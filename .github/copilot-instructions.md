# Copilot Instructions - PPUABA Eleventy Site

## Architecture Overview

This is an 11ty (Eleventy) static site generator project that pulls content from Contentful CMS and deploys to GitHub Pages. The site uses a component-based architecture with Liquid templates and JavaScript shortcodes.

### Key Components

- **Contentful Integration**: Content lives in Contentful, fetched via JavaScript data files in `src/_data/`
- **11ty with Liquid**: Static site generation using Liquid templates for page structure
- **Component System**: Reusable JavaScript components exported as 11ty shortcodes
- **SCSS with Sass**: Modular stylesheets compiled from `src/scss/` to `src/css/`

## Development Workflow

### Essential Commands

```bash
npm start          # Start development (rimraf + serve + sass watch)
npm run serve      # Run 11ty dev server only
npm run sass       # Watch and compile SCSS
npm run build      # Production build
```

### Content Architecture

**Data Flow Pattern**: Contentful → JavaScript Data Files → Liquid Templates → HTML

1. **Data Files** (`src/_data/`): Each file exports a function that fetches specific Contentful content types

   - `contentful.js` - Fetches "post" content type for main content
   - `about.js` - Fetches "page" content type filtered by slug "about"
   - Pattern: Always return processed data with `marked.parse()` for markdown and formatted dates

2. **Page Generation** (`src/pages.liquid`): Uses pagination to create individual pages from Contentful data

   - Uses `permalink: "pages/{{ page.slug | slug }}/"` for routing
   - Each page maps to a Contentful entry via the slug field

3. **Component System** (`src/_includes/components/`): JavaScript functions that return HTML strings
   - `Card.js` - Displays content cards with image, title, date, truncated description
   - `Page.js` - Full page layout with header image and article body
   - Used via 11ty shortcodes: `{% Card title date imageUrl description %}`

## Project-Specific Conventions

### Contentful Content Types

- **post**: Main content entries with title, body, heroImage, slug
- **page**: Static pages (like "about") identified by slug field
- Images accessed via `fields.heroImage?.fields?.file?.url` pattern

### Component Patterns

- All components handle null/undefined gracefully (e.g., `page.fields.body && marked.parse(page.fields.body)`)
- Date formatting uses consistent options object: `{weekday: "short", year: "numeric", month: "short", day: "numeric"}`
- Text truncation in Card component limits to 12 words with HTML tag removal

### File Structure Conventions

- Source files in `src/`, output to `_site/`
- Partials in `src/_includes/partials/` (head.html, header.html, footer.html)
- SCSS follows `@use` imports from `includes/` subfolder
- Images and CSS copied as passthrough (not processed by 11ty)

## Environment & Configuration

### Required Environment Variables

```
CONTENTFUL_SPACE_ID=your_space_id
CONTENTFUL_ACCESS_TOKEN_DELIVERY=your_delivery_token
```

### Key Configuration Files

- `.eleventy.js` - Defines shortcodes, passthrough copies, and directory structure
- `package.json` - Type: "module" (ES6 imports), npm-run-all for concurrent tasks
- SCSS entry point: `src/scss/index.scss` compiles to `src/css/main.css`

## Common Patterns

### Adding New Content Types

1. Create data file in `src/_data/` that fetches from Contentful
2. Create corresponding Liquid template or add to existing pagination
3. Add component shortcode in `.eleventy.js` if needed

### Image Handling

- Images processed through `ImageProcessing.js` component
- Contentful images accessed via nested fields structure
- Always check for undefined: `fields.heroImage?.fields?.file?.url`

### Debugging Contentful Data

- Console logs in data files show fetch results (see `about.js`)
- Use `npm run debug` for verbose 11ty output
- Check Contentful space browser for content structure

This project prioritizes content management flexibility through Contentful while maintaining simple, maintainable 11ty patterns.
