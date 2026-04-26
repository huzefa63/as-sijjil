'use client';
import { FaPenAlt } from "react-icons/fa";
import { MurajaahCard } from "./MurajaahOverviewCard";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { getDay } from "date-fns";

function TasmeeOverviewCard() {
  async function getTasmee() {
    const jwt = localStorage.getItem("jwt");
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_URL}/getEntry/weeklyTasmee`,
        { headers: { Authorization: `Bearer ${jwt}` } },
      );
      if (res.data.ok) {
        // console.log(res.data);
        return res.data;
      }
    } catch (err) {
      console.log(err);
      return {};
    }
  }
  const { data: tasmee, isFetching } = useQuery({
    queryKey: ["tasmee"],
    queryFn: getTasmee,
  });
    return (
      <div className="mt-5 font-semibold shadow-sm border border-gray-200 rounded-md bg-[#FFF1D3] p-3 w-full  ">
        <header className="border-b pb-5 border-gray-300 text-2xl font-bold text-amber-800 text-center my-5 flex items-center gap-3 justify-center">
          <FaPenAlt /> Tasmee This Week
        </header>
        {/* <p className={`${inter.className} tracking-wider`}>March 24, 2026</p> */}
        {tasmee?.tasmee?.[0]?.juzList?.length > 0 && (
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
                        {tasmee?.tasmee?.map((el) => {
                          return <MurajaahCard key={el._id} juzList={el?.juzList} day={['Mon','Tue','Wed','Thur','Fri','Sat'][getDay(el?.date) - 1]}/>;
                        })}
                      </div>
                    </div>
                  </div>
                )}
        
                {!tasmee?.tasmee?.[0]?.juzList?.length && (
                  <div className="font-bold  text-center">
                    <h1>No Tasmee entry this week</h1>
                  </div>
                )}
      </div>
    );
}

export default TasmeeOverviewCard
