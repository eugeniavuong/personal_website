'use client';
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BsGithub, BsArrowUpRightSquare } from 'react-icons/bs'
import SlideUp from './SlideUp';

const projects = [
  {
    name: "Project 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    image: "img-placeholder",
    stack: "Java, Springboot, Mockito",
    github: "https://github.com/eugeniavuong/csv_chatbot",
    link: ""
  },
  {
    name: "Project 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    image: "img-placeholder",
    stack: "Java, Springboot, Mockito",
    github: "https://github.com/eugeniavuong/csv_chatbot",
    link: ""
  },
  {
    name: "Project 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    image: "img-placeholder",
    stack: "Java, Springboot, Mockito",
    github: "https://github.com/eugeniavuong/csv_chatbot",
    link: ""
  },
  {
    name: "Project 4",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    image: "img-placeholder",
    stack: "Java, Springboot, Mockito",
    github: "https://github.com/eugeniavuong/csv_chatbot",
    link: ""
  }
]

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="text-center font-bold text-4xl pt-5 pb-8">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>
      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col animate-slideUpCubiBeizer animation-delay-2 md:flex-row md:space-x-12">

                  <div className="mt-8 w-1/2">
                    <Link href={project.link}>
                      <Image src="/img-placeholder.png" alt=""
                        width={250}
                        height={175}
                        className="rounded-xl shadow-xl hover:opacity-70"></Image>
                    </Link>
                  </div>
                  <div className="w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-lg mt-4 mb-6 md:text-xl text-neutral-600 dark:text-neutral-400">{project.description}</p>
                    <p className="text-lg mt-4 mb-6 md:text-xl text-neutral-600 dark:text-neutral-400">Tech stack: {project.stack}</p>
                    <div className="flex flex-row space-x-4">
                      <Link href={project.github} target='_blank'>
                        <BsGithub
                          size={30}
                          className="hover:translate-y-1 transition-transform cursor-pointer"></BsGithub>
                      </Link>
                      <Link href={project.link} target='_blank'>
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:translate-y-1 transition-transform cursor-pointer">
                        </BsArrowUpRightSquare>
                      </Link>
                    </div>
                  </div>
                </div>
                </SlideUp>
            </div>
        )})}
    </div>
    </section >
  )
}

export default ProjectsSection
