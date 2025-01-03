import React, { useState } from "react";
import AddEditModal from "./AddEditModal";
import "../styles/CommunicationMethods.css";

const CommunicationMethods = () => {
  const [methods, setMethods] = useState([
    { id: 1, name: "LinkedIn Post", mandatory: true, sequence: 1 },
    { id: 2, name: "LinkedIn Email", mandatory: true, sequence: 2 },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editMethod, setEditMethod] = useState(null);

  const handleDelete = (id) => {
    setMethods(methods.filter((method) => method.id !== id));
  };

  const handleEdit = (method) => {
    setEditMethod(method);
    setIsModalOpen(true);
  };

  const handleAddEdit = (newMethod) => {
    if (editMethod) {
      setMethods(methods.map((m) => (m.id === editMethod.id ? newMethod : m)));
    } else {
      setMethods([...methods, { ...newMethod, id: methods.length + 1 }]);
    }
    setEditMethod(null);
    setIsModalOpen(false);
  };

  return (
    <div className="communication-methods">
      <h2>Communication Method Management</h2>
      <button onClick={() => setIsModalOpen(true)}>Add Communication Method</button>
      <table>
        <thead>
          <tr>
            <th>Method</th>
            <th>Mandatory</th>
            <th>Sequence</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {methods.map((method) => (
            <tr key={method.id}>
              <td>{method.name}</td>
              <td>{method.mandatory ? "Yes" : "No"}</td>
              <td>{method.sequence}</td>
              <td>
                <button onClick={() => handleEdit(method)}>✏️</button>
                <button onClick={() => handleDelete(method.id)}>🗑️</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isModalOpen && (
        <AddEditModal
          onClose={() => setIsModalOpen(false)}
          onSave={handleAddEdit}
          editMethod={editMethod}
        />
      )}
    </div>
  );
};

export default CommunicationMethods;


// import React from "react";

// function CommunicationMethods() {
//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>Communication Method Management</h2>
//       <button style={{ marginBottom: "20px", padding: "10px 20px" }}>
//         Add Communication Method
//       </button>
//       <table style={{ width: "100%", borderCollapse: "collapse" }}>
//         <thead>
//           <tr>
//             <th style={{ border: "1px solid #ddd", padding: "8px" }}>Method</th>
//             <th style={{ border: "1px solid #ddd", padding: "8px" }}>Mandatory</th>
//             <th style={{ border: "1px solid #ddd", padding: "8px" }}>Sequence</th>
//             <th style={{ border: "1px solid #ddd", padding: "8px" }}>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td style={{ border: "1px solid #ddd", padding: "8px" }}>LinkedIn Post</td>
//             <td style={{ border: "1px solid #ddd", padding: "8px" }}>Yes</td>
//             <td style={{ border: "1px solid #ddd", padding: "8px" }}>1</td>
//             <td style={{ border: "1px solid #ddd", padding: "8px" }}>
//               <button style={{ marginRight: "5px" }}>✏️</button>
//               <button>🗑️</button>
//             </td>
//           </tr>
//           <tr>
//             <td style={{ border: "1px solid #ddd", padding: "8px" }}>LinkedIn Email</td>
//             <td style={{ border: "1px solid #ddd", padding: "8px" }}>Yes</td>
//             <td style={{ border: "1px solid #ddd", padding: "8px" }}>2</td>
//             <td style={{ border: "1px solid #ddd", padding: "8px" }}>
//               <button style={{ marginRight: "5px" }}>✏️</button>
//               <button>🗑️</button>
//             </td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default CommunicationMethods;


// import React, { useState } from "react";
// import CommunicationMethodForm from "./CommunicationMethodForm";
// import "../styles/CommunicationMethods.css";

// const CommunicationMethods = () => {
//   const [methods, setMethods] = useState([
//     { id: 1, name: "LinkedIn Post", description: "Share posts on LinkedIn", mandatory: true, sequence: 1 },
//     { id: 2, name: "LinkedIn Email", description: "Send direct messages", mandatory: true, sequence: 2 },
//   ]);

//   const [isFormVisible, setIsFormVisible] = useState(false);

//   const handleAddMethod = (newMethod) => {
//     setMethods([...methods, { ...newMethod, id: methods.length + 1, sequence: methods.length + 1 }]);
//     setIsFormVisible(false);
//   };

//   const handleDelete = (id) => {
//     setMethods(methods.filter((method) => method.id !== id));
//   };

//   return (
//     <div className="communication-methods">
//       <h2>Communication Method Management</h2>
//       <button onClick={() => setIsFormVisible(!isFormVisible)}>
//         {isFormVisible ? "Close Form" : "Add Communication Method"}
//       </button>

//       {isFormVisible && <CommunicationMethodForm onSave={handleAddMethod} />}

//       <table>
//         <thead>
//           <tr>
//             <th>Method</th>
//             <th>Description</th>
//             <th>Mandatory</th>
//             <th>Sequence</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {methods.map((method) => (
//             <tr key={method.id}>
//               <td>{method.name}</td>
//               <td>{method.description}</td>
//               <td>{method.mandatory ? "Yes" : "No"}</td>
//               <td>{method.sequence}</td>
//               <td>
//                 <button onClick={() => handleDelete(method.id)}>🗑️</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default CommunicationMethods;
