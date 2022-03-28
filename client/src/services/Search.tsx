import { getSearch as apiGetSearch } from "../apis/Search";

export const getSearch = async (query, page) => {
  return await apiGetSearch(query, page);
};
