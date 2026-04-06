'use client'
import { Sora } from "next/font/google";
import { CiUser, CiMenuBurger } from "react-icons/ci";

const sora = Sora({
    subsets:['latin'],
    weight:['600','700','800'],
})
function AppNav() {
    return (
      <div className="min-h-15 px-5 bg-[#FCF8F8] shadow-sm flex items-center justify-between">
        <CiMenuBurger className="text-2xl"/>
        <h1 className={`${sora.className} font-extrabold text-2xl tracking-wider`}>As-sijjil</h1>
        <CiUser className="text-2xl"/>
      </div>
    );
}

export default AppNav
