import React from 'react';
import ReactDOM from 'react-dom';
import '../App.css';

const Popup = ({ message, type = "info", onClose }) => {
  // Create portal to render popup outside the parent DOM hierarchy
  return ReactDOM.createPortal(
    <div className="popup-overlay">
      <div className={`popup-box ${type}`}>
        <p className="popup-message">{message}</p>
        <button onClick={onClose} className="popup-close-button">OK</button>
      </div>
    </div>,
    document.body  // Render as direct child of body
  );
};

export default Popup;
