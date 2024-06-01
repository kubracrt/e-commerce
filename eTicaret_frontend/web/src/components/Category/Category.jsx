import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Category = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [category, setCategory] = useState([]);
  
  useEffect(() => {
    loadCategory();
  }, []);

  const loadCategory = async () => {
    const result = await axios.get("http://localhost:8080/category");
    setCategory(result.data);
  };

  return (
    <div className="flex text-center justify-center items-center gap-6 ">
      {category?.map((category, i) => (
        <Link
          to={`/Category/${category.id}`}
          className="h-[100px] w-[300px] text-white bg-slate-700 flex justify-center font-thin text-sm items-center hover:bg-orange-500"
        >
          {category.name}{" "}
        </Link>
      ))}
    </div>
  );
};

export default Category;
