'use client';
import {
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Line,
} from "recharts";



// #endregion
function LineChartCompo ({data,XAxisDataKey,ticks=[]}){
  return(
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
              <XAxis dataKey={XAxisDataKey} fontSize={'8px'}/>
              {ticks && <YAxis
                width="auto"
                // domain={[1, 10]}
                interval={0}
                ticks={ticks}
                style={{ fontSize: "8px" }}
              />}
              {!ticks && <YAxis
                width="auto"
                // domain={[1, 10]}
                interval={0}
                style={{ fontSize: "8px" }}
              />}
              <Tooltip />
              <Legend />
              <Line
                label={{ position: "top", offset: 10, fontSize: "10px" }}
                type="monotone"
                dataKey="marks"
                stroke="oklch(47.3% 0.137 46.201)"
                isAnimationActive={true}
              />
            </LineChart>
  )
}

export default LineChartCompo;
