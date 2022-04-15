import { atom } from "recoil";

export const isLoggedInState = atom<boolean>({
  key: "isLoggedIn",
  default: localStorage.getItem("isLoggedIn") === "true",

  effects: [
    ({ onSet }) => {
      onSet((newLoggedIn) => {
        localStorage.setItem("isLoggedIn", `${newLoggedIn}`);
      });
    },
  ],
});
