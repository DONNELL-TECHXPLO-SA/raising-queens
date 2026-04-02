import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Logo & Mission */}
          <div className="footer-logo-mission">
            <div className="footer-logo">
              <Link to="/">
                <img src="/images/logo-inverted.png" alt="Raising Queens Logo" className="footer-logo-img" />
              </Link>
            </div>
            <p>
              Empowering women through community support, education, and opportunities for growth.
              Together, we rise and help others rise too.
            </p>

            {/* Social Media */}
            <div className="social-links">
              <a href="https://www.facebook.com/share/19NDCD3vNG/" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://wa.me/27814076516" aria-label="WhatsApp">
                <i className="fab fa-whatsapp"></i>
              </a>
              <a href="https://www.instagram.com/raisingqueensfoundation?igsh=a2NqazM0MjQzdDEy" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.tiktok.com/@raisingqueensfoundation?_t=ZM-8zMhEOe7ubQ&_r=1" aria-label="Tiktok">
                <i className="fab fa-tiktok"></i>
              </a>
              <a href="https://www.linkedin.com/company/raisingqueensfoundation/" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-links">
            <h4>Quick Links</h4>
            <nav>
              <Link to="/">Home</Link>
              <Link to="/events">Events</Link>
              <Link to="/gallery">Gallery</Link>
              <Link to="/donate">Donate</Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="footer-contact">
            <h4>Contact Us</h4>
            <div className="contact-item">
              <i className="fa-solid fa-map-marker-alt icon"></i>
              <span> 47 Maple Dr, Kyalami, Midrand, 1684, South Africa</span>
            </div>
            <div className="contact-item">
              <i className="fa-solid fa-phone icon"></i>
              <span>+27 (0) 81 407 6516</span>
            </div>
            <div className="contact-item">
              <i className="fa-solid fa-envelope icon"></i>
              <span>Info@raisingqueens.org.za</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p>© 2025 Raising Queens. All rights reserved.</p>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
