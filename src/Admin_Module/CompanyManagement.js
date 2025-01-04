import React, { useState,useContext } from 'react';
import CompanyForm from './CompanyForm';
import '../styles/CompanyManagement.css';
import { AppContext } from "../User_Module/AppContext";


const CompanyManagement = () => {
   const {companies, setCompanies} =useContext(AppContext);
   const [editingCompany, setEditingCompany] = useState(null);

  const handleAddCompany = (company) => {
    setCompanies([...companies, { id: companies.length + 1, ...company }]);
  };

  const handleEditCompany = (updatedCompany) => {
    setCompanies(companies.map((company) => (company.id === updatedCompany.id ? updatedCompany : company)));
    setEditingCompany(null);
  };

  const handleDeleteCompany = (id) => {
    setCompanies(companies.filter((company) => company.id !== id));
  };

  return (
    <div className="company-management">
      <h2>Company Management</h2>
      <button onClick={() => setEditingCompany({})}>Add Company</button>
      {editingCompany && (
        <CompanyForm
          company={editingCompany}
          onSave={editingCompany.id ? handleEditCompany : handleAddCompany}
          onCancel={() => setEditingCompany(null)}
        />
      )}
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
                <button onClick={() => setEditingCompany(company)}>✏️</button>
                <button onClick={() => handleDeleteCompany(company.id)}>🗑️</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CompanyManagement;
