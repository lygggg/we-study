import { getQuestion as apiGetQuestion } from "../apis/Question";
import { getQuestionCount as apiGetQuestionCount } from "../apis/Question";
import { CreateQuestion as apiCreateQuestion } from "../apis/Question";

export const getQuestion = async ({ category }) => {
  return await apiGetQuestion({ category });
};

export const getQuestionCount = async () => {
  return await apiGetQuestionCount();
};

export const CreateQuestion = async (params) => {
  return await apiCreateQuestion(params);
};
