import axios from "axios";

export const getQuestion = async ({ category }): Promise<any> => {
  const { data } = await axios.get(
    `${import.meta.env.VITE_APP_API}/quiz` + `?category=${category}`,
  );
  return data;
};

export const getQuestionCount = async (): Promise<any> => {
  const { data } = await axios.get(
    `${import.meta.env.VITE_APP_API}/quiz/count`,
  );
  return data;
};

export const getUserAddQuestion = async (): Promise<any> => {
  const { data } = await axios.get(
    `${import.meta.env.VITE_APP_API}/quiz/addlist`,
  );
  return data;
};

export const createQuestion = async (params): Promise<any> => {
  try {
    await axios.post(`${import.meta.env.VITE_APP_API}/quiz`, params);
    return true;
  } catch (e) {
    alert(e);
  }
  return false;
};
