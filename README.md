# Portfolio v4

A modern portfolio website built with Next.js 15, featuring a blog with MDX support, project showcases, and a clean, responsive design.

## Overview

This is a personal portfolio website showcasing software engineering projects, skills, and technical blog posts. The site features:

- **Modern Tech Stack**: Built with Next.js 15, React 19, and TypeScript
- **Blog with MDX**: Write blog posts in MDX format with frontmatter support
- **Project Showcase**: Display featured projects with detailed case studies
- **Responsive Design**: Mobile-first design with Tailwind CSS v4
- **Performance Optimized**: Server-side rendering, image optimization, and Turbopack for fast development

## Getting Started

### Prerequisites

Before running this project, ensure you have the following installed:

- **Node.js**: Version 20 or higher
- **npm**: Version 10 or higher (comes with Node.js)
- **Git**: For cloning the repository

### Installation

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd portfolio-v4
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Running the Project

#### Development Mode
Start the development server with Turbopack (fast refresh):
```bash
npm run dev
```
The site will be available at `http://localhost:3000`

#### Production Build
Build the application for production:
```bash
npm run build
```

#### Production Server
Run the production build locally:
```bash
npm run start
```

#### Linting
Run ESLint to check code quality:
```bash
npm run lint
```

## Project Structure

```
portfolio-v4/
├── public/                      # Static assets
│   ├── images/                  # Images for projects and blog
│   │   ├── assets/             # General images
│   │   ├── blog/               # Blog post images
│   │   └── projects/           # Project screenshots
│   └── icons/                  # Icon files
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Home page
│   │   ├── globals.css         # Global styles
│   │   ├── about/              # About page
│   │   ├── blog/               # Blog listing and posts
│   │   │   ├── page.tsx        # Blog listing
│   │   │   └── [slug]/         # Dynamic blog post pages
│   │   ├── contact/            # Contact page
│   │   ├── cv/                 # CV/Resume page
│   │   ├── projects/           # Projects listing and details
│   │   │   ├── page.tsx        # Projects listing
│   │   │   └── [slug]/         # Dynamic project pages
│   │   └── services/           # Services page
│   ├── components/             # React components
│   │   ├── layout/             # Layout components (Header, Footer, etc.)
│   │   ├── magicui/            # Special UI components (Marquee)
│   │   ├── sections/           # Page section components
│   │   │   ├── CTA.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Header.tsx
│   │   │   ├── Myself.tsx
│   │   │   └── Work.tsx
│   │   └── ui/                 # Reusable UI components
│   │       ├── Navbar.tsx
│   │       ├── ProjectCard.tsx
│   │       ├── SmallProjectCard.tsx
│   │       └── TableOfContents.tsx
│   ├── config/                 # Configuration files
│   │   └── site.ts             # Site-wide configuration
│   ├── content/                # MDX content files
│   │   ├── blog/               # Blog posts (.mdx files)
│   │   ├── case-studies/       # Case study content
│   │   └── projects/           # Project MDX content
│   ├── lib/                    # Utility functions
│   │   ├── mdx.ts              # MDX parsing utilities
│   │   ├── projects.ts         # Project data and utilities
│   │   ├── seo.ts              # SEO utilities
│   │   └── utils.ts            # General utilities
│   └── types/                  # TypeScript type definitions
│       ├── index.ts
│       └── project.ts
├── .github/                    # GitHub specific files
│   └── copilot-instructions.md # AI coding guidelines
├── next.config.ts              # Next.js configuration
├── tsconfig.json               # TypeScript configuration
├── postcss.config.mjs          # PostCSS configuration
├── eslint.config.mjs           # ESLint configuration
└── package.json                # Project dependencies
```

## Contributing

### Adding New Projects

1. **Add project data** to `src/lib/projects.ts`:
   ```typescript
   {
     title: "Project Name",
     featuredImage: "/images/projects/project-name/featured.jpg",
     images: ["/images/projects/project-name/screenshot1.jpg"],
     icon: "🚀",
     description: "Short description",
     summary: "Detailed summary",
     technologies: ["React", "TypeScript", "Next.js"],
     type: "Web Application",
     year: 2024,
     route: "/projects/project-name",
     link: "https://project-url.com", // optional
     github: "https://github.com/username/repo", // optional
   }
   ```

2. **Add project images** to `public/images/projects/[project-slug]/`

3. The project will automatically appear on the projects page and have a detail page at `/projects/[slug]`

### Adding Components

- **Reusable UI components** → `src/components/ui/`
- **Section components** → `src/components/sections/`
- **Layout components** → `src/components/layout/`

Follow the existing patterns:
- Use TypeScript for type safety
- Export default for page components
- Use named exports for utility components
- Add prop types using interfaces

### Styling

- Uses **Tailwind CSS v4** with custom configuration
- Global styles in `src/app/globals.css`
- Component-specific styles using Tailwind utility classes
- Custom fonts loaded in `src/app/fonts/`
- Color palette: neutral grays with green accent (`green-400`, `green-500`)

### Environment Variables

Create a `.env.local` file for environment-specific variables:
```env
NEXT_PUBLIC_EMAIL=your.email@example.com
NEXT_PUBLIC_LINKEDIN=https://linkedin.com/in/yourprofile
NEXT_PUBLIC_GITHUB=https://github.com/yourusername
```

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
- **Table of Contents**: `src/components/ui/TableOfContents.tsx`
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

---

## License

This project is private and not licensed for public use.

## Contact

For questions or feedback, reach out via the contact form on the website or through the links provided in the site configuration.
