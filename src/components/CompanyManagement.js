import React, { useState } from 'react';
import CompanyForm from './CompanyForm';
import '../styles/CompanyManagement.css';


const CompanyManagement = () => {
  const [companies, setCompanies] = useState([
    { id: 1, name: 'Wipro', location: 'UK', linkedin: '', emails: [], phones: [], comments: '', periodicity: '2 weeks' },
    { id: 2, name: 'TCS', location: 'USA', linkedin: '', emails: [], phones: [], comments: '', periodicity: '2 weeks' },
  ]);
  
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
                <button onClick={() => setEditingCompany(company)}>Edit</button>
                <button onClick={() => handleDeleteCompany(company.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CompanyManagement;


// import React, { useState } from "react";
// import CompanyForm from "./CompanyForm";
// import "../styles/CompanyManagement.css";

// const CompanyManagement = ({ companies, setCompanies }) => {
//   const [editingCompany, setEditingCompany] = useState(null);

//   const handleAddCompany = (company) => {
//     setCompanies([...companies, { id: companies.length + 1, ...company }]);
//   };

//   const handleEditCompany = (updatedCompany) => {
//     setCompanies(
//       companies.map((company) =>
//         company.id === updatedCompany.id ? updatedCompany : company
//       )
//     );
//     setEditingCompany(null);
//   };

//   const handleDeleteCompany = (id) => {
//     setCompanies(companies.filter((company) => company.id !== id));
//   };

//   return (
//     <div className="company-management">
//       <h2>Company Management</h2>
//       <button onClick={() => setEditingCompany({})}>Add Company</button>
//       {editingCompany && (
//         <CompanyForm
//           company={editingCompany}
//           onSave={editingCompany.id ? handleEditCompany : handleAddCompany}
//           onCancel={() => setEditingCompany(null)}
//         />
//       )}
//       <table>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Location</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {companies.map((company) => (
//             <tr key={company.id}>
//               <td>{company.name}</td>
//               <td>{company.location}</td>
//               <td>
//                 <button onClick={() => setEditingCompany(company)}>Edit</button>
//                 <button onClick={() => handleDeleteCompany(company.id)}>
//                   Delete
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default CompanyManagement;
