import {
  createQuizCart as apiCreateQuizCart,
  getQuizCart as apiGetQuizCart,
  removeQuizCart as apiRemoveQuizCart,
} from "../apis/QuizCart";

export const createQuizCart = async (params) => {
  return await apiCreateQuizCart(params);
};

export const getQuizCart = async () => {
  return await apiGetQuizCart();
};

export const removeQuizCart = async (quizId) => {
  return await apiRemoveQuizCart(quizId);
};
