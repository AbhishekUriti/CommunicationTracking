import React, { createContext, useState, useEffect } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  // State for companies
  const [companies, setCompanies] = useState([
    {
      name: "Wipro",
      location: "UK",
      lastCommunications: [
        { type: "Email", date: "2024-12-30" },
        { type: "LinkedIn", date: "2024-11-25" },
      ],
      nextCommunication: { type: "LinkedIn", date: "2024-12-31" },
    },
    {
      name: "TCS",
      location: "USA",
      lastCommunications: [
        { type: "Email", date: "2024-12-01" },
        { type: "LinkedIn Message", date: "2024-11-25" },
      ],
      nextCommunication: { type: "Email", date: "2025-01-03" },
    },
  ]);

  // State for communication methods
  const [methods, setMethods] = useState([
    { id: 1, name: "LinkedIn Post", mandatory: true, sequence: 1 },
    { id: 2, name: "LinkedIn Email", mandatory: true, sequence: 2 },
    { id: 3, name: "Phone Call", mandatory: false, sequence: 3 },
  ]);

  // State for calendar events
  const [events, setEvents] = useState([]);

  // State for overdue and today's communications
  const [overdueCommunications, setOverdueCommunications] = useState([]);
  const [todaysCommunications, setTodaysCommunications] = useState([]);

  // State for showing popup
  const [showPopup, setShowPopup] = useState(false);

  // Calculate Overdue and Today's Communications
  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];
    const overdue = [];
    const dueToday = [];

    companies.forEach((company) => {
      // Process last communications
      if (company.lastCommunications) {
        company.lastCommunications.forEach((comm) => {
          const commDate = new Date(comm.date).toISOString().split("T")[0];
          if (commDate === today) {
            dueToday.push({
              company: company.name,
              type: comm.type,
              date: comm.date,
            });
          } else if (new Date(comm.date) < new Date(today)) {
            overdue.push({
              company: company.name,
              type: comm.type,
              date: comm.date,
              overdueDays: Math.floor(
                (new Date(today) - new Date(comm.date)) / (1000 * 60 * 60 * 24)
              ),
            });
          }
        });
      }

      // Process next communications
      if (company.nextCommunication) {
        const nextCommDate = new Date(
          company.nextCommunication.date
        ).toISOString().split("T")[0];
        if (nextCommDate === today) {
          dueToday.push({
            company: company.name,
            type: company.nextCommunication.type,
            date: company.nextCommunication.date,
          });
        }
      }
    });

    setOverdueCommunications(overdue);
    setTodaysCommunications(dueToday);

    setShowPopup(overdue.length > 0);
  }, [companies]);

  // Sync Events with Companies
        useEffect(() => {
        const updatedEvents = companies.flatMap((company) => [
            ...(company.lastCommunications
            ? company.lastCommunications.map((comm) => ({
                title: `${company.name} - ${comm.type}`,
                start: comm.date,
                }))
            : []),
            ...(company.nextCommunication
            ? [
                {
                    title: `${company.name} - ${company.nextCommunication.type}`,
                    start: company.nextCommunication.date,
                },
                ]
            : []),
        ]);

        setEvents(updatedEvents);
        }, [companies]);


  // Function to reschedule a communication
  const rescheduleCommunication = (companyName, communicationType, newDate) => {
    const updatedCompanies = companies.map((company) => {
      if (company.name === companyName) {
        return {
          ...company,
          lastCommunications: [
            ...(company.lastCommunications || []),
            { type: communicationType, date: newDate },
          ],
          nextCommunication: { ...company.nextCommunication, date: newDate },
        };
      }
      return company;
    });

    setCompanies(updatedCompanies);
  };

  // Function to close the popup
  const closePopup = () => setShowPopup(false);

  // Function to add a new company
  const addCompany = (name, location, lastCommunications, nextCommunication) => {
    const newCompany = {
      name,
      location,
      lastCommunications,
      nextCommunication,
    };
    setCompanies([...companies, newCompany]);
  };

  // Function to add a communication to a company
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

  // Provide the context values to children
  return (
    <AppContext.Provider
      value={{
        companies,
        setCompanies,
        methods,
        setMethods,
        events,
        setEvents,
        overdueCommunications,
        todaysCommunications,
        showPopup,
        closePopup,
        rescheduleCommunication,
        addCompany,
        addCommunication,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
