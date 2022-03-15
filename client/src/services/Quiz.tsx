import { getQuiz as apiGetQuiz } from "../apis/Quiz";
import { getQuizCount as apiGetQuizCount } from "../apis/Quiz";
import { getUserAddQuiz as apiGetUserAddQuiz } from "../apis/Quiz";
import { createQuiz as apiCreateQuiz } from "../apis/Quiz";
import { removeQuiz as apiRemoveQuizCart } from "../apis/Quiz";

export const getQuiz = async ({ category }) => {
  return await apiGetQuiz({ category });
};

export const getQuizCount = async () => {
  return await apiGetQuizCount();
};

export const getUserAddQuiz = async () => {
  return await apiGetUserAddQuiz();
};

export const createQuiz = async (params) => {
  return await apiCreateQuiz(params);
};

export const removeQuiz = async (quizId) => {
  return await apiRemoveQuizCart(quizId);
};
