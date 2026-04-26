'use client';

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const juzList = [1,2,3,4,5,6,7,8,9];
function SelectJuzButton() {
    const [isOpen,setIsOpen] = useState(false);
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const router = useRouter();

    function handleClick(e){
        if(!e.target.classList.contains('juz')) return;
        const juz = e.target.closest('button').dataset.juz;
        if(!juz) return;
        const urlSearchParams = new URLSearchParams(searchParams);
        urlSearchParams.set('juz',juz);
        urlSearchParams.set('page',1);
        router.replace(`${pathname}?${urlSearchParams}`);
        setIsOpen(false);
    }

    useEffect(() => {
      const url = new URLSearchParams(searchParams);
      url.set('juz','1');
      router.replace(`${pathname}?${url}`);
    },[])
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
          className={`${isOpen ? "translate-y-12 opacity-100 pointer-events-auto" : " opacity-0 pointer-events-none"} transition-all duration-300 ease-in-out flex justify-center flex-wrap w-fullpb-10 gap-3 absolute bg-(--layer) shadow border border-(--border) p-3 top-0`}
          onClick={handleClick}
        >
          {Array.from({length:30}).map((el,i) => (
            <JuzCard key={i+1} juz={i + 1} selectedJuz={searchParams.get('juz')}/>
          ))}
        </div>
      </div>
    );
}

export default SelectJuzButton

function JuzCard({ juz, selectedJuz }) {
  const isSelected = juz == selectedJuz;
// console.log('from juz',seletedJuz)
  return (
    <button
      data-juz={juz}
      className={`juz relative border w-[20%] rounded-md text-amber-900 
      text-shadow-2xs text-shadow-amber-400 font-bold h-fit py-5 text-center 
      shadow transition-all duration-200
      ${
        isSelected
          ? "bg-amber-700 text-white border-amber-900 scale-105"
          : "bg-(--highlight) border-(--highlightBorder)"
      }`}
    >
      <div
        className={`juz h-1 rounded-tl-md rounded-tr-md w-full absolute top-0 
        ${isSelected ? "bg-amber-900" : "bg-amber-800"}`}
      ></div>

      <p className="juz">{juz}</p>
    </button>
  );
}
