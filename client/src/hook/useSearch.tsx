import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { getSearch } from "../services/Search";
import { searchState } from "../recoilState/search";

export const useSearch = () => {
  const navigateTo = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const setSearch = useSetRecoilState(searchState);
  const query = searchParams.get("query");

  const onSearch = async (query: string) => {
    try {
      const data = await getSearch(query);
      // @ts-ignore
      setSearch(data.quizs.hits);
    } catch (e) {
      setSearch([]);
    }
  };

  const onSeachClick = async ({ text }) => {
    navigateTo("/search/?query=" + text);
  };

  useEffect(() => {
    if (query) {
      onSearch(query);
    }
  }, [query]);

  return onSeachClick;
};
