'use client';
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { getDay } from "date-fns";
import { FaPenAlt } from "react-icons/fa"

function JuzhaaliOverviewCard() {
  async function getJuzhaali() {
    const jwt = localStorage.getItem("jwt");
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_URL}/getEntry/weeklyJuzhaali`,
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
  const { data: juzhaali, isFetching } = useQuery({
    queryKey: ["juzhaali"],
    queryFn: getJuzhaali,
  });
    return (
      <div className="mt-5 font-semibold shadow-sm border border-gray-200 rounded-md bg-[#FFF1D3] p-3 w-full  ">
        <header className="border-b pb-5 border-gray-300 text-2xl font-bold text-amber-900 text-center my-5 flex items-center gap-3 justify-center">
          <FaPenAlt /> Juzhaali This Week
        </header>
        {/* <p className={`${inter.className} tracking-wider`}>March 24, 2026</p> */}
        <div className="space-y-3 text-center">
          {/* <h1 className="text-center text-gray-800 opacity-90">This week</h1> */}
          {/* <div className="bg-blue-500 w-fit mx-auto px-8 py-1 rounded-tl-full rounded-br-full">
                    <h1 className="text-white font-bold tracking-wider">Monday</h1>
                  </div> */}
          {juzhaali?.juzhaali && (
            <div className=" shadow-sm rounded-md rounded-br-none rounded-bl-none pb-1 space-y-4 mb-8 mt-6 border-b border-amber-700">
              <div className="grid grid-cols-5 px-2 bg-blue-90 py-1 rounded-md border border-(--highlightBorder) bg-[#f0d8a1ab] shadow-sm">
                <p className="text-left">day</p>
                <p className="text-left">juz</p>
                <p className="">tambeeh</p>
                <p className="">talqeen</p>
                <p className="">marks</p>
              </div>
              <div className="">
                <div className="px-2 space-y-3">
                  {juzhaali?.juzhaali?.map((el, i, arr) => {
                    return (
                      <div
                        key={el._id}
                        className={`grid grid-cols-5 ${i < arr.length - 1 && "border-b"} border-(--background) pb-2`}
                      >
                        <div className="ml-">
                          <p className="text-left overflow-hidden">
                            {
                              ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat"][
                                getDay(el.date) - 1
                              ]
                            }
                          </p>
                        </div>
                        <p className="text-left text-amber-700 font-bold">
                          {el.startPage}
                        </p>
                        <p className="text-center text-xs text-gray-700 my-auto">
                          {el.tambeeh}
                        </p>
                        <p className="text-center text-xs text-gray-700 my-auto">
                          {el.talqeen}
                        </p>
                        <p className="text-center text-amber-600">{el.marks}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {!juzhaali?.juzhaali && (
            <div>
              <h1 className="font-bold text-center">
                no juzhaali entry this week
              </h1>
            </div>
          )}
        </div>
      </div>
    );
}

export default JuzhaaliOverviewCard
