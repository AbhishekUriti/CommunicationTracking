// import React, { useState, useEffect } from "react";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import Notifications from "./User_Module/Notifications";
// import CompanyManagement from "./components/CompanyManagement";
// import CommunicationMethods from "./components/CommunicationMethods";
// import Dashboard from "./User_Module/Dashboard"; // Adjusted path for Dashboard

// function App() {
//   const [companies, setCompanies] = useState([
//     {
//       name: "Wipro",
//       lastCommunications: [
//         { date: "2024-12-30" },
//         { date: "2024-11-25" },
//       ],
//     },
//     {
//       name: "TCS",
//       lastCommunications: [
//         { date: "2024-12-01" },
//         { date: "2024-11-25" },
//       ],
//     },
//     {
//       name: "Company A",
//       lastCommunications: [
//         { date: "2025-01-01" },
//         { date: "2024-12-25" },
//       ],
//     },
//     {
//       name: "Company B",
//       lastCommunications: [{ date: "2024-12-30" }],
//     },
//   ]);

//   const [communicationMethods, setCommunicationMethods] = useState([
//     { name: "LinkedIn Post", description: "", sequence: 1, mandatory: true },
//     { name: "LinkedIn Message", description: "", sequence: 2, mandatory: true },
//   ]);

//   const [notificationCount, setNotificationCount] = useState(0);

//   useEffect(() => {
//     const today = new Date();
//     let count = 0;

//     companies.forEach((company) => {
//       company.lastCommunications.forEach((comm) => {
//         const commDate = new Date(comm.date);
//         const diffDays = Math.floor((today - commDate) / (1000 * 60 * 60 * 24));
//         if (diffDays >= 0) count++;
//       });
//     });

//     setNotificationCount(count);
//   }, [companies]);

//   return (
//     <Router>
//       <div>
//         {/* Navigation Bar */}
//         <nav
//           style={{
//             display: "flex",
//             justifyContent: "space-around",
//             backgroundColor: "#333",
//             padding: "10px",
//           }}
//         >
//           <Link to="/" style={{ color: "white", textDecoration: "none" }}>
//             Home
//           </Link>
//           <Link
//             to="/companies"
//             style={{ color: "white", textDecoration: "none" }}
//           >
//             Companies
//           </Link>
//           <Link
//             to="/communication-methods"
//             style={{ color: "white", textDecoration: "none" }}
//           >
//             Communication Methods
//           </Link>
//           <Link
//             to="/dashboard"
//             style={{ color: "white", textDecoration: "none" }}
//           >
//             Dashboard
//           </Link>
//           <Link
//             to="/notifications"
//             style={{ color: "white", textDecoration: "none" }}
//           >
//             Notifications
//             {notificationCount > 0 && (
//               <span
//                 style={{
//                   backgroundColor: "red",
//                   color: "white",
//                   borderRadius: "50%",
//                   padding: "2px 8px",
//                   marginLeft: "8px",
//                 }}
//               >
//                 {notificationCount}
//               </span>
//             )}
//           </Link>
//           <Link
//             to="/calendar"
//             style={{ color: "white", textDecoration: "none" }}
//           >
//             Calendar
//           </Link>
//           <Link
//             to="/reports"
//             style={{ color: "white", textDecoration: "none" }}
//           >
//             Reports
//           </Link>
//         </nav>

//         {/* Main Content */}
//         <div style={{ padding: "20px" }}>
//           <Routes>
//             <Route
//               path="/"
//               element={<h1>Welcome to the Communication App</h1>}
//             />
//             <Route path="/companies" element={<CompanyManagement />} />
//             <Route
//               path="/communication-methods"
//               element={<CommunicationMethods />}
//             />
//             <Route path="/dashboard" element={<Dashboard />} />
//             <Route
//               path="/notifications"
//               element={<Notifications companies={companies} />}
//             />
//             <Route path="/calendar" element={<h1>Calendar Page</h1>} />
//             <Route path="/reports" element={<h1>Reports Page</h1>} />
//           </Routes>
//         </div>
//       </div>
//     </Router>
//   );
// }

// export default App;
// import CompanyManagement from "./components/CompanyManagement";
// import CommunicationMethods from "./components/CommunicationMethods";
// import Dashboard from "./User_Module/Dashboard";
// import Notifications from "./User_Module/Notifications";
// import React, { useState, useEffect } from "react";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import FullCalendar from "@fullcalendar/react";
// import dayGridPlugin from "@fullcalendar/daygrid";
// // import "./App.css"; // Custom styles for the app

// function App() {
//   const [companies, setCompanies] = useState([
//     {
//       name: "Wipro",
//       lastCommunications: [
//         { date: "2024-12-30" },
//         { date: "2024-11-25" },
//       ],
//     },
//     {
//       name: "TCS",
//       lastCommunications: [
//         { date: "2024-12-01" },
//         { date: "2024-11-25" },
//       ],
//     },
//     {
//       name: "Company A",
//       lastCommunications: [
//         { date: "2025-01-01" },
//         { date: "2024-12-25" },
//       ],
//     },
//     {
//       name: "Company B",
//       lastCommunications: [{ date: "2024-12-30" }],
//     },
//   ]);

//   const [communicationMethods, setCommunicationMethods] = useState([
//     { name: "LinkedIn Post", description: "", sequence: 1, mandatory: true },
//     { name: "LinkedIn Message", description: "", sequence: 2, mandatory: true },
//   ]);

//   const [notificationCount, setNotificationCount] = useState(0);

//   useEffect(() => {
//     const today = new Date();
//     let count = 0;

//     companies.forEach((company) => {
//       company.lastCommunications.forEach((comm) => {
//         const commDate = new Date(comm.date);
//         const diffDays = Math.floor((today - commDate) / (1000 * 60 * 60 * 24));
//         if (diffDays >= 0) count++;
//       });
//     });

//     setNotificationCount(count);
//   }, [companies]);

//   return (
//     <Router>
//       <div>
//         {/* Navigation Bar */}
//         <nav
//           style={{
//             display: "flex",
//             justifyContent: "space-around",
//             backgroundColor: "#333",
//             padding: "10px",
//           }}
//         >
//           <Link to="/" style={{ color: "white", textDecoration: "none" }}>
//             Home
//           </Link>
//           <Link
//             to="/companies"
//             style={{ color: "white", textDecoration: "none" }}
//           >
//             Companies
//           </Link>
//           <Link
//             to="/communication-methods"
//             style={{ color: "white", textDecoration: "none" }}
//           >
//             Communication Methods
//           </Link>
//           <Link
//             to="/dashboard"
//             style={{ color: "white", textDecoration: "none" }}
//           >
//             Dashboard
//           </Link>
//           <Link
//             to="/notifications"
//             style={{ color: "white", textDecoration: "none" }}
//           >
//             Notifications
//             {notificationCount > 0 && (
//               <span
//                 style={{
//                   backgroundColor: "red",
//                   color: "white",
//                   borderRadius: "50%",
//                   padding: "2px 8px",
//                   marginLeft: "8px",
//                 }}
//               >
//                 {notificationCount}
//               </span>
//             )}
//           </Link>
//           <Link
//             to="/calendar"
//             style={{ color: "white", textDecoration: "none" }}
//           >
//             Calendar
//           </Link>
//           <Link
//             to="/reports"
//             style={{ color: "white", textDecoration: "none" }}
//           >
//             Reports
//           </Link>
//         </nav>

//         {/* Main Content */}
//         <div style={{ padding: "20px" }}>
//           <Routes>
//             <Route
//               path="/"
//               element={<h1>Welcome to the Communication App</h1>}
//             />
//             <Route path="/companies" element={<CompanyManagement />} />
//             <Route
//               path="/communication-methods"
//               element={<CommunicationMethods />}
//             />
//             <Route path="/dashboard" element={<Dashboard />} />
//             <Route
//               path="/notifications"
//               element={<Notifications companies={companies} />}
//             />
//             <Route path="/calendar" element={<CalendarView companies={companies} />} />
//             <Route path="/reports" element={<h1>Reports Page</h1>} />
//           </Routes>
//         </div>
//       </div>
//     </Router>
//   );
// }

// function CalendarView({ companies }) {
//   const events = companies.flatMap((company) =>
//     company.lastCommunications.map((comm) => ({
//       title: company.name,
//       date: comm.date,
//     }))
//   );

//   return (
//     <div>
//       <h2>Company Communications Calendar</h2>
//       <FullCalendar
//         plugins={[dayGridPlugin]}
//         initialView="dayGridMonth"
//         events={events}
//         headerToolbar={{
//           left: "prev,next today",
//           center: "title",
//           right: "dayGridMonth,dayGridWeek,dayGridDay",
//         }}
//       />
//     </div>
//   );
// }

// export default App;

import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import CompanyManagement from "./components/CompanyManagement";
import CommunicationMethods from "./components/CommunicationMethods";
import Dashboard from "./User_Module/Dashboard";
import Notifications from "./User_Module/Notifications";
import Reports from "./User_Module/Reports"; // Import the Reports component
// import "./App.css"; // Custom styles for the app

function App() {
  const [companies, setCompanies] = useState([
    {
      name: "Wipro",
      lastCommunications: [
        { date: "2024-12-30" },
        { date: "2024-11-25" },
      ],
    },
    {
      name: "TCS",
      lastCommunications: [
        { date: "2024-12-01" },
        { date: "2024-11-25" },
      ],
    },
    {
      name: "Company A",
      lastCommunications: [
        { date: "2025-01-01" },
        { date: "2024-12-25" },
      ],
    },
    {
      name: "Company B",
      lastCommunications: [{ date: "2024-12-30" }],
    },
  ]);

  const [notificationCount, setNotificationCount] = useState(0);

  useEffect(() => {
    const today = new Date();
    let count = 0;

    companies.forEach((company) => {
      company.lastCommunications.forEach((comm) => {
        const commDate = new Date(comm.date);
        const diffDays = Math.floor((today - commDate) / (1000 * 60 * 60 * 24));
        if (diffDays >= 0) count++;
      });
    });

    setNotificationCount(count);
  }, [companies]);

  return (
    <Router>
      <div>
        {/* Navigation Bar */}
        <nav
          style={{
            display: "flex",
            justifyContent: "space-around",
            backgroundColor: "#333",
            padding: "10px",
          }}
        >
          <Link to="/" style={{ color: "white", textDecoration: "none" }}>
            Home
          </Link>
          <Link
            to="/companies"
            style={{ color: "white", textDecoration: "none" }}
          >
            Companies
          </Link>
          <Link
            to="/communication-methods"
            style={{ color: "white", textDecoration: "none" }}
          >
            Communication Methods
          </Link>
          <Link
            to="/dashboard"
            style={{ color: "white", textDecoration: "none" }}
          >
            Dashboard
          </Link>
          <Link
            to="/notifications"
            style={{ color: "white", textDecoration: "none" }}
          >
            Notifications
            {notificationCount > 0 && (
              <span
                style={{
                  backgroundColor: "red",
                  color: "white",
                  borderRadius: "50%",
                  padding: "2px 8px",
                  marginLeft: "8px",
                }}
              >
                {notificationCount}
              </span>
            )}
          </Link>
          <Link
            to="/calendar"
            style={{ color: "white", textDecoration: "none" }}
          >
            Calendar
          </Link>
          <Link
            to="/reports"
            style={{ color: "white", textDecoration: "none" }}
          >
            Reports
          </Link>
        </nav>

        {/* Main Content */}
        <div style={{ padding: "20px" }}>
          <Routes>
            <Route
              path="/"
              element={<h1>Welcome to the Communication App</h1>}
            />
            <Route path="/companies" element={<CompanyManagement />} />
            <Route
              path="/communication-methods"
              element={<CommunicationMethods />}
            />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route
              path="/notifications"
              element={<Notifications companies={companies} />}
            />
            <Route path="/calendar" element={<CalendarView companies={companies} />} />
            <Route path="/reports" element={<Reports />} /> {/* Add Reports */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

function CalendarView({ companies }) {
  const events = companies.flatMap((company) =>
    company.lastCommunications.map((comm) => ({
      title: company.name,
      date: comm.date,
    }))
  );

  return (
    <div>
      <h2>Company Communications Calendar</h2>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={events}
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,dayGridWeek,dayGridDay",
        }}
      />
    </div>
  );
}

export default App;
