import { useState } from "react";
import styled from "styled-components";
import QuizLayout from "../components/layouts/QuizLayout";
import GetError from "../errorComponent/GetError";
import { useGetAddQuizList } from "../hook/useAddQuiz";

const AddQuizListPage = () => {
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
                useGetAddQuizList({
                  page,
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

export default AddQuizListPage;
