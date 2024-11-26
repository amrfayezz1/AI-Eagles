import React from "react";
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
import "../../styles/dashboard/Product.css";

const Product = () => {
  // Mock data
  const data = {
    lifecycle: {
      stages: [
        { stage: "Launch", count: 50 },
        { stage: "Growth", count: 120 },
        { stage: "Maturity", count: 80 },
        { stage: "Decline", count: 30 },
      ],
      performance: [
        { date: "Jan", sales: 150 },
        { date: "Feb", sales: 200 },
        { date: "Mar", sales: 180 },
      ],
    },
    profitability: [
      { product: "Product A", margin: "30%", status: "Profit" },
      { product: "Product B", margin: "10%", status: "Struggling" },
      { product: "Product C", margin: "50%", status: "Profit" },
      { product: "Product D", margin: "-5%", status: "Loss" },
    ],
  };

  // Function to render profitability table
  const renderProfitabilityTable = (tableData) => (
    <TableContainer component={Paper} style={{ marginTop: "20px" }}>
      <Table>
        <TableHead>
          <TableRow>
            {Object.keys(tableData[0]).map((key) => (
              <TableCell key={key}>{key}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row, index) => (
            <TableRow key={index}>
              {Object.values(row).map((value, idx) => (
                <TableCell key={idx}>
                  {idx === 2 ? (
                    <span
                      style={{
                        color:
                          value === "Profit"
                            ? "green"
                            : value === "Struggling"
                            ? "orange"
                            : "red",
                      }}
                    >
                      {value}
                    </span>
                  ) : (
                    value
                  )}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );

  return (
    <div>
      <h2>
        Product Insights &nbsp;
        <i className="fa-solid fa-boxes-stacked"></i>
      </h2>
      <hr />
      {/* Charts Section */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {/* Bar Chart for Lifecycle Management */}
        <div
          style={{
            flex: "1 1 45%",
            maxWidth: "90vw",
            minWidth: "205px",
            height: "300px",
            marginBottom: "75px",
          }}
        >
          <h3>Products by Stage</h3>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data.lifecycle.stages}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="stage" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="count" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Line Chart for Product Performance */}
        <div
          style={{
            flex: "1 1 45%",
            maxWidth: "90vw",
            minWidth: "205px",
            height: "300px",
            marginBottom: "75px",
          }}
        >
          <h3>Product Performance</h3>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data.lifecycle.performance}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="sales" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Table Section */}
      <div>
        <h3>Profit Margins by Product</h3>
        {renderProfitabilityTable(data.profitability)}
      </div>
    </div>
  );
};

export default Product;
