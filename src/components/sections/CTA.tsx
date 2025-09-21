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

export default CTA