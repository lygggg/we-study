import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { getSearch } from "../services/Search";
import { searchState } from "../atom/search";

export const useSearch = () => {
  const navigateTo = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const setSearch = useSetRecoilState(searchState);

  const onSearch = async (query: string) => {
    const data = await getSearch(query);
    setSearch(data.quizs.hits);
  };

  const onSeachClick = async ({ text }) => {
    navigateTo("/search/?query=" + text);
  };

  useEffect(() => {
    const query = searchParams.get("query");
    if (query) {
      onSearch(query);
    }
  }, [searchParams.get("query")]);

  return onSeachClick;
};