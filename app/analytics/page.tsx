"use client";

import { 
  ResponsiveContainer, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  Tooltip, 
  Legend, 
  CartesianGrid 
} from "recharts";

const data = [
  { name: "Jan", visitors: 4000, conversions: 2400, revenue: 2400 },
  { name: "Feb", visitors: 3000, conversions: 1398, revenue: 2210 },
  { name: "Mar", visitors: 2000, conversions: 9800, revenue: 2290 },
  { name: "Apr", visitors: 2780, conversions: 3908, revenue: 2000 },
  { name: "May", visitors: 1890, conversions: 4800, revenue: 2181 },
  { name: "Jun", visitors: 2390, conversions: 3800, revenue: 2500 },
  { name: "Jul", visitors: 3490, conversions: 4300, revenue: 2100 },
];

export default function DataVisualization() {
  return (
    <div className="w-full p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold text-gray-700 mb-4">Monthly Conversions & Revenue</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis yAxisId="left" />
          <YAxis yAxisId="right" orientation="right" />
          <Tooltip />
          <Legend />
          <Bar yAxisId="left" dataKey="conversions" fill="#8884d8" name="Conversions" />
          <Bar yAxisId="right" dataKey="revenue" fill="#82ca9d" name="Revenue" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
