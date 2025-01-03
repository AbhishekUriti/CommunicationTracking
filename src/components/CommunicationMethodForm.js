import React, { useState } from "react";
import '../styles/CommunicationMethodForm.css';



const CommunicationMethodForm = () => {
  const [method, setMethod] = useState({ name: "", description: "", mandatory: false });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(method);
    setMethod({ name: "", description: "", mandatory: false });
  };

  return (
    <form className="method-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Method Name"
        value={method.name}
        onChange={(e) => setMethod({ ...method, name: e.target.value })}
      />
      <textarea
        placeholder="Description"
        value={method.description}
        onChange={(e) => setMethod({ ...method, description: e.target.value })}
      ></textarea>
      <label>
        <input
          type="checkbox"
          checked={method.mandatory}
          onChange={(e) => setMethod({ ...method, mandatory: e.target.checked })}
        />
        Mandatory
      </label>
      <button type="submit">Save Method</button>
    </form>
  );
};

export default CommunicationMethodForm;



// import React, { useState } from "react";
// import "../styles/CommunicationMethodForm.css";

// const CommunicationMethodForm = ({ onSave }) => {
//   const [method, setMethod] = useState({ name: "", description: "", mandatory: false });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSave(method);
//     setMethod({ name: "", description: "", mandatory: false });
//   };

//   return (
//     <form className="method-form" onSubmit={handleSubmit}>
//       <input
//         type="text"
//         placeholder="Method Name"
//         value={method.name}
//         onChange={(e) => setMethod({ ...method, name: e.target.value })}
//       />
//       <textarea
//         placeholder="Description"
//         value={method.description}
//         onChange={(e) => setMethod({ ...method, description: e.target.value })}
//       ></textarea>
//       <label>
//         <input
//           type="checkbox"
//           checked={method.mandatory}
//           onChange={(e) => setMethod({ ...method, mandatory: e.target.checked })}
//         />
//         Mandatory
//       </label>
//       <button type="submit">Save Method</button>
//     </form>
//   );
// };

// export default CommunicationMethodForm;
