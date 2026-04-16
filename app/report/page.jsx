'use client'
import {
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Line,
} from "recharts";

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
const isAnimationActive = true;

function Page() {
  return (
    <div className="h-full py-3 px-3">
      <div className="grid grid-cols-2 gap-3">
        <div className="flex flex-col items-center gap-y-3 bg-(--layer) w-full px-5 py-2 rounded-md shadow-sm border border-(--highlightBorder)">
          <p>Avg marks</p>
          <h1 className="font-bold text-3xl">8.4</h1>
        </div>
        <div className="flex flex-col items-center gap-y-3 bg-(--layer) w-full px-5 py-2 rounded-md shadow-sm border border-(--highlightBorder)">
          <p>Times recited</p>
          <h1 className="font-bold text-3xl">58</h1>
        </div>
        <div className="flex flex-col items-center gap-y-3 bg-(--layer) w-full px-5 py-2 rounded-md shadow-sm border border-(--highlightBorder)">
          <p>Times passed</p>
          <h1 className="font-bold text-3xl">40</h1>
        </div>
        <div className="flex flex-col items-center gap-y-3 bg-(--layer) w-full px-5 py-2 rounded-md shadow-sm border border-(--highlightBorder)">
          <p>Times failed</p>
          <h1 className="font-bold text-3xl">18</h1>
        </div>
      </div>

      <div className="w-full bg-(--layer) grid grid-rows-12 gap-y-1 row shadow-sm border border-(--highlightBorder) mt-5 ">
        <div className="grid grid-cols-7 px-3 py-2 bg-(--highlight) shadow-sm mb-1">
          <p className="">no</p>
          <p className="col-span-2">date</p>
          <p className="text-center">juz</p>
          <p className="text-center">tam</p>
          <p className="text-center">talq</p>
          <p className="text-center">marks</p>
        </div>
        <div className="grid grid-cols-7 px-3 py-2 border-b border-(--border)">
          <p className="">1</p>
          <p className="col-span-2 text-xs tracking-wider">10 jan, 2024</p>
          <p className="text-center">1</p>
          <p className="text-center">4</p>
          <p className="text-center">2</p>
          <p className="text-center">8</p>
        </div>
        <div className="grid grid-cols-7 px-3 py-2 border-b border-(--border)">
          <p className="">1</p>
          <p className="col-span-2 text-xs tracking-wider">10 jan, 2024</p>
          <p className="text-center">1</p>
          <p className="text-center">4</p>
          <p className="text-center">2</p>
          <p className="text-center">8</p>
        </div>
        <div className="grid grid-cols-7 px-3 py-2 border-b border-(--border)">
          <p className="">1</p>
          <p className="col-span-2 text-xs tracking-wider">10 jan, 2024</p>
          <p className="text-center">1</p>
          <p className="text-center">4</p>
          <p className="text-center">2</p>
          <p className="text-center">8</p>
        </div>
        <div className="grid grid-cols-7 px-3 py-2 border-b border-(--border)">
          <p className="">1</p>
          <p className="col-span-2 text-xs tracking-wider">10 jan, 2024</p>
          <p className="text-center">1</p>
          <p className="text-center">4</p>
          <p className="text-center">2</p>
          <p className="text-center">8</p>
        </div>
        <div className="grid grid-cols-7 px-3 py-2 border-b border-(--border)">
          <p className="">1</p>
          <p className="col-span-2 text-xs tracking-wider">10 jan, 2024</p>
          <p className="text-center">1</p>
          <p className="text-center">4</p>
          <p className="text-center">2</p>
          <p className="text-center">8</p>
        </div>
        <div className="grid grid-cols-7 px-3 py-2 border-b border-(--border)">
          <p className="">1</p>
          <p className="col-span-2 text-xs tracking-wider">10 jan, 2024</p>
          <p className="text-center">1</p>
          <p className="text-center">4</p>
          <p className="text-center">2</p>
          <p className="text-center">8</p>
        </div>
        <div className="grid grid-cols-7 px-3 py-2 border-b border-(--border)">
          <p className="">1</p>
          <p className="col-span-2 text-xs tracking-wider">10 jan, 2024</p>
          <p className="text-center">1</p>
          <p className="text-center">4</p>
          <p className="text-center">2</p>
          <p className="text-center">8</p>
        </div>
        <div className="grid grid-cols-7 px-3 py-2 border-b border-(--border)">
          <p className="">1</p>
          <p className="col-span-2 text-xs tracking-wider">10 jan, 2024</p>
          <p className="text-center">1</p>
          <p className="text-center">4</p>
          <p className="text-center">2</p>
          <p className="text-center">8</p>
        </div>
        <div className="grid grid-cols-7 px-3 py-2 border-b border-(--border)">
          <p className="">1</p>
          <p className="col-span-2 text-xs tracking-wider">10 jan, 2024</p>
          <p className="text-center">1</p>
          <p className="text-center">4</p>
          <p className="text-center">2</p>
          <p className="text-center">8</p>
        </div>
        <div className="grid grid-cols-7 px-3 py-2 border-b border-(--border)">
          <p className="">1</p>
          <p className="col-span-2 text-xs tracking-wider">10 jan, 2024</p>
          <p className="text-center">1</p>
          <p className="text-center">4</p>
          <p className="text-center">2</p>
          <p className="text-center">8</p>
        </div>

        <div className="h-full row-start-12 flex justify-between items-center gap-x-3 pl-3 pr-1 bg-(--highlight) shadow-sm">
          <p>1 out of 21</p>
          <div className="space-x-1">
            <button className="w-23 bg-amber-800 text-white px-3 py-[0.4rem] rounded-md shadow-sm ">
              previous
            </button>
            <button className="w-23 bg-amber-800 text-white px-3 py-[0.4rem] rounded-md shadow-sm ">
              next
            </button>
          </div>
        </div>
      </div>
      <div className="bg-(--layer) mt-10 rounded-md p-3">
        <header className=" mb-8 text-center font-bold text-amber-800 text-xl">
          last 12 months avg marks
        </header>
        <LineChart
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
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis
            width="auto"
            domain={[1, 10]}
            interval={0}
            ticks={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
            style={{fontSize:'8px'}}
          />
          <Tooltip />
          <Legend />
          <Line
            label={{ position: "top", offset: 10, fontSize:'10px' }}
            type="monotone"
            dataKey="marks"
            stroke="#8884d8"
            isAnimationActive={isAnimationActive}
          />
        </LineChart>
      </div>
    </div>
  );
}

export default Page;
