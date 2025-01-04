import React, { useContext } from "react";
import { AppContext } from "./AppContext";
import "../styles/Notifications.css";

const Notifications = () => {
  const {
    overdueCommunications,
    todaysCommunications,
    showPopup,
    closePopup,
  } = useContext(AppContext);

  return (
    <div>
      <h2>Notifications</h2>

      {/* Popup for overdue communications */}
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <p>You have overdue communications!</p>
            <button onClick={closePopup}>Close</button>
          </div>
        </div>
      )}

      <div>
        <h3>Overdue Communications</h3>
        {overdueCommunications.length > 0 ? (
          overdueCommunications.map((comm, index) => (
            <div key={index} className="notification-card">
              <strong>{comm.company}</strong> - {comm.type}{" "}
              <span className="overdue">(Overdue by {comm.overdueDays} days)</span>
            </div>
          ))
        ) : (
          <p>No overdue communications.</p>
        )}
      </div>

      <div>
        <h3>Today's Communications</h3>
        {todaysCommunications.length > 0 ? (
          todaysCommunications.map((comm, index) => (
            <div key={index} className="notification-card">
              <strong>{comm.company}</strong> - {comm.type}{" "}
              <span className="todays">(Due today)</span>
            </div>
          ))
        ) : (
          <p>No communications scheduled for today.</p>
        )}
      </div>
    </div>
  );
};

export default Notifications;
