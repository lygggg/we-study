import { getQuestion as apiGetQuestion } from "../apis/Question";

export const getQuestion = async ({ category }) => {
  try {
    return await apiGetQuestion({ category });
  } catch (e) {
    alert(e);
  }
};
