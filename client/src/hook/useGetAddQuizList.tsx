import { useEffect, useState } from "react";
import { getUserAddQuiz } from "../apis/Quiz";
import { Quiz } from "../models/quiz";
import { useMe } from "./useMe";

interface UseQuizsOptions {
  onError?: (error: any) => void;
}

export const useGetAddQuizList = ({ onError }: UseQuizsOptions = {}) => {
  const [quizList, setQuizList] = useState<Quiz[] | undefined>();
  const user = useMe();

  const fetchQuizs = async () => {
    try {
      const data = await getUserAddQuiz();
      setQuizList(data.quizs);
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
