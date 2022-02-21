import { getUser as apiGetUser } from "../apis/Login";

export const getUser = async () => {
  try {
    return await apiGetUser();
  } catch (e) {
    alert(e);
  }
};
