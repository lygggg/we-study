import axios from "axios";

export const getQuizs = async ({ category, page }): Promise<any> => {
  const { data } = await axios.get(
    `${import.meta.env.VITE_APP_API}/quizs` +
      `?category=${category}&page=${page}`,
  );
  return data;
};

export const sliceQuizs = async ({ category, page }): Promise<any> => {
  const { data } = await axios.get(
    `${import.meta.env.VITE_APP_API}/quizs` +
      `?category=${category}&page=${page}`,
  );
  return data;
};

export const getUserAddQuizs = async (pageNumber): Promise<any> => {
  const { data } = await axios.get(
    `${import.meta.env.VITE_APP_API}/quizs/me` + `?page=${pageNumber}`,
  );
  return data;
};

export const getSliceAddQuizs = async (pageNumber): Promise<any> => {
  const { data } = await axios.get(
    `${import.meta.env.VITE_APP_API}/quizs/me` + `?page=${pageNumber}`,
  );
  return data;
};

export const createQuiz = async (params): Promise<any> => {
  try {
    const { data } = await axios.post(
      `${import.meta.env.VITE_APP_API}/quizs`,
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
      `${import.meta.env.VITE_APP_API}/quizs/${quizId}`,
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
      `${import.meta.env.VITE_APP_API}/quizs`,
      params,
    );
    return data;
  } catch (e) {
    alert(e);
  }
  return false;
};
