import type { Metadata } from "next";
import localFont from 'next/font/local';
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/ui/Navbar";
import CTA from '@/components/sections/CTA'
import Footer from '@/components/sections/Footer'

const saans = localFont({
    src: [
        { path: './fonts/Saans Bold-TRIAL.woff2', weight: '700', style: 'normal' },
        { path: './fonts/Saans SemiBold-TRIAL.woff2', weight: '600', style: 'normal' },
        { path: './fonts/Saans Medium-TRIAL.woff2', weight: '500', style: 'normal' }
    ],
    variable: '--font-saans', // Optional, for using CSS variable
});

export const metadata: Metadata = {
    title: "James Robiony-Rogers",
    description: "James Robiony-Rogers is a Software Engineer based out of Wellington, New Zealand. James has experience in full-stack development, cloud engineering and DevOps practices.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
		<html lang="en" className="">
            <body className={`${saans.className} antialiased h-full w-full overflow-x-hidden bg-neutral-100 selection:bg-green-400/40 selection:text-gray-900 dark:bg-gray-950`} >

                <main className=""> 
                    <Navbar />
					{children} 
				</main>
                
                <CTA />
                <Footer />  

            </body>
        </html>
    );
}
