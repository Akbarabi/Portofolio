import Link from "next/link";
import React from "react";

const Navbar = () => {
  
  /** 
   * Ketika terdeteksi scroll pada window,
   * pendefinisan navbar berguna untuk menambahkan kelas css ke
   * maka navbar akan ditambahkan kelas css "scrolled"
   * jika tidak, kelas css "scrolled" akan di hapus
  */
  window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    if(window.scrollY > 0) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  })

  return (
    <nav className="flex fixed justify-between items-center w-full py-4 px-4 text-white navbar z-10">
      <Link href="/">
        <h1 className="text-3xl font-bold">A.Abi</h1>
      </Link>
      <ul className="flex gap-4">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/github">Github</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
