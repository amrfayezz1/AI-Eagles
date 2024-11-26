import React from "react";
import {
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
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
import "../../styles/dashboard/Customer.css";

const Customer = () => {
  // Mock data
  const data = {
    charts: {
      segmentation: [
        { name: "New Customers", value: 400 },
        { name: "Returning Customers", value: 300 },
        { name: "VIP Customers", value: 300 },
      ],
      churn: [
        { date: "Jan", rate: 5 },
        { date: "Feb", rate: 4 },
        { date: "Mar", rate: 6 },
      ],
    },
    table: [
      { type: "New Customers", count: 400, percentage: "40%" },
      { type: "Returning Customers", count: 300, percentage: "30%" },
      { type: "VIP Customers", count: 300, percentage: "30%" },
    ],
  };

  // Function to render table
  const renderTable = (tableData) => (
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
                <TableCell key={idx}>{value}</TableCell>
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
        Customer Insights &nbsp;
        <i className="fa-solid fa-users"></i>
      </h2>
      <hr />
      {/* Charts Section */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {/* Pie Chart for Customer Segmentation */}
        <div
          style={{
            flex: "1 1 45%",
            maxWidth: "90vw",
            minWidth: "205px",
            height: "300px",
            marginBottom: "75px",
          }}
        >
          <h3>Customer Segmentation</h3>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Legend />
              <Pie
                data={data.charts.segmentation}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
                label
              >
                {data.charts.segmentation.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={["#8884d8", "#82ca9d", "#ffc658"][index % 3]}
                  />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Line Chart for Churn Prediction */}
        <div
          style={{
            flex: "1 1 45%",
            maxWidth: "90vw",
            minWidth: "205px",
            height: "300px",
            marginBottom: "75px",
          }}
        >
          <h3>Churn Prediction</h3>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data.charts.churn}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="rate" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Table Section */}
      <div>
        <h3>Customer Details</h3>
        {renderTable(data.table)}
      </div>
    </div>
  );
};

export default Customer;
