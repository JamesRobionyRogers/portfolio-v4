export type SiteConfig = {
    email: string;
    linkedin: string;
    github: string;
};

// Prefer env vars if you want to tweak without rebuilding
const envConfig: Partial<SiteConfig> = {
    email: process.env.NEXT_PUBLIC_EMAIL ?? undefined,
    linkedin: process.env.NEXT_PUBLIC_LINKEDIN ?? undefined,
    github: process.env.NEXT_PUBLIC_GITHUB ?? undefined,
};

const defaults: SiteConfig = {
    email: "", // e.g. "mailto:you@example.com"
    linkedin: "", // e.g. "https://www.linkedin.com/in/your-handle"
    github: "", // e.g. "https://github.com/your-user"
};

export const siteConfig: SiteConfig = {
    email: envConfig.email ?? defaults.email,
    linkedin: envConfig.linkedin ?? defaults.linkedin,
    github: envConfig.github ?? defaults.github,
};

export const siteLinks = {
    email: () => siteConfig.email,
    linkedin: () => siteConfig.linkedin,
    github: () => siteConfig.github,
};


