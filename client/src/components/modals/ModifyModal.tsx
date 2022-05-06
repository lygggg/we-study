import React, { useState, useRef } from "react";
import Popup from "reactjs-popup";
import styled from "styled-components";
import { useUpdateQuiz } from "../../hook/useQuizs";

const ModifyModal = ({ onClick, modalRef, quiz }) => {
  const [quizText, setQuizText] = useState<string>(quiz.quizText);
  const [answerText, setAnswerText] = useState<string>(quiz.answerText);
  const titleRef = useRef(null);
  const answerRef = useRef(null);

  const onChange = () => {
    setQuizText(titleRef.current.value);
    setAnswerText(answerRef.current.value);
  };

  const modifyQuiz = useUpdateQuiz({
    quizId: quiz._id,
    quizText: quizText,
    answerText: answerText,
  });
  return (
    <Popup
      modal={true}
      contentStyle={{
        width: "600px",
        height: "600px",
        backgroundColor: "#FFFFFF",
      }}
      trigger={<li className="update-quiz">수정</li>}
      onClose={onClick}
    >
      {(close: () => void) => (
        <>
          <Container ref={modalRef}>
            <TableContainer>
              <TitleTextarea
                className="quiz-body"
                placeholder="제목을 입력하세요."
                maxLength={45}
                ref={titleRef}
              />
              <AnwserTextarea
                className="quiz-answer"
                maxLength={150}
                placeholder="정답을 입력하세요."
                ref={answerRef}
              />
            </TableContainer>
            <ButtonContainer>
              <SendButton
                className="quiz-submit"
                onClick={async () => {
                  await onChange();
                  modifyQuiz.mutate();
                  close();
                }}
              >
                확인
              </SendButton>
            </ButtonContainer>
          </Container>
        </>
      )}
    </Popup>
  );
};

const AnwserTextarea = styled.textarea`
  height: 100%;
  width: 100%;
  font-size: 15px;
  color: white;
  background: #282c35;
`;
const TitleTextarea = styled.textarea`
  width: 100%;
  margin-bottom: 40px;
  font-size: 15px;
  color: white;
  background: #282c35;
`;

const SendButton = styled.button`
  font-size: 17px;
  height: 50px;
  width: 216px;
  background: #0c151c;
  color: #fff;
  border-radius: 4px;
  margin-bottom: 20px;
`;

const ButtonContainer = styled.div`
  text-align: center;
  margin-top: 7rem;
`;

const TableContainer = styled.div`
  height: 430px;
  padding: 20px;
  text-align: center;
`;

const Container = styled.div`
  background: #282c35;
`;

export default React.memo(ModifyModal);
