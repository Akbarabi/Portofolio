import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { FaHome, FaInfoCircle, FaGithub, FaEnvelope } from "react-icons/fa";
import "@/app/globals.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
      if (isOpen) setIsOpen(false);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [router.pathname]);

  const handleLinkClick = (href) => {
    setIsOpen(false);
    router.push(href);
  };

  const menuItems = [
    { label: "Home", icon: <FaHome />, href: "/" },
    { label: "About", icon: <FaInfoCircle />, href: "/about" },
    { label: "Github", icon: <FaGithub />, href: "/github" },
    { label: "Contact", icon: <FaEnvelope />, href: "/contact" },
  ];

  return (
    <nav
      className={`flex fixed justify-between items-center w-full py-4 px-4 text-white navbar z-10 hide-scrollbar ${
        isScrolled ? "scrolled" : ""
      }`}
    >
      <Link href="/">
        <h1 className="text-3xl font-bold">A.Abi</h1>
      </Link>

      {isMobile && (
        <div className="md:hidden flex items-center">
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
            whileTap={{ scale: 0.97 }}
            aria-label="Toggle Menu Burger"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </motion.button>
        </div>
      )}

      <AnimatePresence>
        {(!isMobile || isOpen) && (
          <motion.ul
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col justify-center items-start md:flex gap-4 absolute md:static navbar-sm md:bg-transparent top-full left-0 w-full md:w-auto p-4 md:p-0 lg:flex-row hide-scrollbar" 
          >
            {menuItems.map((item, index) => (
              <motion.li
                key={item.label}
                className="py-2 md:py-0"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <a
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(item.href);
                  }}
                >
                  <div className="flex items-center navbar-text">
                    {item.icon}
                    <span className="ml-2">{item.label}</span>
                  </div>
                </a>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
