"use client";

import React from "react";

import "./globals.css";
import GithubProfile from "@/components/image";
import Typing from "@/components/TypeWriter";
import { motion, useAnimation, useInView } from "framer-motion";

const Page = () => {
  return (
    <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
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
          <div className="flex h-[92vh] mx-28">
        <div className="flex items-center">
          <div className="flex-col justify-start text-white mt-10">
            <h1 className="text-4xl font-bold">
              Hi, There! <span className="waving-hand">👋</span>
            </h1>
            <h1 className="text-4xl font-bold pt-5">
              I`m Muhammad Akbar Abi Santoso
            </h1>
            <div className="text-4xl font-bold pt-10 text-[#EBD3F8] ">
              <Typing />
            </div>
          </div>

          <div className="absolute right-28">
            <GithubProfile />
          </div>
        </div>
      </div>
        </motion.div>
  );
};

export default Page;
