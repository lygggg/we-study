import React from "react";
import { useRecoilValue } from "recoil";
import { searchState } from "../recoilState/search";
import QuizLayout from "../components/layouts/QuizLayout";

const SearchPage = () => {
  const quizList = useRecoilValue(searchState);
  return (
    <div>
      <QuizLayout quizList={quizList} />
    </div>
  );
};

export default SearchPage;
