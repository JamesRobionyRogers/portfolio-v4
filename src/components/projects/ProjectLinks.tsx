import { Project } from '@/types/project'

const linkClasses = "text-xs lg:text-[clamp(14px,0.8vw,18px)] text-ink-subtle uppercase font-medium tracking-wider flex items-center gap-1 hover:underline hover:text-ink-fg transition-colors duration-300"

const ProjectLinks = ({ project }: { project: Project }) => {
    const links = [
        { label: "View Website", href: project.link },
        { label: "View Code", href: project.github },
    ]

    return (
        <div className="flex justify-between px-4 col-span-12">
            {links.map(({ label, href }) => href && (
                <a key={label} className={linkClasses} href={href} target="_blank" rel="noopener noreferrer">
                    {label} <span aria-hidden="true" className="text-inherit text-xl pb-1">↗</span>
                </a>
            ))}
        </div>
    )
}

export default ProjectLinks
