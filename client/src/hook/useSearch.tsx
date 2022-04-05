import { useSearchParams } from "react-router-dom";
import { getSearch } from "../services/Search";
import { useQuery } from "react-query";

export const searchKey = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query");
  return ["quizs", "search", query, searchParams.get("page")];
};

export const useSearch = ({ page, onError }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query");
  const { data } = useQuery(searchKey(), {
    queryFn: () => getSearch(query, page),
    suspense: true,
  });

  return data;
};
