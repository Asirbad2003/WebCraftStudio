"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ComposedChart,
  Area,
} from "recharts"

// Sample data for the charts
const monthlyData = [
  { month: "Jan", visitors: 1000, conversions: 200, revenue: 5000 },
  { month: "Feb", visitors: 1500, conversions: 350, revenue: 7500 },
  { month: "Mar", visitors: 2000, conversions: 450, revenue: 9000 },
  { month: "Apr", visitors: 2500, conversions: 550, revenue: 11000 },
  { month: "May", visitors: 3000, conversions: 600, revenue: 12000 },
  { month: "Jun", visitors: 2800, conversions: 580, revenue: 11500 },
  { month: "Jul", visitors: 3500, conversions: 700, revenue: 14000 },
  { month: "Aug", visitors: 4000, conversions: 800, revenue: 16000 },
  { month: "Sep", visitors: 4500, conversions: 850, revenue: 17000 },
  { month: "Oct", visitors: 5000, conversions: 900, revenue: 18000 },
  { month: "Nov", visitors: 4800, conversions: 880, revenue: 17500 },
  { month: "Dec", visitors: 5500, conversions: 950, revenue: 19000 },
]

const serviceData = [
  { name: "Web Development", value: 40 },
  { name: "WordPress", value: 25 },
  { name: "SEO", value: 15 },
  { name: "UI/UX Design", value: 10 },
  { name: "E-Commerce", value: 10 },
]

export default function DataVisualization() {
  const [activeMetric, setActiveMetric] = useState<"visitors" | "conversions" | "revenue">("visitors")

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Performance Analytics</CardTitle>
        <CardDescription>Visualize website performance metrics over time</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="combined" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="combined">Combined View</TabsTrigger>
            <TabsTrigger value="trends">Trend Analysis</TabsTrigger>
            <TabsTrigger value="services">Service Breakdown</TabsTrigger>
          </TabsList>

          <TabsContent value="combined" className="space-y-4">
            <div className="flex justify-center space-x-4 my-4">
              <button
                onClick={() => setActiveMetric("visitors")}
                className={`px-4 py-2 rounded-md ${activeMetric === "visitors" ? "bg-primary text-primary-foreground" : "bg-muted"}`}
              >
                Visitors
              </button>
              <button
                onClick={() => setActiveMetric("conversions")}
                className={`px-4 py-2 rounded-md ${activeMetric === "conversions" ? "bg-primary text-primary-foreground" : "bg-muted"}`}
              >
                Conversions
              </button>
              <button
                onClick={() => setActiveMetric("revenue")}
                className={`px-4 py-2 rounded-md ${activeMetric === "revenue" ? "bg-primary text-primary-foreground" : "bg-muted"}`}
              >
                Revenue
              </button>
            </div>

            <div className="h-[400px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <ComposedChart
                  data={monthlyData}
                  margin={{
                    top: 20,
                    right: 20,
                    bottom: 20,
                    left: 20,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
                  <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
                  <Tooltip />
                  <Legend />
                  {activeMetric === "visitors" && (
                    <>
                      <Bar yAxisId="left" dataKey="visitors" fill="#8884d8" name="Visitors" />
                      <Line yAxisId="right" type="monotone" dataKey="conversions" stroke="#82ca9d" name="Conversions" />
                    </>
                  )}
                  {activeMetric === "conversions" && (
                    <>
                      <Bar yAxisId="left" dataKey="conversions" fill="#8884d8" name="Conversions" />
                      <Line yAxisId="right" type="monotone" dataKey="revenue" stroke="#82ca9d" name="Revenue" />
                    </>
                  )}
                  {activeMetric === "revenue" && (
                    <>
                      <Area yAxisId="left" dataKey="revenue" fill="#8884d8" stroke="#8884d8" name="Revenue" />
                      <Line yAxisId="right" type="monotone" dataKey="conversions" stroke="#82ca9d" name="Conversions" />
                    </>
                  )}
                </ComposedChart>
              </ResponsiveContainer>
            </div>
          </TabsContent>

          <TabsContent value="trends">
            <div className="h-[400px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={monthlyData}
                  margin={{
                    top: 20,
                    right: 20,
                    bottom: 20,
                    left: 20,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="visitors" stroke="#8884d8" name="Visitors" />
                  <Line type="monotone" dataKey="conversions" stroke="#82ca9d" name="Conversions" />
                  <Line type="monotone" dataKey="revenue" stroke="#ffc658" name="Revenue ($)" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </TabsContent>

          <TabsContent value="services">
            <div className="h-[400px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={serviceData}
                  margin={{
                    top: 20,
                    right: 20,
                    bottom: 20,
                    left: 20,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="value" fill="#8884d8" name="Percentage (%)" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
