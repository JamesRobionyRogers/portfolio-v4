import React from 'react'

const Footer = () => {

    const email = "mailto:james.robionyrogers@yahoo.co.nz"
    const linkedIn = "https://www.linkedin.com/in/jamesrobionyrogers/"
    const github = "https://github.com/JamesRobionyRogers"

    return (
        <section className="flex flex-col gap-4 px-4 lg:px-8">
            <div className="mt-auto mb-4 px-4 lg:px-8 lg:mb-8 flex justify-between items-center gap-8" >
                <p className="text-blue-400 font-semibold text-xl lg:text-2xl">2025©</p>
                <a href={email} className="text-blue-400 font-semibold text-xl lg:text-2xl hover:underline">Email</a>
                <a href={linkedIn} target="_blank" className="text-blue-400 font-semibold text-xl lg:text-2xl hover:underline">LinkedIn</a>
                <a href={github} target="_blank" className="text-blue-400 font-semibold text-xl lg:text-2xl hover:underline">GitHub</a>
            </div>
        </section>
    )
}

export default Footer

