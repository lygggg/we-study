import { getSearch as apiGetSearch } from "../apis/Search";

export const getSearch = async (query) => {
  try {
    return await apiGetSearch(query);
  } catch (e) {
    alert(e);
  }
};
