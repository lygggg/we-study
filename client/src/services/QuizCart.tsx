import { async } from "@firebase/util";
import { createQuizCart as apiCreateQuizCart } from "../apis/QuizCart";
import { getQuizCart as apiGetQuizCart } from "../apis/QuizCart";

export const createQuizCart = async (params) => {
  return await apiCreateQuizCart(params);
};

export const getQuizCart = async () => {
  return await apiGetQuizCart();
};
