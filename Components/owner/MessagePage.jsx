import React, { useState } from 'react';

const MessagePage = () => {
  const [message, setMessage] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');
  const [popupType, setPopupType] = useState('info');

  const closePopup = () => {
    setShowPopup(false);
  };

  const handleSend = () => {
    if (!message.trim()) {
      alert('Please enter a message');
      return;
    }
    setPopupMessage(`Broadcast sent to all customers:\n\n${message}`);
    setPopupType('success');
    setShowPopup(true);
    
  };

  return (
    <div className="owner-page-container">
      <h2>Broadcast Message to Customers</h2>
      <textarea
        rows={5}
        value={message}
        onChange={e => setMessage(e.target.value)}
        placeholder="Enter your message here..."
        className="message-textarea"
      />
      <button onClick={handleSend} className="send-button">Send Message</button>
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

export default MessagePage;
