'use client';
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { CiCalendarDate } from "react-icons/ci";
import { GiOpenBook } from "react-icons/gi";

function JadeedOverviewCard() {
  async function getJadeed(){
    const jwt = localStorage.getItem('jwt');
    try{
    const res = await axios.get(`${process.env.NEXT_PUBLIC_URL}/getEntry/jadeed`,{headers:{Authorization:`Bearer ${jwt}`}});
      if(res.data.ok) {
        return res.data;
      }
    }catch(err){
      console.log(err.response);
      return {};
    }
  } 
  const {data:jadeedData,isFetching} = useQuery({
    queryKey:['jadeed'],
    queryFn:getJadeed
  });
    return (
      <div className=" bg-(--layer) border border-[#ffe5ac] h-40 p-3 w-full rounded-sm shadow flex flex-col items-center justify-center">
        {/* <p className={`${inter.className} tracking-wider`}>March 24, 2026</p> */}
        <div className="space-y-3 text-center">
          <h1 className="text-center opacity-90 font-semibold flex items-center justify-center gap-x-2">
            Currently At <GiOpenBook />
          </h1>
          <h1 className="text-2xl font-bold tracking-wide text-amber-600">
            surah {jadeedData?.jadeed?.surah} {jadeedData?.jadeed?.ayah}
          </h1>
          <h1 className="text-xs tracking-wide flex items-center justify-center gap-1">
            <CiCalendarDate /> Jadeed This Week:{" "}
            <span className="font-bold">{jadeedData?.weeklyJadeedPages} Pages</span>
          </h1>
          <h1 className="text-xs tracking-wide flex items-center justify-center gap-1">
            <CiCalendarDate /> Jadeed This Month:{" "}
            <span className="font-bold">{jadeedData?.monthlyJadeedPages} pages</span>
          </h1>
        </div>
      </div>
    );
}

export default JadeedOverviewCard
