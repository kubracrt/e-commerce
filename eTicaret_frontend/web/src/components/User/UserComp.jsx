import React from "react";
import NewUser from "./NewUser";
import RegisteredUser from "./RegisteredUser";
import { useNavigate } from "react-router-dom";

const UserComp = () => {
  const navigation = useNavigate();

  const handleNewUserClick = () => {
    navigation("/NewUser");
  };
  const handleRegisteredUserClick = () => {
    navigation("/RegisteredUser");
  };

  return (
    <div className="flex text-center bg-gray-100 mt-12 h-[450px]">
      <div className="flex-1 bg-slate-800 p-8">
        <p className="text-white text-lg mb-4 font-bold">
          Yeni kullanıcı kaydı için tıklayınız
        </p>
        <button
          onClick={handleNewUserClick}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Yeni Kullanıcı
        </button>
      </div>
      <div className="flex-1 bg-slate-400 p-8">
        <p className="text-lg mb-4 font-bold">
          Kayıtlı Kullanıcı İçin Tıklayınız
        </p>
        <button
          onClick={handleRegisteredUserClick}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          Kayıtlı Kullanıcı
        </button>
      </div>
    </div>
  );
};

export default UserComp;
