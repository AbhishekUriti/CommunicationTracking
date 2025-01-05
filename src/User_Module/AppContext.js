import React, { createContext, useState, useEffect } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [companies, setCompanies] = useState([
    {
      name: "Wipro",
      location: "UK",
      lastCommunications: [
        { type: "Email", date: "2024-12-30" },
        { type: "LinkedIn", date: "2024-11-25" },
      ],
      nextCommunication: { type: "LinkedIn", date: "2024-12-31" },
      highlight: "yellow", 
    },
    {
      name: "TCS",
      location: "USA",
      lastCommunications: [
        { type: "Email", date: "2024-12-01" },
        { type: "LinkedIn Message", date: "2024-11-25" },
      ],
      nextCommunication: { type: "Email", date: "2025-01-03" },
      highlight: "yellow",
    },
  ]);

  const [methods, setMethods] = useState([
    { id: 1, name: "LinkedIn Post", mandatory: true, sequence: 1 },
    { id: 2, name: "LinkedIn Email", mandatory: true, sequence: 2 },
    { id: 3, name: "Phone Call", mandatory: false, sequence: 3 },
  ]);

  const [events, setEvents] = useState([]);
  const [overdueCommunications, setOverdueCommunications] = useState([
     { company: "Wipro", type: "Email", overdueDays: 6 },
    { company: "Wipro", type: "LinkedIn", overdueDays: 41 },
    { company: "TCS", type: "Email", overdueDays: 35 },
    { company: "TCS", type: "LinkedIn Message", overdueDays: 41 },
  ]);
  const [todaysCommunications, setTodaysCommunications] = useState([]);
  const [showPopup, setShowPopup] = useState(false);

 // Sync Events with Companies
useEffect(() => {
  const updatedEvents = [];

  companies.forEach((company) => {
    // Add last communications to events
    if (company.lastCommunications) {
      company.lastCommunications.forEach((comm) => {
        updatedEvents.push({
          title: `${company.name} - ${comm.type}`,
          date: comm.date,
          className: new Date(comm.date) < new Date() ? "overdue" : "",
        });
      });
    }

    // Add next communication to events
    if (company.nextCommunication) {
      updatedEvents.push({
        title: `${company.name} - ${company.nextCommunication.type}`,
        date: company.nextCommunication.date,
        className: "upcoming",
      });
    }
  });

  setEvents(updatedEvents); // Update events dynamically
}, [companies]); // Add `companies` as a dependency



  // Calculate Overdue and Today's Communications
  useEffect(() => {
    const today = new Date().toISOString().split("T")[0]; // Current date in YYYY-MM-DD format
    const overdue = [];
    const dueToday = [];

    companies.forEach((company) => {
      if (company.lastCommunications) {
        company.lastCommunications.forEach((comm) => {
          const commDate = new Date(comm.date).toISOString().split("T")[0];
          if (commDate === today) {
            dueToday.push({
              company: company.name,
              date: comm.date,
              type: comm.type,
            });
          } else if (new Date(comm.date) < new Date(today)) {
            overdue.push({
              company: company.name,
              date: comm.date,
              type: comm.type,
              overdueDays: Math.floor(
                (new Date(today) - new Date(comm.date)) / (1000 * 60 * 60 * 24)
              ),
            });
          }
        });
      }

      if (company.nextCommunication) {
        const nextCommDate = new Date(
          company.nextCommunication.date
        ).toISOString().split("T")[0];
        if (nextCommDate === today) {
          dueToday.push({
            company: company.name,
            date: company.nextCommunication.date,
            type: company.nextCommunication.type,
          });
        }
      }
    });

    setOverdueCommunications(overdue);
    setTodaysCommunications(dueToday);

    setShowPopup(overdue.length > 0);
  }, [companies]);

  const closePopup = () => setShowPopup(false);

  const addCompany = (name, location, lastCommunications, nextCommunication) => {
    const newCompany = {
      name,
      location,
      lastCommunications,
      nextCommunication,
      highlight: "none",
    };
    setCompanies([...companies, newCompany]);
  };

  const addCommunication = (companyName, communication) => {
    const updatedCompanies = companies.map((company) => {
      if (company.name === companyName) {
        return {
          ...company,
          lastCommunications: [
            ...(company.lastCommunications || []),
            communication,
          ],
        };
      }
      return company;
    });

    setCompanies(updatedCompanies);
  };

  return (
    <AppContext.Provider
      value={{
        companies,
        setCompanies,
        methods,
        setMethods,
        overdueCommunications,
        setOverdueCommunications,
        todaysCommunications,
        setTodaysCommunications,
        showPopup,
        closePopup,
        events,
        setEvents,
        addCompany,
        addCommunication,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
