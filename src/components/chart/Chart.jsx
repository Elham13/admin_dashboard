import React from "react";
import "./chart.css";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Chart = ({ data, title, dataKey, value }) => {
  return (
    <div className="chart">
      <h3 className="chartTitle">{title}</h3>
      <ResponsiveContainer width="100%" height="100%" aspect={4 / 1}>
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="5 5" />
          <XAxis dataKey={dataKey} />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey={value}
            stroke="#8884d8"
            fill="#8884d8"
          />
          <Legend />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
