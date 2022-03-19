import {
  getQuizs as apiGetQuizs,
  sliceQuizs as apiSliceQuizs,
  getUserAddQuizs as apiGetUserAddQuizs,
  getSliceAddQuizs as apiSliceAddQuizs,
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

export const getUserAddQuizs = async () => {
  return await apiGetUserAddQuizs();
};

export const getSliceAddQuizs = async (pageNumber) => {
  return await apiSliceAddQuizs(pageNumber);
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
