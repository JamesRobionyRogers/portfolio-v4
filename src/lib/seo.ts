import type { Metadata } from "next";

const baseUrl = "https://jamesrobionyrogers.netlify.app";

export const metadata: Metadata = {
    metadataBase: new URL(baseUrl),
    title: {
        default: "James Robiony-Rogers — Portfolio",
        template: "%s | James Robiony-Rogers"
    },
    description: "Engineer and consultant. Case studies, projects, and blog.",
    keywords: ["software engineer", "consultant", "devops", "portfolio"],
    authors: [{ name: "James Robiony-Rogers", url: baseUrl }],
    alternates: {
        canonical: "/",
        languages: { "en": "/" }
    },
    openGraph: {
        type: "website",
        url: baseUrl,
        title: "James Robiony-Rogers — Portfolio",
        description: "Engineer and consultant. Case studies, projects, and blog.",
        siteName: "James Robiony-Rogers",
        images: [{ url: "/images/og-default.jpg", width: 1200, height: 630 }]
    },
    twitter: {
        card: "summary_large_image",
        title: "James Robiony-Rogers — Portfolio",
        description: "Engineer and consultant. Case studies, projects, and blog.",
        images: ["/images/og-default.jpg"]
    },
    icons: {
        icon: "/favicon.ico",
        apple: "/apple-touch-icon.png"
    },
    robots: { index: true, follow: true }
};