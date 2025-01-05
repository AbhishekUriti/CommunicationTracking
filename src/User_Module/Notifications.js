import React, { useContext, useState } from "react";
import { AppContext } from "./AppContext";
import "../styles/Notifications.css";

const Notifications = () => {
  const {
    overdueCommunications,
    setOverdueCommunications,
    todaysCommunications,
    setTodaysCommunications,
    companies,
    setCompanies,
    showPopup,
    closePopup,
  } = useContext(AppContext);

  const [filter, setFilter] = useState("");
  const [rescheduleModal, setRescheduleModal] = useState(false);
  const [selectedCommunication, setSelectedCommunication] = useState(null);
  const [newDate, setNewDate] = useState("");

  // Filtered data based on user input
  const filteredOverdue = overdueCommunications.filter((comm) =>
    comm.company.toLowerCase().includes(filter.toLowerCase())
  );

  const filteredToday = todaysCommunications.filter((comm) =>
    comm.company.toLowerCase().includes(filter.toLowerCase())
  );

  // Mark as Done function
  const markAsDone = (comm, type) => {
    if (type === "overdue") {
      setOverdueCommunications(
        overdueCommunications.filter((c) => c !== comm)
      );
    } else if (type === "today") {
      setTodaysCommunications(
        todaysCommunications.filter((c) => c !== comm)
      );
    }
  };

  // Reschedule function
  const reschedule = (comm) => {
    setSelectedCommunication(comm);
    setRescheduleModal(true);
  };

 const handleReschedule = () => {
  if (!newDate) return;

  // Update the specific company's communications
  const updatedCompanies = companies.map((company) => {
    if (company.name === selectedCommunication.company) {
      return {
        ...company,
        lastCommunications: [
          ...(company.lastCommunications || []),
          {
            type: selectedCommunication.type,
            date: newDate,
          },
        ],
      };
    }
    return company;
  });

  // Update companies array in AppContext
  setCompanies(updatedCompanies);

  console.log(
    `Rescheduled ${selectedCommunication.company}'s communication to ${newDate}`
  );

  // Close modal and reset
  setRescheduleModal(false);
  setSelectedCommunication(null);
  setNewDate("");
};


  return (
    <div className="notifications">
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

      {/* Filter Input */}
      <div className="filter">
        <input
          type="text"
          placeholder="Filter by company name"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>

      {/* Overdue Communications */}
      <div>
        <h3>Overdue Communications</h3>
        {filteredOverdue.length > 0 ? (
          filteredOverdue.map((comm, index) => (
            <div key={index} className="notification-card overdue">
              <strong>{comm.company}</strong> - {comm.type}{" "}
              <span>(Overdue by {comm.overdueDays} days)</span>
              <div className="actions">
                <button onClick={() => markAsDone(comm, "overdue")}>
                  Mark as Done
                </button>
                <button onClick={() => reschedule(comm)}>Reschedule</button>
              </div>
            </div>
          ))
        ) : (
          <p>No overdue communications for the selected filter.</p>
        )}
      </div>

      {/* Today's Communications */}
      <div>
        <h3>Today's Communications</h3>
        {filteredToday.length > 0 ? (
          filteredToday.map((comm, index) => (
            <div key={index} className="notification-card todays">
              <strong>{comm.company}</strong> - {comm.type}{" "}
              <span>(Due today)</span>
              <div className="actions">
                <button  onClick={() => markAsDone(comm, "today")}>
                  Mark as Done
                </button>
                <button  onClick={() => reschedule(comm)}>Reschedule</button>
              </div>
            </div>
          ))
        ) : (
          <p>No communications scheduled for today for the selected filter.</p>
        )}
      </div>

      {/* Reschedule Modal */}
      {rescheduleModal && (
        <div className="modal">
          <div className="modal-content">
            <h3>Reschedule Communication</h3>
            <p>
              Reschedule <strong>{selectedCommunication?.company}</strong> -{" "}
              {selectedCommunication?.type}
            </p>
            <input
              type="date"
              value={newDate}
              onChange={(e) => setNewDate(e.target.value)}
              required
            />
            <div className="modal-actions">
              <button onClick={handleReschedule}>Submit</button>
              <button
                onClick={() => {
                  setRescheduleModal(false);
                  setSelectedCommunication(null);
                  setNewDate("");
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Notifications;
