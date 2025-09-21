import React from 'react'
import ProjectCard from '@/components/ui/ProjectCard'
import { getFeaturedProjects, getProjectBySlug, projects } from '@/lib/projects'

const featuredProjects = getFeaturedProjects()
const allProjects = projects

// Generate metadata for SEO
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug)

  if (!project) {
    return {
      title: 'Project Not Found',
    }
  }

  return {
    title: `${project.title} - Project Details`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: [project.image],
    },
  }
}

// Main Projects Page
const ProjectsPage = () => {
  return (
    <section className="flex flex-col gap-8 pt-28 px-4 lg:px-8 min-h-screen">
      <h1 className="text-8xl uppercase text-neutral-900 font-black">Featured Projects</h1>

      <div className="grid grid-cols-12 gap-4 bg-neutral-200 rounded-xl p-4">
        {/* Main Featured Project */}
        <div className="col-span-8">
          <ProjectCard project={featuredProjects[0]} variant="featured" />
        </div>

        {/* Second and third projects */}
        <div className="col-span-4 flex flex-col gap-4 justify-between">
          <ProjectCard project={projects[1]} variant="compact" />
          <ProjectCard project={projects[2]} variant="compact" />
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