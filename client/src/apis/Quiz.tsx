import axios from "axios";

export const getQuiz = async ({ category }): Promise<any> => {
  const { data } = await axios.get(
    `${import.meta.env.VITE_APP_API}/quiz` + `?category=${category}`,
  );
  return data;
};

export const getQuizCount = async (): Promise<any> => {
  const { data } = await axios.get(
    `${import.meta.env.VITE_APP_API}/quiz/count`,
  );
  return data;
};

export const getUserAddQuiz = async (): Promise<any> => {
  const { data } = await axios.get(
    `${import.meta.env.VITE_APP_API}/quiz/addlist`,
  );
  return data;
};

export const createQuiz = async (params): Promise<any> => {
  try {
    const { data } = await axios.post(
      `${import.meta.env.VITE_APP_API}/quiz`,
      params,
    );
    return data;
  } catch (e) {
    alert(e);
  }
  return null;
};
