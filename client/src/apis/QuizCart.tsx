import { async } from "@firebase/util";
import axios from "axios";
import { Quiz } from "../models/quiz";

export const createQuizCart = async (params): Promise<any> => {
  await axios.post(`${import.meta.env.VITE_APP_API}/quizcart`, params);
  return true;
};

export const getQuizCart = async () => {
  const { data } = await axios.get(`${import.meta.env.VITE_APP_API}/quizcart`);
  return data as { quizCart: Quiz[] };
};
