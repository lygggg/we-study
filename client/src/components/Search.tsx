import React from "react";
import { getSearch } from "../services/Search";

const SearchResult = () => {
  const onSeachClick = async (text) => {
    const data = await getSearch(text);
    console.log(data.quizs.hits);
  };

  return <div></div>;
};

export default SearchResult;
