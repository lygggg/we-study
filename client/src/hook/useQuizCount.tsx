import { useEffect, useState } from "react";

import { getQuizCount } from "../apis/Quiz";

export const useQuizCount = () => {
  const [quizCount, setQuizCount] = useState<Number>();

  const fetchQuizs = async () => {
    try {
      const data = await getQuizCount();
      setQuizCount(data.quizs);
    } catch (e) {
      setQuizCount(0);
    }
  };

  useEffect(() => {
    fetchQuizs();
  }, []);

  return quizCount;
};
