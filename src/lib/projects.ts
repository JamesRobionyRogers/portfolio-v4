import { Project } from "@/types/project";

// Add a project here; its images and videos live in public/images/projects/<folder>/
export const projects: Project[] = [
  {
    title: "TailorWrite",
    slug: "tailorwrite",
    featured: 1,
    featuredImage: "/images/projects/tailorwrite/landing.webp",
    video: "/images/projects/tailorwrite/tailorwrite.mp4",
    poster: "/images/projects/tailorwrite/tailorwrite-poster.webp",
    images: [
      "/images/projects/tailorwrite/landing.webp",
      "/images/projects/tailorwrite/login.webp",
      ["/images/projects/tailorwrite/tracker-dark.webp", "/images/projects/tailorwrite/tracker-light.webp"],
      "/images/projects/tailorwrite/job.webp",
      "/images/projects/tailorwrite/settings-general.webp",
      "/images/projects/tailorwrite/settings-data.webp",
    ],
    icon: "",
    description: "AI-powered writing assistant that helps users create tailored content for different audiences and purposes.",
    summary: "TailorWrite addresses the time-consuming challenge of tailoring CVs and cover letters for each job application, a common problem for students and job seekers. By streamlining this process, TailorWrite aims to improve the chances of securing interviews in the competitive job market, particularly for students in their penultimate year, new graduates, and job seekers.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Python", "Flask", "Supabase", "Ollama", "Llama 3.1", "Docker", "Terraform", "AWS"],
    type: "Web Application",
    year: 2024,
    github: "https://github.com/tailorwrite/tailorwrite"
  },
  {
    title: "Birds of Aotearoa",
    slug: "birds-of-aotearoa",
    featuredImage: "/images/projects/birdsofaotearoa/projectscreenshot.webp",
    video: "/images/projects/birdsofaotearoa/birds-of-aotearoa.mp4",
    poster: "/images/projects/birdsofaotearoa/birds-of-aotearoa-poster.webp",
    images: ["/images/projects/birdsofaotearoa/projectscreenshot.webp"],
    icon: "",
    description: "Interactive field guide for New Zealand birds with identification features and habitat information.",
    summary: "A mobile-friendly web application that helps bird enthusiasts identify and learn about New Zealand's native bird species.",
    technologies: ["HTML", "CSS", "JavaScript", "JSON"],
    type: "Web Application",
    year: 2024,
    link: "https://nzbirds.jamesrobionyrogers.com",
    github: "https://github.com/JamesRobionyRogers/NZBirds-FrontEnd"
  },
  {
    title: "ExifTool GUI",
    slug: "exiftool-gui",
    featured: 2,
    current: true,
    featuredImage: "/images/projects/exiftoolgui/projectscreenshot.webp",
    images: ["/images/projects/exiftoolgui/projectscreenshot.webp"],
    icon: "/images/projects/exiftoolgui/app-icon.webp",
    description: "User-friendly graphical interface for ExifTool, making metadata management accessible to photographers.",
    summary: "A MacOS application that provides an intuitive interface for managing file metadata using the powerful ExifTool library.",
    technologies: ["Swift", "SwiftUI", "Exiftool", "MacOS", "XCode"],
    type: "MacOS App",
    year: 2025,
    // github: "https://github.com/jamesrobionyrogers/exiftool-gui"
  },
  {
    title: "Run It Twice",
    slug: "run-it-twice",
    featuredImage: "/images/projects/runittwice/projectscreenshot.webp",
    video: "/images/projects/runittwice/runittwice.mp4",
    poster: "/images/projects/runittwice/runittwice-poster.webp",
    images: ["/images/projects/runittwice/projectscreenshot.webp"],
    icon: "",
    description: "Code execution platform that runs code twice to detect non-deterministic behavior and race conditions.",
    summary: "A developer tool that helps identify unreliable code by executing it multiple times and comparing results.",
    technologies: ["Python", "Docker", "FastAPI", "PostgreSQL", "Redis"],
    type: "Terminal App",
    year: 2023,
    github: "https://github.com/jamesrobionyrogers/run-it-twice"
  },
  {
    title: "FHCL",
    slug: "fhcl",
    featured: 3,
    featuredImage: "/images/projects/fhcl/projectscreenshot.webp",
    video: "/images/projects/fhcl/fhcl.mp4",
    poster: "/images/projects/fhcl/fhcl-poster.webp",
    images: [
      "/images/projects/fhcl/overview.webp",
      "/images/projects/fhcl/projectscreenshot.webp",
      "/images/projects/fhcl/services.webp",
      "/images/projects/fhcl/process.webp",
    ],
    icon: "",
    description: "Fraser approached me in 2024 to design, develop and deploy a website for his civil contracting company FHCL. The project highlights past projects they have completed and the services they provide to their customers in the Wellington Region.",
    summary: "Fraser approached me in 2024 to design, develop and deploy a website for his civil contracting company FHCL. The project highlights past projects they have completed and the services they provide to their customers in the Wellington Region.",
    technologies: ["Wire Framing", "Figma", "Vite", "React", "Tailwind CSS", "Github", "Crazydomains", "SEO", "Structured Data"],
    type: "Contracting",
    year: 2024,
    link: "https://fhcl.nz",
    github: "https://github.com/FraserHydeContractingLtd/fhcl",
    testimonial: {
      name: "Fraser Hyde",
      company: "FHCL",
      comment: "We (Fraser Hyde Contracting Limited) engaged James to design and set up our company website. He was punctual and creative in providing us an array of concept designs to choose from before developing a single layout. We highly recommend his services for his approach, knowledge and professionalism."
    }
  }
];

export function projectHref(project: Project): string {
  return `/projects/${project.slug}`;
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(project => project.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map(project => project.slug);
}

// Projects with a `featured` rank, most prominent first
export function getFeaturedProjects(limit?: number): Project[] {
  return projects
    .filter(project => project.featured !== undefined)
    .sort((a, b) => a.featured! - b.featured!)
    .slice(0, limit);
}

export function getCurrentProject(): Project | undefined {
  return projects.find(project => project.current);
}
