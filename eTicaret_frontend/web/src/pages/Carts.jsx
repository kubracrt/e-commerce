import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getCartTotal } from "../redux/CartSlice";
import CartComp from "../components/Cart/CartComp";
import axios from "axios";
import { useUser, useUserId } from "../redux/auth/hooks";

const Carts = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useUser();
  const kisiId = useUserId();

  const { carts, totalAmount } = useSelector((state) => state.carts) || {};

  const [formattedTotalAmount, setFormattedTotalAmount] = useState("0.00");

  const [pastOrder, setPastOrder] = useState({
    kisiId: kisiId,
    tarih: new Date().toISOString().split("T")[0],
    tutar: 0,
    urunAdi: "",
    urunAciklamasi: "",
  });

  useEffect(() => {
    if (!user) {
      navigate("/login");
      return;
    }

    dispatch(getCartTotal());

    const formattedTotal = totalAmount.toFixed(3);
    setFormattedTotalAmount(formattedTotal);

    const productNames = carts.map((cart) => cart.name).join(", ");
    const productsDesc = carts.map((cart) => cart.description).join(", ");
    
    setPastOrder((prevOrder) => ({
      ...prevOrder,
      kisiId: kisiId,
      tutar: formattedTotal,
      urunAdi: productNames,
      urunAciklamasi:productsDesc
    }));
  }, [dispatch, user, navigate, kisiId, totalAmount, carts]);

  const onSubmit = async () => {
    try {
      await axios.post("http://localhost:8080/past", pastOrder);
      alert("Siparişiniz başarıyla kaydedildi.");
    } catch (error) {
      console.error(error);
    }
  };

  if (!user) {
    return <div>Giriş yapınız</div>;
  }

  return (
    <div className="container w-8/12 mx-auto p-4">
      {carts.length > 0 ? (
        <div>
          {carts.map((cart, i) => (
            <CartComp key={i} cart={cart} />
          ))}
          <div className="text-right mt-4">
            <div className="text-lg text-slate-700 ">
              TOPLAM TUTAR:{" "}
              <span className="text-slate-700 ml-2">
                {formattedTotalAmount} TL
              </span>
            </div>
            <button
              onClick={onSubmit}
              className="bg-slate-700 py-2 px-3 mt-4 text-white rounded-lg hover:bg-slate-800"
            >
              Sipariş Ver
            </button>
          </div>
        </div>
      ) : (
        <div className="text-center text-lg mt-4">SEPETİNİZ BOŞ..</div>
      )}
    </div>
  );
};

export default Carts;
