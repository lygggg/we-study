import { useState } from "react";
import QuizLayout from "../components/layouts/QuizLayout";
import GetError from "../errorComponent/GetError";
import { useSearch } from "../hook/useSearch";

const SearchPage = () => {
  const [error, setError] = useState();
  const [page, setPage] = useState(0);

  return (
    <div>
      {!!error ? (
        <GetError />
      ) : (
        <>
          <QuizLayout
            fetcher={() => useSearch({ page, onError: setError })}
            onChangePage={setPage}
          />
        </>
      )}
    </div>
  );
};

export default SearchPage;
