import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


const AdminProducts = () => {
  const [products, setProducts] = useState([]);
 

  useEffect(() => {
    loadProducts();
  }, []);

 

  const loadProducts = async () => {
    try {
      const result = await axios.get("http://localhost:8080/products");
      setProducts(result.data);
    } catch (error) {
      console.error("Request failed with status code 400", error);
    }
  };

  const deleteProduct = async (id) => {
    await axios.delete(`http://localhost:8080/product/${id}`);
    loadProducts();
  };

  return (
    <div className="container mx-auto px-4 text-center py-8">
      <h2 className="text-2xl font-bold mb-4"> Products</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2">#</th>
            <th className="px-4 py-2">Description</th>
            <th className="px-4 py-2">Price</th>
            <th className="px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={product.id} className="text-center">
              <td className="border px-4 py-2">{index + 1}</td>
              <td className="border px-4 py-2">{product.description}</td>
              <td className="border px-4 py-2">{product.price}</td>
              <td className="border px-4 py-2">
                <Link
                  to={`/EditProduct/${product.id}`}
                  className="inline-block bg-slate-500  text-white font-bold py-2 px-4 rounded mr-2"
                >
                  Edit
                </Link>
                <button
                  onClick={() => deleteProduct(product.id)}
                  className="inline-block bg-slate-500  text-white font-bold py-2 px-4 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4">
        <Link
          to="/AddProducts"
          className="inline-block bg-slate-500  text-white font-bold py-2 px-4 rounded"
        >
          Add New Product
        </Link>
      </div>
      
    </div>
  );
};

export default AdminProducts;
