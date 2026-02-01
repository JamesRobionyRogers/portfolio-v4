import React from 'react'
import Image from 'next/image'
import { Marquee } from '../magicui/marquee'
import { Python, React as ReactIcon, Java, Docker, AWS, Go, Kubernetes, Terraform, NodeJs, TypeScript } from "developer-icons";

const Myself = () => {

    // const blurb = "AWS-certified Software Engineer with experience in full-stack development, cloud infrastructure, and DevOps. Skilled in web technologies and cloud services including Python, React, Java, Docker, and AWS"

    // const aboutMeText = [
    //     "Hey 👋, I'm James. A \"Wellingtonian\" working towards making an name for myself in the tech industry. I like building applications to solve problems that could be solved in a shorter time doing it manually",
    //     "If I'm not at my computer you will find me on the trails exploring New Zealand on my mountain bike, by foot or by snowboard.",
    //     "Check out my links below or get to know me a bit better"
    // ]
    

    return (
        <section className="grid grid-cols-12 gap-4 lg:gap-8 pt-56 py-28 px-4 lg:px-8">
            
            <div className="flex flex-col items-center col-span-12 lg:col-span-6">
                <h2 className="uppercase block w-full text-2xl mb-4 font-semibold leading-[1.2] text-center md:text-left">Myself</h2>
                <p className="text-5xl font-semibold leading-14 text-center md:text-left"> 
                    {/* {blurb} */}
                    AWS-certified Software Engineer currently working in industry building out backend services in Go. 
                    <br/> <br/> 
                    
                    I have experience in full-stack development, cloud infrastructure, and DevOps. 
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
                        src="/images/assets/right-selfportrate.JPG"
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

            <Marquee
                className="col-span-12 -mb-10 mt-10 -mx-8"
                pauseOnHover={false}
                repeat={3}
            >
                <span className="text-3xl font-medium mx-4">
                    <Python className="inline size-14 mr-2 mb-1" />
                    Python
                </span>
                <span className="text-3xl font-medium mx-4">
                    <Go className="inline size-14 mr-2 mb-1" />
                    Go
                </span>
                <span className="text-3xl font-medium mx-4">
                    <ReactIcon className="inline size-14 mr-2 mb-1" />
                    React
                </span>
                <span className="text-3xl font-medium mx-4">
                    <Java className="inline size-14 mr-2 mb-1" />
                    Java
                </span>
                <span className="text-3xl font-medium mx-4">
                    <Docker className="inline size-14 mr-2 mb-1" />
                    Docker
                </span>
                <span className="text-3xl font-medium mx-4">
                    <AWS className="inline size-14 mr-2 mb-1" />
                    AWS
                </span>
                <span className="text-3xl font-medium mx-4">
                    <Terraform className="inline size-14 mr-2 mb-1" />
                    Terraform
                </span>
                <span className="text-3xl font-medium mx-4">
                    <TypeScript className="inline size-14 mr-2 mb-1" />
                    TypeScript
                </span>
            </Marquee>
        </section>
    )
}

export default Myself