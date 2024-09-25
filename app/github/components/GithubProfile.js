"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Spinner } from "react-bootstrap";

const API_URL = "https://api.github.com/users/Akbarabi";

const GithubProfile = () => {
  const [user, setUser] = useState(null);
  const [loadingUser, setLoadingUser] = useState(true);

  // Fetch user profile data
  const fetchUser = async () => {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error("Failed to fetch user data");
      }
      const data = await response.json();
      setUser(data);
      setLoadingUser(false);
    } catch (error) {
      console.error("Error fetching user:", error);
      setLoadingUser(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []); // The dependency array ensures this runs only once

  // Show a loading spinner while data is being fetched
  if (loadingUser) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      </div>
    );
  }

  // If no user data is available, show an error message
  if (!user) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-xl">
          Failed to load user data. Please try again later.
        </p>
      </div>
    );
  }

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
        once: true,
        amount: 1,
      }}
    >
      <div className="p-6 text-white flex justify-center items-center h-screen">
        <div className="flex flex-col items-center justify-center sm:flex-row sm:items-start">
          <div className="mb-6 sm:mb-0 sm:mr-6">
            <Image
              src={user.avatar_url}
              alt="Avatar"
              width={300}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="text-center sm:text-left">
            <h1 className="text-4xl font-bold mb-2">{user.name}</h1>
            <p className="text-lg mb-4">{user.bio || "No bio available"}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default GithubProfile;
