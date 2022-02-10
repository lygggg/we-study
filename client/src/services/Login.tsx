import { getUser as apiGetUser } from "../apis/Login";

export const getUser = async (email) => {
  try {
    return await apiGetUser(email);
  } catch (e) {
    alert(e);
  }
};
