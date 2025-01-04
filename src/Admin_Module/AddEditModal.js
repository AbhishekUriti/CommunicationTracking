// import React, { useState } from "react";
// // import "./styles.css";

// const AddEditModal = ({ onClose, onSave, editMethod }) => {
//   const [name, setName] = useState(editMethod ? editMethod.name : "");
//   const [mandatory, setMandatory] = useState(editMethod ? editMethod.mandatory : false);
//   const [sequence, setSequence] = useState(editMethod ? editMethod.sequence : "");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSave({ id: editMethod ? editMethod.id : null, name, mandatory, sequence });
//   };

//   return (
//     <div className="modal">
//       <div className="modal-content">
//         <h2>{editMethod ? "Edit Communication Method" : "Add Communication Method"}</h2>
//         <form onSubmit={handleSubmit}>
//           <label>
//             Name:
//             <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
//           </label>
//           <label>
//             Mandatory:
//             <input
//               type="checkbox"
//               checked={mandatory}
//               onChange={(e) => setMandatory(e.target.checked)}
//             />
//           </label>
//           <label>
//             Sequence:
//             <input
//               type="number"
//               value={sequence}
//               onChange={(e) => setSequence(Number(e.target.value))}
//               required
//             />
//           </label>
//           <button type="submit">Save</button>
//           <button type="button" onClick={onClose}>
//             Cancel
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AddEditModal;

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
