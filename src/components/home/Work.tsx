import React from 'react'
import Link from 'next/link'

import ProjectCard from '@/components/projects/ProjectCard';
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

            
            <Link className="text-center text-xl mt-8 font-semibold text-fg" href="/projects">See all →</Link>

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

export default Work
