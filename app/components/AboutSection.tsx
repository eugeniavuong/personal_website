import React from 'react'

const skills = [
    { skill: "Java" },
    { skill: "Python" },
    { skill: "HTML" },
    { skill: "CSS" },
    { skill: "JavaScript" },
    { skill: "React" },
    { skill: "R" },
    { skill: "Next.js" },
    { skill: "Tailwind CSS" }
]

const accomplishments = [
    { accomplishment: "Azure Fundamentals AZ-900 Certified"}

]

const AboutSection = () => {
    return (
        <section id="about">
            <div className="my-12 pb-12 mt:pt-16 md:pb-48">
                <h1 className="text-center font-bold text-4xl pt-20">About Me</h1>
                <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
                <div className="flex flex-col space-y-10 items-stretch justify-center align-top sm:text-center md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
                <div className="md:w-1/2">
                    <h1 className="font-bold mb-5 text-2xl">Get to know me</h1>
                    <p>I&#39;m a Software Engineer with a background in Biology, looking to be part of {" "}
                        <span className="font-bold">{"ambitious projects "}</span>
                        to improve the
                        <span className="font-bold">{" health care industry."}</span>
                    </p>
                    <br />
                    <p>
                        I am an ambitious software engineer currently working on building Java microservices to sustain business
                        and data resiliency. I&#39;m committed to building for good, contributing to charity projects and confronting
                        global health issues by leveraging my curiosity for technology.
                    </p>
                    <br />
                    <p>
                        I graduated at the University of Nottingham with a Bachelor&#39;s in Biology and pursued my curiosity in
                        biotechnology and working in multi-disciplinary projects which led me to study a Masters in Computer Science.
                    </p>
                    <br />
                    <p>
                        I strive to be open to new oppurtunities and the possibility of finding new interests.
                        I&#39;m currently working towards attaining a Yoga
                        Teacher Training Certification with the hopes to start my own
                        journey into teaching yoga :)
                    </p>
                </div>
                <div className="text-center flex-row md:w-1/2 md:text-left justify-center z-10 md:justify-start">
                    <h1 className="font-bold mb-5 text-2xl">My Skills</h1>
                    <div className="flex flex-wrap">
                        {skills.map((items, idx) => {
                            return (
                                <p 
                                key={idx}
                                className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                                >
                                    {items.skill}
                                </p>
                            )
                        })
                        }
                    </div>
                </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection
