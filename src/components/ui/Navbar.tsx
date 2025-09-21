import React from 'react'
import Link from 'next/link'
import { PlaneTakeoff, SendIcon } from 'lucide-react'

const Navbar = () => {

    const location = [
        "NZ Based",
        "Working in Wellington"
    ]

    const currentProject = [
        "Working on",
        "Exiftool GUI for Mac"
    ]
    const currentProjectLink = "/projects/exiftool-gui"

    return (
        <nav className="sticky top-0 px-6 pt-2 lg:px-10 lg:pt-4 z-100">
            <ul className="flex justify-between">
                <li className="hidden sm:flex justify-between gap-6">
                    <div className="flex flex-col">
                        <p className="text-lg font-semibold text-neutral-900">{location[0]}</p>
                        <p className="text-lg text-neutral-400">{location[1]}</p>
                    </div>
                    <div className="hidden lg:flex flex-col">
                        <p className="text-lg font-semibold text-neutral-900">{currentProject[0]}</p>
                        <a className="text-lg text-neutral-400" href={currentProjectLink}>{currentProject[1]}</a>
                    </div>
                </li>

                <li className="flex justify-between items-center gap-16">
                    <Link className="text-lg font-semibold text-neutral-900" href="/">Home</Link>
                    <Link className="text-lg font-semibold text-neutral-900" href="/projects">Projects</Link>
                    {/* <Link className="text-lg font-semibold text-neutral-900" href="/services">Services</Link> */}
                    {/* <Link className="text-lg font-semibold text-neutral-900" href="/blog">Blog</Link> */}
                </li>

                <li className="">
                    <a 
                        className="flex flex-col item-center justify-around p-2 sm:px-4 sm:py-2 leading-5 sm:leading-11 text-white font-semibold text-md sm:text-lg bg-neutral-900 rounded-full ring-1 ring-neutral-800" 
                        href="mailto:james@jamesrobionyrogers.com"
                    >
                        <span className="hidden sm:flex">Message me!</span>
                        <SendIcon className="size-4 sm:hidden" />
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar