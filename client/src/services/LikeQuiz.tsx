import {
  createLikeQuiz as apiCreateLikeQuiz,
  getLikeQuiz as apiGetLikeQuiz,
  removeLikeQuiz as apiRemoveLikeQuiz,
} from "../apis/LikeQuiz";

export const createLikeQuiz = async (params) => {
  return await apiCreateLikeQuiz(params);
};

export const getLikeQuiz = async (page) => {
  return await apiGetLikeQuiz(page);
};

export const removeLikeQuiz = async (quizId) => {
  return await apiRemoveLikeQuiz(quizId);
};
