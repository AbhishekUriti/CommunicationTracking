import React, { useState } from "react";
import "../styles/CommunicationMethodForm.css";

const CommunicationMethodForm = () => {
  const [method, setMethod] = useState({
    name: "",
    sequence: "",
    mandatory: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(method);
    setMethod({ name: "", sequence: "", mandatory: false });
  };

  return (
    <form className="method-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          placeholder="Enter Name"
          value={method.name}
          onChange={(e) => setMethod({ ...method, name: e.target.value })}
        />
      </div>
      <div className="form-group">
        <label htmlFor="sequence">Sequence</label>
        <input
          id="sequence"
          type="number"
          placeholder="Enter Sequence"
          value={method.sequence}
          onChange={(e) => setMethod({ ...method, sequence: e.target.value })}
        />
      </div>

      <div className="form-group">
        <label>
          <input
            type="checkbox"
            checked={method.mandatory}
            onChange={(e) =>
              setMethod({ ...method, mandatory: e.target.checked })
            }
          />
          Mandatory
        </label>
      </div>


      <button type="submit" className="save-button">
        Save Method
      </button>
    </form>
  );
};

export default CommunicationMethodForm;
