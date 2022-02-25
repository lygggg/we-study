import { async } from "@firebase/util";
import { getQuestion as apiGetQuestion } from "../apis/Question";
import { getQuestionCount as apiGetQuestionCount } from "../apis/Question";
import { getUserAddQuestion as apiGetUserAddQuestion } from "../apis/Question";
import { createQuestion as apiCreateQuestion } from "../apis/Question";

export const getQuestion = async ({ category }) => {
  return await apiGetQuestion({ category });
};

export const getQuestionCount = async () => {
  return await apiGetQuestionCount();
};

export const getUserAddQuestion = async () => {
  return await apiGetUserAddQuestion();
};

export const createQuestion = async (params) => {
  return await apiCreateQuestion(params);
};
