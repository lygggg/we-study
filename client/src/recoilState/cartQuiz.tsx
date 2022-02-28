import { atom } from "recoil";

export const cartQuizState = atom<string>({
  key: "cartQuizState",
  default: "" as string,
});
