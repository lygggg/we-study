import { atom } from "recoil";
import { User } from "../models/user";

export const userState = atom<User>({
  key: "userState",
  default: {} as User,
});

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
