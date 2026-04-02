import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import DonationModal from "./components/DonationModal";
import "./Donate.css";
import Sanitary from "../../../images/Sanitary_Products.png";
interface DonationOption {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: string;
  items: string[];
  dropoff: string;
}

const donationOptions: DonationOption[] = [
  {
    id: "sanitary",
    title: "Sanitary Drive",
    description:
      "Help us provide essential hygiene products to women in need. Your donation supports dignity and health.",
    image: Sanitary,
    icon: "fas fa-box",
    items: [
      "Feminine hygiene products",
      "Personal care items",
      "Healthcare essentials",
      "Comfort care packages",
    ],
    dropoff: "47 Maple Drive, Kyalami, Johannesburg 1684",
  },
  {
    id: "food",
    title: "Food Drive",
    description:
      "Support families in our community with nutritious meals and essential food items.",
    image:
      "https://images.unsplash.com/photo-1606787366850-de6330128bfc?auto=format&fit=crop&w=1080",
    icon: "fas fa-utensils",
    items: [
      "Non-perishable food items",
      "Fresh produce vouchers",
      "Baby formula and supplies",
      "Meal preparation kits",
    ],
    dropoff: "47 Maple Drive, Kyalami, Johannesburg 1684",
  },
  {
    id: "education",
    title: "Education Fund",
    description:
      "Invest in the future by supporting educational programs, scholarships, and learning resources.",
    image: "/images/RQDonationEdu.jpg",
    icon: "fas fa-graduation-cap",
    items: [
      "Scholarship program funding",
      "Workshop materials and supplies",
      "Educational technology access",
      "Professional development courses",
    ],
    dropoff: "Online donations preferred",
  },
];

const Donate = () => {
  const [selectedCause, setSelectedCause] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleDonateClick = (cause: string) => {
    setSelectedCause(cause);
  };

  const closeModal = () => {
    setSelectedCause(null);
  };

  const handleMoneyDonate = () => {
    navigate("/bank-details");
  };

  return (
    <div className="donate-page">
      {/* Header Section */}
      <section className="header-section">
        <div className="header-overlay"></div>
        <div className="header-content">
          <div className="header-title">
            <i className="fas fa-heart"></i>
            <h1>Make a Difference</h1>
          </div>
          <p>
            Your generosity helps us empower women, strengthen communities, and
            create lasting change. Every donation, no matter the size, makes a
            meaningful impact.
          </p>
        </div>
      </section>

      {/* Ways to Give */}
      <section className="ways-section">
        <div className="section-header">
          <h2>Ways to Give</h2>
          <p>
            Choose how you'd like to support our mission. Each category
            addresses specific needs in our community.
          </p>
        </div>

        <div className="card-grid">
          {donationOptions.map((option) => (
            <div className="donation-card" key={option.id}>
              <div className="card-image">
                <img
                  src={option.image}
                  alt={option.title}
                  loading="lazy"
                  decoding="async"
                />
                <div className="icon-badge">
                  <i className={option.icon}></i>
                </div>
              </div>
              <div className="card-body">
                <h3>{option.title}</h3>
                <p>{option.description}</p>

                <h4>What we provide:</h4>
                <ul className="item-list">
                  {option.items.map((item, index) => (
                    <li key={index}>
                      <i className="fas fa-check-circle"></i> {item}
                    </li>
                  ))}
                </ul>

                <div className="info">
                  <p>
                    <strong>Drop-off:</strong> {option.dropoff}
                  </p>
                </div>

                <button
                  className="btn"
                  onClick={() => handleDonateClick(option.title)}
                >
                  Donate Now <i className="fas fa-arrow-right"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* General Donation */}
      <section className="general-section">
        <div className="general-box">
          <div className="general-header">
            <i className="fas fa-dollar-sign"></i>
            <h2>General Donation</h2>
          </div>
          <p>
            Support our overall mission with a general donation. These funds
            help us maintain our programs, support our team, and respond to
            urgent community needs.
          </p>

          <button className="btn large" onClick={handleMoneyDonate}>
            <i className="fas fa-heart"></i> Donate
          </button>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="impact-section">
        <div className="section-header">
          <h2>Your Impact</h2>
          <p>
            See how your contributions are making a real difference in our
            community.
          </p>
        </div>
        <div className="stats-grid">
          <div className="stat">
            <div className="stat-number">1000+</div>
            <div className="stat-label">Women Supported</div>
          </div>
          <div className="stat">
            <div className="stat-number">R25K</div>
            <div className="stat-label">Funds Raised</div>
          </div>
          <div className="stat">
            <div className="stat-number">50+</div>
            <div className="stat-label">Events Hosted</div>
          </div>
          <div className="stat">
            <div className="stat-number">15+</div>
            <div className="stat-label">Partners Annually</div>
          </div>
        </div>
      </section>

      {selectedCause && (
        <DonationModal cause={selectedCause} onClose={closeModal} />
      )}

      <Footer />
    </div>
  );
};

export default Donate;
