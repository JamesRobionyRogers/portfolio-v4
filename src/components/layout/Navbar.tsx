import React from 'react'
import Link from 'next/link'
import { siteConfig } from '@/config/site'
import { getCurrentProject, projectHref } from '@/lib/projects'

const Navbar = () => {
    const currentProject = getCurrentProject()

    return (
        <nav className="sticky top-0 px-6 pt-2 lg:px-10 lg:pt-4 z-50">
            <ul className="flex justify-between">
                <li className="hidden sm:flex justify-between gap-6">
                    <div className="flex flex-col">
                        <p className="text-lg font-semibold text-fg">NZ Based</p>
                        <p className="text-lg text-fg-muted">Working in Wellington</p>
                    </div>
                    {currentProject && (
                        <div className="hidden lg:flex flex-col">
                            <p className="text-lg font-semibold text-fg">Working on</p>
                            <Link className="text-lg text-fg-muted" href={projectHref(currentProject)}>{currentProject.title}</Link>
                        </div>
                    )}
                </li>

                <li className="flex justify-between items-center gap-16">
                    {siteConfig.nav.map((item) => (
                        <Link key={item.href} className="text-lg font-semibold text-fg" href={item.href}>{item.label}</Link>
                    ))}
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
