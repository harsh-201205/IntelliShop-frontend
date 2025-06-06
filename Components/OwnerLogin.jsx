import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import PasswordInput from './PasswordInput';  // Adjust path as needed
import '../App.css';
import Lottie from "lottie-react";
import workingAnimation from "../assets/working.json";
import Popup from './Popup';  // Import the custom popup component

const CustomerLogin = () => {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');
  const [popupType, setPopupType] = useState('info');

  const validateForm = (username, password) => {
    let isValid = true;

    if (!username) {
      isValid = false;
      setPopupMessage('Username is required');
      setPopupType('error');
      setShowPopup(true);
      return isValid;
    }

    if (!password) {
      isValid = false;
      setPopupMessage('Password is required');
      setPopupType('error');
      setShowPopup(true);
      return isValid;
    }

    return isValid;
  };

  const handleSubmitLogin = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const username = formData.get('username');
    const password = formData.get('password');

    // Validate the form before submission
    if (!validateForm(username, password)) {
      return;  // Don't submit if there are validation errors
    }

    // Simulate an API call and show a popup
    console.log('Login submitted:', { username, password });
    setPopupMessage('Welcome back, shop owner! Your dashboard is ready!');
    setPopupType('success');
    setShowPopup(true);
    navigate('/owner/owner-dashboard');  // Redirect to Owner Dashboard
    

    // You can also handle a failed login scenario here with an error popup.
    // setPopupMessage('Login failed, please try again');
    // setPopupType('error');
    // setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="auth-container">
      <div className="login-card">
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
          Manage inventory, sales, and customer requests all in one place
        </h2>

        <form className="login-form" onSubmit={handleSubmitLogin}>
          <label htmlFor="username" className="login-label">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            className="login-input"
          />

          <PasswordInput id="password" name="password" label="Password" />

          <button type="submit" className="login-button">Login</button>
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

export default CustomerLogin;
