"use client";

import React from "react";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { FaX } from "react-icons/fa6";

const About = () => {
  return (
    <div>
      <div>
        <h2 className="text-2xl font-semibold mb-4">Tentang Saya</h2>
        <p className="text-muted-foreground">
          Saya adalah seorang pengembang web full-stack dengan pengalaman 5
          tahun dalam membangun aplikasi web yang skalabel dan responsif. Saya
          selalu terbuka untuk proyek freelance dan kolaborasi menarik.
        </p>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-2">Kontak Langsung</h3>
        <div className="flex items-center space-x-3 text-primary">
          <FaEnvelope size={20} />
          <a href="mailto:muhammadakbar.abisantoso07@gmail.com" className="hover:underline">
            muhammadakbar.abisantoso07@gmail.com
          </a>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-2">Temukan Saya Online</h3>
        <div className="flex space-x-4">
          <a
            href="https://www.linkedin.com/in/akbar-abi-4724a92a9/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary-foreground transition-colors"
          >
            <FaLinkedin size={24} aria-label="LinkedIn Profile" />
          </a>
          <a
            href="https://github.com/akbarabi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary-foreground transition-colors"
          >
            <FaGithub size={24} aria-label="GitHub Profile" />
          </a>
          <a
            href="https://x.com/A_Abi07"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary-foreground transition-colors"
          >
            <FaX size={24} aria-label="Twitter Profile" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
