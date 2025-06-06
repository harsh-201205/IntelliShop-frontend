import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import Lottie from "lottie-react";
import workingAnimation from "../assets/working.json";
import { Link } from "react-router-dom";
import Popup from './Popup';  // Import the custom popup component

const LoginType = () => {
  const navigate = useNavigate();
  const [userType, setUserType] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');
  const [popupType, setPopupType] = useState('info');
  const [errors, setErrors] = useState({
    userType: ''
  });

  const handleUserTypeChange = (event) => {
    setUserType(event.target.value);
  };

  const validateForm = () => {
    let isValid = true;

    if (!userType) {
      isValid = false;
      setPopupMessage('Please select a user type.');
      setPopupType('error');
      setShowPopup(true);
    }

    return isValid;
  };

  const handleNextClick = () => {
    if (!validateForm()) {
      return;  // Don't proceed if validation fails
    }

    if (userType === "customer") {
      navigate("/customer-login");  // Redirect to Customer Login
    } else if (userType === "shopkeeper") {
      navigate("/owner-login");  // Redirect to Shopkeeper Login
    } else {
      setPopupMessage('Please select a user type.');
      setPopupType('error');
      setShowPopup(true);
    }
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

        <h2 className="hero-title" style={{ fontSize: '22px', color: '#a6e1fa', textAlign: 'center' }}>
          Select Your Account Type to Log In
        </h2>

        <form className="login-form">
          <label htmlFor="userType" className="login-label">Select User Type</label>
          <select
            id="userType"
            value={userType}
            onChange={handleUserTypeChange}
            className="login-select"
            required
          >
            <option value="">-- Select User Type --</option>
            <option value="customer">Customer</option>
            <option value="shopkeeper">Shopkeeper</option>
          </select>

          <button
            type="button"
            onClick={handleNextClick}
            className="login-button"
          >
            Next
          </button>
        </form>

        <Link to="/registertype" className="back-to-register-link">Back to Register</Link>
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

export default LoginType;
