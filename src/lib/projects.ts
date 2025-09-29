import { Project } from "@/types/project";

// Sample project data - you can replace this with data from a CMS, API, or MDX files
export const projects: Project[] = [
  {
    title: "TailorWrite",
    featuredImage: "/images/projects/tailorwrite/landing.png",
    images: [
      "/images/projects/tailorwrite/landing.png",
      "/images/projects/tailorwrite/login.png",
      ["/images/projects/tailorwrite/tracker-dark.png", "/images/projects/tailorwrite/tracker-light.png"],
      "/images/projects/tailorwrite/job.png",
      "/images/projects/tailorwrite/settings-general.png",
      "/images/projects/tailorwrite/settings-data.png",
    ],
    icon: "",
    description: "AI-powered writing assistant that helps users create tailored content for different audiences and purposes.",
    summary: "TailorWrite addresses the time-consuming challenge of tailoring CVs and cover letters for each job application, a common problem for students and job seekers. By streamlining this process, TailorWrite aims to improve the chances of securing interviews in the competitive job market, particularly for students in their penultimate year, new graduates, and job seekers.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Python", "Flask", "Supabase", "Ollama", "Llama 3.1", "Docker", "Terraform", "AWS"],
    type: "Web Application",
    year: 2024,
    route: "/projects/tailorwrite",
    github: "https://github.com/tailorwrite/tailorwrite"
  },
  {
    title: "Birds of Aotearoa",
    featuredImage: "/images/projects/birdsofaotearoa/projectscreenshot.png",
    images: ["/images/projects/birdsofaotearoa/projectscreenshot.png"],
    icon: "",
    description: "Interactive field guide for New Zealand birds with identification features and habitat information.",
    summary: "A mobile-friendly web application that helps bird enthusiasts identify and learn about New Zealand's native bird species.",
    technologies: ["HTML", "CSS", "JavaScript", "JSON"],
    type: "Web Application",
    year: 2024,
    route: "/projects/birds-of-aotearoa",
    link: "nzbirds.jamesrobionyrogers.com",
    github: "https://github.com/JamesRobionyRogers/NZBirds-FrontEnd"
  },
  {
    title: "ExifTool GUI",
    featuredImage: "/images/projects/exiftoolgui/projectscreenshot.png",
    images: ["/images/projects/exiftoolgui/projectscreenshot.png"],
    icon: "/images/projects/exiftoolgui/app-icon.png",
    description: "User-friendly graphical interface for ExifTool, making metadata management accessible to photographers.",
    summary: "A MacOS application that provides an intuitive interface for managing file metadata using the powerful ExifTool library.",
    technologies: ["Swift", "SwiftUI", "Exiftool", "MacOS", "XCode"],
    type: "MacOS App",
    year: 2025,
    route: "/projects/exiftool-gui",
    // github: "https://github.com/jamesrobionyrogers/exiftool-gui"
  },
  {
    title: "Run It Twice",
    featuredImage: "/images/projects/runittwice/projectscreenshot.png",
    images: ["/images/projects/runittwice/projectscreenshot.png"],
    icon: "",
    description: "Code execution platform that runs code twice to detect non-deterministic behavior and race conditions.",
    summary: "A developer tool that helps identify unreliable code by executing it multiple times and comparing results.",
    technologies: ["Python", "Docker", "FastAPI", "PostgreSQL", "Redis"],
    type: "Terminal App",
    year: 2023,
    route: "/projects/run-it-twice",
    github: "https://github.com/jamesrobionyrogers/run-it-twice"
  },
  {
    title: "FHCL",
    featuredImage: "/images/projects/fhcl/projectscreenshot.png",
    images: [
      "/images/projects/fhcl/overview.png",
      "/images/projects/fhcl/projectscreenshot.png",
      "/images/projects/fhcl/services.png",
      "/images/projects/fhcl/process.png",
    ],
    icon: "",
    description: "Fraser approached me in 2024 to design, develop and deploy a website for his civil contracting company FHCL. The project highlights past projects they have completed and the services they provide to their customers in the Wellington Region.",
    summary: "Fraser approached me in 2024 to design, develop and deploy a website for his civil contracting company FHCL. The project highlights past projects they have completed and the services they provide to their customers in the Wellington Region.",
    technologies: ["Wire Framing", "Figma", "Vite", "React", "Tailwind CSS", "Github", "Crazydomains", "SEO", "Structured Data"],
    type: "Contracting",
    year: 2024,
    route: "/projects/fhcl",
    link: "https://fhcl.nz",
    github: "https://github.com/FraserHydeContractingLtd/fhcl",
    testimonial: {
      name: "Fraser Hyde",
      company: "FHCL",
      comment: "We (Fraser Hyde Contracting Limited) engaged James to design and set up our company website. He was punctual and creative in providing us an array of concept designs to choose from before developing a single layout. We highly recommend his services for his approach, knowledge and professionalism."
    }
  }
];

// Utility functions for working with projects
export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(project => 
    project.route.replace('/projects/', '') === slug
  );
}

export function getAllProjectSlugs(): string[] {
  return projects.map(project => 
    project.route.replace('/projects/', '')
  );
}

export function getProjectsByType(type: string): Project[] {
  return projects.filter(project => project.type === type);
}

export function getProjectsByTechnology(technology: string): Project[] {
  return projects.filter(project => 
    project.technologies.some(tech => 
      tech.toLowerCase().includes(technology.toLowerCase())
    )
  );
}

export function getRecentProjects(limit: number = 3): Project[] {
  return projects
    .sort((a, b) => b.year - a.year)
    .slice(0, limit);
}

export function getAllProjects(): Project[] {
  return projects
}

export function getFeaturedProjects(limit: number = 3): Project[] {
  if (limit <= 1)         return [projects[0]] 
  else if (limit == 2)    return [projects[0], projects[1]]
  else                    return [projects[0], projects[1], projects[2]]
} 
