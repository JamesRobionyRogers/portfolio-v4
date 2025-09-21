import { Project } from "@/types/project";

// Sample project data - you can replace this with data from a CMS, API, or MDX files
export const projects: Project[] = [
  {
    title: "TailorWrite",
    image: "/images/projects/tailorwrite/projectscreenshot-landing.png",
    icon: "",
    description: "AI-powered writing assistant that helps users create tailored content for different audiences and purposes.",
    summary: "TailorWrite addresses the time-consuming challenge of tailoring CVs and cover letters for each job application, a common problem for students and job seekers. By streamlining this process, TailorWrite aims to improve the chances of securing interviews in the competitive job market, particularly for students in their penultimate year, new graduates, and job seekers.",
    // summary: "A comprehensive writing tool that leverages AI to help users craft personalized content across various formats and contexts.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Python", "Flask", "Supabase", "Ollama", "Llama 3.1", "Docker", "Terraform", "AWS"],
    type: "Web Application",
    year: 2024,
    link: "/projects/tailorwrite",
    github: "https://github.com/yourusername/tailorwrite"
  },
  {
    title: "Birds of Aotearoa",
    image: "/images/projects/birdsofaotearoa/projectscreenshot.png",
    icon: "",
    description: "Interactive field guide for New Zealand birds with identification features and habitat information.",
    summary: "A mobile-friendly web application that helps bird enthusiasts identify and learn about New Zealand's native bird species.",
    technologies: ["React", "TypeScript", "PWA", "CSS Modules", "Node.js"],
    type: "Web Application",
    year: 2024,
    link: `nzbirds.jamesrobionyrogers.com`,
    github: "https://github.com/JamesRobionyRogers/NZBirds-FrontEnd"
  },
  {
    title: "ExifTool GUI",
    image: "/images/projects/exiftoolgui/projectscreenshot.png",
    icon: "/images/projects/exiftoolgui/app-icon.png",
    description: "User-friendly graphical interface for ExifTool, making metadata management accessible to photographers.",
    summary: "A MacOS application that provides an intuitive interface for managing file metadata using the powerful ExifTool library.",
    technologies: ["Swift", "SwiftUI", "Exiftool", "MacOS", "XCode"],
    type: "Desktop Application",
    year: 2023,
    link: "/projects/exiftool-gui",
    github: "https://github.com/yourusername/exiftool-gui"
  },
  {
    title: "Run It Twice",
    image: "/images/projects/runittwice/projectscreenshot.png",
    icon: "",
    description: "Code execution platform that runs code twice to detect non-deterministic behavior and race conditions.",
    summary: "A developer tool that helps identify unreliable code by executing it multiple times and comparing results.",
    technologies: ["Python", "Docker", "FastAPI", "PostgreSQL", "Redis"],
    type: "Web Service",
    year: 2023,
    link: "/projects/run-it-twice",
    github: "https://github.com/yourusername/run-it-twice"
  },
  {
    title: "FHCL",
    image: "/images/projects/fhcl/projectscreenshot.png",
    icon: "",
    description: "Financial Health Checkup Library - A comprehensive toolkit for personal finance management and analysis.",
    summary: "A library of financial tools and calculators to help individuals assess and improve their financial health.",
    technologies: ["Python", "NumPy", "Pandas", "Matplotlib", "Jupyter"],
    type: "Library",
    year: 2023,
    link: "/projects/fhcl",
    github: "https://github.com/yourusername/fhcl"
  }
];

// Utility functions for working with projects
export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(project => 
    project.link.replace('/projects/', '') === slug
  );
}

export function getAllProjectSlugs(): string[] {
  return projects.map(project => 
    project.link.replace('/projects/', '')
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
