import {
  createLikeQuiz as apiCreateLikeQuiz,
  getSliceLikeQuizs as apiSliceLikeQuizs,
  getLikeQuiz as apiGetLikeQuiz,
  removeLikeQuiz as apiRemoveLikeQuiz,
} from "../apis/LikeQuiz";

export const createLikeQuiz = async (params) => {
  return await apiCreateLikeQuiz(params);
};

export const getLikeQuiz = async () => {
  return await apiGetLikeQuiz();
};

export const getSliceLikeQuizs = async (pageNumber) => {
  return await apiSliceLikeQuizs(pageNumber);
};

export const removeLikeQuiz = async (quizId) => {
  return await apiRemoveLikeQuiz(quizId);
};
