import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/auth";

const AdminComp = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };
  
  return (
    <div className="mx-auto max-w-md p-10 text-center">
      <h2 className="text-2xl text-gray-700 mb-10">Hoşgeldin Admin</h2>
      <div className="mb-4">
        <Link
          to="/UserAdmin"
          className="block bg-gray-700 text-white font-bold py-2 px-4 rounded mb-4 hover:bg-gray-700"
        >
          Kullanıcı bilgileri için
        </Link>
      </div>
      <div className="mb-4">
        <Link
          to="/QuestionAnswer"
          className="block bg-gray-700 text-white font-bold py-2 px-4 rounded mb-4 hover:bg-gray-700"
        >
          Sorular için
        </Link>
      </div>
      <div className="mb-4">
        <Link
          to="/AdminProduct"
          className="block bg-gray-700 text-white font-bold py-2 px-4 rounded mb-4 hover:bg-gray-700"
        >
          Ürünler için
        </Link>
      </div>
      <div className="mt-4">
        <button
          onClick={handleLogout}
          className="text-gray-700 bg-gray-200 hover:bg-gray-400 px-3 py-2 rounded-md transition duration-300 ease-in-out"
        >
          Çıkış Yap
        </button>
      </div>
    </div>
  );
};

export default AdminComp;
