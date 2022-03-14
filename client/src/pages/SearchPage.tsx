import React from "react";
import { useRecoilValue } from "recoil";
import { quizListState } from "../recoilState/quizList";
import QuizLayout from "../components/layouts/QuizLayout";

const SearchPage = () => {
  const quizList = useRecoilValue(quizListState);
  return (
    <div>
      <QuizLayout quizList={quizList} />
    </div>
  );
};

export default SearchPage;
