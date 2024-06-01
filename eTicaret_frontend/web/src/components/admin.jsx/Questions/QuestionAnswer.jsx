import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

export const QuestionAnswer = () => {
  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    loadQuestions();
  }, []);

  const loadQuestions = async () => {
    try {
      const result = await axios.get("http://localhost:8080/questions");
      setQuestions(result.data);
    } catch (error) {
      console.error("Sorular yüklenirken hata oluştu:", error);
    }
  };
  return (
    <div className="container mx-auto px-4 py-4">
      <table className="table-auto w-full text-center bg-gray-50">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2">Product Id</th>
            <th className="px-4 py-2">Question</th>
            <th className="px-4 py-2">Answer</th>
          </tr>
        </thead>
        <tbody className="">
          {questions.map((question) => (
            <tr key={question.id}>
              <td className="border px-4 py-2">{question.urun_id}</td>
              <td className="border px-4 py-2">{question.question}</td>
              <td className="border px-4 py-2">
                <Link
                  to={`/answer/${question.id}`}
                  className="bg-slate-500 text-white font-bold py-2 px-4 rounded mr-2"
                >
                  Answer
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default QuestionAnswer;
