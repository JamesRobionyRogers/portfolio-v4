export type Project = {
    title: string;
    image: string;
    icon: string;
    description: string;
    summary: string;
    technologies: string[];
    type: string;
    year: number;
    link: string;  
    // Optional fields can be added here
    github?: string;
};