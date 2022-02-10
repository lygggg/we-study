import { useState } from "react";
import styled from "styled-components";
import SolveModal from "./Modals/SolveModal";

const Question = ({ question }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <Description onClick={() => setShowModal(true)}>
        <Item>Q.{question.quizText}</Item>
        <Item>제출자:{question.user[0].name}</Item>
      </Description>
      <SolveModal
        open={showModal}
        question={question}
        onClose={() => setShowModal(false)}
      />
    </>
  );
};

const Description = styled.div`
  font-size: 25px;
`;

const Item = styled.div`
  margin-top: 12px;
`;

export default Question;
