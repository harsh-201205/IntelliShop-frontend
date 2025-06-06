import React from 'react';

const SalesReportPage = () => {
  const salesData = [
    { date: '2025-06-01', totalSales: 5000, transactions: 15 },
    { date: '2025-06-02', totalSales: 7000, transactions: 22 },
  ];

  return (
    <div className="owner-page-container">
      <h2>Sales Reports</h2>
      <table className="sales-report-table">
        <thead>
          <tr><th>Date</th><th>Total Sales (₹)</th><th>Transactions</th></tr>
        </thead>
        <tbody>
          {salesData.map((item, i) => (
            <tr key={i}>
              <td>{item.date}</td>
              <td>{item.totalSales}</td>
              <td>{item.transactions}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SalesReportPage;
