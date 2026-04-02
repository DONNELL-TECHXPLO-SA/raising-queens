import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import "./EventDetails.css";
import { type Event, fetchEvents } from "./eventsData";

interface LocationState {
  event?: Event;
}

const EventDetails = () => {
  const { eventId } = useParams();
  const location = useLocation();
  const state = location.state as LocationState | null;

  const [event, setEvent] = useState<Event | null>(state?.event || null);
  const [isLoading, setIsLoading] = useState(!state?.event);

  useEffect(() => {
    if (!eventId || event) return;

    const loadEvent = async () => {
      setIsLoading(true);
      const events = await fetchEvents();
      const selected = events.find((item) => item.id === eventId) || null;
      setEvent(selected);
      setIsLoading(false);
    };

    void loadEvent();
  }, [eventId, event]);

  return (
    <div className="event-details-page">
      {isLoading ? (
        <section className="event-details-state">
          <p>Loading event details...</p>
        </section>
      ) : event ? (
        <>
          <section className="event-details-hero">
            <img src={event.image} alt={event.title} />
            <div className="event-details-overlay">
              <span className="event-details-badge">
                {event.status === "past" ? "Past Event" : event.category}
              </span>
              <h1>{event.title}</h1>
            </div>
          </section>

          <section className="event-details-content">
            <div className="event-details-main">
              <h2>About this event</h2>
              <p>{event.description}</p>

              <div className="event-details-info-grid">
                <div className="event-details-item">
                  <h3>Date</h3>
                  <p>
                    {event.date.day} {event.date.month}
                  </p>
                </div>
                <div className="event-details-item">
                  <h3>Location</h3>
                  <p>{event.location}</p>
                </div>
                <div className="event-details-item">
                  <h3>Time</h3>
                  <p>{event.time || "To be confirmed"}</p>
                </div>
                {event.meta && (
                  <div className="event-details-item">
                    <h3>Highlights</h3>
                    <p>{event.meta}</p>
                  </div>
                )}
              </div>
            </div>

            <aside className="event-details-actions">
              <Link className="btn-secondary" to="/events">
                Back to Events
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
                  Registration Opening Soon
                </button>
              )}
            </aside>
          </section>
        </>
      ) : (
        <section className="event-details-state">
          <h2>Event not found</h2>
          <p>We could not find this event. It may have been removed.</p>
          <Link className="btn-secondary" to="/events">
            Back to Events
          </Link>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default EventDetails;
