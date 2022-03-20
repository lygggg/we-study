import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { getSearch } from "../services/Search";
import { quizListState } from "../recoilState/quizList";
import { searchLengthState } from "../recoilState/searchLength";

export const useSearch = () => {
  const navigateTo = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const setSearch = useSetRecoilState(quizListState);
  const setSearchLength = useSetRecoilState(searchLengthState);
  const query = searchParams.get("query");

  const onSearch = async (query: string) => {
    let data = await getSearch(query);
    // @ts-ignore
    setSearch(data.quizs);
    setSearchLength(data.length);
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
