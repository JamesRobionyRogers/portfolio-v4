import type { Metadata, Viewport } from "next";
import localFont from 'next/font/local';
import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from '@/components/layout/Footer'
import { siteConfig } from "@/config/site";

// Saans is a trial licence; only these three weights exist
const saans = localFont({
    src: [
        { path: './fonts/saans-700.woff2', weight: '700', style: 'normal' },
        { path: './fonts/saans-600.woff2', weight: '600', style: 'normal' },
        { path: './fonts/saans-500.woff2', weight: '500', style: 'normal' }
    ],
    variable: '--font-saans',
});

export const metadata: Metadata = {
    metadataBase: new URL(siteConfig.url),
    title: {
        default: siteConfig.name,
        template: `%s | ${siteConfig.name}`,
    },
    description: siteConfig.description,
    authors: [{ name: siteConfig.name, url: siteConfig.url }],
    openGraph: {
        type: "website",
        url: siteConfig.url,
        siteName: siteConfig.name,
        title: siteConfig.name,
        description: siteConfig.description,
    },
    twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
    viewportFit: 'cover',
    themeColor: '#f5f5f5',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${saans.className} antialiased h-full w-full overflow-x-hidden`}>
                <Navbar />
                <main id="main">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
