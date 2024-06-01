import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/CartSlice";
import Question from "../question/Question";
import StarRating from "../star/StarRating";

const DetailComp = ({ productDetail }) => {
  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState(1);

  const decremenet = () => {
    setQuantity(quantity - 1);
  };

  const increment = () => {
    setQuantity(quantity + 1);
  };

  const addBasket = () => {
    dispatch(
      addToCart({
        id: productDetail.id,
        image: productDetail.img,
        quantity: quantity,
        price: productDetail.price,
        name: productDetail.name,
        description: productDetail.description,
      })
    );
  };

  console.log(productDetail);

  return (
    <div>
      <div className="flex gap-4 my-10 ">
        <img
          className="w-[400px] h-[400px] object-cover "
          src={productDetail.img}
        ></img>
        <div>
          <div className=" mb-6 text-xl ">{productDetail.description}</div>
          <div className="text-xl">Price: {productDetail.price}</div>
          <div className="flex items-center gap-2 my-3">
            <div onClick={decremenet} className="text-3xl cursor-pointer">
              -
            </div>
            <input
              className="w-1/12 text-center text-2xl"
              type="text"
              value={quantity}
            />
            <div onClick={increment} className="text-3xl cursor-pointer">
              +
            </div>
          </div>
          <button
            onClick={addBasket}
            className=" px-4 border bg-gray-200  text-xl cursor-pointer rounded-md  flex items-center justify-center"
          >
            Sepete Ekle
          </button>
        </div>
      </div>
     {<Question></Question>} 
      <StarRating></StarRating>
    </div>
  );
};

export default DetailComp;
