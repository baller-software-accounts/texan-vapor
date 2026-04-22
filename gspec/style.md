---
name: business-site
gspec-version: v1
description: Clean, professional design with restrained palette and clear typography
---

# Visual Style Guide

## 1. Overview

- **Design Vision**: A clean, professional interface that communicates expertise and trustworthiness. The design recedes to let content take center stage — clear typography, generous whitespace, and purposeful color usage.
- **Target Platforms**: Responsive web (Mobile-First, scaling to Desktop/Tablet).
- **Visual Personality**: Professional, Approachable, Reliable, Pragmatic.
- **Design Rationale**: A professional services site must project competence and trustworthiness at a glance. The restrained palette and clear typography let the content speak, while strategic use of color draws attention to key actions. The minimal aesthetic avoids visual noise that could undermine credibility.

## 2. Color Palette

High-contrast and professional, designed for readability across devices and lighting conditions.

### Primary Colors

| Color Name        | Hex       | Usage                                                                              |
| :---------------- | :-------- | :--------------------------------------------------------------------------------- |
| **Primary**       | `#2563EB` | Primary action color. Used for primary buttons, active states, and key highlights. |
| **Primary Dark**  | `#1D4ED8` | Hover states for primary actions.                                                  |
| **Primary Light** | `#60A5FA` | Accents on dark backgrounds.                                                       |

### Secondary Colors

| Color Name        | Hex       | Usage                     |
| :---------------- | :-------- | :------------------------ |
| **Slate Dark**    | `#0F172A` | Dark mode background.     |
| **Slate Surface** | `#1E293B` | Dark mode cards/surfaces. |
| **Paper White**   | `#FFFFFF` | Light mode background.    |

### Neutral Colors

| Role               | Light Mode | Dark Mode | Usage                                    |
| :----------------- | :--------- | :-------- | :--------------------------------------- |
| **Text Primary**   | `#0F172A`  | `#F8FAFC` | Headings, main body text.                |
| **Text Secondary** | `#64748B`  | `#94A3B8` | Labels, helper text, supporting content. |
| **Text Disabled**  | `#CBD5E1`  | `#475569` | Disabled fields, placeholders.           |
| **Border**         | `#E2E8F0`  | `#334155` | Dividers, input borders.                 |

### Semantic Colors

| State       | Color   | Hex       | Usage                                     |
| :---------- | :------ | :-------- | :---------------------------------------- |
| **Success** | Emerald | `#10B981` | Success confirmations, positive feedback. |
| **Error**   | Red     | `#EF4444` | Validation errors, destructive actions.   |
| **Warning** | Amber   | `#F59E0B` | Non-critical alerts, warnings.            |
| **Info**    | Sky     | `#0EA5E9` | Informational tooltips, notes.            |

---

## 3. Typography

Typography is the primary interface element. It must be legible and convey professionalism.

### Font Families

- **Primary (UI & Headings)**: **Inter** (Google Fonts). Clean, highly legible, with a tall x-height.
- **Monospace (Code & Data)**: **JetBrains Mono** or system monospace fallback. Used for code snippets or technical content if needed.

### Type Scale (Mobile-First)

| Level         | Size (rem/px)     | Line Height | Weight         | Usage                         |
| :------------ | :---------------- | :---------- | :------------- | :---------------------------- |
| **H1**        | `1.875rem` (30px) | `1.2`       | Bold (700)     | Page titles                   |
| **H2**        | `1.5rem` (24px)   | `1.3`       | SemiBold (600) | Section headers               |
| **H3**        | `1.25rem` (20px)  | `1.4`       | Medium (500)   | Sub-sections, card titles     |
| **Body Lg**   | `1.125rem` (18px) | `1.5`       | Regular (400)  | Featured text, hero subtitles |
| **Body Base** | `1rem` (16px)     | `1.5`       | Regular (400)  | Default text, descriptions    |
| **Body Sm**   | `0.875rem` (14px) | `1.4`       | Regular (400)  | Metadata, captions            |
| **Caption**   | `0.75rem` (12px)  | `1.4`       | Medium (500)   | Tiny labels, tags             |

---

## 4. Spacing & Layout

Standard 4px grid system.

### Spacing Scale

- **xs**: `4px` (0.25rem) — Tight grouping (tags, icon+text)
- **sm**: `8px` (0.5rem) — Component internal spacing
- **md**: `16px` (1rem) — Standard separation between elements
- **lg**: `24px` (1.5rem) — Section separation
- **xl**: `32px` (2rem) — Major layout breaks

### Grid System

- **Container**: Max-width 1152px centered with horizontal padding for comfortable reading width.
- **Columns**: Single-column layout on mobile. Multi-column grids on desktop where appropriate.

### Layout Patterns

- **Mobile-first**: Single-column stacked layout.
- **Desktop**: Multi-column grids for cards and feature sections.
- **Flex containers**: Always apply `min-width: 0` on flex children that wrap content to prevent the flexbox `min-width: auto` default from causing horizontal overflow on mobile.
- **Content wrappers**: Use `overflow: hidden` on bounded containers (cards, main content area) to clip any remaining overflow.

---

## 5. Themes

### Light Mode (Default)

- **Background**: `#FFFFFF`
- **Surface**: `#F8FAFC` or `#FFFFFF` with borders.
- **Text**: `#0F172A`

### Dark Mode

- **Background**: `#0F172A` (Not pure black, reduces contrast strain).
- **Surface**: `#1E293B`
- **Primary Action**: `#2563EB` stands out vividly.
- **Text**: `#F8FAFC` for high legibility.

### Theme Token Mapping

- Light and dark themes share the same token names. Switching themes swaps the values of `--color-background`, `--color-surface`, `--color-text-primary`, `--color-text-secondary`, `--color-text-disabled`, and `--color-border`.

---

## 6. Component Styling

> **This section defines visual styling only** — colors, borders, typography, and spacing for common UI elements. Component structure, behavior, and layout patterns are defined in feature PRDs.

### Buttons

- **Primary**: Background `#2563EB`, text white, border-radius 8px (`rounded-lg`). Height 48px for large/CTA, 40px for standard. Minimum touch target 44x44px.
- **Primary Hover**: Background `#1D4ED8`, shadow elevation increase, subtle upward translate (`-translate-y-0.5`).
- **Secondary / Ghost**: Background transparent, border 1px or 2px `white/30` (on dark backgrounds) or `--color-border`. Hover: subtle background fill.
- **CTA Buttons**: Always appear in pairs — a solid primary button and a ghost/outline companion (e.g., "Get a Free Quote" + "Call (972) 800-7000"). Stack vertically on mobile, side-by-side on `sm:`.
- **Disabled**: 50% opacity, `cursor: not-allowed`.
- **Icon + Text**: Inline SVG icon (h-4 w-4) placed to the left of text (phone icon) or right of text (arrow icon).

### Form Elements

- **Input Background**: Transparent (Light) / Transparent (Dark).
- **Input Border**: 1px `--color-border`, border-radius 6px (`rounded-md`).
- **Focus**: Border `#2563EB`, ring `rgba(37, 99, 235, 0.2)` via `focus:ring-2 focus:ring-primary/20`.
- **Error**: Border `--color-error`, helper text in `--color-error` shown inline below the field.
- **Disabled**: 50% opacity.
- **Min height**: 44px for all inputs to meet touch target requirements.

### Cards & Containers

- **Border-radius**: 16px (`rounded-2xl`) for cards and content containers. 12px (`rounded-xl`) for smaller elements like badges and icon containers.
- **Border**: 1px solid `--color-border`.
- **Background**: `--color-background` (Light) / `--color-surface` (Dark).
- **Hover interaction**: Cards lift on hover via `-translate-y-1` with `shadow-lg` transition. Duration 300ms.
- **Shadow**: Cards use minimal or no shadow at rest. Shadow appears on hover (`hover:shadow-lg`). Floating/elevated elements (stats bar, contact cards) use `--shadow-xl`.

### Navigation Elements

- **Header**: Sticky top with glassmorphic background: `bg-[--color-background]/80 backdrop-blur-lg`. Border-bottom in `--color-border`.
- **Logo**: Icon mark (9x9 `rounded-lg` primary background) + text wordmark. Subtitle in 11px uppercase tracking-wider.
- **Nav Links**: `rounded-lg px-4 py-2`. Active state: `bg-primary/10 text-primary`. Hover: `bg-[--color-surface]`.
- **Phone CTA in Nav**: Primary button with phone icon, always visible in desktop nav. Full-width in mobile menu.
- **Mobile Menu**: Hamburger toggles to X icon. Menu panel with stacked links + full-width phone CTA button at bottom.

---

## 7. Visual Effects

### Shadows & Elevation

Layered elevation system — elements gain shadow on interaction or when floating.

- **None**: Most elements at rest.
- **sm**: `0 1px 2px rgba(0, 0, 0, 0.05)` — subtle resting state for logo icon, social links.
- **md**: `0 4px 6px rgba(0, 0, 0, 0.07)` — sticky header (via glassmorphic blur, not shadow).
- **lg**: `0 10px 25px rgba(0, 0, 0, 0.1)` — cards on hover, contact info cards.
- **xl**: `0 20px 50px rgba(0, 0, 0, 0.15)` — floating/overlapping elements (stats bar, elevated panels).

### Border Radius

- **Standard**: 6px (`rounded-md`) for inputs, buttons, small elements.
- **Medium**: 8px (`rounded-lg`) for CTA buttons, nav links, icon containers, logo mark.
- **Large**: 16px (`rounded-2xl`) for cards, content containers, image wrappers, section panels.
- **Full**: 12px (`rounded-xl`) for icon backgrounds, badges.
- **Pills**: 9999px (`rounded-full`) for status tags, indicator dots.

### Transitions & Animations

- **Speed**: Fast (150ms) for color/opacity changes. Medium (200ms) for transforms and layout shifts. Slow (300ms) for card hover lifts and complex interactions. 500ms for image zoom on hover.
- **Ease**: `cubic-bezier(0, 0, 0.2, 1)` (ease-out) for all transitions.
- **Hover lift**: Cards and interactive elements translate upward (`-translate-y-0.5` for buttons, `-translate-y-1` for cards) with shadow increase.
- **Icon scale**: Icon containers scale up on group hover (`group-hover:scale-110`).
- **Image zoom**: Images inside cards scale up on hover (`group-hover:scale-105`, duration 500ms) with `overflow-hidden` on the container.
- **Loading States**: Spinner icon (animate-spin SVG circle) for form submission. Pulsing dot (`animate-pulse`) for status indicators.

### Glassmorphism

- **Header**: `bg-[--color-background]/80 backdrop-blur-lg` for a frosted-glass sticky header effect.
- **Hero badges**: `bg-white/10 backdrop-blur-sm border-white/20` for floating labels on dark hero backgrounds.

---

## 8. Page & Section Patterns

### Hero Sections

Two hero variants are used across the site. **Every hero must ship with a real background image** (stock photography is acceptable and expected — see Section 10). Hero sections must never render as a solid color, gradient-only block, or empty placeholder; a missing image is a bug, not a styling choice.

- **Full-bleed hero** (Home page): Minimum height `85vh`. **Required** full-width background image with gradient overlay (`bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/40`). Content constrained to `max-w-xl` on the left. Includes a status badge (glassmorphic pill with pulsing dot), H1 headline, body text, and dual CTA buttons.
- **Page hero** (About, Contact): Shorter height with `py-20 sm:py-28`. **Required** background image with the same gradient overlay pattern. Includes a small uppercase label in `--color-primary-light`, H1, and subtitle text in `slate-300`.

### Section Headers

Every major content section follows this pattern:
1. Small uppercase label: `text-sm font-semibold uppercase tracking-wider text-primary`
2. H2 heading: `mt-2 text-3xl font-bold sm:text-4xl`
3. Optional subtitle: `mx-auto mt-4 max-w-2xl text-[--color-text-secondary]`
4. All centered (`text-center`) unless the section uses a side-by-side layout.

### Floating / Overlapping Elements

Key sections use negative margins to overlap the section above:
- **Stats bar**: `relative -mt-12 z-10` — a card grid that floats over the hero bottom edge, anchored with `--shadow-xl`.
- **Contact cards**: `relative -mt-10 z-10` — three info cards overlapping the contact page hero.

This overlap pattern creates visual depth and ties sections together.

### Alternating Section Backgrounds

Sections alternate between `--color-background` (white/dark base) and `--color-surface` (subtle gray/slate). This creates visual rhythm without heavy dividers. Pattern:
- Hero → (overlap element) → white section → surface section → white section → CTA.

### Side-by-Side Layouts

Used on About page for story/mission sections:
- `grid lg:grid-cols-2 gap-12 lg:gap-16 items-center`
- Image on one side, text content on the other. **The image slot is required — ship a real image (stock is fine), never a gray box or empty div.**
- Alternate order on subsequent sections (`order-1 lg:order-2` swap).
- Images are `rounded-2xl overflow-hidden`.
- Optional floating badge absolutely positioned on the image (e.g., "4 Years — Nextdoor Favorite").

### Value Proposition Cards

Icon-driven cards with color-coded icon backgrounds:
- Each card has a distinct color (emerald, blue, amber, sky) to create visual variety.
- Icon container: `h-12 w-12 rounded-xl bg-{color}-100 text-{color}-600` (light mode), `dark:bg-{color}-900/30 dark:text-{color}-400`.
- Cards hover with `-translate-y-1` and `shadow-lg`.
- Icon scales up on hover via `group-hover:scale-110`.

### Service Cards

Image-topped cards. **Every service card must carry a real photographic image** — the image is part of the card's structure, not a decorative extra.

- `rounded-2xl overflow-hidden` container with border.
- Image area: `h-48 overflow-hidden` with `object-cover`. Gradient overlay `bg-gradient-to-t from-black/30 to-transparent`.
- Image zooms on hover: `transition-transform duration-500 group-hover:scale-105`.
- Text content in `p-6` below the image.

### Testimonial Cards

Quote cards with star ratings:
- 5 amber star SVGs at the top.
- Large decorative quote mark SVG (`text-primary/10`) positioned `absolute top-6 right-6`.
- Quote text in `--color-text-primary` with generous line-height (1.7).
- Source attribution with em-dash prefix.

### CTA Sections

Full-width CTA with background image and primary color gradient overlay. **The background image is required** — the gradient overlay sits on top of an image, never on a flat color.

- `bg-gradient-to-r from-primary/95 via-primary/90 to-primary-dark/90` over the image.
- Centered text (H2 in white, subtitle in `blue-100`).
- Dual buttons: solid white button + ghost outline button with phone icon.
- Both buttons have hover lift (`-translate-y-0.5`) and shadow transitions.

### Footer

Four-column grid (`lg:grid-cols-4`):
- Column 1: Brand logo + description + social links (icon buttons in `h-9 w-9 rounded-lg`).
- Column 2: Quick links.
- Column 3: Contact info.
- Column 4: Hours with label/value flex layout.
- Section headers: `text-sm font-semibold uppercase tracking-wider`.

---

## 9. Iconography

### Icon Library

- **Library**: [HeroIcons](https://heroicons.com/) — MIT-licensed, SVG-based, tree-shakeable inline imports. Maintained by the Tailwind team for consistent pairing with utility-first CSS.
- **Style**: Outlined, 2px stroke.
- **Size**:
  - Small: 16px.
  - Standard: 20px.
  - Navigation: 24px.

### Usage Guidelines

- Pair icons with text labels in navigation for accessibility.
- Use familiar metaphors for common actions.

---

## 10. Imagery & Media

### Photography Style

**Photographic imagery is required throughout the site — not optional, not deferred.** Every hero, every service card, every side-by-side section, and every CTA band must ship with a real image from the first deployable build. A page that renders without its images is considered incomplete, even if the layout and copy are correct.

Use high-quality stock photography throughout the site to make pages more visually appealing and reinforce the brand. Images should depict subject matter that fits the site's domain (e.g., for a landscaping business: well-maintained landscapes, gardens, outdoor spaces, and seasonal greenery). Prefer warm, natural lighting and authentic-feeling compositions over overly staged or corporate imagery.

- **Required slots**: Home hero, every page hero (About, Contact, etc.), every service/feature card, every side-by-side section image slot, and every CTA band background.
- **Sources**: Use royalty-free stock image services (e.g., Unsplash, Pexels) for both placeholder and production imagery. Stock is acceptable for launch — there is no tier where "we'll add images later" is allowed.
- **No empty states**: Do not ship gray boxes, solid-color fills, "image coming soon" placeholders, or commented-out `<img>` tags in place of imagery. If a real image can't be sourced, pick a stock image that fits and move on.
- **Aspect Ratios**: Hero images should use 16:9 or 3:1 ratios. Card thumbnails should use 4:3 or 1:1 ratios.
- **Treatment**: Apply subtle overlays (dark gradient) when placing text over images to ensure readability and contrast compliance.

### Icons & Visual Accents

Use icons generously alongside text content to improve scannability and visual interest. Beyond the HeroIcons UI icons defined in Section 8, incorporate decorative or thematic icons (e.g., leaf, sun, tree, water droplet) in feature sections, service cards, and callouts to reinforce the landscaping theme.

### Illustrations

Empty states use icon + text patterns. If illustrations are added, they should use a simple, line-art style consistent with the outlined icon aesthetic.

---

## 11. Accessibility

### Contrast Requirements

- Maintain WCAG AA standard (4.5:1) for normal text.
- Large text (18px+ or 14px+ bold) requires 3:1 minimum.

### Focus States

- Visible focus rings for keyboard/screen reader navigation.
- Focus ring style: 2px offset ring in primary color.

### Text Accessibility

- **Touch**: All interactive elements must have at least 44px hit areas.
- Minimum body font size: 16px (1rem).

---

## 12. Responsive Design

### Breakpoints

- **Mobile First**: Design for 375px width base.
- **sm**: 640px (Large phones)
- **md**: 768px (Tablets)
- **lg**: 1024px (Desktop)

### Mobile-Specific Patterns

- Touch targets: minimum 44x44px on all interactive elements.
- Mobile navigation: Hamburger menu pattern (see Components > Navigation).

---

## 13. Usage Examples

### Design Tokens

Tokens are defined as framework-agnostic CSS custom properties.

- Naming convention: `--color-*`, `--font-*`, `--spacing-*`, `--shadow-*`, `--radius-*`, `--duration-*`

```css
:root {
  /* Colors — Primary */
  --color-primary: #2563eb;
  --color-primary-dark: #1d4ed8;
  --color-primary-light: #60a5fa;
  --color-primary-foreground: #ffffff;

  /* Colors — Semantic */
  --color-success: #10b981;
  --color-error: #ef4444;
  --color-warning: #f59e0b;
  --color-info: #0ea5e9;

  /* Colors — Light Mode (default) */
  --color-background: #ffffff;
  --color-surface: #f8fafc;
  --color-text-primary: #0f172a;
  --color-text-secondary: #64748b;
  --color-text-disabled: #cbd5e1;
  --color-border: #e2e8f0;

  /* Typography */
  --font-family-sans: 'Inter', sans-serif;
  --font-family-mono: 'JetBrains Mono', monospace;
  --font-size-h1: 1.875rem;
  --font-size-h2: 1.5rem;
  --font-size-h3: 1.25rem;
  --font-size-body-lg: 1.125rem;
  --font-size-body: 1rem;
  --font-size-body-sm: 0.875rem;
  --font-size-caption: 0.75rem;
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;

  /* Spacing */
  --spacing-xs: 0.25rem;
  --spacing-sm: 0.5rem;
  --spacing-md: 1rem;
  --spacing-lg: 1.5rem;
  --spacing-xl: 2rem;

  /* Border Radius */
  --radius-md: 0.375rem;
  --radius-lg: 0.5rem;
  --radius-full: 9999px;

  /* Shadows */
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.07);
  --shadow-lg: 0 10px 25px rgba(0, 0, 0, 0.1);
  --shadow-xl: 0 20px 50px rgba(0, 0, 0, 0.15);

  /* Transitions */
  --duration-fast: 150ms;
  --duration-medium: 200ms;
  --duration-slow: 300ms;
  --ease-out: cubic-bezier(0, 0, 0.2, 1);
}

/* Dark Mode */
[data-theme='dark'],
.dark {
  --color-background: #0f172a;
  --color-surface: #1e293b;
  --color-text-primary: #f8fafc;
  --color-text-secondary: #94a3b8;
  --color-text-disabled: #475569;
  --color-border: #334155;
}
```

### Component Combinations

To be defined.
