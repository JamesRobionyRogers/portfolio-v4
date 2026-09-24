// Next.js (App Router) + TypeScript version
// Apple-style Bento Grid (Videos-first, responsive, performant)

"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { Project } from "@/lib/projects";

// ------------------ TYPES ------------------

// NEW: Allows explicit media selection per tile
export type BentoMediaConfig = {
  projectTitle: string;
  media: string; // exact image/video you want
};

type BentoItem = {
  project: Project;
  media: string;
  isVideo: boolean;
  style?: React.CSSProperties;
};

// ------------------ HELPERS ------------------
const isVideo = (src: string) => /\.(mp4|webm|mov)$/i.test(src);

const getFeatured = (projects: Project[]) => {
  return projects.find((p) => p.featured) || projects[0];
};

// Layout mapping with explicit media override
const mapProjectsToLayout = (
  projects: Project[],
  mediaConfig?: BentoMediaConfig[]
): BentoItem[] => {
  const items: BentoItem[] = [];

  const featured = getFeatured(projects);
  const rest = projects.filter((p) => p !== featured);

  const getMedia = (project: Project) => {
    const override = mediaConfig?.find(
      (m) => m.projectTitle === project.title
    );

    if (override) return override.media;

    return project.video || project.featuredImage;
  };

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

  rest.forEach((project, i) => {
    const slot = slots[i % slots.length];
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
const useVideoAutoPause = (ref: React.RefObject<HTMLVideoElement>) => {
  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) video.play().catch(() => {});
        else video.pause();
      },
      { threshold: 0.5 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, [ref]);
};

// ------------------ COMPONENTS ------------------

const Media = ({ src, isVideo, priority }: { src: string; isVideo: boolean; priority?: boolean }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  if (isVideo) {
    useVideoAutoPause(videoRef);

    return (
      <video
        ref={videoRef}
        src={src}
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
        <motion.div
            whileHover={{ scale: 1.01 }}
            className={`relative overflow-hidden rounded-lg lg:rounded-2xl bg-neutral-900 text-white cursor-pointer ${
                mobile ? "aspect-[16/9]" : ""
            }`}
            style={!mobile ? style : undefined}
        >
            <Link href={project.route}>
                <Media src={media} isVideo={isVideo} priority={project.featured} />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                <div className="hidden 3xl:flex relative p-4 flex-col justify-end h-full">
                    <h2 className="text-lg font-semibold">{project.title}</h2>
                    <p className="text-sm text-neutral-300 line-clamp-2">
                        {project.description}
                    </p>
                </div>
            </Link>
        </motion.div>
  );
};

// ------------------ MAIN GRID ------------------

export function BentoGrid({
  projects,
  mediaConfig,
}: {
  projects: Project[];
  mediaConfig?: BentoMediaConfig[];
}) {
  const items = mapProjectsToLayout(projects, mediaConfig);

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

// ------------------ USAGE ------------------
// const projects = await getAllProjects();
//
// <BentoGrid
//   projects={projects}
//   mediaConfig={[
//     {
//       projectTitle: "TailorWrite",
//       media: "/videos/tailorwrite-demo.mp4",
//     },
//     {
//       projectTitle: "FHCL",
//       media: "/images/projects/fhcl/overview.png",
//     },
//   ]}
// />
