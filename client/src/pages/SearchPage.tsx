import { useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { quizListState } from "../recoilState/quizList";
import QuizLayout from "../components/layouts/QuizLayout";
import { searchLengthState, searchPage } from "../recoilState/search";

const SearchPage = () => {
  const quizList = useRecoilValue(quizListState);
  const setPage = useSetRecoilState(searchPage);
  const totalCount = useRecoilValue(searchLengthState);
  return (
    <div>
      <QuizLayout
        quizList={quizList}
        totalCount={totalCount}
        onChangePage={setPage}
      />
    </div>
  );
};

export default SearchPage;
