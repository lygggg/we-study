import { getUser as apiGetUser } from "../apis/Login";

export const getUser = async () => {
  return await apiGetUser();
};
