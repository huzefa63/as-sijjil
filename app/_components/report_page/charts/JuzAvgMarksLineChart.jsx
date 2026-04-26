import { FaChartLine } from "react-icons/fa";
import LineChartCompo from "../../charts/LineChart";

const data = [
  {
    month: "jan",
    marks: 8,
  },
  {
    month: "feb",
    marks: 5,
  },
  {
    month: "mar",
    marks: 6,
  },
  {
    month: "apr",
    marks: 8,
  },
  {
    month: "may",
    marks: 7,
  },
  {
    month: "jun",
    marks: 9,
  },
  {
    month: "jul",
    marks: 8,
  },
  {
    month: "aug",
    marks: 8,
  },
  {
    month: "sep",
    marks: 6,
  },
  {
    month: "oct",
    marks: 6,
  },
  {
    month: "nov",
    marks: 7,
  },
  {
    month: "dec",
    marks: 8,
  },
];

function JuzAvgMarksLineChart() {
    return (
      <div className="bg-(--layer) mt-10 rounded-md p-3">
        <header className="border-b pb-5 border-gray-300 font-bold text-amber-800 text-center my-5 flex items-center gap-3 justify-center">
          <FaChartLine /> Last 12 months avg marks
        </header>
        <LineChartCompo
          data={data}
          XAxisDataKey={"month"}
          ticks={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
        />
      </div>
    );
}

export default JuzAvgMarksLineChart
