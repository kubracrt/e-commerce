import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Question = () => {
  let navigate = useNavigate();
  const { id: urun_id } = useParams();

  const [question, setQuestion] = useState("");
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});

  const onInputChange = (e) => {
    setQuestion(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/question", { question, urun_id });
      loadQuestions();
      setQuestion("");
    } catch (error) {
      console.error("İstek yapılırken hata oluştu:", error);
    }
  };

  const loadQuestions = async () => {
    try {
      const resultQuestion = await axios.get(`http://localhost:8080/questions/urun/${urun_id}`);
      setQuestions(resultQuestion.data);

      const answersData = {};
      for (const question of resultQuestion.data) {
        const resultAnswer = await axios.get(`http://localhost:8080/answers/${question.id}`);
        answersData[question.id] = resultAnswer.data;
      }
      setAnswers(answersData);
    } catch (error) {
      console.error("Sorular yüklenirken hata oluştu:", error);
    }
  };

  useEffect(() => {
    if (urun_id) {
      loadQuestions();
    }
  }, [urun_id]);

  return (
    <div className="p-4 m-auto rounded-lg w-11/12 shadow-lg mb-6 bg-gray-100 text-gray-800 border border-gray-300">
      <form onSubmit={onSubmit} className="mb-2"> 
        <div className="mb-2">
          <input
            type="text"
            className="w-full p-3 border rounded-lg shadow-sm"
            placeholder="Sorunuzu buraya yazın..."
            name="question"
            value={question}
            onChange={onInputChange}
          />
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-slate-500 text-white font-semibold py-2 px-6 rounded-lg shadow transition"
          >
            Sor
          </button>
        </div>
      </form>

      <div className="divide-y divide-gray-200">
        {questions.length === 0 ? (
          <p className="text-center text-gray-500">Ürün Hakkında Soru Bulunamadı...</p>
        ) : (
          questions.map((question, index) => (
            <div key={index} className="py-2 mt-2"> 
              <p className="font-semibold text-lg mb-2">{question.question}</p>
              <p className="text-gray-600 pl-4 border-l-4 border-slate-500">
                {answers[question.id]?.[0]?.answerText || "Cevap bulunamadı."}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Question;
