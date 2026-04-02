import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const isActive = (path: string) => {
    return location.pathname === path ? "active" : "";
  };

  const handleDonate = () => {
    window.location.href = "https://paystack.shop/pay/raisingqueens";
  };

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <div className="logo">
          <Link to="/">
            <img
              src="/images/logo.png"
              alt="Raising Queens Logo"
              className="logo-img"
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="nav">
          <Link to="/" className={isActive("/")}>
            Home
          </Link>
          <Link to="/events" className={isActive("/events")}>
            Events
          </Link>
          <Link to="/gallery" className={isActive("/gallery")}>
            Gallery
          </Link>
          <Link to="/donate" className={isActive("/donate")}>
            Donate
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button className="menu-toggle" onClick={toggleMobileMenu}>
          <i
            className={
              mobileMenuOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"
            }
          ></i>
        </button>
      </div>

      {/* Mobile Nav */}
      <div className={`mobile-nav ${mobileMenuOpen ? "open" : ""}`}>
        <Link
          to="/"
          className={isActive("/")}
          onClick={() => setMobileMenuOpen(false)}
        >
          Home
        </Link>
        <Link
          to="/events"
          className={isActive("/events")}
          onClick={() => setMobileMenuOpen(false)}
        >
          Events
        </Link>
        <Link
          to="/gallery"
          className={isActive("/gallery")}
          onClick={() => setMobileMenuOpen(false)}
        >
          Gallery
        </Link>
        <Link
          to="/donate"
          className={isActive("/donate")}
          onClick={() => setMobileMenuOpen(false)}
        >
          Donate
        </Link>
        <button className="donate-btn" onClick={handleDonate}>
          Donate
        </button>
      </div>
    </header>
  );
};

export default Header;
