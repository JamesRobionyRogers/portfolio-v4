import React from 'react'
import { notFound } from 'next/navigation'
import Image from 'next/image'
// import Link from 'next/link'
import { getProjectBySlug, getAllProjectSlugs } from '@/lib/projects'

// Generate static params for all project slugs
export async function generateStaticParams() {
  const slugs = getAllProjectSlugs()
  return slugs.map((slug) => ({
    slug: slug,
  }))
}

// Generate metadata for SEO
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  
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

// Technology Badge Component
const TechnologyBadge = ({ tech }: { tech: string }) => (
  <span className="uppercase text-sm py-1 px-2 bg-neutral-700 text-neutral-200 rounded-md">
    {tech}
  </span>
)

// Back to Project navigation component 
// const BackToProjects = () => {
//     return (
//         <div className="px-4 lg:px-8 py-6">
//             <div className="max-w-7xl mx-auto">
//                 <Link
//                     href="/projects"
//                     className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors"
//                 >
//                     <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//                     </svg>
//                     Back to Projects
//                 </Link>
//             </div>
//         </div>
//     )
// }

// Project Detail Page
const ProjectDetailPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  return (
    <main className="flex flex-col gap-15 min-h-screen bg-neutral-900 rounded-3xl m-4 lg:m-8 p-4 pt-28">
      <div className="relative flex justify-around gap-2">
          <h1 className="text-8xl uppercase text-neutral-200 font-black">{project.title}</h1>
      </div>

      <section className="relative flex flex-col gap-15 bg-neutral-800 rounded-3xl px-4 py-6">
        <div className="flex flex-col gap-8 justify-between lg:grid lg:grid-cols-12">

          <div className="flex flex-col gap-2 col-span-3">
            <h3 className="uppercase text-neutral-400">Year</h3>
            <h2 className="text-5xl text-neutral-200 font-semibold">{project.year}</h2>
          </div>

          <div className="flex flex-col gap-2 col-span-4">
            <h3 className="uppercase text-neutral-400">Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <TechnologyBadge key={tech} tech={tech} />
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-2 col-span-5">
            <h3 className="uppercase text-neutral-400">Summary</h3>
            <h2 className="text-lg text-neutral-200">{project.summary}</h2>
          </div>

        </div>

        <div className="flex flex-col gap-4 lg:gap-5">
          
          <div className="flex justify-between px-4 col-span-12">
            {project.link && 
              <a className="text-xs lg:text-[clamp(14px,0.8vw,18px)] text-neutral-400 uppercase font-medium tracking-wider flex items-center gap-1 hover:underline hover:text-neutral-100 transition-all duration-300" 
                href={project.link}
              >
                View Website <span className="text-inherit text-xl pb-1">↗</span>
              </a>
            }
            {project.github && 
              <a className="text-xs lg:text-[clamp(14px,0.8vw,18px)] text-neutral-400 uppercase font-medium tracking-wider flex items-center gap-1 hover:underline hover:text-neutral-100 transition-all duration-300" 
                href={project.github}
              >
                View Code <span className="text-inherit text-xl pb-1">↗</span>
              </a>
            }
          </div>

          <div className="w-full h-[200px] lg:h-[clamp(600px,57vw,1200px)] rounded-lg lg:rounded-xl overflow-hidden relative">
            <Image
              className="object-cover"
              src={project.image}
              alt={`${project.title} project preview`}
              width={1920}
              height={1080}
              sizes="100vw"
            />

          </div>
        </div>

        {/* <img
          className="block w-auto h-auto rounded-2xl"
          src={project.image}
        />  */}


      </section>

    </main>
  )
}

export default ProjectDetailPage
