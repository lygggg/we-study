import {
  getQuizs as apiGetQuiz,
  getUserAddQuiz as apiGetUserAddQuiz,
  createQuiz as apiCreateQuiz,
  removeQuiz as apiRemoveLikeQuiz,
  updateQuiz as apiUpdateLikeQuiz,
} from "../apis/Quiz";

export const getQuizs = async ({ category }) => {
  return await apiGetQuiz({ category });
};

export const getUserAddQuiz = async () => {
  return await apiGetUserAddQuiz();
};

export const createQuiz = async (params) => {
  return await apiCreateQuiz(params);
};

export const removeQuiz = async (quizId) => {
  return await apiRemoveLikeQuiz(quizId);
};

export const updateQuiz = async (params) => {
  return await apiUpdateLikeQuiz(params);
};
