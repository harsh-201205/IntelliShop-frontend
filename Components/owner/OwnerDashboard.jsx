import React from 'react';
import OwnerSidebar from './OwnerSidebar';
import '../../App.css'; // Import your main styles

const OwnerDashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-main">
        <h1>Welcome, Shop Owner!</h1>
        <p>Select a menu option from the sidebar to manage your shop.</p>
        {/* You can add widgets/stats here */}
      </div>
    </div>
  );
};

export default OwnerDashboard;
