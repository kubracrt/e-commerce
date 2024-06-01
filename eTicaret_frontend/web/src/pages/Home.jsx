import React from "react";
import SliderComp from "../components/Home/SliderComp";
import Products from "../components/Home/Products";
import Sorting from "../components/Home/Sorting";

import { useState } from "react";
import Category from "../components/Category/Category";

const Home = () => {
  const [sort, setSort] = useState("");
  
  return (
    <div>
      <SliderComp />
      <div className="mt-24 mb-6 text-2xl font-bold">Kategoriler</div>
      <Category />
      <div className="mt-14 mb-4 text-2xl font-bold">Seçtiklerimiz</div>
      <div className="bg-gray-200">
        <Sorting setSort={setSort} />
        <Products sort={sort} />
      </div>
    </div>
  );
};

export default Home;
