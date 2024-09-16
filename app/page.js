"use client";

import React from "react";

import Typing from "@/components/TypeWriter";
import { motion } from "framer-motion";
import Image from "next/image";

const Page = () => {
  return (
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
        <div className="items-center flex h-[92vh] home-sm">
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

          <Image
            src="home-main.svg"
            alt="Avatar"
            width={500}
            height={500}
            className="-right-28 top-14 relative object-contain mx-5 image-sm"
            priority
          />
        </div>
    </motion.div>
  );
};

export default Page;
