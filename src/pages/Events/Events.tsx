import { useState } from 'react';
import Footer from '../../components/Footer/Footer';
import './Events.css';
import EventCalendar from './components/EventCalendar';
import Newsletter from './components/Newsletter';

interface Event {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  date: { day: string; month: string };
  location: string;
  time: string;
  status: 'upcoming' | 'past';
  meta?: string;
}

const events: Event[] = [
  {
    id: 1,
    title: 'Financial Literacy for Women',
    category: 'Workshop',
    description: 'Learn essential financial planning skills, investment strategies, and budgeting techniques to secure your financial future.',
    image: '/gallery/events/event1.webp',
    date: { day: '22', month: 'Nov' },
    location: 'Community Center',
    time: '2:00 PM - 5:00 PM',
    status: 'upcoming'
  },
  {
    id: 2,
    title: 'Women in Business Networking Brunch',
    category: 'Community',
    description: 'Connect with like-minded women entrepreneurs and professionals over brunch. Build meaningful relationships and expand your network.',
    image: '/gallery/events/event3.jpg',
    date: { day: '25', month: 'Nov' },
    location: 'The Sky Lounge',
    time: '10:00 AM - 1:00 PM',
    status: 'upcoming'
  },
  {
    id: 3,
    title: 'Mental Health & Wellness',
    category: 'Workshop',
    description: 'Prioritize your mental health with practical strategies for stress management, self-care, and maintaining work-life balance.',
    image: '/gallery/events/event5.jpeg',
    date: { day: '08', month: 'Dec' },
    location: 'Wellness Center',
    time: '6:00 PM - 8:30 PM',
    status: 'upcoming'
  },
  {
    id: 4,
    title: 'Career Development Panel Discussion',
    category: 'Community',
    description: 'Industry leaders shared insights on career advancement, overcoming workplace challenges, and building professional confidence.',
    image: '/gallery/events/event8.jpeg',
    date: { day: '15', month: 'JAN' },
    location: 'Business Hub',
    time: '',
    meta: '85 Attendees',
    status: 'past'
  },
  {
    id: 5,
    title: 'Digital Skills for Modern Women',
    category: 'Workshop',
    description: 'Participants learned essential digital marketing, social media management, and e-commerce skills to grow their businesses online.',
    image: '/gallery/events/event4.jpeg',
    date: { day: '28', month: 'DEC' },
    location: 'Tech Campus',
    time: '',
    meta: '62 Attendees',
    status: 'past'
  },
  {
    id: 6,
    title: 'Holiday Charity Drive & Celebration',
    category: 'Community',
    description: 'Our community came together to support local families in need while celebrating the holiday season with joy and gratitude.',
    image: '/gallery/events/event3.jpg',
    date: { day: '20', month: 'DEC' },
    location: 'Community Hall',
    time: '',
    meta: '150 Families Helped',
    status: 'past'
  }
];

const Events = () => {
  const [filter, setFilter] = useState('all');

  const filteredEvents = events.filter(event => {
    if (filter === 'all') return true;
    if (filter === 'upcoming') return event.status === 'upcoming';
    if (filter === 'workshops') return event.category === 'Workshop';
    if (filter === 'community') return event.category === 'Community';
    if (filter === 'past') return event.status === 'past';
    return true;
  });

  return (
    <div className="events-page">
      {/* Events Hero Section */}
      <section className="events-hero">
        <div className="events-hero-content">
          <h1>Our Events</h1>
          <p>Empowering women through meaningful experiences, workshops, and community gatherings</p>
        </div>
      </section>

      {/* Events Filter */}
      <section className="events-filter">
        <div className="filter-container">
          <h3>Filter Events</h3>
          <div className="filter-buttons">
            <button className={`filter-btn ${filter === 'all' ? 'active' : ''}`} onClick={() => setFilter('all')}>All Events</button>
            <button className={`filter-btn ${filter === 'upcoming' ? 'active' : ''}`} onClick={() => setFilter('upcoming')}>Upcoming</button>
            <button className={`filter-btn ${filter === 'workshops' ? 'active' : ''}`} onClick={() => setFilter('workshops')}>Workshops</button>
            <button className={`filter-btn ${filter === 'community' ? 'active' : ''}`} onClick={() => setFilter('community')}>Community</button>
            <button className={`filter-btn ${filter === 'past' ? 'active' : ''}`} onClick={() => setFilter('past')}>Past Events</button>
          </div>
        </div>
      </section>

      {/* Featured Event */}
      <section className="featured-event">
        <div className="featured-container">
          <div className="featured-content">
            <span className="featured-badge">Featured Event</span>
            <h2>Annual Women's Leadership Summit 2025</h2>
            <p>Join us for our flagship event featuring inspiring speakers, networking opportunities, and workshops designed to elevate women in leadership roles.</p>
            <div className="event-details">
              <div className="detail-item">
                <i className="fas fa-calendar-alt"></i>
                <span>March 15, 2025</span>
              </div>
              <div className="detail-item">
                <i className="fas fa-map-marker-alt"></i>
                <span>Johannesburg Convention Centre</span>
              </div>
              <div className="detail-item">
                <i className="fas fa-clock"></i>
                <span>9:00 AM - 5:00 PM</span>
              </div>
            </div>
            <button className="register-btn">Register Now</button>
          </div>
          <div className="featured-image">
            <img src="/gallery/IMG_2165.jpg" alt="Women's Leadership Summit" />
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="events-grid">
        <div className="events-container">
          {filteredEvents.map(event => (
            <div key={event.id} className={`event-card ${event.status} ${event.category.toLowerCase()} visible`}>
              <div className="event-image">
                <img src={event.image} alt={event.title} />
                <div className={`event-date ${event.status === 'past' ? 'past-date' : ''}`}>
                  <span className="day">{event.date.day}</span>
                  <span className="month">{event.date.month}</span>
                </div>
              </div>
              <div className="event-content">
                <span className={`event-category ${event.status === 'past' ? 'past-category' : ''}`}>
                  {event.status === 'past' ? 'Past Event' : event.category}
                </span>
                <h3>{event.title}</h3>
                <p>{event.description}</p>
                <div className="event-meta">
                  <div className="meta-item">
                    <i className="fas fa-map-marker-alt"></i>
                    <span>{event.location}</span>
                  </div>
                  <div className="meta-item">
                    <i className={event.meta ? 'fas fa-users' : 'fas fa-clock'}></i>
                    <span>{event.meta || event.time}</span>
                  </div>
                </div>
                <div className="event-actions">
                  {event.status === 'upcoming' ? (
                    <>
                      <button className="btn-secondary">Learn More</button>
                      <button className="btn-primary">Register</button>
                    </>
                  ) : (
                    <button className="btn-secondary">View Highlights</button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <EventCalendar />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Events;
