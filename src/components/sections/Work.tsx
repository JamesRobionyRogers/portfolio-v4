import React from 'react'
import Link from 'next/link'

import ProjectCard from '../ui/ProjectCard';
import { getFeaturedProjects } from '@/lib/projects';

const featuredProjects = getFeaturedProjects(2)

const Work = () => {

    return (
        <section className="flex flex-col gap-8 py-28 px-4 lg:px-8">
            <SectionHeading />

            <ul className="grid grid-cols-1 sm:grid-cols-2 grid-rows-1 gap-8">
                {featuredProjects.map((project) => (
                    <ProjectCard project={project} key={project.title} />
                ))}
            </ul>

            
            <Link className="text-center text-xl mt-8 font-semibold text-neutral-900" href="/projects">See all →</Link>

        </section>
    )
}

const SectionHeading = () => {
    return (
        <h2 className="flex justify-between w-full mb-6 lg:mb-8">
            <span className="text-[clamp(48px,12vw,200px)] font-bold tracking-tight leading-[0.8] uppercase" aria-label="Work">
                <div className="line-mask line1-mask" aria-hidden="true" style={{ position: 'relative', display: 'block', textAlign: 'start', overflow: 'clip' }}>
                    <div className="line line1" aria-hidden="true" style={{ position: 'relative', display: 'block', textAlign: 'start', translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(0px)' }}>
                        Work
                    </div>
                </div>

            </span>
            <span className="text-[clamp(48px,12vw,200px)] font-bold tracking-tight leading-[0.8] uppercase" aria-label="'25">
                <div className="line-mask line1-mask" aria-hidden="true" style={{ position: 'relative', display: 'block', textAlign: 'start', overflow: 'clip' }}>
                    <div className="line line1" aria-hidden="true" style={{ position: 'relative', display: 'block', textAlign: 'start', translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(0px)' }}>
                        &apos;24/&apos;25
                    </div>
                </div>
            </span>
        </h2>
    )
}

// const ProjectCard = ({ project }: { project: Project }) => {
//     return (
//         <Link href={`/projects/${project.title.toLowerCase()}`}>
//             <li className="bg-neutral-900 p-6 rounded-lg overflow-hidden flex flex-col gap-4 shadow-md hover:shadow-lg transition-shadow duration-300">
//                 {/* Preview of the project */}
//                 <Image 
//                     className="w-full aspect-[6/4] object-cover object-left rounded-md mb-4 hover:blur-md transition duration-500 ease-in-out"
//                     src={project.image} 
//                     alt={project.title} 
//                     width={400} 
//                     height={300}
//                 />

//                 <div className="flex justify-between mx-2">
//                     <div className="flex items-center gap-2">

//                         {project.icon.length > 0 &&
//                             <Image 
//                                 className="size-6"
//                                 src={project.icon}
//                                 alt="Project icon"
//                                 width={100}
//                                 height={100}
//                             />
//                         }
//                         <h3 className="text-xl uppercase font-bold text-neutral-100 tracking-wide">{project.title}</h3>
//                     </div>
//                     <div className="uppercase flex gap-4">
//                         <span className="text-xl uppercase font-semibold text-neutral-300 tracking-wide">{project.type}</span>
//                         <span className="text-xl uppercase font-semibold text-neutral-300 tracking-wide">{project.year}</span>
//                     </div>
//                 </div>

//                 <div className="relative flex flex-wrap gap-2 mx-2 mb-4">
//                     <div className="absolute">
//                         {project.technologies.map((tech: string) => (
//                             <span key={tech} className="text-neutral-500 font-mono text-md py-1">
//                                 {tech}, 
//                             </span>
//                         ))}
//                         {project.technologies.map((tech: string) => (
//                             <span key={tech} className="text-neutral-500 font-mono text-md py-1">
//                                 {tech}, 
//                             </span>
//                         ))}
//                     </div>
//                 </div>
//             </li>
//         </Link>
//     )
// }

export default Work