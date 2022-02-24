import axios from "axios";

interface Response {
  data: number;
}

export const getSearch = async (query) => {
  const { data } = await axios.get<Response>(
    `${import.meta.env.VITE_APP_API}/search` + `?query=${query}`,
  );
  return data;
};
