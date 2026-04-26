'use client';
import { FaChartBar } from "react-icons/fa"
import BarChartCompo from "../../charts/BarChart"
import { useQuery } from "@tanstack/react-query";
import axios from "axios";


function MurajaahOverviewBarChart() {
   async function getJadeed() {
     const jwt = localStorage.getItem("jwt");
     try {
       const res = await axios.get(
         `${process.env.NEXT_PUBLIC_URL}/getEntry/yearlyAvgJuz`,
         { headers: { Authorization: `Bearer ${jwt}` } },
       );
       if (res.data.ok) {
        console.log(res.data)
         return res.data;
       }
     } catch (err) {
       console.log(err);
       return {};
     }
   }
   const { data, isFetching } = useQuery({
     queryKey: ["yearlyAvgJuz"],
     queryFn: getJadeed,
   });
    return (
        <div className="w-full overflow-auto mt-5 bg-(--layer) p-3 rounded-md">
                <header className="border-b pb-5 border-gray-300 font-bold text-amber-800 text-center my-5 flex items-center gap-3 justify-center">
                  <FaChartBar /> All juz avg marks from last 12 months
                </header>
                <BarChartCompo XAxisDataKey={'juz'} single={true} data={data?.murajaah} ticks={[1,2,3,4,5,6,7,8,9,10]} dataKey={'marks'}/>
              </div>
    )
}

export default MurajaahOverviewBarChart
