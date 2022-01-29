import React, { useEffect, useState } from "react";
import styled from "styled-components";
import QuestionStore from "../stores/QuestionStore";

const QuestionList = () => {
  const [questionList, setQuestionList] = useState();

  useEffect(() => {
    setQuestionList(QuestionStore.getQuestions());
  });
  return (
    <>
      <Container>
        {questionList.map((question) => (
          <div key={question.id}>{question.description}</div>
        ))}
      </Container>
    </>
  );
};

const Container = styled.div`
  margin-top: 60px;
`;

export default QuestionList;
