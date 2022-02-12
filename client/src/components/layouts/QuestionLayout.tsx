import React, { useState } from "react";
import styled from "styled-components";
import Question from "../items/QuestionItem";
import SolveModal from "../modals/SolveModal";
import Info from "../../components/Info";

function QuestionLayout({ questionList }) {
  const [showModal, setShowModal] = useState(false);
  const onClickModal = () => {
    setShowModal(true);
  };
  return (
    <>
      <Container>
        <QuestionContainer>
          {questionList.length > 0 ? (
            <>
              {questionList.map((question) => (
                <Inner key={question._id} onClick={onClickModal}>
                  <QuestionCotainer>
                    <Question question={question}></Question>
                  </QuestionCotainer>

                  <SolveModal
                    open={showModal}
                    question={question}
                    onClose={() => setShowModal(false)}
                  />
                </Inner>
              ))}
            </>
          ) : (
            <Empty>아무런 값도 찾지 못했습니다.</Empty>
          )}
        </QuestionContainer>
        <Info />
      </Container>
    </>
  );
}

const QuestionContainer = styled.div``;
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
  justify-content: space-between;
  display: flex;
`;

const Inner = styled.div`
  width: 800px;
  margin-top: 20px;
  border: 0.0625rem solid #d7e2eb;
  padding: 1rem;
  display: flex;
  align-items: center;
`;

export default QuestionLayout;
