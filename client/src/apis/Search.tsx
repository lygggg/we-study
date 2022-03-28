import axios from "axios";

interface Response {
  length: number | ((currVal: number) => number);
  data: number;
}

export const getSearch = async (query, pageNumber) => {
  const { data } = await axios.get(
    `${import.meta.env.VITE_APP_API}/search` +
      `?query=${query}&page=${pageNumber}`,
  );
  return data;
};
