---
name: Dra. Vanessa Andrade
description: Consultório claro, higienizado e acolhedor em papel branco, areia e um sorriso amarelo.
colors:
  white: "#FFFFFF"
  offwhite: "#FAF8F5"
  sand-100: "#F4EFE7"
  sand-200: "#EDE6DB"
  sand-300: "#D9CBB6"
  sand-500: "#A8957A"
  smile-yellow: "#E8C468"
  smile-yellow-deep: "#D9AF45"
  smile-yellow-soft: "#FBF1D6"
  ink: "#3A332C"
  ink-soft: "#5E554B"
  ink-muted: "#6F655A"
typography:
  display:
    fontFamily: "Playfair Display, Georgia, Times New Roman, serif"
    fontSize: "clamp(2.3rem, 10vw, 4.8rem)"
    fontWeight: 400
    lineHeight: 1.08
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Playfair Display, Georgia, Times New Roman, serif"
    fontSize: "clamp(2rem, 6.6vw, 3.15rem)"
    fontWeight: 400
    lineHeight: 1.14
    letterSpacing: "-0.015em"
  title:
    fontFamily: "Playfair Display, Georgia, Times New Roman, serif"
    fontSize: "1.32rem"
    fontWeight: 500
    lineHeight: 1.25
  body:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.7
  label:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 700
    letterSpacing: "0.1em"
rounded:
  sm: "10px"
  md: "16px"
  lg: "24px"
  pill: "999px"
  arch: "999px 999px 24px 24px"
spacing:
  gutter: "20px"
  section: "clamp(4.5rem, 10vw, 8rem)"
components:
  button-primary:
    backgroundColor: "{colors.smile-yellow}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0.95em 1.7em"
    height: "54px"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0.95em 1.7em"
  button-outline-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.offwhite}"
  button-dark:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.offwhite}"
    rounded: "{rounded.pill}"
    padding: "1.05em 2.1em"
    height: "60px"
  card-service:
    backgroundColor: "{colors.white}"
    rounded: "{rounded.lg}"
    padding: "1.75rem 1.5rem 1.9rem"
  card-testimonial:
    backgroundColor: "{colors.white}"
    rounded: "{rounded.lg}"
    padding: "2rem 1.6rem 1.75rem"
  chip-placeholder:
    backgroundColor: "transparent"
    textColor: "{colors.ink-muted}"
    rounded: "{rounded.pill}"
    padding: "0.25rem 0.65rem"
---

# Design System: Dra. Vanessa Andrade

## Overview

**Creative North Star: "O Consultório de Papel"**

A bright, freshly cleaned consultório translated to the screen: paper-white and off-white grounds, sand fields that hold whole regions, and one warm yellow that behaves like a smile — rare, curved and kind. Density is low; whitespace is the hygiene. Every surface feels wiped down and quietly lit, never clinical.

Type does the talking: a calm, high-contrast serif for everything that speaks (headlines, the logo, testimonials) and a clean geometric sans for everything that informs. Photography sits in arch-topped frames, the system's recurring silhouette, with an organic sand blob breathing slowly behind the hero portrait.

The visual rejections the owner set: no pure black text, no loud color, yellow used with moderation.

**Key Characteristics:**
- Paper-white / off-white grounds with full-width sand bands for rhythm.
- One warm yellow accent reserved for primary actions, icon details and the smile stroke.
- Arch-topped photo frames and pill buttons; 16–24px corners elsewhere.
- Thin 1.35px line icons drawn in one family.
- Soft, brown-tinted, offset shadows; never hard or colored halos.

## Colors

A warm neutral palette of paper and sand, lifted by a single soft yellow.

### Primary
- **Smile Yellow** (smile-yellow): primary buttons, the floating WhatsApp button, and the hand-drawn smile stroke under the hero headline and the closing CTA line.
- **Deep Smile** (smile-yellow-deep): stars, contact icons, active-nav underline, separators in the credential line. Never as a large fill.
- **Soft Smile** (smile-yellow-soft): the closing CTA band and text selection.

### Neutral
- **Paper White** (white): the About section ground, cards, photo borders.
- **Off-White** (offwhite): page ground, header glass, hero, services, footer.
- **Sand 100** (sand-100): icon wells and image placeholder grounds.
- **Sand 200** (sand-200): testimonial band, hero blob, hairline dividers and highlight borders.
- **Sand 300** (sand-300): stronger hairlines, decorative arch outline, scrollbar thumb, link underlines.
- **Sand 500** (sand-500): dashed placeholder chip border and inactive carousel dots.
- **Ink** (ink): all headings and primary text, outline-button stroke, dark button fill.
- **Ink Soft** (ink-soft): body paragraphs and secondary text.
- **Ink Muted** (ink-muted): labels, footnotes, placeholder chip text.

### Named Rules
**The One Smile Rule.** Yellow appears as fills only on actions (primary button, floating WhatsApp) and the CTA band tint; everywhere else it is a detail under 10px or a stroke.
**The No Black Rule.** Text is Ink at its darkest; #000 never appears.

## Typography

**Display Font:** Playfair Display (with Georgia, Times New Roman)
**Body Font:** Manrope (with system-ui)

**Character:** A gracious high-contrast serif with lining numerals carries the human voice; Manrope keeps information light, open and legible for all ages.

### Hierarchy
- **Display** (400, clamp(2.3rem, 10vw, 4.8rem), 1.08): the hero headline only, roman, with the smile stroke under its last phrase.
- **Headline** (400, clamp(2rem, 6.6vw, 3.15rem), 1.14): section titles and the CTA line (slightly larger, up to 3.8rem).
- **Title** (500, 1.32rem, 1.25): card titles; testimonial quotes use the display face at 1.2rem italic, 1.5.
- **Body** (400, 1.0625rem, 1.7): paragraphs, max 62ch; the first About paragraph steps up to 1.12rem in Ink.
- **Label** (700, 0.72–0.82rem, 0.05–0.1em, uppercase): credential line, contact labels, placeholder chips.

### Named Rules
**The Roman Hero Rule.** The hero headline stays roman; emphasis comes from the smile stroke, not italics. Italic is reserved for quoted patient voices.
**The Lining Numerals Rule.** Headings use `lining-nums` so numbers never drop below the baseline.

## Layout

Mobile-first single column with a 20px gutter, expanding at 900px into two-column compositions inside a 1180px container. Sections breathe at clamp(4.5rem, 10vw, 8rem) vertical padding and alternate grounds (off-white → white → off-white → sand → soft yellow → off-white) so rhythm comes from color fields rather than dividers. Hero is `100svh` on desktop, text first and portrait second on mobile. Service grid: 1 → 2 (640px) → 3 (1000px) columns. Testimonials are a native scroll-snap track (86% slides on phones, three per view on desktop); controls show only when the track overflows.

## Elevation & Depth

Hybrid: tonal layering does most of the work (paper on sand), and soft brown-tinted shadows lift only photos, cards and actions. Shadows always have offset and blur.

### Shadow Vocabulary
- **Rest** (`0 1px 2px rgba(58,51,44,.05), 0 2px 8px rgba(58,51,44,.04)`): service cards and the map at rest.
- **Lift** (`0 2px 4px rgba(58,51,44,.04), 0 12px 28px -8px rgba(58,51,44,.12)`): testimonial cards, card hover.
- **Float** (`0 4px 10px rgba(58,51,44,.05), 0 28px 60px -18px rgba(58,51,44,.22)`): arch photo frames and the mobile menu sheet.
- **Warm action** (`0 1px 2px rgba(58,51,44,.08), 0 8px 20px -8px rgba(201,152,40,.55)`): primary yellow button.

## Shapes

Pills for every action, arches for every photograph (fully round top, 24px bottom), 16px for small tiles, 24px for cards and the map. Hairlines are 1px Sand 200; the only decorative line work is the yellow smile curve and a single 1.5px sand arch outline offset behind the About photo.

## Components

### Buttons
- **Shape:** pill (999px), min-height 48–60px, Manrope 600.
- **Primary:** Smile Yellow fill, Ink text, warm action shadow.
- **Outline:** 1.5px Ink stroke on transparent; fills Ink with Off-White text on hover.
- **Dark:** Ink fill, Off-White text, yellow icon; used on the yellow CTA band where a yellow button would vanish.
- **Hover / Focus:** hover only under `(hover: hover) and (pointer: fine)`, 1px lift; press scales to 0.97; focus ring 2px Ink, 3px offset.

### Chips
- **Placeholder chip:** dashed Sand 500 border, uppercase label, Ink Muted. Marks content that must be replaced (example testimonials).

### Cards / Containers
- **Corner Style:** 24px.
- **Background:** Paper White on Off-White or Sand.
- **Shadow Strategy:** Rest at rest, Lift on hover (services); Lift always (testimonials).
- **Border:** 1px Sand 300 at 55% on service cards.
- **Internal Padding:** 1.5–2rem.

### Navigation
- **Desktop:** Manrope 500 0.95rem in Ink Soft, Deep Smile underline that wipes in on hover and marks the section in view; yellow pill CTA at the end. Header turns into off-white glass with a sand hairline after scrolling.
- **Mobile:** two-line toggle morphing to an X; a sheet drops from the top with serif links at 1.5rem and a full-width yellow CTA.

### Arch Photo Frame (signature)
Arch-topped frame with a 6px white border and Float shadow; in the hero an organic Sand 200 blob breathes slowly behind it. Nothing overlaps the photograph.

### Smile Stroke (signature)
A hand-drawn yellow curve under the last phrase of a headline that draws itself once (1.2s, ease-in-out): under "cuidar de pessoas." on load and under "seu sorriso?" when the CTA band enters. At most twice per page, opening and closing.

### Floating WhatsApp
60px yellow pill fixed bottom-right with safe-area inset; on fine pointers it expands on hover to reveal "Agendar consulta". Hidden while the mobile menu is open.

## Do's and Don'ts

### Do:
- **Do** route every booking action to WhatsApp with a yellow or dark pill.
- **Do** frame photography in arches and keep the sand blob behind the hero portrait.
- **Do** keep text in Ink / Ink Soft and body measure under 62ch.
- **Do** gate hover styles behind `(hover: hover) and (pointer: fine)` and give every control an `:active` press.
- **Do** keep entrance motion one-time and content visible by default; respect `prefers-reduced-motion`.

### Don't:
- **Don't** use pure black (#000) for text or fills.
- **Don't** fill large areas with Smile Yellow; the CTA band uses Soft Smile.
- **Don't** set the hero headline in italic; the smile stroke is the emphasis.
- **Don't** put eyebrow labels above section headings.
- **Don't** mix icon styles; icons are 24px line drawings at 1.35px stroke, in Ink, without notification-style dots.
- **Don't** clip revealed elements; entrance masks clear to `clip-path: none` so shadows survive.
