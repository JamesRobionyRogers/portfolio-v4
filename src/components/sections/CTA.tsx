'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'

const CTA = () => {

    const location = "Wellington, New Zealand";
    const [time, setTime] = useState("");
    const [currentMonth, setCurrentMonth] = useState("")

    useEffect(() => {
        const updateTime = () => {
            const options: Intl.DateTimeFormatOptions = {
                timeZone: 'Pacific/Auckland',
                hour: '2-digit',
                minute: '2-digit',
                // second: '2-digit',
                hour12: false, // Set to true if you prefer AM/PM
            };
            const formatter = new Intl.DateTimeFormat([], options);
            setTime(formatter.format(new Date()));
        };

        const updateMonth = () => {
            const options: Intl.DateTimeFormatOptions = {
                timeZone: 'Pacific/Auckland',
                month: 'long',
            };
            const formatter = new Intl.DateTimeFormat([], options);
            setCurrentMonth(formatter.format(new Date()));
        };

        updateTime(); // Initial time
        updateMonth(); // Initial month
        const intervalId = setInterval(updateTime, 1000); // Update every second

        return () => clearInterval(intervalId); // Cleanup on unmount
    }, []);

    return (
        <section className="relative flex flex-col justify-between w-screen h-[90vh] p-4 lg:p-8 overflow-hidden">
            <div className="bg-neutral-900 w-full h-full flex flex-col gap-10 rounded-xl">
                <div className="flex justify-between items-center p-8">
                    <h2 className="hidden">Location: {location}</h2>
                    <p className="text-white text-2xl font-semibold">{location}</p>
                    <p className="text-white text-2xl font-semibold">{time}</p>
                </div>

                <div className="flex flex-col gap-5 items-center pt-28">
                    <h2 className="mx-auto text-white text-7xl font-semibold leading-1">Lets develop</h2>
                    <h2 className="mx-auto text-neutral-400 text-7xl font-semibold">something awesome together</h2>
                </div>
                
                <div className="flex flex-col p-4 lg:p-8 lg:px-20">

                    <div className="h-30 px-2 flex gap-10 justify-around items-end overflow-hidden">
                        <div className="flex flex-col gap-2 mb-4">
                            <h3 className="font-semibold text-lg text-neutral-500 leading-[1]" >Contact:</h3>
                            <a 
                                className="text-lg text-neutral-50 hover:underline transition-all duration-800 ease-in-out" 
                                href="mailto:james.robionyrogers@yahoo.co.nz"
                            >
                                james.robionyrogers@yahoo.co.nz
                            </a>
                        </div>

                        <div className="flex flex-col gap-2 mb-4 min-w-xsm">
                            <h3 className="font-semibold text-lg text-neutral-500 leading-[1]" >Availability:</h3>
                            <div className="flex items-center gap-2">
                                <div className="relative size-2">
                                    <span className="absolute size-2 bg-green-400 motion-safe:animate-ping rounded-full"></span>
                                    <span className="absolute size-2 bg-green-400 rounded-full"></span>
                                </div>
                                <p className="text-lg text-neutral-50">
                                    {currentMonth}
                                </p>

                            </div>
                        </div>

                        <div className="relative w-full h-full max-w-100">
                            <Image 
                                className="absolute w-full h-auto rounded-lg top-2/5 hover:top-1/4 transition-all ease-in-out duration-300 cursor-pointer"
                                src="/CV_JamesRobionyRogers.png"
                                alt="Download CV"
                                sizes='100wv'
                                width={64}
                                height={64}
                                onClick={() => {
                                    window.open('/CV_JamesRobionyRogers.pdf', '_blank');
                                }}
                            />

                        </div>

                    </div>

                    <hr className=""/> 
                </div>

                {/* <div className="relative mt-auto h-30 blur-md">
                    <Image
                        className="absolute w-full h-auto inset-x-0 top-0 mx-auto scale-105"
                        src="/JAMES.png"
                        alt="JAMES"
                        width={300}
                        height={100}
                    />

                </div> */}

            </div>
        </section>
    )
}

const GetInTouchForm = () => {
    return (

        <div className="relative flex flex-col gap-3 h-full">
            <div className="flex flex-col lg:flex-row gap-3 w-full">
                {/* <div className="flex flex-col justify-end w-full lg:w-1/3 px-6 py-4 h-28 lg:h-32 2xl:h-44 rounded-xl lg:rounded-2xl bg-neutral-800 border-3 transition-colors duration-300 focus-within:border-blue-400 border-[#C43670]/0">
                    <label htmlFor="name" className="text-blue-400 font-semibold text-[clamp(20px,1.5vw,32px)]">Full name</label>
                    <input placeholder="Fiona Wong" className="text-blue-400 font-semibold placeholder:text-blue-400/40 text-[clamp(20px,1.5vw,32px)] focus:outline-none" type="text" value="" name="name" />
                </div> */}
            </div>

            

            {/* <button className="bg-[#C43670] flex items-center gap-2 xl:gap-3 fixed bottom-8 left-1/2 -translate-x-1/2 pl-1 py-1 pr-4 xl:pr-6 rounded-full shadow-2xl cursor-pointer group z-999 transition-colors duration-700 delay-100 ease-in-out" style="transform: none;">
                <div className="h-12 xl:h-16 w-12 xl:w-16 relative rounded-full">
                    <div className="opacity-0 w-full h-full rounded-full overflow-hidden relative group-hover:opacity-0 group-hover:scale-70 transition-all duration-200 ease-[cubic-bezier(0.64,0.57,0.67,1.53)]">
                        <img alt="logo" loading="lazy" decoding="async" data-nimg="fill" className="w-full h-auto object-cover object-center" style={{"position": "absolute", "height": "100%", "width": "100%", "inset": "0px", "color": "transparent"}} sizes="100vw" />
                    </div>
                        <span className="opacity-0 flex items-center justify-center h-12 xl:h-16 w-12 xl:w-16 bg-stone-100 rounded-full scale-0 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:scale-100 transition-all duration-200 ease-[cubic-bezier(0.64,0.57,0.67,1.53)]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" className="tabler-icon tabler-icon-mail text-[#C43670]"><path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path><path d="M3 7l9 6l9 -6"></path></svg>
                        </span>
                        <span className="scale-100 opacity-100 h-12 xl:h-16 w-12 xl:w-16 bg-stone-100 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden flex items-center justify-end transition-all duration-200 delay-200 ease-[cubic-bezier(0.64,0.57,0.67,1.53)]">
                            <div className="flex transition-transform duration-200 ease-[cubic-bezier(0.64,0.57,0.67,1.53)] group-hover:translate-x-1/2"><div className="flex items-center justify-center w-12 xl:w-16"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" className="tabler-icon tabler-icon-send-2 text-[#C43670] text-2xl xl:text-5xl"><path d="M4.698 4.034l16.302 7.966l-16.302 7.966a.503 .503 0 0 1 -.546 -.124a.555 .555 0 0 1 -.12 -.568l2.468 -7.274l-2.468 -7.274a.555 .555 0 0 1 .12 -.568a.503 .503 0 0 1 .546 -.124z"></path><path d="M6.5 12h14.5"></path></svg></div><div className="flex items-center justify-center w-12 xl:w-16"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" className="tabler-icon tabler-icon-send-2 text-[#C43670] text-2xl xl:text-5xl"><path d="M4.698 4.034l16.302 7.966l-16.302 7.966a.503 .503 0 0 1 -.546 -.124a.555 .555 0 0 1 -.12 -.568l2.468 -7.274l-2.468 -7.274a.555 .555 0 0 1 .12 -.568a.503 .503 0 0 1 .546 -.124z"></path><path d="M6.5 12h14.5"></path></svg></div></div></span></div><div className="text-[#F0CCDF] overflow-hidden h-7 lg:h-9">
                                <div className="flex flex-col transition-transform duration-200 ease-[cubic-bezier(0.64,0.57,0.67,1.53)] group-hover:-translate-y-1/2">
                            <span className="text-xl lg:text-3xl font-semibold">Submit</span><span className="text-xl lg:text-3xl font-semibold">Submit</span></div></div></button> */}

        </div>
    )
}

export default CTA