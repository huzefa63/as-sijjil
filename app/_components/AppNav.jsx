"use client";
import { Sora } from "next/font/google";
import { useEffect, useState } from "react";
import { CiUser, CiMenuBurger } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import Nav from "./Nav";

const sora = Sora({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

function AppNav() {
  const [showNav, setShowNav] = useState(false);
  
  return (
    <div className="relative min-h-16 px-5 bg-(--layer) backdrop-blur-md border-b border-(--highlightBorder) flex items-center justify-between">
      {/* Left Icon */}
      <button
        onClick={() => setShowNav((prev) => !prev)}
        className="text-2xl active:scale-90 transition-transform"
      >
        {showNav ? <RxCross2 /> : <CiMenuBurger />}
      </button>

      {/* Logo */}
      <h1
        className={`${sora.className} font-extrabold text-2xl tracking-wider`}
      >
        As-sijjil
      </h1>

      {/* Right Icon */}
      <button className="text-2xl active:scale-90 transition-transform">
        <CiUser />
      </button>

      {/* Nav with animation */}
      <div
        className={`absolute top-full left-0 w-full transition-all duration-300 ${
          showNav
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-5 pointer-events-none"
        }`}
      >
        <Nav close={() => setShowNav(false)}/>
      </div>
    </div>
  );
}

export default AppNav;
