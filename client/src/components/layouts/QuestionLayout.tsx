import React, { useState } from "react";
import styled from "styled-components";
import Question from "../items/QuestionItem";
import SolveModal from "../modals/SolveModal";

function QuestionLayout({ questionList }) {
  const [showModal, setShowModal] = useState(false);

  const onClickModal = () => {
    setShowModal(true);
  };
  return (
    <>
      <Container>
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
      </Container>
    </>
  );
}

const QuestionCotainer = styled.div`
  display: flex;
`;
const Container = styled.div`
  margin-top: 60px;
  box-sizing: border-box;
`;

const Inner = styled.div`
  height: 100%;
  margin-top: 20px;
  border: 0.0625rem solid #d7e2eb;
  padding: 1rem;
  display: flex;
  align-items: center;
`;

export default QuestionLayout;
