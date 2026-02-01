# Portfolio Site - AI Coding Guidelines

## Architecture Overview
This is a Next.js 15 portfolio website using the App Router. Key architectural patterns:
- **App Router Structure**: Pages in `src/app/`, components in `src/components/`
- **Data Layer**: Project data defined as TypeScript objects in `src/lib/projects.ts` (not MDX yet)
- **Styling**: Tailwind CSS v4 with custom utility classes and local fonts
- **Content**: MDX configured but currently unused; projects use hardcoded data

## Key Patterns & Conventions

### Component Variants
Components like `ProjectCard` use variant props for different layouts:
```tsx
<ProjectCard project={project} variant="featured" />
```
Variants: `default`, `compact`, `featured` - check component for implementation.

### Project Data Structure
Projects defined in `src/lib/projects.ts` as `Project[]` array. Type defined in `src/types/project.ts`:
- `images` can be string or string[] for light/dark mode pairs
- `route` field used for Next.js routing (e.g., `/projects/tailorwrite`)
- Optional fields: `link`, `github`, `testimonial`

### Dynamic Routing
Project pages use `generateStaticParams()` with `getAllProjectSlugs()` from lib.
Metadata generated dynamically using project data for SEO.

### Configuration
Site config in `src/config/site.ts` supports environment variables:
- `NEXT_PUBLIC_EMAIL`, `NEXT_PUBLIC_LINKEDIN`, `NEXT_PUBLIC_GITHUB`

### Styling Patterns
- Custom font loading: `src/app/fonts/` with local WOFF2 files
- Tailwind classes: `bg-neutral-100`, `text-neutral-900`, etc. (neutral palette)
- Selection styling: `selection:bg-green-400/40`

## Development Workflow
- **Dev Server**: `npm run dev` (uses Turbopack)
- **Build**: `npm run build` (Next.js static generation)
- **Lint**: `npm run lint` (ESLint)
- **No tests configured yet**

## File Organization
- `src/lib/`: Utility functions and data (projects.ts, utils.ts, seo.ts)
- `src/components/ui/`: Reusable UI components with variants
- `src/components/sections/`: Page section components
- `src/types/`: TypeScript type definitions
- `public/images/projects/`: Project screenshots organized by project slug

## Common Tasks
- Adding projects: Update `projects` array in `src/lib/projects.ts`, add images to `public/images/projects/[slug]/`
- New pages: Create in `src/app/[route]/page.tsx`, add to navbar if needed
- Styling: Use Tailwind classes, check existing patterns for consistency</content>
<parameter name="filePath">/Users/jamesrobiony-rogers/Developer/ActiveProjects/portfolio-v4/.github/copilot-instructions.md