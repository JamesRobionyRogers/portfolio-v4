// Next.js (App Router) + TypeScript version
// Apple-style Bento Grid (Videos-first, responsive, performant)

"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { projectHref } from "@/lib/projects";
import type { Project } from "@/types/project";

// ------------------ TYPES ------------------

type BentoItem = {
  project: Project;
  media: string;
  isVideo: boolean;
  style?: React.CSSProperties;
};

// ------------------ HELPERS ------------------
const isVideo = (src: string) => /\.(mp4|webm|mov)$/i.test(src);

const getFeatured = (projects: Project[]) => {
  return projects.find((p) => p.featured === 1) || projects[0];
};

// The featured project takes the large tile; the rest cycle through the remaining slots
const mapProjectsToLayout = (projects: Project[]): BentoItem[] => {
  const items: BentoItem[] = [];

  const featured = getFeatured(projects);
  const rest = projects.filter((p) => p !== featured);

  const getMedia = (project: Project) => project.video || project.featuredImage;

  if (featured) {
    const media = getMedia(featured);

    items.push({
      project: featured,
      media,
      isVideo: isVideo(media),
      style: { gridColumn: "4 / span 7", gridRow: "3 / span 4" },
    });
  }

  const slots = [
    { col: "1 / span 3", row: "1 / span 2" },
    { col: "4 / span 3", row: "1 / span 2" },
    { col: "7 / span 3", row: "1 / span 2" },
    { col: "10 / span 4", row: "1 / span 2" },

    { col: "1 / span 3", row: "3 / span 2" },
    { col: "1 / span 3", row: "5 / span 2" },

    { col: "11 / span 3", row: "3 / span 2" },
    { col: "11 / span 3", row: "5 / span 2" },

    { col: "1 / span 4", row: "7 / span 2" },
    { col: "5 / span 4", row: "7 / span 2" },
    { col: "9 / span 5", row: "7 / span 2" },
  ];

  if (rest.length === 0) return items;

  slots.forEach((slot, i) => {
    const project = rest[i % rest.length];
    const media = getMedia(project);

    items.push({
      project,
      media,
      isVideo: isVideo(media),
      style: { gridColumn: slot.col, gridRow: slot.row },
    });
  });

  return items;
};

// ------------------ HOOK ------------------
const useVideoAutoPause = (
  ref: React.RefObject<HTMLVideoElement | null>,
  enabled: boolean
) => {
  useEffect(() => {
    const video = ref.current;
    if (!enabled || !video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) video.play().catch(() => {});
        else video.pause();
      },
      { threshold: 0.5 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, [enabled, ref]);
};

// ------------------ COMPONENTS ------------------

const Media = ({ src, isVideo, priority, poster }: { src: string; isVideo: boolean; priority?: boolean; poster?: string }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  useVideoAutoPause(videoRef, isVideo);

  if (isVideo) {
    return (
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        autoPlay
        loop
        muted
        playsInline
        preload={priority ? "auto" : "metadata"}
        className="absolute inset-0 w-full h-full object-cover object-top"
      />
    );
  }

  return (
    <Image
      src={src}
      alt="project"
      fill
      priority={priority}
      placeholder="blur"
      blurDataURL="data:image/svg+xml;base64,PHN2Zy8+"
      className="object-cover"
    />
  );
};

const Card = ({ item, mobile }: { item: BentoItem; mobile?: boolean }) => {
  const { project, media, isVideo, style } = item;

  return (
        <div
            className={`relative overflow-hidden rounded-lg lg:rounded-2xl bg-ink text-ink-fg cursor-pointer transition-transform duration-200 motion-safe:hover:scale-[1.01] ${
                mobile ? "aspect-[16/9]" : ""
            }`}
            style={!mobile ? style : undefined}
        >
            <Link href={projectHref(project)}>
                <Media src={media} isVideo={isVideo} priority={project.featured === 1} poster={project.poster} />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                <div className="hidden 3xl:flex relative p-4 flex-col justify-end h-full">
                    <h2 className="text-lg font-semibold">{project.title}</h2>
                    <p className="text-sm text-ink-muted line-clamp-2">
                        {project.description}
                    </p>
                </div>
            </Link>
        </div>
  );
};

// ------------------ MAIN GRID ------------------

export function BentoGrid({
  projects,
}: {
  projects: Project[];
}) {
  const items = mapProjectsToLayout(projects);

  return (
    <>
      {/* Desktop */}
      <div className="flex justify-center p-4">
        <div className="w-full h-full aspect-[16/9]">
          <div
            className="grid gap-4 w-full h-full"
            style={{
              gridTemplateColumns: "repeat(13, minmax(0, 1fr))",
              gridTemplateRows: "repeat(8, minmax(0, 1fr))",
            }}
          >
            {items.map((item, i) => (
              <Card key={i} item={item} />
            ))}
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="grid grid-cols-1 gap-4 p-4 hidden">
        {items.map((item, i) => (
          <Card key={i} item={item} mobile />
        ))}
      </div>
    </>
  );
}
