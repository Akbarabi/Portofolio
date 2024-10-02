import Link from "next/link";
import React, { useEffect, useState } from "react";
import '@/app/globals.css'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activePage, setActivePage] = useState('/');

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

  const handleLinkClick = (href) => {
    setIsOpen(false);
    setActivePage(href);
  };

  return (
    <nav className="flex fixed justify-between items-center w-full py-4 px-4 text-white navbar z-10">
      <Link href="/">
        <h1 className="text-3xl font-bold">A.Abi</h1>
      </Link>
      <div className="sm:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      <ul className={`sm:flex gap-4 ${isOpen ? 'block' : 'hidden'} absolute sm:static bg-black sm:bg-transparent top-full left-0 w-full sm:w-auto p-4 sm:p-0`}>
        <li className={`navbar-text py-2 sm:py-0 ${activePage === '/' ? 'active' : ''}`}>
          <Link href="/" onClick={() => handleLinkClick('/')}>Home</Link>
        </li>
        <li className={`navbar-text py-2 sm:py-0 ${activePage === '/about' ? 'active' : ''}`}>
          <Link href="/about" onClick={() => handleLinkClick('/about')}>About</Link>
        </li>
        <li className={`navbar-text py-2 sm:py-0 ${activePage === '/github' ? 'active' : ''}`}>
          <Link href="/github" onClick={() => handleLinkClick('/github')}>Github</Link>
        </li>
        <li className={`navbar-text py-2 sm:py-0 ${activePage === '/contact' ? 'active' : ''}`}>
          <Link href="/contact" onClick={() => handleLinkClick('/contact')}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;