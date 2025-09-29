import type { Project } from "@/types/project";
import Link from "next/link";
import Image from "next/image";

interface SmallProjectCardProps {
  project: Project;
  className?: string;
}

const SmallProjectCard = ({ project, className = "" }: SmallProjectCardProps) => {
  return (
    <Link 
      href={project.link ?? ''} 
      className={`flex flex-col gap-4 lg:gap-5 px-3 lg:px-4 pt-3 lg:pt-4 pb-5 lg:pb-6 rounded-xl lg:rounded-2xl bg-neutral-900 cursor-pointer group relative hover:bg-neutral-800 transition-colors ${className}`}
    >
      {/* Project Image */}
      <div className="relative aspect-video rounded-lg overflow-hidden">
        <Image
          src={project.featuredImage}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
      </div>

      {/* Project Info */}
      <div className="flex justify-between items-center w-full relative">
        <div className="flex items-center gap-2 lg:gap-3">
          <Image 
            src={project.icon}
            alt={`${project.title} icon`}
            className="w-6 h-6 lg:w-8 lg:h-8 rounded-full" 
            width={32} 
            height={32}
            loading="lazy" 
            decoding="async" 
          />
          <p className="text-[clamp(14px,1.2vw,18px)] uppercase font-semibold text-neutral-100 tracking-wide">
            {project.title}
          </p>
        </div>
        <div className="flex gap-3 lg:gap-5">
          <p className="text-[clamp(14px,1.2vw,18px)] uppercase font-semibold text-neutral-300 tracking-wide">
            {project.type}
          </p>
          <p className="text-[clamp(14px,1.2vw,18px)] uppercase font-semibold text-neutral-300 tracking-wide">
            {project.year}
          </p>
        </div>
      </div>

      {/* Project Description */}
      <p className="text-neutral-400 text-sm line-clamp-2">
        {project.description}
      </p>

      {/* Technologies */}
      <div className="flex flex-wrap gap-1">
        {project.technologies.slice(0, 3).map((tech) => (
          <span
            key={tech}
            className="px-2 py-1 bg-neutral-800 text-neutral-300 text-xs rounded"
          >
            {tech}
          </span>
        ))}
        {project.technologies.length > 3 && (
          <span className="px-2 py-1 bg-neutral-800 text-neutral-300 text-xs rounded">
            +{project.technologies.length - 3}
          </span>
        )}
      </div>
    </Link>
  )
}

export default SmallProjectCard