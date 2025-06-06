import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Sidebar.css'; // You can customize styling

const OwnerSidebar = () => {
  return (
    <div className="sidebar">
      <h2 className="logo">Owner Panel</h2>
      <nav>
        <NavLink to="/owner/products" activeClassName="active-link">Products</NavLink>
        <NavLink to="/owner/inventory" activeClassName="active-link">Inventory</NavLink>
        <NavLink to="/owner/sales" activeClassName="active-link">Sales Report</NavLink>
        <NavLink to="/owner/employees" activeClassName="active-link">Employees</NavLink>
        <NavLink to="/owner/messages" activeClassName="active-link">Send Message</NavLink>
        <NavLink to="/owner/bills" activeClassName="active-link">Customer Bills</NavLink>
        <NavLink to="/owner/customers" activeClassName="active-link">Customer List</NavLink>
      </nav>
    </div>
  );
};

export default OwnerSidebar;
