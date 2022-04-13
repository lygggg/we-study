import axios from "axios";

export const getUser = async (): Promise<any> => {
  const { data } = await axios.get(`${import.meta.env.VITE_APP_API}/users/me`);
  return data;
};
