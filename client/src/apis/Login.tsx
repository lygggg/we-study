import axios from "axios";

export const getUser = async (): Promise<any> => {
  try {
    const { data } = await axios.post(
      `${import.meta.env.VITE_APP_API}/auth/me`,
    );
    return data;
  } catch (e) {
    alert(e);
  }
};
