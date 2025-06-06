import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import Lottie from "lottie-react";
import workingAnimation from "../assets/working.json";
import { Link } from "react-router-dom";
import Popup from './Popup';  // Import the custom popup component

const RegisterType = () => {
  const navigate = useNavigate();
  const [userType, setUserType] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');
  const [popupType, setPopupType] = useState('info');

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
      navigate("/customer-register");  // Redirect to Customer Registration
    } else if (userType === "shopkeeper") {
      navigate("/owner-register");  // Redirect to Shopkeeper Registration
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
      <div className="register-card">
        <div className="logo-section">
          <div className="logo-text-group">
            <span className="logo-text-intelli">Intelli</span>
            <span className="logo-text-shop">Shop</span>
          </div>
          <Lottie animationData={workingAnimation} className="logo-lottie" />
        </div>

        <h2 className="hero-title" style={{ fontSize: '22px', color: '#a6e1fa', textAlign: 'center' }}>
          Choose Your Account Type
        </h2>

        <form className="register-form">
          <label htmlFor="userType" className="register-label">Select User Type</label>
          <select
            id="userType"
            value={userType}
            onChange={handleUserTypeChange}
            className="register-select"
            required
          >
            <option value="">-- Select User Type --</option>
            <option value="customer">Customer</option>
            <option value="shopkeeper">Shopkeeper</option>
          </select>

          <button
            type="button"
            onClick={handleNextClick}
            className="register-button"
          >
            Next
          </button>
        </form>

        <Link to="/logintype" className="back-to-login-link">Back to Login</Link>
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

export default RegisterType;
