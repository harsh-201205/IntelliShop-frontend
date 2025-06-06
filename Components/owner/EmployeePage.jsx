import React from 'react';

const employees = [
  { id: 1, name: 'John Doe', role: 'Cashier', phone: '9876543210' },
  { id: 2, name: 'Jane Smith', role: 'Stock Manager', phone: '9876501234' },
];

const EmployeePage = () => {
  return (
    <div className="owner-page-container">
      <h2>Employees</h2>
      <table className="employee-table">
        <thead>
          <tr><th>Name</th><th>Role</th><th>Phone</th></tr>
        </thead>
        <tbody>
          {employees.map(emp => (
            <tr key={emp.id}>
              <td>{emp.name}</td>
              <td>{emp.role}</td>
              <td>{emp.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeePage;
