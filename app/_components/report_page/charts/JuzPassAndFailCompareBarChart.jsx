'use client';
import { FaChartBar } from "react-icons/fa";
import BarChartCompo from "../../charts/BarChart";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";

const barData = [
  { month: "jan", passed: 3, failed: 1 },
  { month: "feb", passed: 4, failed: 1 },
  { month: "mar", passed: 2, failed: 2 },
  { month: "apr", passed: 5, failed: 0 },
  { month: "may", passed: 3, failed: 2 },
  { month: "jun", passed: 4, failed: 0 },
  { month: "jul", passed: 2, failed: 1 },
  { month: "aug", passed: 3, failed: 1 },
  { month: "sep", passed: 4, failed: 1 },
  { month: "oct", passed: 5, failed: 0 },
  { month: "nov", passed: 3, failed: 2 },
  { month: "dec", passed: 4, failed: 0 },
];

function JuzPassAndFailCompareBarChart() {
  const searchParams = useSearchParams();
  const juz = searchParams.get('juz');
  async function getJadeed() {
    const jwt = localStorage.getItem("jwt");
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_URL}/getEntry/juzPassFailChartsData/${juz}`,
        { headers: { Authorization: `Bearer ${jwt}` } },
      );
      if (res.data.ok) {
        console.log(res.data);
        return res.data;
      }
    } catch (err) {
      console.log(err);
      return {};
    }
  }
  const { data, isFetching } = useQuery({
    queryKey: ["juzPassAndFailChartsData",juz],
    queryFn: getJadeed,
  });
    return (
      <div className="bg-(--layer) mt-10 rounded-md p-3">
        <header className="border-b pb-5 border-gray-300 font-bold text-amber-800 text-center my-5 flex items-center gap-3 justify-center">
          <FaChartBar /> Passed and failed per month
        </header>
        <BarChartCompo
          XAxisDataKey={"month"}
          single={false}
          data={data?.data}
          dataKeys={["timesPassed", "timesFailed"]}
          ticks={false}
        />
      </div>
    );
}

export default JuzPassAndFailCompareBarChart
