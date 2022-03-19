import React, { useState } from "react";
import styled from "styled-components";
import QuizLayout from "../components/layouts/QuizLayout";
import GetError from "../errorComponent/GetError";
import { useQuizs } from "../hook/useQuizs";

const QuizPage = () => {
  const [error, setError] = useState();
  const { quizList, quizsLength } = useQuizs({
    onError: setError,
  });

  return (
    <>
      <Container>
        {!!error ? (
          <GetError />
        ) : (
          <>
            <QuizLayout quizList={quizList} quizLength={quizsLength} />
          </>
        )}
      </Container>
    </>
  );
};

const Container = styled.div`
  margin-top: 60px;
`;

export default QuizPage;
