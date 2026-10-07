export type Project = {
    title: string;
    slug: string; // URL segment: /projects/<slug>
    featuredImage: string;
    images: (string | string[])[];
    icon: string;
    description: string;
    summary: string;
    technologies: string[];
    type: string;
    year: number;
    link?: string; // must include https://
    github?: string;
    testimonial?: { name: string, company?: string, comment: string };
    video?: string; // shown instead of featuredImage in the home bento grid
    featured?: number; // rank on home and /projects; 1 is the bento hero
    current?: boolean; // shown as "Working on" in the navbar
};
