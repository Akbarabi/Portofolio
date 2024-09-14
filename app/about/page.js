"use client";

import React from "react";
import { motion, useAnimation, useInView } from "framer-motion";

import Techstack from "@/components/TechStack";
import AboutCard from "./components/AboutCard";

const About = () => {
  return (
    <div className="mx-28 hide-scrollbar">
      <motion.div
        initial={{
          opacity: 0,
          y: 50,
        }}
        animate={{
          opacity: 1,
          y: 0,
          transition: {
            delay: 0.2,
            duration: 0.5,
          },
        }}
        viewport={{
          once: false,
          amount: 1,
        }}
      >
        <div className="h-screen flex items-center">
          <AboutCard />
        </div>
      </motion.div>

      <div className="h-screen flex flex-col justify-center">
        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              delay: 0.1,
              duration: 0.5,
            },
          }}
          viewport={{
            once: true,
            amount: 0.5,
          }}
        >
          <h1 className="text-[#EBD3F8] text-4xl font-semibold text-center">
            Languages and Tools
          </h1>
          <Techstack />
        </motion.div>
      </div>
    </div>
  );
};

export default About;
