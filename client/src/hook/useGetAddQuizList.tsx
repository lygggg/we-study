import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { getUserAddQuizs } from "../apis/Quiz";
import { Quiz } from "../models/quiz";
import { quizListState } from "../recoilState/quizList";
import { useMe } from "./useMe";

interface UseQuizsOptions {
  onError?: (error: any) => void;
}

export const useGetAddQuizList = ({ onError }: UseQuizsOptions = {}) => {
  const [quizList, setQuizList] = useRecoilState<Quiz[]>(quizListState);
  const [quizsLength, setQuizsLength] = useState(0);
  const user = useMe();

  const fetchQuizs = async () => {
    try {
      const data = await getUserAddQuizs();
      setQuizList(data.quizs.quizs);
      setQuizsLength(data.quizs.length);
      onError?.(null);
    } catch (e) {
      onError?.(e);
    }
  };

  useEffect(() => {
    if (!user) return;
    fetchQuizs();
  }, [user?._id]);

  return { quizList, quizsLength };
};
