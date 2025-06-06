import React from 'react';

const customers = [
  { id: 1, name: 'Customer A', phone: '9876543210', email: 'a@example.com' },
  { id: 2, name: 'Customer B', phone: '9876501234', email: 'b@example.com' },
];

const CustomerListPage = () => {
  return (
    <div className="owner-page-container">
      <h2>Customers</h2>
      <table className="customer-list-table">
        <thead>
          <tr><th>Name</th><th>Phone</th><th>Email</th></tr>
        </thead>
        <tbody>
          {customers.map(c => (
            <tr key={c.id}>
              <td>{c.name}</td>
              <td>{c.phone}</td>
              <td>{c.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerListPage;
