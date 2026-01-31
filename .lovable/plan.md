

## Plan: Update Header, Add Hero Image, and Replace Jibu Logo

This plan covers three main changes: redesigning the header with a centered name and hamburger menu, adding Astelie's professional photo to the homepage hero, and replacing the Jibu logo.

---

### Overview

We will:
1. Replace the Jibu logo with the new uploaded version
2. Redesign the header to center "Astelie Ngarambe" with all navigation items in a hamburger menu
3. Add Astelie's professional headshot to the homepage hero section, right below the header

---

### Changes to Make

#### 1. Replace Jibu Logo

Copy the new Jibu logo to replace the existing one:
- `user-uploads://jibu-water-logo-png_seeklogo-556150.png` will replace `src/assets/logos/jibu-logo.png`

#### 2. Add Astelie's Professional Photo

Copy the headshot to the assets folder:
- `user-uploads://Black_and_white_professional.jpg` -> `src/assets/astelie-portrait.jpg`

#### 3. Redesign Header (`src/components/layout/Header.tsx`)

**New Header Layout:**
- Remove the desktop horizontal navigation links
- Center "Astelie Ngarambe" in the header (as a link to home)
- Add a hamburger menu button on the right side (visible on all screen sizes)
- The hamburger menu will contain: About, Services, Experience, Media, Contact

**Visual Structure:**
```text
+--------------------------------------------------+
|                  Astelie Ngarambe          [≡]   |
+--------------------------------------------------+
```

When hamburger is clicked, a dropdown/slide-down menu appears with all navigation links.

#### 4. Update Homepage Hero (`src/pages/Index.tsx`)

**Add Hero Image Section:**
- Insert Astelie's professional portrait immediately after the header (at the top of the hero section)
- Position the image prominently with a subtle purple tint/overlay to match the dark theme
- The image will be styled as a large, elegant portrait (rounded corners, subtle shadow)
- Below the image, keep the existing headline, subheadline, and CTAs

**New Hero Layout:**
```text
+--------------------------------------------------+
|                    [Header]                       |
+--------------------------------------------------+
|                                                   |
|              [Astelie's Portrait]                 |
|                                                   |
|   "I help brands grow with clarity, strategy..."  |
|   Brand Architect & Growth Advisor...             |
|                                                   |
|   [Work With Me]  [View My Work]                  |
|                                                   |
+--------------------------------------------------+
```

---

### Technical Details

| File | Changes |
|------|---------|
| `src/assets/logos/jibu-logo.png` | Replace with new Jibu logo |
| `src/assets/astelie-portrait.jpg` | New professional headshot |
| `src/components/layout/Header.tsx` | Center name, remove desktop nav, add hamburger menu for all screen sizes |
| `src/pages/Index.tsx` | Import portrait image, add prominent hero image section above the headline |

---

### Design Considerations

- **Header**: Clean, minimalist with the name as the focal point. Hamburger menu provides access to all pages without cluttering the header.
- **Portrait**: The black and white photo will blend beautifully with the dark purple theme. A subtle purple gradient overlay or border can tie it to the brand colors.
- **Responsive**: The new design works consistently across mobile and desktop since the hamburger menu is universal.

