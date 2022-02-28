import { atom } from "recoil";
import { Quiz } from "../models/quiz";

export const searchState = atom<Quiz[] | undefined>({
  key: "searchState",
  default: [] as Quiz[] | undefined,
});
