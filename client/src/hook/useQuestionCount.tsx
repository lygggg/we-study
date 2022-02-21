import { useEffect, useState } from "react";

import { getQuestionCount } from "../apis/Question";

export const useQuestionCount = () => {
  const [quizCount, setQuizCount] = useState<Number>();

  const fetchQuestions = async () => {
    const data = await getQuestionCount();
    setQuizCount(data.quizs);
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  return quizCount;
};
