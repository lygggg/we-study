import {
  createLikeQuiz as apiCreateLikeQuiz,
  getLikeQuiz as apiGetLikeQuiz,
  removeLikeQuiz as apiRemoveLikeQuiz,
} from "../apis/LikeQuiz";

export const createLikeQuiz = async (params) => {
  return await apiCreateLikeQuiz(params);
};

export const getLikeQuiz = async (pageNumber) => {
  return await apiGetLikeQuiz(pageNumber);
};

export const removeLikeQuiz = async (quizId) => {
  return await apiRemoveLikeQuiz(quizId);
};
