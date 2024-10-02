"use client";

import React from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import Image from "next/image";

// Dynamically import Typing component
const Typing = dynamic(() => import("@/components/TypeWriter"), {
  ssr: false,
});

const Page = () => {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
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
        <div className="items-center flex h-[100vh] home-sm mx-28">
          <div className="flex-col justify-start text-white mt-10">
            <h1 className="text-4xl font-bold">
              Hi, There! <span className="waving-hand">👋</span>
            </h1>
            <h1 className="text-4xl font-bold pt-5">
              I`m Muhammad Akbar Abi Santoso
            </h1>
            <Typing />
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
    </>
  );
};

export default Page;