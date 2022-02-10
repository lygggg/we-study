import axios from "axios";

export const getUser = async (email): Promise<any> => {
  try {
    const { data } = await axios.post(
      `${import.meta.env.VITE_APP_API}/auth/login`,
      { email },
    );
    return data;
  } catch (e) {
    alert(e);
  }
};
