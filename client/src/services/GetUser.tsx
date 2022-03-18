import { getUser as apiGetUser } from "../apis/GetUser";

export const getUser = async () => {
  return await apiGetUser();
};
