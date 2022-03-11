import { atom } from "recoil";

export const likeQuizState = atom<string>({
  key: "likeQuizState",
  default: "" as string,
});
