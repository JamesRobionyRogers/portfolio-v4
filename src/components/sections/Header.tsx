import React from 'react'
import Image from 'next/image'

import MarqueeDemoVertical from '../ui/MarqueeDemoVertical'

const Header = () => {
    return (
        <section className="relative min-h-[90vh] flex flex-col justify-between px-4 lg:px-8 pt-10 sm:py-0">
            <div className="flex flex-col gap-10 sm:gap-0">
                <FullName />
                <div className="flex flex-col lg:flex-row lg:justify-between items-center sm:items-start gap-2 lg:gap-0 ">
                    <p className="text-[clamp(20px,1.6vw,32px)] font-semibold leading-1 sm:leading-[1.2] text-center md:text-left">Software & Cloud Engineer</p>

                    <div className="flex flex-col items-end gap-2 mb-4">
                        <p className="text-[clamp(20px,1.6vw,32px)] font-medium leading-[1.2] text-center md:text-left">Building & Deploying Software</p>
                    </div>

                </div>
            </div>

            <div className="flex flex-col flex-1 gap-4 sm:mb-10">
                <div className="relative my-auto bg-black rounded-xl flex-grow sm:aspect-video overflow-hidden shadow-2xl">
                    <MarqueeDemoVertical />
                </div>
                <div className="flex justify-between">
                    <p className="text-lg font-medium leading-[1] text-center md:text-left">↓ Check out </p>
                    <div className="flex gap-2">
                        <p className="text-lg font-medium leading-[1] text-center md:text-left">my projects ↓</p>
                        {/* <span className="animate-bounce">↓</span> */}
                    </div>
                </div>
            </div>

        </section>
    )
}

const FullName = () => {
    return (
        <div className="flex flex-col lg:flex-row lg:justify-between items-center gap-2 lg:gap-0">
            <div className="overflow-hidden sm:mr-[4vw]">
                <Image
                    className="h-auto w-full sm:h-[10vw] sm:w-auto object-contain pointer-events-none"
                    src="/JAMES.png"
                    alt="James"
                    width={0} height={0}
                    style={{ color: 'transparent' }}
                    decoding="async"
                    data-nimg="1"
                    sizes="100vw"
                />
            </div>

            <div className="overflow-hidden">
                <Image
                    className="h-[10vw] w-auto object-contain pointer-events-none"
                    src="/ROBIONY-ROGERS.png"
                    alt="James"
                    width={0} height={0}
                    style={{ color: 'transparent' }}
                    decoding="async"
                    data-nimg="1"
                    sizes="100vw"
                />
            </div>
        </div>
    )
}

export default Header