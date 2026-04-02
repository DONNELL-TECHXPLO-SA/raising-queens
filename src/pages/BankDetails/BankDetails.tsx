import { Link } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import './BankDetails.css';

const BankDetails = () => {
  return (
    <div className="bank-details-page">
      <main className="banking-page">
        <section className="banking-hero">
          <span className="eyebrow">Direct Transfer Option</span>
          <h1>Banking Details</h1>
          <p>Prefer to donate via EFT? Use the secure details below to transfer your contribution directly to Raising Queens.</p>
        </section>

        <section className="details-card">
          <div className="detail">
            <span className="label">Account Name</span>
            <p className="value">Raising Queens Foundation</p>
          </div>
          <div className="detail">
            <span className="label">Bank Name</span>
            <p className="value">First National Bank (FNB)</p>
          </div>
          <div className="detail">
            <span className="label">Account Number</span>
            <p className="value">62897621556</p>
          </div>
          <div className="detail">
            <span className="label">Swift Code</span>
            <p className="value">FIRNZAJJ</p>
          </div>
          <div className="detail">
            <span className="label">Account Type</span>
            <p className="value">Cheque</p>
          </div>
          <div className="detail">
            <span className="label">Reference</span>
            <p className="value">RQ + Your Name</p>
          </div>
        </section>

        <section className="helper-box">
          <h2>Need a reminder?</h2>
          <p>
            Save or screenshot these details for your banking app. Please email proof of payment to{' '}
            <a href="mailto:info@raisingqueens.org.za">info@raisingqueens.org.za</a> so we can send you a receipt.
          </p>
          <div className="helper-actions">
            <Link className="btn" to="/donate">
              <i className="fa-solid fa-arrow-left"></i> Back to Donate Page
            </Link>
            <Link className="btn ghost" to="/">
              <i className="fa-solid fa-house"></i> Return Home
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BankDetails;
