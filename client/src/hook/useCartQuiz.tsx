import { useEffect, useState } from "react";
import { getQuizCart } from "../apis/QuizCart";
import { Quiz } from "../models/quiz";
import { useMe } from "./useMe";
import { removeQuizCart } from "../services/QuizCart";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { likeQuizState } from "../recoilState/like";
import { createQuizCart } from "../services/QuizCart";

interface UseQuizsOptions {
  onError?: (error: any) => void;
}

export const useCartQuizList = ({ onError }: UseQuizsOptions = {}) => {
  const [quizList, setQuizList] = useState<Quiz[] | undefined>();
  const cartQuiz = useRecoilValue(likeQuizState);
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
  }, [user?._id, cartQuiz]);

  return quizList;
};

export const useRemoveCartQuiz = (quizId: string) => {
  const setLikeQuiz = useSetRecoilState<string>(likeQuizState);

  const removeQuiz = async () => {
    await removeQuizCart(quizId);
    setLikeQuiz(quizId);
  };

  return removeQuiz;
};

export const useCreateQuizCart = (quizId) => {
  const setLikeQuiz = useSetRecoilState<string>(likeQuizState);

  const likeQuiz = async () => {
    try {
      await createQuizCart({ quizId: quizId });
      setLikeQuiz(quizId);
    } catch (e) {
      alert("이미 소장한 퀴즈입니다.");
    }
  };

  return likeQuiz;
};
