"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { HiArrowDown } from "react-icons/hi"

const HomeSection = () => {
    return (
        <section id="home">
            <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:justify-start md:py-48 md:flex-row md:space-x-4 md:text-left">
                <div className="md:mt-2 md:w-1/3 flex justify-center md:justify-end px-10">
                    <Image 
                    src="/img-placeholder.png" 
                    alt="profile-picture" 
                    width={300} 
                    height={300}
                    className="rounded-full shadow-2xl"
                    ></Image>
                </div>
                <div className="md:w-3/5 md:mt-2">
                    <h1 className='font-bold text-4xl mt-8 md:text-5xl md:mt-0'>Hi, I&#39;m Geenie!</h1>
                    <p className="text-lg mt-4 mb-6 md:text-xl">I&#39;m a{" "}
                        <span className="font-semibold text-teal-600">
                            Software Engineer{" "}
                        </span>
                        working towards creating software that makes health care more accessible.
                    </p>
                    <Link
                        href="projects"
                        className="text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700"
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}>
                        Projects
                    </Link>
                </div>
            </div>
            <div className="flex flex-row justify-center">
                <Link
                    href="about"
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                >
                    <HiArrowDown size={35} className="animate-bounce"/>
                </Link>
            </div>
        </section>
    )
}

export default HomeSection