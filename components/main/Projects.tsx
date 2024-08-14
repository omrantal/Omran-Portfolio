import React from "react"
import ProjectCard from "../sub/ProjectCard"

const Projects = () => {
  return (
    <section
      className="flex flex-col items-center justify-center pt-10"
      id="projects"
    >
      <h1 className="text-[30px] md:text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/iOmran Information Technology.png"
          title="iOmran Information Technology"
          description="Frontend Project for an Information Technology Company, Built with Next.js, Tailwind css and Typescript, along with Framer Motion and Aceternity UI for an Amzing Animated UI Components"
          link="https://i-omran-information-technology.vercel.app/"
        />
        <ProjectCard
          src="/Flowerish.png"
          title="Flowerish"
          description="Full Stack Project for a Plant Store, Built with MERN Stack Technologies, along with Tailwind css for styling, an Authentication System, and a Connection to Braintree Online Payment Website"
          link="https://plant-store-client.vercel.app/"
        />
        <ProjectCard
          src="/OmranGram.png"
          title="OmranGram"
          description="Full Stack Project for a Social Media App, Built with MERN Stack Technologies, along with Bootstrap for styling, an Authentication System, and GraphQL to Connect the Front with the Back"
          link="https://social-media-app-plum-pi.vercel.app/"
        />
      </div>
    </section>
  )
}

export default Projects
