import { atom } from "recoil";

export const searchState = atom<Object>({
  key: "searchState",
  default: [] as Object,
});
