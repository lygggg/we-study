import { atom } from "recoil";

export const searchLengthState = atom<number>({
  key: "searchLengthState",
  default: 0 as number,
});

export const searchPage = atom<number>({
  key: "searchPageState",
  default: 0 as number,
});
