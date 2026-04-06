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
            <div className="grid grid-cols-5 bg-blue-90 py-1 rounded-md border border-gray-200 bg-gray-100 shadow-sm">
              <p>day</p>
              <p>juz</p>
              <p>tambeeh</p>
              <p>talqeen</p>
              <p>marks</p>
            </div>
            <div className="space-y-3 bg-blue-80">
              <div className="grid grid-cols-5">
                <p>Mon</p>
                <p>3</p>
                <p>4</p>
                <p>4</p>
                <p>7</p>
              </div>
            </div>
          </div>

          {/* <div className=" bg-blue-500 w-fit mx-auto px-8 py-1 rounded-tl-full rounded-br-full">
            <h1 className="text-white font-bold tracking-wider">Tuesday</h1>
          </div> */}
          <div className=" shadow-sm rounded-md pb-1 space-y-4 mb-8 mt-6">
            <div className="grid grid-cols-5 bg-blue-90 py-1 rounded-md border border-gray-200 bg-gray-100 shadow-sm">
              <p>day</p>
              <p>juz</p>
              <p>tambeeh</p>
              <p>talqeen</p>
              <p>marks</p>
            </div>
            <div className="space-y-3 bg-blue-80">
              <div className="grid grid-cols-5">
                <p>Tue</p>
                <p>al-Qalam</p>
                <p>4</p>
                <p>4</p>
                <p>7</p>
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
