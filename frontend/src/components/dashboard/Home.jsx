import React from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
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
import "../../styles/dashboard/HomeSection.css"; // Your custom CSS for styling

const HomeSection = () => {
  // Mock data for the dashboard
  const salesData = [
    { month: "Jan", sales: 1200 },
    { month: "Feb", sales: 1350 },
    { month: "Mar", sales: 1600 },
  ];

  const topProducts = [
    { name: "Product A", sales: 500 },
    { name: "Product B", sales: 400 },
    { name: "Product C", sales: 350 },
    { name: "Product D", sales: 300 },
    { name: "Product E", sales: 250 },
  ];

  const topCustomerCategories = [
    { category: "VIP", count: 600 },
    { category: "Returning", count: 450 },
    { category: "New", count: 300 },
    { category: "Occasional", count: 200 },
    { category: "Loyal", count: 150 },
  ];

  return (
    <div className="home-section">
      <h2>Business Overview</h2>
      <div className="overview-cards">
        {/* Sales Overview */}
        <div className="card">
          <h3>Total Sales</h3>
          <p>${salesData.reduce((acc, curr) => acc + curr.sales, 0).toLocaleString()}</p>
        </div>

        {/* Top Products */}
        <div className="card">
          <h3>Top 5 Products</h3>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Product</TableCell>
                  <TableCell>Sales</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {topProducts.map((product, index) => (
                  <TableRow key={index}>
                    <TableCell>{product.name}</TableCell>
                    <TableCell>{product.sales}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>

        {/* Top Customer Categories */}
        <div className="card">
          <h3>Top 5 Customer Categories</h3>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Category</TableCell>
                  <TableCell>Count</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {topCustomerCategories.map((category, index) => (
                  <TableRow key={index}>
                    <TableCell>{category.category}</TableCell>
                    <TableCell>{category.count}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>

      {/* Sales Trend Line Chart */}
      <div className="chart-container">
        <h3>Sales Trend (Monthly)</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={salesData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="sales" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Customer Category Distribution */}
      <div className="chart-container">
        <h3>Customer Category Distribution</h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Legend />
            <Pie
              data={topCustomerCategories}
              dataKey="count"
              nameKey="category"
              cx="50%"
              cy="50%"
              outerRadius={80}
              label
            >
              {topCustomerCategories.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={["#8884d8", "#82ca9d", "#ffc658", "#ff6347", "#d88787"][index % 5]}
                />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default HomeSection;
