import {
  getSearch as apiGetSearch,
  getSliceSearch as apiGetSliceSearch,
} from "../apis/Search";

export const getSearch = async (query) => {
  return await apiGetSearch(query);
};

export const getSliceSearch = async ({ query, pageNumber }) => {
  return await apiGetSliceSearch({ query, pageNumber });
};
