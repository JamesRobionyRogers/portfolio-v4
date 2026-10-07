import React from 'react'
import Link from 'next/link'
import { siteConfig } from '@/config/site'

const linkClasses = "text-accent font-semibold text-lg sm:text-xl lg:text-2xl hover:underline"

const Footer = () => {
    return (
        <footer className="px-4 lg:px-8">
            <div className="mt-auto mb-4 px-4 lg:px-8 lg:mb-8 flex justify-between items-center gap-8">
                <p className="text-accent font-semibold text-xl lg:text-2xl">© {new Date().getFullYear()}</p>
                <Link href="/projects" className={linkClasses}>Projects</Link>
                {siteConfig.social.map((item) => (
                    <a key={item.href} href={item.href} target="_blank" rel="noopener noreferrer" className={linkClasses}>{item.label}</a>
                ))}
            </div>
        </footer>
    )
}

export default Footer
