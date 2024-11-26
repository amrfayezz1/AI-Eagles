import React, { useState, useEffect, useRef } from "react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  ZAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from "@mui/material";
import GaugeChart from "react-gauge-chart";
import "../../styles/dashboard/Sales.css";
import { countAnimate } from "./CountAnimate.jsx";

const Sales = () => {
  // Mock data
  const [revenue, setRevenue] = useState(0);
  const [accuracy, setAccuracy] = useState(0);
  const totalRevenue = 1500000; // Final revenue value
  const aiAccuracy = 92; // Final accuracy value

  const revenueRef = useRef();
  const accuracyRef = useRef();

  useEffect(() => {
    // Trigger animations when the component mounts
    countAnimate(revenueRef.current, 0, totalRevenue, 2000); // 3-second animation
    countAnimate(accuracyRef.current, 0, aiAccuracy, 2000); // 3-second animation
  }, []);

  const data = {
    revenueTrends: [
      { month: "Jan", actual: 500, predicted: 550 },
      { month: "Feb", actual: 600, predicted: 610 },
      { month: "Mar", actual: 700, predicted: 680 },
    ],
    productCategories: [
      { category: "Electronics", sales: 400 },
      { category: "Clothing", sales: 300 },
      { category: "Home Appliances", sales: 200 },
    ],
    campaignData: [
      { spend: 100, sales: 300 },
      { spend: 200, sales: 450 },
      { spend: 300, sales: 500 },
    ],
    regionSales: [
      { region: "North", sales: 700 },
      { region: "South", sales: 300 },
      { region: "East", sales: 400 },
      { region: "West", sales: 500 },
    ],
    aiPerformance: { accuracy: 92, confidence: 85 },
    topRegions: [
      { region: "North", growth: "15%" },
      { region: "West", growth: "12%" },
    ],
  };

  const extendedData = [...data.revenueTrends];
  const growthRate = 0.05; // Estimated 5% growth month-to-month
  const lastPredicted = extendedData[extendedData.length - 1].predicted;

  const additionalMonths = ["Apr", "May", "Jun"];
  additionalMonths.forEach((month, idx) => {
    const predictedValue = lastPredicted * Math.pow(1 + growthRate, idx + 1);
    extendedData.push({
      month,
      actual: null,
      predicted: Math.round(predictedValue),
    });
  });

  return (
    <div>
      <h2>
        Sales Dashboard &nbsp;
        <i className="fa-solid fa-chart-line"></i>
      </h2>
      <hr />

      {/* Key Metrics Section */}
      <div className="key-metrics">
        <div className="card">
          <h3>Total Revenue</h3>
          <p>
            $<span ref={revenueRef}>0</span>
          </p>
        </div>
        <div className="card">
          <h3>AI Forecast Accuracy</h3>
          <p>
            <span ref={accuracyRef}>0</span>%
          </p>
        </div>
        <div className="card">
          <h3>Top Region</h3>
          <p>North</p>
        </div>
      </div>

      {/* Revenue Analysis */}
      <div className="charts-section">
        <div className="chart-container">
          <h3>Revenue Trends (Actual vs Predicted)</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={extendedData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="actual"
                stroke="#8884d8"
                strokeWidth={"3px"}
                name="Actual Sales"
              />
              <Line
                type="monotone"
                dataKey="predicted"
                stroke="#82ca9d"
                strokeWidth={"3px"}
                name="Predicted Sales"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-container">
          <h3>Sales by Product Categories</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data.productCategories}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="category" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="sales" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* ROI Analysis */}
      <div className="charts-section">
        <div className="chart-container">
          <h3>ROI for Marketing Campaigns</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Legend />
              <Pie
                data={data.productCategories}
                dataKey="sales"
                nameKey="category"
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#82ca9d"
                label
              />
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-container">
          <h3>Campaign Spend vs. Sales Generated</h3>
          <ResponsiveContainer width="100%" height={300}>
            <ScatterChart>
              <CartesianGrid />
              <XAxis dataKey="spend" name="Campaign Spend" />
              <YAxis dataKey="sales" name="Sales" />
              <ZAxis range={[60, 400]} />
              <Tooltip />
              <Scatter data={data.campaignData} fill="#8884d8" />
            </ScatterChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Geographical Sales Performance */}
      <div className="charts-section">
        <div className="chart-container">
          <h3>Sales by Region</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Legend />
              <Pie
                data={data.regionSales}
                dataKey="sales"
                nameKey="region"
                cx="50%"
                cy="50%"
                outerRadius={80}
                label
              >
                {data.regionSales.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={
                      ["#8884d8", "#82ca9d", "#ffc658", "#ff6347"][index % 4]
                    }
                  />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* AI Forecasting */}
      <div>
        <h3>AI-Driven Sales Forecasting</h3>
        <div className="charts-section">
          <div className="chart-container">
            <GaugeChart
              id="ai-forecast-accuracy"
              nrOfLevels={6}
              colors={["#ff6347", "#ffa500", "#ffd700", "#9acd32", "#32cd32"]}
              style={{ maxWidth: "50vw", minWidth: "240px", margin: "auto" }}
              percent={data.aiPerformance.accuracy / 100}
              textColor="#000000"
              animate={false}
            />
          </div>
        </div>
        <div>
          <h3>Top Regions/Product Growth</h3>
          <TableContainer component={Paper} style={{ marginTop: "20px" }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Region</TableCell>
                  <TableCell>Growth</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.topRegions.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell>{row.region}</TableCell>
                    <TableCell>{row.growth}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  );
};

export default Sales;
