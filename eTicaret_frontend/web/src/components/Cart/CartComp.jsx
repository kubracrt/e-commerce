import React from "react";
import { removeFromCart } from "../../redux/CartSlice";
import { useDispatch } from "react-redux";
import { FaRegTrashCan } from "react-icons/fa6";

const CartComp = ({ cart }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex border-b-2 border-gray-200 py-4">
      <img
        src={cart?.image}
        className="w-32 h-32 object-cover mr-4"
        alt="Product"
      />
      <div className="flex-1">
        <div className="text-m text-gray-700 font-semibold">
          {cart?.name}  -  {cart?.description}
        </div>

        <div className="text-gray-700 mt-1">
          {cart?.price} TL ({cart?.quantity})
        </div>
      </div>
      <div className="flex items-center">
        <div
          onClick={() => dispatch(removeFromCart(cart?.id))}
          className="bg-gray-100 text-gray-500 text-sm flex mx-4 px-2 py-1 rounded-md cursor-pointer items-center"
        >
          <FaRegTrashCan size={15} className="mr-1" />
          Sil
        </div>
      </div>
    </div>
  );
};

export default CartComp;
