import React from 'react'
import Image from 'next/image'

import MarqueeDemoVertical from '../ui/MarqueeDemoVertical'

const Header = () => {
    return (
        <section className="min-h-[90vh] flex flex-col justify-between px-4 lg:px-8">
            <div>
                <FullName />
                <div className="flex flex-col lg:flex-row lg:justify-between items-start gap-2 lg:gap-0">
                    <p className="text-[clamp(20px,1.6vw,32px)] font-semibold leading-[1.2] text-center md:text-left">Software & Cloud Engineer</p>

                    <div className="flex flex-col items-end gap-2 mb-4">
                        <p className="text-[clamp(20px,1.6vw,32px)] font-medium leading-[1.2] text-center md:text-left">Building & Deploying Software</p>
                    </div>

                </div>
            </div>

            <div className="flex flex-col gap-4 mb-10">
                <div className="relative my-auto bg-black rounded-xl aspect-video overflow-hidden shadow-2xl">
                    <MarqueeDemoVertical />
                </div>
                <div className="flex justify-between">
                    <p className="text-lg font-medium leading-[1] text-center md:text-left">↓ Check out </p>
                    <p className="text-lg font-medium leading-[1] text-center md:text-left">my project ↓</p>
                </div>
            </div>

        </section>
    )
}

const FullName = () => {
    return (
        <div className="flex flex-col lg:flex-row lg:justify-between items-center gap-2 lg:gap-0">
            <div className="overflow-hidden mr-[4vw]">
                <div className="" style={{ "transform": "none" }}>
                    <Image
                        className="h-[10vw] w-auto object-contain pointer-events-none"
                        src="/JAMES.png"
                        alt="James"
                        width={0} height={0}
                        style={{ color: 'transparent' }}
                        decoding="async"
                        data-nimg="1"
                        sizes="100vw"
                    />

                </div>
            </div>

            <div className="overflow-hidden">
                <div className="" style={{ "transform": "none" }}>
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
        </div>
    )
}

export default Header