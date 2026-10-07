# Portfolio v4

Personal portfolio and blog at [jamesrobionyrogers.com](https://jamesrobionyrogers.com). Next.js 15 App Router, React 19, TypeScript and Tailwind CSS v4, statically exported to GitHub Pages.

## Getting started

Requires Node.js 20+.

```bash
npm install
npm run dev      # http://localhost:3000, with Turbopack
```

Before opening a PR:

```bash
npm run lint && npm run build   # build writes the static site to out/
```

Pushing to `main` deploys to production, so land changes through a pull request.

## Project structure

```
public/images/
  projects/<folder>/    screenshots and videos for each project
  blog/                 blog images
  assets/               portraits and other site images
src/
  app/                  routes (home, projects, blog, cv, services), sitemap.ts, robots.ts
    fonts/              Saans woff2 files
  components/
    layout/             Navbar, Footer
    home/               Hero, About, Work (home page sections)
    projects/           ProjectCard, ProjectBentoGrid, ProjectLinks
    blog/               TableOfContents
    ui/                 shared primitives: Tag, Marquee
  config/site.ts        site name, URL, description, nav and social links
  content/blog/         blog posts (.mdx)
  lib/
    projects.ts         all project data and helpers
    mdx.ts              blog loader
  types/project.ts      the Project type
```

`DESIGN.md` holds the design system for everything except the blog.

## Adding a project

1. Put the images (and an optional `.mp4`) in `public/images/projects/<folder>/`. Run `npm run optimise-images` and use the `.webp` files it writes, because images are served unoptimised.
2. Add an entry to the `projects` array in `src/lib/projects.ts`:

   ```ts
   {
     title: "Project Name",
     slug: "project-name",              // page lives at /projects/project-name
     featuredImage: "/images/projects/project-name/cover.webp",
     video: "/images/projects/project-name/demo.mp4",   // optional, used in the home bento grid
     poster: "/images/projects/project-name/demo-poster.webp",   // optional, shown before the video plays
     images: ["/images/projects/project-name/cover.webp"],
     icon: "",
     description: "One-line description for cards.",
     summary: "Longer summary for the project page.",
     technologies: ["React", "TypeScript"],
     type: "Web Application",
     year: 2026,
     link: "https://example.com",       // optional, must include https://
     github: "https://github.com/...",  // optional
     featured: 2,                       // optional rank on home and /projects; 1 is the bento hero
     current: true,                     // optional, shows as "Working on" in the navbar
   }
   ```

That's all you need. The project page, cards, bento tile and sitemap entry are all generated from that one entry.

## Blog Posts and How They Work

### Blog Architecture

The blog system uses **MDX (Markdown + JSX)** with frontmatter for metadata. Blog posts are stored as `.mdx` files in `src/content/blog/` and rendered dynamically.

### Creating a New Blog Post

1. **Create a new `.mdx` file** in `src/content/blog/`:
   ```bash
   touch src/content/blog/my-new-post.mdx
   ```

2. **Add frontmatter** at the top of the file:
   ```yaml
   ---
   title: "Your Blog Post Title"
   date: "2026-01-29"
   description: "A brief description of your post for SEO and previews"
   image: "/images/blog/your-hero-image.jpg"
   tags: ["react", "nextjs", "typescript"]
   ---
   ```

3. **Write your content** using Markdown and MDX:
   ```mdx
   # Main Heading

   Your introduction paragraph here.

   ## Section Heading

   - Bullet points
   - Support for code blocks
   - **Bold** and *italic* text

   ```javascript
   const example = "code block";
   ```

   You can also use React components!
   ```

4. **Add images** (optional):
   - Place hero images in `public/images/blog/`
   - Reference in frontmatter: `image: "/images/blog/your-image.jpg"`
   - Images in the `public` folder are served from the root path

### Frontmatter Fields

| Field | Required | Description |
|-------|----------|-------------|
| `title` | Yes | Blog post title |
| `date` | Yes | Publication date (YYYY-MM-DD) |
| `description` | Yes | SEO description and preview text |
| `image` | No | Hero image path (from `public/`) |
| `tags` | No | Array of tags for categorization |

### How Blog Posts are Rendered

1. **MDX Parsing**: The `src/lib/mdx.ts` utility uses `gray-matter` to parse frontmatter and extract content
2. **Static Generation**: Blog posts are statically generated at build time using `generateStaticParams()`
3. **MDX Compilation**: `next-mdx-remote/rsc` compiles MDX to React on the server
4. **Styling**: Tailwind's typography plugin (`prose` classes) styles the rendered content
5. **Table of Contents**: Automatically generated from headings (H1-H4) with active section tracking

### Blog Features

- ✅ **Hero Images**: Large featured images at the top of posts
- ✅ **Table of Contents**: Sticky sidebar with section navigation (desktop only)
- ✅ **Active Section Tracking**: Highlights current section as you scroll
- ✅ **Syntax Highlighting**: Code blocks with proper formatting
- ✅ **Tag System**: Categorize and filter posts by tags
- ✅ **SEO Optimized**: Automatic meta tags from frontmatter
- ✅ **Responsive Design**: Mobile-friendly reading experience

### Blog File Locations

- **Blog posts**: `src/content/blog/*.mdx`
- **Blog listing page**: `src/app/blog/page.tsx`
- **Blog post detail page**: `src/app/blog/[slug]/page.tsx`
- **MDX utilities**: `src/lib/mdx.ts`
- **Table of Contents**: `src/components/blog/TableOfContents.tsx`
- **Blog images**: `public/images/blog/`

### Example Blog Post Structure

```mdx
---
title: "Building a Modern Portfolio with Next.js 15"
date: "2026-01-29"
description: "Learn how to build a performant portfolio site using Next.js 15, React 19, and Tailwind CSS v4"
image: "/images/blog/nextjs-portfolio.jpg"
tags: ["nextjs", "react", "tailwind", "portfolio"]
---

# Building a Modern Portfolio with Next.js 15

In this tutorial, we'll explore how to create a stunning portfolio website...

## Getting Started

First, let's set up our Next.js project...

## Conclusion

You now have a fully functional portfolio site!
```

### Testing Your Blog Post

1. Save your `.mdx` file in `src/content/blog/`
2. Run the dev server: `npm run dev`
3. Navigate to `http://localhost:3000/blog`
4. Your new post should appear in the listing
5. Click to view the full post at `http://localhost:3000/blog/[your-filename]`
