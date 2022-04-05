import { useRecoilValue } from "recoil";
import { useQuery } from "react-query";
import { getUser } from "../apis/GetUser";
import { isLoggedInState } from "../recoilState/user";

export const useMe = () => {
  const { data, refetch } = useQuery("users", {
    queryFn: getUser,
    suspense: true,
  });

  data.user.refetch = refetch;

  return data.user;
};

export const useIsLoggedIn = () => {
  const isLoggedIn = useRecoilValue<boolean>(isLoggedInState);
  return isLoggedIn;
};
