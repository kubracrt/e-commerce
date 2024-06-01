import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const EditProducts = () => {
  const { id } = useParams();
  const [products, setProducts] = useState({
    name: "",
    description: "",
    price: "",
    isImportant: "",
  });

  useEffect(() => {
    loadProduct();
  }, []);

  const loadProduct = async () => {
    try {
      const result = await axios.get(`http://localhost:8080/products/${id}`);
      setProducts(result.data);
    } catch (error) {
      console.error("Request failed with status code 400", error);
    }
  };

  const onInputChange = (e) => {
    setProducts({ ...products, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/products/${id}`, products);
  };

  return (
    <div className="flex justify-center items-center bg-gray-100 h-screen">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-center text-2xl mb-4">Ürün Güncelleme</h2>
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Ürün Adı</label>
            <input
              type="text"
              className="form-input mt-1 block w-full rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Ürün İsmini Giriniz"
              name="name"
              value={products.name}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">Ürün Açıklaması</label>
            <input
              type="text"
              className="form-input mt-1 block w-full rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Ürün Açıklamasını Giriniz"
              name="description"
              value={products.description}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="price" className="block text-sm font-medium text-gray-700">Ürün Fiyatı</label>
            <input
              type="text"
              className="form-input mt-1 block w-full rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Ürünün Fiyatını Giriniz"
              name="price"
              value={products.price}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="isImportant" className="block text-sm font-medium text-gray-700">Önemli Ürün Mü</label>
            <input
              type="text"
              className="form-input mt-1 block w-full rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              name="isImportant"
              value={products.isImportant}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
            >
              Güncelle
            </button>
            <Link to="/adminProduct" className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
              İptal
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProducts;
