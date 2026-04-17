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


function BarChartCompo({
  XAxisDataKey,
  single,
  data,
  ticks,
  dataKey,
  dataKeys,
}) {
  if (single)
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
        <XAxis dataKey={XAxisDataKey} interval={0} fontSize={"7px"} />
        {ticks && <YAxis width="auto" ticks={ticks} interval={0} />}
        {!ticks && <YAxis width="auto" interval={0} />}
        <Tooltip />
        <Legend />
        <Bar
          label={{ fontSize: "8px" }}
          style={{ font: "bold" }}
          dataKey={dataKey}
          fill="#ffd67d"
          activeBar={{ fill: "brown", stroke: "oklch(47.3% 0.137 46.201)" }}
          radius={[10, 10, 0, 0]}
        />
      </BarChart>
    );
  if (!single)
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
        <XAxis dataKey={XAxisDataKey} interval={0} fontSize={"7px"} />
        {ticks && <YAxis width="auto" ticks={ticks} interval={0} />}
        {!ticks && <YAxis width="auto" interval={0} />}
        <Tooltip />
        <Legend />
        <Bar
          label={{ fontSize: "8px" }}
          style={{ font: "bold" }}
          dataKey={dataKeys[0]}
          fill="#ffd67d"
          activeBar={{ fill: "brown", stroke: "oklch(47.3% 0.137 46.201)" }}
          radius={[10, 10, 0, 0]}
        />
        <Bar
          label={{ fontSize: "8px" }}
          style={{ font: "bold" }}
          dataKey={dataKeys[1]}
          fill="#5c4520"
          activeBar={{ fill: "brown", stroke: "oklch(47.3% 0.137 46.201)" }}
          radius={[10, 10, 0, 0]}
        />
      </BarChart>
    );
}

export default BarChartCompo;
