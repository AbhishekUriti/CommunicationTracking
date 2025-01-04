import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [companies, setCompanies] = useState([
    { name: "Wipro", location: "UK", communications: [] },
    { name: "TCS", location: "USA", communications: [] },
  ]);
  const [methods, setMethods] = useState([
    { id: 1, name: "LinkedIn Post", mandatory: true, sequence: 1 },
    { id: 2, name: "LinkedIn Email", mandatory: true, sequence: 2 },
  ]);
  return (
    <AppContext.Provider value={{ companies, setCompanies,methods, setMethods }}>
      {children}
    </AppContext.Provider>
  );
};
