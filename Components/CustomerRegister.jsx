import React, { useState } from 'react';
import PasswordInput from './PasswordInput';  // Adjust path as needed
import '../App.css';
import Lottie from "lottie-react";
import workingAnimation from "../assets/working.json";
import Popup from './Popup';  // Import the custom popup component

const CustomerRegister = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');
  const [popupType, setPopupType] = useState('info');

  const validateForm = (username, password, confirmPassword) => {
    let isValid = true;

    if (!username) {
      isValid = false;
      setPopupMessage('Username is required.');
      setPopupType('error');  
      setShowPopup(true);
      return isValid;
    }

    if (!password) {
      isValid = false;
      setPopupMessage('Password is required.');
      setPopupType('error');  
      setShowPopup(true);
      return isValid;
    }
    
    if (password.length < 6) {
      setPopupMessage('Password must be at least 6 characters long.');
      setPopupType('error');
      setShowPopup(true);
      return false;
    }

    if (password !== confirmPassword) {
      isValid = false;
      setPopupMessage("Oops! Your passwords don’t match. Please try again.");
      setPopupType('error');  
      setShowPopup(true);
      return isValid;
    }

    return isValid;
  };

  const handleSubmitRegister = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const username = formData.get('username');
    const password = formData.get('password');
    const confirmPassword = formData.get('confirmPassword');

    // Validate form fields
    if (!validateForm(username, password, confirmPassword)) {
      return;  // Don't proceed if validation fails
    }

    // TODO: Replace with your actual registration API logic
    console.log('Registration submitted:', { username, password });
    setPopupMessage('Welcome aboard! Your customer account has been created successfully.');
    setPopupType('success');
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

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

        <h2
          className="hero-title"
          style={{ fontSize: 20, margin: '0 0 20px', color: '#a6e1fa', textAlign: 'center' }}
        >
          Join our community and discover great deals
        </h2>

        <form className="register-form" onSubmit={handleSubmitRegister}>
          <label htmlFor="username" className="register-label">Username</label>
          <input 
            type="text" 
            id="username" 
            name="username" 
            className="register-input"  
          />

          <PasswordInput 
            id="password" 
            name="password" 
            label="Password" 
          />

          <PasswordInput 
            id="confirmPassword" 
            name="confirmPassword" 
            label="Confirm Password" 
          />

          <button type="submit" className="register-button">Register</button>
        </form>
      </div>

      {showPopup && (
        <Popup 
          message={popupMessage} 
          type={popupType} 
          onClose={closePopup} 
        />
      )}
    </div>
  );
};

export default CustomerRegister;
