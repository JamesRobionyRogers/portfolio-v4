'use client'
import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";
import Image from 'next/image'

const images = [
    [
        "fhcl/projectscreenshot.png",
        "runittwice/projectscreenshot.png",
        "tailorwrite/lightMode.png",
        "tailorwrite/lightMode.png",

        // "tailorwrite/projectscreenshot-landing.png",
        // "tailorwrite/darkMode.png",
        // "exiftoolgui/project-screenshot.png",
        // "birdsofaotearoa/projectscreenshot.png",
    ],
    [
        "exiftoolgui/projectscreenshot.png",
        "tailorwrite/darkMode.png",
        "birdsofaotearoa/projectscreenshot.png",
        "tailorwrite/projectscreenshot-landing.png",
    ],
    [
        "fhcl/projectscreenshot.png",
        "runittwice/projectscreenshot.png",
        "tailorwrite/lightMode.png",
        "tailorwrite/lightMode.png",
        // "tailorwrite/projectscreenshot-landing.png",
        // "tailorwrite/darkMode.png",
        // "exiftoolgui/project-screenshot.png",
        // "birdsofaotearoa/projectscreenshot.png",
    ],
]

const ShowcaseImage = ({imagePath}: {imagePath: string}) => {
    return (
        <Image
            className="w-auto h-auto -m-1"
            alt=""
            src={`/images/projects/${imagePath}`}
            sizes="100vw"
            width={0}
            height={0}
        />
    )
}

export function MarqueeDemoVertical() {
    return (
        
        <div className="absolute flex flex-row items-center justify-center w-[120%] -rotate-12 bottom-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 border-2 overflow-hidden">
            <Marquee vertical repeat={6} className="[--duration:40s] pl-2 pr-1">
                {images[0].map((imagePath, index) => (
                    <ShowcaseImage key={index} imagePath={imagePath} />
                ))}
            </Marquee>
            <Marquee reverse vertical repeat={6} className="[--duration:40s] p-1">
                {images[1].map((imagePath, index) => (
                    <ShowcaseImage key={index} imagePath={imagePath} />
                ))}
            </Marquee>
            <Marquee vertical repeat={6} className="[--duration:40s] pl-1 pr-2">
                {images[2].map((imagePath, index) => (
                    <ShowcaseImage key={index} imagePath={imagePath} />
                ))}
            </Marquee>
        </div>
    );
}

export default MarqueeDemoVertical

import React, { useEffect, useRef } from 'react';

interface MarqueeProps {
    images: string[]; // URLs of images
    speed?: number; // pixels per second
}

const NewMarquee: React.FC<MarqueeProps> = ({ images, speed = 50 }) => {
    const marqueeRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const marquee = marqueeRef.current;
        if (!marquee) return;

        let animationFrameId: number;
        let offset = 600;

        const animate = () => {
            offset += speed / 60; // Adjust speed
            if (marquee) {
                marquee.style.transform = `translateY(${offset}px)`;

                // Reset position when scrolled past
                if (Math.abs(offset) >= marquee.scrollWidth / 2) {
                    offset = 0;
                }
            }

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => cancelAnimationFrame(animationFrameId);
    }, [speed]);

    // Duplicate image list to enable seamless scroll
    const repeatedImages = [...images, ...images];

    return (
        <div className="overflow-hidden w-full relative">
            <div
                className="flex flex-col gap-2 whitespace-nowrap"
                ref={marqueeRef}
                style={{
                    willChange: 'transform',
                }}
            >
                {repeatedImages.map((src, index) => (
                    <div
                        key={index}
                        className="flex-shrink-0 mx-4"
                    >
                        <Image 
                            className="h-auto max-h-48 w-auto object-contain"
                            alt=""
                            src={`/images/projects/${src}`}
                            sizes="100vw"
                            width={0}
                            height={0}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};
