'use client';
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BsGithub, BsArrowUpRightSquare } from 'react-icons/bs'
import SlideUp from './SlideUp';

const projects = [
  {
    name: "BioPredX at Nanovery",
    description: "Nanovery is a startup partly funded by Newcastle University to develop nano-robotics sensors. I joined the team working on the BioPredX ML pipeline which aims to predict biomarkers associated with prostate, kidney and liver cancer. My work focused on implementing improved features to boost the accuracy of the biomarker predictions from the pipeline.",
    image: "/nanovery.jpg",
    imagelink: "https://nanovery.co.uk/",
    stack: "Python, Docker",
    github: "",
    link: "https://nanovery.co.uk/"
  },
  {
    name: "CodeAid",
    description: "CodeAid is a pro-bono initiative led by graduates at Publicis Sapient to work with NGOs on their digital business transformation journey. Choice in Hackney is a charity created by disabled people to promote a better life for disabled people. Me and my team re-built the entire website ensuring accessibility was priority as well as maintainability for the client.",
    image: "/choice_in_hackney.jpg",
    imagelink: "https://www.linkedin.com/company/codeaid-london/?originalSubdomain=uk",
    stack: "HTML, CSS, PHP",
    github: "",
    link: "https://choiceinhackney.org/"
  },
  {
    name: "NeuroTone Biotherpeutic",
    description: "Building a dry-lab project based on a synthetically engineered bacterium to deliver D-beta-hydroxybutyrate to the brain as it's known to have neuroprotecting effects. Our project has been noticed and extended by the University of North Caroline - 'Forget-Me-Not' to further understand how we can prevent the progression of Alzheimer's disease.",
    image: "/igem.png",
    imagelink: "https://igem.org/",
    stack: "HTML(website), CSS(website), JavaScript(website) python(model)",
    github: "",
    link: "https://2020.igem.org/Team:Nottingham/Model"
  }
]

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="text-center font-bold text-4xl pt-5 pb-8">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>
      <div className="flex flex-col space-y-28 md:m-20">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col text-center items-center justify-center animate-slideUpCubiBezier animation-delay-2 sm:text-center sm:justify-start md:text-left md:flex-row md:space-x-12 ">
                  <div className="mt-8 w-1/2 sm:pb-8 sm:w-full md:w-1/2">
                    <Link href={project.imagelink} target='_blank'>
                      <Image src={project.image} alt=""
                        width={475}
                        height={175}
                        className="rounded-xl shadow-xl hover:opacity-70"></Image>
                    </Link>
                  </div>
                  <div className="w-1/2 m:w-full md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-lg mt-4 mb-6 md:text-xl text-neutral-600 dark:text-neutral-400">{project.description}</p>
                    <p className="text-lg mt-4 mb-6 md:text-xl text-neutral-600 dark:text-neutral-400">Tech stack: {project.stack}</p>
                    <div className="flex flex-row space-x-4 sm:justify-center md:justify-start">
                      {/*<Link href={project.github} target='_blank'>
                        <BsGithub
                          size={30}
                          className="hover:translate-y-1 transition-transform cursor-pointer"></BsGithub>
          </Link> */}
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
