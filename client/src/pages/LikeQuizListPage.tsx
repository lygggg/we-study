import React, { useState } from "react";
import styled from "styled-components";
import QuizLayout from "../components/layouts/QuizLayout";
import GetError from "../errorComponent/GetError";
import { useLikeQuizList } from "../hook/useLikeQuiz";

const LikeQuizListPage = () => {
  const [error, setError] = useState();
  const { quizList, quizsLength } = useLikeQuizList({
    onError: setError,
  });

  return (
    <>
      <Container>
        {!!error ? (
          <GetError />
        ) : (
          <>
            <QuizLayout
              quizList={quizList}
              quizLength={quizsLength}
              quizType={"favorite"}
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
