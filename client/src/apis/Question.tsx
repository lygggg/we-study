import axios from "axios";

export const getQuestion = async ({ category }): Promise<any> => {
  try {
    const { data } = await axios.get(
      `${import.meta.env.VITE_APP_API}/quiz` + `?category=${category}`,
    );
    return data;
  } catch (e) {
    // if (confirm("retry ")) {
    //   return getQuestion();
    // }
    // throw e;
  }
};

export const getQuestionCount = async (): Promise<any> => {
  try {
    const { data } = await axios.get(
      `${import.meta.env.VITE_APP_API}/quiz/count`,
    );
    return data;
  } catch (e) {
    // if (confirm("retry ")) {
    //   return getQuestion();
    // }
    // throw e;
  }
};

export const CreateQuestion = async (params): Promise<any> => {
  try {
    const { data } = await axios.post(
      `${import.meta.env.VITE_APP_API}/quiz`,
      params,
    );
    return data;
  } catch (e) {
    // if (confirm("retry ")) {
    //   return getQuestion();
    // }
    // throw e;
  }
};
