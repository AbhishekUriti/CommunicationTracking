import React, { useState } from "react";
// import "./styles.css";

const AddEditModal = ({ onClose, onSave, editMethod }) => {
  const [name, setName] = useState(editMethod ? editMethod.name : "");
  const [mandatory, setMandatory] = useState(editMethod ? editMethod.mandatory : false);
  const [sequence, setSequence] = useState(editMethod ? editMethod.sequence : "");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ id: editMethod ? editMethod.id : null, name, mandatory, sequence });
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>{editMethod ? "Edit Communication Method" : "Add Communication Method"}</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
          </label>
          <label>
            Mandatory:
            <input
              type="checkbox"
              checked={mandatory}
              onChange={(e) => setMandatory(e.target.checked)}
            />
          </label>
          <label>
            Sequence:
            <input
              type="number"
              value={sequence}
              onChange={(e) => setSequence(Number(e.target.value))}
              required
            />
          </label>
          <button type="submit">Save</button>
          <button type="button" onClick={onClose}>
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddEditModal;
