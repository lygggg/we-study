import { useEffect, useState } from "react";

import { getQuestionCount } from "../apis/Question";

export const useQuestionCount = () => {
  const [quizCount, setQuizCount] = useState<Number>();

  const fetchQuestions = async () => {
    try {
      const data = await getQuestionCount();
      setQuizCount(data.quizs);
    } catch (e) {
      setQuizCount(0);
    }
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  return quizCount;
};
