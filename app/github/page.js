"use client";

import React from "react";
import { motion } from "framer-motion";
import GithubProfile from "./components/GithubProfile";
import Repos from "./components/Repos";

const Github = () => {
  return (
    <div className="mx-28">
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
        <GithubProfile />
      </motion.div>

      <motion.div
        initial={{
          opacity: 0,
          y: 50,
        }}
        animate={{
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
        <Repos />
      </motion.div>
    </div>
  );
};

export default Github;
