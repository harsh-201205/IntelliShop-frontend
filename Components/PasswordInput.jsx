import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const PasswordInput = ({ id, name, label, required }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(prev => !prev);
  };

  return (
    <div className="password-wrapper">
      <label htmlFor={id} className="login-label">{label}</label>
      <div className="password-input-container">
        <input
          type={showPassword ? 'text' : 'password'}
          id={id}
          name={name}
          className="login-input"
          required={required}
        />
        <button
          type="button"
          className="toggle-password"
          onClick={togglePasswordVisibility}
          aria-label={showPassword ? 'Hide password' : 'Show password'}
        >
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </button>
      </div>
    </div>
  );
};

export default PasswordInput;
