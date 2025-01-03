import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

const CalendarView = () => {
  // Example events
  const [events, setEvents] = useState([
    { title: 'TCS - Email', date: '2024-12-01' },
    { title: 'Wipro - Email', date: '2024-12-29' },
  ]);

  const handleDateClick = (info) => {
    alert(`Date clicked: ${info.dateStr}`);
  };

  return (
    <div>
      <h2>Company Communications Calendar</h2>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={events}
        dateClick={handleDateClick}
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,dayGridWeek,dayGridDay',
        }}
      />
    </div>
  );
};

export default CalendarView;
