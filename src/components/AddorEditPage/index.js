import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';

const AddorEditPage = ({ initialData, onSubmit, isEditMode, setIsEditMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    categoryId: '',
    price: '',
    quantity: '',
  });

  const navigate = useNavigate();

  // Populate the form with initial data for editing
  useEffect(() => {
    if (isEditMode && initialData) {
      setFormData({
        name: initialData.name || '',
        categoryId: initialData.categoryId || '',
        price: initialData.price || '',
        quantity: initialData.quantity || '',
      });
      // Update the URL to include the id
      navigate(`/edit/${initialData.id}`);
    } else {
      setFormData({
        name: '',
        categoryId: '',
        price: '',
        quantity: '',
      });
    }
  }, [isEditMode, initialData, navigate]);

  // Handlers for input changes
  const handleNameChange = (e) => {
    setFormData((prevData) => ({ ...prevData, name: e.target.value }));
  };

  const handleCategoryIdChange = (e) => {
    setFormData((prevData) => ({ ...prevData, categoryId: e.target.value }));
  };

  const handlePriceChange = (e) => {
    setFormData((prevData) => ({ ...prevData, price: e.target.value }));
  };

  const handleQuantityChange = (e) => {
    setFormData((prevData) => ({ ...prevData, quantity: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    const { name, categoryId, price, quantity } = formData;
    if (!name || !categoryId || !price || !quantity) {
      alert('All fields are required!');
      return;
    }

    if (isNaN(price) || isNaN(quantity)) {
      alert('Price and quantity must be valid numbers!');
      return;
    }

    const url = 'https://supermarket-backend-gg7u.onrender.com/items';
    const options = {
      method: isEditMode ? 'PUT' : 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    };

    try {
      const response = await fetch(`${url}/${isEditMode ? initialData.id : ''}`, options);
      console.log('API Response:', response); // Log the response

      if (!response.ok) {
        throw new Error('Failed to save the item');
      }

      const data = await response.json();
      console.log('Data from response:', data); // Log the data received from the API
      alert(`Item ${isEditMode ? 'updated' : 'added'} successfully!`);

      // Ensure onSubmit is a function before calling it
      if (typeof onSubmit === 'function') {
        await onSubmit(data);
      } else {
        console.error('onSubmit is not a function');
      }

      // Reset the form state
      setFormData({
        name: '',
        categoryId: '',
        price: '',
        quantity: '',
      });

    } catch (error) {
      console.error('Error saving item:', error);
      alert('Failed to save the item. Please try again.');
    }
  };

  return (
    <form className="item-form" onSubmit={handleSubmit}>
      <h2>{isEditMode ? 'Edit Item' : 'Add Item'}</h2>
      <div className="input-element-container">
        <label htmlFor="name" className="label-element">Name</label>
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={handleNameChange}
          required
          className="input-text"
        />
      </div>
      <div className="input-element-container">
        <label htmlFor="categoryId" className="label-element">Category ID</label>
        <input
          type="text"
          id="categoryId"
          value={formData.categoryId}
          onChange={handleCategoryIdChange}
          required
          className="input-text"
        />
      </div>
      <div className="input-element-container">
        <label htmlFor="price" className="label-element">Price</label>
        <input
          type="number"
          id="price"
          value={formData.price}
          onChange={handlePriceChange}
          required
          className="input-text"
        />
      </div>
      <div className="input-element-container">
        <label htmlFor="quantity" className="label-element">Quantity</label>
        <input
          type="number"
          id="quantity"
          value={formData.quantity}
          onChange={handleQuantityChange}
          required
          className="input-text"
        />
      </div>
      <button className="addoredit-button" type="submit">
        {isEditMode ? 'Update Item' : 'Add Item'}
      </button>
    </form>
  );
};

export default AddorEditPage;




