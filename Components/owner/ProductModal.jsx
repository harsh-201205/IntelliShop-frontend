import React, { useState, useEffect } from 'react';
import '../../App.css';

const ProductModal = ({ product, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    stock: '',
  });
    const [showPopup, setShowPopup] = useState(false);
    const [popupMessage, setPopupMessage] = useState('');
    const [popupType, setPopupType] = useState('info');

  useEffect(() => {
    if (product) {
      setFormData({
        name: product.name,
        price: product.price,
        stock: product.stock,
      });
    }
  }, [product]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'price' || name === 'stock') {
      if (value && !/^\d*$/.test(value)) return;
    }
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.price || !formData.stock) {
      setPopupMessage('All fields are required.');
      setPopupType('error');
      setShowPopup(true);
      return;
    }
    onSave({ ...product, ...formData, price: Number(formData.price), stock: Number(formData.stock) });
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <h3>{product ? 'Edit Product' : 'Add Product'}</h3>
        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input name="name" value={formData.name} onChange={handleChange} />

          <label>Price</label>
          <input name="price" value={formData.price} onChange={handleChange} />

          <label>Stock</label>
          <input name="stock" value={formData.stock} onChange={handleChange} />

          <div className="modal-buttons">
            <button type="submit">{product ? 'Update' : 'Add'}</button>
            <button type="button" onClick={onClose} className="cancel-btn">Cancel</button>
          </div>
        </form>
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

export default ProductModal;
