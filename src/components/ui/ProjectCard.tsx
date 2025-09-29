import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Project } from '@/types/project'

interface ProjectCardProps {
  project: Project
  variant?: 'default' | 'compact' | 'featured'
  className?: string
}

const ProjectCard = ({ project, variant = 'default', className = '' }: ProjectCardProps) => {
  const baseClasses = "group block bg-neutral-900 rounded-xl lg:rounded-2xl overflow-hidden transition-all duration-300"
  
  if (variant === 'compact') {
    return (
      <Link 
        href={project.route}
        className={`${baseClasses} ${className} h-full`}
      >
        <div className="p-4">
          <div className="flex items-center gap-3 mb-3">
            {project.icon && <Image
              src={project.icon}
              alt={`${project.title} icon`}
              width={48}
              height={48}
              className="rounded-xl"
            />}
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-neutral-400">{project.type} • {project.year}</p>
            </div>
          </div>
          <p className="text-neutral-300 text-sm mb-3 line-clamp-2">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-1">
            {project.technologies.slice(0, 2).map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 bg-neutral-800 text-neutral-300 text-xs rounded"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 2 && (
              <span className="px-2 py-1 bg-neutral-800 text-neutral-300 text-xs rounded">
                +{project.technologies.length - 2}
              </span>
            )}
          </div>
        </div>
      </Link>
    )
  }

  if (variant === 'featured') {
    return (
      <Link 
        href={project.route}
        className={`${baseClasses} lg:col-span-2 ${className} h-full`}
      >
        <div className="relative aspect-video overflow-hidden">
          <div
            className="absolute inset-0 w-full h-full opacity-70 pointer-events-none [border-radius:var(--border-radius)] [background-image:linear-gradient(0deg,var(--color-dark),#00000040_50%,#00000040)]"
          ></div>
          <Image
            src={project.images[0]}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 right-4">
            <div className="flex items-center gap-3 mb-2">
              {project.icon && <Image
                src={project.icon}
                alt={`${project.title} icon`}
                width={48}
                height={48}
                className="rounded-xl"
              />}
              <div>
                <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-neutral-300">{project.type} • {project.year}</p>
              </div>
            </div>
            <p className="text-neutral-200 text-lg mb-3 line-clamp-2">
              {project.summary}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.slice(0, 4).map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm rounded-full"
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 4 && (
                <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm rounded-full">
                  +{project.technologies.length - 4} more
                </span>
              )}
            </div>
          </div>
        </div>
      </Link>
    )
  }

  // Default variant
  return (
    <Link 
      href={project.route}
      className={`${baseClasses} ${className} p-4`}
    >
      <div className="relative aspect-4/3 overflow-hidden rounded-lg">
        <Image
          src={project.images[0]}
          alt={project.title}
          fill
          className="object-cover transition-all duration-800 group-hover:scale-110 group-hover:blur-[5px] "
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" /> */}
      </div>
      
      <div className="p-4 lg:p-6">
        <div className="flex items-center gap-3 mb-3">
          {project.icon && 
            <div className="relative size-6">
              <Image
                className="object-fill rounded-xl"
                src={project.icon}
                alt={`${project.title} icon`}
                fill
                sizes='100vw'
              />
            </div>
          }
          <div className="w-full flex gap-4 justify-between items-center">
            <h3 className="text-lg lg:text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
              {project.title}
            </h3>
            <p className="uppercase text-sm text-neutral-400">{project.type} {project.year}</p>
          </div>
        </div>
        
        <p className="text-neutral-300 text-sm lg:text-base mb-4 line-clamp-2">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 bg-neutral-800 text-neutral-300 text-xs rounded-md"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-2 py-1 bg-neutral-800 text-neutral-300 text-xs rounded-md">
              +{project.technologies.length - 3} more
            </span>
          )}
        </div>
      </div>
    </Link>
  )
}

export default ProjectCard
