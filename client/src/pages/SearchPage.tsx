import React from "react";
import { useRecoilValue } from "recoil";
import { searchState } from "../recoilState/search";
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
