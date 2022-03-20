import axios from "axios";

interface Response {
  length: number | ((currVal: number) => number);
  data: number;
}

export const getSearch = async (query) => {
  const { data } = await axios.get<Response>(
    `${import.meta.env.VITE_APP_API}/search` + `?query=${query}`,
  );
  return data;
};

export const getSliceSearch = async ({ query, pageNumber }): Promise<any> => {
  const { data } = await axios.get(
    `${import.meta.env.VITE_APP_API}/search` +
      `?query=${query}&page=${pageNumber}`,
  );
  return data;
};
