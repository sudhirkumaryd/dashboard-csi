// src/components/Calendar.js
import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const events = [
  {
    title: 'Big Meeting',
    allDay: true,
    start: new Date(2024, 5, 7),
    end: new Date(2024, 5, 7),
  },
  {
    title: 'Vacation',
    start: new Date(2024, 5, 13),
    end: new Date(2024, 5, 20),
  },
];

const CalendarComponent = () => (
  <div style={{ height: 500 }}>
    <Calendar
      localizer={localizer}
      events={events}
      startAccessor="start"
      endAccessor="end"
      style={{ height: '100%' }}
    />
  </div>
);

export default CalendarComponent;
