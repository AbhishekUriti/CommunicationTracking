import React, { useState, useEffect } from "react";
import { LineChart, XAxis, YAxis, Line, BarChart, Bar, Tooltip, ResponsiveContainer } from "recharts";

function ReportingAnalyticsModule() {
  const [communicationFrequencyData, setCommunicationFrequencyData] = useState([]);
  const [engagementEffectivenessData, setEngagementEffectivenessData] = useState([]);
  const [overdueCommunicationTrendsData, setOverdueCommunicationTrendsData] = useState([]);


  useEffect(() => {
    setCommunicationFrequencyData([
      { name: 'Jan', frequency: 12 },
      { name: 'Feb', frequency: 8 },
      { name: 'Mar', frequency: 10 },
      { name: 'Apr', frequency: 15 },
      { name: 'May', frequency: 14 }
    ]);

    setEngagementEffectivenessData([
      { name: 'Jan', effectiveness: 80 },
      { name: 'Feb', effectiveness: 75 },
      { name: 'Mar', effectiveness: 85 },
      { name: 'Apr', effectiveness: 70 },
      { name: 'May', effectiveness: 90 }
    ]);

    setOverdueCommunicationTrendsData([
      { name: 'Jan', trend: 5 },
      { name: 'Feb', trend: 7 },
      { name: 'Mar', trend: 3 },
      { name: 'Apr', trend: 9 },
      { name: 'May', trend: 6 }
    ]);
  }, []);

  return (
    <div className="flex flex-col p-4">
      <h1 className="text-2xl font-bold mb-4">Reporting and Analytics Module</h1>

      {/* Communication Frequency Report */}
      <div className="flex flex-col mb-4">
        <h2 className="text-xl font-bold mb-2">Communication Frequency Report</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={communicationFrequencyData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="frequency" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Engagement Effectiveness Dashboard */}
      <div className="flex flex-col mb-4">
        <h2 className="text-xl font-bold mb-2">Engagement Effectiveness Dashboard</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={engagementEffectivenessData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="effectiveness" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Overdue Communication Trends */}
      <div className="flex flex-col mb-4">
        <h2 className="text-xl font-bold mb-2">Overdue Communication Trends</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={overdueCommunicationTrendsData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="trend" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default ReportingAnalyticsModule;
