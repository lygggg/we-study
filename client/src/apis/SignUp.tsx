import axios from "axios";

export const signUpUser = async (params): Promise<any> => {
  try {
    const { data } = await axios.post(
      `${import.meta.env.VITE_APP_API}/auth/signup`,
      params,
    );
    return data;
  } catch (e) {
    alert(e);
  }
};
