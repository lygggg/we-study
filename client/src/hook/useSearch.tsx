import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { getSearch } from "../services/Search";
import { quizListState } from "../recoilState/quizList";
import { searchLengthState, searchPage } from "../recoilState/search";

export const useSearch = () => {
  const navigateTo = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const setSearch = useSetRecoilState(quizListState);
  const setSearchTotalCount = useSetRecoilState(searchLengthState);
  const page = useRecoilValue(searchPage);
  const query = searchParams.get("query");

  const onSearch = async (query: string) => {
    let data = await getSearch(query, page);
    // @ts-ignore
    setSearch(data.quizs);
    setSearchTotalCount(data.length);
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
