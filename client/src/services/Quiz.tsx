import {
  getQuiz as apiGetQuiz,
  getQuizCount as apiGetQuizCount,
  getUserAddQuiz as apiGetUserAddQuiz,
  createQuiz as apiCreateQuiz,
  removeQuiz as apiRemoveQuizCart,
  updateQuiz as apiUpdateQuizCart,
} from "../apis/Quiz";

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
