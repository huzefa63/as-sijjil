'use client';
import { FaChartLine } from "react-icons/fa";
import LineChartCompo from "../../charts/LineChart";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const data = [
  {
    month: "jan",
    pages: 35,
  },
  {
    month: "feb",
    pages: 28,
  },
  {
    month: "mar",
    pages: 43,
  },
  {
    month: "apr",
    pages: 46,
  },
  {
    month: "may",
    pages: 14,
  },
  {
    month: "jun",
    pages: 29,
  },
  {
    month: "jul",
    pages: 32,
  },
  {
    month: "aug",
    pages: 40,
  },
  {
    month: "sep",
    pages: 50,
  },
  {
    month: "oct",
    pages: 48,
  },
  {
    month: "nov",
    pages: 44,
  },
  {
    month: "dec",
    pages: 41,
  },
];
function JadeedOverviewLineChart() {
  async function getJadeed() {
    const jwt = localStorage.getItem("jwt");
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_URL}/getEntry/yearlyAvgJadeed`,
        { headers: { Authorization: `Bearer ${jwt}` } },
      );
      if (res.data.ok) {
        return res.data;
      }
    } catch (err) {
      console.log(err);
      return {};
    }
  }
  const { data: jadeedData, isFetching } = useQuery({
    queryKey: ["yearlyAvgJadeed"],
    queryFn: getJadeed,
  });
    return (
      <div className="w-full overflow-auto mt-5 bg-(--layer) p-3 rounded-md">
        <header className="border-b pb-5 border-gray-300 font-bold text-amber-800 text-center my-5 flex items-center gap-3 justify-center">
          <FaChartLine /> Jadeed each month from last 12 months
        </header>
        <LineChartCompo data={jadeedData?.yearlyAvgJadeed} LineDataKey="pages" XAxisDataKey="month" ticks={false} />
      </div>
    );
}

export default JadeedOverviewLineChart
