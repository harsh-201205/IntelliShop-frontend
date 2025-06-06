import React, { useState } from 'react';
import ProductModal from './ProductModal';
import '../../App.css';

const initialProducts = [
  { id: 1, name: 'Product A', price: 100, stock: 10 },
  { id: 2, name: 'Product B', price: 200, stock: 5 },
];

const ProductPage = () => {
  const [products, setProducts] = useState(initialProducts);
  const [modalOpen, setModalOpen] = useState(false);
  const [editProduct, setEditProduct] = useState(null);

  const handleAddClick = () => {
    setEditProduct(null); // adding new product
    setModalOpen(true);
  };

  const handleEditClick = (product) => {
    setEditProduct(product);
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const handleSaveProduct = (product) => {
    if (editProduct) {
      setProducts(products.map(p => (p.id === product.id ? product : p)));
    } else {
      setProducts([...products, { ...product, id: Date.now() }]);
    }
    setModalOpen(false);
  };

  return (
    <div className="owner-page-container">
      <h2>Manage Products</h2>
      <button className="add-button" onClick={handleAddClick}>Add Product</button>

      <table className="product-table">
        <thead>
          <tr><th>Name</th><th>Price</th><th>Stock</th><th>Actions</th></tr>
        </thead>
        <tbody>
          {products.map(p => (
            <tr key={p.id}>
              <td>{p.name}</td>
              <td>₹{p.price}</td>
              <td>{p.stock}</td>
              <td>
                <button onClick={() => handleEditClick(p)}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {modalOpen && (
        <ProductModal 
          product={editProduct} 
          onClose={handleModalClose} 
          onSave={handleSaveProduct} 
        />
      )}
    </div>
  );
};

export default ProductPage;
