import { async } from "@firebase/util";
import axios from "axios";


export const getQuizCart = async () => {
  const { data } = await axios.get(`${import.meta.env.VITE_APP_API}/quizcart`);
  return data;
};
