import { useEffect, useState } from "react";
import { getQuizCart } from "../apis/QuizCart";
import { Quiz } from "../models/quiz";
import { useMe } from "./useMe";
import { removeQuizCart } from "../services/QuizCart";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { cartQuizState } from "../recoilState/cartQuiz";

interface UseQuizsOptions {
  onError?: (error: any) => void;
}

export const useCartQuizList = ({ onError }: UseQuizsOptions = {}) => {
  const [quizList, setQuizList] = useState<Quiz[] | undefined>();
  const cartQuiz = useRecoilValue(cartQuizState);
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
  }, [user, cartQuiz]);

  return quizList;
};

export const useRemoveCartQuiz = (quizId: string) => {
  const setCartQuiz = useSetRecoilState<string>(cartQuizState);
  const removeQuiz = async () => {
    await removeQuizCart(quizId);
    setCartQuiz(quizId);
  };

  return removeQuiz;
};
