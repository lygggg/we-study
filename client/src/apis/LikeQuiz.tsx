import axios from "axios";
import { Quiz } from "../models/quiz";

export const createLikeQuiz = async (params): Promise<any> => {
  await axios.post(`${import.meta.env.VITE_APP_API}/quizs/favorite`, params);
};

export const getLikeQuiz = async () => {
  const { data } = await axios.get(
    `${import.meta.env.VITE_APP_API}/quizs/favorite`,
  );
  return data as { likeQuiz: Quiz[] };
};

export const removeLikeQuiz = async (quizId) => {
  try {
    await axios.delete(
      `${import.meta.env.VITE_APP_API}/quizs/${quizId}/favorite`,
    );
    return true;
  } catch (e) {
    alert(e);
  }
  return false;
};
