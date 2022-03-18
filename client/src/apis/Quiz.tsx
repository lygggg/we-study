import { async } from "@firebase/util";
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

export const removeQuiz = async (quizId) => {
  try {
    const { data } = await axios.delete(
      `${import.meta.env.VITE_APP_API}/quiz/${quizId}`,
    );
    return data;
  } catch (e) {
    alert(e);
  }
  return false;
};

export const updateQuiz = async (params) => {
  try {
    const { data } = await axios.patch(
      `${import.meta.env.VITE_APP_API}/quiz`,
      params,
    );
    return data;
  } catch (e) {
    alert(e);
  }
  return false;
};
