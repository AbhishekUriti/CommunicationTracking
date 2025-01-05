import React, { useContext } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { AppContext } from "./AppContext";

const CalendarView = () => {
  const { events } = useContext(AppContext);


  return (
    <div className="calendar-container">
      <h2 className="calendar-title">Company Communications Calendar</h2>
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
