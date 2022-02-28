import { useEffect, useState } from "react";
import { getQuizCart } from "../apis/QuizCart";
import { Quiz } from "../models/quiz";
import { useMe } from "./useMe";

interface UseQuizsOptions {
  onError?: (error: any) => void;
}

export const useCartQuizList = ({ onError }: UseQuizsOptions = {}) => {
  const [quizList, setQuizList] = useState<Quiz[] | undefined>();
  const user = useMe();

  const fetchQuizs = async () => {
    try {
      const data = await getQuizCart();
      setQuizList(data.quizCart);
      onError?.(null);
    } catch (e) {
      onError?.(e);
    }
  };

  useEffect(() => {
    if (!user) return;
    fetchQuizs();
  }, [user]);

  return quizList;
};
