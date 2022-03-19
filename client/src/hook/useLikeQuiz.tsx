import { useEffect, useState } from "react";
import { getLikeQuiz } from "../apis/LikeQuiz";
import { Quiz } from "../models/quiz";
import { useMe } from "./useMe";
import { removeLikeQuiz } from "../services/LikeQuiz";
import { useRecoilState } from "recoil";
import { createLikeQuiz } from "../services/LikeQuiz";
import { quizListState } from "../recoilState/quizList";

interface UseQuizsOptions {
  onError?: (error: any) => void;
}

export const useLikeQuizList = ({ onError }: UseQuizsOptions = {}) => {
  const [quizList, setQuizList] = useRecoilState<Quiz[]>(quizListState);
  const [quizsLength, setQuizsLength] = useState(0);
  const user = useMe();

  const fetchQuizs = async () => {
    try {
      const data = await getLikeQuiz();
      setQuizList(data.quizs);
      setQuizsLength(data.length);
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

export const useRemoveLikeQuiz = (quizId: string) => {
  const removeQuiz = async () => {
    await removeLikeQuiz(quizId);
  };

  return removeQuiz;
};

export const useCreateLikeQuiz = (quizId) => {
  const likeQuiz = async () => {
    try {
      await createLikeQuiz({ quizId: quizId });
    } catch (e) {
      alert("이미 소장한 퀴즈입니다.");
    }
  };

  return likeQuiz;
};
