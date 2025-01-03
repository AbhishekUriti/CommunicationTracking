import React from "react";
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";

const OverdueTrends = () => {
  // Example data for overdue trends
  const overdueData = [
    { date: "2024-12-25", count: 2 },
    { date: "2024-12-28", count: 1 },
    { date: "2024-12-29", count: 3 },
    { date: "2024-12-30", count: 5 },
  ];

  return (
    <div style={{ border: "1px solid #ddd", borderRadius: "8px", padding: "20px", margin: "20px" }}>
      {/* Container for title and content */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        {/* Header */}
        <h3 style={{ margin: "0", fontSize: "18px", fontWeight: "bold", flex: "1" }}>Overdue Trends</h3>

        {/* Buttons */}
        <div style={{ display: "flex", gap: "10px" }}>
          <button
            style={{
              backgroundColor: "#007bff",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              padding: "5px 10px",
              cursor: "pointer",
            }}
            onClick={() => console.log("Exporting to PDF...")}
          >
            Export to PDF
          </button>
          <button
            style={{
              backgroundColor: "#28a745",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              padding: "5px 10px",
              cursor: "pointer",
            }}
            onClick={() => console.log("Exporting to CSV...")}
          >
            Export to CSV
          </button>
        </div>
      </div>

      {/* Heatmap */}
      <div
        style={{
          marginTop: "10px",
          height: "80px", // Adjust height for a compact look
          overflow: "hidden",
        }}
      >
        <CalendarHeatmap
          startDate={new Date("2024-01-01")}
          endDate={new Date("2024-12-31")}
          values={overdueData}
          classForValue={(value) => {
            if (!value) return "color-empty";
            return `color-scale-${value.count}`;
          }}
          showWeekdayLabels={false} // Simplify layout
        />
      </div>
    </div>
  );
};

export default OverdueTrends;
