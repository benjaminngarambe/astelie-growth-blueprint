

## Plan: Add Company Logos and Update Experience Descriptions

This plan covers enhancing the Experience page with company logos and enriched role descriptions, plus updating the About page with Astelie's longer biography.

---

### Overview

We will:
1. Copy the uploaded company logos into the project's `src/assets` folder
2. Update the Experience page to display logos alongside each role with richer descriptions
3. Update the About page biography with the expanded content provided

---

### Changes to Make

#### 1. Copy Logo Files to Project

Copy the following uploaded files to `src/assets/logos/`:
- `KOKO_Networks_idJFqy8wII_0.png` -> `koko-logo.png`
- `Jibu_logo.png` -> `jibu-logo.png`
- `ZOLA_Electric.png` -> `zola-logo.png`
- `EXP_LOGO.avif` -> `exp-logo.avif`

#### 2. Update Experience Page (`src/pages/Experience.tsx`)

**Add logo imports:**
```typescript
import kokoLogo from "@/assets/logos/koko-logo.png";
import jibuLogo from "@/assets/logos/jibu-logo.png";
import zolaLogo from "@/assets/logos/zola-logo.png";
import expLogo from "@/assets/logos/exp-logo.avif";
```

**Update the experiences data structure** to include:
- Logo reference for each company
- Enriched descriptions based on the longer bio:
  - **KOKO**: Head of Commercial leading commercial strategy, demand generation, and growth execution for clean cooking technology
  - **JIBU**: Head of Marketing and Franchisee Development overseeing marketing, customer experience, business development, micro-loan programs, and franchisee sales growth across Rwanda and DRC
  - **ZOLA Electric**: Head of Marketing for West Africa at a Silicon Valley clean energy unicorn
  - **EXP Africa**: Managing complex, multi-market brand executions at Africa's largest experiential marketing and demand activation agency

**Update the experience card layout** to display the company logo in a styled container alongside the role information, creating a more visual and premium presentation.

#### 3. Update About Page (`src/pages/About.tsx`)

Replace the current biography paragraphs with the new longer bio content:

> "Astelie Ngarambe is a Commercial & Brand Architect and Growth Advisor with over a decade of experience designing demand, go-to-market, and scale systems across Eastern and Western Africa.
>
> She currently serves as Head of Commercial for KOKO, a clean cooking technology company, where she leads commercial strategy, demand generation, and growth execution. Previously, Astelie was Head of Marketing and Franchisee Development for JIBU Rwanda and DRC, one of the fastest-growing OPCOs in the JIBU network, overseeing marketing, customer experience, business development, micro-loan programs, and franchisee sales growth.
>
> Her career also includes senior leadership roles at ZOLA Electric (Silicon Valley clean energy unicorn) as Head of Marketing for West Africa, and at EXP, Africa's largest experiential marketing and demand activation agency, managing complex, multi-market brand executions.
>
> Today, Astelie advises founders and leadership teams on commercial clarity, scalable systems, and customer-centric growth, helping African businesses build brands that convert, scale, and endure."

---

### Visual Design for Experience Cards

Each experience card will feature:
- A logo container with a light/subtle background to ensure logos display well on the dark theme
- The company logo displayed at a consistent size (approximately 120-160px width)
- The existing role title, company name, and description layout enhanced with the logo positioned to the left or above the content

---

### Technical Details

| File | Changes |
|------|---------|
| `src/assets/logos/` | New folder with 4 logo images |
| `src/pages/Experience.tsx` | Add logo imports, update experiences array with new descriptions and logo references, modify card layout to display logos |
| `src/pages/About.tsx` | Replace biography paragraphs with the longer bio content |

