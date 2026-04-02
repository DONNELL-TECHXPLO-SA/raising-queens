import { FormEvent } from 'react';
import './Newsletter.css';

const Newsletter = () => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const email = (form.querySelector('input[type="email"]') as HTMLInputElement).value;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(email)) {
      alert('Thank you for subscribing! You\'ll receive updates about our upcoming events.');
      form.reset();
    } else {
      alert('Please enter a valid email address.');
    }
  };

  return (
    <section className="newsletter-signup">
      <div className="newsletter-container">
        <div className="newsletter-content">
          <h2>Never Miss an Event</h2>
          <p>Subscribe to our newsletter and be the first to know about upcoming workshops, community gatherings, and special events.</p>
          <form className="newsletter-form" onSubmit={handleSubmit}>
            <input type="email" placeholder="Enter your email address" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
