import {
  getQuizs as apiGetQuizs,
  sliceQuizs as apiSliceQuizs,
  getUserAddQuiz as apiGetUserAddQuiz,
  createQuiz as apiCreateQuiz,
  removeQuiz as apiRemoveLikeQuiz,
  updateQuiz as apiUpdateLikeQuiz,
} from "../apis/Quiz";

export const getQuizs = async ({ category }) => {
  return await apiGetQuizs({ category });
};

export const getSliceQuizs = async ({ category, pageNumber }) => {
  return await apiSliceQuizs({ category, pageNumber });
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
