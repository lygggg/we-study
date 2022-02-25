import React, { useState } from "react";
import styled from "styled-components";
import QuizLayout from "../components/layouts/QuizLayout";
import GetError from "../errorComponent/GetError";
import { useGetAddQuizList } from "../hook/useGetAddQuizList";

const AddQuizListPage = () => {
  const [error, setError] = useState();
  const quizList = useGetAddQuizList({
    onError: setError,
  });

  return (
    <>
      <Container>
        {!!error ? (
          <GetError />
        ) : (
          <>
            <QuizLayout quizList={quizList} />
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
