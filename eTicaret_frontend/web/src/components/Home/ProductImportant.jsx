import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/CartSlice";

const ProductImportant = ({ product }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const addBasket = () => {
    dispatch(
      addToCart({
        id: product?.id,
        image: product?.img,
        quantity: 1,
        price: product?.price,
      })
    );
  };
  
  const productDetailGo=()=>{
      navigate(`/products/${product?.id}`)
  }
  if (!product?.isImportant) return null;
  return (
    <div
      onClick={productDetailGo}
      className="w-[300px] h-[550px] p-3 mt-2 my-6 mx-6 border-2 bg-white border-gray-200 hover:scale-105 
    cursor-pointer"
    >
      <div>
        <img
          className="w-[250px] h-[250px] m-auto"
          src={product?.img}
          alt={product?.name}
        />
        <div className="text-center px-3 mt-10 font-thin text-sm ">
          {product?.name}
        </div>
        <div className="text-center px-3 mt-10 font-thin text-sm">
          {product?.description}
        </div>
        <div className="text-xl font-bold text-center mt-10 text-black ">
          {product?.price} TL
        </div>
        <div
          onClick={addBasket}
          className="m-auto !my-6 border h-[50px] w-[120px] bg-gray-200 text-m font-thin cursor-pointer rounded-md  flex items-center text-center justify-center"
        >
          Sepete Ekle
        </div>
      </div>
    </div>
  );
};

export default ProductImportant;
