import { getQuestion as apiGetQuestion } from "../apis/Question";

export const getQuestion = async () => {
  try {
    return await apiGetQuestion();
  } catch (e) {
    alert(e);
  }
};
