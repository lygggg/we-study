import { useState } from "react";
import styled from "styled-components";
import QuizLayout from "../components/layouts/QuizLayout";
import GetError from "../errorComponent/GetError";
import { useLikeQuizList } from "../hook/useLikeQuiz";

const LikeQuizListPage = () => {
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
                useLikeQuizList({
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

export default LikeQuizListPage;
