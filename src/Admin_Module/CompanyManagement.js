import React, { useState, useContext } from "react";
import CompanyForm from "./CompanyForm";
import "../styles/CompanyManagement.css";
import { AppContext } from "../User_Module/AppContext";

const Modal = ({ children, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};  

const CompanyManagement = () => {
  const { companies, setCompanies } = useContext(AppContext);
  const [editingCompany, setEditingCompany] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddCompany = (company) => {
    setCompanies([...companies, { id: companies.length + 1, ...company }]);
    setIsModalOpen(false);
  };

  const handleEditCompany = (updatedCompany) => {
    setCompanies(
      companies.map((company) =>
        company.id === updatedCompany.id ? updatedCompany : company
      )
    );
    setEditingCompany(null);
    setIsModalOpen(false);
  };

  const handleDeleteCompany = (id) => {
    setCompanies(companies.filter((company) => company.id !== id));
  };

  const openModal = (company = {}) => {
    setEditingCompany(company);
    setIsModalOpen(true);
  };

  return (
    <div className="company-management">
      <h2>Company Management</h2>
      <div className="add-company-button">
        <button onClick={() => openModal()}>Add Company</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Location</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {companies.map((company) => (
            <tr key={company.id}>
              <td>{company.name}</td>
              <td>{company.location}</td>
              <td>
                <button onClick={() => openModal(company)}>✏️</button>
                <button onClick={() => handleDeleteCompany(company.id)}>🗑️</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <CompanyForm
            company={editingCompany}
            onSave={editingCompany.id ? handleEditCompany : handleAddCompany}
            onCancel={() => setIsModalOpen(false)}
          />
        </Modal>
      )}
    </div>
  );
};

export default CompanyManagement;
