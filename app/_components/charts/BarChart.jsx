'use client';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  { juz: 1, marks: 7 },
  { juz: 2, marks: 8 },
  { juz: 3, marks: 6 },
  { juz: 4, marks: 9 },
  { juz: 5, marks: 5 },
  { juz: 6, marks: 8 },
  { juz: 7, marks: 7 },
  { juz: 8, marks: 6 },
  { juz: 9, marks: 9 },
  { juz: 10, marks: 8 },
  { juz: 11, marks: 7 },
  { juz: 12, marks: 6 },
  { juz: 13, marks: 8 },
  { juz: 14, marks: 9 },
  { juz: 15, marks: 7 },
  { juz: 16, marks: 6 },
  { juz: 17, marks: 8 },
  { juz: 18, marks: 7 },
  { juz: 19, marks: 9 },
  { juz: 20, marks: 6 },
  { juz: 21, marks: 8 },
  { juz: 22, marks: 7 },
  { juz: 23, marks: 6 },
  { juz: 24, marks: 9 },
  { juz: 25, marks: 8 },
  { juz: 26, marks: 7 },
  { juz: 27, marks: 9 },
  { juz: 28, marks: 6 },
  { juz: 29, marks: 8 },
  { juz: 30, marks: 9 },
];
function BarChartCompo() {
  return (
    <BarChart
      style={{
        width: "100%",
        maxWidth: "700px",
        maxHeight: "70vh",
        aspectRatio: 1.618,
      }}
      responsive
      data={data}
      margin={{
        top: 5,
        right: 0,
        left: 0,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="juz" interval={0} fontSize={'7px'}/>
      <YAxis width="auto" ticks={[1,2,3,4,5,6,7,8,9,10]} interval={0}/>
      <Tooltip />
      <Legend />
      <Bar
        label
        style={{ font: "bold" }}
        dataKey="marks"
        fill="oklch(47.3% 0.137 46.201)"
        activeBar={{ fill: "brown", stroke: "oklch(47.3% 0.137 46.201)" }}
        radius={[10, 10, 0, 0]}
      />
    </BarChart>
  );
}

export default BarChartCompo;
