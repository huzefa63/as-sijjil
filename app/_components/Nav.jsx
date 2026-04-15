"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function Nav({ close }) {
  return (
    <div
      className="absolute top-full left-0 w-full h-[94vh] 
    bg-(--layer)/80 backdrop-blur-md z-50 
    flex flex-col items-center justify-center gap-6 px-6"
    >
      <CustomLink title="Dashboard" href="/dashboard" close={close} />
      <CustomLink title="Report" href="/report" close={close} />
      <CustomLink title="Entry" href="/entry" close={close} />
      <CustomLink title="Profile" href="/profile" close={close} />
    </div>
  );
}

export default Nav;

function CustomLink({ title, href, close }) {
  const pathname = usePathname();
  const isActive = pathname.startsWith(href);

  return (
    <Link
      href={href}
      onClick={close}
      className={`
        w-3/4 text-center
        px-6 py-4 rounded-2xl
        text-lg font-semibold tracking-wide
        transition-all duration-300
        
        ${
          isActive
            ? "bg-amber-800 text-white shadow-md scale-100"
            : "text-gray-700 hover:bg-amber-600 hover:text-white active:scale-95"
        }
      `}
    >
      {title}
    </Link>
  );
}
