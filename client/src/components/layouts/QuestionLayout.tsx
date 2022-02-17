import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useMe } from "../../hook/useMe";
import Question from "../items/QuestionItem";
import SolveModal from "../modals/SolveModal";
import Info from "./Info";

function QuestionLayout({ questionList }) {
  const user = useMe();
  const navigateTo = useNavigate();
  const [activeQuestion, setActiveQuestion] = useState();
  const onClickModal = (question: any) => {
    if (!Object.keys(user).length) {
      navigateTo("/login");
    }
    setActiveQuestion(question);
  };

  return (
    <>
      <Container>
        <QuestionContainer>
          {questionList.length > 0 ? (
            <>
              {questionList.map((question) => (
                <Inner
                  key={question._id}
                  onClick={() => onClickModal(question)}
                >
                  <QuestionCotainer>
                    <Question question={question}></Question>
                  </QuestionCotainer>
                </Inner>
              ))}
            </>
          ) : (
            <Empty>아무런 값도 찾지 못했습니다.</Empty>
          )}
        </QuestionContainer>
        {!!Object.keys(user).length && <Info />}
      </Container>

      {activeQuestion && (
        <SolveModal
          open
          question={activeQuestion}
          onClose={() => setActiveQuestion(null)}
        />
      )}
    </>
  );
}

const QuestionContainer = styled.div`
  padding-right: 1.5rem;
`;
const Empty = styled.div`
  height: 400px;
  width: 800px;
  margin-top: 20px;
  border: 0.0625rem solid #d7e2eb;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
`;

const QuestionCotainer = styled.div`
  display: flex;
`;
const Container = styled.div`
  margin-top: 60px;
  box-sizing: border-box;
  display: flex;
  place-content: center;
`;

const Inner = styled.div`
  width: 800px;
  margin-top: 20px;
  border: 0.0625rem solid #d7e2eb;
  padding: 1rem;
`;

export default QuestionLayout;
