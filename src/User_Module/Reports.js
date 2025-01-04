import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";
import { jsPDF } from "jspdf";
import { saveAs } from "file-saver";
import OverdueTrends from "./OverdueTrends";
import ActivityLog from "./ActivityLog";
import "../styles/Reports.css";

const Reports = () => {
  // Sample Data
  const communicationData = [
    { method: "LinkedIn", frequency: 12 },
    { method: "Email", frequency: 8 },
    { method: "Calls", frequency: 5 },
  ];

  const engagementData = [
    { name: "Successful", value: 60, color: "#FF6384" },
    { name: "Pending", value: 25, color: "#36A2EB" },
    { name: "Failed", value: 15, color: "#FFCE56" },
  ];

  const exportToCSV = () => {
    const csvContent =
      "data:text/csv;charset=utf-8," +
      ["Method,Frequency"]
        .concat(communicationData.map((d) => `${d.method},${d.frequency}`))
        .join("\n");
    const encodedUri = encodeURI(csvContent);
    saveAs(encodedUri, "communication_report.csv");
  };

  const exportToPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text("Reporting and Analytics", 10, 10);

    // Add Communication Frequency Table
    doc.setFontSize(14);
    doc.text("Communication Frequency", 10, 30);
    communicationData.forEach((data, index) => {
      doc.text(`${data.method}: ${data.frequency}`, 10, 40 + index * 10);
    });

    // Add Engagement Effectiveness Summary
    doc.text("Engagement Effectiveness", 10, 70);
    engagementData.forEach((data, index) => {
      doc.text(`${data.name}: ${data.value}%`, 10, 80 + index * 10);
    });

    doc.save("reporting_and_analytics.pdf");
  };

 
  return (
    <div style={{ padding: "20px" }}>
      <h1>Reporting and Analytics</h1>

      {/* Charts Section */}
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {/* Communication Frequency Chart */}
        <div style={{ width: "48%" }}>
          <h3>Communication Frequency</h3>
          <BarChart width={400} height={300} data={communicationData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="method" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="frequency" fill="#82ca9d" />
          </BarChart>
        </div>

        {/* Engagement Effectiveness Chart */}
        <div style={{ width: "48%" }}>
          <h3>Engagement Effectiveness</h3>
          <PieChart width={400} height={300}>
            <Pie
              data={engagementData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
              fill="#8884d8"
              label
            >
              {engagementData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Legend />
            <Tooltip />
          </PieChart>
        </div>
      </div>

     {/* Overdue Trends */}
        <div style={{ marginTop: "40px" }}>
            <OverdueTrends exportToPDF={exportToPDF} exportToCSV={exportToCSV}/>
        </div>

        {/* Activity Log */}
        <div style={{ marginTop: "20px" }}>
            <ActivityLog />
        </div>

    </div>
  );
};

export default Reports;
