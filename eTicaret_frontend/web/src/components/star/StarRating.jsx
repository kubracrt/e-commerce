import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { useParams } from "react-router-dom";

const StarRating = () => {
  const { id: urun_id } = useParams();
  const [rating, setRating] = useState([]);
  const [comment, setComment] = useState("");
  const [result, setResultComment] = useState([]);

  const onInputChange = (e) => {
    setComment(e.target.value);
  };

  useEffect(() => {
    loadComment();
  }, [urun_id]);

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/comment", {
        comment,
        rating,
        urun_id,
      });
      console.log("Gönderilen Yorum :", comment);
      setComment("");
      setRating(0);
      loadComment();
    } catch (error) {
      console.error("İstek yapılırken hata oluştu:", error);
    }
  };

  const loadComment = async () => {
    const resultComment = await axios.get(`http://localhost:8080/comment/${urun_id}`);
    setResultComment(resultComment.data);
  };

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const emptyStars = 5 - fullStars;

    const stars = [];
    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={i} color="orange" />);
    }

    for (let i = 0; i < emptyStars; i++) {
      stars.push(<FaStar key={fullStars + i + 1} color="grey" />);
    }

    return (
      <div className="flex items-center mb-2">
        {stars.map((star, index) => (
          <span key={index}>{star}</span>
        ))}
      </div>
    );
  };

  return (
    <div className="mx-auto my-8 p-6 bg-gray-100 w-11/12 border-gray-300 rounded-lg shadow-md">
      <div className="p-4 rounded-lg shadow-sm mb-8 bg-gray-100">
        <div className="flex items-center justify-center mb-4">
          {[...Array(5)].map((star, index) => {
            const currentRate = index + 1;
            return (
              <label key={index} className="cursor-pointer">
                <input
                  type="radio"
                  name="rate"
                  value={currentRate}
                  onClick={() => setRating(currentRate)}
                  className="hidden"
                />
                <FaStar
                  size={30}
                  color={currentRate <= rating ? "orange" : "grey"}
                  className="mr-2"
                />
              </label>
            );
          })}
        </div>
        <textarea
          value={comment}
          placeholder="Yorumunuzu Yazınız..."
          onChange={(e) => onInputChange(e)}
          className="w-full h-24 p-3 mb-4 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>
        <button
          onClick={onSubmit}
          className="bg-slate-500  text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-200"
        >
          Gönder
        </button>
      </div>
      <div className="divide-y divide-gray-200">
        {result.map((comment, index) => (
          <div key={index} className="py-4">
            <div className="flex items-center">{renderStars(comment.rating)}</div>
            <p className="text-gray-800">Yorum: {comment.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StarRating;
