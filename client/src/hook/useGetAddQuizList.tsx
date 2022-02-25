import { useEffect, useState } from "react";

import { getUserAddQuiz } from "../apis/Quiz";

interface UseQuizsOptions {
  onError: (error: any) => void;
}

export const useGetAddQuizList = ({ onError }: UseQuizsOptions) => {
  const [quizList, setQuizList] = useState([]);

  const fetchQuizs = async () => {
    try {
      const data = await getUserAddQuiz();
      setQuizList(data.quizs);
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
