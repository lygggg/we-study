import { useState } from "react";
import styled from "styled-components";
import QuizLayout from "../components/layouts/QuizLayout";
import GetError from "../errorComponent/GetError";
import { withSuspense } from "../hocs";
import { useQuizs } from "../hook/useQuizs";

const QuizPage = () => {
  const [error, setError] = useState();
  const [page, setPage] = useState(0);

  return (
    <>
      <Container>
        {!!error ? (
          <GetError />
        ) : (
          <>
            <QuizLayout
              fetcher={() =>
                useQuizs({
                  page,
                  onError: setError,
                })
              }
              onChangePage={setPage}
            />
          </>
        )}
      </Container>
    </>
  );
};

const Container = styled.div`
  margin-top: 60px;
`;

export default withSuspense(QuizPage, <div>?asd</div>);
