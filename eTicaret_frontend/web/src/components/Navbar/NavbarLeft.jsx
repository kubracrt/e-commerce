import React from "react";
import { useNavigate } from "react-router-dom";

const NavbarLeft = () => {
  const navigate= useNavigate()
  return (
    <div onClick={() => navigate("/")} className="relative">
      <div className="text-slate-700	mt-2 text-center text-xl">
        KÜBO
        <br></br>
        TEKNOLOJİ
      </div>
    </div>
  );
};

export default NavbarLeft;
