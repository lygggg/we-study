import { getQuestion as apiGetQuestion } from "../apis/Question";
import { getQuestionCount as apiGetQuestionCount } from "../apis/Question";

export const getQuestion = async ({ category }) => {
  try {
    return await apiGetQuestion({ category });
  } catch (e) {
    alert(e);
  }
};

export const getQuestionCount = async () => {
  try {
    return await apiGetQuestionCount();
  } catch (e) {
    alert(e);
  }
};
