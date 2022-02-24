import { useRecoilValue, useSetRecoilState } from "recoil";
import { getUser } from "../apis/Login";
import { isLoggedInState, userState } from "../recoilState/user";
import { User } from "../models/user";

export const useMe = () => {
  const user = useRecoilValue<User>(userState);
  if (!!Object.keys(user).length) {
    return user;
  }
  return null;
};

export const useIsLoggedIn = () => {
  const isLoggedIn = useRecoilValue<boolean>(isLoggedInState);
  return isLoggedIn;
};

export const useRefreshMe = () => {
  const setUser = useSetRecoilState(userState);

  return async () => {
    try {
      const data = await getUser();
      if (data.user) {
        setUser(data.user);
      }
    } catch {
      alert("로그인에 실패하셨습니다.");
    }
  };
};
