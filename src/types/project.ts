export type Project = {
    title: string;
    images: (string | string[])[];
    icon: string;
    description: string;
    summary: string;
    technologies: string[];
    type: string;
    year: number;
    route: string;
    // Optional fields can be added here
    link?: string;  
    github?: string;
    testimonial? : {name: string, company?: string, comment: string}
};