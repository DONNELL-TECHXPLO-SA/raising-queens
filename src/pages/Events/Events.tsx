import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import "./Events.css";
import EventCalendar from "./components/EventCalendar";
import Newsletter from "./components/Newsletter";
import { type Event, fetchEvents as fetchEventsFromSheet } from "./eventsData";

const Events = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [filter, setFilter] = useState("all");
  const featuredEvent = events.find((event) => event.id === "01-featured");

  useEffect(() => {
    const loadEvents = async () => {
      setIsLoading(true);

      const loadedEvents = await fetchEventsFromSheet();
      setEvents(loadedEvents);
      setIsLoading(false);
    };

    void loadEvents();
  }, []);

  const filteredEvents = events.filter((event) => {
    if (event.id === "01-featured") return false;
    if (filter === "all") return true;
    if (filter === "upcoming") return event.status === "upcoming";
    if (filter === "workshops") return event.category === "Workshop";
    if (filter === "community") return event.category === "Community";
    if (filter === "past") return event.status === "past";
    return true;
  });

  const upcomingCalendarEvents = useMemo(
    () =>
      events
        .filter((event) => event.status === "upcoming")
        .map((event) => ({
          id: event.id,
          title: event.title,
          date: event.eventDate,
        })),
    [events],
  );

  return (
    <div className="events-page">
      {/* Events Hero Section */}
      <section className="events-hero">
        <div className="events-hero-content">
          <h1>Our Events</h1>
          <p>
            Empowering women through meaningful experiences, workshops, and
            community gatherings
          </p>
        </div>
      </section>

      {/* Events Filter */}
      <section className="events-filter">
        <div className="filter-container">
          <h3>Filter Events</h3>
          <div className="filter-buttons">
            <button
              className={`filter-btn ${filter === "all" ? "active" : ""}`}
              onClick={() => setFilter("all")}
            >
              All Events
            </button>
            <button
              className={`filter-btn ${filter === "upcoming" ? "active" : ""}`}
              onClick={() => setFilter("upcoming")}
            >
              Upcoming
            </button>
            <button
              className={`filter-btn ${filter === "workshops" ? "active" : ""}`}
              onClick={() => setFilter("workshops")}
            >
              Workshops
            </button>
            <button
              className={`filter-btn ${filter === "community" ? "active" : ""}`}
              onClick={() => setFilter("community")}
            >
              Community
            </button>
            <button
              className={`filter-btn ${filter === "past" ? "active" : ""}`}
              onClick={() => setFilter("past")}
            >
              Past Events
            </button>
          </div>
        </div>
      </section>

      {/* Featured Event */}
      <section className="featured-event">
        <div className="featured-container">
          {featuredEvent ? (
            <>
              <div className="featured-content">
                <span className="featured-badge">Featured Event</span>
                <h2>{featuredEvent.title}</h2>
                <p>{featuredEvent.description}</p>
                <div className="event-details">
                  <div className="detail-item">
                    <i className="fas fa-calendar-alt"></i>
                    <span>
                      {featuredEvent.eventDate.toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                  <div className="detail-item">
                    <i className="fas fa-map-marker-alt"></i>
                    <span>{featuredEvent.location}</span>
                  </div>
                  <div className="detail-item">
                    <i className="fas fa-clock"></i>
                    <span>{featuredEvent.time || "To be confirmed"}</span>
                  </div>
                </div>
                {featuredEvent.registerUrl ? (
                  <a
                    className="register-btn"
                    href={featuredEvent.registerUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Register Now
                  </a>
                ) : (
                  <button className="register-btn" disabled>
                    Registration Opening Soon
                  </button>
                )}
              </div>
              <div className="featured-image">
                <img
                  src={featuredEvent.image}
                  alt={featuredEvent.title}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </>
          ) : (
            <div className="featured-empty">
              <h2>No featured event yet</h2>
              <p>
                Add an event with id <strong>01-featured</strong> in the sheet
                to show it here.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Events Grid */}
      <section className="events-grid">
        <div className="events-container">
          {isLoading && (
            <p className="events-loading">Loading latest events...</p>
          )}
          {!isLoading && filteredEvents.length === 0 && (
            <p className="events-empty">
              No events available right now. Please check back soon.
            </p>
          )}
          {filteredEvents.map((event) => (
            <div
              key={event.id}
              className={`event-card ${event.status} ${event.category.toLowerCase()} visible`}
            >
              <div className="event-image">
                <img
                  src={event.image}
                  alt={event.title}
                  loading="lazy"
                  decoding="async"
                />
                <div
                  className={`event-date ${event.status === "past" ? "past-date" : ""}`}
                >
                  <span className="day">{event.date.day}</span>
                  <span className="month">{event.date.month}</span>
                </div>
              </div>
              <div className="event-content">
                <span
                  className={`event-category ${event.status === "past" ? "past-category" : ""}`}
                >
                  {event.status === "past" ? "Past Event" : event.category}
                </span>
                <h3>{event.title}</h3>
                <p>{event.description}</p>
                <div className="event-meta">
                  <div className="meta-item">
                    <i className="fas fa-map-marker-alt"></i>
                    <span>{event.location}</span>
                  </div>
                  <div className="meta-item">
                    <i
                      className={event.meta ? "fas fa-users" : "fas fa-clock"}
                    ></i>
                    <span>{event.meta || event.time}</span>
                  </div>
                </div>
                <div className="event-actions">
                  {event.status === "upcoming" ? (
                    <>
                      <Link
                        className="btn-secondary"
                        to={`/events/${event.id}`}
                        state={{ event }}
                      >
                        Learn More
                      </Link>
                      {event.registerUrl ? (
                        <a
                          className="btn-primary"
                          href={event.registerUrl}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Register
                        </a>
                      ) : (
                        <button className="btn-primary" disabled>
                          Register
                        </button>
                      )}
                    </>
                  ) : (
                    <Link
                      className="btn-secondary"
                      to={`/events/${event.id}`}
                      state={{ event }}
                    >
                      View Highlights
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <EventCalendar upcomingEvents={upcomingCalendarEvents} />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Events;
