import Link from "next/link";
import React, { useEffect } from "react";
import '@/app/globals.css'

const Navbar = () => {
  useEffect(() => {
    const navbar = document.querySelector(".navbar");
    const handleScroll = () => {
      if (window.scrollY > 0) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="flex fixed justify-between items-center w-full py-4 px-4 text-white navbar z-10">
      <Link href="/">
        <h1 className="text-3xl font-bold">A.Abi</h1>
      </Link>
      <ul className="flex gap-4">
        <li className="navbar-text">
          <Link href="/">Home</Link>
        </li>
        <li className="navbar-text">
          <Link href="/about">About</Link>
        </li>
        <li className="navbar-text">
          <Link href="/github">Github</Link>
        </li>
        <li className="navbar-text">
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;