import { useEffect, useState } from "react";

import { getUserAddQuestion } from "../apis/Question";

interface UseQuestionsOptions {
  onError: (error: any) => void;
}

export const useGetAddQuizList = ({ onError }: UseQuestionsOptions) => {
  const [quizList, setQuizList] = useState([]);

  const fetchQuestions = async () => {
    try {
      const data = await getUserAddQuestion();
      setQuizList(data.quizs);
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
