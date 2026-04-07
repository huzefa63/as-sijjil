import { Cairo, Inter, Reem_Kufi } from "next/font/google";
import { CiCalendarDate } from "react-icons/ci";
import { FaPenAlt } from "react-icons/fa";
import { GiOpenBook } from "react-icons/gi";
import { IoIosArrowRoundForward } from "react-icons/io";

const inter = Inter({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: "600",
});
const reemKufi = Reem_Kufi({
  variable: "--font-geist-mono",
  subsets: ["arabic"],
  weight: "600",
});
function Page() {
    
  return (
    <div className="text-background py-5 px-3">
      <div className=" bg-[#fbfbfb] border border-gray-200 h-40 p-3 w-full rounded-sm shadow flex flex-col items-center justify-center">
        {/* <p className={`${inter.className} tracking-wider`}>March 24, 2026</p> */}
        <div className="space-y-3 text-center">
          <h1 className="text-center opacity-90 font-semibold flex items-center justify-center gap-x-2">
            Currently At <GiOpenBook />
          </h1>
          <h1 className="text-2xl font-bold tracking-wide ">
            surah At-Talaq 14
          </h1>
          <h1 className="text-xs tracking-wide flex items-center justify-center gap-1">
            <CiCalendarDate /> Jadeed This Week:{" "}
            <span className="font-bold">8 lines</span>
          </h1>
          <h1 className="text-xs tracking-wide flex items-center justify-center gap-1">
            <CiCalendarDate /> Jadeed This Month:{" "}
            <span className="font-bold">4 pages</span>
          </h1>
        </div>
      </div>
      {/*  murajaat */}
      <div className="mt-5 font-semibold shadow-sm border border-gray-200 rounded-md bg-[#FBFBFB] p-3 w-full  ">
        <header className="border-b pb-5 border-gray-300 text-2xl font-bold text-black text-center my-5 flex items-center gap-3 justify-center">
          <FaPenAlt /> Muraja&apos;ah This Week
        </header>
        {/* <p className={`${inter.className} tracking-wider`}>March 24, 2026</p> */}
        <div className="space-y-3 text-center">
          {/* <h1 className="text-center text-gray-800 opacity-90">This week</h1> */}
          <div className=" shadow-sm rounded-md pb-1 space-y-4 mb-8 mt-6">
            <div className="grid grid-cols-5 bg-blue-90 px-2 py-1 rounded-md border border-gray-200 bg-gray-100 shadow-sm">
              <p>Day</p>
              <p>juz</p>
              <p>tambeeh</p>
              <p>talqeen</p>
              <p>marks</p>
            </div>
            <div className="space-y-3 px-2">
              <div className="grid grid-cols-5 border-b border-gray-900 pb-2">
                <p className="mt-1 font-bold">Mon</p>
                <div className="grid grid-cols-4 col-span-4 col-start-2 border-b border-gray-300 pb-2 mt-1">
                  <p className="font-bold text-amber-950">3</p>
                  <p className="text-gray-600 text-xs ">4</p>
                  <p className="text-gray-600 text-xs ">4</p>
                  <p className="text-blue-500 font-bold">7</p>
                </div>
                <div className="grid grid-cols-4 col-span-4 col-start-2 border-b border-gray-300 pb-2 mt-1">
                  <p className="font-bold text-amber-950">9</p>
                  <p className="text-gray-600 text-xs ">2</p>
                  <p className="text-gray-600 text-xs ">6</p>
                  <p className="text-red-500 font-bold">6</p>
                </div>
                <div className="grid grid-cols-4 col-span-4 col-start-2 pb-2 mt-1">
                  <p className="font-bold text-amber-950">15</p>
                  <p className="text-gray-600 text-xs ">2</p>
                  <p className="text-gray-600 text-xs ">0</p> 
                  <p className="text-green-500 font-bold">9</p>
                </div>
              </div>
              <div className="grid grid-cols-5 border-b border-gray-900 pb-2">
                <p className="mt-1 font-bold">Tue</p>
                <div className="grid grid-cols-4 col-span-4 col-start-2 border-b border-gray-300 pb-2 mt-1">
                  <p className="font-bold text-amber-950">3</p>
                  <p className="text-gray-600 text-xs ">4</p>
                  <p className="text-gray-600 text-xs ">4</p>
                  <p className="text-blue-500 font-bold">7</p>
                </div>
                <div className="grid grid-cols-4 col-span-4 col-start-2 border-b border-gray-300 pb-2 mt-1">
                  <p className="font-bold text-amber-950">9</p>
                  <p className="text-gray-600 text-xs ">2</p>
                  <p className="text-gray-600 text-xs ">6</p>
                  <p className="text-red-500 font-bold">6</p>
                </div>
                <div className="grid grid-cols-4 col-span-4 col-start-2 pb-2 mt-1">
                  <p className="font-bold text-amber-950">15</p>
                  <p className="text-gray-600 text-xs ">2</p>
                  <p className="text-gray-600 text-xs ">0</p> 
                  <p className="text-green-500 font-bold">9</p>
                </div>
              </div>
              <div className="grid grid-cols-5 border-b border-gray-900 pb-2">
                <p className="mt-1 font-bold">Wed</p>
                <div className="grid grid-cols-4 col-span-4 col-start-2 border-b border-gray-300 pb-2 mt-1">
                  <p className="font-bold text-amber-950">3</p>
                  <p className="text-gray-600 text-xs ">4</p>
                  <p className="text-gray-600 text-xs ">4</p>
                  <p className="text-blue-500 font-bold">7</p>
                </div>
                <div className="grid grid-cols-4 col-span-4 col-start-2 border-b border-gray-300 pb-2 mt-1">
                  <p className="font-bold text-amber-950">9</p>
                  <p className="text-gray-600 text-xs ">2</p>
                  <p className="text-gray-600 text-xs ">6</p>
                  <p className="text-red-500 font-bold">6</p>
                </div>
                <div className="grid grid-cols-4 col-span-4 col-start-2 pb-2 mt-1">
                  <p className="font-bold text-amber-950">15</p>
                  <p className="text-gray-600 text-xs ">2</p>
                  <p className="text-gray-600 text-xs ">0</p> 
                  <p className="text-green-500 font-bold">9</p>
                </div>
              </div>
              <div className="grid grid-cols-5 border-b border-gray-900 pb-2">
                <p className="mt-1 font-bold">Thur</p>
                <div className="grid grid-cols-4 col-span-4 col-start-2 border-b border-gray-300 pb-2 mt-1">
                  <p className="font-bold text-amber-950">3</p>
                  <p className="text-gray-600 text-xs ">4</p>
                  <p className="text-gray-600 text-xs ">4</p>
                  <p className="text-blue-500 font-bold">7</p>
                </div>
                <div className="grid grid-cols-4 col-span-4 col-start-2 border-b border-gray-300 pb-2 mt-1">
                  <p className="font-bold text-amber-950">9</p>
                  <p className="text-gray-600 text-xs ">2</p>
                  <p className="text-gray-600 text-xs ">6</p>
                  <p className="text-red-500 font-bold">6</p>
                </div>
                <div className="grid grid-cols-4 col-span-4 col-start-2 pb-2 mt-1">
                  <p className="font-bold text-amber-950">15</p>
                  <p className="text-gray-600 text-xs ">2</p>
                  <p className="text-gray-600 text-xs ">0</p> 
                  <p className="text-green-500 font-bold">9</p>
                </div>
              </div>
              <div className="grid grid-cols-5 border-b border-gray-900 pb-2">
                <p className="mt-1 font-bold">Fri</p>
                <div className="grid grid-cols-4 col-span-4 col-start-2 border-b border-gray-300 pb-2 mt-1">
                  <p className="font-bold text-amber-950">3</p>
                  <p className="text-gray-600 text-xs ">4</p>
                  <p className="text-gray-600 text-xs ">4</p>
                  <p className="text-blue-500 font-bold">7</p>
                </div>
                <div className="grid grid-cols-4 col-span-4 col-start-2 border-b border-gray-300 pb-2 mt-1">
                  <p className="font-bold text-amber-950">9</p>
                  <p className="text-gray-600 text-xs ">2</p>
                  <p className="text-gray-600 text-xs ">6</p>
                  <p className="text-red-500 font-bold">6</p>
                </div>
                <div className="grid grid-cols-4 col-span-4 col-start-2 pb-2 mt-1">
                  <p className="font-bold text-amber-950">15</p>
                  <p className="text-gray-600 text-xs ">2</p>
                  <p className="text-gray-600 text-xs ">0</p> 
                  <p className="text-green-500 font-bold">9</p>
                </div>
              </div>
              <div className="grid grid-cols-5 border-b border-gray-900 pb-2">
                <p className="mt-1 font-bold">Sat</p>
                <div className="grid grid-cols-4 col-span-4 col-start-2 border-b border-gray-300 pb-2 mt-1">
                  <p className="font-bold text-amber-950">3</p>
                  <p className="text-gray-600 text-xs ">4</p>
                  <p className="text-gray-600 text-xs ">4</p>
                  <p className="text-blue-500 font-bold">7</p>
                </div>
                <div className="grid grid-cols-4 col-span-4 col-start-2 border-b border-gray-300 pb-2 mt-1">
                  <p className="font-bold text-amber-950">9</p>
                  <p className="text-gray-600 text-xs ">2</p>
                  <p className="text-gray-600 text-xs ">6</p>
                  <p className="text-red-500 font-bold">6</p>
                </div>
                <div className="grid grid-cols-4 col-span-4 col-start-2 pb-2 mt-1">
                  <p className="font-bold text-amber-950">15</p>
                  <p className="text-gray-600 text-xs ">2</p>
                  <p className="text-gray-600 text-xs ">0</p> 
                  <p className="text-green-500 font-bold">9</p>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>

      {/* juzhaali */}

      <div className="mt-5 font-semibold shadow-sm border border-gray-200 rounded-md bg-[#FBFBFB] p-3 w-full  ">
        <header className="border-b pb-5 border-gray-300 text-2xl font-bold text-black text-center my-5 flex items-center gap-3 justify-center">
          <FaPenAlt /> Juzhaali This Week
        </header>
        {/* <p className={`${inter.className} tracking-wider`}>March 24, 2026</p> */}
        <div className="space-y-3 text-center">
          {/* <h1 className="text-center text-gray-800 opacity-90">This week</h1> */}
          {/* <div className="bg-blue-500 w-fit mx-auto px-8 py-1 rounded-tl-full rounded-br-full">
            <h1 className="text-white font-bold tracking-wider">Monday</h1>
          </div> */}
          <div className=" shadow-sm rounded-md pb-1 space-y-4 mb-8 mt-6">
            <div className="grid grid-cols-5 px-2 bg-blue-90 py-1 rounded-md border border-gray-200 bg-gray-100 shadow-sm">
              <p className="text-left">day</p>
              <p className="text-left">juz</p>
              <p className="">tambeeh</p>
              <p className="">talqeen</p>
              <p className="">marks</p>
            </div>
            <div className="bg-blue-80">
              <div className="px-2 space-y-3">
                <div className="grid grid-cols-5 border-b border-gray-200 pb-2">
                  <div className="ml-">
                    <p className="text-left overflow-hidden">Mon</p>
                  </div>
                  <p className="text-left">3</p>
                  <p className="text-center">4</p>
                  <p className="text-center">4</p>
                  <p className="text-center">7</p>
                </div>

                <div className="grid grid-cols-5 border-b border-gray-200 pb-2">
                  <div className="ml-">
                    <p className="text-left overflow-hidden">Tue</p>
                  </div>
                  <p className="text-left">3</p>
                  <p className="text-center">4</p>
                  <p className="text-center">4</p>
                  <p className="text-center">7</p>
                </div>

                <div className="grid grid-cols-5 border-b border-gray-200 pb-2">
                  <div className="ml-">
                    <p className="text-left overflow-hidden">Wed</p>
                  </div>
                  <p className="text-left">3</p>
                  <p className="text-center">4</p>
                  <p className="text-center">4</p>
                  <p className="text-center">7</p>
                </div>

                <div className="grid grid-cols-5 border-b border-gray-200 pb-2">
                  <div className="ml-">
                    <p className="text-left overflow-hidden">Thur</p>
                  </div>
                  <p className="text-left">3</p>
                  <p className="text-center">4</p>
                  <p className="text-center">4</p>
                  <p className="text-center">7</p>
                </div>

                <div className="grid grid-cols-5 border-b border-gray-200 pb-2">
                  <div className="ml-">
                    <p className="text-left overflow-hidden">Fri</p>
                  </div>
                  <p className="text-left">3</p>
                  <p className="text-center">4</p>
                  <p className="text-center">4</p>
                  <p className="text-center">7</p>
                </div>

                <div className="grid grid-cols-5 pb-2">
                  <div className="ml-">
                    <p className="text-left overflow-hidden">Sat</p>
                  </div>
                  <p className="text-left">3</p>
                  <p className="text-center">4</p>
                  <p className="text-center">4</p>
                  <p className="text-center">7</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* tasmee */}

      <div className="mt-5 font-semibold shadow-sm border border-gray-200 rounded-md bg-[#FBFBFB] p-3 w-full  ">
        <header className="border-b pb-5 border-gray-300 text-2xl font-bold text-black text-center my-5 flex items-center gap-3 justify-center">
          <FaPenAlt /> Tasmee This Week
        </header>
        {/* <p className={`${inter.className} tracking-wider`}>March 24, 2026</p> */}
        <div className="space-y-3 text-center">
          {/* <h1 className="text-center text-gray-800 opacity-90">This week</h1> */}
          <div className="bg-blue-500 w-fit mx-auto px-8 py-1 rounded-tl-full rounded-br-full">
            <h1 className="text-white font-bold tracking-wider">Monday</h1>
          </div>
          <div className=" shadow-sm rounded-md pb-1 space-y-4 mb-8 mt-6">
            <div className="grid grid-cols-4 bg-blue-90 py-1 rounded-md border border-gray-200 bg-gray-100 shadow-sm">
              <p>juz</p>
              <p>tambeeh</p>
              <p>talqeen</p>
              <p>marks</p>
            </div>
            <div className="space-y-3 bg-blue-80">
              <div className="grid grid-cols-4">
                <p>3</p>
                <p>4</p>
                <p>4</p>
                <p>7</p>
              </div>
              <div className="grid grid-cols-4">
                <p>9</p>
                <p>2</p>
                <p>3</p>
                <p>8</p>
              </div>
              <div className="grid grid-cols-4">
                <p>14</p>
                <p>6</p>
                <p>1</p>
                <p>8</p>
              </div>
            </div>
          </div>

          <div className=" bg-blue-500 w-fit mx-auto px-8 py-1 rounded-tl-full rounded-br-full">
            <h1 className="text-white font-bold tracking-wider">Tuesday</h1>
          </div>
          <div className="bg-gray-100 shadow-sm rounded-md pb-1 space-y-4 text-black">
            <div className="grid grid-cols-4 py-1 rounded-tl-md rounded-tr-md border border-gray-200 shadow-sm">
              <p className="">surah</p>
              <p>tambeeh</p>
              <p>talqeen</p>
              <p>marks</p>
            </div>
            <div className="grid grid-cols-4">
              <p className="px-1">al-mumtahanah</p>
              <p>4</p>
              <p>4</p>
              <p className="font-bold">7</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
