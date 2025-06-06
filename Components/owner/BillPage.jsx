import React, { useState } from 'react';

const initialCustomers = [
  { id: 1, name: 'Customer A', balance: 1200 },
  { id: 2, name: 'Customer B', balance: -500 },
];

const BillPage = () => {
  const [customers, setCustomers] = useState(initialCustomers);
  const [selectedId, setSelectedId] = useState(null);
  const [payment, setPayment] = useState('');

  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');
  const [popupType, setPopupType] = useState('info');

  const closePopup = () => {
    setShowPopup(false);
  };

  const handlePayment = () => {
    const amount = Number(payment);
    if (!selectedId || !amount || isNaN(amount)) {
      setPopupMessage('Select customer and enter valid payment amount');
      setPopupType('error');
      setShowPopup(true);
      return;
    }

    setCustomers(customers.map(c => 
      c.id === selectedId ? {...c, balance: c.balance - amount} : c
    ));
    setPayment('');
    setPopupMessage('Payment updated!');
    setPopupType('success');
    setShowPopup(true);
  };

  return (
    <div className="owner-page-container">
      <h2>Customer Accounts</h2>
      <table className="customer-bill-table">
        <thead>
          <tr><th>Customer</th><th>Balance (₹)</th></tr>
        </thead>
        <tbody>
          {customers.map(c => (
            <tr key={c.id} onClick={() => setSelectedId(c.id)} style={{ backgroundColor: selectedId === c.id ? '#d3f9d8' : 'transparent', cursor: 'pointer' }}>
              <td>{c.name}</td>
              <td>{c.balance}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="payment-section">
        <input 
          type="number" 
          value={payment} 
          onChange={e => setPayment(e.target.value)} 
          placeholder="Enter payment amount" 
        />
        <button onClick={handlePayment}>Update Payment</button>
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

export default BillPage;
