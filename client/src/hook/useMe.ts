import { useRecoilValue } from "recoil";

import { userState } from "../atom/user";
import { User } from "../models/user";

export const useMe = () => {
  return useRecoilValue<User>(userState);
};
