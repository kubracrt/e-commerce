import React from "react";
import { Link } from "react-router-dom";
import { useUser } from "../redux/auth/hooks";
import { useDispatch } from "react-redux";
import { logout } from "../redux/auth";

const Customer = () => {
  const user = useUser();
  const dispatch = useDispatch();

  if (!user) {
    return <div>Kullanıcı bilgisi yüklenemedi.</div>;
  }

  const { email, name } = user;

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="bg-white w-1/3 mt-4 m-auto shadow-md rounded-md p-4">
      <h1 className="text-xl font-bold mb-4">Kullanıcı Profili</h1>
      <p className="mb-2 ">Kullanıcı Adı: {name}</p>
      <p className="mb-4">Email: {email}</p>
      <div className="flex flex-wrap">
        <Link
          to="/"
          className="text-gray-700 bg-gray-200 hover:bg-gray-400 px-3 py-2 rounded-md transition duration-300 ease-in-out mb-2 mr-2"
        >
          Anasayfa
        </Link>
        <Link
          to="/PastOrder"
          className="text-gray-700 bg-gray-200 hover:bg-gray-400 px-3 py-2 rounded-md transition duration-300 ease-in-out mb-2 mr-2"
        >
          Geçmiş Siparişlerim
        </Link>
        <button
          onClick={handleLogout}
          className="text-gray-700 bg-gray-200 hover:bg-gray-400 px-3 py-2 rounded-md transition duration-300 ease-in-out mb-2"
        >
          Çıkış Yap
        </button>
      </div>
    </div>
  );
  

};

export default Customer;
