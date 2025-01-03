import React, { useEffect, useState } from "react";
import "../styles/Notifications.css";

const Notifications = ({ companies }) => {
  const [overdueCommunications, setOverdueCommunications] = useState([]);
  const [todaysCommunications, setTodaysCommunications] = useState([]);

  useEffect(() => {
    const today = new Date();
    const overdue = [];
    const dueToday = [];

    companies.forEach((company) => {
      company.lastCommunications.forEach((comm) => {
        const commDate = new Date(comm.date);
        const diffDays = Math.floor((today - commDate) / (1000 * 60 * 60 * 24));

        if (diffDays > 0) {
          overdue.push({
            company: company.name,
            date: comm.date,
            dueDaysAgo: diffDays,
          });
        } else if (diffDays === 0) {
          dueToday.push({
            company: company.name,
            date: comm.date,
          });
        }
      });
    });

    setOverdueCommunications(overdue);
    setTodaysCommunications(dueToday);
  }, [companies]);

  return (
    <div className="notifications">
      <h2>Company Notifications</h2>

      <div className="overdue-section">
        <h3>Overdue Communications</h3>
        {overdueCommunications.length > 0 ? (
          overdueCommunications.map((comm, index) => (
            <div key={index} className="notification-card overdue">
              <strong>{comm.company}</strong>
              <p>
                - Last Communication: {comm.date} - Due {comm.dueDaysAgo} days
                ago
              </p>
            </div>
          ))
        ) : (
          <p>No overdue communications.</p>
        )}
      </div>

      <div className="today-section">
        <h3>Today's Communications</h3>
        {todaysCommunications.length > 0 ? (
          todaysCommunications.map((comm, index) => (
            <div key={index} className="notification-card today">
              <strong>{comm.company}</strong>
              <p>- Last Communication: {comm.date}</p>
            </div>
          ))
        ) : (
          <p>No communications due today.</p>
        )}
      </div>
    </div>
  );
};

export default Notifications;
