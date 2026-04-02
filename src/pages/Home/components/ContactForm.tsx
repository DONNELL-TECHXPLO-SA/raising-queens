import { useState, FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiry: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccessMessage('');

    try {
      await emailjs.sendForm(
        'service_qn9px3t',
        'template_kd1xsga',
        e.target as HTMLFormElement,
        'QPhdOZQufzjykyAq8'
      );
      
      setSuccessMessage('Thank you! Your message has been sent successfully.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        inquiry: '',
        subject: '',
        message: ''
      });

      setTimeout(() => setSuccessMessage(''), 5000);
    } catch (error) {
      alert('Sorry, there was an error sending your message. Please try again or contact us directly.');
      console.error('EmailJS Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact-form" id="contact">
      <div className="container">
        <h2>Contact Us</h2>
        <p>We'd love to hear from you! Please fill out the form below.</p>

        <form id="contactForm" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Full Name <span>*</span></label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email <span>*</span></label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone (Optional)</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              pattern="[0-9+ ]{7,15}"
              placeholder="+27 71 234 5678"
            />
          </div>

          <div className="form-group">
            <label htmlFor="inquiry">Inquiry Type <span>*</span></label>
            <select
              id="inquiry"
              name="inquiry"
              value={formData.inquiry}
              onChange={handleChange}
              required
            >
              <option value="" disabled>Select one</option>
              <option value="volunteer">Volunteer</option>
              <option value="donate">Donate Query</option>
              <option value="partner">Partner</option>
              <option value="sponsorship">Sponsorship</option>
              <option value="media">Media</option>
              <option value="support">Support/Feedback</option>
              <option value="general">General Inquiry</option>
              <option value="event">Event Info</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="subject">Subject <span>*</span></label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message <span>*</span></label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button type="submit" disabled={isSubmitting}>
            <i className="fa-regular fa-paper-plane"></i>{' '}
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
          {successMessage && <p className="success-message">{successMessage}</p>}
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
