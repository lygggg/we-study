import { atom } from "recoil";

export const quizState = atom<string>({
  key: "quizState",
  default: "" as string,
});
