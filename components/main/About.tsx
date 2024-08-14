"use client";

import React from 'react'
import { motion } from "framer-motion"
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion"
import Image from 'next/image'

const About = () => {
  return (
    <section
      id="about-me"
      className="relative flex flex-col items-center justify-center gap-3 h-full overflow-hidden pt-16"
    >
      <h1 className='text-[30px] md:text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10'>
        More About Me
      </h1>

      <motion.div
        initial="hidden"
        animate="visible"
        className='flex flex-col md:flex-row gap-5 items-center justify-center px-20 w-full z-[20]'
      >
        <div className="h-full w-full flex flex-col gap-5 justify-center m-auto mb-[20px] md:mb-auto text-start">
          <motion.p
            variants={slideInFromLeft(0.5)}
            className="flex flex-col gap-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white max-w-[600px] w-auto h-auto"
          >
            <span>
              My Name is
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                {" "}Omran Taljeh
              </span>
            </span>
          </motion.p>

          <motion.p
            variants={slideInFromLeft(0.8)}
            className="text-lg sm:text-xl md:text-2xl text-gray-400 my-2 max-w-[600px]"
          >
            I am a recent graduate of the College of IT Engineering, and I am currently looking for a job in Web Development ...<br />
            I have been training for more than 3 years in web development and have mastered the basics: HTML, CSS, JavaScript ...<br />
            Then I moved to the work with MERN Stack starting with React.js and later to Next.js ...
          </motion.p>
        </div>

        <motion.div
          variants={slideInFromRight(0.8)}
          className="w-full h-full flex justify-center items-center"
        >
          <Image
            src="/DSC_0516_updated.jpg"
            alt="work icons"
            className='rounded-full'
            height={480}
            width={480}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default About
