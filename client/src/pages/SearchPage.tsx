import React from "react";
import { useRecoilValue } from "recoil";
import { quizListState } from "../recoilState/quizList";
import QuizLayout from "../components/layouts/QuizLayout";
import { searchLengthState } from "../recoilState/searchLength";

const SearchPage = () => {
  const quizList = useRecoilValue(quizListState);
  const quizLenth = useRecoilValue(searchLengthState);
  return (
    <div>
      <QuizLayout
        quizList={quizList}
        quizLength={quizLenth}
        quizType={"search"}
      />
    </div>
  );
};

export default SearchPage;
