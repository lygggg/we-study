import React from "react";
import { useRecoilValue } from "recoil";
import { searchState } from "../atom/search";
import QuestionLayout from "../components/layouts/QuestionLayout";

const SearchPage = () => {
  const questionList = useRecoilValue(searchState);
  return (
    <div>
      <QuestionLayout questionList={questionList} />
    </div>
  );
};

export default SearchPage;
