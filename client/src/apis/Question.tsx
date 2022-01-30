import axios from "axios";
import QuestionStore from "../stores/QuestionStore";

export const getQuestion = async (): Promise<any> => {
  try {
    const { data } = await QuestionStore.getQuestions;
    return data;
  } catch (e) {
    if (confirm("retry ")) {
      return getQuestion();
    }
    throw e;
  }
};
