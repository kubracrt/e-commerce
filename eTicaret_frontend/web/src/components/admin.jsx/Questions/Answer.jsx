import React, { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const Answer = () => {
  const { id } = useParams();
  const [answerText, setAnswerText] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setAnswerText(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:8080/answer/${id}`, { answerText });
      alert("Cevabınız başarıyla kaydedildi.");
      navigate("/"); 
    } catch (error) {
      console.error("İstek yapılırken hata oluştu:", error);
    }
  };

  return (
    <div className="mt-10 ">
      <h2 className="font-bold text-2xl">Soruya cevabınız:</h2>
      <form onSubmit={handleSubmit}>
        <div >
          <label htmlFor="answerText">Cevabınız:</label>
          <input
            type="text"
            className="w-6/12 mx-5 mt-10 border rounded-md shadow-sm  focus:border-slate-500"
            placeholder="Sorunun Cevabını Yazınız..."
            id="answerText"
            value={answerText}
            onChange={handleInputChange}
          />
       
        <button type="submit" className="bg-slate-500 text-white font-bold px-1 py-1 rounded ">
          Gönder
        </button>
        </div>
      </form>
    </div>
  );
};

export default Answer;
