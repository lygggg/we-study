import React, { useState } from "react";
import styled from "styled-components";
import QuestionLayout from "../components/layouts/QuestionLayout";
import GetError from "../errorComponent/GetError";
import { useQuestions } from "../hook/useQuestions";

const QuestionPage = () => {
  const [error, setError] = useState();
  const questionList = useQuestions({
    onError: setError,
  });

  return (
    <>
      <Container>
        {!!error ? (
          <GetError />
        ) : (
          <>
            <QuestionLayout questionList={questionList} />
          </>
        )}
      </Container>
    </>
  );
};

const Container = styled.div`
  margin-top: 60px;
`;

export default QuestionPage;
