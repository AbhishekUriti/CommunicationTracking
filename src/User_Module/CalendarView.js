import React, { useContext } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import resourceTimelinePlugin from "@fullcalendar/resource-timeline"; // Scheduler plugin
import { AppContext } from "./AppContext";

const CalendarView = () => {
  const { events } = useContext(AppContext);

  return (
    <div className="calendar-container">
      <h2>Company Communications Calendar</h2>
      <FullCalendar
        plugins={[dayGridPlugin, resourceTimelinePlugin]}
        initialView="resourceTimelineDay"
        events={events}
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,resourceTimelineDay,dayGridWeek",
        }}
        editable={true}
        eventClick={(info) => alert(`Event: ${info.event.title}`)}
        resourceAreaHeaderContent="Resources"
        schedulerLicenseKey="GPL-My-Project-Is-Open-Source"
      />
    </div>
  );
};

export default CalendarView;
