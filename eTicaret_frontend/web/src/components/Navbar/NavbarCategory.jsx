import React from "react";
import { useNavigate } from "react-router-dom";

const NavbarCategory = () => {
  const navigate = useNavigate();
  return (
    <div className="flex gap-4 text-center mt-2 text-slate-700">
      <div className="flex gap-4 text-center  text-slate-700 flex-wrap">
        <button
          onClick={() => navigate("Search")}
          className="flex-grow px-4 py-2  hover:bg-gray-500 rounded-none font-extralight text-xs"
        >
          Tüm Ürünlerimiz
        </button>
        <button
          onClick={() => navigate(`Category/${1}`)}
          className="flex-grow px-4 py-2 bg hover:bg-gray-500 rounded-none font-extralight text-xs"
        >
          Telefon
        </button>
        <button
          onClick={() => navigate(`Category/${2}`)}
          className="flex-grow px-4 py-2  hover:bg-gray-500 rounded-none font-extralight text-xs"
        >
          Dizüstü Bilgisayar
        </button>
        <button
          onClick={() => navigate(`Category/${3}`)}
          className="flex-grow px-4 py-2  hover:bg-gray-500 rounded-none font-extralight text-xs"
        >
          Tablet
        </button>
        <button
          onClick={() => navigate(`Category/${4}`)}
          className="flex-grow px-4 py-2  hover:bg-gray-500 rounded-none font-extralight text-xs"
        >
          Kulaklık
        </button>
        <button
          onClick={() => navigate(`Category/${5}`)}
          className="flex-grow px-4 py-2  hover:bg-gray-500 rounded-none font-extralight text-xs"
        >
          Akıllı Saat
        </button>
      </div>
    </div>
  );
};

export default NavbarCategory;
