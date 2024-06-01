import React, { useState } from "react";
import axios from "axios";

const AddProducts = () => {
  const [product, setProduct] = useState({
    description: "",
    img: "",
    name: "",
    price: "",
    is_important: false, 
    category_id: ""
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setProduct({
      ...product,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post("http://localhost:8080/product", product);
      setProduct({
        description: "",
        img: "",
        name: "",
        price: "",
        is_important: false,
        category_id: ""
      });
    } catch (error) {
      console.error("There was an error adding the product!", error);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 border border-gray-300 rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4">Ürün Ekle</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={handleChange}
            placeholder="Ürün Adı"
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            name="description"
            value={product.description}
            onChange={handleChange}
            placeholder="Ürün Açıklaması"
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            name="img"
            value={product.img}
            onChange={handleChange}
            placeholder="Ürün Görseli"
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            name="price"
            value={product.price}
            onChange={handleChange}
            placeholder="Ürün Fiyatı"
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <input
            type="checkbox"
            name="is_important"
            checked={product.is_important}
            onChange={handleChange}
            className="mr-2"
          /> Önemli mi
        </div>
        <div className="mb-4">
          <input
            type="text"
            name="category_id"
            value={product.category_id}
            onChange={handleChange}
            placeholder="Kategori ID"
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Ürünü Ekle
        </button>
      </form>
    </div>
  );
};

export default AddProducts;
