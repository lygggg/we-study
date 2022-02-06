import { signUpUser as apiSignUpUser } from "../apis/SignUp";

export const signUpUser = async (params) => {
  try {
    return await apiSignUpUser(params);
  } catch (e) {
    alert(e);
  }
};
