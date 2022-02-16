import { getQuestion as apiGetQuestion } from "../apis/Question";
import { getQuestionCount as apiGetQuestionCount } from "../apis/Question";
import { CreateQuestion as apiCreateQuestion } from "../apis/Question";

export const getQuestion = async ({ category }) => {
  return await apiGetQuestion({ category });
};

export const getQuestionCount = async () => {
  try {
    return await apiGetQuestionCount();
  } catch (e) {
    alert(e);
  }
};

export const CreateQuestion = async (params) => {
  try {
    return await apiCreateQuestion(params);
  } catch (e) {
    alert(e);
  }
};
