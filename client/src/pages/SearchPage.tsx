import { useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { quizListState } from "../recoilState/quizList";
import QuizLayout from "../components/layouts/QuizLayout";
import { searchLengthState, searchPage } from "../recoilState/search";
import { useSearch } from "../hook/useSearch";

const SearchPage = () => {
  const [error, setError] = useState();
  const [page, setPage] = useState(0);
  // const setPage = useSetRecoilState(searchPage);
  return (
    <div>
      <QuizLayout
        fetcher={() => useSearch({ page, onError: setError })}
        onChangePage={setPage}
      />
    </div>
  );
};

export default SearchPage;
