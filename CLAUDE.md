# portfolio-v4

Personal portfolio at `jamesrobionyrogers.com`. Next.js App Router, Tailwind v4, statically exported to GitHub Pages.

## Commands

- Dev: `npm run dev` (Turbopack).
- Verify: `npm run lint && npm run build`. CI only runs `next build` on push to `main`, so a build error there means the live site doesn't update.
- There are no tests. Check UI changes in the browser at 320, 375 and 1280px widths.

## Design system

- Follow `DESIGN.md` for all non-blog UI: tokens, type scale, components and mobile standards.
- Use the semantic tokens (`bg-canvas`, `text-fg-muted`, `bg-ink`) in new code. Do not use raw `neutral-*`, `gray-*`, hex or arbitrary values.
- Write classes mobile-first: unprefixed for 320px, then `sm:` / `lg:` to scale up. Never rely on the `overflow-x-hidden` on `<body>` to hide overflow.
- Before building a new button, tag, heading or section wrapper, check for the `DESIGN.md` component. Pick it off the migration backlog if it doesn't exist yet.
- The blog (`src/app/blog/`, `src/content/blog/`, `TableOfContents`) is excluded from `DESIGN.md` and is being redesigned. Don't restyle it unless asked.

## Architecture

- Project data lives in `src/lib/projects.ts`. The bento grid, featured cards and navbar derive from its `featured`, `current` and `video` fields; never hard-code project lists or media paths in components.
- Only the blog reads MDX (`src/lib/mdx.ts`, which loads `src/content/blog/`).
- Tailwind is configured in CSS (`src/app/globals.css`). There is no `tailwind.config`.
- `src/config/site.ts` holds the site name, URL, description, nav and social links. Read from `siteConfig` instead of hard-coding them.

## Gotchas

- The build is a static export (`output: 'export'` in `next.config.ts`). No API routes, server actions, middleware or runtime `headers()`/`cookies()`.
- Every dynamic route needs `generateStaticParams`, or the Pages build fails.
- Images are served unoptimised, so `next/image` does no resizing. Run `npm run optimise-images` after adding images to `public/`, then reference the `.webp` it writes.
- Image paths are case-sensitive on Pages but not on macOS. Match the filename casing exactly (`SelfPortrait.webp`, `right-selfportrate.webp`).
- Saans ships only weights 500, 600 and 700 (`src/app/fonts/`). `font-black` renders as 700 and `font-normal` as 500.
- In Tailwind v4, `leading-1` means 4px of line height, not `line-height: 1`.
- External project links in `projects.ts` need the `https://` prefix, or they resolve as relative paths.

## Workflow

- Pushing to `main` deploys to production. Land changes through a PR.
