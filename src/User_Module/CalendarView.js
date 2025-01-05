import React, { useContext, useContext } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { AppContext } from "./AppContext";

const CalendarView = () => {
  const [events, setEvents] = useContext(AppContext);

  // Function to add a new event
  const addEvent = (title, date) => {
    setEvents((prevEvents) => [
      ...prevEvents,
      {
        title,
        start: date,
        allDay: true,
      },
    ]);
  };

  // Example: Add a new event when needed (you can trigger this from a button)
  const handleAddEvent = () => {
    const newEventTitle = "Wipro - Call"; // Example new event
    const newEventDate = "2025-01-06"; // Example new date
    addEvent(newEventTitle, newEventDate);
  };

  return (
    <div className="calendar-container">
      <h2 className="calendar-title">Company Communications Calendar</h2>
      <button onClick={handleAddEvent}>Add New Event</button> {/* Button to add a new event */}
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={events}
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,dayGridWeek,dayGridDay",
        }}
        height="auto"
        contentHeight={600}
        buttonText={{
          today: "Today",
          month: "Month",
          week: "Week",
          day: "Day",
        }}
      />
    </div>
  );
};

export default CalendarView;
