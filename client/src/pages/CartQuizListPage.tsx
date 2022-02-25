import React, { useState } from "react";
import styled from "styled-components";
import QuestionLayout from "../components/layouts/QuestionLayout";
import GetError from "../errorComponent/GetError";
import { useCartQuizList } from "../hook/useCartQuizList";

const CartQuizListPage = () => {
  const [error, setError] = useState();
  const questionList = useCartQuizList({
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

export default CartQuizListPage;
