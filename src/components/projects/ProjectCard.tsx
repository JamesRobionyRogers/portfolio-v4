import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Project } from '@/types/project'
import { projectHref } from '@/lib/projects'
import { TagList } from '@/components/ui/Tag'
import ProjectCardVideo from '@/components/projects/ProjectCardVideo'

interface ProjectCardProps {
  project: Project
  variant?: 'default' | 'compact' | 'featured'
  className?: string
}

const ProjectCard = ({ project, variant = 'default', className = '' }: ProjectCardProps) => {
  const baseClasses = "group block bg-ink rounded-xl lg:rounded-2xl overflow-hidden"

  if (variant === 'compact') {
    return (
      <Link
        href={projectHref(project)}
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
              <h3 className="text-lg font-semibold text-ink-fg group-hover:text-accent-on-ink transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-ink-subtle">{project.type} • {project.year}</p>
            </div>
          </div>
          <p className="text-ink-muted text-sm mb-3 line-clamp-2">
            {project.description}
          </p>
          <TagList tags={project.technologies} max={2} />
        </div>
      </Link>
    )
  }

  if (variant === 'featured') {
    return (
      <Link
        href={projectHref(project)}
        className={`${baseClasses} lg:col-span-2 ${className} h-full`}
      >
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={project.featuredImage}
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
                <h3 className="text-2xl font-bold text-ink-fg group-hover:text-accent-on-ink transition-colors">
                  {project.title}
                </h3>
                <p className="text-ink-muted">{project.type} • {project.year}</p>
              </div>
            </div>
            <p className="text-ink-fg text-lg mb-3 line-clamp-2">
              {project.summary}
            </p>
            <TagList tags={project.technologies} max={4} variant="glass" />
          </div>
        </div>
      </Link>
    )
  }

  return (
    <Link
      href={projectHref(project)}
      className={`${baseClasses} ${className} p-4`}
    >
      <div className="relative aspect-4/3 overflow-hidden rounded-lg">
        <Image
          src={project.featuredImage}
          alt={project.title}
          fill
          className="object-cover transition-[transform,filter] duration-800 group-hover:scale-110 group-hover:blur-[5px]"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {project.video && <ProjectCardVideo src={project.video} poster={project.poster} />}
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
                sizes="24px"
              />
            </div>
          }
          <div className="w-full flex gap-4 justify-between items-center">
            <h3 className="text-lg lg:text-xl font-semibold text-ink-fg group-hover:text-accent-on-ink transition-colors">
              {project.title}
            </h3>
            <p className="uppercase text-sm text-ink-subtle">{project.type} {project.year}</p>
          </div>
        </div>

        <p className="text-ink-muted text-sm lg:text-base mb-4 line-clamp-2">
          {project.description}
        </p>

        <TagList tags={project.technologies} max={3} />
      </div>
    </Link>
  )
}

export default ProjectCard
