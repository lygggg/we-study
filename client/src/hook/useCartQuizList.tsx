import { useEffect, useState } from "react";

import { getQuizCart } from "../apis/QuizCart";

interface UseQuizsOptions {
  onError: (error: any) => void;
}

export const useCartQuizList = ({ onError }: UseQuizsOptions) => {
  const [quizList, setQuizList] = useState([]);

  const fetchQuizs = async () => {
    try {
      const data = await getQuizCart();
      setQuizList(data.quizCart.map((e) => e.quiz));
      onError(null);
    } catch (e) {
      onError(e);
    }
  };

  useEffect(() => {
    fetchQuizs();
  }, []);

  return quizList;
};
