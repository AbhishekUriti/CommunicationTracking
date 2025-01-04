import React, { useState } from "react";
import '../styles/Dashboard.css';


const Dashboard = () => {
  const [companies, setCompanies] = useState([
    {
      name: "Wipro",
      lastCommunications: [
        { type: "Email", date: "2024-12-30" },
        { type: "LinkedIn", date: "2024-11-25" },
      ],
      nextCommunication: { type: "LinkedIn", date: "2024-12-31" },
      highlight: "none", // "red", "yellow", "none"
    },
    {
      name: "TCS",
      lastCommunications: [
        { type: "Email", date: "2024-12-01" },
        { type: "LinkedIn Message", date: "2024-11-25" },
      ],
      nextCommunication: { type: "Email", date: "2025-01-03" },
      highlight: "yellow",
    },
  ]);

  const [selectedCompany, setSelectedCompany] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [newCommunication, setNewCommunication] = useState({
    type: "",
    date: "",
    notes: "",
  });

  const openModal = (company) => {
    setSelectedCompany(company);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedCompany(null);
    setNewCommunication({ type: "", date: "", notes: "" });
  };

  const handleSubmit = () => {
    const updatedCompanies = companies.map((company) =>
      company.name === selectedCompany.name
        ? {
            ...company,
            lastCommunications: [
              { type: newCommunication.type, date: newCommunication.date },
              ...company.lastCommunications.slice(0, 4),
            ],
            highlight: "none",
          }
        : company
    );
    setCompanies(updatedCompanies);
    closeModal();
  };

  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <table>
        <thead>
          <tr>
            <th>Company Name</th>
            <th>Last Five Communications</th>
            <th>Next Scheduled Communication</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {companies.map((company, index) => (
            <tr
              key={index}
              className={company.highlight}
            >
              <td>{company.name}</td>
              <td>
                {company.lastCommunications.map((comm, idx) => (
                  <span key={idx} className="tooltip">
                    {comm.type} ({comm.date})
                    <span className="tooltip-text">
                      Notes for {comm.type} on {comm.date}
                    </span>
                  </span>
                ))}
              </td>
              <td>
                {company.nextCommunication.type} (
                {company.nextCommunication.date})
              </td>
              <td>
                <button onClick={() => openModal(company)}>
                  Add Communication
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {modalVisible && (
        <div className="modal">
          <h3>Log Communication for {selectedCompany.name}</h3>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
          >
            <label>
              Type of Communication:
              <select
                value={newCommunication.type}
                onChange={(e) =>
                  setNewCommunication({ ...newCommunication, type: e.target.value })
                }
                required
              >
                <option value="">Select</option>
                <option value="Email">Email</option>
                <option value="LinkedIn Post">LinkedIn Post</option>
                <option value="LinkedIn Message">LinkedIn Message</option>
              </select>
            </label>
            <label>
              Date:
              <input
                type="date"
                value={newCommunication.date}
                onChange={(e) =>
                  setNewCommunication({ ...newCommunication, date: e.target.value })
                }
                required
              />
            </label>
            <label>
              Notes:
              <textarea
                value={newCommunication.notes}
                onChange={(e) =>
                  setNewCommunication({ ...newCommunication, notes: e.target.value })
                }
              />
            </label>
            <button type="submit">Submit</button>
            <button type="button" onClick={closeModal}>
              Cancel
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
