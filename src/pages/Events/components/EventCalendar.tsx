import { useState } from 'react';
import './EventCalendar.css';

interface EventDate {
  day: number;
  month: number;
  year: number;
}

const upcomingEvents: EventDate[] = [
  { day: 22, month: 11, year: 2025 },
  { day: 25, month: 11, year: 2025 },
  { day: 8, month: 12, year: 2025 },
  { day: 28, month: 12, year: 2025 },
  { day: 20, month: 12, year: 2025 },
  { day: 15, month: 1, year: 2026 }
];

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];

const EventCalendar = () => {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());

  const generateCalendar = () => {
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const firstDay = new Date(currentYear, currentMonth, 1).getDay();
    const days = [];

    // Empty cells before first day
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="calendar-day empty"></div>);
    }

    // Day cells
    for (let day = 1; day <= daysInMonth; day++) {
      const isEventDay = upcomingEvents.some(event =>
        event.day === day && event.month === currentMonth + 1 && event.year === currentYear
      );

      days.push(
        <div 
          key={day} 
          className={`calendar-day ${isEventDay ? 'event-day' : ''}`}
        >
          {day}
        </div>
      );
    }

    return days;
  };

  const prevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  return (
    <section className="event-calendar">
      <div className="calendar-container">
        <h2>Upcoming Events Calendar</h2>
        <div className="calendar-view">
          <div className="calendar-header">
            <button className="nav-btn" onClick={prevMonth}>
              <i className="fas fa-chevron-left"></i>
            </button>
            <h3>{monthNames[currentMonth]} {currentYear}</h3>
            <button className="nav-btn" onClick={nextMonth}>
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
          <div className="calendar-grid">
            {generateCalendar()}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventCalendar;
