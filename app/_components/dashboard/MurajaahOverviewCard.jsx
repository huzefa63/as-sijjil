'use client';
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { getDay } from "date-fns";
import { FaPenAlt } from "react-icons/fa"

function MurajaahOverviewCard() {
  async function getMurajaah(){
     const jwt = localStorage.getItem("jwt");
     try {
       const res = await axios.get(
         `${process.env.NEXT_PUBLIC_URL}/getEntry/weeklyMurajaah`,
         { headers: { Authorization: `Bearer ${jwt}` } },
       );
       if (res.data.ok) {
        console.log(res.data.murajaah);
         return res.data;
       }
     } catch (err) {
       console.log(err);
       return {};
     }
  }
  const {data:murajaah,isFetching} = useQuery({
    queryKey:['murajaah'],
    queryFn:getMurajaah
  })
    return (
      <div className="mt-5 font-semibold shadow-sm border border-[#ffe5ac] rounded-md bg-[#FFF1D3] p-3 w-full  ">
        <header className="border-b pb-5 border-gray-300 text-2xl font-bold text-amber-800 text-center my-5 flex items-center gap-3 justify-center">
          <FaPenAlt /> Muraja&apos;ah This Week
        </header>
        {/* <p className={`${inter.className} tracking-wider`}>March 24, 2026</p> */}
        {murajaah?.murajaah?.[0]?.entries?.length > 0 && (
          <div className="space-y-3 text-center">
            {/* <h1 className="text-center text-gray-800 opacity-90">This week</h1> */}
            <div className=" shadow-sm rounded-md pb-1 space-y-4 mb-8 mt-6">
              <div className="grid grid-cols-5 bg-blue-90 px-2 py-1 rounded-md border border-(--highlightBorder) bg-(--highlight) shadow-sm">
                <p>Day</p>
                <p>juz</p>
                <p>tambeeh</p>
                <p>talqeen</p>
                <p>marks</p>
              </div>
              <div className="space-y-3 px-2">
                {murajaah.murajaah.map((el,i,arr) => {
                  return <MurajaahCard key={el._id} renderBorder={i !== arr.length - 1} juzList={el?.entries} day={el.day}/>;
                })}
              </div>
            </div>
          </div>
        )}

        {murajaah?.murajaah?.[0]?.juzList?.length < 1 && (
          <div className="font-bold  text-center">
            <h1>No Murajaah entry this week</h1>
          </div>
        )}
      </div>
    );
}

export default MurajaahOverviewCard


export function MurajaahCard({day,juzList,renderBorder}){
  return (
    <div className={`grid grid-cols-5 ${renderBorder && 'border-b'} border-amber-700 pb-2`}>
      <p className="mt-1 font-bold">{day}</p>
      {juzList?.map((el,i,arr) => {
        return (
          
            <div key={el._id} className={`grid grid-cols-4 col-span-4 col-start-2 ${i < arr.length -1 ? 'border-b':''} border-[#fbc85a] pb-2 mt-1`}>
              <p className="font-bold text-amber-950 flex justify-center items-center">
                {el.juz}
              </p>
              <p className="text-gray-600 text-xs flex justify-center items-center">
                {el.tambeeh}
              </p>
              <p className="text-gray-600 text-xs flex justify-center items-center">
                {el.talqeen}
              </p>
              <p className="text-blue-500 font-bold flex justify-center items-center">
                {el.marks}
              </p>
            </div>
        );
      })}
    </div>
  );
}