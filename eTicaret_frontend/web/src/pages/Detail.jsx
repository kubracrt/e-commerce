import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import DetailComp from "../components/Detail/DetailComp";
import { getDetailProduct } from "../redux/ProductDetail";
import Loading from "../components/Loading";

const Detail = () => {

  const dispatch=useDispatch()

  const {id}=useParams()

  const { productDetail, productDetailStatus } = useSelector (state => state.productDetail );

  useEffect(()=>{

    dispatch(getDetailProduct(id))

  },[])

  return (
    <div>
      {productDetailStatus === "LOADING" ? <Loading/> : <DetailComp productDetail={productDetail} />}
    </div>
  );
};

export default Detail;

