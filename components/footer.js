import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="py-4 px-4 flex flex-col gap-4 md:flex-row md:justify-between items-center w-full text-white footer">
      <div>
        <p className="text-center md:text-left text-sm">
          Copyright &copy; 2024. All rights reserved.
        </p>
      </div>
      <div>
        <p className="text-center text-sm">
          Made with ❤️ by Muhammad Akbar Abi Santoso
        </p>
      </div>
      <div>
        <div className="flex justify-center md:justify-end space-x-4">
          <Link href="https://github.com/akbarabi" target="_blank">
            {" "}
            <FaGithub
              size={20}
              className="hover:text-gray-400 cursor-pointer"
            />
          </Link>
          <Link
            href="https://www.linkedin.com/in/akbar-abi-4724a92a9/"
            target="_blank"
          >
            {" "}
            <FaLinkedin
              size={20}
              className="hover:text-gray-400 cursor-pointer"
            />
          </Link>
          <Link href={"https://x.com/A_Abi07"} target="_blank">
            {" "}
            <FaXTwitter
              size={20}
              className="hover:text-gray-400 cursor-pointer"
            />
          </Link>
          <Link
            href={"mailto:muhammadakbar.abisantoso07@gmail.com"}
            target="_blank"
          >
            {" "}
            <FaEnvelope
              size={20}
              className="hover:text-gray-400 cursor-pointer"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
