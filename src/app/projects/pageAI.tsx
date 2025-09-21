import React from 'react'
import { projects } from '@/lib/projects'
import ProjectCard from '@/components/ui/ProjectCard'

// Main Projects Page
const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-black">
      {/* Header Section */}
      <section className="px-4 lg:px-8 py-12 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              My Projects
            </h1>
            <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
              A collection of projects I&apos;ve built, showcasing my skills in web development, 
              desktop applications, and developer tools.
            </p>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
                {projects.length}
              </div>
              <div className="text-neutral-400">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
                {new Set(projects.map(p => p.type)).size}
              </div>
              <div className="text-neutral-400">Categories</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
                {new Set(projects.flatMap(p => p.technologies)).size}
              </div>
              <div className="text-neutral-400">Technologies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
                {Math.max(...projects.map(p => p.year))}
              </div>
              <div className="text-neutral-400">Latest</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Project */}
      <section className="px-4 lg:px-8 py-8 lg:py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-8">Featured Project</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            <ProjectCard project={projects[0]} variant="featured" />
            <div className="space-y-6">
              <ProjectCard project={projects[1]} variant="compact" />
              <ProjectCard project={projects[2]} variant="compact" />
            </div>
          </div>
        </div>
      </section>

      {/* All Projects */}
      <section className="px-4 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-8">All Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProjectsPage