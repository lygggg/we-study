import { createQuizCart as apiCreateQuizCart } from "../apis/QuizCart";
import { getQuizCart as apiGetQuizCart } from "../apis/QuizCart";
import { removeQuizCart as apiRemoveQuizCart } from "../apis/QuizCart";

export const createQuizCart = async (params) => {
  return await apiCreateQuizCart(params);
};

export const getQuizCart = async () => {
  return await apiGetQuizCart();
};

export const removeQuizCart = async (quizId) => {
  return await apiRemoveQuizCart(quizId);
};
