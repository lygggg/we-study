import axios from "axios";

export const signUpUser = async (params): Promise<boolean> => {
  try {
    await axios.post(`${import.meta.env.VITE_APP_API}/users/sign-up`, params);
    return true;
  } catch (e) {
    alert(e);
  }
  return false;
};
