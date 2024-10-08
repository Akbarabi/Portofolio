"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";
import emailjs from "@emailjs/browser";
require('dotenv').config();
import toast, { Toaster } from 'react-hot-toast';

const Page = () => {
  const [isSubmiting, setisSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setisSubmitting(true);

    try {
      if (!formData.name || !formData.email || !formData.description) {
        toast.error("Please fill in all fields");
        return;
      }

      console.log(process.env.SERVICE_KEY, process.env.TEMPLATE_ID, process.env.PUBLIC_KEY);

      await emailjs.send(
        process.env.SERVICE_KEY,
        process.env.TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.description,
          to_email: "muhammadakbar.abisantoso07@gmail", // Ganti dengan email Anda
        },
        process.env.PUBLIC_KEY,
      );

      toast.success('Successfully sent email!')
      setFormData({ name: "", email: "", description: "" });
    } catch (error) {
      toast.error("Error sending email");
      console.error("Error sending email:", error);
    } finally {
      setisSubmitting(false);
    }
  };

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
      className="flex items-center justify-center h-screen"
    >
      <div className="flex mx-28 items-center justify-start mt-20">
        <div className="w-[70vh] max-w-md p-8 space-y-6 bg-white border border-gray-200 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold text-center text-black">
            Email me
          </h1>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                name="name"
                type="text"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-black"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                name="email"
                type="text"
                placeholder="email@example.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-black"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <textarea
                name="description"
                type="text"
                placeholder="Enter your description"
                value={formData.description}
                onChange={handleChange}
                required
                className="flex w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 h-[20vh] text-black"
              />
            </div>

            <div>
              <button
                type="submit"
                disabled={isSubmiting}
                className="w-full px-4 py-2 font-semibold text-white bg-black rounded-md hover:bg-gray-800"
              >
                {isSubmiting ? "Submitting..." : "Submit"}
              </button>
              <Toaster />
            </div>
          </form>
          <div>
            <h3 className="text-xl text-black font-semibold mb-2">
              Temukan Saya Online
            </h3>
            <div className="flex space-x-4 items-center">
              <a
                href="https://www.linkedin.com/in/akbar-abi-4724a92a9/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-blue-600 transition-colors"
              >
                <FaLinkedin size={24} aria-label="LinkedIn Profile" />
              </a>
              <a
                href="https://github.com/akbarabi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-blue-600 transition-colors"
              >
                <FaGithub size={24} aria-label="GitHub Profile" />
              </a>
              <a
                href="https://x.com/A_Abi07"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-blue-600 transition-colors"
              >
                <BsTwitterX size={24} aria-label="Twitter Profile" />
              </a>
              <a
                href="https://www.youtube.com/@A.Game007"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-blue-600 transition-colors"
              >
                <IoLogoYoutube size={24} aria-label="Youtube Profile" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Page;
