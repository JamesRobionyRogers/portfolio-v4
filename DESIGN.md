# Design System

The design system for the portfolio site. It takes the visual identity already in the code (light neutral canvas, dark ink cards, Saans, oversized uppercase display type, the year-range motif) and replaces the one-off Tailwind classes with named tokens and components. Every rule is written mobile-first. It covers every page, the blog included.

## Principles

1. **Mobile-first.** Unprefixed classes are for a 320px screen. Use `sm:`, `md:` and `lg:` only to scale up. If a layout only works because of `overflow-x-hidden`, it is broken.
2. **Two surfaces, strong contrast.** A light canvas holds dark ink cards. Anything placed on either surface must meet WCAG AA on it, except `fg-muted` and `accent` on the canvas, which deliberately keep the lighter brand greys and blue.
3. **Type carries the brand.** Display headings are huge, uppercase and tight. Everything else is quiet, so the display type stands out.
4. **Tokens, not values.** Components use semantic tokens (`bg-canvas`, `text-ink-muted`) and never raw `neutral-*`, `gray-*`, hex or arbitrary values.
5. **One component per pattern.** Buttons, tags, headings and section wrappers each have exactly one implementation.

## Tokens

Define these in `src/app/globals.css` under `@theme`. Tailwind v4 generates the utilities, e.g. `--color-canvas` gives you `bg-canvas`, `text-canvas` and `border-canvas`.

### Colour

Every colour is from the Tailwind `neutral` scale, plus one blue accent and the green selection highlight. Do not use the `gray` scale.

| Token | Value | Use |
|---|---|---|
| `canvas` | `neutral-100` `#f5f5f5` | Page background |
| `canvas-sunken` | `neutral-200` `#e5e5e5` | Trays that group cards (e.g. the featured bento) |
| `fg` | `neutral-900` `#171717` | Primary text on the canvas |
| `fg-muted` | `neutral-400` `#a3a3a3` | Secondary text on the canvas (nav status, captions). Below AA by choice; keep it to short, non-essential text |
| `ink` | `neutral-900` `#171717` | Dark surfaces: cards, the project detail shell, the CTA panel |
| `ink-raised` | `neutral-800` `#262626` | A panel nested inside `ink`, and chips on `ink` |
| `ink-chip` | `neutral-700` `#404040` | Chips on an `ink-raised` panel (project detail) |
| `ink-fg` | `neutral-50` `#fafafa` | Primary text on `ink` |
| `ink-muted` | `neutral-300` `#d4d4d4` | Body text on `ink` |
| `ink-subtle` | `neutral-400` `#a3a3a3` | Meta and labels on `ink`. Only on `ink`, never on the canvas |
| `accent` | `blue-400` `#60a5fa` | Links and hover on the canvas (the footer). Below AA by choice, like `fg-muted` |
| `accent-on-ink` | `blue-400` `#60a5fa` | Hover accent on `ink` (card titles) |
| `focus` | `blue-600` `#2563eb` | Focus ring on every surface |
| `highlight` | `green-400 / 40%` | `::selection` background. This is the site's signature detail, so keep it |

Rules:

- Pick text colours by the surface they sit on. `fg*` goes on `canvas` and `ink-*` goes on `ink`. Do not mix them.
- Only one accent hue (blue). Remove `sky-*` and any second accent.
- If dark mode ships, the canvas becomes `neutral-950` and ink surfaces become `neutral-900`, with the same token names.

### Typography

- **Family:** Saans only, loaded with `next/font/local`, exposed as `--font-sans`, and set as the default family.
- **Weights:** 500 (medium), 600 (semibold), 700 (bold). Those are the only files that exist. Do not use `font-black`: there is no 900 file, so it renders as 700.

Type scale (fluid sizes use `clamp()` and are safe from 320px up):

| Role | Classes | Notes |
|---|---|---|
| `display` | `text-[clamp(2.75rem,12vw,12.5rem)] font-bold uppercase leading-[0.85] tracking-tight` | One per page at most. Used for the home "WORK" row |
| `h1` / page title | `text-[clamp(2.5rem,10vw,6rem)] font-bold uppercase leading-[0.9] tracking-tight break-words` | "Featured Projects" and project titles. Replaces `text-8xl font-black` |
| `h2` / section title | `text-[clamp(2rem,7vw,4.5rem)] font-bold uppercase leading-[0.9] tracking-tight` | "All Projects" |
| `lead` | `text-2xl sm:text-4xl lg:text-5xl font-semibold leading-tight` | The about statement. Currently `text-5xl` at every width |
| `eyebrow` | `text-sm sm:text-base font-semibold uppercase tracking-wide` | Section labels ("Myself") and meta labels (Year, Technologies) |
| `h3` / card title | `text-lg lg:text-xl font-semibold` | |
| `body` | `text-base leading-relaxed` | Minimum 16px for body copy and card descriptions |
| `ui` | `text-base sm:text-lg font-semibold` | Nav and footer links |
| `meta` | `text-sm font-medium uppercase tracking-wide` | `Type · Year` on cards |
| `chip` | `text-sm font-medium` | Tags. 14px floor; do not use `text-xs` |

Rules:

- Leading is set per role. Do not use `leading-1` (in v4 that is 4px) or bare `leading-[1]`.
- Each page has exactly one `<h1>` and headings never skip a level. How big a heading looks is set by its role class, not by which tag it is.
- The name in the hero stays as an image, with correct alt text (`James`, `Robiony-Rogers`) and a visually hidden `<h1>James Robiony-Rogers</h1>`.

### Spacing and layout

| Token | Value |
|---|---|
| Gutter | `px-4 sm:px-6 lg:px-8`, the same on the nav, sections and footer |
| Container | `mx-auto w-full max-w-[90rem]` (reuses the existing `max-w-8xl` value) |
| Section rhythm | `py-16 sm:py-20 lg:py-28` |
| Top offset under the sticky nav | `pt-24 lg:pt-28` |
| Grid gap, card lists | `gap-4 sm:gap-6 lg:gap-8` |
| Stack gap inside cards | `gap-2` for text runs, `gap-4` between blocks |
| Card padding | `p-4 lg:p-6` |

Rules:

- Stick to the Tailwind spacing scale. Do not use `gap-15`, `mx-25`, `h-30`, `z-100` or similar off-scale values.
- Apply padding once per level. The footer currently pads twice.
- Grids start as one column: `grid-cols-1`, then `sm:grid-cols-2`, then `lg:grid-cols-12` with spans. The featured bento becomes `col-span-12 lg:col-span-8` and `col-span-12 lg:col-span-4`.
- Paired layouts start stacked and go side by side at `sm` or later: `flex flex-col sm:flex-row`.

### Radius

| Token | Classes | Use |
|---|---|---|
| Card | `rounded-xl lg:rounded-2xl` | Project cards, trays |
| Panel | `rounded-2xl lg:rounded-3xl` | Full-page ink shells (project detail, CTA) |
| Media | `rounded-lg lg:rounded-xl` | Images inside cards and galleries |
| Chip | `rounded-md` | Tags and badges |
| Pill | `rounded-full` | Only glass chips over imagery, and status dots |

### Elevation and effects

- `shadow-lg`: photos that sit on the canvas (portraits).
- `shadow-2xl`: the hero showcase frame only.
- Ink cards have no shadow; the contrast with the canvas is enough.
- **Glass:** `bg-white/20 backdrop-blur-sm text-white`. Use it only on top of an image, for chips on featured cards.
- **Image scrim:** `bg-gradient-to-t from-black/70 via-black/10 to-transparent`. Remove the broken overlay that references `--color-dark` and `--border-radius`.
- **Sticky nav backdrop:** `bg-canvas/80 backdrop-blur-md`.

### Motion

| Token | Value | Use |
|---|---|---|
| `fast` | `duration-200 ease-out` | Colour and underline changes |
| `base` | `duration-300 ease-out` | Transforms, the mobile menu opening |
| `slow` | `duration-500 ease-in-out` | Image zoom and the portrait fan-out |
| Marquee | `--duration: 40s`, linear, infinite | The hero columns and the tech strip |

Rules:

- The default card's image hover is `group-hover:scale-110 group-hover:blur-[5px]` at `duration-800`; the blur is the backdrop for the planned video reveal (see the backlog). Other card variants use `group-hover:scale-105`.
- Transition only the properties you animate (`transition-colors`, `transition-transform`), not `transition-all`.
- **Reduced motion is required.** The marquees use `motion-safe:animate-marquee`, and there is a global fallback:

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { animation-duration: 0.01ms !important; animation-iteration-count: 1 !important; transition-duration: 0.01ms !important; scroll-behavior: auto !important; }
}
```

### Breakpoints

These are the Tailwind defaults; do not add custom breakpoints.

| Prefix | Min width | What changes |
|---|---|---|
| (none) | 0 | Single column, the mobile menu, compact type |
| `sm` | 640px | Two-column card grids, paired rows go side by side, the inline nav appears |
| `md` | 768px | Text alignment only (centred becomes left-aligned) |
| `lg` | 1024px | 12-column layouts, larger gutters and radii, the hero marquee's side columns, the portrait stack |

## Components

Generic primitives (`Tag`, `Button`, `Marquee`…) live in `src/components/ui/`; feature components live in `layout/`, `home/`, `projects/` and `blog/`. Merge class names with `cn()`, and define variants as a plain object map (see `ui/Tag.tsx`).

### Container and Section

- `<Container>`: the container plus the gutter.
- `<Section>`: a `<section>` with the section rhythm, wrapping a `<Container>`. It accepts `surface="canvas" | "ink"`.

### SectionHeading

This is the paired row with the year motif ("Work · '24–'25", "All Projects · '23–'25").

- Layout: `flex flex-wrap items-end justify-between gap-x-6 gap-y-2`. It wraps instead of overflowing.
- The title uses the `display` or `h2` role. The year sits at the same size in `fg-muted`, or on mobile it drops to the `eyebrow` role underneath.
- Props: `as` (the heading level), `title`, `years`.
- Remove the leftover `line-mask` divs.

### Eyebrow

`<p>` or `<h2>` with the `eyebrow` role, in `fg-muted` on the canvas or `ink-subtle` on ink.

### Button

This site currently has no buttons. Use these for CTAs such as "See all", "View Website" and downloading the CV.

| Variant | Classes |
|---|---|
| `primary` | `bg-ink text-ink-fg hover:bg-ink-raised` |
| `secondary` | `border border-fg/15 text-fg hover:bg-canvas-sunken` (on ink: `border-ink-fg/15 text-ink-fg hover:bg-ink-raised`) |
| `ghost` | `text-fg hover:underline underline-offset-4` |

- Base: `inline-flex items-center justify-center gap-2 min-h-11 px-5 rounded-lg font-semibold text-base transition-colors duration-200` plus the focus ring.
- Render it as a `<Link>` for internal routes and an `<a>` for external ones. Use a `<button>` only for actions.
- Put arrow glyphs (→ ↗ ↓) in `<span aria-hidden="true">`.

### TextLink

- Base: `inline-flex items-center gap-1 min-h-11 font-semibold underline-offset-4 hover:underline` plus the focus ring.
- Tone `default`: `text-fg`. Tone `accent`: `text-accent`. Tone `on-ink`: `text-ink-subtle hover:text-ink-fg`.
- Every external link gets `target="_blank" rel="noopener noreferrer"` and a trailing `↗`.
- Internal links always use `next/link`.

### Tag

One style that replaces the five that exist now.

- `on-ink` (default): `inline-flex items-center px-2.5 py-1 rounded-md bg-ink-raised text-ink-muted` plus the `chip` role.
- `glass`: `rounded-full bg-white/20 backdrop-blur-sm text-white`, only on featured cards over images.
- `TagList`: shows `max` tags (2 compact, 3 default, 4 featured), then `+N more`. Uses `flex flex-wrap gap-2`.

### ProjectCard

A single component with variants `default`, `compact` and `featured`.

- Shell: `group block bg-ink rounded-xl lg:rounded-2xl overflow-hidden` plus the focus ring (the whole card is the link).
- Title: the `h3` role, `text-ink-fg group-hover:text-accent-on-ink transition-colors duration-200`.
- The meta line always reads `{type} · {year}`, using the `meta` role in `ink-subtle`.
- The title row is `flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1`, with `shrink-0` on the meta.
- Description: the `body` role in `ink-muted`, clamped with `line-clamp-3`.
- Media is `aspect-4/3` with the media radius. On the `default` variant, hover blurs and zooms the image and (once built) fades in the project's `video` over it; touch and reduced-motion users keep the static image.
- **Featured on mobile:** below `sm` the text stacks under the image (`relative sm:absolute`) so it is never clipped. The overlay layout and scrim apply from `sm` up.
- The `sizes` values must match the rendered width (e.g. `sizes="24px"` for icons).

### Navbar

- Wrapper: `<header>` with `sticky top-0 z-50 bg-canvas/80 backdrop-blur-md` plus the gutter and `py-3`. It sits outside `<main>`.
- **Mobile (below `sm`):**
  - The brand or "Home" link is on the left and a 44×44 menu button on the right, with `aria-expanded` and `aria-controls`.
  - The menu is a full-screen sheet in `bg-canvas`. Links use the `h2` role, stacked, each at least 44px tall.
  - The status block ("NZ Based", "Working on …") sits at the bottom of the sheet.
  - The sheet locks page scroll, traps focus, and closes on Escape, on a link tap and on route change.
- **From `sm` up:** links sit inline, `flex gap-6 lg:gap-10`. From `lg` up the status block also shows inline, in `fg-muted`.
- **Active route:** `aria-current="page"`, shown with `underline underline-offset-8 decoration-2`.
- **On ink pages** (project detail), the nav keeps its canvas backdrop so its text never lands on ink.
- Links come from `siteConfig` in `src/config/site.ts`, not hard-coded strings.

### Footer

- A `<footer>` with a single layer of gutter and `py-8 lg:py-10`.
- Layout: `flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between`, with the links in `flex flex-wrap gap-x-6 gap-y-2`.
- Links use `TextLink` with the `accent` tone and the `ui` role. The copyright reads `© {new Date().getFullYear()}`.
- URLs come from `siteConfig`.

### MetaList (project detail)

- Replaces the `h3`/`h2` label-and-value pairs with `<dl>`.
- Layout: `grid grid-cols-1 sm:grid-cols-12 gap-6`, with spans 3 / 4 / 5 from `sm` up.
- Each `<dt>` uses the `eyebrow` role in `ink-subtle`. Each `<dd>` uses `ink-fg`.

### Gallery (project detail)

- A single image is full width, with the media radius and `sizes="(min-width:1024px) 90rem, 100vw"`.
- A pair uses `grid grid-cols-1 sm:grid-cols-2 gap-4` and `sizes="(min-width:640px) 50vw, 100vw"`.
- Every image has meaningful `alt` text.

### Blog

The blog lives in `src/app/blog/` and `src/components/blog/`, with posts as MDX in `src/content/blog/`. Both pages sit inside the same full-page ink shell as project detail. There are no cards.

**Shell (`BlogShell`)**

- `bg-ink` with the panel radius, `mx-4 sm:mx-6 lg:mx-8 mt-4 lg:mt-8 mb-4 lg:mb-8`, padding `px-4 sm:px-6 pt-16 pb-8 lg:p-16` (equal on all sides from `lg` up), and `flex flex-col gap-8 lg:gap-12`.
- It is at least one screen tall: its bottom margin meets the viewport's bottom edge and the footer sits just below the fold.
- That height comes from the `body:has(.blog-shell)` rule in `globals.css`, which works without hard-coding the nav height. It makes the body a grid, stretches the nav and main rows to `100svh` with a spanning `::before`, and `grow`s the shell inside a flex `main`.
- It renders a `<div>` by default and an `<article>` on post pages (`as="article"`). Project detail keeps its own shell.
- All text inside uses the `ink-*` colours.

**Listing (`/blog`)**

- The title "Blog" uses the `h1` role in `ink-fg`.
- `PostList` is a `<ul>` of divided rows, `border-t` plus a `border-b` per row in `ink-raised`, newest first.
- Each row is one `Link` with the focus ring: `flex flex-col sm:flex-row gap-2 sm:gap-6 py-6 lg:py-8`.
- The date (`PostDate`, the `meta` role in `ink-subtle`) is a fixed `sm:w-40` column, so the title starts close beside it.
- The title is an `<h2>`, `text-xl lg:text-2xl font-semibold leading-tight text-ink-fg group-hover:text-accent-on-ink`. The description uses the `body` role in `ink-muted` at `max-w-prose`, followed by a `TagList` with `max={4}`.
- Dates render as `<time dateTime>` in `en-NZ` long form ("23 March 2023").

**Post header (`PostHeader`)**

- It opens with a breadcrumb: a `<nav aria-label="Breadcrumb">` holding a `Link` to `/blog`, then `/`, then the post title (`aria-current="page"`, `truncate`). The breadcrumb text is `text-sm font-medium text-ink-subtle`, and the link has `min-h-11` and the focus ring.
- Next comes the post `<h1>`, sentence case: `text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight break-words text-ink-fg`. Post titles are full sentences, so they skip the uppercase `h1` role.
- Below the title, a row holds the date (`PostDate` in `ink-subtle`) and the full `TagList`: `flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6`.
- The cover image comes last: `aspect-video` with the media radius, `priority`, and `alt` set to the post title.

**Prose**

- The MDX body is `prose blog-prose`. `.blog-prose` in `globals.css` maps the typography plugin's colours onto the ink tokens: `ink-fg` body, headings, links and bold, and `ink-raised` rules and code-block backgrounds.
- Headings are `font-semibold` with `scroll-mt-28` so anchor jumps clear the sticky nav. Links are `font-semibold`, turn `accent-on-ink` on hover and get the focus ring.
- Images get the media radius. Inline code is a chip, `bg-ink-chip rounded-md px-1.5 py-0.5`, with no backticks. `ink-raised` is too close to `ink` to read.
- The body drops `prose`'s `65ch` measure (`max-w-none`) to fill its 8 columns, and keeps `break-words` so long URLs and inline code never overflow at 320px.
- Posts start at `##`. The page's only `<h1>` is the post title, so never write a `#` heading in MDX.

**Layout and table of contents**

- Below the header: `grid grid-cols-1 lg:grid-cols-12 gap-8`, with the body at `lg:col-span-8` and the TOC pinned right at `lg:col-span-2 lg:col-start-11`.
- `TableOfContents` shows from `lg` up only. It is a `<nav>` labelled by an `<h2>` "On this page" in the `eyebrow` role and `ink-subtle`, `sticky top-28`.
- It lists the body's `h2` and `h3` (indented `pl-4`). Links are `text-base`, `min-h-11`, with the focus ring, in `ink-subtle` and `hover:text-ink-fg`.
- The heading in view gets `aria-current="location"`, `text-accent-on-ink` and `underline underline-offset-4 decoration-2`.
- Clicking scrolls smoothly, or instantly under `prefers-reduced-motion`, and updates the URL hash.

### BentoGrid (hero showcase)

The video-first project mosaic inside the hero frame (`projects/ProjectBentoGrid.tsx`, used by `home/Hero.tsx`). It replaced the hero marquee.

- **Props:** `projects` from `projects.ts`. Each tile uses `project.video`, then `project.featuredImage`.
- **Layout from `lg` up:** a 13×8 grid in an `aspect-video` frame with `gap-4`. The project with `featured: 1` (else the first) takes the centre (`col 4 / span 7`, `row 3 / span 4`). The rest cycle through the 11 fixed slots around it.
- **Below `lg`:** a single column of `aspect-video` tiles with `gap-4`, capped at 4 tiles so a phone isn't loading a dozen videos. The 13-column grid must never render on a phone.
- **Tile shell:** `bg-ink` with the card radius (`rounded-xl lg:rounded-2xl`) and no shadow. The whole tile is the link, with the focus ring.
- **Media:** fills the tile with `object-cover`. Videos are `muted loop playsInline`, play only while at least half visible (IntersectionObserver), and preload `metadata` except on the featured tile. Under `prefers-reduced-motion` they don't autoplay; show the poster frame.
- **Overlay:** the image scrim, then the title (`h3` role, `text-ink-fg`) and description (`body` role, `text-ink-muted`, `line-clamp-2`) from `lg` up. It must use a real breakpoint.
- **Hover:** `group-hover:scale-105` on the media at the `slow` timing, not a framer-motion scale on the tile.
- **Alt text:** the project title, never a generic "project".
- Use a stable `key` (`project.slug` plus index), not the index alone.

### Marquee

- `ui/Marquee.tsx` (from magicui). Its animation classes are `motion-safe:`.
- **Hero on mobile:** show one column, without rotation, inside `aspect-[4/5] sm:aspect-video`.
- **Tech strip:** items are `text-xl sm:text-3xl` with icons `size-8 sm:size-14`. Use a bleed of `-mx-4 sm:-mx-6 lg:-mx-8` to match the gutter, and build the items by mapping an array rather than repeating markup.

## Mobile standards

These apply to every component and page and are checked on each PR.

- **Test widths:** 320, 375, 390 and 430px portrait, plus 844px landscape. Nothing may clip, overlap or scroll sideways at any of them.
- **Tap targets:** at least 44×44px (`min-h-11 min-w-11`), with at least 8px between them. Use padding on the link itself, not on a wrapper.
- **Type floor:** 16px for body copy, 14px for meta and chips. Display text uses `clamp()` whose minimum fits a 288px content width.
- **Viewport height:** use `svh` or `dvh` (`min-h-[90svh]`, `min-h-svh`), never `vh` or `h-screen`.
- **Safe areas:** set `export const viewport = { viewportFit: 'cover', themeColor: '#f5f5f5' }`. The nav and footer gutters use `max(1rem, env(safe-area-inset-left/right))`.
- **Hover is extra:** anything shown on hover (the portrait fan-out, image zoom) must also be reachable or visible without hover. For example, show a single static portrait on mobile.
- **Focus:** every interactive element gets `focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus`, and the page starts with a skip link to `<main>`.
- **Images:**
  - The site is a static export to GitHub Pages, so `next/image` does not optimise anything.
  - Pre-generate AVIF/WebP files at 640, 1024 and 1600px (a `sharp` script or `next-image-export-optimizer`).
  - No image shipped to a phone may be over 300KB.
  - Only the hero image gets `priority`.
- **Motion:** honour `prefers-reduced-motion` everywhere. The only `blur` animation allowed is the default project card hover.
- **Landmarks:** `<header>`, then `<main id="main">`, then `<footer>`. Never nest a `<main>`.

## Voice and content

- **Display headings:** ALL CAPS through CSS (`uppercase`), written in Title Case in the source.
- **Nav and footer:** single words in Title Case (Home, Projects, Blog, LinkedIn, GitHub).
- **Year motif:** an apostrophe followed by two digits, with an en dash for ranges: `'24–'25`, `'23–'25`. Use it the same way everywhere.
- **CTAs:** short and casual, first person, ending in a Unicode arrow: "See all →", "View Website ↗", "View Code ↗".
- **Tone:** plain and confident. State what was built and with what, and skip adjectives.

## Migration backlog

These are ordered by how much each item affects mobile users. File references are to the code as it is today.

**P0: broken on phones**

1. Build the Navbar spec: add a background, a mobile menu and 44px targets. The links currently clip at 320px and disappear over ink (`layout/Navbar.tsx`).
2. `/projects`: the `text-8xl` headings, the bento that never stacks, and the forced side-by-side "All Projects" row (`projects/page.tsx`).
3. Project detail: title overflow, triple gutter, gallery pairs at about 100px (`[slug]/page.tsx`).
4. The `lead` paragraph is 48px on mobile, and `pt-56` leaves a 224px gap (`home/About.tsx`).
5. The footer overflows at 375px and is padded twice (`layout/Footer.tsx`).
6. Images are one WebP each, with no `srcset`. Add 640/1024/1600px variants (and AVIF) to `scripts/optimise-images.mjs`, and get `left-selfportrate.webp` (345KB) under 300KB.
7. BentoGrid: the mobile stack is permanently `hidden` and the 13-column grid renders at every width, so phones get thumbnail-sized tiles and every video (`projects/ProjectBentoGrid.tsx`).

**P1: usability and accessibility**

8. Hero: `leading-1`, the undersized surname image and its wrong alt text, and `90vh` (`home/Hero.tsx`). BentoGrid tiles use `alt="project"` and an overlay behind the non-existent `3xl` breakpoint.
9. Card text under 16px/14px, the title row squeezing, and the featured card clipping its text (`projects/ProjectCard.tsx`).
10. Focus ring, skip link, one `<h1>` per page, `<dl>` for project meta.

**P2: consistency and cleanup**

11. Move headings and copy onto the type-scale roles, replacing one-off `text-[clamp(…)]` and `leading-[…]` values.
12. Build `Container`, `Section`, `SectionHeading`, `Button` and `TextLink`, and move the existing pages onto them.
13. Style `error.tsx` and `not-found.tsx`.

**Features to build**

14. Default `ProjectCard` video reveal: on hover, over the blurred image, fade in the project's `video` (muted, looping, `poster` set) and play it; pause and fade out on leave. Cards without a `video` keep the blur only. Touch devices and reduced motion show the static image (`projects/ProjectCard.tsx`).
