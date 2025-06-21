import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import './CalendarPage.css';

function CalendarPage() {
  return (
    <div className="calendar-wrapper">
      <h2>📅 Calendar</h2>
      <div className="calendar-container">
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          height="auto" // Auto-resize based on content
        />
      </div>
    </div>
  );
}

export default CalendarPage;