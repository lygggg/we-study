import { signUpUser as apiSignUpUser } from "../apis/SignUp";

export const signUpUser = async (params) => {
  return await apiSignUpUser(params);
};
