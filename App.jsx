import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import HomePage from './Components/HomePage';

import LoginType from './Components/LoginType';
import CustomerLogin from './Components/CustomerLogin';
import OwnerLogin from './Components/OwnerLogin';

import RegisterType from './Components/RegisterType';
import CustomerRegister from './Components/CustomerRegister';
import OwnerRegister from './Components/OwnerRegister';

// Owner dashboard components
import OwnerDashboard from './Components/owner/OwnerDashboard';
import OwnerSidebar from './Components/owner/OwnerSidebar';
import ProductPage from './Components/owner/ProductPage';
import InventoryPage from './Components/owner/InventoryPage';
import SalesReportPage from './Components/owner/SalesReportPage';
import EmployeePage from './Components/owner/EmployeePage';
import MessagePage from './Components/owner/MessagePage';
import BillPage from './Components/owner/BillPage';
import CustomerListPage from './Components/owner/CustomerListPage';

// Layout for all /owner/* routes
const OwnerLayout = ({ children }) => (
  <div className="dashboard-layout">
    <OwnerSidebar />
    <div className="dashboard-content">{children}</div>
  </div>
);

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/logintype" element={<LoginType />} />
          <Route path="/customer-login" element={<CustomerLogin />} />
          <Route path="/owner-login" element={<OwnerLogin />} />
          <Route path="/registertype" element={<RegisterType />} />
          <Route path="/customer-register" element={<CustomerRegister />} />
          <Route path="/owner-register" element={<OwnerRegister />} />

          {/* Owner Dashboard Routes */}
          <Route
            path="/owner/*"
            element={
              <OwnerLayout>
                <Routes>
                  <Route path="/owner-dashboard" element={<OwnerDashboard />} />
                  <Route path="products" element={<ProductPage />} />
                  <Route path="inventory" element={<InventoryPage />} />
                  <Route path="sales" element={<SalesReportPage />} />
                  <Route path="employees" element={<EmployeePage />} />
                  <Route path="messages" element={<MessagePage />} />
                  <Route path="bills" element={<BillPage />} />
                  <Route path="customers" element={<CustomerListPage />} />
                  <Route path="*" element={<Navigate to="products" />} />
                </Routes>
              </OwnerLayout>
            }
          />

          {/* Fallback for any undefined route */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>

      {/* Footer (visible on all pages) */}
      <div className="footer">
        <p>© 2025 IntelliShop</p>
        <p>Developed by Harsh Software Solutions</p>
        <p>All rights reserved.</p>
      </div>
    </>
  );
}

export default App;
