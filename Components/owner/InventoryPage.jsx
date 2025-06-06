import React from 'react';

const InventoryPage = () => {
  const inventory = [
    { product: 'Product A', stock: 10, reorderLevel: 5 },
    { product: 'Product B', stock: 3, reorderLevel: 10 },
  ];

  return (
    <div className="owner-page-container">
      <h2>Inventory Management</h2>
      <table className="inventory-table">
        <thead>
          <tr><th>Product</th><th>Stock</th><th>Reorder Level</th><th>Status</th></tr>
        </thead>
        <tbody>
          {inventory.map((item, i) => (
            <tr key={i}>
              <td>{item.product}</td>
              <td>{item.stock}</td>
              <td>{item.reorderLevel}</td>
              <td style={{ color: item.stock <= item.reorderLevel ? 'red' : 'green' }}>
                {item.stock <= item.reorderLevel ? 'Low Stock' : 'Sufficient'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InventoryPage;
