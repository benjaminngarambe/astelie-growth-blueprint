

## Plan: Display Full Portrait Image Centered on Homepage

Based on the reference image you provided, I'll update the hero section to display Astelie's full portrait prominently centered, without any overlay effects or cropping.

---

### Changes to Make

#### Update Homepage Hero (`src/pages/Index.tsx`)

**Current state:**
- Small circular portrait (48x48 mobile, 64x64 desktop)
- Has gradient overlay (`bg-gradient-to-br from-primary/20`)
- Rounded corners with ring styling
- Uses `object-cover` which crops the image

**New design (matching reference):**
- Large, full-height portrait displayed prominently in center
- No gradient overlay or tint effects
- Clean presentation - the image speaks for itself
- Display the full image without cropping (using `object-contain` or natural dimensions)
- Remove the decorative ring border
- Make the image significantly larger (approximately 400-500px height on desktop)

**Updated image styling:**
```
- Remove: rounded-2xl, ring-2, ring-primary/20
- Remove: gradient overlay div
- Change: object-cover → object-contain (to show full image)
- Update: size to max-h-[500px] md:max-h-[600px] with auto width
- Keep: shadow for subtle depth
- Keep: centered alignment
```

---

### Visual Comparison

**Before:**
```text
        +--------+
        | (small |
        | circle)|
        +--------+
    "Headline text..."
```

**After (matching reference):**
```text
    +------------------+
    |                  |
    |   Full Portrait  |
    |   (large, clean) |
    |                  |
    +------------------+
    "Headline text..."
```

---

### Technical Details

| File | Changes |
|------|---------|
| `src/pages/Index.tsx` | Remove gradient overlay div, update image classes to display full image without effects, increase size significantly |

The image will be displayed at its natural aspect ratio, centered, and will be the visual focal point of the page - similar to the Kasia Siwosz reference you shared.

