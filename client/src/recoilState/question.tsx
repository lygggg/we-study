import { atom } from "recoil";

export const questionState = atom<string>({
  key: "questionState",
  default: "" as string,
});
