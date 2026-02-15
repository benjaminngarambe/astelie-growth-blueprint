

## Plan: Generate Standalone HTML File

Create a single `standalone-site.html` file in the project root that replicates the entire website with all CSS and JavaScript inline. No external dependencies required -- it will work by simply opening the file in a browser.

---

### What Will Be Included

All six pages of the website recreated as sections within a single-page HTML document with anchor-based navigation:

- **Home** -- Hero with portrait placeholder, headline, CTAs, "What I Do" pillars, credibility snapshot
- **About** -- Biography, focus areas sidebar, philosophy cards
- **Services** -- All 5 service offerings with descriptions
- **Experience** -- Timeline with role descriptions (logos referenced as placeholders)
- **Media** -- YouTube video embeds
- **Contact** -- Form with validation (client-side JS)

---

### Technical Approach

| Aspect | Implementation |
|--------|---------------|
| **Navigation** | Hamburger menu toggled via vanilla JavaScript, centered "Astelie Ngarambe" branding |
| **Styling** | All CSS inline in a `<style>` tag: dark purple theme (`hsl(270, 25%, 8%)`), Playfair Display + Inter fonts via Google Fonts CDN |
| **Interactivity** | Vanilla JavaScript for hamburger menu toggle, contact form validation, smooth scrolling between sections |
| **Images** | Portrait and logos referenced via relative paths (`src/assets/...`). A note will be included explaining these must be co-located or replaced with hosted URLs |
| **Responsiveness** | Media queries for mobile/tablet/desktop layouts |

---

### File Structure

A single file: **`standalone-site.html`** (~600-800 lines) containing:

1. `<style>` block with all CSS (theme variables, typography, layout, components, responsive)
2. `<body>` with all page sections as `<section>` elements
3. `<script>` block with vanilla JS for menu toggle, form handling, and section navigation

---

### Limitations

- Images (portrait, logos) will use relative paths from the project -- to use the file independently, image paths would need to be updated to hosted URLs
- Contact form submission is simulated (no backend)
- YouTube embeds require an internet connection
