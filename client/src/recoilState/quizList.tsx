import { atom } from "recoil";
import { Quiz } from "../models/quiz";

export const quizListState = atom<Quiz[] | undefined>({
  key: "quizListState",
  default: undefined as Quiz[] | undefined,
});
