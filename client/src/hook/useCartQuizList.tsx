import { useEffect, useState } from "react";

import { getQuizCart } from "../apis/QuizCart";

interface UseQuestionsOptions {
  onError: (error: any) => void;
}

export const useCartQuizList = ({ onError }: UseQuestionsOptions) => {
  const [quizList, setQuizList] = useState([]);

  const fetchQuestions = async () => {
    try {
      const data = await getQuizCart();
      setQuizList(data.quizCart.map((e) => e.quiz));
      onError(null);
    } catch (e) {
      onError(e);
    }
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  return quizList;
};
