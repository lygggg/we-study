import { atom } from "recoil";
import { getUser } from "../apis/Login";
import { User } from "../models/user";

export const userState = atom<User>({
  key: "userState",
  default: {} as User,
});

export const isLoggedInState = atom<boolean>({
  key: "isLoggedIn",
  default: localStorage.getItem("isLoggedIn") === "true",
});
