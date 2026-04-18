'use client';

import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const juzList = [1,2,3,4,5,6,7,8,9];
function SelectJuzButton() {
    const [isOpen,setIsOpen] = useState(false);
    function handleClick(e){
        if(!e.target.classList.contains('juz')) return;
        const juz = e.target.closest('button').dataset.juz;
        if(!juz) return;
        alert(juz);
    }
    return (
      <div className=" flex justify-center w-full mb-3 relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className=" relative bg-amber-800 text-white text-lg px-5 py-1 rounded-md w-3/4 tracking-widest font-semibold"
        >
          select juz
          <IoIosArrowDown
            className={`absolute top-3 right-4 text-sm transition-all duration-300 ease-in-out ${isOpen && "rotate-180"}`}
          />
        </button>

        <div
          className={`${isOpen ? "translate-y-12 opacity-100 pointer-events-auto" : " opacity-0 pointer-events-none"} transition-all duration-300 ease-in-out flex justify-center flex-wrap w-3/4 pb-10 gap-3 absolute bg-(--layer) shadow border border-(--border) p-3 top-0`}
          onClick={handleClick}
        >
          {juzList.map((el) => (
            <JuzCard key={el} juz={el} />
          ))}
        </div>
      </div>
    );
}

export default SelectJuzButton

function JuzCard({juz}){
    return (
      <button data-juz={juz} className="juz relative border w-[20%] rounded-md text-amber-900 text-shadow-2xs text-shadow-amber-400 font-bold  h-fit py-5 text-center bg-(--highlight) shadow border-(--highlightBorder)">
        <div className="juz h-1 rounded-tl-md rounded-tr-md w-full absolute bg-amber-800 top-0"></div>
        <p className="juz">{juz}</p>
      </button>
    );
}
