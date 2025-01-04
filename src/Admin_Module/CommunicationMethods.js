import React, { useState,useContext } from "react";
import AddEditModal from "./AddEditModal";
import "../styles/CommunicationMethods.css";
import { AppContext } from "../User_Module/AppContext"; 

const CommunicationMethods = () => {
  const { methods, setMethods } = useContext(AppContext);
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
      <div className="add-communication-button">
        <button onClick={() => setIsModalOpen(true)}>Add Communication Method</button>
      </div>

      
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


