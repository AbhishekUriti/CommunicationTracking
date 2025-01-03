import React from "react";

const ActivityLog = () => {
  const activityLogData = [
    { id: 1, activity: "User logged in", timestamp: "2024-12-30 10:00 AM" },
    { id: 2, activity: "User updated profile", timestamp: "2024-12-30 11:00 AM" },
    { id: 3, activity: "Email sent to client", timestamp: "2024-12-30 01:00 PM" },
  ];

  return (
    <div>
      <h3>Activity Log</h3>
      <table border="1" cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>ID</th>
            <th>Activity</th>
            <th>Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {activityLogData.map((log) => (
            <tr key={log.id}>
              <td>{log.id}</td>
              <td>{log.activity}</td>
              <td>{log.timestamp}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ActivityLog;
