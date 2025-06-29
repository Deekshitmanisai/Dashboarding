import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import './CalendarPage.css';

function CalendarPage() {
  return (
    <div className="calendar-wrapper">
      <h2>📅 Calendar</h2>
      <div className="calendar-container">
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay'
          }}
          height="auto"
          editable={true}
          selectable={true}
          selectMirror={true}
          dayMaxEvents={true}
          weekends={true}
          events={[
            { title: 'Team Meeting', date: '2024-01-15', color: '#3b82f6' },
            { title: 'Project Review', date: '2024-01-20', color: '#10b981' },
            { title: 'Client Call', date: '2024-01-25', color: '#f59e0b' }
          ]}
        />
      </div>
    </div>
  );
}

export default CalendarPage;