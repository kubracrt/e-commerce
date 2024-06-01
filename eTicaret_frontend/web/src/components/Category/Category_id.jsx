import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/CartSlice";
import { useNavigate } from "react-router-dom";

const Category_id = ({ product }) => {
  const { products } = useSelector((state) => state.products);
  let { id } = useParams();
  const navigate=useNavigate()
  const productsFiltered = products.filter(
    (product) => product.category.id === Number(id)
  );
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
  return (
    <div className="grid grid-cols-4 gap-6 mt-8 ">
      {productsFiltered.map((product) => (
        <div
          onClick={() => navigate(`/products/${product?.id}`)} 
          key={product.id}
          className="w-[300px] h-[550px] border-2	border-gray-200 mb-10	p-3 rounded-md bg-gray hover:scale-110 hover:bg-gray-300 cursor-pointer"
        >
          <img
            className="w-[250px] h-[250px] m-auto"
            src={product?.img}
            alt={product?.name}
          />
          <div className="text-center px-3 mt-10 font-thin text-sm">
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
            className="m-auto !my-6 border w-[120px] h-[50px] bg-gray-200  text-m font-thin cursor-pointer rounded-md  flex items-center text-center justify-center"
          >
            Sepete Ekle
          </div>
        
        </div>
      ))}
    </div>
  );
};

export default Category_id;
