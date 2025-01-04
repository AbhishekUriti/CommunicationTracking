import React, { useState, useEffect } from "react";

const AddEditModal = ({ onClose, onSave, editMethod }) => {
  const [form, setForm] = useState({
    name: "",
    mandatory: false,
    sequence: "",
  });

  useEffect(() => {
    if (editMethod) {
      setForm(editMethod);
    }
  }, [editMethod]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(form);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h3>{editMethod ? "Edit Method" : "Add Method"}</h3>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Mandatory:
            <input
              type="checkbox"
              name="mandatory"
              checked={form.mandatory}
              onChange={handleChange}
            />
          </label>
          <label>
            Sequence:
            <input
              type="number"
              name="sequence"
              value={form.sequence}
              onChange={handleChange}
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
