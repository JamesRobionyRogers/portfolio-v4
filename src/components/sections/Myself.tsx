import React from 'react'
import Image from 'next/image'

const Myself = () => {

    const blurb = "AWS-certified Software Engineer with experience in full-stack development, cloud infrastructure, and DevOps. Skilled in web technologies and cloud services including Python, React, Java, Docker, and AWS"

    const aboutMeText = [
        "Hey 👋, I'm James. A \"Wellingtonian\" working towards making an name for myself in the tech industry. I like building applications to solve problems that could be solved in a shorter time doing it manually",
        "If I'm not at my computer you will find me on the trails exploring New Zealand on my mountain bike, by foot or by snowboard.",
        "Check out my links below or get to know me a bit better"
    ]
    

    return (
        <section className="grid grid-cols-12 gap-4 lg:gap-8 pt-56 py-28 px-4 lg:px-8">
            
            <div className="flex flex-col items-center col-span-12 lg:col-span-6">
                <h2 className="uppercase block w-full text-2xl mb-4 font-semibold leading-[1.2] text-center md:text-left">Myself</h2>
                <p className="text-5xl font-semibold leading-14 text-center md:text-left">
                    {/* {blurb} */}
                    AWS-certified Software Engineer with experience in full-stack development, cloud infrastructure, and DevOps. 
                    <br className="mb-4"/> 
                    Skilled in web technologies and cloud services including Python, React, Java, Docker, and AWS
                </p>
            </div>

            <div className="hidden flex-col items-center justify-around lg:flex h-full col-span-6 mx-25">
                <div className="relative group">
                    <Image
                        className="mx-auto aspect-[3/4] w-[90%] mt-6 max-w-sm rounded-lg object-cover shadow-lg absolute -rotate-6 -left-1/5 group-hover:-left-1/2 group-hover:-rotate-10 transition-all ease-in-out duration-400"
                        src="/images/assets/left-selfportrate.jpg"
                        alt="Picture of James"
                        width={500} height={500}
                    />
                    <Image
                        className="mx-auto aspect-[3/4] w-[90%] mt-6 max-w-sm rounded-lg object-cover shadow-lg absolute rotate-6 -right-1/5 group-hover:-right-1/2 group-hover:rotate-10 transition-all ease-in-out duration-400"
                        src="/images/assets/right-selfportrate.jpg"
                        alt="Picture of James"
                        width={500} height={500}
                    />
                    <Image 
                        src="/images/SelfPortrait.JPG" 
                        alt="Picture of James" 
                        width={500} height={500} 
                        className="relative mx-auto aspect-[3/4] w-full max-w-sm rounded-lg object-cover z-10 shadow-lg" 
                    />
                    <p className="text-sm text-center text-gray-500 mt-2">
                        11th of December 2024, Graduation Day <br />
                    <a className="ml-1 underline" href="https://maps.app.goo.gl/133QEkXZ1cyvkYqv6">University of Otago Clock Tower</a>
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Myself