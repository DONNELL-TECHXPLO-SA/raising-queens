import { useState, FormEvent } from 'react';
import './DonationModal.css';

interface DonationModalProps {
  cause: string;
  onClose: () => void;
}

const DonationModal = ({ cause, onClose }: DonationModalProps) => {
  const [volunteering, setVolunteering] = useState('no');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert('Thank you for registering your donation!');
    onClose();
  };

  const handleBackgroundClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="modal" onClick={handleBackgroundClick}>
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>

        <h2>Donation Registration</h2>
        <p>Register your donation for: <strong>{cause}</strong></p>

        <form onSubmit={handleSubmit}>
          <label>Full Name *</label>
          <input type="text" name="donorName" required />

          <label>Email *</label>
          <input type="email" name="donorEmail" required />

          <label>Phone</label>
          <input type="tel" name="donorPhone" />

          <label>Donation Type</label>
          <input type="text" name="donationType" value={cause} readOnly />

          <label>Quantity / Amount *</label>
          <input type="text" name="quantity" required />

          <label>Preferred Date *</label>
          <input type="date" name="deliveryDate" required />

          <label>Additional Notes</label>
          <textarea name="notes"></textarea>

          <label>Would you like to volunteer? *</label>
          <select 
            name="volunteering" 
            value={volunteering}
            onChange={(e) => setVolunteering(e.target.value)}
            required
          >
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>

          {volunteering === 'yes' && (
            <div className="availability-field">
              <label>Your Availability</label>
              <input type="text" name="availability" placeholder="e.g. Weekends, weekday evenings" />
            </div>
          )}

          <button type="submit" className="submit-btn">Submit Donation</button>
        </form>
      </div>
    </div>
  );
};

export default DonationModal;
