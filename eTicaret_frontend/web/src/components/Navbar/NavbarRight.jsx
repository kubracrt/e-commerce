import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { FaBasketShopping } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { getCartTotal } from "../../redux/CartSlice";
import { Link } from "react-router-dom";
import { logout } from "../../redux/auth/index";
import { useUser } from "../../redux/auth/hooks";

const NavbarRight = () => {
  const user = useUser();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { input, setInput } = useState("");

  const { carts } = useSelector((state) => state.carts);

  console.log(carts, "carts");
  useEffect(() => {
    dispatch(getCartTotal());
  }, [dispatch]);

  const handleClick = () => {
    if (user) {
      if(user.name=="Admin"){
        navigate("Admin");
      } else {
        navigate("Customer");
      }
    } else {
      navigate("Account");
    }
  };

  return (
    <div className="flex gap-4 items-center mt-2 ">
      <Link to="/" className="hover:text-slate-700  text-slate-700 flex">
        <FaHome size={18} />
        <span className="mx-2 text-xs">Anasayfa</span>
      </Link>

      <div className="text-slate-700 flex items-center" onClick={handleClick}>
        <FaUser size={18} />
        {user ? (
          <span className="mx-1 text-xs">{user.name}</span>
        ) : (
          <span className="mx-1 text-xs">Hesabım</span>
        )}
      </div>

      <Link to="/Carts"  className="hover:text-slate-700  text-slate-700 flex">
        <FaBasketShopping size={18}/>
        <span className="mx-1 flex text-xs">Sepetim</span>
      </Link>
    </div>
  );
};

export default NavbarRight;
