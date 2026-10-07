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
    description: "Job application tracker that generates a tailored cover letter for each role with Google Gemini.",
    summary: "A University of Otago INFO301 team project. TailorWrite tracks job applications and generates a cover letter for each one from the scraped job ad, rendered to PDF with LaTeX. Built with a React and TypeScript front end, a Flask API on Supabase, and AWS infrastructure in Terraform. I led a team of five and wrote most of the commits.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite", "Python", "Flask", "Supabase", "Google Gemini", "LaTeX", "Docker", "Terraform", "AWS", "GitHub Actions"],
    type: "Web Application",
    year: 2024,
    github: "https://github.com/TailorWrite/TailorWrite"
  },
  {
    title: "Birds of Aotearoa",
    slug: "birds-of-aotearoa",
    featuredImage: "/images/projects/birdsofaotearoa/projectscreenshot.webp",
    video: "/images/projects/birdsofaotearoa/birds-of-aotearoa.mp4",
    poster: "/images/projects/birdsofaotearoa/birds-of-aotearoa-poster.webp",
    images: ["/images/projects/birdsofaotearoa/projectscreenshot.webp"],
    icon: "",
    description: "Searchable directory of 68 New Zealand birds, filtered by conservation status and sorted by name, weight or length.",
    summary: "A University of Otago COSC203 assignment. A front end in plain HTML, CSS and JavaScript that loads a Birds NZ dataset, with name search, a conservation status filter and six sort orders.",
    technologies: ["HTML", "CSS", "JavaScript", "JSON", "SweetAlert2"],
    type: "Web Application",
    year: 2023,
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
    description: "Texas Hold'em poker for the terminal, written in C++, with computer opponents that bet on hand equity.",
    summary: "A University of Otago COSC345 team project: a playable poker game with an ASCII table, a hand evaluator, an equity calculator and rule-based computer players. I wrote the GoogleTest unit tests, the GitHub Actions build, test and release workflows, the Doxygen docs deploy and the first terminal UI.",
    technologies: ["C++", "CMake", "GoogleTest", "Doxygen", "GitHub Actions"],
    type: "Terminal App",
    year: 2024,
    github: "https://github.com/jesstyrrell/cosc345"
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
    description: "Website for a Wellington civil contractor, taken from Figma wireframes to a React and Tailwind CSS site with local business structured data.",
    summary: "Fraser Hyde asked me in 2024 to design, build and deploy a website for his civil contracting company. I wireframed it and mocked it up in Figma, then built it with React, TypeScript, Tailwind CSS and Vite. The site covers FHCL's services, past projects and process, and runs on GitHub Pages at fhcl.nz. In 2025 I added schema.org LocalBusiness structured data for local search in the Wellington region.",
    technologies: ["Wireframing", "Figma", "Vite", "React", "TypeScript", "Tailwind CSS", "GitHub Pages", "SEO", "Structured Data"],
    type: "Client Website",
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
