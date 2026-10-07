import React from 'react'
import type { Metadata } from 'next'
import ProjectCard from '@/components/ui/ProjectCard'
import { getFeaturedProjects, projects } from '@/lib/projects'

const [mainProject, ...sideProjects] = getFeaturedProjects(3)
const allProjects = projects

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Explore my portfolio of projects.',
  openGraph: {
    title: 'Projects',
    description: 'Explore my portfolio of projects.',
  },
}

// Main Projects Page
const ProjectsPage = () => {
  return (
    <section className="flex flex-col gap-8 pt-28 px-4 lg:px-8 min-h-screen">
      <h1 className="text-8xl uppercase text-neutral-900 font-black">Featured Projects</h1>

      <div className="grid grid-cols-12 gap-4 bg-neutral-200 rounded-xl p-4">
        {/* Main Featured Project */}
        <div className="col-span-8">
          <ProjectCard project={mainProject} variant="featured" />
        </div>

        {/* Second and third projects */}
        <div className="col-span-4 flex flex-col gap-4 justify-between">
          {sideProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} variant="compact" />
          ))}
        </div>
      </div>


      <div className="flex flex-row justify-between items-end gap-2">
        <h1 className="text-8xl uppercase text-neutral-900 font-black">All Projects</h1>
        <h1 className="text-7xl uppercase text-neutral-900 font-black">&apos;23-&apos;25</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pb-8">
        {allProjects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>

    </section>

  )
}



export default ProjectsPage
