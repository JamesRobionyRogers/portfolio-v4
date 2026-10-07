import React from 'react'
import Link from 'next/link'
import { getCurrentProject, projectHref } from '@/lib/projects'

const Navbar = () => {

    const location = [
        "NZ Based",
        "Working in Wellington"
    ]

    const currentProject = getCurrentProject()

    return (
        <nav className="sticky top-0 px-6 pt-2 lg:px-10 lg:pt-4 z-100">
            <ul className="flex justify-between">
                <li className="hidden sm:flex justify-between gap-6">
                    <div className="flex flex-col">
                        <p className="text-lg font-semibold text-neutral-900">{location[0]}</p>
                        <p className="text-lg text-neutral-400">{location[1]}</p>
                    </div>
                    {currentProject && (
                        <div className="hidden lg:flex flex-col">
                            <p className="text-lg font-semibold text-neutral-900">Working on</p>
                            <Link className="text-lg text-neutral-400" href={projectHref(currentProject)}>{currentProject.title}</Link>
                        </div>
                    )}
                </li>

                <li className="flex justify-between items-center gap-16">
                    <Link className="text-lg font-semibold text-neutral-900" href="/">Home</Link>
                    <Link className="text-lg font-semibold text-neutral-900" href="/projects">Projects</Link>
                    {/* <Link className="text-lg font-semibold text-neutral-900" href="/services">Services</Link> */}
                    <Link className="text-lg font-semibold text-neutral-900" href="/blog">Blog</Link>
                </li>

            </ul>
        </nav>
    )
}

export default Navbar