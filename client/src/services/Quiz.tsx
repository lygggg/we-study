import {
  getQuizs as apiGetQuizs,
  sliceQuizs as apiSliceQuizs,
  getUserAddQuizs as apiGetUserAddQuizs,
  createQuiz as apiCreateQuiz,
  removeQuiz as apiRemoveLikeQuiz,
  updateQuiz as apiUpdateLikeQuiz,
} from "../apis/Quiz";

export const getQuizs = async ({ category, page }) => {
  return await apiGetQuizs({ category, page });
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
