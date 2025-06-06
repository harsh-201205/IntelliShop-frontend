import React, { useState } from 'react';
import PasswordInput from './PasswordInput';  // adjust path
import Popup from './Popup';                   // adjust path
import '../App.css';
import Lottie from "lottie-react";
import workingAnimation from "../assets/working.json";

const ShopOwnerRegisterPage = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');
  const [popupType, setPopupType] = useState('info');

  const validateForm = (data) => {
    const { fullName, username, email, password, confirmPassword, shopName, contactNumber, shopAddress, shopCategory } = data;

    if (!fullName.trim()) {
      setPopupMessage('Please provide your full name to complete registration.');
      setPopupType('error');
      setShowPopup(true);
      return false;
    }

    if (!username.trim()) {
      setPopupMessage('Username is required.');
      setPopupType('error');
      setShowPopup(true);
      return false;
    }

    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) {
      setPopupMessage('Please enter a valid email address.');
      setPopupType('error');
      setShowPopup(true);
      return false;
    }

    if (!password) {
      setPopupMessage('Password is required.');
      setPopupType('error');
      setShowPopup(true);
      return false;
    }

    if (password.length < 6) {
      setPopupMessage('Password must be at least 6 characters long.');
      setPopupType('error');
      setShowPopup(true);
      return false;
    }

    if (password !== confirmPassword) {
      setPopupMessage("Passwords don’t match. Kindly verify and try again.");
      setPopupType('error');
      setShowPopup(true);
      return false;
    }

    if (!shopName.trim()) {
      setPopupMessage('Please enter your shop’s name.');
      setPopupType('error');
      setShowPopup(true);
      return false;
    }

    if (!shopAddress.trim()) {
      setPopupMessage('Shop address is required.');
      setPopupType('error');
      setShowPopup(true);
      return false;
    }

    if (!contactNumber.trim() || !/^\d{10}$/.test(contactNumber)) {
      setPopupMessage('Please provide a valid 10-digit contact number.');
      setPopupType('error');
      setShowPopup(true);
      return false;
    }

    if (!shopCategory.trim()) {
      setPopupMessage('Please select a shop category.');
      setPopupType('error');
      setShowPopup(true);
      return false;
    }

    return true;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = {
      fullName: formData.get('fullName'),
      username: formData.get('username'),
      email: formData.get('email'),
      password: formData.get('password'),
      confirmPassword: formData.get('confirmPassword'),
      shopName: formData.get('shopName'),
      shopAddress: formData.get('shopAddress'),
      contactNumber: formData.get('contactNumber'),
      gstNumber: formData.get('gstNumber'),
      shopCategory: formData.get('shopCategory'),
    };

    if (!validateForm(data)) return;

    // TODO: Send data to backend registration API
    console.log('Shop owner registration data:', data);

    setPopupMessage('Congratulations! Your shop owner account is now set up and ready to go!');
    setPopupType('success');
    setShowPopup(true);

    event.target.reset();
  };

  const closePopup = () => setShowPopup(false);

  return (
    <div className="auth-container">
      <div className="register-card">
        <div className="logo-section">
          <div className="logo-text-group">
            <span className="logo-text-intelli">Intelli</span>
            <span className="logo-text-shop">Shop</span>
          </div>
          <Lottie animationData={workingAnimation} className="logo-lottie" />
        </div>

        <h2 className="hero-title" style={{ marginBottom: '1.5rem', color: '#a6e1fa' }}>
          Get your shop online and connect with more customers.
        </h2>
        <form className="register-form" onSubmit={handleSubmit}>
          <label htmlFor="fullName" className="register-label">Full Name</label>
          <input type="text" id="fullName" name="fullName" className="register-input" />

          <label htmlFor="username" className="register-label">Username</label>
          <input type="text" id="username" name="username" className="register-input" />

          <label htmlFor="email" className="register-label">Email</label>
          <input type="email" id="email" name="email" className="register-input" />

          <PasswordInput id="password" name="password" label="Password" />
          <PasswordInput id="confirmPassword" name="confirmPassword" label="Confirm Password" />

          <label htmlFor="shopName" className="register-label">Shop Name</label>
          <input type="text" id="shopName" name="shopName" className="register-input" />

          <label htmlFor="shopAddress" className="register-label">Shop Address</label>
          <textarea id="shopAddress" name="shopAddress" className="register-input" rows={3} />

          <label htmlFor="contactNumber" className="register-label">Contact Number</label>
          <input type="tel" id="contactNumber" name="contactNumber" className="register-input" placeholder="10-digit number" />

          <label htmlFor="gstNumber" className="register-label">GST Number (optional)</label>
          <input type="text" id="gstNumber" name="gstNumber" className="register-input" />

          <label htmlFor="shopCategory" className="register-label">Shop Category</label>
          <select id="shopCategory" name="shopCategory" className="register-input">
            <option value="">Select category</option>
            <option value="grocery">Grocery</option>
            <option value="electronics">Electronics</option>
            <option value="clothing">Clothing</option>
            <option value="pharmacy">Pharmacy</option>
            <option value="stationery">Stationery</option>
            <option value="others">Others</option>
          </select>

          <button type="submit" className="register-button" style={{ marginTop: '1.5rem' }}>
            Register
          </button>
        </form>

        {showPopup && (
          <Popup message={popupMessage} type={popupType} onClose={closePopup} />
        )}
      </div>
    </div>
  );
};

export default ShopOwnerRegisterPage;
