import { getSearch as apiGetSearch } from "../apis/Search";

export const getSearch = async (query) => {
  return await apiGetSearch(query);
};
